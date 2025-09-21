import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import CustomCarouselSection from "@/components/ielts/CustomCarouselSection.tsx";
import WhatIsToeflSection from "@/components/toefl/WhatIsToeflSection.tsx";
import ToeflDatesSection from "@/components/toefl/ToeflDatesSection.tsx";
import ToeflFeesSection from "@/components/toefl/ToeflFeesSection.tsx";
import ToeflResultsSection from "@/components/toefl/ToeflResultsSection.tsx";
import ToeflScoresSection from "@/components/toefl/ToeflScoresSection.tsx";
import ToeflTestCentreSection from "@/components/toefl/ToeflTestCentreSection.tsx";
import ToeflRegistrationSection from "@/components/toefl/ToeflRegistrationSection.tsx";
import ToeflEligibilitySection from "@/components/toefl/ToeflEligibilitySection.tsx";
import ToeflSyllabusSection from "@/components/toefl/ToeflSyllabusSection.tsx";
import ToeflBooksSection from "@/components/toefl/ToeflBooksSection.tsx";
import ToeflPracticeTestsSection from "@/components/toefl/ToeflPracticeTestsSection.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import IeltsAllInfoTables from "@/components/ielts/all-info-table.tsx";
import InfoTableSection from "@/components/ielts/info-table.tsx";

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "TOEFL", path: "/study-abroad/exams/TOEFL"}
];

const toeflCentersBangladesh = [
    [
        { label: "ঢাকায় TOEFL পরীক্ষার কেন্দ্র ও তারিখ", href: "/study-abroad/exams/toefl/dhaka" },
        { label: "চট্টগ্রামে TOEFL পরীক্ষার কেন্দ্র ও তারিখ", href: "/study-abroad/exams/toefl/chittagong" },
        { label: "খুলনায় TOEFL পরীক্ষার কেন্দ্র ও তারিখ", href: "/study-abroad/exams/toefl/khulna" },
    ],
    [
        { label: "TOEFL ফলাফল ও স্কোর", href: "/study-abroad/exams/toefl/results" },
        { label: "TOEFL সিলেবাস ও প্যাটার্ন", href: "/study-abroad/exams/toefl/syllabus" },
        { label: "TOEFL রেজিস্ট্রেশন প্রক্রিয়া", href: "/study-abroad/exams/toefl/registration" },
    ],
    [
        { label: "TOEFL Speaking অনুশীলন", href: "/study-abroad/exams/toefl/speaking-practice" },
        { label: "TOEFL Writing অনুশীলন", href: "/study-abroad/exams/toefl/writing-practice" },
        { label: "TOEFL Reading অনুশীলন", href: "/study-abroad/exams/toefl/reading-practice" },
    ],
    [
        { label: "TOEFL Listening অনুশীলন", href: "/study-abroad/exams/toefl/listening-practice" },
        { label: "TOEFL প্রস্তুতির বই", href: "/study-abroad/exams/toefl/books" },
        { label: "TOEFL মক টেস্ট", href: "/study-abroad/exams/toefl/practice-test" },
    ],
];

const toeflCarouselData = [
    {
        image: "/images/blog/blog4.webp",
        title: "১. GRE কি এবং কেন প্রয়োজন?",
        description: "GRE, বা Graduate Record Exam, বিদেশে স্নাতকোত্তর পড়াশোনার জন্য সবচেয়ে সাধারণ পরীক্ষাগুলির মধ্যে একটি।",
        index: "১/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "২. GRE পরীক্ষার তারিখ: কখন অনুষ্ঠিত হয়?",
        description: "GRE জেনারেল টেস্ট সারা বছর জুড়ে উপলব্ধ থাকে। প্রতি ২১ দিনে একবার পরীক্ষা দেওয়া যায় এবং বছরে সর্বোচ্চ ৫ বার।",
        index: "২/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "৩. GRE ফি: কত খরচ হয়?",
        description: "২০২৫ সালে GRE জেনারেল টেস্টের ফি বাংলাদেশে প্রায় ২২,০০০ টাকা (USD $220)। ETS আর্থিক সহায়তাও প্রদান করে।",
        index: "৩/৩",
    },
];


export default function TOEFLPage(){
    return (
        <>
            <BlogHeaderSection
                title="বাংলাদেশী শিক্ষার্থীদের জন্য GRE পরীক্ষা ২০২৫: একটি সম্পূর্ণ গাইড"
                updatedDate="২৩ মে, ২০২৫, ০৪:৫২"
                customSegments={customSegments}
            >
                <p>
                    আপনি কি আমেরিকার টপ গ্র্যাজুয়েট স্কুলে ভর্তি হওয়ার স্বপ্ন দেখেন? তাহলে GRE (Graduate Record Examination) আপনার সেই স্বপ্ন পূরণের প্রথম ধাপ। এই পরীক্ষাটি বিশ্বের হাজারো বিশ্ববিদ্যালয়ে মাস্টার্স এবং পিএইচডি প্রোগ্রামে ভর্তির জন্য আবশ্যক। ২০২৫ সালে GRE পরীক্ষায় বেশ কিছু গুরুত্বপূর্ণ পরিবর্তন এসেছে, যা বাংলাদেশী শিক্ষার্থীদের জন্য আরও সুবিধাজনক করেছে। এই নিবন্ধে GRE সম্পর্কে সব খুঁটিনাটি বিস্তারিত আলোচনা করা হয়েছে।
                </p>
                <div className="bg-green-50 border border-green-200 rounded p-4 mt-4 flex items-start gap-2">
                    <span className="text-xl mr-2">🚀</span>
                    <div>
                        <div className="font-bold text-green-600 mb-1">সর্বশেষ আপডেট!</div>
                        <div className="text-green-800">
                            ETS GRE পরীক্ষায় বেশ কিছু নতুন আপডেট ঘোষণা করেছে, যার মধ্যে রয়েছে সংক্ষিপ্ত সময়কাল, কিছু টাস্ক অপসারণ, এবং প্রশ্নের সংখ্যা হ্রাস।
                            সংক্ষিপ্ত GRE এর জন্য রেজিস্ট্রেশন এখনই চালু!
                        </div>
                    </div>
                </div>
            </BlogHeaderSection>
            <CustomCarouselSection data={toeflCarouselData}/>
            <WhatIsToeflSection/>
            <ToeflDatesSection/>
            <ToeflFeesSection/>
            <ToeflResultsSection/>
            <ToeflScoresSection/>
            <ToeflTestCentreSection/>
            <ToeflRegistrationSection/>
            <ToeflEligibilitySection/>
            <ToeflSyllabusSection/>
            <ToeflBooksSection/>
            <ToeflPracticeTestsSection/>
            <NextStepsSection/>
            <InfoTableSection title="TOEFL সংক্রান্ত গুরুত্বপূর্ণ তথ্য" data={toeflCentersBangladesh} />
            <IeltsAllInfoTables/>

        </>
    )
}