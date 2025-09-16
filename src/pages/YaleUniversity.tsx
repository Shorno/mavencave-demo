import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import { Star } from "lucide-react";
import YaleUniversityInfo from "@/components/universities/YaleUniversityInfo.tsx";

const categories = [
    {
        id: "usnews",
        name: "ইউএস নিউজ",
        iconUrl: "/logo/us-news.png",
        items: [
            { rank: "৫", description: "সেরা জাতীয় স্কুলসমূহ – ২০২৫" },
            { rank: "১১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
        ],
    },
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৯", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "৯", description: "সেরা বিশ্ববিদ্যালয় র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
        ],
    },
    {
        id: "webometrics",
        name: "ওয়েবোমেট্রিক্স – বিশ্ব",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "১৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
        ],
    },
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "২৩", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৫" },
            { rank: "১৮", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২৩" },
            { rank: "১৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহ – ২০২২" },
        ],
    },
];

const highlights = [
    { title: "প্রতিষ্ঠিত", text: "১৭০১" },
    { title: "মোট শিক্ষার্থীর সংখ্যা", text: "১২০৬০" },
    { title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "২৫৩৩" },
    { title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "৬:১" },
    { title: "গৃহীত হার", text: "৬%" },
    { title: "স্বীকৃতি", text: "নিউ ইংল্যান্ড অ্যাসোসিয়েশন অব স্কুলস অ্যান্ড কলেজেস (NEASC)" },
    { title: "গড় পড়াশোনার খরচ", text: "BDT ১১ লক্ষ" },
    { title: "গড় জীবনযাত্রার খরচ", text: "BDT ৬ লক্ষ" },
];

const courses = [
    { name: "আইন", count: "১", active: true },
    { name: "কম্পিউটার সায়েন্স", count: "১" },
    { name: "জীববিজ্ঞান", count: "১" },
    { name: "ব্যবসা প্রশাসন", count: "১" },
    { name: "মাস্টার অব LL.M.", count: "১" },
];

const intakes = [
    { date: "JAN’2026", status: "ভর্তি চলছে" },
    { date: "MAY'2026", status: "ভর্তি চলছে" },
    { date: "AUG'2026", status: "ভর্তি চলছে" },
];

export default function YaleUniversity() {
    return (
        <UniversityLayout
            backgroundUrl="/images/university/yale.jpg"
            name="ইয়েল বিশ্ববিদ্যালয়"
            location="নিউ হ্যাভেন, কানেকটিকাট, মার্কিন যুক্তরাষ্ট্র"
            logo="/images/icons/yale-icon.png"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="যুক্তরাষ্ট্রে পড়াশোনা সংক্রান্ত মূল তথ্য নিচে দেওয়া হলো"
                    cards={highlights}
                />
                <YaleUniversityInfo/>
                <TopCoursesSection
                    courses={courses}
                    mscCourseName="মাস্টার অব LL.M."
                    mscDuration="১২ মাস"
                />
                <IntakeSection
                    intakes={intakes}
                />
                <EligibilityConditionSection
                    conditions={[
                        { label: "প্রয়োজনীয় পরীক্ষা" }
                    ]}
                />
                <RankingSection
                    categories={categories}
                />
            </div>
        </UniversityLayout>
    );
}
