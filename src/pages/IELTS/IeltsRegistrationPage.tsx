import IeltsCarouselSection from "@/components/ielts/Ielts-carousel-section.tsx";
import {ieltsCarouselData} from "@/data/carousle-data.ts";
import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import AllInfoTables from "@/components/ielts/all-info-table.tsx";
import IeltsRegistrationOptionsSection from "@/components/ielts/registration/IeltsRegistrationOptionsSection.tsx";
import IeltsRegistrationFeeSection from "@/components/ielts/registration/IeltsRegistrationFeeSection.tsx";
import IeltsRegistrationDocumentsSection from "@/components/ielts/registration/IeltsRegistrationDocumentsSection.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";

const customSegments = [
    { label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad" },
    { label: "পরীক্ষাসমূহ", path: "/study-abroad/exams" },
    { label: "IELTS", path: "/study-abroad/exams/ielts" },
    { label: "নিবন্ধন", path: "/study-abroad/exams/ielts/registration" },
];

export default function IeltsRegistrationPage() {
    return (
        <>
            <BlogHeaderSection
                title="২০২৫ ও ২০২৬ সালের জন্য IELTS রেজিস্ট্রেশনের বিস্তারিত নির্দেশিকা"
                updatedDate="১৬ মে, ২০২৫, ১৩:০১ টায়"
                customSegments={customSegments}
            >
                <p>
                    ২০২৫ সালের হিসাবে, IELTS বিশ্বে সবচেয়ে বিশ্বাসযোগ্য ইংরেজি দক্ষতা পরীক্ষা হিসেবে স্বীকৃত, যা ১৪০টিরও বেশি দেশে ১২,০০০টিরও বেশি প্রতিষ্ঠান দ্বারা গ্রহণযোগ্য। কানাডার শীর্ষ বিশ্ববিদ্যালয় থেকে শুরু করে যুক্তরাজ্য ও অস্ট্রেলিয়ার ইমিগ্রেশন কর্তৃপক্ষ পর্যন্ত, IELTS বিশ্বব্যাপী সুযোগের এক প্রবেশদ্বার হিসেবে বহাল রয়েছে।
                </p>
                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                    IDP বাংলাদেশ থেকে সর্বশেষ তথ্য অনুযায়ী, ২০২৫ সালের জন্য স্ট্যান্ডার্ড টেস্ট ফি <b>BDT ১৮,০০০</b>, যেখানে আলাদা আলাদা মডিউল পাওয়া যায় — একাডেমিক, জেনারেল ট্রেনিং এবং UKVI পাথওয়েজ।
                </p>
                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                    বিভিন্ন ফরম্যাট, পরিবর্তনশীল নীতি, এবং কঠোর শর্তাবলী বিবেচনা করে, রেজিস্ট্রেশন প্রক্রিয়া বোঝা আগের চেয়ে অনেক বেশি গুরুত্বপূর্ণ। আপনি উচ্চশিক্ষার জন্য, পেশাগত নিবন্ধনের জন্য, বা অভিবাসনের জন্য আবেদন করলেও, এই গাইড আপনাকে আত্মবিশ্বাসের সঙ্গে রেজিস্ট্রেশন করতে সাহায্য করবে।
                </p>
            </BlogHeaderSection>
            <IeltsCarouselSection data={ieltsCarouselData}/>
            <IeltsRegistrationOptionsSection/>
            <IeltsRegistrationFeeSection/>
            <IeltsRegistrationDocumentsSection/>
            <NextStepsSection/>
            <AllInfoTables/>
        </>
    )
}