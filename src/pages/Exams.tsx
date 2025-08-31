import {ExamsHero} from "@/components/exams/exams-hero.tsx";
import StatsSection from "@/components/exams/stats.tsx";
import ExamGrid from "@/components/exams/exam-grid.tsx";
import UpcomingExamSection from "@/components/exams/upcoming-exams.tsx";
import ExamTestimonials from "@/components/exams/testimonials.tsx";
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";
import CTASection from "@/components/cta.tsx";

const faqData = [
    {
        id: "item-1",
        question: "বিদেশে উচ্চশিক্ষার জন্য কী কী পরীক্ষা দিতে হয়?",
        answer: (
            <div className="space-y-4">
                <p>
                    <strong>ইংরেজি ভাষা দক্ষতার পরীক্ষা:</strong> IELTS, TOEFL, Duolingo English Test মূলত ইংরেজি দক্ষতা
                    যাচাইয়ের জন্য প্রয়োজন হয়।
                </p>
                <p>
                    <strong>অ্যাডমিশন টেস্ট:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>SAT:</strong> ব্যাচেলর ডিগ্রিতে ভর্তি (বিশেষত যুক্তরাষ্ট্রে)।</li>
                    <li><strong>GRE:</strong> সাধারণ স্নাতক ও গবেষণামূলক কোর্সের জন্য (বিশ্বব্যাপী)।</li>
                    <li><strong>GMAT:</strong> ব্যবসা প্রশাসন বা এমবিএ কোর্সে ভর্তি (বিশ্বব্যাপী)।</li>
                </ul>
                <p className="text-sm text-muted-foreground">বিশেষ ক্ষেত্রে দেশের বা বিশ্ববিদ্যালয়ের শর্ত অনুযায়ী
                    অন্যান্য পরীক্ষা লাগতে পারে।</p>
            </div>
        )
    },
    {
        id: "item-2",
        question: "IELTS পরীক্ষার জন্য কত খরচ হয়?",
        answer: (
            <div className="space-y-4">
                <p>বাংলাদেশে IELTS পরীক্ষার ফি সাধারণত <strong>প্রায় ২২,৫০০ থেকে ২৫,৭৫০ টাকা</strong> (প্রায় $২০০-$২২০)
                    হয়ে থাকে। খরচ কেন্দ্র ও টাইপ (পেপার/কম্পিউটার ভিত্তিক) অনুযায়ী কমবেশি হতে পারে।</p>
                <p className="text-sm text-muted-foreground">
                    টেস্ট বুকিংয়ের সময় ব্রিটিশ কাউন্সিল, আইডিপি বা অনুমোদিত কেন্দ্র থেকে সর্বশেষ ফি জেনে নিন।
                </p>
            </div>
        )
    },
    {
        id: "item-3",
        question: "IELTS, TOEFL এবং Duolingo এর মধ্যে পার্থক্য কী?",
        answer: (
            <div className="space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                        <strong>IELTS:</strong> সবচেয়ে জনপ্রিয় ভাষা পরীক্ষা। পেপার বা কম্পিউটার – উভয়ভাবে দিবেন; মোট
                        ৪টি স্কিল (Listening, Reading, Writing, Speaking); প্রায় ৩ ঘণ্টা।
                    </li>
                    <li>
                        <strong>TOEFL:</strong> কম্পিউটার-ভিত্তিক (iBT)। চার স্কিল; Speaking অনলাইনে রেকর্ড করা হয়; ২-৩
                        ঘন্টা।
                    </li>
                    <li>
                        <strong>Duolingo English Test:</strong> সম্পূর্ণ অনলাইন, ঘরে বসে পরীক্ষা দিতে পারবেন; মোট সময়
                        প্রায় ১ ঘণ্টা; ফলাফল দ্রুত পাওয়া যায়; ফি তুলনায় কম ($59)। কিছু বিশ্ববিদ্যালয়ে সীমিতভাবে
                        গ্রহণযোগ্য।
                    </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                    বিশ্ববিদ্যালয়ের চাহিদামতো সঠিক পরীক্ষা বেছে নিন।
                </p>
            </div>
        )
    },
    {
        id: "item-4",
        question: "কত ব্যান্ড স্কোর পেলে ভালো বিশ্ববিদ্যালয়ে ভর্তি হওয়া সম্ভব?",
        answer: (
            <div className="space-y-4">
                <p>
                    সাধারণত, বিশ্বখ্যাত বিশ্ববিদ্যালয়গুলোতে ভর্তির জন্য< br/>
                    <strong>IELTS:</strong> ৬.৫–৭.৫ ব্যান্ড<br/>
                    <strong>TOEFL iBT:</strong> ৮০–১০০ এর ওপরে<br/>
                    <strong>Duolingo:</strong> ১১৫–১২০+<br/>
                    স্কোর প্রয়োজন হতে পারে।
                </p>
                <p className="text-sm text-muted-foreground">
                    নির্দিষ্ট বিশ্ববিদ্যালয় ও প্রোগ্রাম অনুযায়ী স্কোরের চাহিদা ভিন্ন হতে পারে। ভর্তি নির্দেশিকা অবশ্যই
                    দেখে নিন।
                </p>
            </div>
        )
    },
    {
        id: "item-5",
        question: "আমি কীভাবে পরীক্ষার জন্য প্রস্তুতি শুরু করবো?",
        answer: (
            <div className="space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>পরীক্ষার ফরম্যাট এবং সিলেবাস ভালোভাবে বুঝে নিন।</li>
                    <li>আধিকারিক ওয়েবসাইটে Practice Material ব্যবহার করুন।</li>
                    <li>বিগত বছরের প্রশ্ন বা মক টেস্ট দিন।</li>
                    <li>সময় ধরে অংগিক পরীক্ষার প্রস্তুতি নিন (রিডিং, লিসেনিং, রাইটিং, স্পিকিং)।</li>
                    <li>প্রয়োজনে কোর্স বা কোচিং করতে পারেন।</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                    ধারাবাহিক অনুশীলন এবং ভুল থেকে শেখা গুরুত্বপূর্ণ।
                </p>
            </div>
        )
    },
    {
        id: "item-6",
        question: "আমি একাধিকবার IELTS দিতে পারবো কি?",
        answer: (
            <div className="space-y-4">
                <p>হ্যাঁ, আপনি <strong>IELTS একাধিকবার</strong> দিতে পারবেন। পরীক্ষার মাঝে নির্দিষ্ট কোনো গ্যাপ নেই;
                    টেস্ট ডেট থাকলেই রেজিস্টার করতে পারেন।</p>
                <p className="text-sm text-muted-foreground">
                    যেকোনো স্কোর বিশ্ববিদ্যালয়ে সাবমিট করা যাবে; তবে সর্বশেষ বা সর্বোচ্চ স্কোর গ্রহণযোগ্য কিনা, সেটি
                    বিশ্ববিদ্যালয়ের নিয়ম দেখুন।
                </p>
            </div>
        )
    }
];


