import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import IeltsCarouselSection from "@/components/ielts/Ielts-carousel-section.tsx";
import {ieltsCarouselData} from "@/data/carousle-data.ts";
import IeltsSlotBookingModesSection from "@/components/ielts/slot-booking/IeltsSlotBookingModesSection.tsx";
import IeltsSlotBookingFeeSection from "@/components/ielts/slot-booking/IeltsSlotBookingFeeSection.tsx";
import IeltsSlotBookingDocumentsSection from "@/components/ielts/slot-booking/IeltsSlotBookingDocumentsSection.tsx";
import IeltsSlotBookingWhenWhereSection from "@/components/ielts/slot-booking/IeltsSlotBookingWhenWhereSection.tsx";
import IeltsSlotChangingSection from "@/components/ielts/slot-booking/IeltsSlotChangingSection.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import AllInfoTables from "@/components/ielts/all-info-table.tsx";
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "IELTS", path: "/study-abroad/exams/ielts"},
    {label: "Slot Booking", path: "/study-abroad/exams/ielts/slot-booking"},
];

const ieltsSlotFaq = [
    {
        id: "faq-booking-advance",
        question: "IELTS পরীক্ষা কতদিন আগে বুক করা যায়?",
        answer: (
            <>
                আইইএলটিএস পরীক্ষার জন্য সাধারণভাবে পরীক্ষা থেকে অন্তত ১ মাস আগে বুক করা ভালো। যেহেতু কিছু পরীক্ষার তারিখ
                দ্রুত পূর্ণ হয়ে যায়, তাই প্রস্তুতির জন্য যথেষ্ট সময় রেখে <b>৩-৪ মাস আগে</b> বুক করা সবচেয়ে
                কার্যকর।<br/>
                <span className="text-xs text-gray-600">(তবে, আইইএলটিএস অন কম্পিউটার পরীক্ষার ক্ষেত্রে অনেক সময় সপ্তাহখানেক পরের স্লটও পাওয়া যায়।)</span>
            </>
        ),
    },
    {
        id: "faq-speaking-slot",
        question: "IELTS স্পিকিং স্লট কীভাবে বুক করব?",
        answer: (
            <>
                রেজিস্ট্রেশনের পরে আপনি আপনার Speaking Test-এর স্লট অনলাইনে বুক করতে পারবেন। সাধারণত Listening, Reading,
                ও Writing পরীক্ষার <b>১৫ দিন আগে স্লট বুকিং উইন্ডো খুলে</b> এবং <b>পরীক্ষার ৯ দিন আগে বন্ধ হয়</b>। আপনি
                চাইলেও নির্ধারিত window-র মধ্যে Speaking slot নির্বাচন না করলে কেন্দ্র স্বয়ংক্রিয়ভাবে সময় নির্ধারণ
                করে দেয়[7][12].
            </>
        ),
    },
    {
        id: "faq-result-date",
        question: "IELTS পরীক্ষার ফলাফল কখন প্রকাশিত হয়?",
        answer: (
            <>
                <b>IELTS অন কম্পিউটার</b>-এর ফলাফল সাধারণত <b>১–৫ দিনের মধ্যে</b> প্রকাশিত হয়।<br/>
                <b>IELTS পেপার-ভিত্তিক</b>-এর ফলাফল <b>১৩ দিন</b> পরে প্রকাশিত হয়।<br/>
                <span className="text-xs text-gray-600">UKVI/লাইফ স্কিলস টেস্টের জন্যও এইসময় লাগে।</span>
            </>
        ),
    },
    {
        id: "faq-easy-month",
        question: "IELTS পরীক্ষার জন্য কোন মাসটি সহজ?",
        answer: (
            <>
                কোনো নির্দিষ্ট মাস সহজ বা কঠিন নির্ধারণ করা যায় না। যেসব শিক্ষার্থীর বেশি অবসর বা প্রস্তুতি সময় থাকে,
                যেমন <b>গ্রীষ্মকাল (এপ্রিল-জুন)</b> বা ছুটির সময়, তারা অনেক বেশি রিলাক্সড থাকেন[9][14]। ফলে, নিজের
                সময়সূচি, প্রস্তুতি এবং কোন মাসে চাপ কম থাকবে সেটি বিবেচনা করে স্লট বেছে নিন।
            </>
        ),
    },
    {
        id: "faq-retake",
        question: "আমি কি আমার ব্যান্ড স্কোর উন্নত করার জন্য IELTS পরীক্ষা আবার দিতে পারি?",
        answer: (
            <>
                হ্যাঁ, আপনি চাইলে আইইএলটিএস পরীক্ষা একাধিকবার দিতে পারেন। এছাড়া, এখন <b>IELTS One Skill Retake</b>–এর
                সুবিধা চালু হয়েছে, যাতে আপনি শুধু একটিমাত্র স্কিল (Listening, Reading, Writing, কিংবা Speaking)–এ
                পুনরায় পরীক্ষা দিতে পারেন ও স্কোর বাড়াতে পারেন।<br/>
                <span className="text-xs text-gray-600">এই ফিচার কেবল কম্পিউটার-ভিত্তিক পরীক্ষার ক্ষেত্রে উপলব্ধ এবং পরীক্ষার ৬০ দিনের মধ্যে Book করা যায়[10][15].</span>
            </>
        ),
    },
];

export default function SlotBookingPage() {
    return (
        <>
            <BlogHeaderSection
                title="IELTS Slot Booking"
                updatedDate="Apr 24, 2025, 07:31"
                customSegments={customSegments}
            >
                <p>
                    Have you decided to take the IELTS exam, or are you still planning to? Then, you should know how to
                    book your test slot to sit for the exam.
                </p>
                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                    IELTS is one of the most popular English language proficiency tests, trusted by
                    over <b>12,000</b> organisations globally in countries such as the USA, UK, Australia, Canada,
                    Ireland, and Germany.
                </p>
                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                    Whether you prefer the traditional offline method or the comfort of your home with the online
                    option, IELTS offers this flexibility. You can easily book your IELTS slot through the official IDP
                    IELTS Bangladesh website.
                </p>
                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                    We will decode each method so that you can choose the one that best suits you. Let’s start!
                </p>
            </BlogHeaderSection>
            <IeltsCarouselSection data={ieltsCarouselData}/>
            <IeltsSlotBookingModesSection/>
            <IeltsSlotBookingFeeSection/>
            <IeltsSlotBookingDocumentsSection/>
            <IeltsSlotBookingWhenWhereSection/>
            <IeltsSlotChangingSection/>
            <NextStepsSection/>
            <AllInfoTables/>
            <FAQAccordion title={"বেশি জিজ্ঞাসিত প্রশ্ন"} data={ieltsSlotFaq} className={"bg-white p-4 md:p-8 rounded-xl"}/>
        </>
    )
}