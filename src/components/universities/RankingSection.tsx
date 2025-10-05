import { Button } from "@/components/ui/button";
import { Star } from "lucide-react"; // Use or replace with any icon

interface RankingItem {
    rank: string | number;
    description: string;
}

interface RankingCategory {
    id: string;
    name: string;
    iconUrl?: string;
    icon?: React.ReactNode;
    items: RankingItem[];
}

interface RankingSectionProps {
    categories: RankingCategory[];
    title?: string;
    onViewAllClick?: () => void;
    onAdmissionClick?: () => void;
}

export default function RankingSection({
                                           categories,
                                           title = "র‍্যাঙ্কিং",
                                           onViewAllClick,
                                           onAdmissionClick,
                                       }: RankingSectionProps) {
    return (
        <section className="bg-[#f5f6fc] rounded-2xl p-8 w-full mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[#6246ea]">{title}</h2>
                <button
                    onClick={onViewAllClick}
                    className="text-[#6246ea] text-lg font-semibold flex items-center gap-1"
                >
                    সব দেখুন <span aria-hidden="true" className="text-xl">&rarr;</span>
                </button>
            </div>
            <div className="flex flex-col gap-12">
                {categories.map((category) => (
                    <div key={category.id}>
                        <div className="flex items-center gap-4 mb-6">
                            {category.iconUrl ? (
                                <img
                                    src={category.iconUrl}
                                    alt={category.name}
                                    className="w-10 h-10 rounded-lg object-contain"
                                />
                            ) : (
                                <div className="bg-white rounded-lg w-10 h-10 flex items-center justify-center shadow">
                                    {category.icon || <Star className="w-6 h-6 text-gray-400" />}
                                </div>
                            )}
                            <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {category.items.map((item, i) => (
                                <div
                                    key={item.rank + item.description + i}
                                    className="bg-[#6246ea] rounded-xl p-5 text-white font-semibold"
                                >
                                    <div className="text-xl font-bold mb-1">#{item.rank}</div>
                                    <div className="text-sm">{item.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Button
                variant="outline"
                size="xl"
                className="w-full mt-10"
                onClick={onAdmissionClick}
            >
                এখানে জানুন আপনার ভর্তি সম্ভাবনা <span aria-hidden="true">&rarr;</span>
            </Button>
        </section>
    );
}
