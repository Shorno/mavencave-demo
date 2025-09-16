interface HighlightSectionProps {
    mainTitle: string;
    mainText: string;
    cards: { title: string; text: string }[];
}
export default function HighlightSection({
                                             mainTitle,
                                             mainText,
                                             cards,
                                         }: HighlightSectionProps) {
    return (
        <section className="bg-[#6366f1] rounded-2xl p-8 pb-8">
            <h2 className="text-3xl font-bold text-white mb-2">{mainTitle}</h2>
            <p className="text-lg text-white mb-6">{mainText}</p>

            <div className="bg-[#f5f5fa] rounded shadow-md grid grid-cols-2 grid-rows-2 gap-0 border border-gray-300">
                {cards.map((card, i) => (
                    <div
                        key={i}
                        className={`flex flex-col justify-center items-start p-6 border-gray-300
            ${i % 2 === 0 ? 'border-r' : ''}
            ${i < 2 ? 'border-b' : ''}`}
                    >
                        <span className="text-lg font-medium text-gray-800 mb-2">{card.title}</span>
                        <span className="text-2xl font-bold text-gray-900">{card.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
