import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TrendingUp, MoreVertical, ChevronRight } from "lucide-react"
import { VisitorsChart } from "@/components/dashboard/admin/overview/VisitorsChart"
import { CountriesChart } from "@/components/dashboard/admin/overview/CountriesChart"

// Static stats data
const stats = [
    {
        title: "সক্রিয় ব্যবহারকারী",
        value: "৩,২৪৫",
        change: "গড়ের চেয়ে ৯.৮৭% বেশি",
    },
    {
        title: "কোর্সসমূহ",
        value: "১২৫",
        change: "গড়ের চেয়ে ৯.৮৭% বেশি",
    },
    {
        title: "AI কুয়েরি",
        value: "২,৪৩০",
        change: "গড়ের চেয়ে ৯.৮৭% বেশি",
    },
    {
        title: "ভিসা পূর্বাভাস",
        value: "১,৪৭৮",
        change: "গড়ের চেয়ে ৯.৮৭% বেশি",
    },
]

// Static updates data
const updates = [
    {
        id: 1,
        type: "ব্লগ",
        title: "২০২৫ সালের জন্য স্কলারশিপ টিপস",
        date: "১৬ অক্টোবর ২০২৫",
        status: "প্রকাশিত",
        statusColor: "bg-green-100 text-green-700",
    },
    {
        id: 2,
        type: "কোর্স",
        title: "SAT প্রস্তুতি",
        date: "১৫ অক্টোবর ২০২৫",
        status: "সক্রিয়",
        statusColor: "bg-blue-100 text-blue-700",
    },
    {
        id: 3,
        type: "বিজ্ঞাপন",
        title: "কানাডা ক্যাম্পেইন",
        date: "১৪ অক্টোবর ২০২৫",
        status: "চলমান",
        statusColor: "bg-yellow-100 text-yellow-700",
    },
    {
        id: 4,
        type: "ভিসা",
        title: "৫০টি নতুন প্রেডিকশন যুক্ত হয়েছে",
        date: "১৪ অক্টোবর ২০২৫",
        status: "সম্পন্ন",
        statusColor: "bg-teal-100 text-teal-700",
    },
    {
        id: 5,
        type: "AI",
        title: "প্রম্পট মডেল আপডেট করা হয়েছে",
        date: "১৩ অক্টোবর ২০২৫",
        status: "আপডেটেড",
        statusColor: "bg-purple-100 text-purple-700",
    },
]

export default function DashboardOverview() {
    return (
        <div className="container mx-auto p-6 space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-purple-600 mb-2">স্বাগতম</h1>
                <p className="text-gray-600">
                    ফিরে আসার জন্য স্বাগতম! এখানে আপনার ওয়েবসাইটের সর্বশেষ আপডেট এবং পারফরম্যান্সের একটি দ্রুত ঝলক দেওয়া হলো।
                </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} className="bg-white border border-gray-200">
                        <CardContent className="p-6">
                            <h3 className="text-sm text-gray-600 mb-2">{stat.title}</h3>
                            <p className="text-4xl font-bold mb-2">{stat.value}</p>
                            <div className="flex items-center gap-2 text-teal-500 text-sm">
                                <TrendingUp className="w-4 h-4" />
                                <span>{stat.change}</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Visitors Chart */}
                <Card className="border-none">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-purple-600">পরিদর্শনকারী ব্যবহারকারী</h3>
                            <Select defaultValue="week">
                                <SelectTrigger className="w-[130px]">
                                    <SelectValue placeholder="এই সপ্তাহ" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="week">এই সপ্তাহ</SelectItem>
                                    <SelectItem value="month">এই মাস</SelectItem>
                                    <SelectItem value="year">এই বছর</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <VisitorsChart />
                    </CardContent>
                </Card>

                {/* Countries Chart */}
                <Card className={"border-none"}>
                    <CardContent>
                        <h3 className="text-lg font-semibold text-purple-600 mb-6">জনপ্রিয় দেশসমূহ</h3>
                        <CountriesChart />
                    </CardContent>
                </Card>
            </div>

            {/* Recent Updates Table */}
            <Card className="bg-white border border-gray-200">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-purple-600">সর্বশেষ আপডেটসমূহ</h3>
                        <Select defaultValue="week">
                            <SelectTrigger className="w-[130px]">
                                <SelectValue placeholder="এই সপ্তাহ" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="week">এই সপ্তাহ</SelectItem>
                                <SelectItem value="month">এই মাস</SelectItem>
                                <SelectItem value="year">এই বছর</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                        <Table>
                            <TableHeader className="bg-purple-100/50">
                                <TableRow>
                                    <TableHead className="font-semibold">ধরন</TableHead>
                                    <TableHead className="font-semibold">শিরোনাম</TableHead>
                                    <TableHead className="font-semibold">তারিখ</TableHead>
                                    <TableHead className="font-semibold">অবস্থা</TableHead>
                                    <TableHead className="font-semibold">কার্যক্রম</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {updates.map((update) => (
                                    <TableRow key={update.id} className="hover:bg-gray-50">
                                        <TableCell className="font-medium">{update.type}</TableCell>
                                        <TableCell>{update.title}</TableCell>
                                        <TableCell>{update.date}</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary" className={update.statusColor}>
                                                {update.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <MoreVertical className="w-4 h-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>দেখুন</DropdownMenuItem>
                                                    <DropdownMenuItem>সম্পাদনা করুন</DropdownMenuItem>
                                                    <DropdownMenuItem className="text-red-600">
                                                        মুছুন
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Pagination Footer */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t">
                        <p className="text-sm text-gray-600">
                            ১৪টির মধ্যে ১ থেকে ৫টি এন্ট্রি প্রদর্শিত হচ্ছে
                        </p>
                        <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                            পরবর্তী
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