const countryOptions = [
    {value: "usa", label: "যুক্তরাষ্ট্র"},
    {value: "uk", label: "যুক্তরাজ্য"},
    {value: "canada", label: "কানাডা"},
    {value: "australia", label: "অস্ট্রেলিয়া"},
    {value: "germany", label: "জার্মানি"},
    {value: "france", label: "ফ্রান্স"},
    {value: "ireland", label: "আয়ারল্যান্ড"},
    {value: "netherlands", label: "নেদারল্যান্ডস"},
    {value: "sweden", label: "সুইডেন"},
    {value: "norway", label: "নরওয়ে"},
    {value: "denmark", label: "ডেনমার্ক"},
];


export default function ExamsPage() {
    return (
        <div className={"flex flex-col justify-center items-center gap-10"}>
            <ExamsHero
                heading={"বিদেশে উচ্চ শিক্ষার জন্য শীর্ষ পরীক্ষাগুলো অন্বেষণ করুন"}
                description={"IELTS, GRE, GMAT, SAT এবং আরও অনেক কিছুর সম্পর্কে আপনার জানার প্রয়োজনীয় সব কিছু এখানে রয়েছে।"}
                image={{
                    src: "/images/exams/hero.webp",
                    alt: "Exams Hero Image"
                }}
                countryOptions={countryOptions}
            />
            <StatsSection/>
            <ExamGrid/>
            <UpcomingExamSection/>
            <ExamTestimonials/>
            <FAQAccordion
                title={"কোন প্রশ্ন আছে? উত্তর খুজে নিন"}
                data={faqData}
            />
            <CTASection/>

        </div>
    )
}
