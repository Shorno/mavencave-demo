import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import CustomCarouselSection from "@/components/ielts/CustomCarouselSection.tsx";
import SATExamSyllabusSection from "@/components/SAT/SATExamSyllabusSection.tsx";
import SATExamPattern2025Section from "@/components/SAT/SATExamPattern2025Section.tsx";
import VerticalScoreScaleSection from "@/components/SAT/VerticalScoreScaleSection.tsx";
import SATSyllabusForBangladeshiStudentsSection from "@/components/SAT/SATSyllabusForBangladeshiStudentsSection.tsx";
import SATAdaptiveTestingFormatSection from "@/components/SAT/SATAdaptiveTestingFormatSection.tsx";
import SATExamTips2025Section from "@/components/SAT/SATExamTips2025Section.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import InfoTableSection from "@/components/ielts/info-table.tsx";
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";
import {
    satAcceptingUniversities, satFaqs,
    satImportantInfo,
    satNextSteps,
    satRelatedBlogs
} from "@/pages/SAT/SATEligibilityPage.tsx";

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "SAT", path: "/study-abroad/exams/sat"},
    {label: "পাঠ্যসূচি ও ধরণ", path: "/study-abroad/exams/sat/syllabus"}
];
const satSyllabusCarouselData = [
    {
        image: "/images/blog/blog4.webp",

        title: "১. SAT পরীক্ষা সিলেবাস",
        description: "SAT বছরে একাধিকবার অনুষ্ঠিত হয়।",
        index: "১/৩",
    },
    {
        image: "/images/blog/blog4.webp",

        title: "২. SAT পরীক্ষা প্যাটার্ন ২০২৫",
        description: "২০২৫ সালের SAT পরীক্ষার প্যাটার্ন বিভিন্ন ক্ষেত্রকে অন্তর্ভুক্ত করে।",
        index: "২/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "৩. Vertical স্কোর স্কেল",
        description: "ডিজিটাল SAT Suite একটি ভের্টিকাল স্কোর স্কেল ব্যবহার করে, যা শিক্ষার্থী এবং শিক্ষককে একরূপভাবে শিক্ষাগত অগ্রগতি পর্যবেক্ষণ করতে সাহায্য করে।",
        index: "৩/৩",
    },
];


export default function SATSyllabusPage() {
    return (
        <>
            <BlogHeaderSection
                title="বাংলাদেশি শিক্ষার্থীদের জন্য SAT সিলেবাস ২০২৫: SAT পরীক্ষার প্যাটার্ন ও ফরম্যাট চেক করুন!"
                updatedDate="২১ ডিসেম্বর, ২০২৪, ১২:১৬"
                customSegments={customSegments}
            >
                <p>
                    SAT হল যুক্তরাষ্ট্র এবং অন্যান্য দেশে উচ্চশিক্ষা অনুসরণের জন্য শিক্ষার্থীদের অন্যতম গুরুত্বপূর্ণ পরীক্ষা। ২০২৫ সালের জন্য, আগে থেকে প্রস্তুতি নেওয়া এবং SAT পরীক্ষার সিলেবাস ভালোভাবে বোঝা সাফল্যের জন্য অপরিহার্য। এই পরীক্ষা পড়া, লেখা এবং গণিত দক্ষতা মূল্যায়ন করে, এছাড়াও ঐচ্ছিক বিষয়ভিত্তিক অংশ রয়েছে।
                </p>
                <p>
                    বাংলাদেশি শিক্ষার্থী হিসেবে, আপনি SAT দিতে পারেন কলেজ অ্যাপ্লিকেশন শক্তিশালী করতে, কারণ এটি একটি সংগঠিত ফরম্যাটে আপনার একাডেমিক সক্ষমতা প্রদর্শন করতে সাহায্য করে। পরীক্ষা তিনটি প্রধান অংশে বিভক্ত: Evidence-Based Reading and Writing (EBRW), Math, এবং একটি ঐচ্ছিক Essay।
                </p>
                <p>
                    আপনি কি জানেন? ২০২৪ সালে, ১.৯ মিলিয়নের বেশি শিক্ষার্থী SAT দিয়েছিল, যা কলেজ ভর্তি প্রক্রিয়ায় এর গুরুত্ব প্রমাণ করে। একটি উচ্চ প্রতিযোগিতামূলক পরীক্ষা হিসেবে, SAT পরীক্ষার সিলেবাস এবং প্রতিটি অংশের জন্য প্রয়োজনীয় নির্দিষ্ট দক্ষতাগুলি বোঝা উচ্চ স্কোর নিশ্চিত করতে গুরুত্বপূর্ণ।
                </p>
                <p>
                    এই গাইডটি আপনাকে SAT পরীক্ষার পূর্ণাঙ্গ বিশ্লেষণ প্রদান করবে, যার মধ্যে রয়েছে সিলেবাস, কাঠামো, ওজন (weightage), এবং অন্যান্য গুরুত্বপূর্ণ দিক।
                </p>
            </BlogHeaderSection>
            <CustomCarouselSection data={satSyllabusCarouselData}/>
            <SATExamSyllabusSection/>
            <SATExamPattern2025Section/>
            <VerticalScoreScaleSection/>
            <SATSyllabusForBangladeshiStudentsSection/>
            <SATAdaptiveTestingFormatSection/>
            <SATExamTips2025Section/>
            <NextStepsSection nextSteps={satNextSteps}/>
            <InfoTableSection title="SAT সংক্রান্ত গুরুত্বপূর্ণ তথ্য" data={satImportantInfo} />
            <InfoTableSection title="SAT গ্রহণকারী বিশ্ববিদ্যালয়সমূহ" data={satAcceptingUniversities} />
            <InfoTableSection title="SAT পরীক্ষা সম্পর্কিত ব্লগ" data={satRelatedBlogs} />
            <FAQAccordion
                title={"শিক্ষার্থীদের করা সবথেকে বেশি প্রশ্ন সমূহ"}
                data={satFaqs}
                className={"bg-white w-full max-w-7xl p-4 rounded-xl"}
            />

        </>
    );
}
