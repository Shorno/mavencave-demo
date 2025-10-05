import HighlightSection from "@/components/universities/HighlightSection.tsx";
import UniversityLayout from "@/layout/UniversityLayout.tsx";
import TopCoursesSection from "@/components/universities/TopCoursesSection.tsx";
import IntakeSection from "@/components/universities/IntakeSection.tsx";
import EligibilityConditionSection from "@/components/universities/EligibilityConditionSection.tsx";
import RankingSection from "@/components/universities/RankingSection.tsx";
import {Star} from "lucide-react";

const TorontoUniversityInfo = () => {
    return (
        <section className="mx-auto bg-white rounded-2xl p-10 shadow-md">
            <h2 className="text-3xl font-bold mb-6">
                টরন্টো বিশ্ববিদ্যালয় সম্পর্কে
            </h2>
            <p className="mb-4 leading-relaxed text-gray-800">
                টরন্টো বিশ্ববিদ্যালয়, ১৮২৭ সালে প্রতিষ্ঠিত, কানাডা এবং বিশ্বের অন্যতম শীর্ষস্থানীয় উচ্চশিক্ষা প্রতিষ্ঠান হিসেবে বিকশিত হয়েছে। শতাব্দীরও বেশি সময়ের সমৃদ্ধ ইতিহাস নিয়ে এটি গবেষণার উৎকর্ষতা এবং বৈচিত্র্যময় প্রোগ্রামের জন্য পরিচিত একটি প্রাণবন্ত একাডেমিক সম্প্রদায়ে রূপ নিয়েছে।
            </p>
            <p className="mb-4 leading-relaxed text-gray-800">
                মোট ৮৪,০০০ শিক্ষার্থী নিয়ে এটি একটি গতিশীল শিক্ষার্থী সম্প্রদায় গড়ে তুলেছে, যার মধ্যে ২০,১৬০ জন আন্তর্জাতিক শিক্ষার্থী বিভিন্ন দেশ থেকে এসেছে। এই বৈচিত্র্য ক্যাম্পাস অভিজ্ঞতাকে সমৃদ্ধ করে এবং শিক্ষার্থীদের মধ্যে একটি বৈশ্বিক দৃষ্টিভঙ্গি গড়ে তোলে।
            </p>
            <p className="mb-4 leading-relaxed text-gray-800">
                বিশ্ববিদ্যালয়টি টরন্টোতে অবস্থিত, যা একটি সুন্দর ও নগর ক্যাম্পাস পরিবেশ প্রদান করে। প্রধান সুবিধাসমূহের মধ্যে রয়েছে:
                <div className="ml-8 mt-2">
                    <li>অত্যাধুনিক লাইব্রেরি</li>
                    <li>গবেষণা কেন্দ্র</li>
                    <li>আধুনিক শ্রেণিকক্ষ ও ল্যাবরেটরি</li>
                    <li>শিক্ষার্থী বিনোদন ও সুস্থতা কেন্দ্র</li>
                </div>
            </p>
            <p className="mb-4 leading-relaxed text-gray-800">
                টরন্টো বিশ্ববিদ্যালয় শিল্পের প্রয়োজনের সাথে সামঞ্জস্যপূর্ণ বিস্তৃত প্রোগ্রাম অফার করে। কিছু জনপ্রিয় প্রোগ্রাম হলো:
                <div className="ml-8 mt-2">
                    <li>ইঞ্জিনিয়ারিং</li>
                    <li>বিজনেস অ্যাডমিনিস্ট্রেশন</li>
                    <li>কম্পিউটার সায়েন্স</li>
                    <li>হেলথ সায়েন্সেস</li>
                </div>
            </p>
            <p className="mb-4 leading-relaxed text-gray-800">
                ভর্তির হার ৪৩%, এবং সারা বছর ধরে একাধিক ইনটেক পিরিয়ড রয়েছে। বিশ্ববিদ্যালয়টি আন্তর্জাতিক শিক্ষার্থীদের জন্য বিস্তৃত সহায়তা সেবা প্রদান করে, যা একটি মসৃণ পরিবর্তন এবং সফল একাডেমিক যাত্রা নিশ্চিত করে।
            </p>
            <p className="mb-4 leading-relaxed text-gray-800">
                টরন্টো বিশ্ববিদ্যালয় নিম্নলিখিত সংস্থাগুলোর দ্বারা স্বীকৃত:
                <div className="ml-8 mt-2">
                    <li>অ্যাসোসিয়েশন অব আমেরিকান ইউনিভার্সিটিজ (AAU)</li>
                    <li>কাউন্সিল অব অন্টারিও ইউনিভার্সিটিজ (COU)</li>
                    <li>ইউনিভার্সিটিজ কানাডা</li>
                </div>
            </p>
            <p className="mb-4 leading-relaxed text-gray-800">
                সব মিলিয়ে, টরন্টো বিশ্ববিদ্যালয় তার মানসম্পন্ন শিক্ষা এবং ক্যারিয়ার প্রস্তুতির প্রতি প্রতিশ্রুতির জন্য আলাদা করে দাঁড়িয়েছে, যা আপনাকে আপনার নির্বাচিত ক্ষেত্রে উৎকর্ষ অর্জনে প্রস্তুত করে।
            </p>
        </section>
    );
}

