
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import HighlightSection from "@/components/universities/HighlightSection.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import {Star} from "lucide-react";
import MonashUniversityInfo from "@/components/universities/MonashUniversityInfo";



const categories = [
    {
        id: "usnews",
        name: "ইউএস নিউজ",
        iconUrl: "/logo/us-news.png",
        items: [
           
            { rank: "#৩৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
        
        ],
    },
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "#২-১৫০০", description: "সেরা বিশ্ব জাতীয় স্কুলসমূহ – ২০২৪" },
            { rank: "#৪৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "#৭৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২০" },
        ],
    },
  
   
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "#৪", description: "সেরা জাতীয় স্কুলসমূহ – ২০২৫" },
            { rank: "#৩৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৫" },
            { rank: "#৩৭-১৫০০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৪" },
            { rank: "#৫৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "#৫৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
            { rank: "#৫৮", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২০" },
        ],
    },
];

const highlights = [
    { title: "প্রতিষ্ঠিত", text: "১৯৫৮" },
    { title: "মোট শিক্ষার্থীর সংখ্যা", text: "৬৫০০০" },
    { title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "১৯০৭৬" },
    { title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "২২:১" },
    { title: "গৃহীত হার", text: "৪০%" },
    { title: "স্বীকৃতি", text: " AACSB,EQUIS,AMBA" },
    
    { title: "গড় জীবনযাত্রার খরচ", text: "BDT ৪ লক্ষ" },
];

const courses = [
    { name: "আর্কিটেকচার", count: "৩", active: true },
    { name: "কত্রিম বুদ্ধিমত্তা/মেশিন লার্নিং", count: "১৩" },
    { name: "নবিজ্ঞান", count: "৭৮" },
    { name: "প্রত্নতত্ত্ব", count: "১" },
    { name:"হিসাববিজ্ঞান", count: "১০৮" },
];

const intakes = [
    { date: "JUN'2026", status: "ভর্তি চলছে" },
    { date: "JUL'2026", status: "ভর্তি চলছে" },
    { date: "AUG'2026", status: "ভর্তি চলছে" },
];
export default function MonashUniversity(){
    return (
        <UniversityLayout
            backgroundUrl="/images/university/monash.jpg"
            name="মনাশ বিশ্ববিদ্যালয়"
            location="মেলবোরন- অস্ট্রেলিয়া, ভিক্টোরিয়া, অস্ট্রেলিয়া"
            logo="/logo/monash.png"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="যুক্তরাষ্ট্রে পড়াশোনা সংক্রান্ত মূল তথ্য নিতে দেওয়া হলো"
                    cards={highlights}
                />
                <MonashUniversityInfo/>
                <TopCoursesSection
                    courses={courses}
                    mscCourseName="মাস্টার অফ আর্কিটেকচার"
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