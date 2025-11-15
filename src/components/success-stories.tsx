import { useState } from "react"
import { ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const stories = [
    {
        image: "/images/success1.webp",
        quote: "মেডেনকোটের থেকে যুক্তরাজ্য উচ্চশিক্ষার জন্য ভিসায় কি কি প্রয়োজন পরিবর্তিত হয়েছে",
    },
    {
        image: "/images/success2.webp",
        quote: "মেডেনকোট এখানে ৮৫% সফিক ভিসা সফলতা রেট আপনাজ করেছেন",
    },
    {
        image: "/images/success3.webp",
        quote: "রিলেট অনুযায়ী, বেসিকভাগ শিক্ষার্থী এখানে চিটউটর এর সহায়তায় ব্যান্ড ৭+ স্কোর করেছেন",
    },
]

export default function SuccessStoriesSection() {
    const [showMore, setShowMore] = useState(false)

    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">স্বপ্ন পূরণের গল্পগুলো</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {stories.map((story, index) => (
                            <Card
                                key={index}
                                className="bg-white p-0 border-0 shadow-lg"
                            >
                                <CardContent className="p-0 -mt-4">
                                    <div className="relative rounded-lg">
                                        <img
                                            src={story.image || "/placeholder.svg"}
                                            alt="Success story"
                                            className="w-full h-64 p-2 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-700 text-sm leading-relaxed">"{story.quote}"</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="text-center container max-w-6xl mx-auto bg-gray-100 py-8 px-6 rounded-lg">
                    <h3 className="text-gray-900 text-2xl md:text-3xl font-bold mb-6">
                        মেডেনকোট : বিদেশে উচ্চশিক্ষার জন্য আপনার বিশ্বাসযোগ্য গাইড
                    </h3>
                    <div className="text-gray-600 leading-relaxed">
                        <p className="mb-4">
                            বিদেশে উচ্চশিক্ষা এখন আর শুধু স্বপ্ন নয়, বরং বাস্তবতা তবে শুধু একটি বিশ্বাসযোগ্য গাইডেরই
                            প্রয়োজন; প্রয়োজন সঠিক তথ্য, পরিকল্পনা
                            ও সঠিক দিকনির্দেশনা। ঠিক সেখানেই মেডেনকোট হতে পারে পথপ্রদর্শক এবং অনুপ্রেরণা। ভর্তি থেকে
                            শুরু পর্যন্ত, মেডেনকোট-এর অভিজ্ঞ
                            এক্সপার্ট টিম আপনাকে গাইড করবে প্রতিটি ধাপে—যাতে আপনি সহজেই পৌঁছে যেতে পারেন আপনার কাঙ্ক্ষিত
                            লক্ষ্যে।
                        </p>
                        {showMore && (
                            <p className="mb-4">
                                আমাদের বিশেষজ্ঞ দল আপনাকে সঠিক বিশ্ববিদ্যালয় নির্বাচন, আবেদন প্রক্রিয়া, ভিসা আবেদন এবং
                                অন্যান্য সকল বিষয়ে সহায়তা প্রদান করে
                                থাকে। আমরা আপনার স্বপ্নের বিশ্ববিদ্যালয়ে ভর্তি হওয়ার জন্য প্রয়োজনীয় সকল পদক্ষেপে
                                আপনার পাশে থাকি।
                            </p>
                        )}
                    </div>
                    <Button
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 mt-4"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? "কম দেখুন" : "আরও পড়ুন"}
                        <ChevronDown
                            className={`ml-2 h-4 w-4 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}/>
                    </Button>
                </div>
            </div>
        </section>
    )
}
