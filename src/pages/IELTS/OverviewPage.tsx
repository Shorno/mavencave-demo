import BlogHeaderSection from "@/components/ielts/book-hero.tsx";
import IeltsCarouselSection from "@/components/ielts/Ielts-carousel-section.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import AllInfoTables from "@/components/ielts/all-info-table.tsx";
import FAQAccordion, {type FAQItem} from "@/components/study-abroad/FAQAccordion.tsx";
import RelatedArticlesSection from "@/components/ielts/related-articles.tsx";
import WhatIsIeltsSection from "@/components/ielts/overview/why-ielts.tsx";
import IeltsScoreSection from "@/components/ielts/overview/IeltsScoreSection.tsx";
import IeltsExamFormatSection from "@/components/ielts/overview/IeltsExamFormatSection.tsx";
import IeltsEvaluationSection from "@/components/ielts/overview/IeltsEvaluationSection.tsx";
import IeltsCostSection from "@/components/ielts/overview/IeltsCostSection.tsx";
import IeltsWhenToTakeSection from "@/components/ielts/overview/IeltsWhenToTakeSection.tsx";
import IeltsTestCenterResultEligibilitySection
    from "@/components/ielts/overview/IeltsTestCenterResultEligibilitySection.tsx";
import IeltsBandScoreMoreInfoSection from "@/components/ielts/overview/IeltsBandScoreMoreInfoSection.tsx";

const articles = [
    {
        image: "/images/blog/blog1.jpg",
        title: "বিশ্বের শীর্ষ ১০ বিশ্ববিদ্যালয়: কোথায় পড়বেন আপনি?",
        date: "১২ জুলাই, ২০২৫",
        readTime: "৫ মিনিট",
        href: "/articles/top-10-universities"
    },
    {
        image: "/images/blog/blog2.jpg",
        title: "যুক্তরাষ্ট্রের শীর্ষ বিশ্ববিদ্যালয়সমূহ ও তাদের বিশেষত্ব",
        date: "১২ জুলাই, ২০২৫",
        readTime: "৫ মিনিট",
        href: "/articles/best-us-universities"
    },
    {
        image: "/images/blog/blog3.jpg",
        title: "প্রযুক্তি শিক্ষার জন্য সেরা বিশ্ববিদ্যালয়গুলো",
        date: "১২ জুলাই, ২০২৫",
        readTime: "৫ মিনিট",
        href: "/articles/top-tech-universities"
    },
];

const ieltsCarouselData = [
    {
        image: "/images/blog/blog4.webp",
        title: "১. IELTS প্রস্তুতির বই ২০২৪-২০২৫",
        description: "IELTS পরীক্ষায় ভালো স্কোর করতে হলে, ইংরেজি ভাষায় ভালো দখল থাকা অত্যন্ত গুরুত্বপূর্ণ।",
        index: "১/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "২. IELTS প্রস্তুতির টিপস",
        description: "IELTS পরীক্ষার জন্য প্রস্তুতি নিতে আপনাকে সাহায্য করার জন্য এখানে কিছু দারুন টিপস দেয়া হলো।",
        index: "২/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "২. IELTS প্রস্তুতির টিপস",
        description: "IELTS পরীক্ষার জন্য প্রস্তুতি নিতে আপনাকে সাহায্য করার জন্য এখানে কিছু দারুন টিপস দেয়া হলো।",
        index: "২/৩",
    },
];
const faqs: FAQItem[] = [
    {
        id: "faq1",
        question: "IELTS পরীক্ষা কি কঠিন?",
        answer: (
            <>
                IELTS পরীক্ষা একটি আন্তর্জাতিক মানের ইংরেজি দক্ষতা পরীক্ষা। অনুশীলন, সঠিক প্রস্তুতি এবং দক্ষতা থাকলে এটি পাস করা কঠিন নয়। কেবলমাত্র বই পড়া নয়, মক টেস্ট ও বাস্তব অনুশীলনও জরুরি।
            </>
        ),
    },
    {
        id: "faq2",
        question: "IELTS পরীক্ষায় সর্বোচ্চ স্কোর কত?",
        answer: (
            <>
                IELTS পরীক্ষা সর্বোচ্চ ৯ ব্যান্ড স্কোরে মূল্যায়িত হয়। প্রত্যেক পরীক্ষার্থী সর্বোচ্চ ৯ স্কোর পেতে পারেন, যা বিশ্বজুড়ে গ্রহণযোগ্য।
            </>
        ),
    },
    {
        id: "faq3",
        question: "প্রথম চেষ্টায় কিভাবে IELTS পাস করবো?",
        answer: (
            <>
                শুরুতেই পরীক্ষার ফরম্যাট ও প্রশ্নের ধরন বুঝে নিন। রুটিন মাফিক পড়াশোনা করুন, প্রতিটি মডিউল অনুশীলন করুন এবং নিয়মিত মক টেস্ট দিন। দুর্বল দিক চিহ্নিত করে আলাদাভাবে বেশি প্রস্তুতি নিন।
            </>
        ),
    },
    {
        id: "faq4",
        question: "IELTS পরীক্ষার সবচেয়ে কঠিন অংশ কোনটি?",
        answer: (
            <>
                অনেকের মতে স্পিকিং এবং রাইটিং অংশ সবচেয়ে চ্যালেঞ্জিং, কারণ তাৎক্ষণিক উত্তর ও সঠিক ইংরেজি গঠনের ওপর মূল্যায়ন করা হয়। তবে যাঁরা বেশি রিডিং করতে কমফোর্টেবল নন, তাদের জন্য রিডিংও কঠিন হতে পারে।
            </>
        ),
    },
    {
        id: "faq5",
        question: "IELTS পরীক্ষার জন্য কি পাসপোর্ট আবশ্যক?",
        answer: (
            <>
                হ্যাঁ, IELTS পরীক্ষার জন্য একটি বৈধ পাসপোর্ট আবশ্যক এবং পরীক্ষার দিন কেন্দ্রে সঙ্গে আনতে হয়। অন্য কোনো পরিচয়পত্র গ্রহণযোগ্য নয়।
            </>
        ),
    },
];

