import {Clock} from "lucide-react";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb.tsx";

type BookHeroSectionProps = {
    updatedDate?: string;
};
const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "IELTS", path: "/study-abroad/exams/ielts"},
    {label: "বইসমূহ", path: "/study-abroad/exams/ielts/booklist"},
];


export default function BookHeroSection({
                                            updatedDate = "২২ নভেম্বর, ২০২৪, ৫:৪৩",
                                        }: BookHeroSectionProps) {
    return (
        <section className="px-4 pb-10 bg-white p-4 rounded-xl">
            <DynamicBreadcrumb customSegments={customSegments}/>

            <h1 className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-3 tracking-tight text-gray-900">
                IELTS বই ২০২৪-২০২৫
            </h1>

            <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">
                <Clock className="w-4 h-4"/>
                আপডেট করা হয়েছে: {updatedDate}
            </div>

            <div className="space-y-4 text-gray-800 text-base leading-relaxed">
                <p>
                    IELTS পরীক্ষার জন্য কার্যকরভাবে প্রস্তুতি নিতে সঠিক বই নির্বাচন করা অত্যন্ত গুরুত্বপূর্ণ, কারণ এটি
                    ভালো স্কোর পাওয়ার চাবিকাঠি।
                </p>
                <p>
                    সবচেয়ে ভালো IELTS বই নির্ধারণ করা কঠিন হতে পারে, কারণ যে বই একজন শিক্ষার্থীর জন্য কার্যকর, তা
                    আরেকজনের জন্য ততটা সহায়ক নাও হতে পারে। প্রত্যেকের শেখার ধরন আলাদা।
                </p>
                <p>
                    তবে চিন্তার কিছু নেই—আমরা কিছু নির্ভরযোগ্য ও সুপারিশকৃত প্রস্তুতির বইয়ের তালিকা তৈরি করেছি, যেগুলো
                    আপনার IELTS যাত্রাকে সহজ করে তুলবে এবং উচ্চ স্কোর পেতে সহায়ক হবে।
                </p>
            </div>
        </section>
    );
}
