
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
           
            { rank: "#২৮", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "#২৮", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
        ],
    },
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "#৫৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
           
        ],
    },
   
    {
        id: "webometrics_national",
        name: "ওয়েবোমেট্রিক্স - ন্যাশনাল",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৮", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
        ],
    },
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "#২", description: "সেরা বিশ্ব জাতীয় স্কুলসমূহ – ২০২৫" },
            { rank: "#১৮", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২০" },
            { rank: "#১৯", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৪" },
            { rank: "#৪১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "#৩৮", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
        ],
    },
];

const highlights = [
    { title: "প্রতিষ্ঠিত", text: "১৮৫০" },
    { title: "মোট শিক্ষার্থীর সংখ্যা", text: "৩২০০০" },
    { title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "১৫৮২০" },
    { title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "৬:১" },
    { title: "গৃহীত হার", text: "২৫%" },
    { title: "স্বীকৃতি", text: "মিডল স্টেটস কমিশন অন হায়ার এডুকেশন (MSCHE)" },
    { title: "গড় পড়াশোনার খরচ", text: "BDT ৬ লক্ষ" },
    { title: "গড় জীবনযাত্রার খরচ", text: "BDT ৪ লক্ষ" },
];

const courses = [
    { name: "হিসাববিজ্ঞান", count: "২", active: true },
    { name: "বিজ্ঞাপন", count: "১" },
    { name: "এরোস্পেস ইঞ্জিনিয়ারিং", count: "১" },
    { name:"এনিমেল এন্ড ভেটিরিনারি স্টডিজ", count: "৯" },
    { name: "নবিজ্ঞান", count: "৩" },
];

const intakes = [
    { date: "JAN'2026", status: "ভর্তি চলছে" },
    { date: "FEB'2026", status: "ভর্তি চলছে" },
    { date: "MAR'2026", status: "ভর্তি চলছে" },
    { date: "JUN'2026", status: "ভর্তি চলছে" },
    { date: "JUL'2026", status: "ভর্তি চলছে" },
    { date: "AUG'2026", status: "ভর্তি চলছে" },
    { date: "SEP'2026", status: "ভর্তি চলছে" },
    { date: "OCT'2026", status: "ভর্তি চলছে" },
];
export default function SydneyUniversity(){
    return (
        <UniversityLayout
            backgroundUrl="/images/university/sydney.jpeg"
            name="সিডনি বিশ্ববিদ্যালয়"
            location="সিডনি- অস্ট্রেলিয়া, নিউ সাউথ ও্যেলস-অস্ট্রেলিয়া,অস্ট্রেলিয়া"
            logo="/logo/sydney.png"
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