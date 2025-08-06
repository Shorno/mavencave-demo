import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import IeltsCarouselSection from "@/components/ielts/Ielts-carousel-section.tsx";
import {ieltsCarouselData} from "@/data/carousle-data.ts";
import IeltsEligibilitySection from "@/components/ielts/eligibility/IeltsEligibilitySection.tsx";
import IeltsQualificationScoreSection from "@/components/ielts/eligibility/IeltsQualificationScoreSection.tsx";
import AllInfoTables from "@/components/ielts/all-info-table.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";

const customSegments = [
    { label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad" },
    { label: "পরীক্ষাসমূহ", path: "/study-abroad/exams" },
    { label: "IELTS", path: "/study-abroad/exams/ielts" },
    { label: "যোগ্যতা", path: "/study-abroad/exams/ielts/eligibility" },
];
export default function IeltsEligibilityPage() {
    return (
        <>
            <BlogHeaderSection
                title="আপনার IELTS উপযুক্ততা যাচাই করুন: IELTS বয়সসীমা, যোগ্যতা ও স্কোর"
                updatedDate="২৫ এপ্রিল, ২০২৫, ১৩:৪৭"
                customSegments={customSegments}
            >
                <p>
                    IELTS পরীক্ষার প্রস্তুতি নেওয়া কঠিন মনে হতে পারে, তবে সাম্প্রতিক আপডেটগুলো জানা থাকলে আপনি আত্মবিশ্বাসের সঙ্গে পরিকল্পনা করতে পারবেন।
                </p>
                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                    এখন IELTS পরীক্ষায় কিছু নমনীয়তা এসেছে — যেমন কানাডার SDS ভিসার জন্য নতুন সুবিধা এবং IELTS One Skill Retake অপশন চালু হয়েছে, যেখানে আপনি প্রয়োজনে শুধুমাত্র একটি স্কিল পুনরায় দিতে পারবেন।
                </p>
                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                    এই পরিবর্তনগুলো পরীক্ষার্থীদের স্কোরের ওপর আরও নিয়ন্ত্রণ দেয়, ফলে আপনি যেসব ক্ষেত্রে উন্নতি দরকার সেখানে মনোযোগ দিয়ে প্রস্তুতি নিতে পারেন।
                </p>
                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                    এই গাইডে আমরা প্রতিটি সেকশনের জন্য গুরুত্বপূর্ণ কৌশল এবং সর্বশেষ পরামর্শ নিয়ে আলোচনা করব, যেন আপনি আত্মবিশ্বাসের সঙ্গে IELTS পরীক্ষার মুখোমুখি হতে পারেন।
                </p>
            </BlogHeaderSection>
            <IeltsCarouselSection data={ieltsCarouselData}/>
            <IeltsEligibilitySection/>
            <IeltsQualificationScoreSection/>
            <NextStepsSection/>
            <AllInfoTables/>
        </>
    )
}