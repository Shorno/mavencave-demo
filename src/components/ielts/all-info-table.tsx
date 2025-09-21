import InfoTableSection from "./info-table";


const ieltsImportantInfo = [
    [
        { label: "IELTS পরীক্ষা", href: "#" },
        { label: "IELTS পরীক্ষার তারিখ", href: "#" },
        { label: "IELTS পরীক্ষা কি", href: "#" },
    ],
    [
        { label: "IELTS মডিউল", href: "#" },
        { label: "IELTS speaking পরীক্ষার অনুশীলন", href: "#" },
        { label: "IELTS কথা বলা অনুশীলন পরীক্ষা", href: "#" },
    ],
    [
        { label: "IELTS পড়ার অনুশীলন পরীক্ষা", href: "#" },
        { label: "IELTS লেখার অনুশীলন পরীক্ষা", href: "#" },
        { label: "IELTS পরীক্ষার কেন্দ্র", href: "#" },
    ],
    [
        { label: "IELTS স্কোর", href: "#" },
        { label: "IELTS রেজিস্ট্রেশন", href: "#" },
        { label: "IELTS বই", href: "#" },
    ],
    [
        { label: "IELTS অনুমোদিত পরীক্ষা", href: "#" },
        { label: "", href: "#" },
        { label: "", href: "#" },
    ]
];

const ieltsCountries = [
    [
        { label: "যুক্তরাষ্ট্রে উচ্চশিক্ষা", href: "#" },
        { label: "কানাডায় উচ্চশিক্ষা", href: "#" },
        { label: "যুক্তরাজ্যে উচ্চশিক্ষা", href: "#" },
    ],
    [
        { label: "অস্ট্রেলিয়ায় উচ্চশিক্ষা", href: "#" },
        { label: "আয়ারল্যান্ডে উচ্চশিক্ষা", href: "#" },
        { label: "জার্মানিতে উচ্চশিক্ষা", href: "#" },
    ],
    [
        { label: "নিউজিল্যান্ডে উচ্চশিক্ষা", href: "#" },
        { label: "ইতালিতে উচ্চশিক্ষা", href: "#" },
        { label: "ফ্রান্সে উচ্চশিক্ষা", href: "#" },
    ],
];

const ieltsUniversities = [
    [
        { label: "ম্যানচেস্টার ইউনিভার্সিটি অফ টেকনোলজি", href: "#" },
        { label: "দ্য ইউনিভার্সিটি অফ ব্রিটিশ কলম্বিয়া", href: "#" },
        { label: "হাভার্ড বিশ্ববিদ্যালয়", href: "#" },
    ],
    [
        { label: "ইউনিভার্সিটি অফ টরন্টো", href: "#" },
        { label: "নর্থওয়েস্টার্ন কলেজ", href: "#" },
        { label: "ওয়াশিংটন ইউনিভার্সিটি ইন সেন্ট লুইস", href: "#" },
    ],
    [
        { label: "স্ট্যানফোর্ড বিশ্ববিদ্যালয়", href: "#" },
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