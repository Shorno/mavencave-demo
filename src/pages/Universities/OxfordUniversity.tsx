import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import {Star} from "lucide-react";
import OxfordUniversityInfo from "@/components/universities/OxfordUniversityInfo";

const categories = [
    {
        id: "usnews",
        name: "ইউএস নিউজ",
        iconUrl: "/logo/us-news.png",
        items: [
          
            {rank: "৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩"},
            {rank: "৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২"},
        ],
    },
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]"/>,
        items: [
            {rank: "১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩"},
            {rank: "১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২"},
        
        ]
    },
       {
        id: "webometrics",
        name: "ওয়েবোমেট্রিক্স – বিশ্ব",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
        ],
    },
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
            
        ],
    },
]

const highlights = [
    {title: "প্রতিষ্ঠিত", text: "১৮৮৫"},
    {title: "মোটা শিক্ষার্থীর সংখ্যা", text: "১৫৪২৪"},
    {title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "২০০৫"},
    {title: "", text: ""},
]

const courses = [
    {name: "ব্যাংকিং ও ফাইনান্স", count: "১", active: true},
    {name: "কম্পিউটার সায়েন্স", count: "১"},
    {name: "সিভিল ইঞ্জিনিয়ারিং", count: "১"},
    {name: "ব্যবসা প্রশাসন", count: "২"},
    {name: "অর্থনীতি", count: "১"},
]

const intakes = [
    {date: "MAY'2026", status: "ভর্তি চলছে"},
    {date: "JUN'2026", status: "ভর্তি চলছে"},
    {date: "SEP'2026", status: "ভর্তি চলছে"},
    {date: "OCT'2026", status: "ভর্তি চলছে"},
    {date: "NOV'2026", status: "ভর্তি চলছে"},
]

export default function OxfordUniversity() {
    return (
        <UniversityLayout
            backgroundUrl="/images/university/westminster.jpg"
            name="অক্সফোর্ড বিশ্ববিদ্যালয়"
            location="অক্সফোরড,মিসিসিপি, যুক্তরাষ্ট্র"
            logo="/logo/oxford"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="যুক্তরাষ্ট্রে পড়াশোনা সংক্রান্ত মূল তথ্য নিতে দেওয়া হলো"
                    cards={highlights}
                />
                <OxfordUniversityInfo/>
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
    );
}