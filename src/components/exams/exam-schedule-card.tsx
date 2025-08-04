import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router";

interface ExamScheduleCardProps {
    image: string;
    title: string;
    subtitle: string;
    date: string;
    time: string;
    duration: string;
    location: string;
    fee: string;
    seatType: string;
    venue?: string;
    linkLabel: string;
}

export function ExamScheduleCard({
                                     image,
                                     title,
                                     subtitle,
                                     date,
                                     time,
                                     duration,
                                     location,
                                     fee,
                                     seatType,
                                     venue,
                                     linkLabel,
                                 }: ExamScheduleCardProps) {
    return (
        <Card className="flex flex-col w-full h-full p-0">
            <CardHeader className="p-2">
                <img src={image} alt={title} className="rounded-t-lg w-full h-60 object-cover" />
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-4">
                <h3 className="text-xl font-bold mb-1">{title}</h3>
                <p className="text-sm text-gray-700 mb-3">{subtitle}</p>
                <ul className="space-y-1 mb-4 text-sm text-gray-800">
                    <li>
                        <span aria-label="তারিখ" role="img">📅</span> {date} |{" "}
                        <span aria-label="সময়" role="img">🕒</span> {time}
                    </li>
                    <li>
                        <span aria-label="দৈর্ঘ্য" role="img">⏳</span> {duration}
                    </li>
                    <li>
                        <span aria-label="স্থান" role="img">🏫</span> {location}
                    </li>
                    <li>
                        <span aria-label="ফি" role="img">💳</span> {fee}
                    </li>
                    <li>
                        <span aria-label="আসন" role="img">💺</span> {seatType}
                    </li>
                    {venue && (
                        <li>
                            <span aria-label="ভেন্যু" role="img">📍</span> {venue}
                        </li>
                    )}
                </ul>
            </CardContent>
            <CardFooter className="p-4">
                <Button asChild className={"w-full"}
                >
                    <Link to={"/"}>
                        {linkLabel}
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
