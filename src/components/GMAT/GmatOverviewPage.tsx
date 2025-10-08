

import FAQAccordion, {type FAQItem} from "@/components/study-abroad/FAQAccordion.tsx";
import GmatOverview from "./GmatOverview";
import GmatCommonSection from "./GmatCommonSection";


// const customSegments = [
//     {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
//     {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
//     {label: "IELTS", path: "/study-abroad/exams/ielts"},
//     {label: "বইসমূহ", path: "/study-abroad/exams/ielts/booklist"},
// ];

const faqs: FAQItem[] = [
    {
        id: "faq1",
        question: "GMAT কি কঠিন??",
        answer: (
            <>
                GMAT পরীক্ষা অবশ্যই চ্যালেঞ্জিং, 
                তবে সঠিক প্রস্তুতি এবং অধ্যবসায়ের মাধ্যমে সফল হওয়া সম্ভব। এটি আপনার যুক্তি এবং বিশ্লেষণাত্মক দক্ষতা পরীক্ষা করে।
            </>
        ),
    },
    {
        id: "faq2",
        question: "GMAT পরীক্ষার সময়কাল কত?",
        answer: (
            <>
                GMAT Focus Edition-এর মোট সময়কাল হলো ২ ঘন্টা ১৫ মিনিট।
            </>
        ),
    },
    {
        id: "faq3",
        question: "GMAT পরীক্ষা পুনরায় দেওয়ার জন্য কত সময় অপেক্ষা করতে হয়?",
        answer: (
            <>
            আপনি GMAT পরীক্ষা দেওয়ার ১৬ দিন পর পুনরায় দিতে পারবেন। এক বছরে মোট ৫ বার পরীক্ষা দেওয়া যায়।
            </>
        ),
    },
    {
        id: "faq4",
        question: "GMAT পরীক্ষায় ক্যালকুলেটর ব্যবহার করা যাবে কি?",
        answer: (
            <>
               হ্যাঁ, GMAT Focus Edition-এর Quantitative Reasoning এবং Data Insights সেকশনে অন-স্ক্রিন ক্যালকুলেটর ব্যবহার করা যাবে।
            </>
        ),
    },
    {
        id: "faq5",
        question: "GMAT কি অনলাইনে দেওয়া যায় নাকি শুধুমাত্র পরীক্ষা কেন্দ্রে দিতে হবে?",
        answer: (
            <>
                GMAT পরীক্ষা অনলাইন (At-Home) এবং অফলাইন (Test Centre) - উভয়ভাবেই দেওয়া যায়।
            </>
        ),
    },
];

export default function GmatOverviewPage() {
    return (
        <>
          
          <GmatOverview></GmatOverview>
          <GmatCommonSection></GmatCommonSection>
            <FAQAccordion
                title={"বেশি জিজ্ঞাসিত প্রশ্ন"}
                data={faqs}
                className={"bg-white w-full max-w-7xl p-4 rounded-xl"}
            />

        </>
    )
}