import { ChevronDown, ChevronUp, Filter, X } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useState, useMemo } from "react"
import { useParams } from "react-router"
import { mastersUniversities } from "@/data/masters.ts";

interface MastersFilterSidebarProps {
    filters: {
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
    };
    onFiltersChange: (filters: MastersFilterSidebarProps['filters']) => void;
}

export default function MastersFilterSidebar({ filters, onFiltersChange }: MastersFilterSidebarProps) {
    const { country, course } = useParams<{ country: string; course: string }>();

    const [openSections, setOpenSections] = useState({
        countries: false,
        courses: true, // Keep courses open by default
        cities: true,
        duration: false,
        admissionSession: false,
        qsRanking: false,
        tuitionRange: false,
    })

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

    const countryMapping: Record<string, string> = {
        "usa": "যুক্তরাষ্ট্র",
        "uk": "যুক্তরাজ্য",
        "canada": "কানাডা",
        "australia": "অস্ট্রেলিয়া",
        "germany": "জার্মানি",
        "ireland": "আয়ারল্যান্ড",
    };

    // Filter universities based on URL country parameter if present
    const relevantUniversities = useMemo(() => {
        if (country) {
            return mastersUniversities.filter(uni => uni.country === country);
        }
        return mastersUniversities;
    }, [country]);


    // Get all available courses from relevant universities
    const courseOptions = useMemo(() => {
        const availableCourses = new Set<string>();

        relevantUniversities.forEach(uni => {
            uni?.courses.forEach(courseId => {
                availableCourses.add(courseId);
            });
        });

        return Array.from(availableCourses)
            .map(courseId => ({
                id: courseId,
                label: courseMapping[courseId] || courseId
            }))
            .sort((a, b) => a.label.localeCompare(b.label));
    }, [courseMapping, relevantUniversities]);

    // Static filter options
    const qsRankingOptions = [
        { id: '1-10', label: 'Top 1-10' },
        { id: '11-50', label: 'Top 11-50' },
        { id: '51-100', label: 'Top 51-100' },
        { id: '101-200', label: 'Top 101-200' },
        { id: '201-500', label: 'Top 201-500' },
        { id: '500+', label: '500+' },
    ];

    const tuitionRangeOptions = [
        { id: '0-30', label: '০-৩০ লাখ টাকা' },
        { id: '31-50', label: '৩১-৫০ লাখ টাকা' },
        { id: '51-70', label: '৫১-৭০ লাখ টাকা' },
        { id: '71-100', label: '৭১-১০০ লাখ টাকা' },
        { id: '100+', label: '১০০+ লাখ টাকা' },
    ];

    const durationOptions = [
        { id: '1year', label: '১ বছর' },
        { id: '1.5year', label: '১.৫ বছর' },
        { id: '2year', label: '২ বছর' },
        { id: '3year', label: '৩ বছর' },
    ];

    const admissionOptions = [
        { id: 'spring2025', label: 'স্প্রিং ২০২৫' },
        { id: 'fall2025', label: 'ফল ২০২৫' },
        { id: 'spring2026', label: 'স্প্রিং ২০২৬' },
        { id: 'fall2026', label: 'ফল ২০২৬' },
    ];

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
    }

    const clearAllFilters = () => {
        onFiltersChange({
            degree: [],
            subject: [],
            courses: course ? [course] : [], // Keep URL course when clearing
            cities: [],
            duration: [],
            admissionSession: [],
            qsRanking: [],
            tuitionRange: [],
            scholarships: false,
            rating: null
        })
    }

    const handleFilterToggle = (filterType: keyof MastersFilterSidebarProps['filters'], value: string) => {
        if (filterType === 'scholarships' || filterType === 'rating') return;

        const currentValues = filters[filterType] as string[];
        const updatedValues = currentValues.includes(value)
            ? currentValues.filter(v => v !== value)
            : [...currentValues, value];

        onFiltersChange({
            ...filters,
            [filterType]: updatedValues
        });
    }

    const hasActiveFilters = () => {
        // Check if there are any filters active beyond the URL course
        return Object.entries(filters).some(([key, value]) => {
            if (key === 'courses') {
                // For courses, check if there are more than just the URL course
                const courseArray = value as string[];
                return courseArray.length > 1 || (courseArray.length === 1 && courseArray[0] !== course);
            }
            return Array.isArray(value) ? value.length > 0 : value;
        });
    }

    const getAllActiveFilters = () => {
        const allFilters: { type: string; value: string; label: string }[] = [];

        Object.entries(filters).forEach(([type, values]) => {
            if (Array.isArray(values) && values.length > 0) {
                values.forEach(value => {
                    // Don't show URL course as an active filter tag
                    if (type === 'courses' && value === course) return;

                    let label = value;
                    switch (type) {
                        case 'countries':
                            label = countryMapping[value] || value;
                            break;
                        case 'courses':
                            label = courseMapping[value] || value;
                            break;
                        case 'qsRanking':
                            label = qsRankingOptions.find(opt => opt.id === value)?.label || value;
                            break;
                        case 'tuitionRange':
                            label = tuitionRangeOptions.find(opt => opt.id === value)?.label || value;
                            break;
                        case 'duration':
                            label = durationOptions.find(opt => opt.id === value)?.label || value;
                            break;
                        case 'admissionSession':
                            label = admissionOptions.find(opt => opt.id === value)?.label || value;
                            break;
                    }
                    allFilters.push({ type, value, label });
                });
            }
        });

        return allFilters;
    }

    const removeFilter = (filterType: string, valueToRemove: string) => {
        const currentValues = filters[filterType as keyof typeof filters] as string[];
        onFiltersChange({
            ...filters,
            [filterType]: currentValues.filter(v => v !== valueToRemove)
        });
    }

    return (
        <div className="w-full max-w-md px-4 sticky top-4">
            <Card>
                <CardHeader className="shadow-md">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-lg font-normal">
                            <Filter className="h-5 w-5" />
                            ফিল্টারসমূহ
                        </div>
                        {hasActiveFilters() && (
                            <button
                                onClick={clearAllFilters}
                                className="text-sm font-medium text-purple-600 hover:text-purple-700"
                            >
                                সব মুছে ফেলুন
                            </button>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="space-y-0">
                    {/* Active Filter Tags */}
                    {hasActiveFilters() && (
                        <div className="mb-4 rounded-lg bg-gray-50 p-3">
                            <div className="flex flex-wrap gap-2">
                                {getAllActiveFilters().map((filter, index) => (
                                    <div key={`${filter.type}-${filter.value}-${index}`}
                                         className="inline-flex items-center gap-2 bg-white px-2 py-1 rounded-md border text-sm">
                                        <span>{filter.label}</span>
                                        <button
                                            onClick={() => removeFilter(filter.type, filter.value)}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <X className="h-3 w-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Fixed Current Country Display */}
                    {country && (
                        <div className="pb-4">
                            <div className="flex items-center justify-between w-full text-left mb-2">
                                <span className="text-base font-medium text-purple-600">
                                    📍 {countryMapping[country] || country}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* All Courses Filter */}
                    <div className="border-t py-4">
                        <button
                            onClick={() => toggleSection("courses")}
                            className="flex w-full items-center justify-between text-left"
                        >
                            <span className="text-base font-normal">কোর্সসমূহ</span>
                            {openSections.courses ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                        {openSections.courses && (
                            <div className="mt-4 space-y-3 max-h-64 overflow-y-auto">
                                {courseOptions.map((option) => (
                                    <div key={option.id} className="flex items-center space-x-3">
                                        <Checkbox
                                            id={option.id}
                                            checked={filters.courses.includes(option.id)}
                                            onCheckedChange={() => handleFilterToggle('courses', option.id)}
                                            className="data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600"
                                        />
                                        <label htmlFor={option.id} className="cursor-pointer select-none text-sm">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>


                    {/* QS Ranking Filter */}
                    <div className="border-t py-4">
                        <button
                            onClick={() => toggleSection("qsRanking")}
                            className="flex w-full items-center justify-between text-left"
                        >
                            <span className="text-base font-normal">QS র‍্যাংকিং</span>
                            {openSections.qsRanking ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                        {openSections.qsRanking && (
                            <div className="mt-4 space-y-3">
                                {qsRankingOptions.map((option) => (
                                    <div key={option.id} className="flex items-center space-x-3">
                                        <Checkbox
                                            id={option.id}
                                            checked={filters.qsRanking.includes(option.id)}
                                            onCheckedChange={() => handleFilterToggle('qsRanking', option.id)}
                                            className="data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600"
                                        />
                                        <label htmlFor={option.id} className="cursor-pointer select-none text-sm">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Tuition Fee Range Filter */}
                    <div className="border-t py-4">
                        <button
                            onClick={() => toggleSection("tuitionRange")}
                            className="flex w-full items-center justify-between text-left"
                        >
                            <span className="text-base font-normal">টিউশন ফি</span>
                            {openSections.tuitionRange ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                        {openSections.tuitionRange && (
                            <div className="mt-4 space-y-3">
                                {tuitionRangeOptions.map((option) => (
                                    <div key={option.id} className="flex items-center space-x-3">
                                        <Checkbox
                                            id={option.id}
                                            checked={filters.tuitionRange.includes(option.id)}
                                            onCheckedChange={() => handleFilterToggle('tuitionRange', option.id)}
                                            className="data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600"
                                        />
                                        <label htmlFor={option.id} className="cursor-pointer select-none text-sm">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Duration Filter */}
                    <div className="border-t py-4">
                        <button
                            onClick={() => toggleSection("duration")}
                            className="flex w-full items-center justify-between text-left"
                        >
                            <span className="text-base font-normal">কোর্সের মেয়াদ</span>
                            {openSections.duration ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                        {openSections.duration && (
                            <div className="mt-4 space-y-3">
                                {durationOptions.map((option) => (
                                    <div key={option.id} className="flex items-center space-x-3">
                                        <Checkbox
                                            id={option.id}
                                            checked={filters.duration.includes(option.id)}
                                            onCheckedChange={() => handleFilterToggle('duration', option.id)}
                                            className="data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600"
                                        />
                                        <label htmlFor={option.id} className="cursor-pointer select-none text-sm">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Admission Session Filter */}
                    <div className="border-t py-4">
                        <button
                            onClick={() => toggleSection("admissionSession")}
                            className="flex w-full items-center justify-between text-left"
                        >
                            <span className="text-base font-normal">ভর্তি সেশন</span>
                            {openSections.admissionSession ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                        {openSections.admissionSession && (
                            <div className="mt-4 space-y-3">
                                {admissionOptions.map((option) => (
                                    <div key={option.id} className="flex items-center space-x-3">
                                        <Checkbox
                                            id={option.id}
                                            checked={filters.admissionSession.includes(option.id)}
                                            onCheckedChange={() => handleFilterToggle('admissionSession', option.id)}
                                            className="data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600"
                                        />
                                        <label htmlFor={option.id} className="cursor-pointer select-none text-sm">
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
