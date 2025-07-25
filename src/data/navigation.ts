export interface NavigationItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
    dropdownItems?: Array<NavigationItem>;
}

export const navigationItems: NavigationItem[] = [
    { label: "হোম", href: "/" },

    {
        label: "বিদেশে উচ্চশিক্ষা",
        href: "/study-abroad",
        hasDropdown: true,
        dropdownItems: [
            {
                label: "যুক্তরাষ্ট্র",
                href: "/study-abroad/usa",
                hasDropdown: true,
                dropdownItems: [
                    {
                        label: "সেরা শহরগুলি",
                        href: "/study-abroad/usa/cities",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "নিউইয়র্ক", href: "/study-abroad/usa/cities/new-york" },
                            { label: "বোস্টন", href: "/study-abroad/usa/cities/boston" },
                            { label: "সান ফ্রান্সিসকো", href: "/study-abroad/usa/cities/san-francisco" },
                            { label: "ওয়াশিংটন ডি.সি", href: "/study-abroad/usa/cities/washington-dc" },
                            { label: "লস এঞ্জেলেস", href: "/study-abroad/usa/cities/los-angeles" },
                        ],
                    },
                    {
                        label: "শীর্ষ বিশ্ববিদ্যালয়গুলি",
                        href: "/study-abroad/usa/universities",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "হার্ভার্ড বিশ্ববিদ্যালয়", href: "/study-abroad/usa/universities/harvard-university" },
                            { label: "ইয়েল বিশ্ববিদ্যালয়", href: "/study-abroad/usa/universities/yale-university" },
                            { label: "কলম্বিয়া বিশ্ববিদ্যালয়", href: "/study-abroad/usa/universities/columbia-university" },
                            { label: "ম্যাসাচুসেটস ইনস্টিটিউট অফ টেকনোলজি", href: "/study-abroad/usa/universities/mit" },
                            { label: "স্ট্যানফোর্ড বিশ্ববিদ্যালয়", href: "/study-abroad/usa/universities/stanford-university" },
                        ],
                    },
                    {
                        label: "সেরা কোর্স",
                        href: "/study-abroad/usa/courses",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "স্বাস্থ্য বিজ্ঞানে স্নাতকোত্তর", href: "/study-abroad/usa/courses/mph" },
                            { label: "কম্পিউটার বিজ্ঞানে স্নাতকোত্তর", href: "/study-abroad/usa/courses/mscs" },
                            { label: "ডেটা সায়েন্সে স্নাতকোত্তর", href: "/study-abroad/usa/courses/msds" },
                        ],
                    },
                ],
            },

            {
                label: "যুক্তরাজ্য",
                href: "/study-abroad/uk",
                hasDropdown: true,
                dropdownItems: [
                    {
                        label: "সেরা শহরগুলি",
                        href: "/study-abroad/uk/cities",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "লন্ডন", href: "/study-abroad/uk/cities/london" },
                            { label: "ম্যানচেস্টার", href: "/study-abroad/uk/cities/manchester" },
                            { label: "এডিনবার্গ", href: "/study-abroad/uk/cities/edinburgh" },
                            { label: "লিডস", href: "/study-abroad/uk/cities/leeds" },
                        ],
                    },
                    {
                        label: "শীর্ষ বিশ্ববিদ্যালয়গুলি",
                        href: "/study-abroad/uk/universities",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "অক্সফোর্ড বিশ্ববিদ্যালয়", href: "/study-abroad/uk/universities/oxford-university" },
                            { label: "ক্যামব্রিজ বিশ্ববিদ্যালয়", href: "/study-abroad/uk/universities/cambridge-university" },
                            { label: "ম্যানচেস্টার বিশ্ববিদ্যালয়", href: "/study-abroad/uk/universities/manchester-university" },
                            { label: "এডিনবার্গ বিশ্ববিদ্যালয়", href: "/study-abroad/uk/universities/edinburgh-university" },
                            { label: "কিংস কলেজ লন্ডন", href: "/study-abroad/uk/universities/kings-college-london" },
                            { label: "ইম্পেরিয়াল কলেজ লন্ডন", href: "/study-abroad/uk/universities/imperial-college-london" },
                        ],
                    },
                    {
                        label: "সেরা কোর্স",
                        href: "/study-abroad/uk/courses",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "আইনে স্নাতকোত্তর", href: "/study-abroad/uk/courses/llm" },
                            { label: "মেডিসিন (এমবিবিএস)", href: "/study-abroad/uk/courses/mbbs" },
                            { label: "ব্যবসা এবং ব্যবস্থাপনা", href: "/study-abroad/uk/courses/msc-business-management" },
                        ],
                    },
                ],
            },

            {
                label: "কানাডা",
                href: "/study-abroad/canada",
                hasDropdown: true,
                dropdownItems: [
                    {
                        label: "সেরা শহরগুলি",
                        href: "/study-abroad/canada/cities",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "ভ্যাঙ্কুভার", href: "/study-abroad/canada/cities/vancouver" },
                            { label: "মন্ট্রিল", href: "/study-abroad/canada/cities/montreal" },
                            { label: "অটোয়া", href: "/study-abroad/canada/cities/ottawa" },
                            { label: "ক্যালগারি", href: "/study-abroad/canada/cities/calgary" },
                            { label: "কিংস্টন", href: "/study-abroad/canada/cities/kingston" },
                        ],
                    },
                    {
                        label: "শীর্ষ বিশ্ববিদ্যালয়গুলি",
                        href: "/study-abroad/canada/universities",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "টরন্টো বিশ্ববিদ্যালয়", href: "/study-abroad/canada/universities/university-of-toronto" },
                            { label: "ব্রিটিশ কলাম্বিয়া বিশ্ববিদ্যালয়", href: "/study-abroad/canada/universities/ubc" },
                            { label: "ম্যাকগিল বিশ্ববিদ্যালয়", href: "/study-abroad/canada/universities/mcgill-university" },
                            { label: "আলবার্টা বিশ্ববিদ্যালয়", href: "/study-abroad/canada/universities/university-of-alberta" },
                            { label: "মন্ট্রিল বিশ্ববিদ্যালয়", href: "/study-abroad/canada/universities/university-of-montreal" },
                            { label: "অটোয়া বিশ্ববিদ্যালয়", href: "/study-abroad/canada/universities/university-of-ottawa" },
                        ],
                    },
                    {
                        label: "সেরা কোর্স",
                        href: "/study-abroad/canada/courses",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "কম্পিউটার বিজ্ঞানে স্নাতকোত্তর", href: "/study-abroad/canada/courses/msc-cs" },
                            { label: "মেডিসিন (এমবিবিএস)", href: "/study-abroad/canada/courses/mbbs" },
                            { label: "ব্যবসা এবং ব্যবস্থাপনা", href: "/study-abroad/canada/courses/mba" },
                        ],
                    },
                ],
            },

            {
                label: "অস্ট্রেলিয়া",
                href: "/study-abroad/australia",
                hasDropdown: true,
                dropdownItems: [
                    {
                        label: "সেরা শহরগুলি",
                        href: "/study-abroad/australia/cities",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "মেলবোর্ন", href: "/study-abroad/australia/cities/melbourne" },
                            { label: "সিডনি", href: "/study-abroad/australia/cities/sydney" },
                            { label: "ব্রিসবেন", href: "/study-abroad/australia/cities/brisbane" },
                            { label: "অ্যাডিলেড", href: "/study-abroad/australia/cities/adelaide" },
                            { label: "পার্থ", href: "/study-abroad/australia/cities/perth" },
                        ],
                    },
                    {
                        label: "শীর্ষ বিশ্ববিদ্যালয়গুলি",
                        href: "/study-abroad/australia/universities",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "মোনাশ বিশ্ববিদ্যালয়", href: "/study-abroad/australia/universities/monash-university" },
                            { label: "মেলবোর্ন বিশ্ববিদ্যালয়", href: "/study-abroad/australia/universities/university-of-melbourne" },
                            { label: "সিডনি বিশ্ববিদ্যালয়", href: "/study-abroad/australia/universities/university-of-sydney" },
                            { label: "ম্যাককুয়ারি বিশ্ববিদ্যালয়", href: "/study-abroad/australia/universities/macquarie-university" },
                            { label: "কুইন্সল্যান্ড বিশ্ববিদ্যালয়", href: "/study-abroad/australia/universities/uq" },
                            { label: "সুইনবার্ন প্রযুক্তি বিশ্ববিদ্যালয়", href: "/study-abroad/australia/universities/swinburne" },
                        ],
                    },
                    {
                        label: "সেরা কোর্স",
                        href: "/study-abroad/australia/courses",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "কম্পিউটার বিজ্ঞানে স্নাতকোত্তর", href: "/study-abroad/australia/courses/msc-cs" },
                            { label: "তথ্য প্রযুক্তিতে স্নাতকোত্তর", href: "/study-abroad/australia/courses/msc-it" },
                            { label: "সিভিল ইঞ্জিনিয়ারিংয়ে স্নাতকোত্তর", href: "/study-abroad/australia/courses/msc-ce" },
                        ],
                    },
                ],
            },

            {
                label: "জার্মানি",
                href: "/study-abroad/germany",
                hasDropdown: true,
                dropdownItems: [
                    {
                        label: "সেরা শহরগুলি",
                        href: "/study-abroad/germany/cities",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "বার্লিন", href: "/study-abroad/germany/cities/berlin" },
                            { label: "মিউনিখ", href: "/study-abroad/germany/cities/munich" },
                            { label: "হামবুর্গ", href: "/study-abroad/germany/cities/hamburg" },
                            { label: "ফ্রাঙ্কফুর্ট", href: "/study-abroad/germany/cities/frankfurt" },
                        ],
                    },
                    {
                        label: "শীর্ষ বিশ্ববিদ্যালয়গুলি",
                        href: "/study-abroad/germany/universities",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "মিউনিখের কারিগরি বিশ্ববিদ্যালয়", href: "/study-abroad/germany/universities/tum" },
                            { label: "বার্লিনের হাম্বোল্ট বিশ্ববিদ্যালয়", href: "/study-abroad/germany/universities/humboldt-university" },
                            { label: "হামবুর্গ বিশ্ববিদ্যালয়", href: "/study-abroad/germany/universities/university-of-hamburg" },
                            { label: "গোটিনজেন বিশ্ববিদ্যালয়", href: "/study-abroad/germany/universities/university-of-goettingen" },
                            { label: "গ্যেটে বিশ্ববিদ্যালয় ফ্রাঙ্কফুর্ট", href: "/study-abroad/germany/universities/goethe-university-frankfurt" },
                        ],
                    },
                    {
                        label: "সেরা কোর্স",
                        href: "/study-abroad/germany/courses",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "কম্পিউটার বিজ্ঞানে স্নাতকোত্তর", href: "/study-abroad/germany/courses/msc-cs" },
                            { label: "তথ্য প্রযুক্তিতে স্নাতকোত্তর", href: "/study-abroad/germany/courses/msc-it" },
                            { label: "ইলেকট্রিক্যাল এবং ইলেকট্রনিক্স ইঞ্জিনিয়ারিংয়ে স্নাতকোত্তর", href: "/study-abroad/germany/courses/msc-ee" },
                        ],
                    },
                ],
            },

            {
                label: "আয়ারল্যান্ড",
                href: "/study-abroad/ireland",
                hasDropdown: true,
                dropdownItems: [
                    {
                        label: "সেরা শহরগুলি",
                        href: "/study-abroad/ireland/cities",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "ডাবলিন", href: "/study-abroad/ireland/cities/dublin" },
                            { label: "কর্ক", href: "/study-abroad/ireland/cities/cork" },
                            { label: "লিমেরিক", href: "/study-abroad/ireland/cities/limerick" },
                            { label: "গালওয়ে", href: "/study-abroad/ireland/cities/galway" },
                        ],
                    },
                    {
                        label: "শীর্ষ বিশ্ববিদ্যালয়গুলি",
                        href: "/study-abroad/ireland/universities",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "ডাবলিন বিশ্ববিদ্যালয়", href: "/study-abroad/ireland/universities/university-of-dublin" },
                            { label: "ইউনিভার্সিটি কলেজ ডাবলিন", href: "/study-abroad/ireland/universities/ucd" },
                            { label: "গালওয়ে বিশ্ববিদ্যালয়", href: "/study-abroad/ireland/universities/university-of-galway" },
                            { label: "ডাবলিন সিটি ইউনিভার্সিটি", href: "/study-abroad/ireland/universities/dcu" },
                            { label: "লিমেরিক বিশ্ববিদ্যালয়", href: "/study-abroad/ireland/universities/university-of-limerick" },
                        ],
                    },
                    {
                        label: "সেরা কোর্স",
                        href: "/study-abroad/ireland/courses",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "কম্পিউটার বিজ্ঞানে স্নাতকোত্তর", href: "/study-abroad/ireland/courses/msc-cs" },
                            { label: "তথ্য প্রযুক্তিতে স্নাতকোত্তর", href: "/study-abroad/ireland/courses/msc-it" },
                            { label: "ডিজিটাল মার্কেটিং স্নাতকোত্তর", href: "/study-abroad/ireland/courses/msc-digital-marketing" },
                        ],
                    },
                ],
            },
        ],
    },

    { label: "ব্লগ", href: "/blog" },
    { label: "ইভেন্ট", href: "/event" },

    {
        label: "রিসোর্স",
        href: "/resources",
        hasDropdown: true,
        dropdownItems: [
            {
                label: "বই",
                href: "/resources/books",
                hasDropdown: true,
                dropdownItems: [
                    { label: "আইইএলটিএস বই", href: "/resources/books/ielts" },
                    { label: "পিটিই বই", href: "/resources/books/pte" },
                    { label: "জিআরই বই", href: "/resources/books/gre" },
                ],
            },
            {
                label: "সুপারিশ পত্র",
                href: "/resources/recommendation-letter",
                hasDropdown: true,
                dropdownItems: [
                    { label: "মাস্টার্সের জন্য", href: "/resources/recommendation-letter/masters" },
                    { label: "পিএইচডির জন্য", href: "/resources/recommendation-letter/phd" },
                ],
            },
            {
                label: "উদ্দেশ্য বিবৃতি (এসওপি)",
                href: "/resources/sop",
                hasDropdown: true,
                dropdownItems: [
                    { label: "মাস্টার্সের জন্য", href: "/resources/sop/masters" },
                    { label: "এমবিএর জন্য", href: "/resources/sop/mba" },
                    { label: "পিএইচডির জন্য", href: "/resources/sop/phd" },
                ],
            },
            {
                label: "অন্যান্য",
                href: "/resources/others",
                hasDropdown: true,
                dropdownItems: [
                    { label: "পরামর্শদাতা", href: "/resources/others/mentors" },
                ],
            },
        ],
    },

    {
        label: "পরীক্ষাসমূহ",
        href: "/exams",
        hasDropdown: true,
        dropdownItems: [
            {
                label: "আইইএলটিএস",
                href: "/exams/ielts",
                hasDropdown: true,
                dropdownItems: [
                    {
                        label: "পরীক্ষার বিবরণ",
                        href: "/exams/ielts/overview",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "আইইএলটিএস ওভারভিউ", href: "/exams/ielts/overview" },
                            { label: "আইইএলটিএস যোগ্যতা", href: "/exams/ielts/eligibility" },
                            { label: "আইইএলটিএস রেজিস্ট্রেশন", href: "/exams/ielts/registration" },
                            { label: "আইইএলটিএস ফলাফল", href: "/exams/ielts/results" },
                            { label: "আইইএলটিএস সিলেবাস", href: "/exams/ielts/syllabus" },
                            { label: "আইইএলটিএস স্লট বুকিং", href: "/exams/ielts/slot-booking" },
                        ],
                    },
                    {
                        label: "অনুশীলন",
                        href: "/exams/ielts/practice",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "শ্রবণ অংশ", href: "/exams/ielts/practice/listening" },
                            { label: "পাঠ অংশ", href: "/exams/ielts/practice/reading" },
                            { label: "লেখার অংশ", href: "/exams/ielts/practice/writing" },
                            { label: "কথার অংশ", href: "/exams/ielts/practice/speaking" },
                        ],
                    },
                ],
            },

            {
                label: "পিটিই",
                href: "/exams/pte",
                hasDropdown: true,
                dropdownItems: [
                    {
                        label: "পরীক্ষার বিবরণ",
                        href: "/exams/pte/overview",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "পিটিই ওভারভিউ", href: "/exams/pte/overview" },
                            { label: "পিটিই যোগ্যতা", href: "/exams/pte/eligibility" },
                            { label: "পিটিই রেজিস্ট্রেশন", href: "/exams/pte/registration" },
                            { label: "পিটিই ফলাফল", href: "/exams/pte/results" },
                            { label: "পিটিই সিলেবাস", href: "/exams/pte/syllabus" },
                            { label: "পিটিই স্লট বুকিং", href: "/exams/pte/slot-booking" },
                        ],
                    },
                    {
                        label: "অনুশীলন",
                        href: "/exams/pte/practice",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "স্পিকিং ও রাইটিং", href: "/exams/pte/practice/speaking-writing" },
                            { label: "রিডিং", href: "/exams/pte/practice/reading" },
                            { label: "লিসনিং", href: "/exams/pte/practice/listening" },
                        ],
                    },
                ],
            },

            {
                label: "ডুয়োলিঙ্গো",
                href: "/exams/duolingo",
                hasDropdown: true,
                dropdownItems: [
                    {
                        label: "পরীক্ষার বিবরণ",
                        href: "/exams/duolingo/overview",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "ডুয়োলিঙ্গো ওভারভিউ", href: "/exams/duolingo/overview" },
                            { label: "ডুয়োলিঙ্গো যোগ্যতা", href: "/exams/duolingo/eligibility" },
                            { label: "ডুয়োলিঙ্গো রেজিস্ট্রেশন", href: "/exams/duolingo/registration" },
                            { label: "ডুয়োলিঙ্গো সিলেবাস", href: "/exams/duolingo/syllabus" },
                            { label: "ডুয়োলিঙ্গো স্লট বুকিং", href: "/exams/duolingo/slot-booking" },
                        ],
                    },
                    {
                        label: "অনুশীলন",
                        href: "/exams/duolingo/practice",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "মূল পরীক্ষা", href: "/exams/duolingo/practice/test" },
                            { label: "লেখা নমুনা", href: "/exams/duolingo/practice/writing-samples" },
                            { label: "কথার নমুনা", href: "/exams/duolingo/practice/speaking-samples" },
                        ],
                    },
                ],
            },

            {
                label: "এস.এ.টি",
                href: "/exams/sat",
                hasDropdown: true,
                dropdownItems: [
                    {
                        label: "পরীক্ষার বিবরণ",
                        href: "/exams/sat/overview",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "এস.এ.টি ওভারভিউ", href: "/exams/sat/overview" },
                            { label: "এস.এ.টি যোগ্যতা", href: "/exams/sat/eligibility" },
                            { label: "এস.এ.টি রেজিস্ট্রেশন", href: "/exams/sat/registration" },
                            { label: "এস.এ.টি সিলেবাস", href: "/exams/sat/syllabus" },
                            { label: "এস.এ.টি স্লট বুকিং", href: "/exams/sat/slot-booking" },
                        ],
                    },
                    {
                        label: "অনুশীলন",
                        href: "/exams/sat/practice",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "পড়াশোনা ও ব্যাকরণ অংশ", href: "/exams/sat/practice/reading-grammar" },
                            { label: "গণিত অংশ", href: "/exams/sat/practice/math" },
                        ],
                    },
                ],
            },

            {
                label: "টোফেল",
                href: "/exams/toefl",
                hasDropdown: true,
                dropdownItems: [
                    {
                        label: "পরীক্ষার বিবরণ",
                        href: "/exams/toefl/overview",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "টোফেল ওভারভিউ", href: "/exams/toefl/overview" },
                            { label: "টোফেল যোগ্যতা", href: "/exams/toefl/eligibility" },
                            { label: "টোফেল রেজিস্ট্রেশন", href: "/exams/toefl/registration" },
                            { label: "টোফেল সিলেবাস", href: "/exams/toefl/syllabus" },
                            { label: "টোফেল স্লট বুকিং", href: "/exams/toefl/slot-booking" },
                        ],
                    },
                    {
                        label: "অনুশীলন",
                        href: "/exams/toefl/practice",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "পড়া অংশ", href: "/exams/toefl/practice/reading" },
                            { label: "শোনা অংশ", href: "/exams/toefl/practice/listening" },
                            { label: "বলা অংশ", href: "/exams/toefl/practice/speaking" },
                            { label: "লেখার অংশ", href: "/exams/toefl/practice/writing" },
                        ],
                    },
                ],
            },

            {
                label: "জিআরই",
                href: "/exams/gre",
                hasDropdown: true,
                dropdownItems: [
                    {
                        label: "পরীক্ষার বিবরণ",
                        href: "/exams/gre/overview",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "জিআরই ওভারভিউ", href: "/exams/gre/overview" },
                            { label: "জিআরই যোগ্যতা", href: "/exams/gre/eligibility" },
                            { label: "জিআরই রেজিস্ট্রেশন", href: "/exams/gre/registration" },
                            { label: "জিআরই সিলেবাস", href: "/exams/gre/syllabus" },
                            { label: "জিআরই স্লট বুকিং", href: "/exams/gre/slot-booking" },
                        ],
                    },
                    {
                        label: "অনুশীলন",
                        href: "/exams/gre/practice",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "শব্দ ও বিশ্লেষণ অংশ", href: "/exams/gre/practice/verbal" },
                            { label: "গণিত অংশ", href: "/exams/gre/practice/quantitative" },
                            { label: "বিশ্লেষণাত্মক রাইটিং", href: "/exams/gre/practice/awa" },
                        ],
                    },
                ],
            },

            {
                label: "জিম্যাট",
                href: "/exams/gmat",
                hasDropdown: true,
                dropdownItems: [
                    {
                        label: "পরীক্ষার বিবরণ",
                        href: "/exams/gmat/overview",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "জিম্যাট ওভারভিউ", href: "/exams/gmat/overview" },
                            { label: "জিম্যাট যোগ্যতা", href: "/exams/gmat/eligibility" },
                            { label: "জিম্যাট রেজিস্ট্রেশন", href: "/exams/gmat/registration" },
                            { label: "জিম্যাট সিলেবাস", href: "/exams/gmat/syllabus" },
                            { label: "জিম্যাট স্লট বুকিং", href: "/exams/gmat/slot-booking" },
                        ],
                    },
                    {
                        label: "অনুশীলন",
                        href: "/exams/gmat/practice",
                        hasDropdown: true,
                        dropdownItems: [
                            { label: "গণিত অংশ", href: "/exams/gmat/practice/math" },
                            { label: "ইংরেজি বিশ্লেষণ অংশ", href: "/exams/gmat/practice/verbal" },
                            { label: "ডেটা ইনসাইটস", href: "/exams/gmat/practice/data-insights" },
                        ],
                    },
                ],
            },
        ],
    },

    { label: "মেভেনকেভ ডাইজেস্ট", href: "/leadership" },
    { label: "মেভেনকেভ AI", href: "/mavencave-ai" },
    { label: "আমাদের সম্পর্কে", href: "/about" },
];
