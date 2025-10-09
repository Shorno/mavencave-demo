import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import CustomCarouselSection from "@/components/ielts/CustomCarouselSection.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import InfoTableSection from "@/components/ielts/info-table.tsx";
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";
import {greFaqs, greNextSteps, greRelatedBlogs} from "@/pages/GRE/GRERegistrationPage.tsx";
import GRESyllabus2025UpdatesSection from "@/components/gre/syllabus/GRESyllabus2025UpdatesSection.tsx";
import GRESyllabusPatternSection from "@/components/gre/GRESyllabusPatternSection.tsx";
import GREVerbalReasoningSection from "@/components/gre/syllabus/GREVerbalReasoningSection.tsx";
import GREQuantitativeReasoningSection from "@/components/gre/syllabus/GREQuantitativeReasoningSection.tsx";
import GREAnalyticalWritingSection from "@/components/gre/syllabus/GREAnalyticalWritingSection.tsx";

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "GRE", path: "/study-abroad/exams/gre"},
    {label: "পাঠ্যসূচি ও ধরণ", path: "/study-abroad/exams/gre/syllabus-pattern"}
];
const greSyllabusCarouselData = [
    {
        image: "/images/blog/blog4.webp",
        title: "১. GRE সিলেবাস ২০২৫: সর্বশেষ আপডেট",
        description: "GRE পরীক্ষার সাথে সম্পর্কিত সর্বশেষ আপডেটসমূহ নিম্নরূপ।",
        index: "১/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "২. GRE সিলেবাস এবং প্যাটার্ন ২০২৫",
        description: "GRE সিলেবাস তিনটি বিভাগে বিভক্ত: Analytical Writing, Verbal Reasoning, এবং Quantitative Reasoning।",
        index: "২/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "৩. GRE সিলেবাস এবং প্যাটার্ন ২০২৫: Verbal Reasoning",
        description: "Verbal Reasoning বিভাগে নিম্নলিখিত প্রশ্নের ধরনগুলো অন্তর্ভুক্ত: Reading Comprehension, Text Completion, এবং Sentence Equivalence।",
        index: "৩/৩",
    },
];


export default function GRESyllabusPatternPage() {
    return (
        <>
            <BlogHeaderSection
                title="GRE পরীক্ষা সিলেবাস ও প্যাটার্ন ২০২৫: বিভাগভিত্তিক GRE ফরম্যাট"
                updatedDate="আগস্ট ৩১, ২০২৫, ০৫:৪৬"
                customSegments={customSegments}
            >
                <p>
                    আপনি কি জানেন যে GRE হলো ETS-এর (যিনি TOEFL-এরও মালিক) প্রথম পরিচিত পরীক্ষা?
                </p>
                <p>
                    ঠিক তাই। ETS ১৯৪০-এর দশকে GRE পরিচয় করায়, এবং তখন থেকে তারা পরীক্ষার কাঠামো এবং বিষয়বস্তুর ক্ষেত্রে বহু পরিবর্তন করেছে। GRE এখনও বিজনেস স্কুলে ভর্তি পরীক্ষার জন্য একটি শীর্ষ পছন্দ হিসেবে রয়েছে।
                </p>
                <p>
                    এই পৃষ্ঠায়, আমরা GRE পরীক্ষার সিলেবাস সম্পর্কিত সমস্ত নতুন আপডেট এবং বিস্তারিত তথ্য আলোচনা করব।
                </p>
            </BlogHeaderSection>
            <CustomCarouselSection data={greSyllabusCarouselData}/>
            <GRESyllabus2025UpdatesSection/>
            <GRESyllabusPatternSection/>
            <GREVerbalReasoningSection/>
            <GREQuantitativeReasoningSection/>
            <GREAnalyticalWritingSection/>
            <NextStepsSection nextSteps={greNextSteps}/>
            <InfoTableSection title="GRE সংক্রান্ত গুরুত্বপূর্ণ তথ্য" data={greRelatedBlogs} />
            <FAQAccordion
                title={"শিক্ষার্থীদের করা সবথেকে বেশি প্রশ্ন সমূহ"}
                data={greFaqs}
                className={"bg-white w-full max-w-7xl p-4 rounded-xl"}
            />

        </>
    );
}
