import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { day: "রবি", visitors: 90000 },
    { day: "সোম", visitors: 30000 },
    { day: "মঙ্গল", visitors: 45000 },
    { day: "বুধ", visitors: 60000 },
    { day: "বৃহস্পতি", visitors: 25000 },
    { day: "শুক্র", visitors: 50000 },
    { day: "শনি", visitors: 35000 },
]

const chartConfig = {
    visitors: {
        label: "দর্শক",
        color: "#6600ff", // Purple/violet color from the image
    },
} satisfies ChartConfig

export function VisitorsChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>পরিদর্শনকারী ব্যবহারকারী</CardTitle>
                <CardDescription>এই সপ্তাহ</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value / 1000}কে`}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar
                            dataKey="visitors"
                            fill="var(--color-visitors)"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
