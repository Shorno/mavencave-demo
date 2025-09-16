import {type ReactNode} from "react"
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area"
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

interface TabData {
    value: string
    title: string
}

interface TabListProps {
    children?: ReactNode
    defaultValue?: string
    showEmptyState?: boolean
    tabs?: TabData[]
}

export default function UniversityTabs({
                                           defaultValue = "summary",
                                           tabs = [
                                               {value: "summary", title: "সংক্ষিপ্ত বিবরণ"},
                                               {value: "admission", title: "ভর্তি"},
                                               {value: "ranking", title: "র‍্যাঙ্কিং"},
                                               {value: "course", title: "কোর্স ও ফি"},
                                           ],
                                       }: TabListProps) {

    return (
        <Tabs defaultValue={defaultValue} className="w-full mb-10">
            <ScrollArea className="w-full">
                <TabsList
                    className="inline-flex h-auto w-full justify-start rounded-none border-b bg-transparent p-0">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className="relative sm:text-lg rounded-none border-b-3 border-transparent bg-transparent px-4 py-3 font-medium text-muted-foreground transition-colors hover:text-foreground data-[state=active]:border-primary  data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
                        >
                            {tab.title}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <ScrollBar orientation="horizontal"/>
            </ScrollArea>

            {/* Removed TabsContent rendering - no content shown */}
        </Tabs>
    )
}
