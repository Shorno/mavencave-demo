import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import CustomCarouselSection from "@/components/ielts/CustomCarouselSection.tsx";
import {ieltsCarouselData} from "@/data/carousle-data.ts";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import IeltsAllInfoTables from "@/components/ielts/all-info-table.tsx";
import IeltsResultCheckSection from "@/components/ielts/results/IeltsResultCheckSection.tsx";
import IeltsBandScoreCalculationSection from "@/components/ielts/results/IeltsBandScoreCalculationSection.tsx";
import IeltsEorSection from "@/components/ielts/results/IeltsEorSection.tsx";

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "IELTS", path: "/study-abroad/exams/ielts"},
    {label: "ফলাফল", path: "/study-abroad/exams/ielts/results"},
];

export default function IeltsResultsPage() {
    return (
        <>
            <BlogHeaderSection
                title="IELTS ফলাফল অনলাইনে"
                updatedDate="২৭ মে, ২০২৫, ০৫:৫৭"
                customSegments={customSegments}
            >
                <p>
                    আপনি যদি সম্প্রতি IELTS পরীক্ষা দিয়ে থাকেন বা দিতে পরিকল্পনা করছেন, তাহলে আপনার মনে হয়তো একটি
                    প্রশ্ন আছে: আমি কত দ্রুত আমার ফলাফল পাবো? IDP-এর সাম্প্রতিক আপডেটের কারণে এখন অপেক্ষার সময় অনেক কমে
                    এসেছে! কম্পিউটারে IELTS পরীক্ষার জন্য, ফলাফল এখন মাত্র ২ দিনের মধ্যে পাওয়া যায় — এটি বিদেশে
                    পড়াশোনা বা কাজের জন্য পরবর্তী ধাপ নিতে আগ্রহীদের জন্য একটি বড় সুবিধা।
                </p>
                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                    আপনার ফলাফল পরীক্ষা করা খুবই সহজ এবং এটি ঘরে বসেই করা যায়। শুধু আপনার পরীক্ষা কেন্দ্র থেকে প্রদত্ত
                    অনলাইন পোর্টালে লগ ইন করুন এবং আপনার স্কোর দেখতে পাবেন।
                </p>
                <div className="my-6">
                    <b>পরীক্ষার ফলাফল পাওয়ার সময় নির্ভর করবে আপনি কোন ধরণের পরীক্ষা দিয়েছেন তার ওপর:</b>
                    <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base mt-2">
                        <li><b>IELTS Paper-based:</b> পরীক্ষার তারিখের পরবর্তী ১৩তম দিন</li>
                        <li><b>IELTS Computer:</b> ২ থেকে ৫ দিন</li>
                        <li><b>IELTS for UK Visas and Immigration (UKVI):</b> পরীক্ষার তারিখের পরবর্তী ১৩তম দিন</li>
                        <li><b>ফলাফল প্রকাশের সময়কাল:</b> ৭ দিন</li>
                    </ul>
                </div>
            </BlogHeaderSection>
            <CustomCarouselSection data={ieltsCarouselData}/>
            <IeltsResultCheckSection/>
            <IeltsBandScoreCalculationSection/>
            <IeltsEorSection/>
            <NextStepsSection/>
            <IeltsAllInfoTables/>
        </>
    )
}
