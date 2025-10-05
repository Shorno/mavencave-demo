import {Hero} from "@/components/study-abroad/Hero.tsx";
import FeaturesSection from "@/components/finance/FeaturesSection.tsx";
import MavencaveFinanceSection from "@/components/finance/MavencaveFinanceSection.tsx";
import ExamTestimonials from "@/components/exams/testimonials.tsx";
import CTASection from "@/components/cta.tsx";
const stats = [
    {
        number: "৩,০০০+",
        label: "অর্থায়িত শিক্ষার্থী",
        color: "text-white"
    },
    {
        number: "২৩১+",
        label: "সহায়তাপ্রাপ্ত বিশ্ববিদ্যালয়",
        color: "text-white"
    },
    {
        number: "২৩০০+",
        label: "সহায়তাপ্রাপ্ত কোর্স",
        color: "text-white"
    },
    {
        number: "$১৭৫M",
        label: "প্রদত্ত ঋণ",
        color: "text-white"
    }
];

export default function FinancePage() {
    return (
        <>
            <div className={"bg-[#FAF8FF]"}>
                <div className={"container mx-auto px-4"}>
                    <Hero heading={"আমরা আপনার বিদেশে পড়াশোনার স্বপ্নকে অর্থায়ন করি"} image={{
                        src: "/images/finance-hero.png",
                        alt: "Finance Hero Image"
                    }}
                          description={"আমরা আপনার বিদেশে পড়াশোনার স্বপ্ন পূরণে সহায়তা করি কাস্টমাইজড আর্থিক সমাধান, সহজ লোন অপশন এবং সঠিক নির্দেশনার মাধ্যমে, যাতে বিদেশে পড়াশোনা হয় সাশ্রয়ী ও ঝামেলামুক্ত। আমাদের সহায়তায় আপনি পড়াশোনায় মনোযোগ দিতে পারবেন, আর অর্থনৈতিক বিষয়গুলো আমরা সামলে নেব।"}
                          buttons={{
                              primary: {
                                  text: 'ঋণের অফার পান',
                                  url : '/'
                              }
                          }}
                    />
                </div>
            </div>
            <div className={"px-4"}>
                <div className="bg-gradient-to-r from-purple-600 max-w-6xl mx-auto to-blue-600 py-8 px-8 rounded-2xl shadow-xl">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div className={`text-4xl lg:text-5xl xl:text-6xl font-bold ${stat.color} mb-4`}>
                                        {stat.number}
                                    </div>
                                    <div className={`text-sm lg:text-base xl:text-lg ${stat.color} opacity-90 font-medium`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <FeaturesSection/>
            <MavencaveFinanceSection/>
            <ExamTestimonials/>
            <CTASection/>
        </>

    )
}