import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users } from "lucide-react"
import { classes } from "@/data/classes"

export default function CoursesSection() {
    return (
        <div className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
                    স্বপ্ন জয়ের একটি ধাপ এগিয়ে যেতে এখনই ফ্রি মাস্টারক্লাসে জয়েন করুন
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {classes.map((classItem, index) => (
                        <Card key={index} className="bg-gray-100 p-0 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video p-4 relative">
                                <img
                                    src={classItem.image || "/placeholder.svg"}
                                    alt={classItem.title}
                                    className="w-full h-full rounded-lg object-cover"
                                />
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    {classItem.title}
                                </h3>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>
                                            {classItem.date} | {classItem.time}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4" />
                                        <span>{classItem.registered}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Button size={"xl"} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium">
                        ফ্রি কাউন্সলিং সেশন বুক করুন
                    </Button>
                </div>
            </div>
        </div>
    )
}
