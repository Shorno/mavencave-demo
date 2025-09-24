import UniversityLayout from "@/layout/UniversityLayout.tsx";
import HighlightSection from "@/components/universities/HighlightSection.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import {Star} from "lucide-react";
import ColumbiaUniversityInfo from "@/components/universities/ColumbiaUniversityInfo.tsx";

const categories = [
    {
        id: "usnews",
        name: "ইউএস নিউজ",
        iconUrl: "/logo/us-news.png",
        items: [
            { rank: "১৩", description: "সেরা জাতীয় স্কুলসমূহ – ২০২৫" },
            { rank: "৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "৬", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
        ],
    },
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "১১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "১১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
            { rank: "১৬", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
        ],
    },
    {
        id: "webometrics_world",
        name: "ওয়েবোমেট্রিক্স – বিশ্ব",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৯", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "৯", description: "সেরা বিশ্ববিদ্যালয় র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
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
            { rank: "৩৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৫" },
            { rank: "২৩", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৪" },
            { rank: "২২", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "১৯", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
        ],
    },
];

const highlights = [
    { title: "প্রতিষ্ঠিত", text: "১৭৫৪" },
    { title: "মোট শিক্ষার্থীর সংখ্যা", text: "৩২০০০" },
    { title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "১১৬০০" },
    { title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "৬:১" },
    { title: "গৃহীত হার", text: "৬%" },
    { title: "স্বীকৃতি", text: "মিডল স্টেটস কমিশন অন হায়ার এডুকেশন (MSCHE)" },
    { title: "গড় পড়াশোনার খরচ", text: "BDT ৩ লক্ষ" },
    { title: "গড় জীবনযাত্রার খরচ", text: "BDT ১ লক্ষ" },
];

const courses = [
    { name: "ব্যাংকিং ও ফাইনান্স", count: "১", active: true },
    { name: "বায়োমেডিক্যাল ইঞ্জিনিয়ারিং", count: "১" },
    { name: "সিভিল ইঞ্জিনিয়ারিং", count: "১" },
    { name: "কম্পিউটার সায়েন্স", count: "১" },
    { name: "ব্যবসা প্রশাসন", count: "১" },
];

const intakes = [
    { date: "JAN'2026", status: "ভর্তি চলছে" },
    { date: "AUG'2026", status: "ভর্তি চলছে" },
    { date: "SEP'2026", status: "ভর্তি চলছে" },
];
export default function ColumbiaUniversity(){
    return (
        <UniversityLayout
            backgroundUrl="/images/university/columbia.jpg"
            name="কলাম্বিয়া বিশ্ববিদ্যালয়"
            location="সনিউ ইয়র্ক সিটি, নিউ ইয়র্ক, মার্কিন যুক্তরাষ্ট্রর"
            logo="/logo/columbia.png"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="যুক্তরাষ্ট্রে পড়াশোনা সংক্রান্ত মূল তথ্য নিতে দেওয়া হলো"
                    cards={highlights}
                />
                <ColumbiaUniversityInfo/>
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