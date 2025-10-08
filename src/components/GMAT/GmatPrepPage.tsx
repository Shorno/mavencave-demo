import FAQAccordion, {type FAQItem} from "@/components/study-abroad/FAQAccordion.tsx";

import GmatPrep from "./GmatPrep";
import GmatCommonSection from "./GmatCommonSection";


// const customSegments = [
//     {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
//     {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
//     {label: "IELTS", path: "/study-abroad/exams/ielts"},
//     {label: "বইসমূহ", path: "/study-abroad/exams/ielts/booklist"},
// ];

const faqs: FAQItem[] = [
   {
        id: "faq6",
        question: "GMAT স্যাম্পল পেপার দিয়ে কত ঘন ঘন প্র্যাকটিস করা উচিত?",
        answer: (
            <>
                <p className="text-gray-700 leading-relaxed">
                    প্রস্তুতির মাঝামাঝি সময়ে সপ্তাহে একবার এবং পরীক্ষার কাছাকাছি সময়ে সপ্তাহে ২-৩ বার **সময় নির্ধারণ করে (timed)** প্র্যাকটিস করা উচিত।
                </p>
            </>
        ),
    },
    {
        id: "faq7",
        question: "GMAT স্যাম্পল পেপার-এর পারফরম্যান্স কিভাবে কার্যকরভাবে রিভিউ করা যায়?",
        answer: (
            <>
                <p className="text-gray-700 leading-relaxed">
                    রিভিউ করার জন্য, **ভুল হওয়া প্রশ্নগুলো** এবং যে প্রশ্নগুলো **guessing** এর মাধ্যমে সঠিক হয়েছে, সেগুলো চিহ্নিত করুন। প্রতিটি ভুলের পিছনে থাকা **ধারণাগত দুর্বলতা** বের করুন।
                </p>
            </>
        ),
    },
    {
        id: "faq8",
        question: "GMAT প্রস্তুতির জন্য কিছু ভালো রিসোর্স কী কী?",
        answer: (
            <>
                <p className="text-gray-700 leading-relaxed">
                    GMAT প্রস্তুতির জন্য **অফিসিয়াল GMAT প্রিপারেটরি ম্যাটেরিয়ালস**, **GMAT Official Guide**, এবং বিভিন্ন **অনলাইন প্ল্যাটফর্মের মক টেস্ট সিরিজ** খুব কার্যকর।
                </p>
            </>
        ),
    },
];

export default function GmatPrepPage() {
    return (
        <>
          
          <GmatPrep></GmatPrep>
          <GmatCommonSection></GmatCommonSection>
            <FAQAccordion
                title={"বেশি জিজ্ঞাসিত প্রশ্ন"}
                data={faqs}
                className={"bg-white w-full max-w-7xl p-4 rounded-xl"}
            />

        </>
    )
}