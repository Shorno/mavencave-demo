// src/pages/DuolingoFeesPage.jsx









// --- Tailwind Class Definitions for Consistency & Responsiveness ---
const PageContainer = "";
const ContentWrapper = "max-w-4xl mx-auto";
const SectionBox = "my-6 p-5 md:p-8 bg-white rounded-lg shadow-xl border border-indigo-100";
const SectionHeader = "text-xl md:text-2xl font-bold text-indigo-800 mb-4 border-b pb-2 border-indigo-200";
const ListStyle = "list-disc list-inside space-y-2 text-gray-700 ml-2";

const DuolingoFees = () => {
    return (
        <div className={PageContainer}>
            <div className={ContentWrapper}>
                
                {/* 1. Header and Intro Section */}
                <header className="mb-8 p-4 bg-white rounded-lg shadow-md">
                    <p className="text-sm text-gray-500 mb-2">বিদেশে উচ্চশিক্ষা / পরীক্ষাসমূহ / ডুয়োলিঙ্গো / ফি</p>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-900 leading-tight">
                        ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি ২০২২ বাংলাদেশে: মূল্য, বাতিলকরণ ও পুনঃনির্ধারণ ফি
                    </h1>
                    <p className="text-sm text-gray-500 mt-3">
                        <span role="img" aria-label="clock">🕒</span> আপডেট করা হয়েছে: ২ জুন, ২০২২, ১২:২৫
                    </p>
                    <p className="text-gray-700 mt-4 text-base md:text-lg">
                        বাংলাদেশে ডুয়োলিঙ্গো ইংলিশ টেস্ট (DET) ফি হলো **৭০ ডলার**। এই ফি-এর মধ্যে রেজিস্ট্রেশন ও পরীক্ষা পরিচালনার খরচ অন্তর্ভুক্ত থাকে।
                    </p>
                </header>

                {/* 2. Pricing and Benefits Section (Screenshot 190248) */}
                <section className={SectionBox}>
                    <h2 className={SectionHeader}>১. বাংলাদেশে ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি ২০২২</h2>
                    
                    {/* Price Table - Responsive */}
                    <div className="overflow-x-auto my-4 shadow-lg rounded-lg border border-indigo-300">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-indigo-600 text-white">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs md:text-sm font-medium uppercase tracking-wider">পরীক্ষা</th>
                                    <th className="px-6 py-3 text-right text-xs md:text-sm font-medium uppercase tracking-wider">ফি</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                <tr className="hover:bg-indigo-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-medium text-gray-900">১ টেস্টের জন্য ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-800 text-right font-bold">$৭০</td>
                                </tr>
                                <tr className="hover:bg-indigo-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-medium text-gray-900">২ টেস্টের প্যাকেজের জন্য ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-800 text-right font-bold">$১০০ (যার অর্থ প্রতি টেস্ট $৫০)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <ul className="list-none space-y-2 text-gray-700 mt-4">
                        <li>• DET একটি বিশেষ সুবিধা প্রদান করে, যেখানে আপনি চাইলে একটি পরীক্ষা অথবা দুটি পরীক্ষার প্যাকেজ একসাথে বুক করতে পারেন।</li>
                        <li>• ফলাফল **২ দিনের মধ্যে** পাওয়া যায়, এবং অতিরিক্ত $৪০ দিয়ে **১২ ঘণ্টার মধ্যে** ফলাফল পেতে পারেন।</li>
                        <li>• নির্ধারিত পরীক্ষার তারিখের **২৪ ঘণ্টা আগে** পর্যন্ত রেজিস্ট্রেশন করতে পারেন, কোনো অতিরিক্ত লেট রেজিস্ট্রেশন ফি দিতে হবে না।</li>
                    </ul>
                </section>
                
                {/* 3. Cancellation and Rescheduling (Screenshot 190321) */}
                <section className={SectionBox}>
                    <h2 className={SectionHeader}>২. ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি ২০২২: বাতিলের চার্জ</h2>
                    <ul className={ListStyle}>
                        <li>আপনার রেজিস্ট্রেশন বাতিল করলে **ফি ফেরত দেওয়া হবে না**।</li>
                        <li>তবে, আপনি নির্ধারিত তারিখে পরীক্ষা দিতে প্রস্তুত না থাকলে, পরীক্ষার তারিখ **২৮ দিনের মধ্যে পুনঃনির্ধারণ** করতে পারবেন।</li>
                    </ul>

                    <h2 className={`${SectionHeader} mt-6`}>৩. ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি ২০২২: রিস্কেডিউলিং চার্জ</h2>
                    <ul className={ListStyle}>
                        <li>DET-এর রিস্কেডিউলিং সুবিধাটা পরীক্ষার তারিখের **২৮ দিন আগে পর্যন্ত** প্রযোজ্য থাকে।</li>
                        <li>এই সময়সীমার মধ্যে আপনি আপনার পরীক্ষার তারিখ একাধিকবার পুনঃনির্ধারণ করতে পারবেন **কোনো অতিরিক্ত খরচ ছাড়াই**।</li>
                        <li>যদি ২৮ দিনের সময়সীমা মিস হয়ে যায় এবং রিস্কেডিউল করতে হয়, তাহলে আপনার পরীক্ষা বাতিল হয়ে যাবে এবং **নতুন তারিখে DET-এর জন্য আপনাকে পুনরায় রেজিস্ট্রেশন ও ফি প্রদান করতে হবে**।</li>
                    </ul>
                </section>

                {/* 4. Payment Methods (Screenshot 190356) */}
                <section className={SectionBox}>
                    <h2 className={SectionHeader}>৪. বাংলাদেশে ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি প্রদানের পদ্ধতি ২০২২</h2>
                    <p className="text-gray-700 mb-3">ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি প্রদানের জন্য আপনার কাছে দুটি সুবিধাজনক পেমেন্ট অপশন রয়েছে: **ক্রেডিট কার্ড** এবং **ডেবিট কার্ড**।</p>
                    <ul className={ListStyle}>
                        <li>**গ্রহণযোগ্য ক্রেডিট কার্ড:** Visa, Mastercard, এবং American Express।</li>
                        <li>**ডেবিট কার্ড:** বাংলাদেশে অনেক ব্যাংক আন্তর্জাতিক লেনদেন সমর্থন করে। লেনদেনের আগে নিশ্চিত করুন যে আপনার কার্ডটি আন্তর্জাতিক লেনদেন সমর্থন করে।</li>
                    </ul>
                    <p className="font-bold text-gray-800 mt-4">গুরুত্বপূর্ণ নোট:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4 text-sm">
                        <li>DET নগদ বা তৃতীয় পক্ষের ওয়ালেট গ্রহণ করে না।</li>
                        <li>পেমেন্ট সরাসরি DET ওয়েবসাইটের মাধ্যমে করা হয়, যা নিরাপদ লেনদেন নিশ্চিত করে।</li>
                    </ul>
                </section>

                {/* 5. Fee Waiver Tips (Screenshot 190412) */}
                <section className={SectionBox}>
                    <h2 className={SectionHeader}>৫. ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি মওকুফের টিপস</h2>
                    <p className="text-gray-700 mb-3">
                        যদিও DET হলো সবচেয়ে সাশ্রয়ী পরীক্ষা, তবুও আপনি **Access Program** এর মাধ্যমে ফি মওকুফের সুযোগ পেতে পারেন।
                    </p>
                    <p className="font-medium text-gray-800 mt-4">ডুয়োলিঙ্গো ইংলিশ টেস্ট ফি মওকুফের জন্য কারা যোগ্য?</p>
                    <ul className={ListStyle}>
                        <li>নিম্ন-আয়ের পরিবারের শিক্ষার্থী।</li>
                        <li>আর্থিক সহায়তার নথি প্রদান করতে সক্ষম শিক্ষার্থী।</li>
                    </ul>
                    <p className="font-medium text-gray-800 mt-4">কিভাবে waiver-এর জন্য আবেদন করবেন?</p>
                    <ul className={ListStyle}>
                        <li>সরাসরি waiver-এর জন্য আবেদন করা যায় না।</li>
                        <li>পরিবর্তে, আপনাকে আপনার **কাউন্সেলর বা বিশ্ববিদ্যালয় পার্টনারের** সঙ্গে যোগাযোগ করতে হবে। তারা DET Access Program পোর্টাল ব্যবহার করে আপনার পক্ষ থেকে waiver অনুরোধ করতে পারবেন।</li>
                    </ul>
                </section>

                {/* 6. Frequently Asked Questions (Reusable Component) - (Screenshot 190440) */}
                <section className="my-8 p-6 md:p-8 bg-indigo-50 rounded-xl shadow-2xl border border-indigo-200">
                    <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6 border-b-2 border-indigo-300 pb-2">
                        শিক্ষার্থীদের করা সবথেকে বেশি প্রশ্নসমূহ-
                    </h2>
                  
                </section>

            </div>
        </div>
    );
};

export default DuolingoFees;