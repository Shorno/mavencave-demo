import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import {Star} from "lucide-react";
import MITinfo from "@/components/universities/MITinfo";

const categories = [
    {
        id: "usnews",
        name: "ইউএস নিউজ",
        iconUrl: "/logo/us-news.png",
        items: [
            {rank: "২", description: "সেরা জাতীয় স্কুলসমূহ – ২০২৫"},
            {rank: "২", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩"},
            {rank: "২", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২"},
        ],
    },
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]"/>,
        items: [
            {rank: "৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩"},
            {rank: "৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২"},
            {rank: "১৬", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২"},
        ]
    },
     {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]"/>,
        items: [
            {rank: "৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩"},
            {rank: "৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২"},
        
        ]
    },
       {
        id: "webometrics",
        name: "ওয়েবোমেট্রিক্স – বিশ্ব",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৩", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
       
        ],
    },
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৫" },
            { rank: "১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৪" },
            { rank: "১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
            { rank: "১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            
        ],
    },

]

const highlights = [
    {title: "প্রতিষ্ঠিত", text: "১৮৬১"},
    {title: "মোট শিক্ষার্থীর সংখ্যা", text: "৩৫২১"},
    {title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "৩ঃ১"},
    {title: "গৃহীত হার", text: "৭%"},
    {title: "স্বীক্রতি", text: "নিউ ইংল্যান্ড কমিশন এডুকেশন(NECHE)"},
    {title: "গড় পড়াশোনার খরচ", text: "BDT ১৮ লক্ষ"},
    {title: "গড় জীবনযাত্রার খরচ", text: "BDT ৯ লক্ষ"},
]

const courses = [
    {name: "আর্কিটেকচার", count: "১", active: true},
    {name: "এরোস্পেস ইঞ্জিনিয়ারিং", count: "১"},
    {name: "ব্যাংকিং ও ফাইনান্স", count: "১"},
    {name: "বিজনেস অয়ানালেটিক্স", count: "১"},
    {name: "ব্যবসা প্রসাশন", count: "২"},
]

const intakes = [
    {date: "JAN'2026", status: "ভর্তি চলছে"},
    {date: "FEB'2026", status: "ভর্তি চলছে"},
    {date: "JUN'2026", status: "ভর্তি চলছে"},
    {date: "JUL'2026", status: "ভর্তি চলছে"},
    {date: "AUG'2026", status: "ভর্তি চলছে"},
    {date: "SEP'2026", status: "ভর্তি চলছে"},
]

export default function MIT() {
    return (
        <UniversityLayout
            backgroundUrl="/images/university/mit.jpeg"
            name="ম্যাসাচুসেটস ইন্সটিটিউট অফ টেকনোলজি"
            location="কেমব্রিজ, ম্যাসাচুসেটস, মার্কিন যুক্তরাষ্ট্র"
            logo="/logo/mit.png"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="যুক্তরাষ্ট্রে পড়াশোনা সংক্রান্ত মূল তথ্য নিতে দেওয়া হলো"
                    cards={highlights}
                />
                <MITinfo></MITinfo>
                <TopCoursesSection
                    courses={courses}
                    mscCourseName="এমএসসি ইন ফাইন্যান্স"
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
    );
}