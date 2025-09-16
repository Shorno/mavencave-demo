import { Button } from "@/components/ui/button";

interface Course {
    name: string;
    count: string;
    active?: boolean;
}

interface TopCoursesSectionProps {
    courses: Course[];
    mscCourseName: string;
    mscDuration: string;
    onViewAllClick?: () => void;
    onSelectBestCourseClick?: () => void;
}

export default function TopCoursesSection({
                                              courses,
                                              mscCourseName,
                                              mscDuration,
                                              onViewAllClick,
                                              onSelectBestCourseClick,
                                          }: TopCoursesSectionProps) {
    return (
        <section className="bg-[#f5f6fc] rounded-2xl p-8">
            <div className="flex items-center justify-between mb-7">
                <h2 className="text-2xl font-bold text-[#6246ea]">শীর্ষ কোর্সসমূহ</h2>
                <button
                    className="text-[#6246ea] text-lg font-medium flex items-center gap-1"
                    onClick={onViewAllClick}
                >
                    সব দেখুন <span aria-hidden="true">&rarr;</span>
                </button>
            </div>
            <div className="flex flex-wrap gap-4 mb-7">
                {courses.map((course) => (
                    <Button
                        size={"xl"}
                        key={course.name}
                        className={`${course.active ? "bg-[#6246ea] text-white" : "bg-white text-gray-900"} border-[#e0e0e6] shadow-sm`}
                    >
                        {course.name}
                        <span className="ml-2 font-bold text-base">{course.count}</span>
                    </Button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-6 font-bold text-lg">
                        {mscCourseName}
                        <button className="text-[#6246ea] text-lg font-semibold">
                            &rarr;
                        </button>
                    </div>
                    <div
                        className="flex items-center bg-[#6246ea] text-white rounded-xl px-7 py-3 w-fit font-semibold text-lg">
            <span className="mr-3">
              📅
            </span>
                        {mscDuration}
                    </div>
                </div>
                <button
                    className="bg-[#6246ea] rounded-2xl flex items-center justify-center w-full p-6 text-white font-semibold text-lg transition hover:bg-[#5136bc]"
                    onClick={onViewAllClick}
                >
                    সমস্ত কোর্স দেখুন <span aria-hidden="true" className="ml-2">&rarr;</span>
                </button>
            </div>
            <Button variant="outline"
                    size={"xl"}
                    className="w-full"
                    onClick={onSelectBestCourseClick}
            >
                আপনার জন্য সেরা কোর্সটি বেছে নিন <span aria-hidden="true">&rarr;</span>
            </Button>
        </section>
    );
}
