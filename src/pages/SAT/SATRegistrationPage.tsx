import BlogHeaderSection from "@/components/ielts/blog-header.tsx";
import NewCustomTable from "@/components/NewCustomTable.tsx";
import CustomCarouselSection from "@/components/ielts/CustomCarouselSection.tsx";
import SATRegistrationDatesSection from "@/components/SAT/SATRegistrationDatesSection.tsx";
import SATRegistrationProcessSection from "@/components/SAT/SATRegistrationProcessSection.tsx";
import SATRegistrationFeesSection from "@/components/SAT/SATRegistrationFeesSection.tsx";
import SATFeeWaiverSectionNew from "@/components/SAT/SATFeeWaiverSectionNew.tsx";
import BestTimeToRegisterSATSection from "@/components/SAT/BestTimeToRegisterSATSection.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import InfoTableSection from "@/components/ielts/info-table.tsx";
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";
import {
    satAcceptingUniversities, satFaqs,
    satImportantInfo,
    satNextSteps,
    satRelatedBlogs
} from "@/pages/SAT/SATEligibilityPage.tsx";

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "SAT", path: "/study-abroad/exams/sat"},
    {label: "নিবন্ধন", path: "/study-abroad/exams/sat/registration"}
];

const satRegistrationCarouselData = [
    {
        image: "/images/blog/blog4.webp",
        title: "১. SAT নিবন্ধনের তারিখ ২০২৫ এবং সময়সীমা",
        description: "SAT বছরের মধ্যে একাধিকবার অনুষ্ঠিত হয়, এবং সঠিক পরীক্ষার তারিখ নির্বাচন করা বিশ্ববিদ্যালয়ে আবেদন করার সময়সীমা পূরণের জন্য অত্যন্ত গুরুত্বপূর্ণ।",
        index: "১/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "২. SAT পরীক্ষা ২০২৫-এর জন্য কীভাবে নিবন্ধন করবেন?",
        description: "এটি হলো SAT ২০২৫ পরীক্ষার জন্য ধাপে ধাপে রেজিস্ট্রেশন করার পদ্ধতি:",
        index: "২/৩",
    },
    {
        image: "/images/blog/blog4.webp",
        title: "৩. SAT নিবন্ধন ফি ২০২৫",
        description: "যখন আপনি SAT পরীক্ষার জন্য রেজিস্ট্রেশন করবেন, তখন SAT রেজিস্ট্রেশনের খরচ এবং সম্ভাব্য অতিরিক্ত ফি সম্পর্কে বোঝা গুরুত্বপূর্ণ।",
        index: "৩/৩",
    },
];


export default function SATRegistrationPage() {
    const keyHighlights = [
        {
            aspect: "SAT রেজিস্ট্রেশন ফি",
            details: "USD ১৩০.৯৮"
        },
        {
            aspect: "SAT রেজিস্ট্রেশন ডেডলাইন ২০২৫",
            details: `• ২৪ অক্টোবর, ২০২৫
• ২১ নভেম্বর, ২০২৫`
        },
        {
            aspect: "পরিবর্তন বা দেরিতে রেজিস্ট্রেশন ফি",
            details: "USD ৩৪"
        }
    ];

    const columns = [
        {key: 'aspect', label: 'অ্যাসপেক্ট', width: 'w-1/3'},
        {key: 'details', label: 'বিবরণ', width: 'w-2/3'}
    ];

    return (
        <>
            <BlogHeaderSection
                title="SAT পরীক্ষা নিবন্ধন ২০২৫: বাংলাদেশি শিক্ষার্থীদের জন্য সম্পূর্ণ রেজিস্ট্রেশন প্রক্রিয়া!"
                updatedDate="২৫ এপ্রিল, ২০২৫, ৪:৫১"
                customSegments={customSegments}
            >
                <p>
                    SAT হলো মার্কিন যুক্তরাষ্ট্র এবং বিদেশের বিশ্ববিদ্যালয়ে ভর্তি হতে হলে একটি গুরুত্বপূর্ণ পরীক্ষা।
                    রেজিস্ট্রেশন হলো আপনার স্থান নিশ্চিত করার প্রথম ধাপ। SAT বছরে সাতবার অনুষ্ঠিত হয়—আগস্ট, অক্টোবর,
                    নভেম্বর, ডিসেম্বর, মার্চ, মে, এবং জুনে। ২০২৪-২৫ বছরের জন্য রেজিস্ট্রেশন এখন খোলা, এবং পরবর্তী
                    সময়সীমা হলো ২৪ অক্টোবর, ২০২৫, নভেম্বার ৮, ২০২৫ পরীক্ষার জন্য।
                </p>
                <p>
                    এই গাইডটি আপনাকে SAT রেজিস্ট্রেশন প্রক্রিয়ার ধাপগুলি দেখাবে, যার মধ্যে রয়েছে SAT আবেদন তারিখ, ফি,
                    এবং প্রয়োজনীয় নথি। আপনি যদি ঐতিহ্যবাহী SAT নেন বা ডিজিটাল SAT, সমস্ত তথ্য এখানে পাওয়া যাবে, যেমন
                    SAT রেজিস্ট্রেশন খরচ এবং অনলাইনে SAT রেজিস্ট্রেশন সম্পূর্ণ করার পদ্ধতি।
                </p>
            </BlogHeaderSection>

            <section className="container mx-auto py-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                    মূল হাইলাইটস:
                </h2>

                <NewCustomTable
                    data={keyHighlights}
                    columns={columns}
                    className="mb-8"
                />
            </section>
            <CustomCarouselSection data={satRegistrationCarouselData}/>
            <SATRegistrationDatesSection/>
            <SATRegistrationProcessSection/>
            <SATRegistrationFeesSection/>
            <SATFeeWaiverSectionNew/>
            <BestTimeToRegisterSATSection/>
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
