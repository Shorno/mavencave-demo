type NextStepCardProps = {
    title: string;
    href: string;
};

function NextStepCard({title, href}: NextStepCardProps) {
    return (
        <a
            href={href}
            className="bg-gray-50 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow transition min-w-[230px] max-w-xs w-full"
        >
            <div className="text-xl font-semibold text-black mb-4">{title}</div>
            <div className="mt-auto">
        <span className="inline-flex items-center gap-1 text-blue-600 font-semibold text-base hover:underline">
          এখনই পড়ুন
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="inline">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
        </span>
            </div>
        </a>
    );
}

const ieltsNextSteps = [
    {title: "IELTS পরীক্ষার ধরন", href: "/ielts/type"},
    {title: "IELTS যোগ্যতা", href: "/ielts/eligibility"},
    {title: "IELTS ব্যান্ড স্কোর", href: "/ielts/band-score"},
];

interface NextStepsSectionProps {
    nextSteps?: { title: string; href: string }[];
}

export default function NextStepsSection({nextSteps = ieltsNextSteps}: NextStepsSectionProps) {
    return (
        <section className="bg-white p-4 rounded-xl mx-auto my-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">পরবর্তী ধাপ</h2>
            <div className="flex flex-col md:flex-row gap-5">
                {nextSteps.map(({title, href}) => (
                    <NextStepCard key={title} title={title} href={href}/>
                ))}
            </div>
        </section>
    );
}
