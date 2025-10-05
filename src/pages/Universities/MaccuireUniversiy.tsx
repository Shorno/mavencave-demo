
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
            { rank: "১৯২", description: "সেরা জাতীয় স্কুলসমূহ – ২০২৫" },
            { rank: "১০৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
          
        ],
    },
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "১০-১৫০০", description: "সেরা জাতীয় স্কুলসমূহ – ২০২৪" },
            { rank: "১৭৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
         
        ],
    },
    {
        id: "webometrics_world",
        name: "ওয়েবোমেট্রিক্স – বিশ্ব",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "২১৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
          
        ],
    },
    {
        id: "webometrics_national",
        name: "ওয়েবোমেট্রিক্স - ন্যাশনাল",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৯২", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
        ],
    },
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "#১৩৩", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৫" },
            { rank: "১৩৩-১৫০০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৪" },
            { rank: "#১৯৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "২০০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
        ],
    },
];

const highlights = [
    { title: "প্রতিষ্ঠিত", text: "১৯৬৪" },
    { title: "মোট শিক্ষার্থীর সংখ্যা", text: "৮৬৪১" },
    { title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "১১৬০০" },
    { title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "১৫:১" },
    { title: "গৃহীত হার", text: "৩০%" },
    { title: "স্বীকৃতি", text: "এসোসিয়েশন টু এডভান্স কলিজিয়েট স্কুলস অফ বিজনেস(AACSB)" },
    { title: "গড় পড়াশোনার খরচ", text: "BDT ৭ লক্ষ" },
    { title: "গড় জীবনযাত্রার খরচ", text: "BDT ৪ লক্ষ" },
];

const courses = [
    { name: "হিসাববিজ্ঞান", count: "১১", active: true },
    { name: "আর্টস/ফাইন আর্ট", count: "৫" },
    { name: "নবিজ্ঞান", count: "২" },
    { name: "ক্রিত্রিম বুদ্ধিমত্নিনমেশিন লার্নিং", count: "৫" },
    { name: "প্রত্নত্ত্ব", count: "২" },
];

const intakes = [
    { date: "JAN'2026", status: "ভর্তি চলছে" },
    { date: "FEB'2026", status: "ভর্তি চলছে" },
    { date: "MAR'2026", status: "ভর্তি চলছে" },
    { date: "APR'2026", status: "ভর্তি চলছে" },
    { date: "MAY'2026", status: "ভর্তি চলছে" },
    { date: "JUN'2026", status: "ভর্তি চলছে" },
    { date: "JUL'2026", status: "ভর্তি চলছে" },
    { date: "SEP'2026", status: "ভর্তি চলছে" }
];
export default function MaccuireUniversity(){
    return (
        <UniversityLayout
            backgroundUrl="/images/university/images.jpeg"
            name="ম্যাককোয়ারি বিশ্ববিদ্যালয়"
            location="সিডনি-অস্ট্রেলিয়া, নিউ সাউথ ওয়েলস - অস্ট্রেলিয়া, অস্ট্রেলিয়া"
            logo="/logo/macquarie.png"
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
                    mscCourseName="মাস্টার অফ ফরেন্সিক একাউন্টিং এন্ড ফিনান্সিয়াল ক্রাইম"
                    mscDuration="১২ মাস"
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