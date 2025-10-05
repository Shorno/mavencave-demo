import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import CustomCarouselSection from "@/components/ielts/CustomCarouselSection.tsx";
import WhatIsGRESection from "@/components/gre/WhatIsGRESection.tsx";
import GREDatesSection from "@/components/gre/GREDatesSection.tsx";
import GREFeesSection from "@/components/gre/GREFeesSection.tsx";
import GREResultSection from "@/components/gre/GREResultSection.tsx";
import GREScoreSection from "@/components/gre/GREScoreSection.tsx";
import GRETestCentreSection from "@/components/gre/GRETestCentreSection.tsx";
import GRERegistrationSection from "@/components/gre/GRERegistrationSection.tsx";
import GREEligibilitySection from "@/components/gre/GREEligibilitySection.tsx";
import GRESyllabusPatternSection from "@/components/gre/GRESyllabusPatternSection.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import GREBooksSection from "@/components/gre/GREBooksSection.tsx";
import GREPracticeTestsSection from "@/components/gre/GREPracticeTestsSection.tsx";
import InfoTableSection from "@/components/ielts/info-table.tsx";
const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "GRE", path: "/study-abroad/exams/gre"}
];
const greImportantInfo = [
    [
        { label: "GRE পরীক্ষা", href: "/study-abroad/exams/gre/exam" },
        { label: "GRE ফলাফল", href: "/study-abroad/exams/gre/results" },
        { label: "GRE তারিখ", href: "/study-abroad/exams/gre/dates" },
    ],
    [
        { label: "GRE ফি", href: "/study-abroad/exams/gre/fees" },
        { label: "GRE সিলেবাস", href: "/study-abroad/exams/gre/syllabus" },
        { label: "GRE অনুশীলন পরীক্ষা", href: "/study-abroad/exams/gre/practice-test" },
    ],
    [
        { label: "GRE রেজিস্ট্রেশন", href: "/study-abroad/exams/gre/registration" },
        { label: "GRE স্লট বুকিং", href: "/study-abroad/exams/gre/slot-booking" },
        { label: "GRE প্রস্তুতি", href: "/study-abroad/exams/gre/preparation" },
    ],
    [
        { label: "GRE বই", href: "/study-abroad/exams/gre/books" },
        { label: "", href: "#" }, // Empty cell to maintain grid structure
        { label: "", href: "#" }, // Empty cell to maintain grid structure
    ],
];

const greCarouselData = [
    {
        image: "/images/blog/blog4.webp",
        title: "১. GRE কি এবং কেন প্রয়ো জন?",
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
        description: "২০২৫ সালে GRE জেনারেল টেস্টের ফি বাংলাদেশে প্রায় ২২,০০০ টাকা  (USD $220)। ETS আর্থিক সহায়তাও প্রদান করে।",
        index: "৩/৩",
    },
];

const greNextSteps = [
    {title: "GRE Dates", href: "/ielts/type"},
    {title: "GRE Fees", href: "/ielts/eligibility"},
    {title: "GRE Results", href: "/ielts/band-score"},
];


export default function GREPage(){
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
            <CustomCarouselSection data={greCarouselData}/>
            <WhatIsGRESection/>
            <GREDatesSection/>
            <GREFeesSection/>
            <GREResultSection/>
            <GREScoreSection/>
            <GRETestCentreSection/>
            <GRERegistrationSection/>
            <GREEligibilitySection/>
            <GRESyllabusPatternSection/>
            <GREBooksSection/>
            <GREPracticeTestsSection/>
            <NextStepsSection nextSteps={greNextSteps}/>
            <InfoTableSection title="GRE সংক্রান্ত গুরুত্বপূর্ণ তথ্য" data={greImportantInfo} />


        </>
    )
}