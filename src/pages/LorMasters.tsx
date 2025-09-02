import BlogHeaderSection from "@/components/ielts/blog-header";
import IeltsCarouselSection from "@/components/ielts/Ielts-carousel-section.tsx";
import {ieltsCarouselData} from "@/data/carousle-data.ts";
import FAQAccordion, {type FAQItem} from "@/components/study-abroad/FAQAccordion.tsx";
import WhatIsLORSection from "@/components/lor-masters/WhatIsLORSection.tsx";
import LORTypesSection from "@/components/lor-masters/LORTypesSection.tsx";
import LORSubmissionSection from "@/components/lor-masters/LORSubmissionSection.tsx";
import LorWhomToAskSection from "@/components/lor-masters/LorWhomToAskSection.tsx";
import LorIntroSection from "@/components/lor-masters/LorIntroSection.tsx";
import LorImportanceAndFormatSection from "@/components/lor-masters/LorImportanceAndFormatSection.tsx";
import CountryInfoGrid from "@/components/lor-masters/CountryInfoGrid.tsx";
import LorSampleOneSection from "@/components/lor-masters/LorSampleOneSection.tsx";
import LorSampleTwoSection from "@/components/lor-masters/LorSampleTwoSection.tsx";
import LorWritingTipsSection from "@/components/lor-masters/LorWritingTipsSection.tsx";
import LorFinalThoughtsSection from "@/components/lor-masters/LorFinalThoughtsSection.tsx";


const faqs: FAQItem[] = [
    {
        id: "faq1",
        question: "মাস্টার্স ডিগ্রির জন্য সুপারিশপত্র কিভাবে লিখবেন?",
        answer: (
            <>
                একটি কার্যকর সুপারিশপত্র লিখতে প্রথমে ছাত্রের শক্তি ও অর্জনগুলি চিহ্নিত করুন। নির্দিষ্ট উদাহরণ দিয়ে তাদের একাডেমিক ও পেশাগত দক্ষতা তুলে ধরুন এবং প্রোগ্রামের সাথে সামঞ্জস্য রেখে লিখুন।
            </>
        ),
    },
    {
        id: "faq2",
        question: "বাংলাদেশে মাস্টার্সের জন্য সুপারিশপত্র কিভাবে পাবেন?",
        answer: (
            <>
                আপনার প্রফেসর, সুপারভাইজার বা পূর্ববর্তী নিয়োগকর্তার কাছে অনুরোধ করুন। তাদেরকে আপনার একাডেমিক রেকর্ড, প্রোগ্রামের বিস্তারিত এবং ডেডলাইনের তথ্য প্রদান করুন।
            </>
        ),
    },
    {
        id: "faq3",
        question: "সুপারিশপত্র লেখার টিপস কী কী?",
        answer: (
            <>
                নির্দিষ্ট উদাহরণ ব্যবহার করুন, ছাত্রের বৃদ্ধি ও উন্নতি দেখান, পেশাদার কিন্তু আকর্ষণীয় ভাষা ব্যবহার করুন এবং প্রোগ্রামের সাথে সামঞ্জস্যপূর্ণ গুণাবলী তুলে ধরুন।
            </>
        ),
    },
    {
        id: "faq4",
        question: "সাধারণত একটি মাস্টার্স প্রোগ্রামের জন্য কতটি সুপারিশপত্র প্রয়োজন?",
        answer: (
            <>
                সাধারণত ২-৩টি সুপারিশপত্র প্রয়োজন হয়। প্রতিটি বিশ্ববিদ্যালয়ের নির্দিষ্ট প্রয়োজনীয়তা থাকতে পারে, তাই আবেদনের আগে প্রয়োজনীয়তা যাচাই করে নিন।
            </>
        ),
    },
    {
        id: "faq5",
        question: "সুপারিশপত্রের জন্য কত আগে অনুরোধ করা উচিত?",
        answer: (
            <>
                ডেডলাইনের অন্তত ৪-৬ সপ্তাহ আগে অনুরোধ করুন। এতে সুপারিশকর্তা যথেষ্ট সময় পাবেন একটি মানসম্পন্ন চিঠি প্রস্তুত করতে।
            </>
        ),
    },
];

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "ডকুমেন্ট প্রস্তুতি", path: "/study-abroad/documents"},
    {label: "LOR", path: "/study-abroad/documents/lor"}
];

