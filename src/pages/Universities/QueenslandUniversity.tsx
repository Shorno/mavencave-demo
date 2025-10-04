
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import HighlightSection from "@/components/universities/HighlightSection.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import {Star} from "lucide-react";
import MaccuireUniversityInfo from "@/components/universities/MaccuireUniversityInfo";


const categories = [
    {
        id: "usnews",
        name: "ইউএস নিউজ",
        iconUrl: "/logo/us-news.png",
        items: [
            { rank: "#৩৬", description: "সেরা জাতীয় স্কুলসমূহ – ২০২৩" },
            
        ],
    },
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "#৫-১৫০০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "#৫৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৫" },
            { rank: "#৬৬", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২০" },
        ],
    },
   
  
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "#৫", description: "সেরা জাতীয় স্কুলসমূহ – ২০২৫" },
            { rank: "#৪০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৫" },
            { rank: "#৪০-১৫০০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৪" },
            { rank: "#৫০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "#৪৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
            { rank: "#৪৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২০" },
        ],
    },
];

const highlights = [
    { title: "প্রতিষ্ঠিত", text: "১৯০৯" },
    { title: "মোট শিক্ষার্থীর সংখ্যা", text: "৫৬০০০" },
    { title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "২১০০০" },
    { title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "১৫:১" },
    { title: "গৃহীত হার", text: "৮০%" },
    { title: "স্বীকৃতি", text: " এসসিয়েশন টু এডভান্স কলিজিয়েট স্কুলস অফ বিজনেস(AACSB)" },
    { title: "গড় পড়াশোনার খরচ", text: "BDT ৬ লক্ষ" },
    { title: "গড় জীবনযাত্রার খরচ", text: "BDT ৩ লক্ষ" },
];

const courses = [
    { name: "হিসাববিজ্ঞান", count: "২", active: true },
    { name: "বিজ্ঞাপন", count: "১" },
    { name: "এরোস্পেস ইঞ্জিনিয়ারিং", count: "১" },
    { name:"এনিমেল এন্ড ভেটিরিনারি স্টডিজ", count: "৯" },
    { name: "নবিজ্ঞান", count: "৩" },
];

const intakes = [
    { date: "JUL'2026", status: "ভর্তি চলছে" },

];
export default function QueenslandUniversity(){
    return (
        <UniversityLayout
            backgroundUrl="/images/university/queensland.jpeg"
            name="কুইন্সল্যান্ড বিশ্ববিদ্যালয়"
            location="ব্রিসবেন,কুইন্সল্যান্ড,অস্ট্রেলিয়া"
            logo="/logo/queens.png"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="যুক্তরাষ্ট্রে পড়াশোনা সংক্রান্ত মূল তথ্য নিতে দেওয়া হলো"
                    cards={highlights}
                />
                <MaccuireUniversityInfo/>
                <TopCoursesSection
                    courses={courses}
                    mscCourseName="মাস্টার অফ কমার্স ইন প্রফেশনাল একাউন্টিং"
                    mscDuration="২৪ মাস"
                />
                <IntakeSection
                    intakes={intakes}
                />
                <EligibilityConditionSection
                    conditions={[
                        {label: "প্রয়োজনীয় পরীক্ষা"}
                    ]}
                />
                <RankingSection
                    categories={categories}
                />
            </div>
        </UniversityLayout>
    )
}