

import FAQAccordion, {type FAQItem} from "@/components/study-abroad/FAQAccordion.tsx";

import GmatRegistration from "./GmatRegistration";
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
        question: "আমি কীভাবে GMAT পরীক্ষার জন্য নিবন্ধন করব?",
        answer: (
            <>
                <p className="text-gray-700 leading-relaxed">
                    GMAT পরীক্ষার জন্য **১০টি সহজ ধাপে রেজিস্ট্রেশন** করার প্রক্রিয়াটি খুবই সহজ। প্রথমে অফিসিয়াল GMAT ওয়েবসাইটে একটি অ্যাকাউন্ট তৈরি করুন। তারপর পছন্দের টেস্ট সেন্টার ও তারিখ নির্বাচন করে ব্যক্তিগত তথ্য পূরণ ও পরিচয় যাচাই করুন। শর্তাবলী স্বীকার করে ফি পরিশোধ করার পর আপনি একটি নিশ্চিতকরণ ইমেইল পাবেন।
                </p>
            </>
        ),
    },
    {
        id: "faq2",
        question: "GMAT পরীক্ষার জন্য নিবন্ধনের সময় কোন কোন ডকুমেন্ট প্রয়োজন?",
        answer: (
            <>
                <p className="text-gray-700 leading-relaxed">
                    আপনার কাছে অবশ্যই **বৈধ পরিচয়পত্র (যেমন: পাসপোর্ট), নিশ্চিতকরণ ইমেইল এবং পরীক্ষা কেন্দ্রের নিয়মাবলী** সম্পর্কে জ্ঞান থাকতে হবে। বিশেষ চাহিদাসম্পন্ন প্রার্থী হলে অতিরিক্ত নথি প্রয়োজন।
                </p>
            </>
        ),
    },
    {
        id: "faq3",
        question: "আমি কি আমার GMAT পরীক্ষা পুনঃনির্ধারণ করতে পারি?",
        answer: (
            <>
                <p className="text-gray-700 leading-relaxed">
                    হ্যাঁ, আপনি পরীক্ষা পুনঃনির্ধারণ করতে পারেন। এর জন্য GMAT অ্যাকাউন্টে লগইন করে "Manage Your Exam" ট্যাব থেকে "Reschedule Your Exam" নির্বাচন করুন এবং নতুন তারিখ ও স্থান নির্বাচন করে প্রযোজ্য ফি প্রদান করুন।
                </p>
            </>
        ),
    },
    {
        id: "faq4",
        question: "আমি যদি GMAT পরীক্ষা বাতিল করতে চাই, তবে কী হবে?",
        answer: (
            <>
                <p className="text-gray-700 leading-relaxed">
                    বাতিলকরণের নীতি এবং রিফান্ডের পরিমাণ আপনার অবস্থানের উপর ভিত্তি করে ভিন্ন হতে পারে। কখন বাতিল করছেন তার উপর নির্ভর করে আংশিক রিফান্ড পেতে পারেন, তবে **GMAT-এর বাতিলকরণ ফি ফেরতযোগ্য নয়**।
                </p>
            </>
        ),
    },
    {
        id: "faq5",
        question: "নিবন্ধনের সময় যদি প্রযুক্তিগত সমস্যা দেখা দেয়, তবে কী হবে?",
        answer: (
            <>
                <p className="text-gray-700 leading-relaxed">
                    নিবন্ধনের সময় প্রযুক্তিগত বা অন্য কোনো সমস্যা দেখা দিলে অবিলম্বে GMAT সহায়ক দলের সাথে যোগাযোগ করুন। তাদের ওয়েবসাইটে সাধারণত একটি হেল্পলাইন নম্বর বা যোগাযোগ ফর্ম দেওয়া থাকে।
                </p>
            </>
        ),
    },
];

export default function GmatRegistrationPage() {
    return (
        <>
          
          <GmatRegistration></GmatRegistration>
          <GmatCommonSection></GmatCommonSection>
            <FAQAccordion
                title={"বেশি জিজ্ঞাসিত প্রশ্ন"}
                data={faqs}
                className={"bg-white w-full max-w-7xl p-4 rounded-xl"}
            />

        </>
    )
}