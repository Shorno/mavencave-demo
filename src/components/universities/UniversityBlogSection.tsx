import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const blogItems = [
    {
        imageSrc: "/images/blog/ub1.jpg",
        title: "IELTS/TOEFL পরীক্ষার জন্য কীভাবে প্রস্তুতি নেবেন?",
        date: "১২ জুলাই, ২০২৫",
        readingTime: "পড়তে সময় লাগবে: ৫ মিনিট",
    },
    {
        imageSrc: "/images/blog/ub2.jpg",
        title: "শেষ মুহূর্তের প্রস্তুতি: পরীক্ষার আগের রাতের করণীয়",
        date: "১২ জুলাই, ২০২৫",
        readingTime: "পড়তে সময় লাগবে: ৫ মিনিট",
    },
    {
        imageSrc: "/images/blog/ub3.jpg",
        title: "পড়াশোনায় মানসিক ও বিজ্ঞানভিত্তিক প্রস্তুতি",
        date: "১২ জুলাই, ২০২৫",
        readingTime: "পড়তে সময় লাগবে: ৫ মিনিট",
    },
];

export default function UniversityBlogSection() {
    return (
        <section className="bg-[#f5f6fc] rounded-2xl p-8 max-w-6xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-[#6246ea] mb-7">
                ব্লগসমূহ - ব্যবহারকারীরাও এটি পড়েছেন
            </h2>
            <Carousel className="w-full">
                <CarouselContent className="gap-6">
                    {blogItems.map((item, idx) => (
                        <CarouselItem key={idx} className="w-full sm:basis-1/2 md:basis-1/3">
                            <Card className="rounded-xl cursor-pointer h-full flex flex-col pt-0">
                                <CardHeader className="p-0 rounded-t-xl overflow-hidden">
                                    <img
                                        src={item.imageSrc}
                                        alt={item.title}
                                        className="h-48 w-full object-cover rounded-t-xl"
                                    />
                                </CardHeader>
                                <CardContent className="flex flex-col flex-grow">
                                    <CardTitle className="text-lg font-bold mb-2 leading-snug">
                                        {item.title}
                                    </CardTitle>
                                    <p className="text-gray-500 text-sm mt-auto whitespace-nowrap">
                                        {item.date} / {item.readingTime}
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-4 shadow border text-2xl flex items-center justify-center">
                    <span aria-hidden="true">&rarr;</span>
                </CarouselNext>
            </Carousel>
        </section>
    );
}
