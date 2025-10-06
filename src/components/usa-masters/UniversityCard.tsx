import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, MapPin } from 'lucide-react';
import {useIsMobile} from "@/hooks/use-mobile.ts";
import type {University} from "@/data/universities.ts";

interface UniversityCardProps {
    university: University;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ university }) => {
    const isMobile = useIsMobile()
    return (
        <Card className="hover:shadow-lg transition-shadow duration-200 bg-white h-full">
            <CardContent className="p-4 sm:p-6 h-full">
                <div className="flex flex-col space-y-4 h-full">
                    {/* University Header */}
                    <div className="flex items-start gap-4">
                        {/* MIT Logo */}
                        <img
                            src={university.logo}
                            alt={`${university.englishName} logo`}
                            className="w-12 h-12 object-cover rounded"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://placehold.co/48'; // fallback
                            }}
                        />


                        {/* University Info */}
                        <div className="flex-grow min-w-0">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 leading-tight">
                                {university.name}
                            </h3>
                            <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="h-4 w-4 text-purple-600 flex-shrink-0" />
                                <span className="text-sm">{university.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                        {/* QS Rank */}
                        <div>
                            <div className="text-sm text-gray-600 mb-2">কিউএস র‍্যাঙ্ক</div>
                            <div className="flex items-center justify-center gap-1">
                                <Trophy className="h-4 w-4 text-purple-600" />
                                <span className="text-lg font-semibold text-purple-600">
                                    {university.qsRank}
                                </span>
                            </div>
                        </div>

                        {/* Tuition Fee */}
                        <div>
                            <div className="text-sm text-gray-600 mb-2">টিউশন ফি</div>
                            <div className=" font-semibold text-gray-900">
                                {university.tuitionFee}
                            </div>
                        </div>

                        {/* IELTS Requirement */}
                        <div>
                            <div className="text-sm text-gray-600 mb-2">ভর্তির শর্তসমূহ</div>
                            <div className="font-semibold text-gray-900">
                                IELTS: {university.ieltsScore}
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-4 mt-auto">
                        <Button
                            size={isMobile? "sm" : "default"}
                            variant="outline"
                            className="flex-1 rounded-full py-3 px-6"
                        >
                            আরও জানুন
                        </Button>
                        <Button
                            size={isMobile? "sm" : "default"}
                            className="flex-1 rounded-full"
                        >
                            আপনার যোগ্যতা যাচাই করুন
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default UniversityCard;
