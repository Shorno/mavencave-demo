import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import CustomCarouselSection from "@/components/ielts/CustomCarouselSection.tsx";
import SATEligibilityCriteriaSection from "@/components/SAT/SATEligibilityCriteriaSection.tsx";
import SATAgeLimitSection from "@/components/SAT/SATAgeLimitSection.tsx";
import SATEducationalQualificationSection from "@/components/SAT/SATEducationalQualificationSection.tsx";
import SATRequiredDocumentsSection from "@/components/SAT/SATRequiredDocumentsSection.tsx";
import SATFeeWaiverSection from "@/components/SAT/SATFeeWaiverSection.tsx";
import DigitalSATSection from "@/components/SAT/DigitalSATSection.tsx";
import SATAcceptingUniversitiesSection from "@/components/SAT/SATAcceptingUniversitiesSection.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import SATSpeciallyAbledStudentsSection from "@/components/SAT/SATSpeciallyAbledStudentsSection.tsx";
import InfoTableSection from "@/components/ielts/info-table.tsx";
import FAQAccordion, {type FAQItem} from "@/components/study-abroad/FAQAccordion.tsx";

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "SAT", path: "/study-abroad/exams/sat"},
    {label: "যোগ্যতা", path: "/study-abroad/exams/sat/eligibility"}
];

// eslint-disable-next-line react-refresh/only-export-components
export const satNextSteps = [
    {title: "SAT পরীক্ষার ফি", href: "/ielts/type"},
    {title: "SAT পরীক্ষার তারিখসমূহ", href: "/ielts/eligibility"},
    {title: "SAT পরীক্ষার কেন্দ্র", href: "/ielts/band-score"},
];

export const satCarouselData = [
    {
        image: "/images/blog/blog4.webp",
        title: "১. SAT পরীক্ষার যোগ্যতার মানদণ্ড ২০২৫",
        description: "২০২৫ সালে [translate:SAT] পরীক্ষার জন্য নিবন্ধন করতে হলে আপনাকে নির্দিষ্ট কিছু [translate:SAT] পরীক্ষার যোগ্যতার মানদণ্ড পূরণ করতে হবে।",
        index: "১/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "২. SAT পরীক্ষার বয়সসীমা ২০২৫",
        description: "২০২৫ সালের [translate:SAT] পরীক্ষার যোগ্যতার ক্ষেত্রে কলেজ বোর্ড কোনো নির্দিষ্ট বয়সসীমা নির্ধারণ করেনি।",
        index: "২/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "৩. SAT ২০২৫-এ অংশগ্রহণের জন্য শিক্ষাগত যোগ্যতা",
        description: "২০২৫ সালের [translate:SAT] পরীক্ষার যোগ্যতা-এর জন্য কোনো শিক্ষাগত পূর্বশর্ত নেই। তবে, কিছু সাধারণ নির্দেশনা রয়েছে যা আপনাকে পরীক্ষার জন্য সম্পূর্ণভাবে প্রস্তুত হতে সাহায্য করবে।",
        index: "৩/৩",
    },
];
// SAT Important Info
export const satImportantInfo = [
    [
        { label: "SAT পরীক্ষা", href: "/study-abroad/exams/sat/exam" },
        { label: "SAT ফলাফল", href: "/study-abroad/exams/sat/results" },
        { label: "SAT অনুশীলন পরীক্ষা", href: "/study-abroad/exams/sat/practice-test" },
    ],
    [
        { label: "SAT পরীক্ষার কেন্দ্র", href: "/study-abroad/exams/sat/centres" },
        { label: "SAT সিলেবাস", href: "/study-abroad/exams/sat/syllabus" },
        { label: "SAT প্রস্তুতি", href: "/study-abroad/exams/sat/preparation" },
    ],
    [
        { label: "SAT পরীক্ষার তারিখ", href: "/study-abroad/exams/sat/dates" },
        { label: "SAT বই", href: "/study-abroad/exams/sat/books" },
        { label: "SAT পরীক্ষা ফি", href: "/study-abroad/exams/sat/fees" },
    ],
    [
        { label: "SAT রেজিস্ট্রেশন", href: "/study-abroad/exams/sat/registration" },
        { label: "", href: "#" }, // Empty cell to maintain grid structure
        { label: "", href: "#" }, // Empty cell to maintain grid structure
    ],
];

