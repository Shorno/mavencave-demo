import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import CustomCarouselSection from "@/components/ielts/CustomCarouselSection.tsx";
import GREGeneralTestRegistration2025Section from "@/components/gre/reg/GREGeneralTestRegistration2025Section.tsx";
import GRESubjectTestRegistration2025Section from "@/components/gre/reg/GRESubjectTestRegistration2025Section.tsx";
import GREAtHomeSection from "@/components/gre/reg/GREAtHomeSection.tsx";
import GREExamDatesAndCentersSection from "@/components/gre/reg/GREExamDatesAndCentersSection.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import GRESlotBookingSection from "@/components/gre/reg/GRESlotBookingSection.tsx";
import InfoTableSection from "@/components/ielts/info-table.tsx";
import FAQAccordion, {type FAQItem} from "@/components/study-abroad/FAQAccordion.tsx";

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "GRE", path: "/study-abroad/exams/gre"},
    {label: "নিবন্ধন", path: "/study-abroad/exams/gre/registration"}
];

const greRegistrationCarouselData = [
    {
        image: "/images/blog/blog4.webp",

        title: "১. GRE General Test নিবন্ধন ২০২৫",
        description: "GRE General Test গ্র্যাজুয়েট স্কুলে ভর্তি প্রক্রিয়ার জন্য অত্যন্ত গুরুত্বপূর্ণ। পরীক্ষার জন্য নিবন্ধন করা আপনার সফলতার পথে প্রথম ধাপ। চলুন GRE General Test নিবন্ধন প্রক্রিয়ার বিস্তারিত দেখি।",
        index: "১/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "২. GRE Subject Test নিবন্ধন ২০২৫",
        description: "GRE পরীক্ষার স্লট সফলভাবে বুক করতে, নিম্নলিখিত ধাপগুলো অনুসরণ করুন:",
        index: "২/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "৩. GRE at Home",
        description: "চলমান মহামারীর সময় GRE পরীক্ষা দেওয়া বেশ চ্যালেঞ্জিং হতে পারে, বিশেষ করে লকডাউনের কারণে পরীক্ষাকেন্দ্রগুলোর কম ক্ষমতা এবং সাময়িক বন্ধ থাকার কারণে।",
        index: "৩/৩",
    },
];
export const greNextSteps = [
    {title: "GRE পরীক্ষার তারিখ", href: "/ielts/type"},
    {title: "GRE পরীক্ষা ফি", href: "/ielts/eligibility"},
    {title: "GRE ফলাফল", href: "/ielts/band-score"},
];
export const greRelatedBlogs = [
    [
        { label: "GRE পরীক্ষা", href: "/blog/gre-exam" },
        { label: "GRE ফলাফল", href: "/blog/gre-results" },
        { label: "GRE পরীক্ষার তারিখ", href: "/blog/gre-exam-dates" },
    ],
    [
        { label: "GRE পরীক্ষা ফি", href: "/blog/gre-exam-fees" },
        { label: "GRE সিলেবাস", href: "/blog/gre-syllabus" },
        { label: "GRE অনুশীলন পরীক্ষা", href: "/blog/gre-practice-test" },
    ],
    [
        { label: "GRE রেজিস্ট্রেশন", href: "/blog/gre-registration" },
        { label: "GRE স্লট বুকিং", href: "/blog/gre-slot-booking" },
        { label: "GRE প্রস্তুতি", href: "/blog/gre-preparation" },
    ],
    [
        { label: "GRE বই", href: "/blog/gre-books" },
        { label: "", href: "#" }, // Empty cell to maintain grid structure
        { label: "", href: "#" }, // Empty cell to maintain grid structure
    ],
];
export const greFaqs: FAQItem[] = [
    {
        id: "faq1",
        question: "GRE General Test-এর নিবন্ধন ফি কত?",
        answer: (
            <>
                GRE General Test-এর নিবন্ধন ফি বিশ্বের বিভিন্ন অঞ্চলে ভিন্ন। বাংলাদেশের জন্য ফি হলো BDT ২২,০০০-২৫,০০০ টাকা। বিশ্বের অন্যান্য অঞ্চলের জন্য ফি $220 USD এবং চীনের জন্য $231.30 USD। পেমেন্ট ক্রেডিট বা ডেবিট কার্ডের মাধ্যমে করতে হয়। পরীক্ষা বাতিল করলে ৫০% ফি ফেরত পাওয়া যায় এবং পুনঃনির্ধারণের জন্য $55 USD অতিরিক্ত ফি প্রয়োজন।
            </>
        ),
    },
    {
        id: "faq2",
        question: "GRE General Test-এর জন্য কে যোগ্য?",
        answer: (
            <>
                GRE General Test-এ অংশগ্রহণের জন্য কোনো নির্দিষ্ট যোগ্যতার সীমাবদ্ধতা নেই। স্নাতক ডিগ্রিধারী বা স্নাতকের চূড়ান্ত বর্ষের শিক্ষার্থীরা এই পরীক্ষায় অংশ নিতে পারেন। বিজ্ঞান, প্রকৌশল, মানবিক, সামাজিক বিজ্ঞান, ব্যবসায় শিক্ষা - সব ক্ষেত্রের শিক্ষার্থীরা গ্র্যাজুয়েট স্কুলে ভর্তির জন্য এই পরীক্ষায় অংশগ্রহণ করতে পারেন। পরীক্ষার জন্য শুধুমাত্র বৈধ পাসপোর্ট প্রয়োজন।
            </>
        ),
    },
    {
        id: "faq3",
        question: "আমি কতবার GRE পরীক্ষা দিতে পারি?",
        answer: (
            <>
                আপনি প্রতি ২১ দিনে একবার GRE পরীক্ষা দিতে পারেন এবং যেকোনো ধারাবাহিক ১২ মাসের মধ্যে সর্বোচ্চ ৫ বার পরীক্ষা দেওয়া যায়। এই নিয়ম এমনকি তখনও প্রযোজ্য হবে, যদি আপনি পূর্ববর্তী পরীক্ষার স্কোর বাতিল করে থাকেন। প্রতিবার পরীক্ষা দেওয়ার জন্য পূর্ণ রেজিস্ট্রেশন ফি দিতে হবে। GRE স্কোরের মেয়াদ ৫ বছর।
            </>
        ),
    },
    {
        id: "faq4",
        question: "আমি কি আমার GRE পরীক্ষা বাতিল বা পুনঃনির্ধারণ করতে পারি?",
        answer: (
            <>
                হ্যাঁ, আপনি পরীক্ষার ৪ দিন আগে পর্যন্ত পরীক্ষা বাতিল করতে পারেন এবং ৫০% রেজিস্ট্রেশন ফি ফেরত পাবেন। পুনঃনির্ধারণের জন্য $55 USD অতিরিক্ত ফি প্রয়োজন। পুনঃনির্ধারণ করলে আপনি নতুন তারিখ ও সময় নির্বাচন করতে পারবেন। তবে এই সুবিধাগুলো ব্যবহার করার সময় নিয়মাবলী ভালোভাবে দেখে নেওয়া প্রয়োজন।
            </>
        ),
    },
    {
        id: "faq5",
        question: "GRE পরীক্ষা দেওয়ার কোন কোন ফরম্যাট উপলব্ধ?",
        answer: (
            <>
                GRE পরীক্ষার জন্য দুটি ফরম্যাট উপলব্ধ: ১) Test Centre (পরীক্ষাকেন্দ্রে) এবং ২) GRE at Home (ঘরে বসে)। Test Centre ফরম্যাটে নিয়ন্ত্রিত পরিবেশে পরীক্ষা দিতে হয়। GRE at Home ফরম্যাটে ঘরে বসে পরীক্ষা দেওয়া যায়, তবে সিস্টেম রিকোয়ারমেন্টস পূরণ করতে হয় এবং প্রক্টরিং সিস্টেম থাকে। দুটি ফরম্যাটেরই রেজিস্ট্রেশন ফি একই - BDT ২২,০০০-২৫,০০০।
            </>
        ),
    },
];


