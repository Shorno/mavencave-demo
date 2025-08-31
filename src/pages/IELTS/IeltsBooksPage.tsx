import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import IeltsCarouselSection from "@/components/ielts/Ielts-carousel-section.tsx";
import IeltsBooksListSection from "@/components/ielts/books-list.tsx";
import IeltsTipsSection from "@/components/ielts/tips.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import AllInfoTables from "@/components/ielts/all-info-table.tsx";
import FAQAccordion, {type FAQItem} from "@/components/study-abroad/FAQAccordion.tsx";
import {ieltsCarouselData} from "@/data/carousle-data.ts";

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "IELTS", path: "/study-abroad/exams/ielts"},
    {label: "বইসমূহ", path: "/study-abroad/exams/ielts/booklist"},
];

const faqs: FAQItem[] = [
    {
        id: "faq1",
        question: "আমি কি শুধু IELTS বইয়ের উপর নির্ভর করে প্রস্তুতি নিতে পারি?",
        answer: (
            <>
                IELTS বইগুলো প্রস্তুতির জন্য একটি গুরুত্বপূর্ণ রিসোর্স, তবে শুধুমাত্র বইয়ের উপর নির্ভর করাই যথেষ্ট নয়।
                আপনার দক্ষতা বাড়াতে প্র্যাকটিস টেস্ট, অনুশীলন, স্পিকিং প্র্যাকটিস ও মॉक পরীক্ষাও করা দরকার।
            </>
        ),
    },
    {
        id: "faq2",
        question: "আমি কীভাবে বই ব্যবহার করে আমার IELTS রাইটিং দক্ষতা বাড়াতে পারি?",
        answer: (
            <>
                IELTS বইয়ের লেখন বিভাগ মনোযোগ দিয়ে পড়ুন এবং দেওয়া উদাহরণ অনুরূপ প্রবন্ধ লিখে অনুশীলন করুন। Task 1 ও
                Task 2 এর কাঠামো বুঝে পর্যায়ক্রমে নিজেকে মূল্যায়ন করুন এবং গ্রামার ও শব্দভান্ডার উন্নত করুন।
            </>
        ),
    },
    {
        id: "faq3",
        question: "আমার কি IELTS বইয়ের সর্বশেষ সংস্করণ কেনা দরকার?",
        answer: (
            <>
                সর্বশেষ সংস্করণ কেনা ভালো কারণ এতে সর্বশেষ পরীক্ষা প্যাটার্ন এবং স্বীকৃত টেস্ট নমুনা থাকে। তবে বই কেনার
                পাশাপাশি অন্যান্য রিসোর্স যেমন অনলাইন টিউটোরিয়াল ও মক পরীক্ষা করা দরকার।
            </>
        ),
    },
    {
        id: "faq4",
        question: "প্রতিদিন কতক্ষণ IELTS বই পড়ে প্রস্তুতি নেওয়া উচিত?",
        answer: (
            <>
                আপনার সময় অনুযায়ী কমপক্ষে ১ থেকে ২ ঘণ্টা নিয়মিত পড়াশোনা করা উচিত। ধারাবাহিকতা এবং ফোকাস লম্বা সময়
                ধরে প্রস্তুতির ক্ষেত্রে বেশি গুরুত্বপূর্ণ।
            </>
        ),
    },
    {
        id: "faq5",
        question: "একটি ভালো মানের IELTS বইয়ে কী কী বিষয় থাকা উচিত?",
        answer: (
            <>
                একটি ভালো IELTS বইয়ে প্র্যাকটিস টেস্ট, বিভিন্ন টাস্কের বিস্তারিত গাইড, শব্দভান্ডার উন্নয়নের টিপস,
                রাইটিং ও স্পিকিং এর নমুনা প্রশ্ন ও টিপস থাকা উচিত, যা পরীক্ষার সকল দিক কভার করে।
            </>
        ),
    },
];

export default function IeltsBooksPage() {
    return (
        <>
            <BlogHeaderSection
                title="IELTS বই ২০২৪-২০২৫"
                updatedDate="২২ নভেম্বর, ২০২৪, ৫:৪৩"
                customSegments={customSegments}
            >
                <p>
                    IELTS পরীক্ষার জন্য কার্যকরভাবে প্রস্তুতি নিতে সঠিক বই নির্বাচন করা অত্যন্ত গুরুত্বপূর্ণ, কারণ এটি
                    ভালো স্কোর পাওয়ার চাবিকাঠি।
                </p>
                <p>
                    সবচেয়ে ভালো IELTS বই নির্ধারণ করা কঠিন হতে পারে, কারণ যে বই একজন শিক্ষার্থীর জন্য কার্যকর, তা
                    আরেকজনের জন্য ততটা সহায়ক নাও হতে পারে। প্রত্যেকের শেখার ধরন আলাদা।
                </p>
                <p>
                    তবে চিন্তার কিছু নেই—আমরা কিছু নির্ভরযোগ্য ও সুপারিশকৃত প্রস্তুতির বইয়ের তালিকা তৈরি করেছি, যেগুলো
                    আপনার IELTS যাত্রাকে সহজ করে তুলবে এবং উচ্চ স্কোর পেতে সহায়ক হবে।
                </p>
            </BlogHeaderSection>
            <IeltsCarouselSection data={ieltsCarouselData}/>
            <IeltsBooksListSection/>
            <IeltsTipsSection/>
            <NextStepsSection/>
            <AllInfoTables/>
            <FAQAccordion
                title={"বেশি জিজ্ঞাসিত প্রশ্ন"}
                data={faqs}
                className={"bg-white w-full max-w-7xl p-4 rounded-xl"}
            />

        </>
    )
}