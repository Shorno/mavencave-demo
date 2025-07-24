import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, GraduationCap, FileText, CreditCard, User } from "lucide-react"
const services = [
    {
        title: "IELTS ক্র্যাক",
        icon: BookOpen,
        color: "text-purple-600",
        bgColor: "bg-purple-100",
    },
    {
        title: "শর্টলিস্ট কলেজসমূহ",
        icon: BookOpen,
        color: "text-orange-600",
        bgColor: "bg-orange-100",
    },
    {
        title: "স্কলারশিপ খুঁজুন",
        icon: GraduationCap,
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
    },
    {
        title: "SOP রিভিউ",
        icon: FileText,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
    },
    {
        title: "ভিসা সহায়তা",
        icon: CreditCard,
        color: "text-green-600",
        bgColor: "bg-green-100",
    },
    {
        title: "কোচ খুঁজুন",
        icon: User,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
    },
]
export default function ServicesSection() {


    return (
        <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
                    স্বপ্ন আজ বাস্তবে রূপান্তরিত হবে মেভেনকেভ-এর সাথে
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon
                        return (
                            <Card key={index} className="bg-gray-50 shadow-xs rounded-lg hover:shadow-sm transition-shadow duration-300">
                                <CardContent className="sm:p-8 text-center">
                                    <div
                                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${service.bgColor} flex items-center justify-center`}
                                    >
                                        <IconComponent className={`w-8 h-8 ${service.color}`} />
                                    </div>

                                    <h3 className="md:text-xl font-semibold text-gray-900 mb-6">{service.title}</h3>

                                    <Button
                                        variant="ghost"
                                        className="text-blue-600  rounded-full hover:text-blue-700 hover:bg-blue-50 font-medium p-0 h-auto"
                                    >
                                        শুরু করুন
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
