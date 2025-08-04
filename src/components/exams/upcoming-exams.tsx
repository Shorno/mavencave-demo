import {ExamScheduleCard} from "@/components/exams/exam-schedule-card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ArrowDown} from "lucide-react";

const exams = [
    {
        image: "/images/exams/cover1.png",
        title: "IELTS for UKVI",
        subtitle: "IELTS অন কম্পিউটার – ধানমন্ডি IDP অফিস",
        date: "২৭ জুলাই",
        time: "সকাল ৯:০০ টা",
        duration: "ফলাফল: ১ থেকে ৫ দিনের মধ্যে",
        location: "IELTS অন কম্পিউটার",
        fee: "BDT ২৭,৪৫০",
        seatType: "ওয়ান স্কিল রিটেক: উপলব্ধ",
        venue: "",
        linkLabel: "বিশ্তারিত দেখুন",
    },
    {
        image: "/images/exams/cover2.png",
        title: "IELTS একাডেমিক",
        subtitle: "IELTS অন কম্পিউটার – ধানমন্ডি IDP অফিস",
        date: "২৭ জুলাই",
        time: "সকাল ৯:০০ টা",
        duration: "ফলাফল: ১ থেকে ৫ দিনের মধ্যে",
        location: "IELTS অন কম্পিউটার",
        fee: "BDT ২৭,৪৫০",
        seatType: "ওয়ান স্কিল রিটেক: উপলব্ধ",
        venue: "",
        linkLabel: "বিশ্তারিত দেখুন",
    },
    {
        image: "/images/exams/cover3.png",
        title: "IELTS সাধারণ প্রশিক্ষণ",
        subtitle: "IELTS অন কম্পিউটার – বনানী",
        date: "২৭ জুলাই",
        time: "সকাল ৯:০০ টা",
        duration: "ফলাফল: ১ থেকে ৫ দিনের মধ্যে",
        location: "IELTS অন কম্পিউটার",
        fee: "BDT ২৭,৪৫০",
        seatType: "ওয়ান স্কিল রিটেক: উপলব্ধ",
        venue: "",
        linkLabel: "বিশ্তারিত দেখুন",
    },
];


export default function UpcomingExamSection() {
    return (
        <section className="py-10 px-4 sm:px-0 container mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-center mb-2">আসন পরীক্ষার তারিখসমূহ</h2>
            <p className="text-gray-500 text-center mb-8">প্রধান পরীক্ষাগুলোর পরবর্তী তারিখ সম্পর্কে আপডেটেড থাকুন</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full  mx-auto">
                {exams.map((exam, idx) => (
                    <ExamScheduleCard key={idx} {...exam} />
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <Button size={"xl"}>
                    আরও দেখুন <ArrowDown/>
                </Button>
            </div>
        </section>
    );
}
