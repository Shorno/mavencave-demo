export default function ComingSoonSection() {
    return (
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-32 px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                {/* Large Coming Soon Text */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight">
                    Coming Soon
                </h1>

                {/* Subtitle in Bengali */}
                <p className="text-xl md:text-3xl text-blue-100 mb-12 max-w-3xl mx-auto">
                    আমরা আপনার জন্য কিছু বিশেষ নিয়ে আসছি
                </p>

                {/* Description */}
                <p className="text-base md:text-lg text-blue-50 mb-12 max-w-2xl mx-auto leading-relaxed">
                    আমাদের নতুন সেবা শীঘ্রই চালু হবে। সবার আগে আপডেট পেতে আমাদের সাথে থাকুন।
                </p>

                {/* Optional: Email signup */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="আপনার ইমেইল এড্রেস"
                        className="w-full sm:flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button className="w-full sm:w-auto bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap">
                        নোটিফাই করুন
                    </button>
                </div>

                {/* Optional: Social links */}
                <div className="mt-16 flex justify-center gap-6">
                    <p className="text-blue-100 text-sm">আমাদের সাথে যুক্ত থাকুন:</p>
                    {/* Add your social media icons here */}
                </div>
            </div>
        </section>
    )
}
