import {ArrowRight, ArrowUpRight} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Link} from "react-router";

interface ExamsHeroProps {
    badge?: string;
    heading: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
    countryOptions: { value: string; label: string; } [];
}

const ExamsHero = ({
                       badge,
                       heading,
                       description,
                       image,
                       countryOptions
                   }: ExamsHeroProps) => {
    return (
        <section className="py-16 md:py-32 px-4 md:px-0 bg-[#F9F9F9] w-full">
            <div className="container mx-auto">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        {badge && (
                            <Badge variant="outline">
                                {badge}
                                <ArrowUpRight className="ml-2 size-4"/>
                            </Badge>
                        )}
                        <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                            {heading}
                        </h1>
                        <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
                            {description}
                        </p>
                        <div className="flex w-full flex-col justify-center gap-10  lg:justify-start">
                            <div>
                                <Select>
                                    <SelectTrigger className="w-full sm:w-60 p-6 rounded-xl border-2 bg-white ">
                                        <SelectValue placeholder="সব দেশ"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {countryOptions.map((option) => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Button asChild size={"xl"} className="w-full sm:w-auto">
                                    <Link to={""}>
                                        পরীক্ষার বিস্তারিত দেখুন
                                        <ArrowRight className="size-4"/>
                                    </Link>
                                </Button>
                            </div>


                        </div>
                    </div>
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="max-h-[500px] w-full rounded-2xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export {ExamsHero};
