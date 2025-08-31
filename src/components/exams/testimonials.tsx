import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import {StarIcon} from "lucide-react";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils.ts";

const testimonials = [
    {
        id: 1,
        name: "সাদিয়া পারভীন",
        designation: "শিক্ষার্থী",
        testimonial:
            "এই ওয়েবসাইট থেকেই আমি SAT সম্পর্কে বিস্তারিত জানতে পারি এবং আমার কলেজ অ্যাপ্লিকেশনের সময় অনেক সাহায্য পেয়েছি। ধন্যবাদ পুরো টিমকে!",
        avatar: "/images/exams/user1.png",
    },
    {
        id: 2,
        name: "তাসনিম ইসলাম",
        designation: "শিক্ষার্থী",
        testimonial:
            "এই প্ল্যাটফর্মটিতে আমার IELTS প্রস্তুতির সময় দারুণ সহায়ক হয়ে উঠেছিল। সহজ নির্দেশনা আর দ্রুত উত্তর পেয়ে পড়াশোনার প্রতি আমার আত্মবিশ্বাস বাড়িয়ে দিয়েছে!",
        avatar: "/images/exams/user1.png",

    },
];

export default function ExamTestimonials() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
    }, [api]);

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-6">
            <h2 className="mb-6 text-3xl md:text-4xl font-bold text-center tracking-tight">
                আমাদের শিক্ষার্থীরা আমাদের সম্পর্কে কী বলে
            </h2>
            <p className="mb-10 text-center text-gray-600 max-w-xl mx-auto">
                আমাদের AI-চালিত নির্দেশিকা ব্যবহার করে বিদেশে পড়াশোনার স্বপ্ন পূরণ করা শিক্ষার্থীদের বাস্তব গল্পগুলি
                আবিষ্কার করুন। তাদের সাফল্যই আমাদের সেরা প্রমাণ।
            </p>
            <div className="container w-full lg:max-w-screen-lg xl:max-w-screen-xl mx-auto px-12">
                <Carousel setApi={setApi}>
                    <CarouselContent>
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id}>
                                <TestimonialCard testimonial={testimonial}/>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
                <div className="flex items-center justify-center gap-2">
                    {Array.from({length: count}).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={cn("h-3.5 w-3.5 rounded-full border-2", {
                                "bg-primary border-primary": current === index + 1,
                            })}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

const TestimonialCard = ({
                             testimonial,
                         }: {
    testimonial: (typeof testimonials)[number];
}) => (
    <div className="mb-8 bg-accent rounded-xl py-8 px-6 sm:py-6">
        <div className="flex items-center justify-between gap-20">
            <img src={testimonial.avatar}
                    alt={testimonial.name}
                className="hidden lg:block relative shrink-0 aspect-[3/4] max-w-[18rem] w-full bg-muted-foreground/20 rounded-xl">
            </img>
            <div className="flex flex-col justify-center">
                <div className="flex items-center justify-between gap-1">
                    <div className="hidden sm:flex md:hidden items-center gap-4">
                        <Avatar className="w-8 h-8 md:w-10 md:h-10">
                            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                                {testimonial.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-lg font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.designation}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <StarIcon className="w-5 h-5 fill-muted-foreground stroke-muted-foreground"/>
                        <StarIcon className="w-5 h-5 fill-muted-foreground stroke-muted-foreground"/>
                        <StarIcon className="w-5 h-5 fill-muted-foreground stroke-muted-foreground"/>
                        <StarIcon className="w-5 h-5 fill-muted-foreground stroke-muted-foreground"/>
                        <StarIcon className="w-5 h-5 fill-muted-foreground stroke-muted-foreground"/>
                    </div>
                </div>
                <p className="mt-6 text-lg sm:text-2xl lg:text-[1.75rem] xl:text-3xl leading-normal lg:!leading-normal font-semibold tracking-tight">
                    &quot;{testimonial.testimonial}&quot;
                </p>
                <div className="flex sm:hidden md:flex mt-6 items-center gap-4">
                    <Avatar>
                        <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                            {testimonial.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-lg font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.designation}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

