export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-purple-100 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">প্রাইভেসি পলিসি</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-lg p-8">
                    {/* Introduction */}
                    <div className="mb-8">
                        <p className="text-gray-700 leading-relaxed">
                            মেভেনকেভ আপনার ব্যক্তিগত তথ্যের সুরক্ষা এবং গোপনীয়তা রক্ষা করতে অঙ্গীকারবদ্ধ। এই গোপনীয়তার নীতি ব্যাখ্যা করে আমরা কীভাবে তথ্য সংগ্রহ করি, ব্যবহার করি, এবং সংরক্ষণ করি যখন আপনি আমাদের ওয়েবসাইট ব্যবহার করেন।
                        </p>
                    </div>

                    {/* Section 1 */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4">
                            ১. আমরা কী তথ্য সংগ্রহ করি
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            আমরা বিভিন্ন উদ্দেশ্যে আপনার নিম্নলিখিত তথ্য সংগ্রহ করতে পারি:
                        </p>
                        <ul className="text-gray-700 space-y-2 ml-6">
                            <li>• ব্যক্তিগত তথ্য: যেমন নাম, ইমেইল ঠিকানা, ফোন নম্বর।</li>
                            <li>• অ্যাকাডেমিক তথ্য: যেমন শিক্ষাগত যোগ্যতা, অভিজ্ঞতা, এবং অন্যান্য প্রাসঙ্গিক তথ্য।</li>
                            <li>• প্রযুক্তিগত তথ্য: যেমন আপনার IP ঠিকানা, ব্রাউজার টাইপ, ডিভাইস তথ্য এবং ব্যবহার প্যাটার্ন।</li>
                            <li>• কুকিজ এবং ট্র্যাকিং তথ্য: আমাদের ওয়েবসাইটে আপনার অভিজ্ঞতা উন্নত করার জন্য আমরা কুকিজ ব্যবহার করতে পারি।</li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4">
                            ২. আমরা তথ্য কীভাবে ব্যবহার করি
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            আমাদের সংগ্রহকৃত তথ্য বিভিন্ন উদ্দেশ্যে ব্যবহার করা হতে পারে, যেমন:
                        </p>
                        <ul className="text-gray-700 space-y-2 ml-6">
                            <li>• ভিসা অনুমান (Visa Predictor) এবং স্টাডি অ্যাব্রড সম্পর্কিত পরিষেবা প্রদান করা।</li>
                            <li>• ব্যবহারকারীর অভিজ্ঞতা উন্নত করা এবং ওয়েবসাইট কাস্টমাইজ করা।</li>
                            <li>• গুরুত্বপূর্ণ আপডেট, নোটিফিকেশন এবং প্রমোশনাল ইমেইল পাঠানো।</li>
                            <li>• নিরাপত্তা নিশ্চিত করা এবং ওয়েবসাইটের কার্যকারিতা পর্যবেক্ষণ করা।</li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4">
                            ৩. তথ্য শেয়ার করা
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            আমরা আপনার ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষের সাথে বিক্রি বা ভাড়া দিই না। তবে নিম্নলিখিত পরিস্থিতিতে আমরা তথ্য শেয়ার করতে পারি:
                        </p>
                        <ul className="text-gray-700 space-y-2 ml-6">
                            <li>• আইনগত বাধ্যবাধকতার কারণে।</li>
                            <li>• আমাদের অধীনে সেবা প্রদানকারী তৃতীয় পক্ষের সাথে, যারা শুধুমাত্র আমাদের পক্ষের জন্য পরিষেবা প্রদান করে।</li>
                            <li>• ব্যবসায়িক লেনদেনের ক্ষেত্রে (যেমন, কোম্পানি অধিগ্রহণ বা একীভূতকরণ)।</li>
                        </ul>
                    </div>

                    {/* Section 4 */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4">
                            ৪. তথ্য সুরক্ষা
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            আমরা আপনার তথ্য সুরক্ষার জন্য উপযুক্ত প্রযুক্তিগত এবং প্রশাসনিক ব্যবস্থা গ্রহণ করি। তবে ইন্টারনেটের মাধ্যমে কোনো তথ্য স্থানান্তর সম্পূর্ণভাবে নিরাপদ নয়, তাই আমরা ১০০% নিরাপত্তা গ্যারান্টি দিতে পারি না।
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4">
                            ৫. আপনার অধিকার
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            আপনি যে কোনো সময় আপনার তথ্য অ্যাক্সেস, সংশোধন, মুছে ফেলা, বা প্রক্রিয়াকরণ সীমিত করার অনুরোধ করতে পারেন।
                        </p>
                    </div>

                    {/* Section 6 */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4">
                            ৬. কুকিজ নীতি
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            আমাদের ওয়েবসাইটে কুকিজ ব্যবহার করা হয় ব্যবহারকারীর অভিজ্ঞতা উন্নত করার জন্য। আপনি আপনার ব্রাউজার সেটিংস পরিবর্তন করে কুকিজ ব্লক করতে পারেন, তবে কিছু ফাংশনালিটি সীমিত হতে পারে।
                        </p>
                    </div>

                    {/* Section 7 */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4">
                            ৭. নীতি পরিবর্তন
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            আমরা সময় সময় এই গোপনীয়তার নীতি আপডেট করতে পারি। কোনো পরিবর্তন করলে ওয়েবসাইটে প্রকাশ করা হবে।
                        </p>
                    </div>

                    {/* Section 8 */}
                    <div className="mb-0">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4">
                            ৮. যোগাযোগ
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-2">
                            আপনি যদি আমাদের গোপনীয়তা নীতি বা আপনার তথ্য সম্পর্কিত কোনো প্রশ্ন থাকে, আমাদের সাথে যোগাযোগ করুন:
                        </p>
                        <p className="text-gray-700">
                            ইমেইল: <a href="mailto:info@mavencave.com" className="text-purple-600 hover:text-purple-800 underline">info@mavencave.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
