import {Button} from "@/components/ui/button.tsx";

const FeaturesSection = () => {
    const features = [
        {
            icon: (
                <svg className="w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            ),
            title: "আপনার জন্য ডলার সাশ্রয়ের পরিকল্পনা",
            description: "নূনতম ফি, কোনো গোপন চার্জ নেই। আমাদের বিশ্বস্ত করি আপনার ভবিষ্যৎ সঞ্চয়নায়"
        },
        {
            icon: (
                <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            title: "দ্রুত অনলাইন প্রক্রিয়া",
            description: "আবেদনপত্র কাগজপত্রের কাজ আর নয়। নিজের স্বাছন্দে সম্পূর্ণ করুন পূরো প্রক্রিয়া"
        },
        {
            icon: (
                <svg className="w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h2.5l6 6H4zm16.5-9.5L19 7l-7.5 7.5L9 12 7.5 13.5 13 19l7.5-7.5L19 10l1.5-1.5z"/>
                </svg>
            ),
            title: "আমরা আপনার যাত্রার সহায়",
            description: "স্টুডেন্ট কমিউনিটি, কাউন্সেলিং এবং আরও অনেক কিছু। আপনার যাত্রার প্রতিটি ধাপে আমাদ দিয়ে দুলান সহযোগিতা"
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        <span className="text-purple-600">Mavencave</span>-এর সাথে পার্টনারশিপের সুবিধাসমূহ
                    </h2>
                    <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                        বিদেশে পড়াশোনা শুরু করার চিত্র আর এর যবত ম্যানেজ করা অনেক সময় চালের মনে হতে পারে। আমাদা সেই অভিজ্ঞতাকে বদলে দিতে হবেতো।
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-purple-50 rounded-full group-hover:bg-purple-100 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <Button size={"xl"}>
                        এখনই শুরু করুন
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
