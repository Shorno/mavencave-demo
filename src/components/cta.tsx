import { Button } from "@/components/ui/button"

export default function CTASection() {
    const counselorImages = [
        {
            src: "/images/expert2.jpg",
            alt: "Counselor 1",
            position: "top-left"
        },
        {
            src: "/images/expert1.jpg",
            alt: "Counselor 2",
            position: "top-right"
        },
        {
            src: "/images/expert3.jpg",
            alt: "Counselor 3",
            position: "bottom-left"
        },
        {
            src: "/images/expert4.jpeg",
            alt: "Counselor 4",
            position: "bottom-right"
        }
    ]

    return (
        <section className="bg-gray-50 py-8 md:py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="relative bg-[#4169e1] rounded-2xl py-12 md:py-16 px-6 md:px-8 overflow-hidden">

                    {/* Counselor Images - Hidden on small screens, visible on md+ */}
                    <div className="hidden md:block">
                        <div className="absolute top-8 left-8 lg:left-20 w-14 h-14 lg:w-20 lg:h-20">
                            <img
                                src={counselorImages[0].src || "/placeholder.svg"}
                                alt={counselorImages[0].alt}
                                className="w-full h-full rounded-full object-cover border-4 border-white/20"
                            />
                        </div>

                        <div className="absolute top-8 right-8 lg:right-20 w-14 h-14 lg:w-20 lg:h-20">
                            <img
                                src={counselorImages[1].src || "/placeholder.svg"}
                                alt={counselorImages[1].alt}
                                className="w-full h-full rounded-full object-cover border-4 border-white/20"
                            />
                        </div>

                        <div className="absolute bottom-8 left-8 lg:left-20 w-14 h-14 lg:w-20 lg:h-20">
                            <img
                                src={counselorImages[2].src || "/placeholder.svg"}
                                alt={counselorImages[2].alt}
                                className="w-full h-full rounded-full object-cover border-4 border-white/20"
                            />
                        </div>

                        <div className="absolute bottom-8 right-8 lg:right-20 w-14 h-14 lg:w-20 lg:h-20">
                            <img
                                src={counselorImages[3].src || "/placeholder.svg"}
                                alt={counselorImages[3].alt}
                                className="w-full h-full rounded-full object-cover border-4 border-white/20"
                            />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="text-center relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                            বিদেশে উচ্চশিক্ষার জন্য প্রস্তুত?
                        </h2>

                        <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto px-2">
                            আপনার বিদেশে উচ্চশিক্ষার যাত্রার প্রথম পদক্ষেপটি নিন এখনই! এখানে এর পরামর্শদাতা ভিসা প্রেডিকশন থেকে IELTS প্রস্তুতি,
                            আমাদের আপনাদের প্রতিটি ধাপে গাইড করবো। আপনার ভবিষ্যতের পরিকল্পনা শুরু করুন।
                        </p>

                        <Button
                            size={"xl"}
                            className="bg-white text-blue-700 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                        >
                            কাউন্সেলর এর সাথে কথা বলুন
                        </Button>
                    </div>

                    {/* Background decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-10 md:top-20 left-10 md:left-20 w-20 md:w-32 h-20 md:h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-24 md:w-40 h-24 md:h-40 bg-white rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}