export interface NavigationItem {
    label: string
    href: string
    hasDropdown?: boolean
    dropdownItems?: Array<{
        label: string
        href: string
    }>
}

export const navigationItems: NavigationItem[] = [
    { label: "হোম", href: "/" },
    // {
    //     label: "বিদেশ উৎপাদিকা",
    //     href: "/foreign-products",
    //     hasDropdown: true,
    //     dropdownItems: [
    //         { label: "ইউরোপীয় পণ্য", href: "/european-products" },
    //         { label: "এশিয়ান পণ্য", href: "/asian-products" },
    //         { label: "আমেরিকান পণ্য", href: "/american-products" },
    //     ],
    // },
    { label: "ব্লগ", href: "/blog" },
    { label: "ইভেন্ট ", href: "/event" },
    {
        label: "রিসোর্স ",
        href: "/resources",
        hasDropdown: true,
        dropdownItems: [
            { label: "ডকুমেন্টেশন", href: "/documentation" },
            { label: "টিউটোরিয়াল", href: "/tutorials" },
            { label: "ভিডিও", href: "/videos" },
        ],
    },
    // {
    //     label: "পরীক্ষামূহ",
    //     href: "/exams",
    //     hasDropdown: true,
    //     dropdownItems: [
    //         { label: "প্রাথমিক পরীক্ষা", href: "/primary-exams" },
    //         { label: "মাধ্যমিক পরীক্ষা", href: "/secondary-exams" },
    //         { label: "উচ্চ মাধ্যমিক", href: "/higher-secondary" },
    //     ],
    // },
    { label: "মেভেনকেভ ডাইজেস্ট ", href: "/leadership" },
    { label: "আমাদের সম্পর্কে", href: "/about" },
]
