import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
const faqs = [
    {
        question: "আপনার এখানে কিভাবে ভিসা প্রস্তুতযোগ্যতা এবং IELTS প্রস্তুতিতে সাহায্য করে?",
        answer: "ইংরেজিভাষী, ভিসা সফলতা প্রস্তুতিকরণ, পারামানাল IELTS প্রস্তুতি পরিকল্পনার জন্য আমাদের এখানে আপনার প্রোফাইল এবং প্রয়োজনীয় কাগজপত্রের দায়িত্ব বিবেচনা করা।"
    },
    {
        question: "এই সার্ভিস কি সব দেশের জন্য উপলব্ধ?",
        answer: "হ্যাঁ, আমাদের সার্ভিস বিশ্বের প্রধান শিক্ষা গন্তব্যগুলির জন্য উপলব্ধ যেমন কানাডা, অস্ট্রেলিয়া, যুক্তরাজ্য, যুক্তরাষ্ট্র এবং আরও অনেক দেশে।"
    },
    {
        question: "এই প্ল্যাটফর্ম কি ক্রিয়েট ব্যবহার করা যায়?",
        answer: "আমাদের প্ল্যাটফর্ম সম্পূর্ণ বিনামূল্যে ব্যবহার করা যায়। তবে কিছু প্রিমিয়াম সার্ভিসের জন্য আলাদা চার্জ প্রযোজ্য হতে পারে।"
    },
    {
        question: "আপনি কি SOP, LOI, অথবা মোটিভেশন লেটার অংকার করতে সাহায্য করেন?",
        answer: "হ্যাঁ, আমাদের অভিজ্ঞ লেখক দল আপনাকে SOP, LOI, মোটিভেশন লেটার এবং অন্যান্য প্রয়োজনীয় ডকুমেন্ট তৈরিতে সাহায্য করে থাকে।"
    },
    {
        question: "কিভাবে আমি আমার অ্যাপ্লিকেশনের অবস্থা ট্র্যাক করতে পারবো?",
        answer: "আপনি আমাদের অনলাইন পোর্টালের মাধ্যমে যেকোনো সময় আপনার অ্যাপ্লিকেশনের অবস্থা ট্র্যাক করতে পারবেন। এছাড়াও নিয়মিত আপডেট পাবেন।"
    },
    {
        question: "এই এখানে কি ভিসা প্রেডিকশনের জন্য সঠিক এবং বিশ্বাসযোগ্য?",
        answer: "আমাদের ভিসা প্রেডিকশন সিস্টেম অভিজ্ঞ ইমিগ্রেশন এক্সপার্টদের দ্বারা তৈরি এবং এটি ৮৫% এর বেশি নির্ভুলতার হার রয়েছে।"
    }
]


export default function FAQSection() {

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
                        কোন প্রশ্ন আছে? উত্তর খুঁজে নিন
                    </h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border border-gray-200 rounded-xl px-6 bg-gray-50 "
                        >
                            <AccordionTrigger className="text-left text-gray-900 font-medium text-lg hover:no-underline py-6 [&[data-state=open]>svg]:rotate-180">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed pb-6 pt-2">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
