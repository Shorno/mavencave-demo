export default function RefundPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-purple-100 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">রিফান্ড পলিসি</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-lg p-8">
                    {/* Main Title */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4">
                            মেভেনকেভ-এর রিফান্ড পলিসি
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            মেভেনকেভ-এ আপনাকে স্বাগত। আমাদের পরিষেবা কেনার আগে অনুগ্রহ করে আমাদের রিফান্ড নীতিটি সাবধানে পড়ুন। আমাদের লক্ষ্য হলো আপনাকে বিদেশে অধ্যয়ন সংক্রান্ত মূল্যবান তথ্য ও সরঞ্জাম সরবরাহ করা।
                        </p>
                    </div>

                    {/* Section 1 */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4">
                            ১. রিফান্ড পাওয়ার যোগ্যতা
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            যেহেতু মেভেনকেভ মূলত ভিসা ভবিষ্যদ্বাণী সরঞ্জাম এবং ডিজিটাল কনসালটেশন/গাইডলাইন পরিষেবা প্রদান করে, তাই রিফান্ডের শর্তাবলী এই পরিষেবার প্রকৃতির উপর নির্ভর করে।
                        </p>

                        <div className="mb-6">
                            <h3 className="text-lg font-medium text-gray-800 mb-3">
                                ১.১। ভিসা ভবিষ্যদ্বাণী সরঞ্জাম (Visa Predictor Tool) এবং ডিজিটাল রিপোর্ট:
                            </h3>

                            <div className="mb-4">
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>• সাধারণত কোনো রিফান্ড নেই:</strong> একবার আপনি ভিসা ভবিষ্যদ্বাণী সরঞ্জাম ব্যবহার করে রিপোর্ট তৈরি বা অ্যাক্সেস করার জন্য অর্থ প্রদান করলে, সেই পরিষেবার জন্য সাধারণত কোনো রিফান্ড প্রদান করা হবে না। কারণ, তথ্য অ্যাক্সেস এবং প্রক্রিয়াকরণের মাধ্যমে পরিষেবাটি তৎক্ষণাৎ সম্পন্ন হয়ে যায় এবং আপনি আপনার কাঙ্ক্ষিত ভবিষ্যদ্বাণী পেয়ে যান।
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    <strong>• ব্যতিক্রম:</strong> শুধুমাত্র নিম্নলিখিত বিরল ক্ষেত্রে সম্পূর্ণ রিফান্ড বিবেচনা করা যেতে পারে:
                                </p>
                                <ul className="text-gray-700 space-y-2 ml-8">
                                    <li>- পেমেন্ট করার পর প্রযুক্তিগত ত্রুটির কারণে টুলটি আপনাকে রিপোর্টটি দিতে সম্পূর্ণরূপে ব্যর্থ হলে, এবং আমাদের টিম ৭২ ঘণ্টার মধ্যে সেই সমস্যার সমাধান করতে না পারলে।</li>
                                    <li>- একাধিকবার পেমেন্ট হয়ে গেলে (ডুপ্লিকেট ট্রানজেকশন)।</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-3">
                                ১.২। ব্যক্তিগত/প্রিমিয়াম কনসালটেশন সার্ভিস (Personal/Premium Consultation Service):
                            </h3>

                            <ul className="text-gray-700 space-y-3 ml-6">
                                <li>
                                    <strong>• কনসালটেশন শুরুর পূর্বে:</strong> আপনি যদি নির্ধারিত কনসালটেশন সেশন শুরু হওয়ার কমপক্ষে ৪৮ ঘণ্টা আগে আপনার অ্যাপয়েন্টমেন্ট বাতিল করেন, তবে আপনি সম্পূর্ণ রিফান্ড পাওয়ার যোগ্য হতে পারেন।
                                </li>
                                <li>
                                    <strong>• ৪৮ ঘণ্টার মধ্যে বাতিল:</strong> যদি আপনি নির্ধারিত সেশনের ৪৮ ঘণ্টার কম সময়ের মধ্যে বাতিল করেন, তবে সার্ভিস ফি-এর ২৫% প্রসেসিং ফি কেটে বাকি অর্থ রিফান্ড করা হবে।
                                </li>
                                <li>
                                    <strong>• কনসালটেশন শুরু হওয়ার পরে:</strong> একবার কনসালটেশন সেশন শুরু হয়ে গেলে বা পরিষেবা আংশিকভাবে প্রদান করা হলে, কোনো রিফান্ড প্রদান করা হবে না।
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4">
                            ২. রিফান্ডের জন্য আবেদন প্রক্রিয়া
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>২.১।</strong> রিফান্ডের জন্য আবেদন করতে হলে আপনাকে অবশ্যই [আপনার ইমেইল ঠিকানা]-এ একটি ইমেইল পাঠাতে হবে।
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    <strong>২.২।</strong> ইমেইলে নিম্নলিখিত তথ্যগুলো স্পষ্টভাবে উল্লেখ করতে হবে:
                                </p>
                                <ul className="text-gray-700 space-y-2 ml-6">
                                    <li>• আপনার নাম এবং অ্যাকাউন্ট আইডি (যদি থাকে)।</li>
                                    <li>• আপনার ট্রানজেকশন আইডি (Transaction ID) এবং পেমেন্টের তারিখ।</li>
                                    <li>• আপনি যে পরিষেবার জন্য রিফান্ড চাচ্ছেন তার নাম (যেমন: ভিসা প্রেডিক্টর টুল/প্রিমিয়াম কনসালটেশন)।</li>
                                    <li>• রিফান্ডের কারণ (স্পষ্টভাবে ব্যাখ্যা করুন)।</li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>২.৩।</strong> আপনার রিফান্ড আবেদন পাওয়ার পর, আমাদের টিম ৫ থেকে ৭ কার্যদিবসের মধ্যে আপনার আবেদন পর্যালোচনা করবে এবং আপনাকে সিদ্ধান্ত জানাবে।
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4">
                            ৩. রিফান্ড প্রদানের প্রক্রিয়া
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>৩.১।</strong> রিফান্ড অনুমোদন হলে, আপনার রিফান্ডটি সাধারণত ৭ থেকে ১৫ কার্যদিবসের মধ্যে মূল পেমেন্ট মাধ্যমে (যেখান থেকে টাকা পাঠানো হয়েছিল) ফেরত পাঠানো হবে।
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>৩.২।</strong> ব্যাংক বা পেমেন্ট গেটওয়ের প্রক্রিয়াকরণ সময়ের কারণে এই সময়সীমা পরিবর্তিত হতে পারে, যার উপর মেভেনকেভ-এর কোনো নিয়ন্ত্রণ নেই।
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4">
                            ৪. গুরুত্বপূর্ণ ঘোষণা
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            MavenCave-এর ভিসা ভবিষ্যদ্বাণী সরঞ্জাম বা পরামর্শগুলি কোনো অবস্থাতেই ভিসা মঞ্জুর হওয়ার আইনি নিশ্চয়তা বা প্রতিশ্রুতি নয়। আপনার ভিসা আবেদন বাতিল হলে বা অন্য কোনো আর্থিক ক্ষতির সম্মুখীন হলে, আমরা কোনো রিফান্ড দিতে বা ক্ষতিপূরণ দিতে বাধ্য নই। রিফান্ড শুধুমাত্র এই নথিতে উল্লিখিত সীমাবদ্ধ পরিস্থিতিতে প্রদান করা হয়।
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div className="mb-0">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4">
                            ৫. যোগাযোগ
                        </h2>

                        <div>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                আমাদের রিফান্ড নীতি সম্পর্কে আপনার যদি কোনো প্রশ্ন থাকে, তবে অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন:
                            </p>
                            <p className="text-gray-700">
                                ইমেইল: <a href="mailto:info@mavencave.com" className="text-purple-600 hover:text-purple-800 underline">info@mavencave.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
