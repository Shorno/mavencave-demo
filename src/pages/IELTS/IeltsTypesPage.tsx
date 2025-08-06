import BlogHeaderSection from "@/components/ielts/book-hero.tsx";
import IeltsAcademicTypeSection from "@/components/ielts/types/IeltsAcademicTypeSection.tsx";
import IeltsGeneralTrainingTypeSection from "@/components/ielts/types/IeltsGeneralTrainingTypeSection.tsx";
import IeltsLifeSkillsUkviTypeSection from "@/components/ielts/types/IeltsLifeSkillsUkviTypeSection.tsx";
import IeltsAcademicVsGeneralSection from "@/components/ielts/types/IeltsAcademicVsGeneralSection.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import AllInfoTables from "@/components/ielts/all-info-table.tsx";
import FAQAccordion, {type FAQItem} from "@/components/study-abroad/FAQAccordion.tsx";

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "IELTS", path: "/study-abroad/exams/ielts"},
    {label: "ধরনসমূহ", path: "/study-abroad/exams/ielts/types"},
];
const faqs: FAQItem[] = [
    {
        id: "faq1",
        question: "IELTS-এর কত ধরনের পরীক্ষা আছে?",
        answer: (
            <>
                IELTS-এর তিনটি প্রধান ধরন রয়েছে: <b>IELTS Academic</b>, <b>IELTS General Training</b>, এবং <b>IELTS Life Skills</b>। আপনার পড়াশোনা, কাজ অথবা ইমিগ্রেশন লক্ষ্য অনুযায়ী পরীক্ষা বেছে নিতে হবে।
            </>
        ),
    },
    {
        id: "faq2",
        question: "IELTS পরীক্ষা দেওয়ার জন্য কি কোনো বয়সসীমা আছে?",
        answer: (
            <>
                সাধারণত IELTS পরীক্ষার জন্য <b>ন্যূনতম বয়স ১৬ বছর</b> হতে হয়। এছাড়া অবশ্যই বৈধ পাসপোর্ট থাকতে হবে।
            </>
        ),
    },
    {
        id: "faq3",
        question: "IELTS পরীক্ষার কোন ধরনটি সবচেয়ে সহজ?",
        answer: (
            <>
                <b>IELTS General Training</b> তুলনামূলকভাবে সহজ, কারণ এতে প্রশ্নগুলো দৈনন্দিন জীবনের বাস্তব পরিস্থিতি থেকে নেওয়া হয়; একাডেমিক পরীক্ষায় কন্টেন্ট ও ভাষা কিছুটা বেশি চ্যালেঞ্জিং।
            </>
        ),
    },
    {
        id: "faq4",
        question: "IELTS স্কোর কতদিন পর্যন্ত বৈধ থাকে?",
        answer: (
            <>
                IELTS স্কোর <b>পরীক্ষার তারিখ থেকে ২ বছর</b> পর্যন্ত বৈধ থাকে। এই সময়ের পর অনেক বিশ্ববিদ্যালয় ও প্রতিষ্ঠান স্কোর গ্রহণ করে না।
            </>
        ),
    },
    {
        id: "faq5",
        question: "পরবর্তী IELTS পরীক্ষা কখন হবে?",
        answer: (
            <>
                IELTS পরীক্ষা বছরে অনেকবার অনুষ্ঠিত হয়। আপনি আপনার সুবিধামতো দিন ও সেন্টার নির্বাচন করতে পারবেন। নিকটতম পরীক্ষার তারিখ জানতে অফিশিয়াল IELTS ওয়েবসাইট বা পরীক্ষাকেন্দ্রের সময়সূচি দেখুন।
            </>
        ),
    },
];



export default function IeltsTypesPage() {
    return (
        <>
            <BlogHeaderSection
                title="IELTS পরীক্ষার ধরনসমূহ"
                updatedDate="২৯ সেপ্টেম্বর, ২০২৪, ১৪:৩৬"
                customSegments={customSegments}
            >
                <p>
                    বিদেশে যাওয়ার পরিকল্পনা করলে ইংরেজি দক্ষতা অত্যন্ত গুরুত্বপূর্ণ। IELTS-এ ভালো স্কোর প্রমাণ করে যে
                    আপনি ইংরেজিতে ভালোভাবে কথা বলতে, লিখতে ও বুঝতে পারেন। এই দক্ষতাগুলো একটি ইংরেজিভাষী দেশের পরিবেশে
                    মানিয়ে নিতে খুবই জরুরি।
                </p>
                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                    IELTS পরীক্ষার তিনটি ধরণ রয়েছে:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base">
                    <li>IELTS একাডেমিক</li>
                    <li>IELTS জেনারেল ট্রেইনিং</li>
                    <li>IELTS লাইফ স্কিলস</li>
                </ul>
            </BlogHeaderSection>
            <IeltsAcademicTypeSection/>
            <IeltsGeneralTrainingTypeSection/>
            <IeltsLifeSkillsUkviTypeSection/>
            <IeltsAcademicVsGeneralSection/>
            <NextStepsSection/>
            <AllInfoTables/>
            <FAQAccordion title={"বেশি জিজ্ঞাসিত প্রশ্ন"} data={faqs}/>
        </>
    )
}