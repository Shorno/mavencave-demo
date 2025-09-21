import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import CustomCarouselSection from "@/components/ielts/CustomCarouselSection.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import IeltsAllInfoTables from "@/components/ielts/all-info-table.tsx";
import FAQAccordion, {type FAQItem} from "@/components/study-abroad/FAQAccordion.tsx";
import WhatIsIeltsSection from "@/components/ielts/overview/why-ielts.tsx";
import IeltsScoreSection from "@/components/ielts/overview/IeltsScoreSection.tsx";
import IeltsExamFormatSection from "@/components/ielts/overview/IeltsExamFormatSection.tsx";
import IeltsEvaluationSection from "@/components/ielts/overview/IeltsEvaluationSection.tsx";
import IeltsCostSection from "@/components/ielts/overview/IeltsCostSection.tsx";
import IeltsWhenToTakeSection from "@/components/ielts/overview/IeltsWhenToTakeSection.tsx";
import IeltsTestCenterResultEligibilitySection
    from "@/components/ielts/overview/IeltsTestCenterResultEligibilitySection.tsx";
import IeltsBandScoreMoreInfoSection from "@/components/ielts/overview/IeltsBandScoreMoreInfoSection.tsx";
import {ieltsCarouselData} from "@/data/carousle-data.ts";


const faqs: FAQItem[] = [
    {
        id: "faq1",
        question: "IELTS পরীক্ষা কি কঠিন?",
        answer: (
            <>
                IELTS পরীক্ষা একটি আন্তর্জাতিক মানের ইংরেজি দক্ষতা পরীক্ষা। অনুশীলন, সঠিক প্রস্তুতি এবং দক্ষতা থাকলে এটি
                পাস করা কঠিন নয়। কেবলমাত্র বই পড়া নয়, মক টেস্ট ও বাস্তব অনুশীলনও জরুরি।
            </>
        ),
    },
    {
        id: "faq2",
        question: "IELTS পরীক্ষায় সর্বোচ্চ স্কোর কত?",
        answer: (
            <>
                IELTS পরীক্ষা সর্বোচ্চ ৯ ব্যান্ড স্কোরে মূল্যায়িত হয়। প্রত্যেক পরীক্ষার্থী সর্বোচ্চ ৯ স্কোর পেতে
                পারেন, যা বিশ্বজুড়ে গ্রহণযোগ্য।
            </>
        ),
    },
    {
        id: "faq3",
        question: "প্রথম চেষ্টায় কিভাবে IELTS পাস করবো?",
        answer: (
            <>
                শুরুতেই পরীক্ষার ফরম্যাট ও প্রশ্নের ধরন বুঝে নিন। রুটিন মাফিক পড়াশোনা করুন, প্রতিটি মডিউল অনুশীলন করুন
                এবং নিয়মিত মক টেস্ট দিন। দুর্বল দিক চিহ্নিত করে আলাদাভাবে বেশি প্রস্তুতি নিন।
            </>
        ),
    },
    {
        id: "faq4",
        question: "IELTS পরীক্ষার সবচেয়ে কঠিন অংশ কোনটি?",
        answer: (
            <>
                অনেকের মতে স্পিকিং এবং রাইটিং অংশ সবচেয়ে চ্যালেঞ্জিং, কারণ তাৎক্ষণিক উত্তর ও সঠিক ইংরেজি গঠনের ওপর
                মূল্যায়ন করা হয়। তবে যাঁরা বেশি রিডিং করতে কমফোর্টেবল নন, তাদের জন্য রিডিংও কঠিন হতে পারে।
            </>
        ),
    },
    {
        id: "faq5",
        question: "IELTS পরীক্ষার জন্য কি পাসপোর্ট আবশ্যক?",
        answer: (
            <>
                হ্যাঁ, IELTS পরীক্ষার জন্য একটি বৈধ পাসপোর্ট আবশ্যক এবং পরীক্ষার দিন কেন্দ্রে সঙ্গে আনতে হয়। অন্য কোনো
                পরিচয়পত্র গ্রহণযোগ্য নয়।
            </>
        ),
    },
];

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "IELTS", path: "/study-abroad/exams/ielts"}
];



export default function  IeltsOverviewPage() {
    return (
        <>

            <BlogHeaderSection
                title="TOEFL পরীক্ষা ২০২৫: তারিখ, ফি, ফলাফল, সিলেবাস ও প্যাটার্ন"
                updatedDate="২৮ এপ্রিল, ২০২৫, ০৫:৫৬"
                customSegments={customSegments}
            >
                <p>
                    আপনি কি আমেরিকা, কানাডা, অস্ট্রেলিয়া বা যুক্তরাজ্যে উচ্চশিক্ষার স্বপ্ন দেখেন? তাহলে TOEFL (Test of English as a Foreign Language) আপনার জন্য একটি গুরুত্বপূর্ণ ধাপ। এই পরীক্ষাটি বিশ্বের ১২.৫ হাজারেরও বেশি শিক্ষা প্রতিষ্ঠানে স্বীকৃত এবং আন্তর্জাতিক শিক্ষার্থীদের ইংরেজি দক্ষতা যাচাইয়ের জন্য অত্যন্ত জনপ্রিয়। ২০২৫ সালে TOEFL পরীক্ষায় বেশ কিছু গুরুত্বপূর্ণ পরিবর্তন এসেছে যা বাংলাদেশী শিক্ষার্থীদের জন্য আরও সুবিধাজনক করেছে।
                </p>
                <div className="bg-green-50 border border-green-200 rounded p-4 mt-4 flex items-start gap-2">
                    <span className="text-xl mr-2">🚀</span>
                    <div>
                        <div className="font-bold text-green-600 mb-1">সর্বশেষ আপডেট!</div>
                        <div className="text-green-800 space-y-1">
                            <div>TOEFL iBT এর সময়কাল সংক্ষিপ্ত করা হয়েছে। পরীক্ষার্থীরা এখন ২ ঘন্টায় পরীক্ষা সম্পন্ন করতে পারবেন। পরীক্ষায় একটি নতুন টেস্ট ফরম্যাটও অন্তর্ভুক্ত করা হয়েছে।</div>
                            <div>TOEFL iBT ফি এখন বৃদ্ধি পেয়ে ২৪,০০০ টাকা হয়েছে।</div>
                            <div>অস্ট্রেলিয়া সব ভিসার জন্য TOEFL স্কোর গ্রহণ করছে, যা ETS ২০২৪ সালের মে মাসে ঘোষণা করেছে।</div>
                        </div>
                    </div>
                </div>
            </BlogHeaderSection>
            <CustomCarouselSection data={ieltsCarouselData}/>
            <WhatIsIeltsSection/>
            <IeltsScoreSection/>
            <IeltsExamFormatSection/>
            <IeltsEvaluationSection/>
            <IeltsCostSection/>
            <IeltsWhenToTakeSection/>
            <IeltsTestCenterResultEligibilitySection/>
            <IeltsBandScoreMoreInfoSection/>
            <NextStepsSection/>
            <IeltsAllInfoTables/>
            <FAQAccordion
                title={"বেশি জিজ্ঞাসিত প্রশ্ন"}
                data={faqs}
                className={"bg-white w-full max-w-7xl p-4 rounded-xl"}
            />
        </>

    )
}
