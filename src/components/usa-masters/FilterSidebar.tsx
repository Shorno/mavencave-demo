import {ChevronDown, ChevronUp, Filter, X} from "lucide-react"
import {Card, CardContent, CardHeader} from "@/components/ui/card"
import {Checkbox} from "@/components/ui/checkbox"
import {useState} from "react"
import {universities} from "@/data/universities.ts";

interface FilterSidebarProps {
    filters: {
        degree: string[];
        location: string[];
        cities: string[];
        scholarships: boolean;
        rating: number | null;
    };
    onFiltersChange: (filters: FilterSidebarProps['filters']) => void;
}

export default function FilterSidebar({filters, onFiltersChange}: FilterSidebarProps) {
    const [openSections, setOpenSections] = useState({
        degree: false,
        subject: false,
        courses: false,
        cities: true,
        duration: false,
        admission: false,
    })

    const cityOptions = [...new Set(universities.map(university => university.location))]

    console.log(cityOptions)

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections((prev) => ({...prev, [section]: !prev[section]}))
    }

    const clearAllFilters = () => {
        onFiltersChange({
            ...filters,
            cities: []
        })
    }

    const handleCityToggle = (city: string) => {
        const updatedCities = filters.cities.includes(city)
            ? filters.cities.filter(c => c !== city)
            : [...filters.cities, city]

        onFiltersChange({
            ...filters,
            cities: updatedCities
        })
    }

    const removeCityFilter = (cityToRemove: string) => {
        onFiltersChange({
            ...filters,
            cities: filters.cities.filter(c => c !== cityToRemove)
        })
    }


    return (
        <div className="w-full max-w-md px-4 sticky top-4">
            <Card>
                {/* Filter Header */}
                <CardHeader className="shadow-md">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-lg font-normal">
                            <Filter className="h-5 w-5"/>
                            ফিল্টারসমূহ
                        </div>
                        {filters.cities.length > 0 && (
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
                    {/* Selected Filter Tags */}
                    {filters.cities.length > 0 && (
                        <div className="mb-4 rounded-lg bg-gray-50 p-3">
                            <div className="flex flex-wrap gap-2">
                                {filters.cities.map((city) => (
                                    <div key={city}
                                         className="inline-flex items-center gap-2 bg-white px-2 py-1 rounded-md border text-sm">
                                        <span>{city}</span>
                                        <button
                                            onClick={() => removeCityFilter(city)}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <X className="h-3 w-3"/>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Degree Type Filter */}
                    <div className="pb-4">
                        <button
                            onClick={() => toggleSection("degree")}
                            className="flex w-full items-center justify-between text-left"
                        >
                            <span className="text-base font-normal">১ম বর্ষের কি</span>
                            <ChevronDown className="h-4 w-4"/>
                        </button>
                    </div>

                    {/* Subject Filter */}
                    <div className="border-t py-4">
                        <button
                            onClick={() => toggleSection("subject")}
                            className="flex w-full items-center justify-between text-left"
                        >
                            <span className="text-base font-normal">বিষয়</span>
                            <ChevronDown className="h-4 w-4"/>
                        </button>
                    </div>

                    {/* Courses Filter */}
                    <div className="border-t py-4">
                        <button
                            onClick={() => toggleSection("courses")}
                            className="flex w-full items-center justify-between text-left"
                        >
                            <span className="text-base font-normal">কোর্সসমূহ</span>
                            <ChevronDown className="h-4 w-4"/>
                        </button>
                    </div>

                    {/* Cities Filter */}
                    <div className="border-t py-4">
                        <button
                            onClick={() => toggleSection("cities")}
                            className="flex w-full items-center justify-between text-left"
                        >
                            <span className="text-base font-normal">শহরসমূহ</span>
                            {openSections.cities ? <ChevronUp className="h-4 w-4"/> :
                                <ChevronDown className="h-4 w-4"/>}
                        </button>
                        {openSections.cities && (
                            <div className="mt-4 space-y-3">
                                {cityOptions.map((city) => (
                                    <div key={city} className="flex items-center space-x-3">
                                        <Checkbox
                                            id={city}
                                            checked={filters.cities.includes(city)}
                                            onCheckedChange={() => handleCityToggle(city)}
                                            className="data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600"
                                        />
                                        <label htmlFor={city} className="cursor-pointer select-none text-sm">
                                            {city}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Course Duration Filter */}
                    <div className="border-t py-4">
                        <button
                            onClick={() => toggleSection("duration")}
                            className="flex w-full items-center justify-between text-left"
                        >
                            <span className="text-base font-normal">কোর্সের মেয়াদ</span>
                            <ChevronDown className="h-4 w-4"/>
                        </button>
                    </div>

                    {/* Admission Session Filter */}
                    <div className="border-t py-4">
                        <button
                            onClick={() => toggleSection("admission")}
                            className="flex w-full items-center justify-between text-left"
                        >
                            <span className="text-base font-normal">ভর্তি সেশন</span>
                            <ChevronDown className="h-4 w-4"/>
                        </button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
