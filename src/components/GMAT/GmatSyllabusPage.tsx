

import FAQAccordion, {type FAQItem} from "@/components/study-abroad/FAQAccordion.tsx";

import GmatSyllabus from "./GmatSyllabus";
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
        question: "GMAT Math সিলেবাস কী?",
        answer: (
            <>
                GMAT Focus Edition-এর Quantitative Reasoning সেকশনে মূলত দুই ধরনের প্রশ্ন থাকে: **Data Sufficiency** এবং **Problem Solving**। সিলেবাসের মূল বিষয়গুলো হলো: **Arithmetic (পাটিগণিত)**, **Algebra (বীজগণিত)**, এবং **Geometry (জ্যামিতি)**।
            </>
        ),
    },
    {
        id: "faq2",
        question: "GMAT কি কঠিন পরীক্ষা?",
        answer: (
            <>
                GMAT পরীক্ষা অবশ্যই চ্যালেঞ্জিং, তবে সঠিক প্রস্তুতি এবং অধ্যবসায়ের মাধ্যমে সফল হওয়া সম্ভব। এটি আপনার যুক্তি এবং বিশ্লেষণাত্মক দক্ষতা পরীক্ষা করে।
            </>
        ),
    },
    {
        id: "faq3",
        question: "৬৪০ কি একটি ভালো GMAT স্কোর?",
        answer: (
            <>
                GMAT Focus Edition-এর স্কোর রেঞ্জ হলো **২০৫ থেকে ৮৫৫**। ৬৪০ স্কোর হলো প্রায় **৮০তম পার্সেন্টাইল** (80th Percentile)-এর কাছাকাছি, যা বেশিরভাগ টপ-২৫ বিজনেস স্কুলের জন্য একটি খুবই ভালো এবং প্রতিযোগিতামূলক স্কোর।
            </>
        ),
    },
    {
        id: "faq4",
        question: "GMAT স্কোর কিভাবে হিসাব করা হয়?",
        answer: (
            <>
                GMAT Focus Edition-এর স্কোর প্রতিটি সেকশনের (Quantitative Reasoning, Verbal Reasoning, এবং Data Insights) পারফরম্যান্সের ওপর নির্ভর করে। এটি একটি **কম্পিউটার অ্যাডাপটিভ টেস্ট (CAT)**, যার ফলে আপনার দেওয়া প্রতিটি সঠিক বা ভুল উত্তরের ভিত্তিতে পরবর্তী প্রশ্নের কঠিনতা পরিবর্তিত হয় এবং ফাইনাল স্কোর জটিল অ্যালগরিদমের মাধ্যমে হিসাব করা হয়।
            </>
        ),
    },
    {
        id: "faq5",
        question: "GMAT পরীক্ষার স্কোর প্যাটার্ন কী?",
        answer: (
            <>
                GMAT Focus Edition-এর তিনটি সেকশন আছে: Quantitative Reasoning, Verbal Reasoning, এবং Data Insights।
                <ul>
                    <li>**প্রতিটি সেকশনের স্কোর রেঞ্জ:** ৬০ থেকে ৯০।</li>
                    <li>**মোট স্কোর রেঞ্জ:** ২০৫ থেকে ৮৫৫ (৫-পয়েন্টের ব্যবধানে)।</li>
                </ul>
            </>
        ),
    },
    
   
];

export default function GmatSyllabusPage() {
    return (
        <>
          
          <GmatSyllabus></GmatSyllabus>
          <GmatCommonSection></GmatCommonSection>
            <FAQAccordion
                title={"বেশি জিজ্ঞাসিত প্রশ্ন"}
                data={faqs}
                className={"bg-white w-full max-w-7xl p-4 rounded-xl"}
            />

        </>
    )
}