const customSegments = [
    { label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad" },
    { label: "পরীক্ষাসমূহ", path: "/study-abroad/exams" },
    { label: "IELTS", path: "/study-abroad/exams/ielts" }
];
export default function IeltsOverviewPage() {
    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <BlogHeaderSection
                            title="বিদেশে উচ্চশিক্ষার জন্য আইইএলটিএস পরীক্ষা: ২০২৫ সালে সফলতার চূড়ান্ত গাইড"
                            updatedDate="২৮ এপ্রিল, ২০২৫, ০৫:৫৭"
                            customSegments={customSegments}
                        >
                            <p>
                                আপনি কি কখনো ভেবেছেন কীভাবে আপনার বিদেশে উচ্চশিক্ষার যাত্রা শুরু করবেন? সাধারণত এটি শুরু হয় একটি ইংরেজি দক্ষতা পরীক্ষার মাধ্যমে, যা যুক্তরাজ্য, যুক্তরাষ্ট্র, অস্ট্রেলিয়া, নিউজিল্যান্ড এবং আয়ারল্যান্ডের মতো জনপ্রিয় গন্তব্যগুলোর জন্য প্রয়োজনীয়। সব পরীক্ষার মধ্যে IELTS সবচেয়ে জনপ্রিয় এবং বিশ্ববিদ্যালয় ও নিয়োগকারীদের মধ্যে সবচেয়ে বেশি গ্রহণযোগ্য। নিচের আর্টিকেলে IELTS সম্পর্কে বিস্তারিত আলোচনা করা হয়েছে—যা আপনার বিদেশে পড়াশোনার স্বপ্নকে বাস্তবে রূপ দিতে সহায়তা করবে!
                            </p>
                            <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4 flex items-start gap-2">
                                <span className="text-xl mr-2">🌞</span>
                                <div>
                                    <div className="font-bold text-blue-600 mb-1">বিশাল আপডেট!!</div>
                                    <div className="text-blue-800">২০২৫ সালের মার্চ মাসে IELTS পরীক্ষার ফি আপডেট হয়েছে! আপডেটেড ফিগুলো এখনই দেখে নিন।</div>
                                </div>
                            </div>
                        </BlogHeaderSection>
                        <IeltsCarouselSection data={ieltsCarouselData}/>
                        <WhatIsIeltsSection/>
                        <IeltsScoreSection/>
                        <IeltsExamFormatSection/>
                        <IeltsEvaluationSection/>
                        <IeltsCostSection/>
                        <IeltsWhenToTakeSection/>
                        <IeltsTestCenterResultEligibilitySection/>
                        <IeltsBandScoreMoreInfoSection/>
                        <NextStepsSection/>
                        <AllInfoTables/>
                        <FAQAccordion title={"বেশি জিজ্ঞাসিত প্রশ্ন"} data={faqs} className={"bg-white w-full max-w-7xl p-4 rounded-xl"}/>
                    </div>
                    <aside className={"sticky top-4 self-start"}>
                        <RelatedArticlesSection articles={articles}/>
                    </aside>
                </div>
            </div>
        </div>
    )
}
