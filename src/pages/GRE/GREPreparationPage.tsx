import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import CustomCarouselSection from "@/components/ielts/CustomCarouselSection.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import {greFaqs, greNextSteps, greRelatedBlogs} from "@/pages/GRE/GRERegistrationPage.tsx";
import InfoTableSection from "@/components/ielts/info-table.tsx";
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";
import GREAnalyticalWritingPreparationSection from "@/components/gre/prep/GREAnalyticalWritingPreparationSection.tsx";
import GREVerbalReasoningPreparationSection from "@/components/gre/prep/GREVerbalReasoningPreparationSection.tsx";
import GREQuantitativeReasoningPreparationSection
    from "@/components/gre/prep/GREQuantitativeReasoningPreparationSection.tsx";

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "GRE", path: "/study-abroad/exams/gre"},
    {label: "প্রস্তুতি", path: "/study-abroad/exams/gre/preparation"}
];
const grePreparationCarouselData = [
    {
        image: "/images/blog/blog4.webp",
        title: "১. GRE পরীক্ষা প্রস্তুতি: Analytical Writing",
        description: "GRE Analytical Writing বিভাগে দুটি পৃথকভাবে সময় নির্ধারিত টাস্ক রয়েছে: 'Issue Task' এবং 'Argument Task'।",
        index: "১/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "২. GRE পরীক্ষা প্রস্তুতি: Verbal Reasoning",
        description: "GRE Verbal Reasoning বিভাগ আপনার লিখিত সামগ্রী বোঝা এবং বিশ্লেষণ করার ক্ষমতা, পাশাপাশি যুক্তি মূল্যায়ন এবং যৌক্তিক উপসংহার টানা দক্ষতা পরীক্ষা করে।",
        index: "২/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "৩. GRE পরীক্ষা প্রস্তুতি: Quantitative Reasoning",
        description: "GRE Quantitative Reasoning বিভাগ আপনার সংখ্যাত্মক তথ্য বোঝা, ব্যাখ্যা করা এবং বিশ্লেষণ করার ক্ষমতা, পাশাপাশি গাণিতিক ধারণা ও যুক্তি ব্যবহার করে সমস্যা সমাধান করার দক্ষতা পরীক্ষা করে।",
        index: "৩/৩",
    },
];

export default function GREPreparationPage() {
    return (
        <>
            <BlogHeaderSection
                title="GRE পরীক্ষা প্রস্তুতি ২০২৫: বিভাগভিত্তিক টিপস"
                updatedDate="আগস্ট ৩০, ২০২৫, ১৫:৪২"
                customSegments={customSegments}
            >
                <p>
                    GRE পরীক্ষার প্রস্তুতি অবশ্যই কঠিন অভিজ্ঞতা হতে হবে এমন নয়! আমাদের GRE পরীক্ষা প্রস্তুতির রিসোর্সগুলো আপনার জন্য এটি সহজ এবং মজাদার করে তোলে।
                </p>
                <p>
                    আমাদের টিপস এবং কৌশলগুলো GRE-এর প্রতিটি বিভাগকে আচ্ছাদিত করে, যার মাধ্যমে আপনি সবকিছু ভালোভাবে বুঝতে পারবেন এবং পরীক্ষার দিনে আপনার সেরাটা দিতে পারবেন।
                </p>
            </BlogHeaderSection>
            <CustomCarouselSection data={grePreparationCarouselData}/>
            <GREAnalyticalWritingPreparationSection/>
            <GREVerbalReasoningPreparationSection/>
            <GREQuantitativeReasoningPreparationSection/>
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
