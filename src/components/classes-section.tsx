import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar, Users } from "lucide-react"
import { useState } from "react"
import { classes } from "@/data/classes"

export default function CoursesSection() {
    const [currentSlide, setCurrentSlide] = useState(0)


    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % classes.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + classes.length) % classes.length)
    }

    return (
        <div className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
                    স্বপ্ন জয়ের একটি ধাপ এগিয়ে যেতে এখনই ফ্রি মাস্টারক্লাসে জয়েন করুন
                </h2>

                <div className="hidden md:block relative mb-8">
                    <div className="flex items-center justify-center">
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 z-10 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="flex items-center gap-6 max-w-6xl mx-16">
                            <div className="flex-shrink-0 w-80">
                                <Card className="bg-gray-100 overflow-hidden hover:shadow-lg transition-shadow opacity-75 scale-90">
                                    <div className="aspect-video px-4 relative">
                                        <img
                                            src={classes[(currentSlide - 1 + classes.length) % classes.length].image || "/placeholder.svg"}
                                            alt={classes[(currentSlide - 1 + classes.length) % classes.length].title}
                                            className="w-full h-full  rounded-lg object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="text-base font-semibold text-gray-900 mb-3">
                                            {classes[(currentSlide - 1 + classes.length) % classes.length].title}
                                        </h3>
                                        <div className="space-y-2 text-xs text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-3 h-3" />
                                                <span>
                          {classes[(currentSlide - 1 + classes.length) % classes.length].date} |{" "}
                                                    {classes[(currentSlide - 1 + classes.length) % classes.length].time}
                        </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-3 h-3" />
                                                <span>{classes[(currentSlide - 1 + classes.length) % classes.length].registered}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="flex-shrink-0 w-96">
                                <Card className="bg-gray-100 overflow-hidden hover:shadow-xl transition-shadow shadow-lg">
                                    <div className="aspect-video relative p-4">
                                        <img
                                            src={classes[currentSlide].image || "/placeholder.svg"}
                                            alt={classes[currentSlide].title}
                                            className="w-full h-full rounded-lg object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{classes[currentSlide].title}</h3>
                                        <div className="space-y-2 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>
                          {classes[currentSlide].date} | {classes[currentSlide].time}
                        </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4" />
                                                <span>{classes[currentSlide].registered}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="flex-shrink-0 w-80">
                                <Card className="bg-gray-100 overflow-hidden hover:shadow-lg transition-shadow opacity-75 scale-90">
                                    <div className="aspect-video relative p-4">
                                        <img
                                            src={classes[(currentSlide + 1) % classes.length].image || "/placeholder.svg"}
                                            alt={classes[(currentSlide + 1) % classes.length].title}
                                            className="w-full h-full rounded-md object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="text-base font-semibold text-gray-900 mb-3">
                                            {classes[(currentSlide + 1) % classes.length].title}
                                        </h3>
                                        <div className="space-y-2 text-xs text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-3 h-3" />
                                                <span>
                          {classes[(currentSlide + 1) % classes.length].date} |{" "}
                                                    {classes[(currentSlide + 1) % classes.length].time}
                        </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-3 h-3" />
                                                <span>{classes[(currentSlide + 1) % classes.length].registered}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 z-10 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-colors"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex justify-center mt-6 space-x-2">
                        {classes.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="md:hidden relative mb-8">
                    <div className="flex items-center justify-center">
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 z-10 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="w-full max-w-sm mx-8">
                            <Card className="bg-gray-100 overflow-hidden">
                                <div className="aspect-video p-3 relative">
                                    <img
                                        src={classes[currentSlide].image || "/placeholder.svg"}
                                        alt={classes[currentSlide].title}
                                        className="w-full  rounded-md h-full object-cover"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{classes[currentSlide].title}</h3>

                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>
                        {classes[currentSlide].date} | {classes[currentSlide].time}
                      </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            <span>{classes[currentSlide].registered}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 z-10 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-colors"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex justify-center mt-4 space-x-2">
                        {classes.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Button  size={"xl"} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium">
                        ফ্রি কাউন্সলিং সেশন বুক করুন
                    </Button>
                </div>
            </div>
        </div>
    )
}