// SAT Accepting Universities
export const satAcceptingUniversities = [
    [
        { label: "MIT-এর জন্য SAT স্কোর", href: "/study-abroad/universities/mit-sat-score" },
        { label: "Stanford-এর SAT স্কোর", href: "/study-abroad/universities/stanford-sat-score" },
        { label: "UCLA-এর SAT স্কোর", href: "/study-abroad/universities/ucla-sat-score" },
    ],
    [
        { label: "Boston University-এর SAT স্কোর", href: "/study-abroad/universities/boston-university-sat-score" },
        { label: "UC Berkeley-এর SAT স্কোর", href: "/study-abroad/universities/uc-berkeley-sat-score" },
        { label: "Harvard-এর জন্য SAT", href: "/study-abroad/universities/harvard-sat-score" },
    ],
    [
        { label: "Columbia University-এর SAT স্কোর", href: "/study-abroad/universities/columbia-sat-score" },
        { label: "যুক্তরাষ্ট্রের সেই কলেজসমূহ যেখানে SAT 1200 গ্রহণযোগ্য", href: "/study-abroad/colleges-accepting-sat-1200" },
        { label: "বিশ্বের শীর্ষ কলেজসমূহ যেখানে SAT গ্রহণ করা হয়", href: "/study-abroad/top-colleges-accepting-sat" },
    ],
    [
        { label: "Ivy League-এর জন্য SAT স্কোর", href: "/study-abroad/ivy-league-sat-scores" },
        { label: "", href: "#" }, // Empty cell to maintain grid structure
        { label: "", href: "#" }, // Empty cell to maintain grid structure
    ],
];

// SAT Related Blogs
export const satRelatedBlogs = [
    [
        { label: "বাংলাদেশী শিক্ষার্থীদের জন্য SAT কি সহজ?", href: "/blog/is-sat-easy-for-bangladeshi-students" },
        { label: "SAT পরীক্ষার উদ্দেশ্য", href: "/blog/sat-exam-purpose" },
        { label: "বাংলাদেশী শিক্ষার্থীদের জন্য SAT বৃত্তি", href: "/blog/sat-scholarships-bangladeshi-students" },
    ],
    [
        { label: "ACT বনাম SAT", href: "/blog/act-vs-sat" },
        { label: "ভালো SAT স্কোর কত?", href: "/blog/good-sat-score" },
        { label: "SAT গণিত ওভারভিউ", href: "/blog/sat-math-overview" },
    ],
    [
        { label: "SAT ফি মওকুফ", href: "/blog/sat-fee-waiver" },
        { label: "ডিজিটাল SAT পরীক্ষা", href: "/blog/digital-sat-exam" },
        { label: "SAT পরীক্ষার সময়সূচি", href: "/blog/sat-exam-schedule" },
    ],
    [
        { label: "SAT Writing & Language পরীক্ষা", href: "/blog/sat-writing-language-test" },
        { label: "SAT শব্দ ও ভোকাবুলারি লিস্ট", href: "/blog/sat-vocabulary-list" },
        { label: "GRE বনাম SAT", href: "/blog/gre-vs-sat" },
    ],
    [
        { label: "SAT Reasoning পরীক্ষা", href: "/blog/sat-reasoning-test" },
        { label: "", href: "#" }, // Empty cell to maintain grid structure
        { label: "", href: "#" }, // Empty cell to maintain grid structure
    ],
];
export const satFaqs: FAQItem[] = [
    {
        id: "faq1",
        question: "SAT-এর পূর্ণরূপ কী?",
        answer: (
            <>
                SAT-এর পূর্ণরূপ হল Scholastic Assessment Test। এটি মূলত আমেরিকার কলেজ বোর্ড কর্তৃক পরিচালিত একটি স্ট্যান্ডার্ডাইজড পরীক্ষা যা শিক্ষার্থীদের বিশ্ববিদ্যালয় পর্যায়ে শিক্ষা গ্রহণের প্রস্তুতি যাচাই করে।
            </>
        ),
    },
    {
        id: "faq2",
        question: "SAT পরীক্ষা কিসের জন্য?",
        answer: (
            <>
                SAT পরীক্ষা মূলত যুক্তরাষ্ট্র, কানাডা এবং অন্যান্য দেশের বিশ্ববিদ্যালয়ে স্নাতক পর্যায়ে ভর্তির জন্য ব্যবহৃত হয়। এছাড়া শিক্ষাবৃত্তি পাওয়ার ক্ষেত্রেও SAT স্কোর গুরুত্বপূর্ণ ভূমিকা পালন করে। পরীক্ষাটি শিক্ষার্থীদের গণিত, ইংরেজি পড়া ও লেখার দক্ষতা মূল্যায়ন করে।
            </>
        ),
    },
    {
        id: "faq3",
        question: "SAT পরীক্ষা বৃত্তি যোগ্যতার শর্ত কী?",
        answer: (
            <>
                SAT বৃত্তির জন্য সাধারণত ১৩০০+ স্কোর প্রয়োজন। বাংলাদেশি শিক্ষার্থীদের জন্য পারিবারিক আয় ৮ লাখ টাকার কম হলে ৯০% ছাড় এবং ৮-১৫ লাখ টাকার মধ্যে হলে ৫০% ছাড় পাওয়া যায়। উচ্চ স্কোর অর্জনকারীরা SAT Bangladesh Top Performer হিসেবে অতিরিক্ত সুবিধা পান।
            </>
        ),
    },
    {
        id: "faq4",
        question: "SAT পরীক্ষার বিস্তারিত তথ্য কি দিতে পারেন?",
        answer: (
            <>
                SAT পরীক্ষা ২ ঘন্টার ডিজিটাল পরীক্ষা। এতে দুটি বিভাগ রয়েছে - গণিত (৮০০ মার্ক) এবং Evidence-Based Reading & Writing (৮০০ মার্ক)। মোট স্কোর ১৬০০। বাংলাদেশে পরীক্ষার ফি প্রায় ২২,০০০ টাকা ($২২০)। ঢাকা ও চট্টগ্রামে ৫টি পরীক্ষা কেন্দ্র রয়েছে। পরীক্ষার জন্য বৈধ পাসপোর্ট বাধ্যতামূলক।
            </>
        ),
    },
    {
        id: "faq5",
        question: "SAT পরীক্ষা শিক্ষার্থীদের কীভাবে উপকৃত করে?",
        answer: (
            <>
                SAT পরীক্ষা শিক্ষার্থীদের বিশ্বের শীর্ষ বিশ্ববিদ্যালয়ে ভর্তির সুযোগ করে দেয়। হার্ভার্ড, স্ট্যানফোর্ড, MIT সহ ৪০০০+ বিশ্ববিদ্যালয় SAT স্কোর গ্রহণ করে। উচ্চ স্কোরের মাধ্যমে পূর্ণ বৃত্তি পাওয়া সম্ভব। এটি শিক্ষার্থীদের একাডেমিক দক্ষতা বৃদ্ধি করে এবং আন্তর্জাতিক মানের শিক্ষার সুযোগ উন্মুক্ত করে।
            </>
        ),
    },
];


