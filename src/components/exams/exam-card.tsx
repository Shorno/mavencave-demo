import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Link} from "react-router";
import {Button} from "@/components/ui/button.tsx";

interface ExamCardProps {
    flag: string;
    title: string;
    href: string;
    description: string;
    linkLabel: string;
}

export function ExamCard({flag, title, href, description, linkLabel}: ExamCardProps) {
    return (
        <Card className="w-full h-full flex flex-col items-center justify-between   bg-gray-50 shadow-xs">
            <CardContent className="text-sm flex flex-col ">
                <img src={flag} alt={title} className={"size-20 object-cover"}/>
                <h3 className="text-lg my-2 font-semibold">{title}</h3>
                {description}
            </CardContent>
            <CardFooter className="w-full">
                <Button asChild className={"w-full border border-blue-500 text-blue-500"} size={"xl"} variant={"outline"}>
                    <Link
                        to={href}
                    >
                        {linkLabel}
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
