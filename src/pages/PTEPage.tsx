import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import CustomCarouselSection from "@/components/ielts/CustomCarouselSection.tsx";
import WhatIsPTESection from "@/components/pte/WhatIsPTESection.tsx";
import PTEAcceptedCountriesSection from "@/components/pte/PTEAcceptedCountriesSection.tsx";
import PTEExamFormatSection from "@/components/pte/PTEExamFormatSection.tsx";
import PTEExamSyllabusSection from "@/components/pte/PTEExamSyllabusSection.tsx";
import PTEPreparationSection from "@/components/pte/PTEPreparationSection.tsx";
import PTERegistrationSection from "@/components/pte/PTERegistrationSection.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import PTEExamDatesSection from "@/components/pte/PTEExamDatesSection.tsx";
import PTEResultsSection from "@/components/pte/PTEResultsSection.tsx";
import PTEComparisonSection from "@/components/pte/PTEComparisonSection.tsx";
import PTESupportSection from "@/components/pte/PTESupportSection.tsx";
import IeltsAllInfoTables from "@/components/ielts/all-info-table.tsx";
import InfoTableSection from "@/components/ielts/info-table.tsx";

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "PTE", path: "/study-abroad/exams/pte"}
];

const pteCarouselData = [
    {
        image: "/images/blog/blog4.webp",
        title: "১. PTE পরীক্ষা কি?",
        description: "PTE, বা Pearson Test of English, একটি জনপ্রিয় ইংরেজি দক্ষতা পরীক্ষা যা যুক্তরাষ্ট্র, যুক্তরাজ্য এবং কানাডাসহ বিশ্বব্যাপী গৃহীত।",
        index: "১/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "২. PTE গ্রহণকারী দেশসমূহ",
        description: "শীর্ষ PTE-গৃহীত দেশগুলির মধ্যে রয়েছে কানাডা, অস্ট্রেলিয়া, যুক্তরাষ্ট্র, যুক্তরাজ্য এবং নিউজিল্যান্ড।",
        index: "২/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "৩. PTE পরীক্ষার ফরম্যাট",
        description: "PTE Academic পরীক্ষা আপনার আন্তর্জাতিক শিক্ষার প্রবেশদ্বার! কম্পিউটার-ভিত্তিক এই পরীক্ষা মাত্র ২ ঘন্টায় সম্পন্ন হয়।",
        index: "৩/৩",
    },
];
const pteNextSteps = [
    {title: "PTE Dates", href: "/ielts/type"},
    {title: "PTE Fees", href: "/ielts/eligibility"},
    {title: "PTE Results", href: "/ielts/band-score"},
];
const pteImportantInfo = [
    [
        { label: "PTE পরীক্ষা", href: "/study-abroad/exams/pte/exam" },
        { label: "PTE ফলাফল", href: "/study-abroad/exams/pte/results" },
        { label: "PTE অনুশীলন পরীক্ষা", href: "/study-abroad/exams/pte/practice-test" },
    ],
    [
        { label: "PTE কেন্দ্র", href: "/study-abroad/exams/pte/centres" },
        { label: "PTE সিলেবাস", href: "/study-abroad/exams/pte/syllabus" },
        { label: "PTE প্রস্তুতি", href: "/study-abroad/exams/pte/preparation" },
    ],
    [
        { label: "PTE তারিখ", href: "/study-abroad/exams/pte/dates" },
        { label: "PTE বই", href: "/study-abroad/exams/pte/books" },
        { label: "PTE ফি", href: "/study-abroad/exams/pte/fees" },
    ],
    [
        { label: "PTE Speaking ও Writing অনুশীলন পরীক্ষা", href: "/study-abroad/exams/pte/speaking-writing-practice" },
        { label: "PTE Listening অনুশীলন পরীক্ষা", href: "/study-abroad/exams/pte/listening-practice" },
        { label: "PTE Reading অনুশীলন পরীক্ষা", href: "/study-abroad/exams/pte/reading-practice" },
    ],
    [
        { label: "PTE স্কোর চার্ট", href: "/study-abroad/exams/pte/score-chart" },
        { label: "PTE স্কোর ক্যালকুলেটর", href: "/study-abroad/exams/pte/score-calculator" },
        { label: "", href: "#" }, // Empty cell to maintain grid structure
    ],
];


export default function PTEPage(){
    return (
        <>
            <BlogHeaderSection
                title="PTE পরীক্ষা ২০২৫: পরীক্ষার তারিখ, কেন্দ্র, ফি, সম্পূর্ণ ফর্ম, বৈধতা ও সময়কাল"
                updatedDate="২৯ মে, ২০২৫, ০৯:১৫"
                customSegments={customSegments}
            >
                <p>
                    PTE পরীক্ষা (Pearson Test of English) একটি ব্যাপকভাবে স্বীকৃত ইংরেজি দক্ষতা পরীক্ষা যা বিশ্বব্যাপী বিশ্ববিদ্যালয়, সরকার এবং প্রতিষ্ঠানগুলি অ-নেটিভ ইংরেজি ভাষাভাষীদের ভাষার দক্ষতা মূল্যায়নের জন্য ব্যবহার করে। এই কম্পিউটার-ভিত্তিক পরীক্ষা মাত্র ২ ঘন্টার মধ্যে আপনার ইংরেজি পড়া, লেখা, কথা বলা এবং শোনার দক্ষতা পরিমাপ করে। বাংলাদেশী শিক্ষার্থীদের জন্য PTE একটি চমৎকার বিকল্প কারণ এটি IELTS এর তুলনায় সহজ এবং দ্রুত ফলাফল প্রদান করে। অস্ট্রেলিয়া, যুক্তরাজ্য, নিউজিল্যান্ড, কানাডা এবং যুক্তরাষ্ট্রের হাজারেরও বেশি বিশ্ববিদ্যালয় PTE স্কোর গ্রহণ করে।
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4 flex items-start gap-2">
                    <span className="text-xl mr-2">🎯</span>
                    <div>
                        <div className="font-bold text-blue-600 mb-1">বড় আপডেট!!</div>
                        <div className="text-blue-800">
                            ২০২৫ সালের মার্চ থেকে PTE ফি আপডেট হয়েছে! আপডেটেড PTE ফি দেখে নিন।
                        </div>
                    </div>
                </div>
            </BlogHeaderSection>
            <CustomCarouselSection data={pteCarouselData}/>
            <WhatIsPTESection/>
            <PTEAcceptedCountriesSection/>
            <PTEExamFormatSection/>
            <PTEExamSyllabusSection/>
            <PTEPreparationSection/>
            <PTERegistrationSection/>
            <PTEExamDatesSection/>
            <PTEResultsSection/>
            <PTEComparisonSection/>
            <PTESupportSection/>
            <NextStepsSection nextSteps={pteNextSteps}/>
            <IeltsAllInfoTables/>
            <InfoTableSection title={"PTE সংক্রান্ত গুরুত্বপূর্ণ তথ্য"} data={pteImportantInfo}/>

        </>
    )
}