export default function SATEligibilityPage() {
    return (
        <>
            <BlogHeaderSection
                title="SAT যোগ্যতা ২০২৫ বাংলাদেশে: বয়সসীমা, যোগ্যতা ও শর্তাবলী দেখুন"
                updatedDate="২৫ এপ্রিল, ২০২৫, ৪:৫৬"
                customSegments={customSegments}
            >
                <p>
                    SAT পরীক্ষা যুক্তরাষ্ট্রের ৪,০০০-এরও বেশি বিশ্ববিদ্যালয়ে গৃহীত হয়, পাশাপাশি কানাডা, অস্ট্রেলিয়া, সিঙ্গাপুর এবং আরও অনেক দেশের শিক্ষা প্রতিষ্ঠানে স্বীকৃত। ২০২৪ সালে বিশ্বব্যাপী প্রায় ১৯ লক্ষ শিক্ষার্থী [translate:SAT]-এর জন্য নিবন্ধন করেছিল, যার মধ্যে উল্লেখযোগ্য সংখ্যক পরীক্ষার্থী ছিলেন বাংলাদেশ থেকে—আপনার মতোই।
                </p>
                <p>
                    আপনি ১১শ বা ১২শ শ্রেণির যেকোনো একটিতে থাকুন না কেন, [translate:SAT] পরীক্ষার যোগ্যতার মানদণ্ড বোঝা জরুরি, যাতে নিশ্চিত হতে পারেন যে নিবন্ধনের সব শর্ত আপনি পূরণ করেছেন। এই গাইডে আমরা [translate:SAT] পরীক্ষার যোগ্যতার মানদণ্ড নিয়ে আলোচনা করব, যার মধ্যে রয়েছে সর্বোচ্চ বয়সসীমা, শিক্ষাগত পূর্বশর্ত এবং প্রয়োজনীয় নথিপত্র।
                </p>
            </BlogHeaderSection>
            <CustomCarouselSection data={satCarouselData}/>
            <SATEligibilityCriteriaSection/>
            <SATAgeLimitSection/>
            <SATEducationalQualificationSection/>
            <SATRequiredDocumentsSection/>
            <SATFeeWaiverSection/>
            <DigitalSATSection/>
            <SATAcceptingUniversitiesSection/>
            <SATSpeciallyAbledStudentsSection/>
            <NextStepsSection nextSteps={satNextSteps}/>
            <InfoTableSection title="SAT সংক্রান্ত গুরুত্বপূর্ণ তথ্য" data={satImportantInfo} />
            <InfoTableSection title="SAT গ্রহণকারী বিশ্ববিদ্যালয়সমূহ" data={satAcceptingUniversities} />
            <InfoTableSection title="SAT পরীক্ষা সম্পর্কিত ব্লগ" data={satRelatedBlogs} />
            <FAQAccordion
                title={"শিক্ষার্থীদের করা সবথেকে বেশি প্রশ্ন সমূহ"}
                data={satFaqs}
                className={"bg-white w-full max-w-7xl p-4 rounded-xl"}
            />

        </>
    );
}
