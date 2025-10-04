import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import {Star} from "lucide-react";
import ManchesterUniversityInfo from "@/components/universities/ManchesterUniversityInfo.tsx";

const categories = [
    {
        id: "usnews",
        name: "ইউএস নিউজ",
        iconUrl: "/logo/us-news.png",
        items: [
            {rank: "৬৩", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩"},
        ],
    },
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]"/>,
        items: [
            {rank: "৫৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩"},
            {rank: "৫০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২২"},
        ]
    },
    {
        id: "webometrics_world",
        name: "ওয়েবোমেট্রিক্স – বিশ্ব",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৬১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
            { rank: "৬১", description: "সেরা জাতীয় স্কুলসমূহে – ২০২২" },
        ],
    },
    {
        id: "webometrics_national",
        name: "ওয়েবোমেট্রিক্স - ন্যাশনাল",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৬", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২২" },
        ],
    },
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৩৪", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৫" },
            { rank: "৩৪ – ১৫০০", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৪" },
            { rank: "২৮", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
            { rank: "২৭", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২২" },
        ],
    },
    {
        id: "complete_university",
        name: "কমপ্লিট ইউনিভার্সিটি গাইড",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "২২ - ১৫০০", description: "সেরা জাতীয় স্কুলসমূহে – 2024" },
        ],
    },
    {
        id: "guardian_global",
        name: "গার্ডিয়ান গ্লোবাল",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "৩১", description: "সেরা জাতীয় স্কুলসমূহে  – ২০২৫" },
            { rank: "২৪", description: "সেরা জাতীয় স্কুলসমূহে – 2024" },
            { rank: "৩০", description: "সেরা জাতীয় স্কুলসমূহে – ২০২৩" },
            { rank: "২৮", description: "সেরা জাতীয় স্কুলসমূহে – ২০২২" },
        ],
    },
]

const highlights = [
    {title: "প্রতিষ্ঠিত", text: "১৮২৪"},
    {title: "মোট শিক্ষার্থীর সংখ্যা", text: "৪০২৫০"},
    {title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "১০০০০"},
    {title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "১১:১"},
    {title: "গৃহীত হার", text: "৫৯%"},
    {title: "স্বীকৃতি", text: "দ্য হায়ার লার্নিং কমিশন (HLC)"},
    {title: "গড় জীবনযাত্রার খরচ", text: "BDT ২ লক্ষ"},
]

const courses = [
    {name: "হিসাববিজ্ঞান", count: "৯", active: true},
    {name: "এরোস্পেস ইঞ্জিনিয়ারিং", count: "৭"},
    {name: "নৃবিজ্ঞান", count: "১৮"},
    {name: "প্রত্নতত্ত্ব", count: "৫"},
    {name: "আর্কিটেকচার", count: "৬"},
]

const intakes = [
    {date: "FEB'2026", status: "ভর্তি চলছে"},
    {date: "AUG'2026", status: "ভর্তি চলছে"},
]

export default function UniversityOfManchester() {
    return (
        <UniversityLayout
            backgroundUrl="/images/manchester.jpg"
            name="ম্যানচেস্টার বিশ্ববিদ্যালয়"
            location="ম্যানচেস্টার, যুক্তরাজ্য"
            logo="/logo/manchester.png"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="যুক্তরাজ্যে পড়াশোনা সংক্রান্ত মূল বিবরণগুলো এখানে দেওয়া হলো"
                    cards={highlights}
                />
                <ManchesterUniversityInfo/>
                <TopCoursesSection
                    courses={courses}
                    mscCourseName="বিএসসি ইন ম্যানেজমেন্ট (অ্যাকাউন্টিং অ্যান্ড ফাইন্যান্স)"
                    mscDuration="৩৬ মাস"
                />
                <IntakeSection
                    intakes={intakes}
                />
                <EligibilityConditionSection
                    conditions={[
                        {label: "প্রয়োজনীয় পরীক্ষা"},
                        {label: "অতিরিক্ত প্রয়োজনীয়তা"}
                    ]}
                />
                <RankingSection
                    categories={categories}
                />
            </div>
        </UniversityLayout>
    );
}
