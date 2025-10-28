import * as React from "react"
import { Label, Pie, PieChart, Legend } from "recharts"
import {
    Card,
    CardContent,
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
    { country: "অস্ট্রেলিয়া", percentage: 30, fill: "#6b7aff" },
    { country: "জার্মানি", percentage: 12, fill: "#ffb078" },
    { country: "যুক্তরাজ্য", percentage: 17, fill: "#5dd85d" },
    { country: "আয়ারল্যান্ড", percentage: 7, fill: "#dd3333" },
    { country: "কানাডা", percentage: 12, fill: "#ffd43d" },
    { country: "যুক্তরাষ্ট্র", percentage: 22, fill: "#c969b9" },
]

const chartConfig = {
    percentage: {
        label: "শতাংশ",
    },
} satisfies ChartConfig

const renderLegend = (props: any) => {
    const { payload } = props;

    return (
        <div className="flex flex-wrap justify-center gap-4 mt-4">
            {payload.map((entry: any, index: number) => (
                <div key={`legend-${index}`} className="flex items-center gap-2">
                    <div
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-sm">
                        {entry.payload.country} {entry.payload.percentage}%
                    </span>
                </div>
            ))}
        </div>
    );
};

export function CountriesChart() {
    const totalPercentage = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.percentage, 0)
    }, [])

    return (
        <Card>
            <CardHeader>
                <CardTitle>জনপ্রিয় দেশসমূহ</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[400px] w-full"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="percentage"
                            nameKey="country"
                            innerRadius={60}
                            outerRadius={100}
                            strokeWidth={2}
                            stroke="#fff"
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalPercentage}%
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    মোট
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                        <Legend content={renderLegend} />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
