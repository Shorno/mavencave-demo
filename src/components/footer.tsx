import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { Separator } from "@radix-ui/react-separator";
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
    // Accordion data matching the provided content
    const accordionData = [
        {
            items: [
                { value: "ielts-center", trigger: "IELTS টেস্ট সেন্টার", content: "IELTS পরীক্ষার কেন্দ্রসমূহ" },
                { value: "calculators", trigger: "ক্যালকুলেটরসমূহ", content: "বিভিন্ন ক্যালকুলেটর টুলস" },
                { value: "lor-sop", trigger: "LOR & SOP", content: "Letter of Recommendation ও Statement of Purpose" },
                { value: "other-exams", trigger: "অন্যান্য পরীক্ষাসমূহ", content: "বিভিন্ন আন্তর্জাতিক পরীক্ষা" }
            ]
        },
        {
            items: [
                { value: "free-counseling", trigger: "ফ্রি কাউন্সেলিং", content: "বিনামূল্যে শিক্ষা পরামর্শ" },
                { value: "ielts-coaching", trigger: "IELTS কোচিং", content: "পেশাদার IELTS প্রশিক্ষণ" },
                { value: "duolingo", trigger: "Duolingo English Test", content: "Duolingo পরীক্ষার প্রস্তুতি" },
                { value: "top-universities", trigger: "শীর্ষ বিশ্ববিদ্যালয়সমূহ", content: "বিশ্বের সেরা বিশ্ববিদ্যালয়" }
            ]
        },
        {
            items: [
                { value: "abroad-study", trigger: "বিদেশে উচ্চশিক্ষা গ্রহণ", content: "বিদেশে উচ্চশিক্ষার সুযোগ" },
                { value: "cue-cards", trigger: "কিউ কার্ড ক্যাটেগরিসমূহ", content: "IELTS Speaking কিউ কার্ড" },
                { value: "ielts", trigger: "IELTS", content: "IELTS সম্পূর্ণ প্রস্তুতি" },
                { value: "ielts-practice", trigger: "IELTS চর্চা পরীক্ষা", content: "IELTS প্র্যাকটিস টেস্ট" }
            ]
        },
        {
            items: [
                { value: "study-abroad-app", trigger: "ডাউনলোড করুন Study Abroad অ্যাপ", content: "স্টাডি অ্যাব্রোড মোবাইল অ্যাপ" },
                { value: "ielts-writing-task2", trigger: "IELTS লিখিত টাস্ক ২ ক্যাটাগরিসমূহ", content: "IELTS Writing Task 2 বিষয়সমূহ" },
                { value: "ielts-writing-task2-repeat", trigger: "IELTS লিখিত টাস্ক ২ ক্যাটাগরিসমূহ", content: "IELTS Writing Task 2 অনুশীলন" },
                { value: "ielts-prep-app", trigger: "ডাউনলোড করুন IELTS Prep অ্যাপ", content: "IELTS প্রস্তুতির জন্য মোবাইল অ্যাপ" }
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

    // Contact info data - CORRECTED
    const contactInfo = [
        {
            icon: PhoneCallIcon,
            text: (
                <span>
                    আমাদেরকে কল করুন : <span className="font-bold">০১২৩৪৫৫৬৭৮৯০</span>
                    <br />
                    <span className="text-xs">(সকাল ১০টা থেকে রাত ৭টা)</span>
                </span>
            )
        },
        {
            icon: MailIcon,
            text: "আমাদেরকে মেইল করুন: info@mavencare.com"
        }
    ];

    // Office addresses - NEW
    const officeAddresses = [
        {
            title: "সদর দপ্তর – ঢাকা (বাংলাদেশ)",
            address: "হাউস ০০, রোড ০০, গুলশান ২, ঢাকা - ১২১২"
        },
        {
            title: "শাখা অফিস (ঢাকা)",
            address: "ব্লক ডি, রোড ০০, বসুন্ধরা র/এ, ঢাকা - ১২২৯"
        },
        {
            title: "সিঙ্গাপুর (আন্তর্জাতিক)",
            address: "১২ মারিনা ভিউ, এশিয়া স্কোয়ার টাওয়ার ২, সিঙ্গাপুর ০১৮৯৬১"
        },
        {
            title: "সংযুক্ত আরব আমিরাত (আন্তর্জাতিক)",
            address: "দি অপাস বাই অম্নিয়াত, বিজনেস বে, দুবাই, সংযুক্ত আরব আমিরাত"
        }
    ];

    // Footer columns data - CORRECTED to match provided info
    const footerColumns = [
        {
            title: "দেশসমূহ",
            items: ["মার্কিন যুক্তরাষ্ট্র", "যুক্তরাজ্য", "কানাডা", "অস্ট্রেলিয়া", "আয়ারল্যান্ড", "জার্মানি"]
        },
        {
            title: "কোম্পানি",
            items: ["আমাদের সম্পর্কে", "ক্যারিয়ারসমূহ", "খবরে মেভেনকেভ", "যোগাযোগ করুন"],
            subSection: {
                title: "আমাদের পার্টনারসমূহ",
                items: ["Yocket Study Abroad", "GEEBEE"]
            }
        },
        {
            title: "আমাদের অফারসমূহ",
            items: [
                "ফ্রি IELTS মাস্টারক্লাস",
                "মেভেনকেভ ফাইনান্স",
                "কাউন্সেলর এর সাথে কথা বলুন",
                "মেভেনকেভ সুবিধা",
                "টুইনিং প্রোগ্রামসমূহ",
                "মেভেনকেভ এর সাহায্যে IELTS প্রস্তুতি",
                "কস্ট ক্যালকুলেটর",
                "ব্লগ",
                "বিদেশে উচ্চশিক্ষার জন্য নলেজ সেন্টার",
                "ইভেন্ট"
            ],
            subSection: {
                title: "টেস্টিমোনিয়াল",
                items: ["IELTS", "কাউন্সেলিং"]
            }
        },
        {
            title: "আমাদের প্রোডাক্ট",
            items: [
                "মেভেনকেভ ফাইনান্স",
                "মেভেনকেভ সুবিধা",
                "মেভেনকেভ এর সাহায্যে IELTS প্রস্তুতি"
            ],
            subSection: {
                title: "পরীক্ষা সম্পর্কিত তথ্য",
                items: ["IELTS", "TOEFL", "SAT", "PTE", "GRE", "GMAT"]
            }
        }
    ];

    return (
        <main className="bg-[#4169e1] flex flex-col">
            <div className="flex-grow" />
            <footer className="w-full py-12 px-4 md:px-10 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Section - Brand, Social, Apps, Contact */}
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

                            {/* Contact Info */}
                            <div className="mt-6 flex flex-col gap-3">
                                <div className="font-semibold text-base">যোগাযোগ করুন</div>
                                {contactInfo.map((contact, index) => {
                                    const IconComponent = contact.icon;
                                    return (
                                        <div key={index} className="flex items-start gap-2 text-white/90 text-sm">
                                            <IconComponent className="mt-1 flex-shrink-0" />
                                            <span>{contact.text}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Office Addresses */}
                            <div className="mt-6">
                                <div className="font-semibold text-base mb-4">অফিস সমূহ</div>
                                <div className="space-y-4">
                                    {officeAddresses.map((office, index) => (
                                        <div key={index} className="text-sm">
                                            <div className="font-medium text-white mb-1">{office.title}</div>
                                            <div className="text-white/90 text-xs leading-relaxed">{office.address}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Content */}
                        <div className="flex flex-col flex-1">
                            {/* Accordion Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                                {accordionData.map((accordionGroup, groupIndex) => (
                                    <div key={groupIndex} className="col-span-1">
                                        <Accordion type="single" collapsible className="space-y-1">
                                            {accordionGroup.items.map((item) => (
                                                <AccordionItem key={item.value} value={item.value} className="border-none">
                                                    <AccordionTrigger className="text-sm font-medium hover:no-underline py-2 px-0 text-left">
                                                        {item.trigger}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-xs pb-2 text-white/80">
                                                        <div>{item.content}</div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                ))}
                            </div>

                            <Separator className="bg-white/20 my-8 h-px" />

                            {/* Main Footer Columns */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                                {footerColumns.map((column, index) => (
                                    <div key={index}>
                                        <div className="font-semibold text-base mb-4">{column.title}</div>
                                        <ul className="space-y-2 text-sm text-white/90">
                                            {column.items.map((item, itemIndex) => (
                                                <li key={itemIndex}>
                                                    <a href="#" className="hover:text-white transition-colors">
                                                        {item}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>

                                        {column.subSection && (
                                            <>
                                                <div className="font-semibold text-base mt-6 mb-3">
                                                    {column.subSection.title}
                                                </div>
                                                <ul className="space-y-2 text-sm text-white/90">
                                                    {column.subSection.items.map((item, itemIndex) => (
                                                        <li key={itemIndex}>
                                                            <a href="#" className="hover:text-white transition-colors">
                                                                {item}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Legal Links */}
                            <Separator className="bg-white/20 my-8 h-px" />
                            <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm">
                                <a href="#" className="text-white/90 hover:text-white transition-colors">প্রাইভেসি পলিসি</a>
                                <a href="#" className="text-white/90 hover:text-white transition-colors">শর্তাবলী</a>
                                <a href="#" className="text-white/90 hover:text-white transition-colors">রিফান্ড পলিসি</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default Footer;
