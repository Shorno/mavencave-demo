import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import CustomCarouselSection from "@/components/ielts/CustomCarouselSection.tsx";
import SATPreparationTimeline2025Section from "@/components/SAT/SATPreparationTimeline2025Section.tsx";
import TopSATPreparationTipsSection from "@/components/SAT/TopSATPreparationTipsSection.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import {
    satAcceptingUniversities, satFaqs,
    satImportantInfo,
    satNextSteps,
    satRelatedBlogs
} from "@/pages/SAT/SATEligibilityPage.tsx";
import InfoTableSection from "@/components/ielts/info-table.tsx";
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "SAT", path: "/study-abroad/exams/sat"},
    {label: "প্রস্তুতি", path: "/study-abroad/exams/sat/preparation"}
];
const satPreparationCarouselData = [
    {
        image: "/images/blog/blog4.webp",

        title: "১. SAT প্রস্তুতির টাইমলাইন ২০২৫",
        description: "অধিকাংশ শিক্ষার্থী SAT-এ উচ্চ স্কোর পাওয়ার জন্য এক বছর আগে থেকেই প্রস্তুতি নেয়।",
        index: "১/৩",
    },
    {
        image: "/images/blog/blog4.webp",

        title: "২. শীর্ষ SAT প্রস্তুতি টিপস",
        description: "SAT-এর জন্য প্রস্তুতি প্রাথমিকভাবে জটিল মনে হতে পারে, কিন্তু এটিকে ছোট ছোট অংশে ভাগ করে নেওয়াই মূল চাবিকাঠি।",
        index: "২/৩",
    },
    {
        image: "/images/blog/blog4.webp",

        title: "৩. SAT শীর্ষ প্রস্তুতি বই ২০২৫",
        description: "আপনি জানেন কি, লক্ষ্যভিত্তিক প্রস্তুতি বই ব্যবহার করা ছাত্রছাত্রীরা গড়ে ৫০–২০০ পয়েন্ট বেশি স্কোর করে?",
        index: "৩/৩",
    },
];

export default function SATPreparationPage() {
    return (
        <>
            <BlogHeaderSection
                title="বাংলাদেশি শিক্ষার্থীদের জন্য SAT পরীক্ষার প্রস্তুতি ২০২৫: SAT স্কোর বাড়ানোর প্রস্তুতি টিপস!"
                updatedDate="২১ ডিসেম্বর, ২০২৪, ১১:১৫"
                customSegments={customSegments}
            >
                <p>
                    আপনি কি জানেন যে প্রতি বছর ১.৫ মিলিয়নের বেশি শিক্ষার্থী উচ্চশিক্ষার সুযোগ অর্জনের জন্য SAT পরীক্ষা দেয়? এই ভিড়ে আলাদা হয়ে উঠতে হলে কার্যকরী SAT প্রস্তুতি অত্যন্ত জরুরি।
                </p>
                <p>
                    একটি শক্তিশালী SAT স্কোর আপনার বিশ্ববিদ্যালয় আবেদনকে শক্তিশালী করে এবং স্কলারশিপসহ অন্যান্য একাডেমিক সুযোগের দরজা খুলে দেয়। বিশ্ববিদ্যালয়গুলি SAT কে একটি মানক সূচক হিসেবে ব্যবহার করে, যা কলেজ-লেভেলের শিক্ষার জন্য আপনার প্রস্তুতির মূল্যায়ন নিশ্চিত করে এবং বিভিন্ন শিক্ষাগত পটভূমির শিক্ষার্থীদের মধ্যে ন্যায্য তুলনা সম্ভব করে।
                </p>
                <p>
                    যুক্তরাষ্ট্রের ৪,০০০ এর বেশি বিশ্ববিদ্যালয় SAT স্কোর গ্রহণ করে, তাই এই পরীক্ষায় ভালো পারফর্ম করা আপনাকে মেধাভিত্তিক আর্থিক সহায়তার জন্যও যোগ্য করতে পারে। সঠিক পদ্ধতি এবং সরঞ্জামের মাধ্যমে আপনি এই চ্যালেঞ্জকে সফলতার সিঁড়িতে পরিণত করতে পারেন।
                </p>
                <p>
                    এই গাইডে টার্গেট স্কোর অর্জনের জন্য টিপস, টাইমলাইন, রিসোর্স এবং কৌশল নিয়ে বিস্তারিত আলোচনা করা হয়েছে।
                </p>
            </BlogHeaderSection>
            <CustomCarouselSection data={satPreparationCarouselData}/>
            <SATPreparationTimeline2025Section/>
            <TopSATPreparationTipsSection/>
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