const categories = [
    {
        id: "times_higher",
        name: "টাইমস হায়ার এডুকেশন",
        icon: <Star className="w-6 h-6 text-[#6246ea]"/>,
        items: [
            {rank: "১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৫"},
        ]
    },
    {
        id: "qs_rank",
        name: "কিউএস র‍্যাঙ্ক",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "২৫", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৫" },
            { rank: "২১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৪" },
            { rank: "৩ৄ", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
            { rank: "২৬", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২২" },
        ],
    },
    {
        id: "webometrics_national",
        name: "ওয়েবোমেট্রিক্স - ন্যাশনাল",
        icon: <Star className="w-6 h-6 text-[#6246ea]" />,
        items: [
            { rank: "১", description: "সেরা বিশ্ব র‍্যাঙ্কিং স্কুলসমূহে – ২০২৩" },
        ],
    },
]

const highlights = [
    {title: "প্রতিষ্ঠিত", text: "১৮২৭"},
    {title: "মোট শিক্ষার্থীর সংখ্যা", text: "৮৪০০০"},
    {title: "মোট আন্তর্জাতিক শিক্ষার্থী", text: "২০১৬০"},
    {title: "স্টুডেন্ট-ফ্যাকাল্টি অনুপাত", text: "১৬:১"},
    {title: "গৃহীত হার", text: "৪৩%"},
    {title: "স্বীকৃতি", text: "অ্যাসোসিয়েশন অফ ইউনিভার্সিটিজ অ্যান্ড কলেজেস অফ কানাডা (AUCC)"},
    {title: "গড় পড়াশোনার খরচ", text: "BDT ৮ লক্ষ"},
    {title: "গড় জীবনযাত্রার খরচ", text: "BDT ৩ লক্ষ"},
]

const courses = [
    {name: "এরোস্পেস ইঞ্জিনিয়ারিং", count: "১", active: true},
    {name: "বায়োমেডিক্যাল ইঞ্জিনিয়ারিং", count: "১"},
    {name: "ব্যাংকিং ও ফাইনান্স", count: "১"},
    {name: "আর্কিটেকচার", count: "১"},
    {name: "ব্যবসা প্রশাসন", count: "৮"},
]

const intakes = [
    {date: "JAN'2026", status: "ভর্তি চলছে"},
    {date: "MAR'2026", status: "ভর্তি চলছে"},
    {date: "MAY'2026", status: "ভর্তি চলছে"},
    {date: "AUG'2026", status: "ভর্তি চলছে"},
    {date: "SEP'2026", status: "ভর্তি চলছে"},
]

export default function UniversityOfToronto() {
    return (
        <UniversityLayout
            backgroundUrl="/images/toronto.jpg"
            name="টরন্টো বিশ্ববিদ্যালয়"
            location="টরন্টো, কানাডা"
            logo="/logo/toronto.png"
        >
            <div className={"mx-auto flex flex-col gap-10"}>
                <HighlightSection
                    mainTitle="গুরুত্বপূর্ণ দিক"
                    mainText="কানাডায় পড়াশোনা সম্পর্কিত মূল বিবরণ"
                    cards={highlights}
                />

                {/* About Section */}
                <TorontoUniversityInfo />

                <TopCoursesSection
                    courses={courses}
                    mscCourseName="মাস্টার অফ অ্যাপ্লাইড সায়েন্স (MASc) এরোস্পেস ইঞ্জিনিয়ারিং"
                    mscDuration="২০ মাস"
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
