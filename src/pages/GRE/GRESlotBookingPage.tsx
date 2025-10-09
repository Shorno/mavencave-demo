import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import CustomCarouselSection from "@/components/ielts/CustomCarouselSection.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import {greFaqs, greNextSteps, greRelatedBlogs} from "@/pages/GRE/GRERegistrationPage.tsx";
import InfoTableSection from "@/components/ielts/info-table.tsx";
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";
import GRESlotBookingTestCentersSection from "@/components/gre/slot-booking/GRESlotBookingTestCentersSection.tsx";
import GRESlotBookingProcessSection from "@/components/gre/slot-booking/GRESlotBookingProcessSection.tsx";
import GREGeneralSlotBookingDatesSection from "@/components/gre/slot-booking/GREGeneralSlotBookingDatesSection.tsx";
import GREHomeBasedSlotBookingSection from "@/components/gre/slot-booking/GREHomeBasedSlotBookingSection.tsx";

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "GRE", path: "/study-abroad/exams/gre"},
    {label: "স্লট বুকিং", path: "/study-abroad/exams/gre/slot-booking"}
];
const greSlotBookingCarouselData = [
    {
        image: "/images/blog/blog4.webp",
        title: "১. GRE স্লট বুকিং: পরীক্ষাকেন্দ্র",
        description: "GRE-এর পরীক্ষাকেন্দ্র বাংলাদেশ-এর প্রায় সকল প্রধান শহরে অবস্থিত। আপনি আপনার অবস্থানের কাছাকাছি যে শহরটি সুবিধাজনক, সেটি নির্বাচন করতে পারেন।",
        index: "১/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "২. বাংলাদেশে GRE স্লট কিভাবে বুক করবেন? ধাপে ধাপে প্রক্রিয়া",
        description: "GRE পরীক্ষার স্লট বুক করার দুটি পদ্ধতি রয়েছে। এটি অনলাইনে বা অফলাইনে, যেমন ডাক, ফোন বা ফ্যাক্স ব্যবহার করেও করা যেতে পারে।",
        index: "২/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "৩. GRE General স্লট বুকিং তারিখ",
        description: "প্রধান শহরগুলোতে বিভিন্ন GRE পরীক্ষাকেন্দ্র রয়েছে, যেগুলো আপনি আপনার সুবিধা অনুযায়ী বুক করতে পারেন।",
        index: "৩/৩",
    },
];


export default function GRESlotBookingPage() {
    return (
        <>
            <BlogHeaderSection
                title="GRE স্লট বুকিং: নিবন্ধন এবং স্লটের জন্য উপলব্ধ তারিখ চেক করুন"
                updatedDate="আগস্ট ৩০, ২০২৫, ১৫:৩৭"
                customSegments={customSegments}
            >
                <p>
                    আপনি যদি বিদেশ থেকে মাস্টার্স করার পরিকল্পনা করে থাকেন, তাহলে GRE স্লট বুক করা ভর্তি পাওয়ার ক্ষেত্রে সহায়ক হবে। আপনার পরিকল্পনা অনুযায়ী পরীক্ষা স্লট বুক করার জন্য নির্দিষ্ট তারিখ এবং সময় দেখার সুবিধা রয়েছে।
                </p>
                <p>
                    এই পৃষ্ঠায়, আমরা GRE স্লট বুকিং প্রক্রিয়া, উপলব্ধ তারিখ, পরীক্ষাকেন্দ্র এবং আরও অনেক কিছু সম্পর্কে যা যা জানা প্রয়োজন তা আলোচনা করব।
                </p>
            </BlogHeaderSection>
            <CustomCarouselSection data={greSlotBookingCarouselData}/>
            <GRESlotBookingTestCentersSection/>
            <GRESlotBookingProcessSection/>
            <GREGeneralSlotBookingDatesSection/>
            <GREHomeBasedSlotBookingSection/>
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
