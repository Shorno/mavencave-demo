const statsData = [
    { value: "৮৭%", label: "অনুমোদন হারের গড়" },
    { value: "৮০%", label: "শিক্ষার্থী স্কলারশিপ পেয়েছেন" },
    { value: "৪.৮/৫", label: "শশিক্ষার্থীদের রেটিং " },
    { value: "১০,০০০+", label: "মক টেস্ট সম্পন্ন" },
];

export default function StatsSection() {
    return (
        <section className="rounded-xl bg-[#4169E1] p-8 flex flex-col sm:flex-row justify-between items-center gap-8 w-4/5 my-20">
            {statsData.map((stat, idx) => (
                <div key={idx} className="flex-1 text-center">
                    <div className="text-4xl font-extrabold text-white">{stat.value}</div>
                    <div className="mt-2 text-lg text-white">{stat.label}</div>
                </div>
            ))}
        </section>
    );
}