export default function LorMasters() {
    return (
        <>
            <BlogHeaderSection
                title="মাস্টার্সের জন্য LOR: নমুনা সুপারিশপত্র, ফরম্যাট এবং লেখার পরামর্শ"
                updatedDate="১৩ মে, ২০২৫ / ১৬ মিনিট পড়া সময়"
                customSegments={customSegments}
            >
                {/* Lead paragraph under title */}
                <p className="mt-2 text-lg">
                    মাস্টার্সের জন্য LOR সংগ্রহ করা কি আপনার জন্য চ্যালেঞ্জিং মনে হচ্ছে?
                </p>

                {/* CTA Box — copy layout and styling from your design */}
                <div className="mt-5 border-0 rounded-2xl overflow-hidden" style={{background: "#6A55EA"}}>
                    {/* Purple header row */}
                    <div className="flex items-center justify-between px-7 pt-7 pb-5">
            <span className="text-white text-xl md:text-2xl font-bold">
                আপনার উপযুক্ত বিশ্ববিদ্যালয় খুঁজে বের করুন
            </span>
                        <span className="flex items-center justify-center w-[56px] h-[56px] bg-white rounded-full text-[#6A55EA] font-bold text-xl border-[3px] border-white">
                0%
            </span>
                    </div>
                    {/* White content card */}
                    <div className="bg-white px-7 py-7 rounded-b-2xl">
                        <div className="text-[#6A55EA] text-lg md:text-xl font-bold mb-4">
                            কোন দেশে আপনি উচ্চশিক্ষা করতে আগ্রহী?
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                            <button className="flex items-center justify-center gap-2 border border-[#a492f7] rounded-lg py-3 px-2 font-medium text-base">
                                <span>🇬🇧</span> যুক্তরাজ্য
                            </button>
                            <button className="flex items-center justify-center gap-2 border border-[#a492f7] rounded-lg py-3 px-2 font-medium text-base">
                                <span>🇺🇸</span> মার্কিন যুক্তরাষ্ট্র
                            </button>
                            <button className="flex items-center justify-center gap-2 border border-[#a492f7] rounded-lg py-3 px-2 font-medium text-base">
                                <span>🇩🇪</span> জার্মানি
                            </button>
                            <button className="flex items-center justify-center gap-2 border border-[#a492f7] rounded-lg py-3 px-2 font-medium text-base">
                                <span>🇦🇺</span> অস্ট্রেলিয়া
                            </button>
                            <button className="flex items-center justify-center gap-2 border border-[#a492f7] rounded-lg py-3 px-2 font-medium text-base">
                                <span>🇮🇪</span> আয়ারল্যান্ড
                            </button>
                            <button className="flex items-center justify-center gap-2 border border-[#a492f7] rounded-lg py-3 px-2 font-medium text-base">
                                <span>🇳🇿</span> নিউজিল্যান্ড
                            </button>
                            <button className="flex items-center justify-center gap-2 border border-[#a492f7] rounded-lg py-3 px-2 font-medium text-base">
                                <span>🇨🇦</span> কানাডা
                            </button>
                            <button className="flex items-center justify-center gap-2 border border-[#a492f7] rounded-lg py-3 px-2 font-medium text-base">
                                <span>🌍</span> অন্যান্য
                            </button>
                        </div>
                        <div className="text-[#6A55EA] text-lg md:text-xl font-bold mb-4">
                            আপনার কি বৈধ পাসপোর্ট আছে?
                        </div>
                        <div className="grid grid-cols-3 gap-3 mb-7">
                            <button className="border border-[#a492f7] rounded-lg py-3 px-2 font-medium text-base">হ্যাঁ</button>
                            <button className="border border-[#a492f7] rounded-lg py-3 px-2 font-medium text-base">আবেদন করেছেন</button>
                            <button className="border border-[#a492f7] rounded-lg py-3 px-2 font-medium text-base">না</button>
                        </div>
                        <button className="block w-full bg-[#6A55EA] text-white font-semibold text-lg py-3 rounded-lg">
                            চালিয়ে যান
                        </button>
                    </div>
                </div>
            </BlogHeaderSection>

            <IeltsCarouselSection data={ieltsCarouselData}/>
            <LorIntroSection/>
            <WhatIsLORSection/>
            <LorImportanceAndFormatSection/>
            <LORTypesSection/>
            <LorSampleOneSection/>
            <CountryInfoGrid/>
            <LorSampleTwoSection/>
            <LORSubmissionSection/>
            <LorWhomToAskSection/>
            <LorWritingTipsSection/>
            <LorFinalThoughtsSection/>
            <FAQAccordion
                title={"বেশি জিজ্ঞাসিত প্রশ্ন"}
                data={faqs}
                className={"bg-white w-full max-w-7xl p-4 rounded-xl"}
            />

        </>
    )
}
