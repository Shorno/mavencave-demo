import {useState} from "react"
import {ChevronRight, Bot} from "lucide-react"
import {Button} from "@/components/ui/button"
import type {NavigationItem} from "@/data/navigation.ts";
import {Link} from "react-router";


interface ExamLayoutProps {
    examData: NavigationItem[]
    onLinkClick?: () => void
}

export function ExamLayout({examData, onLinkClick}: ExamLayoutProps) {
    const [selectedExam, setSelectedExam] = useState(examData[0]?.label || "")

    const currentExam = examData.find((exam) => exam.label === selectedExam)

    const examDetails =
        currentExam?.dropdownItems?.find((item) => item.label.includes("পরীক্ষার বিবরণ") || item.label.includes("বিবরণ"))
            ?.dropdownItems || []

    const practiceItems = currentExam?.dropdownItems?.find((item) => item.label.includes("অনুশীলন"))?.dropdownItems || []

    const handleLinkClick = () => {
        if (onLinkClick) {
            onLinkClick()
        }
    }


    return (
        <div className="w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex h-[500px]">
                {/* Sidebar */}
                <div className="w-48 bg-gray-50 border-r border-gray-200">
                    <div className="p-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">পরীক্ষাসমূহ</h3>
                        <div className="space-y-1">
                            {examData.map((exam) => (
                                <button
                                    key={exam.label}
                                    onClick={() => setSelectedExam(exam.label)}
                                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                                        selectedExam === exam.label
                                            ? "bg-blue-100 text-blue-700 border border-blue-200"
                                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    }`}
                                >
                                    <span>{exam.label}</span>
                                    {selectedExam === exam.label && <ChevronRight className="h-4 w-4 text-blue-600"/>}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900">{selectedExam} প্রস্তুতি</h2>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                বিনামূল্যে {selectedExam} মাস্টারক্লাস →
                            </Button>
                        </div>
                    </div>

                    <div className="flex-1 flex">
                        {/* Exam Details Section */}
                        <div className="flex-1 p-6 border-r border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">পরীক্ষার বিবরণ</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {examDetails.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.href}
                                        onClick={handleLinkClick}
                                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                    >
                                        <span
                                            className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{item.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Practice Section */}
                        <div className="w-64 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">অনুশীলন</h3>
                            <div className="space-y-2">
                                {practiceItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.href}
                                        onClick={handleLinkClick}
                                        className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                                    >
                                        <span
                                            className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{item.label}</span>
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <Button size="xl"
                                        className="w-full text-white text-xs"
                                        onClick={handleLinkClick}
                                >
                                    <Link to={"/mavencave-ai"}>
                                        <div className="flex items-center justify-center space-x-2 text-lg ">
                                            <Bot className="h-4 w-4 mb-1"/>
                                            <span>মেভেনকেভ AI</span>
                                        </div>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
