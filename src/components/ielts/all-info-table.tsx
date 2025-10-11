import InfoTableSection from "./info-table";


const ieltsImportantInfo = [
    [
        { label: "IELTS পরীক্ষার তারিখ", href: "/exams/ielts/dates" },
        { label: "IELTS পরীক্ষা  ফি", href: "/exams/ielts/fees" },
    ],
    [
        { label: "IELTS speaking পরীক্ষার অনুশীলন", href: "/exams/ielts/practice/speaking" },
    ],
    [
        { label: "IELTS পড়ার অনুশীলন পরীক্ষা", href: "/exams/ielts/practice/reading" },
        { label: "IELTS লেখার অনুশীলন পরীক্ষা", href: "/exams/ielts/practice/writing" },
        { label: "IELTS পরীক্ষার কেন্দ্র", href: "/exams/ielts/centers" },
    ],
    [
        { label: "IELTS স্কোর", href: "#" },
        { label: "IELTS রেজিস্ট্রেশন", href: "/exams/ielts/registration" },
        { label: "IELTS বই", href: "/resources/books/ielts" },
    ],
];

const ieltsCountries = [
    [
        { label: "যুক্তরাষ্ট্রে উচ্চশিক্ষা", href: "/study-abroad/usa/cities/new-york" },
        { label: "কানাডায় উচ্চশিক্ষা", href: "/study-abroad/canada/cities/vancouver" },
        { label: "যুক্তরাজ্যে উচ্চশিক্ষা", href: "/study-abroad/uk/cities/london" },
    ],
    [
        { label: "অস্ট্রেলিয়ায় উচ্চশিক্ষা", href: "/study-abroad/australia/cities/melbourne" },
        { label: "আয়ারল্যান্ডে উচ্চশিক্ষা", href: "/study-abroad/ireland/cities/dublin" },
        { label: "জার্মানিতে উচ্চশিক্ষা", href: "/study-abroad/germany/cities/berlin" },
    ],
];

const ieltsUniversities = [
    [
        { label: "ম্যানচেস্টার ইউনিভার্সিটি অফ টেকনোলজি", href: "/study-abroad/usa/universities/mit" },
        { label: "দ্য ইউনিভার্সিটি অফ ব্রিটিশ কলম্বিয়া", href: "/study-abroad/canada/universities/ubc" },
        { label: "হাভার্ড বিশ্ববিদ্যালয়", href: "/study-abroad/usa/universities/harvard-university" },
    ],
    [
        { label: "ইউনিভার্সিটি অফ টরন্টো", href: "/study-abroad/canada/universities/university-of-toronto" },
        { label: "নর্থওয়েস্টার্ন কলেজ", href: "#" },
        { label: "ওয়াশিংটন ইউনিভার্সিটি ইন সেন্ট লুইস", href: "#" },
    ],
    [
        { label: "স্ট্যানফোর্ড বিশ্ববিদ্যালয়", href: "/study-abroad/usa/universities/stanford-university" },
        { label: "ইউনিভার্সিটি অফ সিডনি", href: "#" },
        { label: "নোটরডেম বিশ্ববিদ্যালয়", href: "#" },
    ],
];

const ieltsCentersBangladesh = [
    [
        { label: "ঢাকায় IELTS পরীক্ষার কেন্দ্র ও তারিখ", href: "#" },
        { label: "রাজশাহীতে IELTS পরীক্ষার কেন্দ্র ও তারিখ", href: "#" },
        { label: "চট্টগ্রামে IELTS পরীক্ষার কেন্দ্র ও তারিখ", href: "#" },
    ],
    [
        { label: "সিলেটে IELTS পরীক্ষার কেন্দ্র ও তারিখ", href: "#" },
        { label: "খুলনায় IELTS পরীক্ষার কেন্দ্র ও তারিখ", href: "#" },
        { label: "বরিশালে IELTS পরীক্ষার কেন্দ্র ও তারিখ", href: "#" },
    ],
    [
        { label: "কুমিল্লায় IELTS পরীক্ষার কেন্দ্র ও তারিখ", href: "#" },
        { label: "রংপুরে IELTS পরীক্ষার কেন্দ্র ও তারিখ", href: "#" },
        { label: "নড়াইলের IELTS পরীক্ষার কেন্দ্র ও তারিখ", href: "#" },
    ],
];
export default function IeltsAllInfoTables() {
    return (
        <div className="py-4">
            <InfoTableSection title="IELTS সংক্রান্ত গুরুত্বপূর্ণ তথ্য" data={ieltsImportantInfo} />
            <InfoTableSection title="IELTS গ্রহণকারী দেশসমূহ" data={ieltsCountries} />
            <InfoTableSection title="IELTS গ্রহণকারী বিশ্ববিদ্যালয়সমূহ" data={ieltsUniversities} />
            <InfoTableSection title="বাংলাদেশে IELTS পরীক্ষার কেন্দ্র ও তারিখ" data={ieltsCentersBangladesh} />
        </div>
    );
}