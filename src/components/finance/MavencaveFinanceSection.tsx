import React from 'react';

const MavencaveFinanceSection = () => {
    const features = [
        "কোনো জামানত প্রয়োজন নেই",
        "সুদের হার শুরু মাত্র ৮.৪৯% থেকে",
        "পড়াশোনা ও জীবনযাপনের খরচ কাভার করে",
        "দ্রুত ১০ মিনিটের অনলাইন প্রক্রিয়া"
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image Container */}
                    <div className="flex justify-center lg:justify-start">
                        {/* You can add your image here */}
                        <div className="w-full max-w-lg">
                            <img
                                src="/images/random-image1.png"
                                alt="Mavencave Finance Illustration"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="lg:pl-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            কেন Mavencave Finance আপনার জন্য সঠিক
                        </h2>

                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Mavencave Finance-এ, আমাদের লক্ষ্য হলো আপনার আর্থিক বিষয়গুলোকে
                            শক্তিশালী করা যাতে আপনি নিশ্চিন্তে পড়াশোনা করতে পারেন।
                        </p>

                        {/* Features List */}
                        <div className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-gray-800 text-lg">
                    {feature}
                  </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 text-lg">
                            আমার আবেদন শুরু করুন
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MavencaveFinanceSection;
