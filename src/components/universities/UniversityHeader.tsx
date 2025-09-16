import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

interface UniversityHeaderProps {
    backgroundUrl: string
    name: string
    location: string
    logo: string
}

const UniversityHeader = ({ backgroundUrl, name, location, logo }: UniversityHeaderProps) => (
    <div className="relative w-full">
        {/* Hero image section */}
        <div className="relative h-40 sm:h-44 md:h-48 lg:h-72">
            <img
                src={backgroundUrl || "/placeholder.svg"}
                alt={`${name} campus`}
                className="w-full h-full object-cover block"
            />
        </div>

        <div className="relative -mt-8 sm:-mt-10 md:-mt-12 mx-4 sm:mx-6 md:mx-8 lg:mx-auto lg:max-w-4xl xl:max-w-5xl">
            <div
                className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-lg p-3 sm:p-4 md:p-5"
                style={{
                    boxShadow: "0 6px 32px rgba(0,0,0,0.10)",
                }}
            >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 flex-1">
                        <img
                            src={logo || "/placeholder.svg"}
                            alt={`${name} logo`}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18s lg:h-18 object-contain flex-shrink-0"
                        />
                        <div className="text-center sm:text-left">
                            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                                {name}
                            </h1>
                            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 flex items-center gap-1 justify-center sm:justify-start">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                                {location}
                            </p>
                        </div>
                    </div>

                    <div className="flex-shrink-0 w-full sm:w-auto">
                        <Button className={"w-full"} size={"xl"}>আপনার যোগ্যতা যাচাই করুন</Button>
                    </div>
                </div>
            </div>
        </div>

        <div className="pb-6 sm:pb-8 md:pb-10"></div>
    </div>
)

export default UniversityHeader
