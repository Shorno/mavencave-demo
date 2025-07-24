import {ChevronLeft, ChevronRight, ArrowRight} from "lucide-react"
import {Button} from "@/components/ui/button"
import FourCardGrid from "@/components/four-card-grid.tsx";

const experts = [
    {
        name: "আয়রা ইসলাম",
        experience: "১০৭টি+ কেলাওয়ার",
        country: "যুক্তরাজ্য",
        flag: "🇬🇧",
        image: "/images/expert1.jpg",
    },
    {
        name: "সারা আফরিন",
        experience: "৯০৭টি+ কেলাওয়ার",
        country: "কানাডা",
        flag: "🇨🇦",
        image: "/images/expert2.jpg",
    },
    {
        name: "আলিক জামান",
        experience: "১০৭টি+ কেলাওয়ার",
        country: "অস্ট্রেলিয়া",
        flag: "🇦🇺",
        image: "/images/expert3.jpg",
    },
    {
        name: "মৌমিতা আহমেদ",
        experience: "১০৭টি+ কেলাওয়ার",
        country: "কানাডা",
        flag: "🇨🇦",
        image: "/images/expert4.jpeg",
    },
]

export default function ExpertsSection() {

    return (
        <section className="bg-[#4169e1] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-start mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-white text-3xl md:text-3xl  font-bold leading-normal">
                            আপনার আপ্লিকেশন প্রাক্রিয়াকে সহজ করে তুলতে রয়েছে আমাদের এক্সপার্ট টিম
                        </h2>
                    </div>

                    <div className="flex gap-3">
                        <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full w-12 h-12 bg-white  border-0"
                        >
                            <ChevronLeft className="h-8 w-8 text-blue-500"/>
                        </Button>
                        <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full w-12 h-12 bg-white  border-0"
                        >
                            <ChevronRight className="h-8 w-8 text-blue-500"/>
                        </Button>
                    </div>
                </div>

                <FourCardGrid items={experts}/>

                <div className="text-center">
                    <Button
                        size={"xl"}
                        variant="secondary"
                        className="bg-white text-blue-700 hover:bg-white/90 px-8 py-3 rounded-lg font-medium"
                    >
                        এখানে দেখুন
                        <ArrowRight className="ml-2 h-4 w-4"/>
                    </Button>
                </div>
            </div>
        </section>
    )
}
