import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {Plus, Send, Mic, SendHorizonal} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {Link} from "react-router";

export default function HeroSection() {
    const sampleQuestions = [
        "আমি কি বিদেশে উচ্চশিক্ষার জন্য যোগ্য?",
        "নির্দিষ্ট উচ্চশিক্ষার জন্য ন্যূনতম খরচ কত?",
        "আমি কি বিদেশে উচ্চশিক্ষার জন্য স্কলারশিপ পাবো?",
        "কোন ইউনিভার্সিটি আমার প্রোফাইলের সাথে ম্যাচ করে?",
        "বিদেশে উচ্চশিক্ষার জন্য আমার ভর্তি যোগ্যতা কেমন?",
        "অ্যাপ্লিকেশন প্রক্রিয়া",
    ]

    return (
        <div className="bg-gray-50 min-h-[calc(100dvh-97px)] py-16 md:py-0 flex items-center justify-center p-4">
            <div className="w-full mx-auto text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    বিদেশে উচ্চশিক্ষার জন্য একমাত্র সহায়কারী।
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    ভর্তি গ্রহণযোগ্যতা থেকে কলেজ আবেদন - মুহূর্তের মধ্যেই সঠিক উত্তর পেয়ে যান
                </p>

                <Card className="max-w-4xl mx-auto">
                    <CardContent className="p-4 md:p-8">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                            আমার প্রোফাইল দিয়ে আমি কোন কোন বিশ্ববিদ্যালয়ে ভর্তি হতে পারি?
                        </h2>
                        <div className="flex flex-wrap gap-3 mb-8 justify-center">
                            {sampleQuestions.map((question, index) => (
                                <button
                                    key={index}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm md:text-base text-gray-700 transition-colors border border-gray-200"
                                >
                                    {question}
                                    <Send className="w-4 h-4" />
                                </button>
                            ))}
                        </div>
                        <div className="space-y-4">
                            <div className={"flex justify-center items-center gap-2 md:gap-4"}>
                                <button className="size-10 md:size-14 border border-blue-500 justify-center items-center flex bg-gray-100 rounded-full transition-colors">
                                    <Plus className="w-6 h-6 text-gray-500" />
                                </button>
                                <div className="flex items-center gap-3 p-2 md:p-3 border border-gray-200 rounded-full flex-1">
                                    <div className={"flex flex-1"}>
                                        <Input
                                            type="text"
                                            placeholder="একটি বার্তা লিখুন"
                                            className="flex-1 border-none shadow-none focus-visible:ring-0 text-base"
                                        />
                                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                            <SendHorizonal className="w-5 h-5 text-gray-500" />
                                        </button>
                                    </div>
                                </div>
                                <button className="size-10 md:size-14  flex justify-center items-center bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
                                    <Mic className="w-6 h-6 text-white" />
                                </button>
                            </div>
                            <Button asChild size={"xl"} className="w-full text-base font-medium">
                                <Link to={"/mavencave-ai"}>
                                    মেভেনকেভ AI
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
