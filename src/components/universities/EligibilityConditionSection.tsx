import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface EligibilityConditionSectionProps {
    title?: string;
    conditions: { label: string }[];
    onViewAllClick?: () => void;
    onAddClick?: () => void;
}

export default function EligibilityConditionSection({
                                                        title = "ভর্তি যোগ্যতার শর্ত",
                                                        conditions,
                                                        onViewAllClick,
                                                        onAddClick,
                                                    }: EligibilityConditionSectionProps) {
    return (
        <section className="bg-[#f5f6fc] rounded-2xl p-8">
            <div className="flex items-center justify-between mb-7">
                <h2 className="text-2xl font-bold text-[#6246ea]">{title}</h2>
                <button
                    className="text-[#6246ea] text-lg font-medium flex items-center gap-1"
                    type="button"
                    onClick={onViewAllClick}
                >
                    সব দেখুন <span aria-hidden="true">&rarr;</span>
                </button>
            </div>
            {conditions.map((condition) => (
                <div
                    key={condition.label}
                    className="flex items-center justify-between rounded-xl bg-white p-7 text-xl font-semibold mb-6 last:mb-0"
                >
                    <span>{condition.label}</span>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="bg-[#6246ea] hover:bg-[#5136bc] text-white rounded-full text-2xl"
                        onClick={onAddClick}
                        aria-label="Add"
                    >
                        <Plus />
                    </Button>
                </div>
            ))}
        </section>
    );
}