export default function GRERegistrationPage() {
    return (
        <>
            <BlogHeaderSection
                title="GRE নিবন্ধন ২০২৫: কিভাবে GRE-এর জন্য নিবন্ধন করবেন?"
                updatedDate="আগস্ট ৩০, ২০২৫, ১৫:০৩"
                customSegments={customSegments}
            >
                <p>
                    আপনি কি আপনার একাডেমিক স্বপ্নের পরবর্তী বড় পদক্ষেপ নিতে প্রস্তুত? এই পৃষ্ঠায় আপনি GRE-এ নিবন্ধন করার জন্য যা যা প্রয়োজন সবকিছু জানতে পারবেন, যা গ্র্যাজুয়েট স্কুলে ভর্তি হওয়ার জন্য অত্যন্ত গুরুত্বপূর্ণ। চাইলেই মাস্টার্স ডিগ্রি, MBA, বা অন্য কোনো অ্যাডভান্সড প্রোগ্রামের জন্য GRE দেখায় যে আপনি চ্যালেঞ্জের জন্য প্রস্তুত।
                </p>
                <p>
                    এখানে আপনি পরীক্ষা নিবন্ধনের সমস্ত প্রক্রিয়া, পরীক্ষার তারিখ নির্বাচন, স্টাডি ম্যাটেরিয়াল খুঁজে বের করা এবং পরীক্ষার নিয়মাবলী বোঝার তথ্য পাবেন।
                </p>
                <p>
                    আপনার দক্ষতা প্রদর্শন করতে এবং বিশ্বের শীর্ষ স্কুলগুলোতে সুযোগ খুলতে প্রস্তুত হন। আপনার যাত্রা শুরু হয় GRE Registration Exam পৃষ্ঠায়, যেখানে আপনি একটি প্রতিশ্রুতিশীল ভবিষ্যতের দিকে প্রথম পদক্ষেপ নিতে পারেন।
                </p>
                <p>
                    চলুন একসাথে উত্তেজনাপূর্ণ ভবিষ্যতের দিকে প্রথম পদক্ষেপটি নিই।
                </p>
            </BlogHeaderSection>
            <CustomCarouselSection data={greRegistrationCarouselData}/>
            <GREGeneralTestRegistration2025Section/>
            <GRESubjectTestRegistration2025Section/>
            <GREAtHomeSection/>
            <GREExamDatesAndCentersSection/>
            <GRESlotBookingSection/>
            <NextStepsSection nextSteps={greNextSteps}/>
            <InfoTableSection title="GRE সংক্রান্ত গুরুত্বপূর্ণ তথ্য" data={greRelatedBlogs} />
            <FAQAccordion
                title={"শিক্ষার্থীদের করা সবথেকে বেশি প্রশ্ন সমূহ"}
                data={greFaqs}
                className={"bg-white w-full max-w-7xl p-4 rounded-xl"}
            />

        </>
    );
}
