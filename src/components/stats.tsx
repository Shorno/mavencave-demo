import { Card, CardContent } from "@/components/ui/card"

export default function StatsSection() {
    const stats = [
        {
            icon: "📱",
            number: "১০ লক্ষ+",
            description: "ডাউনলোড করেছেন",
            bgColor: "bg-green-100",
            color: "text-green-600",
        },
        {
            icon: "📺",
            number: "১ লক্ষ+",
            description: "ইউটিউবে সাবস্ক্রাইবার",
            bgColor: "bg-red-100",
            color: "text-red-600",
        },
        {
            icon: "📘",
            number: "২ লক্ষ+",
            description: "ফেসবুক পরিবার",
            bgColor: "bg-blue-100",
            color: "text-blue-600",
        },
        {
            icon: "👥",
            number: "১ লক্ষ+",
            description: "কমিউনিটি সদস্য",
            bgColor: "bg-purple-100",
            color: "text-purple-600",
        },
    ]

    return (
        <div className="py-16 px-4 bg-white">
            <img
                src={"/images/landmarks.png"}
                alt={"landmarks"}
                className={"w-full h-[250px] sm:h-auto sm:object-cover object-bottom-left "}
            />
            <div className="max-w-6xl py-16 mx-auto">
                <h2 className="text-xl md:text-3xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
                    স্বপ্নকে স্পর্শ করতে এখনই যুক্ত হন বাংলাদেশের সবচেয়ে বড় কমিউনিটিতে
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                    {stats.map((stat, index) => (
                        <Card
                            key={index}
                            className="bg-gray-50 rounded-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <CardContent className="sm:p-8 text-center">
                                <div
                                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${stat.bgColor} flex items-center justify-center`}
                                >
                                    <span className={`text-2xl ${stat.color}`}>{stat.icon}</span>
                                </div>

                                <div className="text-xl md:text-3xl font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </div>

                                <p className="text-gray-700 text-sm md:text-base font-medium">
                                    {stat.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
