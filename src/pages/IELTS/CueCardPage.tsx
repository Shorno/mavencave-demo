import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight } from "lucide-react"

interface TopicItem {
    id: string
    text: string
}

interface FAQItem {
    id: string
    question: string
}

const topics: TopicItem[] = [
    { id: "1", text: "Describe an item of clothing that someone gave you" },
    { id: "2", text: "Describe an occasion you wore your favourite clothes" },
    { id: "3", text: "Describe A Person Who Wears Unusual Clothes" },
    { id: "4", text: "Describe A Piece Of Clothing You Wear Most Often" },
    { id: "5", text: "Describe a uniform you wear (at your school or company) or you wore at school" },
    { id: "6", text: "Describe a time you spent with a Friend that you found Fun" },
]

const practiceItems: TopicItem[] = [
    { id: "1", text: "কীভাবে ফ্যাশন কিউট কার্ডস আপনাকে করবেন?" },
    { id: "2", text: "ফ্যাশন সম্পর্কিত IELTS স্পিকিং কিউট কার্ড ভোকাবুলারির তালিকা" },
]

const faqItems: FAQItem[] = [
    { id: "1", question: "ফ্যাশন সম্পর্কিত কী ধরনের টপিক IELTS কিউট কার্ডস আসতে পারে?" },
    { id: "2", question: "আমি কীভাবে একটি ফ্যাশন কিউট কার্ডস উত্তর গঠন করব?" },
    { id: "3", question: "আমার কি ফ্যাশন-নির্দিষ্ট ভোকাবুলারি ব্যবহার করতে হবে?" },
    { id: "4", question: "যদি আমি ফ্যাশন আগ্রহী না হই তাহলে কী হবে?" },
    { id: "5", question: "আমি কি আমার দেশের ঐতিহ্যবাহী পোশাক বর্ণনা করতে পারি?" },
]

export default function CueCardPage() {


    return (
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
            <section className="space-y-6">
                <div className="space-y-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground text-balance">IELTS কিউট কার্ডস এর ক্যাশন</h1>
                    <h2 className="text-lg md:text-xl font-semibold text-foreground">ফ্যাশন ক্যাটাগরির কী?</h2>
                </div>

                <div className="prose prose-sm md:prose-base max-w-none">
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                        IELTS স্পিকিং পার্ট ২-এ ফ্যাশন ক্যাটাগরির অধীনতরে পোশাক, ইউনিফর্ম ট্রেন্ড এবং ব্যক্তিগত পছন্দ সম্পর্কিত বিষয়গুলো নিয়ে আলোচনা
                        করতে হয়। এইসব ক্যাশন ক্যান্ডিডেট জীবনের ও সাংস্কৃতিক পরিচয়ের একটি প্রকাশপূর্ণ অংশ, তাই এই বিষয়টি পরীক্ষায়তে দেখাতে প্রকাশ,
                        বিভিন্ন ইউনিট বর্ণনা এবং ফ্যাশন সম্পর্কিত ব্যক্তিগত অভিজ্ঞতা অর্জনের বোঝার করার সুযোগ করে দেয়।
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold text-purple-600 text-balance">৬টি টপিক</h2>

                <div className="grid gap-4">
                    {topics.map((topic) => (
                        <Card key={topic.id} className="border border-border hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between gap-4">
                                    <p className="text-sm md:text-lg font-semibold text-foreground leading-relaxed flex-1 text-pretty">
                                        {topic.text}
                                    </p>
                                    <Button
                                        size="sm"
                                        className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-8 h-8 p-0 flex-shrink-0"
                                        aria-label={`View topic: ${topic.text}`}
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold text-purple-600 text-center text-balance">
                    ফ্যাশন নিয়ে আরও IELTS কিউট কার্ডস
                </h2>

                <div className="grid gap-4">
                    {practiceItems.map((item) => (
                        <Card key={item.id} className="border border-border hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between gap-4">
                                    <p className="text-sm md:text-lg font-semibold text-foreground leading-relaxed flex-1 text-pretty">{item.text}</p>
                                    <Button
                                        size="sm"
                                        className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-8 h-8 p-0 flex-shrink-0"
                                        aria-label={`View practice item: ${item.text}`}
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold text-purple-600 text-balance">
                    শিক্ষার্থীদের করা সবথেকে বেশি প্রশ্ন সমূহ-
                </h2>
                {/*for deployment*/}

                <Accordion type="single" collapsible className="space-y-2">
                    {faqItems.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id} className="border border-border rounded-lg px-4">
                            <AccordionTrigger className="text-left text-sm md:text-base text-foreground hover:no-underline py-4 text-pretty">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4 text-pretty">
                                এই প্রশ্নের উত্তর এখানে থাকবে। IELTS প্রস্তুতির জন্য বিস্তারিত তথ্য এবং টিপস প্রদান করা হবে।
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
        </div>
    )
}
