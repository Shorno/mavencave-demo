import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { GraduationCap } from "lucide-react";

export default function FindUniversityCard() {
    return (
        <Card className="w-full bg-[#f5f6fc] rounded-lg flex flex-col items-center text-center shadow-sm p-4 md:p-6 lg:p-8">
            <CardHeader className="flex flex-col items-center w-full mb-4">
                <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-[#6246ea] mb-2" />
                <CardTitle className="text-base md:text-lg font-bold leading-snug">
                    আপনার পছন্দের<br />বিশ্ববিদ্যালয় খুঁজুন
                </CardTitle>
            </CardHeader>
            <CardContent className="mb-4">
                <div className="text-sm md:text-base text-gray-700 leading-relaxed">
                    আপনার লক্ষ্য অনুযায়ী সেরা বিশ্ববিদ্যালয়গুলো<br />
                    বিনামূল্যে বাছাই করে নিন
                </div>
            </CardContent>
            <CardFooter className="w-full flex flex-col items-center">
                <Button className="mb-4 md:mb-6 text-sm md:text-base" size="lg">
                    আপনার পছন্দের বিশ্ববিদ্যালয় খুঁজুন
                </Button>
                <div className="flex flex-col items-center space-y-2 md:space-y-4 w-full">
                    <div className="flex justify-center -space-x-2 md:-space-x-3">
                        <Avatar className="w-10 h-10 md:w-12 md:h-12 border-2 border-white">
                            <AvatarImage src="/images/p1.jpg" alt="student1" className="object-cover" />
                            <AvatarFallback className="bg-gray-300">AB</AvatarFallback>
                        </Avatar>
                        <Avatar className="w-10 h-10 md:w-12 md:h-12 border-2 border-white">
                            <AvatarImage src="/images/p2.jpg" alt="student2" className="object-cover" />
                            <AvatarFallback className="bg-gray-300">CD</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="text-center text-gray-700 text-sm md:text-base font-medium leading-relaxed">
                        গত মাসে ২ লক্ষেরও বেশি শিক্ষার্থী
                        <br />
                        বিনামূল্যে পরামর্শ পেয়েছেন
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
