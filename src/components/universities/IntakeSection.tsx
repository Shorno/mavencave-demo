import {Button} from "@/components/ui/button";

interface Intake {
    date: string;
    status: string;
}

interface IntakeSectionProps {
    intakes: Intake[];
    title?: string;
    onViewAllClick?: () => void;
    onFindBestIntakeClick?: () => void;
}

export default function IntakeSection({
                                          intakes,
                                          title = "ভর্তি গ্রহণ ও আবেদন শেষ তারিখ",
                                          onViewAllClick,
                                          onFindBestIntakeClick,
                                      }: IntakeSectionProps) {
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
            <div className="flex flex-col gap-6 mb-8">
                {intakes.map((intake) => (
                    <div
                        key={intake.date}
                        className="flex items-center justify-between rounded-xl bg-white p-5 text-lg font-semibold"
                    >
                        <span>{intake.date}</span>
                        <span className="bg-green-300 rounded-full px-4 py-1 text-green-900 text-sm">
              {intake.status}
            </span>
                    </div>
                ))}
            </div>
            <Button
                variant="outline"
                size="xl"
                onClick={onFindBestIntakeClick}
                className="w-full"
            >
                আপনার জন্য সেরা ইনটেকটি খুঁজুন <span aria-hidden="true">&rarr;</span>
            </Button>
        </section>
    );
}
