import { ChevronDown, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface FilterSidebarProps {
    filters: {
        degree: string[];
        location: string[];
        scholarships: boolean;
        rating: number | null;
    };
    //@ts-ignore
    onFiltersChange: (filters: any) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = () => {
    const degreeOptions = [
        { id: 'masters', label: 'মাস্টার্স', checked: true },
        { id: 'phd', label: 'পিএইচডি', checked: false },
        { id: 'undergrad', label: 'আন্ডারগ্র্যাজুয়েট', checked: false },
        { id: 'diploma', label: 'ডিপ্লোমা', checked: false }
    ];

    const locationOptions = [
        'আমেরিকা',
        'কানাডা',
        'অস্ট্রেলিয়া',
        'যুক্তরাজ্য',
        'জার্মানি'
    ];

    return (
        <div className="space-y-4">
            {/* Filter Header */}
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <Filter className="h-5 w-5" />
                        ফিল্টারসমূহ
                    </CardTitle>
                </CardHeader>
            </Card>

            {/* Degree Type Filter */}
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-base">সা বরণ করি</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="space-y-2">
                        {degreeOptions.map((option) => (
                            <div key={option.id} className="flex items-center space-x-2">
                                <Checkbox
                                    id={option.id}
                                    checked={option.checked}
                                    className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                                />
                                <label
                                    htmlFor={option.id}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Subject Areas */}
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-base">বিষয়</CardTitle>
                </CardHeader>
                <CardContent>
                    <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                            <span className="text-sm">বিষয় বাছাই করুন</span>
                            <ChevronDown className="h-4 w-4" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="space-y-2 mt-2">
                            <div className="text-sm text-gray-600">
                                ইঞ্জিনিয়ারিং, বিজনেস, কম্পিউটার সায়েন্স...
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </CardContent>
            </Card>

            {/* Location Filter */}
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-base">কেন্দ্রসমূহ</CardTitle>
                </CardHeader>
                <CardContent>
                    <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                            <span className="text-sm">অবস্থান</span>
                            <ChevronDown className="h-4 w-4" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="space-y-2 mt-2">
                            {locationOptions.map((location) => (
                                <div key={location} className="flex items-center space-x-2">
                                    <Checkbox id={location} />
                                    <label htmlFor={location} className="text-sm">{location}</label>
                                </div>
                            ))}
                        </CollapsibleContent>
                    </Collapsible>
                </CardContent>
            </Card>

            {/* Scholarship Filter */}
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-base">শহরসমূহ</CardTitle>
                </CardHeader>
                <CardContent>
                    <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                            <span className="text-sm">কোন্‌ নেওয়াল</span>
                            <ChevronDown className="h-4 w-4" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="space-y-2 mt-2">
                            <div className="text-sm text-gray-600">
                                নিউ ইয়র্ক, লস অ্যাঞ্জেলেস, শিকাগো...
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </CardContent>
            </Card>

            {/* Study Level */}
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-base">ভর্তি দেবল</CardTitle>
                </CardHeader>
                <CardContent>
                    <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                            <span className="text-sm">বর্তি দেবল</span>
                            <ChevronDown className="h-4 w-4" />
                        </CollapsibleTrigger>
                    </Collapsible>
                </CardContent>
            </Card>
        </div>
    );
};

export default FilterSidebar;
