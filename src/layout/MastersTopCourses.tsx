import { useMemo, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SearchStats from "@/components/usa-masters/SearchStats.tsx";
import UniversityCard from "@/components/usa-masters/UniversityCard.tsx";
import ExploreCoursesSection from "@/components/usa-masters/ExploreCoursesSection.tsx";
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";
import StudyOptionsAccordion from "@/components/usa-masters/StudyOptionsAccordion.tsx";
import { useParams } from "react-router";
import { mastersUniversities } from "@/data/masters.ts";
import MastersFilterSidebar from "@/components/MastersFilterSidebar.tsx";

interface MastersFilterState {
    degree: string[];
    subject: string[];
    courses: string[];
    cities: string[];
    duration: string[];
    admissionSession: string[];
    scholarships: boolean;
    rating: number | null;
    qsRanking: string[];
    tuitionRange: string[];
}

type CoursesParams = {
    country: string;
    course: string;
}

const titleMapping: Record<string, string> = {
    "usa": "যুক্তরাষ্ট্রে",
    "uk": "যুক্তরাজ্যে",
    "australia": "অস্ট্রেলিয়ায়",
    "canada": "কানাডায়",
    "germany": "জার্মানিতে",
    "ireland": "আয়ারল্যান্ডে",
};

const courseMapping: Record<string, string> = {
    "mph": "স্বাস্থ্য বিজ্ঞানে স্নাতকোত্তর",
    "mscs": "কম্পিউটার বিজ্ঞানে স্নাতকোত্তর",
    "msds": "ডেটা সায়েন্সে স্নাতকোত্তর",
    "mbbs": "ডচিকিৎসাশাস্ত্র ও চিকিৎসা অধ্যয়ন",
    "msc-business-management": "এমবিএ (ব্যবসায় প্রশাসন)",
    "mba": "এমবিএ (ব্যবসায় প্রশাসন)",
    "llm": "এলএলএম (আইন)",
    "meng-engineering": "এমইং ইঞ্জিনিয়ারিং",
    "msc-finance": "এমএসসি ফিন্যান্স",
    "ma-journalism": "এমএ জার্নালিজম",
    "msc-psychology": "এমএসসি সাইকোলজি",
    "ma-international-relations": "এমএ আন্তর্জাতিক সম্পর্ক",
    "ma-public-policy": "এমএ পাবলিক পলিসি",
    "msc-artificial-intelligence": "এমএসসি আর্টিফিশিয়াল ইন্টেলিজেন্স",
    "msc-biotechnology": "এমএসসি বায়োটেকনোলজি",
    "ma-education": "এমএ শিক্ষা",
    "msc-environmental-science": "এমএসসি পরিবেশ বিজ্ঞান",
};


const getCourseTitle = (country: string, course: string) => {
    const countryTitle = titleMapping[country.toLowerCase()] || "বিদেশে";
    const courseTitle = courseMapping[course.toLowerCase()] || course.toUpperCase();
    return `${countryTitle} ${courseTitle} মাস্টার্স কোর্স - শীর্ষ বিশ্ববিদ্যালয়সমূহ`;
}

const getCourseFAQs = (country: string, course: string) => [
    {
        id: "faq1",
        question: `${courseMapping[course.toLowerCase()] || course} কোর্সের জন্য সেরা বিশ্ববিদ্যালয় কিভাবে খুঁজবো?`,
        answer: (
            <>
                {courseMapping[course.toLowerCase()] || course} কোর্সের জন্য প্রথমে QS র‍্যাঙ্কিং এবং বিষয়ভিত্তিক র‍্যাঙ্কিং দেখুন।
                বিশ্ববিদ্যালয়ের ওয়েবসাইটে কারিকুলাম, গবেষণার সুযোগ, ফ্যাকাল্টি প্রোফাইল এবং ইন্ডাস্ট্রি কানেকশন
                পরীক্ষা করুন। আপনার একাডেমিক ব্যাকগ্রাউন্ড এবং ক্যারিয়ার লক্ষ্যের সাথে মিলিয়ে কোর্স নির্বাচন করুন।
            </>
        ),
    },
    {
        id: "faq2",
        question: `${titleMapping[country.toLowerCase()] || country} ${courseMapping[course.toLowerCase()] || course} করার জন্য সেরা বিশ্ববিদ্যালয়গুলো কী কী?`,
        answer: (
            <>
                {titleMapping[country.toLowerCase()]} {courseMapping[course.toLowerCase()] || course} এর জন্য
                সেরা বিশ্ববিদ্যালয়গুলো র‍্যাঙ্কিং এবং কোর্সের মানের উপর ভিত্তি করে নির্বাচিত। প্রতিটি বিশ্ববিদ্যালয়ের
                নিজস্ব বিশেষত্ব রয়েছে, তাই আপনার আগ্রহের ক্ষেত্র অনুযায়ী বিশেষায়িত র‍্যাঙ্কিং দেখুন।
            </>
        ),
    },
    {
        id: "faq3",
        question: `${courseMapping[course.toLowerCase()] || course} কোর্সের মোট খরচ কত?`,
        answer: (
            <>
                {courseMapping[course.toLowerCase()] || course} কোর্সের খরচ বিশ্ববিদ্যালয় এবং দেশ অনুযায়ী ভিন্ন।
                সাধারণত টিউশন ফি, জীবনযাত্রার খরচ, বই এবং অন্যান্য খরচ মিলিয়ে মোট খরচ হয়। স্কলারশিপ
                এবং এসিস্ট্যান্টশিপের মাধ্যমে খরচ কমানো সম্ভব।
            </>
        ),
    },
    {
        id: "faq4",
        question: `${courseMapping[course.toLowerCase()] || course} কোর্সের ভর্তির যোগ্যতা কী?`,
        answer: (
            <>
                সাধারণত স্নাতক ডিগ্রি (ভালো GPA সহ), IELTS/TOEFL স্কোর, SOP, LOR, এবং কিছু ক্ষেত্রে
                GRE/GMAT স্কোর প্রয়োজন। {courseMapping[course.toLowerCase()]} এর জন্য সংশ্লিষ্ট বিষয়ে
                ব্যাকগ্রাউন্ড থাকা প্রয়োজন হতে পারে। প্রতিটি বিশ্ববিদ্যালয়ের নিজস্ব ভর্তির শর্তাবলী রয়েছে।
            </>
        ),
    },
    {
        id: "faq5",
        question: `${courseMapping[course.toLowerCase()] || course} কোর্সের সময়কাল কত?`,
        answer: (
            <>
                {courseMapping[course.toLowerCase()]} কোর্সের সময়কাল সাধারণত ১-২ বছর। {titleMapping[country.toLowerCase()]}
                এ বেশিরভাগ মাস্টার্স কোর্স ১.৫-২ বছরের হয়। কিছু পেশাগত কোর্স ১ বছরেও শেষ করা যায়।
                রিসার্চ-বেসড মাস্টার্স সাধারণত বেশি সময় লাগে।
            </>
        ),
    }
];

export default function TopMastersCourses() {
    const { country, course } = useParams<CoursesParams>();
    console.log(country, course);

    const [searchQuery, setSearchQuery] = useState('');
    const [resultsPerPage, setResultsPerPage] = useState('50');
    const [currentPage, setCurrentPage] = useState(1);

    const [selectedFilters, setSelectedFilters] = useState<MastersFilterState>({
        degree: [],
        subject: [],
        courses: [],
        cities: [],
        duration: [],
        admissionSession: [],
        scholarships: false,
        rating: null,
        qsRanking: [],
        tuitionRange: [],
    });

    // Auto-select URL course when component mounts or route changes
    useEffect(() => {
        if (course) {
            setSelectedFilters(prev => ({
                ...prev,
                courses: [course] // Auto-select the URL course
            }));
        }
    }, [country, course]);

    // Filter and sort universities
    const filteredUniversities = useMemo(() => {
        let filtered = mastersUniversities;

        // Primary filter by country (from URL)
        if (country) {
            filtered = filtered.filter(university =>
                university.country === country
            );
        }

        // Filter by selected courses (including URL course)
        if (selectedFilters.courses.length > 0) {
            filtered = filtered.filter(university =>
                selectedFilters.courses.some(selectedCourse =>
                    university?.courses.includes(selectedCourse)
                )
            );
        }

        // City filter
        if (selectedFilters.cities.length > 0) {
            filtered = filtered.filter(university =>
                selectedFilters.cities.includes(university.city)
            );
        }

        // QS Ranking filter
        if (selectedFilters.qsRanking.length > 0) {
            filtered = filtered.filter(university => {
                const rank = typeof university.qsRank === 'number' ? university.qsRank : 999;
                return selectedFilters.qsRanking.some(range => {
                    switch (range) {
                        case '1-10': return rank >= 1 && rank <= 10;
                        case '11-50': return rank >= 11 && rank <= 50;
                        case '51-100': return rank >= 51 && rank <= 100;
                        case '101-200': return rank >= 101 && rank <= 200;
                        case '201-500': return rank >= 201 && rank <= 500;
                        case '500+': return rank > 500 || typeof university.qsRank === 'string';
                        default: return false;
                    }
                });
            });
        }

        // Tuition fee filter
        if (selectedFilters.tuitionRange.length > 0) {
            filtered = filtered.filter(university => {
                const feeText = university.tuitionFee;
                if (feeText === '-/-' || !feeText.includes('লাখ')) {
                    return selectedFilters.tuitionRange.includes('0-30');
                }

                const feeMatch = feeText.match(/(\d+)/);
                const fee = feeMatch ? parseInt(feeMatch[1]) : 0;

                return selectedFilters.tuitionRange.some(range => {
                    switch (range) {
                        case '0-30': return fee >= 0 && fee <= 30;
                        case '31-50': return fee >= 31 && fee <= 50;
                        case '51-70': return fee >= 51 && fee <= 70;
                        case '71-100': return fee >= 71 && fee <= 100;
                        case '100+': return fee > 100;
                        default: return false;
                    }
                });
            });
        }

        // Search filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(university =>
                university.name.toLowerCase().includes(query) ||
                university.englishName.toLowerCase().includes(query) ||
                university.location.toLowerCase().includes(query) ||
                university?.courses.some(uniCourse =>
                    courseMapping[uniCourse]?.toLowerCase().includes(query)
                )
            );
        }

        // Sort by QS ranking
        return filtered.sort((a, b) => {
            const rankA = typeof a.qsRank === 'number' ? a.qsRank : 999999;
            const rankB = typeof b.qsRank === 'number' ? b.qsRank : 999999;
            return rankA - rankB;
        });
    }, [country, selectedFilters, searchQuery]);

    // Pagination
    const itemsPerPage = parseInt(resultsPerPage);
    const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage);
    const paginatedUniversities = filteredUniversities.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedFilters, searchQuery]);

    if (!country || !course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">কোর্সের তথ্য পাওয়া যায়নি।</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold text-purple-600">
                                {getCourseTitle(country, course)}
                            </h1>
                            <p className="text-gray-600 mt-2">
                                {courseMapping[course.toLowerCase()] || course.toUpperCase()} কোর্সের জন্য সেরা বিশ্ববিদ্যালয় এবং প্রোগ্রাম
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Sidebar Filters */}
                    <div className="lg:col-span-1">
                        <MastersFilterSidebar
                            filters={selectedFilters}
                            onFiltersChange={setSelectedFilters}
                        />
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Search Bar */}
                        <div className="mb-6">
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <Search
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
                                    />
                                    <Input
                                        type="text"
                                        placeholder={`${courseMapping[course.toLowerCase()] || course.toUpperCase()} কোর্সের জন্য বিশ্ববিদ্যালয় খুঁজুন`}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                                <Select value={resultsPerPage} onValueChange={setResultsPerPage}>
                                    <SelectTrigger className="w-48">
                                        <SelectValue placeholder={`${filteredUniversities.length}টি ফলাফল`} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="10">১০টি ফলাফল</SelectItem>
                                        <SelectItem value="25">২৫টি ফলাফল</SelectItem>
                                        <SelectItem value="50">৫০টি ফলাফল</SelectItem>
                                        <SelectItem value="100">১০০টি ফলাফল</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Course Info Banner */}
                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-6 border border-purple-100">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-purple-800 mb-2">
                                        {selectedFilters.courses.length > 1
                                            ? `${selectedFilters.courses.length}টি কোর্স নির্বাচিত`
                                            : `${courseMapping[course.toLowerCase()] || course.toUpperCase()} সম্পর্কে`
                                        }
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        {selectedFilters.courses.length > 1
                                            ? `আপনি ${selectedFilters.courses.map(c => courseMapping[c] || c).join(', ')} কোর্সগুলি নির্বাচন করেছেন। নিচের বিশ্ববিদ্যালয়গুলো এই কোর্সগুলোর যেকোনো একটি অফার করে।`
                                            : `${titleMapping[country.toLowerCase()]} ${courseMapping[course.toLowerCase()]} কোর্সটি আপনার ক্যারিয়ারে নতুন মাত্রা যোগ করবে এবং বিশ্বমানের শিক্ষার সুযোগ প্রদান করবে। নিচের বিশ্ববিদ্যালয়গুলো এই বিষয়ে সেরা প্রোগ্রাম অফার করে।`
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Search Stats */}
                        <SearchStats totalResults={filteredUniversities.length} />

                        {/* Results */}
                        {paginatedUniversities.length > 0 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                                {paginatedUniversities.map((university) => (
                                    <UniversityCard
                                        key={university.id}
                                        university={university}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-gray-400 text-6xl mb-4">🏫</div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                    কোন বিশ্ববিদ্যালয় পাওয়া যায়নি
                                </h3>
                                <p className="text-gray-500">
                                    আপনার সার্চ পরামিতি পরিবর্তন করে আবার চেষ্টা করুন
                                </p>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-4 my-10">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                >
                                    <ArrowLeft className="h-4 w-4 mr-2" /> পূর্ববর্তী
                                </Button>

                                <div className="flex items-center gap-2">
                                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                        const page = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
                                        if (page > totalPages) return null;

                                        return (
                                            <Button
                                                key={page}
                                                variant={currentPage === page ? "default" : "outline"}
                                                size="sm"
                                                onClick={() => setCurrentPage(page)}
                                                className="w-10 h-10"
                                            >
                                                {page}
                                            </Button>
                                        );
                                    })}
                                    {totalPages > 5 && currentPage < totalPages - 2 && (
                                        <>
                                            <span className="px-2">...</span>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => setCurrentPage(totalPages)}
                                                className="w-10 h-10"
                                            >
                                                {totalPages}
                                            </Button>
                                        </>
                                    )}
                                </div>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                >
                                    পরবর্তী <ArrowRight className="h-4 w-4 ml-2" />
                                </Button>
                            </div>
                        )}

                        <ExploreCoursesSection />
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQAccordion
                title={`${courseMapping[course.toLowerCase()] || course.toUpperCase()} সম্পর্কে সবচেয়ে বেশি জিজ্ঞাসিত প্রশ্ন`}
                data={getCourseFAQs(country, course)}
                className="md:p-8 rounded-xl"
            />

            {/* Study Options */}
            <StudyOptionsAccordion />
        </div>
    );
}
