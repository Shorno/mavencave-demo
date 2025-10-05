
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
            { rank: "#27", description: "সেরা র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            
        ],
    },
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "#৩৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "#৩৩", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
            
        ],
    },
  
    
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "#১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৫" },
            { rank: "#১৩", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৪" },
            { rank: "#১৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "#৩৩", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৪" },
            { rank: "#৩৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
            { rank: "#৪১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২১" },
        ],
    },
];

const highlights = [
    { title: "প্রতিষ্ঠিত", text: "১৮৫৩" },
    { title: "মোট শিক্ষার্থীর সংখ্যা", text: "৬৫০০০" },
    { title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "৩০০০০" },
    { title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "১৫:১" },
    { title: "গৃহীত হার", text: "২৫%" },
    { title: "স্বীকৃতি", text: "এসোসিয়েশন টু এডভান্স কলিজিয়েট স্কুলস অফ বিজনেস(AACSB)" },
    { title: "গড় পড়াশোনার খরচ", text: "BDT ৫ লক্ষ" },
    { title: "গড় জীবনযাত্রার খরচ", text: "BDT ২ লক্ষ" },
];

const courses = [
    { name: "হিসাববিজ্ঞান", count: "২", active: true },
    { name: "জীববিজ্ঞান", count: "১" },
    { name: "ব্যাংকিং ও ফিনান্স", count: "১" },
    { name: "বায়োটেকনোলজি", count: "১" },
    { name: "আর্ট/ফাইন আর্ট", count: "১" },
];

const intakes = [
    { date: "JAN'2026", status: "ভর্তি চলছে" },
    { date: "FEB'2026", status: "ভর্তি চলছে" },
    { date: "MAR'2026", status: "ভর্তি চলছে" },
    { date: "JUL'2026", status: "ভর্তি চলছে" },
];
export default function MelbourneUniversity(){
    return (
        <UniversityLayout
            backgroundUrl="/images/university/melboune.jpg"
            name="মেলবোর্ন বিশ্ববিদ্যালয়"
            location="মেলবোর্ন,অস্ট্রেলিয়া,ভিক্টোরিয়া,অস্ট্রেলিয়া"
            logo="/logo/melbourne.png"
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
                    mscCourseName="এমএসসি ইন ফাইন্যান্স"
                    mscDuration="১৮ মাস"
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