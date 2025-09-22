import {ExamCard} from "@/components/exams/exam-card.tsx";


import canadaFlag from "/images/exams/canada.png";
import germanyFlag from "/images/exams/germany.png";
import irelandFlag from "/images/exams/ireland.png";
import newZealandFlag from "/images/exams/new-zealand.png";
import usaFlag from "/images/exams/usa.png";
import duolingoFlag from "/images/exams/duolingo.png";

const exams = [
    {
        flag: canadaFlag,
        title: "IELTS",
        description: "ইংরেজি ভাষার দক্ষতা পরিমাপের জন্য বিশ্বব্যাপী গ্রহণযোগ্য একটি পরীক্ষা, বিশেষ করে যুক্তরাজ্য, কানাডা, অস্ট্রেলিয়া ও নিউজিল্যান্ডে উচ্চশিক্ষার জন্য প্রয়োজন হয়।",
        linkLabel: "শুরু করুন",
        href: "/exams/ielts/overview",
    },
    {
        flag: germanyFlag,
        title: "SAT",
        description: "যুক্তরাষ্ট্রে ব্যাচেলর ডিগ্রির জন্য আবেদন করতে হলে শিক্ষার্থীদের অংক ও ইংরেজিতে দক্ষতা প্রমাণের জন্য এই পরীক্ষাটি দিতে হয়।",
        linkLabel: "শুরু করুন",
        href: "/exams/sat/practice",
    },
    {
        flag: irelandFlag,
        title: "TOEFL",
        description: "TOEFL একটি আন্তর্জাতিক ইংরেজি দক্ষতা মূল্যায়ন পরীক্ষা যা বিশ্ববিদ্যালয়ে ভর্তি, বিশেষ করে যুক্তরাষ্ট্রে পড়াশোনার জন্য প্রয়োজন হয়।",
        linkLabel: "শুরু করুন",
        href: "/exams/toefl/overview",
    },
    {
        flag: newZealandFlag,
        title: "GRE",
        description: "মাস্টার্স ও পিএইচডি প্রোগ্রামে ভর্তি হওয়ার জন্য একটি স্ট্যান্ডার্ড পরীক্ষা, যা মৌলিক গাণিতিক, বিশ্লেষণী ও মৌখিক দক্ষতা যাচাই করে।",
        linkLabel: "শুরু করুন",
        href: "/exams/gre/overview",
    },
    {
        flag: usaFlag,
        title: "GMAT",
        description: "ব্যবসায় প্রশাসন বা MBA প্রোগ্রামের জন্য একটি গ্রহণযোগ্য পরীক্ষা যা বিশ্লেষণ, যুক্তি, গাণিতিক ও ইংরেজি দক্ষতা যাচাই করে।",
        linkLabel: "শুরু করুন",
        href: "/exams/gmat/practice",
    },
    {
        flag: duolingoFlag,
        title: "Duolingo English Test",
        description: "একটি অনলাইন ভিত্তিক ইংরেজি পরীক্ষা, যেটি দ্রুত ও সহজে বাড়ি থেকেই দেওয়া যায় এবং অনেক বিশ্ববিদ্যালয় এটি গ্রহণ করে।",
        linkLabel: "শুরু করুন",
        href: "/exams/duolingo/practice",
    },
];


export default function ExamGrid() {
    return (
        <section className={"container mx-auto px-4 md:px-0 py-8"}>
            <h2 className="text-2xl font-bold text-center mb-8">
                জনপ্রিয় বিদেশে উচ্চশিক্ষার পরীক্ষার সমূহ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {exams.map((exam, idx) => (
                    <ExamCard key={idx} {...exam} />
                ))}
            </div>
        </section>
    );
}
