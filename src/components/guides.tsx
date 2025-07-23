import { Download, GraduationCap, User, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function GuidesSection() {
    const guides = [
        {
            title: "স্কলারশিপ গাইড",
            description: "আপনি জানতে পারবেন কিভাবে আপনি আপনার স্বপ্নের বিশ্ববিদ্যালয়ে চিনতে পড়াশোনা করতে পারবেন",
            icon: GraduationCap,
            iconColor: "text-yellow-500",
            bgColor: "bg-yellow-50",
        },
        {
            title: "বিদেশে উচ্চশিক্ষা গাইড",
            description: "আপনার প্রোফাইল এবং পছন্দের ওপর ভিত্তি করে আমাদের এক্সপার্ট আপনাকে নির্বাচন করতে সহায়তা করে",
            icon: User,
            iconColor: "text-blue-500",
            bgColor: "bg-blue-50",
        },
        {
            title: "ভিসা গাইড",
            description: "আপনি জানতে পারবেন কিভাবে ভিসা ক্যাটেগরি করতে হয় এবং দি-দে তে আপনার কি প্রয়োজন",
            icon: FileText,
            iconColor: "text-green-500",
            bgColor: "bg-green-50",
        },
    ]

    return (
        <section className="bg-[#4169e1] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto">
                        বিদেশে উচ্চশিক্ষার দিকনির্দেশনার জন্য এখুনি ডাউনলোড করে ফেলুন
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {guides.map((guide, index) => (
                        <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardContent className="p-8 text-center">
                                {/* Icon */}
                                <div
                                    className={`w-16 h-16 ${guide.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                                >
                                    <guide.icon className={`h-8 w-8 ${guide.iconColor}`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-gray-900 text-xl font-bold mb-4">{guide.title}</h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-8">{guide.description}</p>

                                {/* Download Button */}
                                <Button
                                    variant="outline"
                                    size={"xl"}
                                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 bg-transparent"
                                >
                                    গাইড ডাউনলোড করুন
                                    <Download className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
