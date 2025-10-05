import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CourseDestination {
    id: string;
    title: string;
    provider: string;
    universityCount: string;
    backgroundClass: string;
}

const ExploreCoursesSection: React.FC = () => {
    const destinations: CourseDestination[] = [
        {
            id: '1',
            title: 'অস্ট্রেলিয়ায় মাস্টার্স',
            provider: 'প্রদানকারী প্রতিষ্ঠান',
            universityCount: '৯৩টি বিশ্ববিদ্যালয়',
            backgroundClass: 'bg-gradient-to-br from-blue-500 to-blue-600'
        },
        {
            id: '2',
            title: 'যুক্তরাজ্যে মাস্টার্স',
            provider: 'প্রদানকারী প্রতিষ্ঠান',
            universityCount: '২৩২টি বিশ্ববিদ্যালয়',
            backgroundClass: 'bg-gradient-to-br from-purple-600 to-purple-700'
        },
        {
            id: '3',
            title: 'আয়ারল্যান্ডে মাস্টার্স',
            provider: 'প্রদানকারী প্রতিষ্ঠান',
            universityCount: '২৯টি বিশ্ববিদ্যালয়',
            backgroundClass: 'bg-gradient-to-br from-green-500 to-green-600'
        }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto ">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-purple-600 mb-2">
                        অন্যান্য দেশে অনুরূপ কোর্সসমূহ এক্সপ্লোর করুন
                    </h2>
                </div>

                {/* Destination Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((destination) => (
                        <Card
                            key={destination.id}
                            className="group hover:shadow-xl py-0 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border-0"
                        >
                            <CardContent className="p-0">
                                <div className={`${destination.backgroundClass} p-8 text-white relative overflow-hidden`}>
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute top-4 right-4 w-20 h-20 border border-white rounded-full"></div>
                                        <div className="absolute bottom-4 left-4 w-16 h-16 border border-white rounded-full"></div>
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold mb-4">
                                            {destination.title}
                                        </h3>

                                        <div className="space-y-2 mb-6">
                                            <p className="text-white/90 text-sm">
                                                {destination.provider}
                                            </p>
                                            <p className="text-lg font-semibold">
                                                {destination.universityCount}
                                            </p>
                                        </div>

                                        <Button
                                            variant="secondary"
                                            className="bg-white text-gray-900 hover:bg-gray-100 group-hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                                        >
                                            <span className="mr-2">এক্সপ্লোর করুন</span>
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploreCoursesSection;
