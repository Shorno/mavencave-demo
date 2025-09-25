import  { useState } from "react";
import { ChevronDown } from "lucide-react";

const courses = [
    "হিসাববিজ্ঞান",
    "মহাকাশ প্রকৌশল",
    "প্রাণী ও পশুচিকিৎসা শিক্ষা",
    "নৃতত্ত্ব",
    "স্থাপত্যবিদ্যা",
    "কৃত্রিম বুদ্ধিমত্তা / মেশিন লার্নিং",
    "শিল্প / চারুকলা",
    "অটোমোটিভ প্রকৌশল",
    "ব্যাংকিং ও ফাইন্যান্স",
    "আচরণগত বিজ্ঞান",
    "জীবপ্রযুক্তি প্রকৌশল",
    "জীববিজ্ঞান",
    "বায়োমেডিকেল প্রকৌশল",
    "বায়োরসায়ন"
];

export default function StudyOptionsAccordion() {
    const [open, setOpen] = useState(true);
    return (
        <section className=" p-4 container mx-auto md:p-8 rounded-xl ">
            <button
                className="w-full flex items-center justify-between text-lg font-bold text-purple-700 mb-4 focus:outline-none"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
            >
                আরও স্টাডি অপশন এক্সপ্লোর করুন
                <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {courses.map((course) => (
                        <div key={course} className="bg-purple-50 rounded-lg px-4 py-3 font-medium text-gray-900">
                            {course}
                        </div>
                    ))}
                    <div className="col-span-2 md:col-span-1 lg:col-span-1 flex items-center">
                        <button className="text-purple-700 font-semibold hover:underline flex items-center gap-1">
                            আরও দেখুন
                            <ChevronDown className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
