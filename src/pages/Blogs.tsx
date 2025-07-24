import {BlogSection} from "@/components/blog-section"
import {blogPosts, categories} from "@/data/blog-posts"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card.tsx";
import {ArrowLeft, ArrowRight} from "lucide-react";

export default function BlogPage() {
    const getPostsByCategory = (category: string) => {
        return blogPosts.filter((post) => post.category === category)
    }

    return (
        <div className="min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="text-center">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">আমাদের ব্লগ</h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
                        আমাদের ব্লগের মাধ্যমে আমরা শেয়ার করি বিশ্বমানের শিক্ষা ও ভিসা প্রক্রিয়া সম্পর্কিত গাইডলাইন,
                        যা
                        আপনার বিদেশ যাত্রাকে করে তুলবে সহজ এবং সফলা
                    </p>

                    <Card className={"bg-gray-50 rounded-2xl shadow-xs"}>
                        <CardContent>
                            <Button size={"xl"}>
                                সব দেখুন
                            </Button>
                            {categories.map((category) => (
                                <Button key={category} size={"xl"} variant={"ghost"} className={"font-semibold"}>
                                    {category}
                                </Button>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {categories.slice(0, -1).map((category) => (
                    <BlogSection key={category} title={category} posts={getPostsByCategory(category)}/>
                ))}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">সর্বশেষ আপডেট</h2>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                        <div className={"flex gap-4"}>
                            <Button size={"xl"} className={"rounded-full size-14"}>
                                <ArrowLeft/>
                            </Button>
                            <Button size={"xl"} className={"rounded-full size-14"}>
                                <ArrowRight/>
                            </Button>
                        </div>

                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {blogPosts
                        .filter((blog) => blog.category === "সর্বশেষ আপডেট")
                        .map((post, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm border-0 overflow-hidden">
                                <div className="relative rounded-xl">
                                    <img
                                        src={post.image || "/placeholder.svg"}
                                        alt={post.image}
                                        className="w-full h-full rounded-xl object-cover"
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                        <h3 className="text-white text-xl font-semibold mb-2">{post.title}</h3>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-white/90">{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
