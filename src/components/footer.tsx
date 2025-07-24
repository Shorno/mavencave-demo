import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
    Database,
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    PhoneCallIcon,
    Twitter,
    YoutubeIcon
} from "lucide-react";
import { IconBrandTelegram } from "@tabler/icons-react";

const Footer = () => {
    const accordionData = [
        {
            items: [
                { value: "ielts-center", trigger: "IELTS টেস্ট সেন্টার", content: "IELTS লিমিটেড টাকা ও ক্যাপিটাল" },
                { value: "free-counseling", trigger: "ফ্রি কাউন্সেলিং", content: "বিনামূল্যে শিক্ষা পরামর্শ" },
                { value: "abroad-countries", trigger: "বিদেশ উচ্চশিক্ষার দেশ", content: "শীর্ষ গন্তব্য দেশসমূহ" },
            ]
        },
        {
            items: [
                { value: "canada-countries", trigger: "কানাডাসহদেশসমূহ", content: "কানাডা এবং অন্যান্য দেশ" },
                { value: "ielts-coaching", trigger: "IELTS কোচিং", content: "পেশাদার IELTS প্রশিক্ষণ" },
                { value: "card-categories", trigger: "কিউট কার্ড ক্যাটাগরিসমূহ", content: "IELTS প্র্যাকটিস কার্ড" },
            ]
        },
        {
            items: [
                { value: "lor-sop", trigger: "LOR & SOP", content: "চিঠি ও বিবৃতি লেখার সেবা" },
                { value: "duolingo", trigger: "Duolingo English Test", content: "Duolingo পরীক্ষার প্রস্তুতি" },
                { value: "ielts", trigger: "IELTS", content: "IELTS সম্পূর্ণ প্রস্তুতি" },
            ]
        },
        {
            items: [
                { value: "other-exams", trigger: "অন্যান্য পরীক্ষাসমূহ", content: "বিভিন্ন আন্তর্জাতিক পরীক্ষা" },
                { value: "top-universities", trigger: "শীর্ষ বিশ্ববিদ্যালয়সমূহ", content: "বিশ্বের সেরা বিশ্ববিদ্যালয়" },
                { value: "abroad-study", trigger: "বিদেশে উচ্চশিক্ষা IELTS প্রস্তুতি", content: "বিদেশি শিক্ষার জন্য IELTS" }
            ]
        }
    ];

    // Social media icons data
    const socialMediaLinks = [
        { href: "#", icon: FacebookIcon, bgColor: "bg-white", textColor: "text-blue-500" },
        { href: "#", icon: InstagramIcon, bgColor: "bg-white", textColor: "text-blue-500" },
        { href: "#", icon: LinkedinIcon, bgColor: "bg-white", textColor: "text-blue-500" },
        { href: "#", icon: YoutubeIcon, bgColor: "bg-white", textColor: "text-blue-500" },
        { href: "#", icon: Twitter, bgColor: "bg-white", textColor: "text-blue-500" },
        { href: "#", icon: IconBrandTelegram, bgColor: "bg-white", textColor: "text-blue-500" }
    ];

    // App download data
    const appDownloads = [
        {
            title: "ডাউনলোড করুন Study Abroad অ্যাপ",
            apps: [
                { href: "#", src: "/images/google-play.png", alt: "Get it on Play Store" },
                { href: "#", src: "/images/apple-store.png", alt: "Download on the App Store" }
            ]
        },
        {
            title: "ডাউনলোড করুন IELTS Prep অ্যাপ",
            apps: [
                { href: "#", src: "/images/google-play.png", alt: "Get it on Play Store" }
            ]
        }
    ];

    // Contact info data
    const contactInfo = [
        {
            icon: PhoneCallIcon,
            text: (
                <span>
                    আমাদেরকে কল করুন : <span className="font-bold">০১৩০৮৫৬৫৬৯০</span>
                    <br />
                    <span className="text-xs">(সকাল ১০টা থেকে রাত ৮টা)</span>
                </span>
            )
        },
        {
            icon: MailIcon,
            text: "আমাদেরকে মেইল করুন: info@mavencare.com"
        }
    ];

    // Footer columns data
    const footerColumns = [
        {
            title: "দেশসমূহ",
            items: ["মার্কিন যুক্তরাষ্ট্র", "যুক্তরাজ্য", "কানাডা", "অস্ট্রেলিয়া", "আয়ারল্যান্ড", "জার্মানি"]
        },
        {
            title: "কোম্পানি",
            items: ["আমাদের সম্পর্কে", "ক্যারিয়ারসমূহ", "খবর (মেডেলেড)"],
            subSection: {
                title: "আমাদের পার্টনারসমূহ",
                items: ["Yocket Study Abroad", "GEEBEE"]
            }
        },
        {
            title: "আমাদের অফারসমূহ",
            items: [
                "ফ্রি IELTS মকটেস্টসমূহ",
                "কাউন্সেলর এর সাথে কথা বলুন",
                "টিউনিং প্রোগ্রামসমূহ",
                "ক্যাম্প ক্যালেন্ডার",
                "ব্লগ",
                "বিদেশ উচ্চশিক্ষার জন্য কলেজ সেটার",
            ],
            subSection: {
                title: "টেস্টিমোনিয়াল",
                items: ["IELTS", "কাউন্সেলিং"]
            }
        },
        {
            title: "আমাদের প্রোডাক্ট",
            items: [
                "ম্যাভেনকেভ ফাইনাল",
                "ম্যাভেনকেভ সুবিধা",
                "ম্যাভেনকেভ এর সহায়তা IELTS প্রস্তুতি"
            ],
            subSection: {
                title: "পরীক্ষা সম্পর্কিত তথ্য",
                items: ["IELTS", "TOEFL", "SAT", "PTE", "GRE", "GMAT"]
            }
        }
    ];

    return (
        <main className="min-h-screen bg-[#4169e1] flex flex-col">
            <div className="flex-grow" />
            <footer className="w-full py-12 px-4 md:px-10 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex flex-col w-full lg:w-1/4 gap-6 min-w-[280px]">
                            <div className="flex items-center gap-2">
                                <Database />
                                <span className="text-white text-4xl font-bold">Mavencave</span>
                            </div>

                            <div className="flex gap-3 mt-2">
                                {socialMediaLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className={`p-2 ${social.bgColor} ${social.textColor} rounded-full`}
                                        >
                                            <IconComponent />
                                        </a>
                                    );
                                })}
                            </div>

                            {/* App Downloads */}
                            {appDownloads.map((download, index) => (
                                <div key={index} className={index === 0 ? "mt-4" : ""}>
                                    <div className="text-sm font-normal mb-2">{download.title}</div>
                                    <div className="flex gap-4">
                                        {download.apps.map((app, appIndex) => (
                                            <a key={appIndex} href={app.href}>
                                                <img src={app.src} width={120} height={36} alt={app.alt} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="mt-6 flex flex-col gap-3">
                                <div className="font-semibold text-base">যোগাযোগ করুন</div>
                                {contactInfo.map((contact, index) => {
                                    const IconComponent = contact.icon;
                                    return (
                                        <div key={index} className="flex items-start gap-2 text-white/90 text-sm">
                                            <IconComponent />
                                            <span>{contact.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>



                        <div className={"flex flex-col"}>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
                                {accordionData.map((accordionGroup, groupIndex) => (
                                    <div key={groupIndex} className="col-span-1 md:col-span-2">
                                        <Accordion type="single" collapsible className="space-y-1">
                                            {accordionGroup.items.map((item) => (
                                                <AccordionItem key={item.value} value={item.value} className="border-none">
                                                    <AccordionTrigger className="text-sm font-medium hover:no-underline py-2 px-0">
                                                        {item.trigger}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-xs pb-2">
                                                        <div>{item.content}</div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                ))}
                            </div>
                            <Separator className="bg-white/20 my-8 h-px" />

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full lg:w-full">
                                {footerColumns.map((column, index) => (
                                    <div key={index}>
                                        <div className="font-semibold text-base mb-4">{column.title}</div>
                                        <ul className="space-y-2 text-sm text-white/90">
                                            {column.items.map((item, itemIndex) => (
                                                <li key={itemIndex}>{item}</li>
                                            ))}
                                        </ul>

                                        {column.subSection && (
                                            <>
                                                <div className="font-semibold text-base mt-6 mb-3">
                                                    {column.subSection.title}
                                                </div>
                                                <ul className="space-y-2 text-sm text-white/90">
                                                    {column.subSection.items.map((item, itemIndex) => (
                                                        <li key={itemIndex}>{item}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Separator className="bg-white/20 my-8 h-px" />
            </footer>
        </main>
    );
};

export default Footer;