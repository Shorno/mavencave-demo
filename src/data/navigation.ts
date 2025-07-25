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
    {label: "হোম", href: "/"},
    {
        label: "বিদেশে উচ্চশিক্ষা",
        href: "/study-abroad",
        hasDropdown: false,
        dropdownItems: [
            {label: "আমেরিকা", href: "/study-abroad/usa"},
            {label: "কানাডা", href: "/study-abroad/canada"},
            {label: "যুক্তরাজ্য", href: "/study-abroad/uk"},
            {label: "অস্ট্রেলিয়া", href: "/study-abroad/australia"},
            {label: "নিউজিল্যান্ড", href: "/study-abroad/new-zealand"},
            {label: "জার্মানি", href: "/study-abroad/germany"},
            {label: "ফ্রান্স", href: "/study-abroad/france"},
            {label: "সুইডেন", href: "/study-abroad/sweden"},
        ],
    },
    {label: "ব্লগ", href: "/blog"},
    {label: "ইভেন্ট ", href: "/event"},
    {
        label: "রিসোর্স ",
        href: "/resources",
        hasDropdown: true,
        dropdownItems: [
            {label: "ডকুমেন্টেশন", href: "/documentation"},
            {label: "টিউটোরিয়াল", href: "/tutorials"},
            {label: "ভিডিও", href: "/videos"},
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
    {label: "মেভেনকেভ ডাইজেস্ট ", href: "/leadership"},
    {label: "আমাদের সম্পর্কে", href: "/about"},
]
