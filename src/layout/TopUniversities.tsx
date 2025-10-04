import {useMemo, useState, useEffect} from 'react';
import {ArrowLeft, ArrowRight, Search,} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import SearchStats from "@/components/usa-masters/SearchStats.tsx";
import UniversityCard from "@/components/usa-masters/UniversityCard.tsx";
import FilterSidebar from "@/components/usa-masters/FilterSidebar.tsx";
import ExploreCoursesSection from "@/components/usa-masters/ExploreCoursesSection.tsx";
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";
import StudyOptionsAccordion from "@/components/usa-masters/StudyOptionsAccordion.tsx";
import {ArticleCard} from "@/components/digest/ArticleCard.tsx";
import {universities} from "@/data/universities.ts";
import {useParams} from "react-router";

interface FilterState {
    degree: string[];
    location: string[];
    cities: string[];
    scholarships: boolean;
    rating: number | null;
}


type UniversityParams = {
    country: string;
    city: string;
}

const titleMapping: Record<string, string> = {
    "usa": "যুক্তরাষ্ট্রে",
    "uk": "যুক্তরাজ্যে",
    "australia": "অস্ট্রেলিয়ায়",
    "canada": "কানাডায়",
    "germany": "জার্মানিতে",
    "ireland": "আয়ারল্যান্ডে",
};
const cityMapping: Record<string, string> = {
    "new-york": "নিউ ইয়র্ক",
    "los-angeles": "লস অ্যাঞ্জেলেস",
    "chicago": "শিকাগো",
    "houston": "হিউস্টন",
    "miami": "মিয়ামি",
    "london": "লন্ডন",
    "manchester": "ম্যানচেস্টার",
    "birmingham": "বার্মিংহাম",
    "leeds": "লিডস",
    "glasgow": "গ্লাসগো",
    "sydney": "সিডনি",
    "melbourne": "মেলবোর্ন",
    "brisbane": "ব্রিসবেন",
    "perth": "পার্থ",
    "toronto": "টরন্টো",
    "vancouver": "ভ্যাঙ্কুভার",
    "montreal": "মন্ট্রিয়াল",
    "calgary   ": "ক্যালগারি",
    "berlin": "বার্লিন",
    "munich": "মিউনিখ",
    "frankfurt": "ফ্রাঙ্কফুর্ট",
    "hamburg": "হামবুর্গ",
    "dublin": "ডাবলিন",
    "cork": "কর্ক",
    "limerick": "লিমেরিক",
    "galway": "গ্যালওয়ে",
    "belfast": "বেলফাস্ট",
    "boston": "বস্টন",
    "san-francisco": "সান ফ্রান্সিসকো",
    "seattle": "সিয়াটল",
    "atlanta": "অ্যাটলান্টা",
    "washington-dc": "ওয়াশিংটন ডিসি",
    "edinburgh": "এডিনবার্গ",
    "cardiff": "কার্ডিফ",
    "sheffield": "শেফিল্ড",
    "newcastle": "নিউক্যাসল",
    "southampton": "সাউথাম্পটন",
    "adelaide": "অ্যাডিলেড",
    "canberra": "ক্যানবেরা",
    "gold-coast": "গোল্ড কোস্ট",
    "ottawa": "অটাওয়া",
    "quebec-city": "কুইবেক সিটি",
    "hamilton": "হ্যামিল্টন",
    "waterloo": "ওয়াটারলু",
    "dusseldorf": "ডুসেলডর্ফ",
    "stuttgart": "স্টুটগার্ট",
    "dortmund": "ডর্টমুন্ড",
    "essen": "এসেন",
    "bonn": "বন",
    "sligo": "স্লিগো",
    "kilkenny": "কিলকেনি",
    "wexford": "ওয়েক্সফোর্ড",
    "derry": "ডেরি",
    "lisburn": "লিসবার্ন",
}


const getTitle = (country: string, city: string) => {
    const countryTitle = titleMapping[country.toLowerCase()] || "বিদেশে";
    const cityTitle = cityMapping[city.toLowerCase()]
    return `${countryTitle} ${cityTitle} শহরে আন্তর্জাতিক শিক্ষার্থীদের জন্য শীর্ষ বিশ্ববিদ্যালয়সমূহ`;
}

const faqs = [
    {
        id: "faq1",
        question: "আমি কীভাবে যুক্তরাষ্ট্রে মাস্টার্স করার জন্য সেরা কোর্স খুঁজে পাবো?",
        answer: (
            <>
                যুক্তরাষ্ট্রে মাস্টার্স কোর্স খুঁজতে প্রথমে আপনার আগ্রহের বিষয় নির্ধারণ করুন। তারপর QS র‍্যাঙ্কিং, US
                News র‍্যাঙ্কিং দেখুন। বিশ্ববিদ্যালয়ের ওয়েবসাইটে কারিকুলাম, গবেষণার সুযোগ, এবং ফ্যাকাল্টি প্রোফাইল
                পরীক্ষা করুন। আপনার একাডেমিক ব্যাকগ্রাউন্ড এবং ক্যারিয়ার লক্ষ্যের সাথে মিলিয়ে কোর্স নির্বাচন করুন।
            </>
        ),
    },
    {
        id: "faq2",
        question: "যুক্তরাষ্ট্রে মাস্টার্স করার জন্য সেরা বিশ্ববিদ্যালয়গুলো কী কী?",
        answer: (
            <>
                মাস্টার্সের জন্য সেরা বিশ্ববিদ্যালয়গুলো হলো: MIT (ইঞ্জিনিয়ারিং ও টেকনোলজি), হার্ভার্ড (বিজনেস ও
                মেডিসিন), স্ট্যানফোর্ড (কম্পিউটার সায়েন্স), ইয়েল (আইন), প্রিন্সটন (ফিন্যান্স), কলম্বিয়া (জার্নালিজম),
                এবং UC Berkeley (ইঞ্জিনিয়ারিং)। বিষয়ভেদে র‍্যাঙ্কিং ভিন্ন হয়, তাই আপনার নির্দিষ্ট ক্ষেত্রের জন্য
                বিশেষায়িত র‍্যাঙ্কিং দেখুন।
            </>
        ),
    },
    {
        id: "faq3",
        question: "যুক্তরাষ্ট্রে দুই বছরের মাস্টার্স প্রোগ্রামের মোট খরচ কত?",
        answer: (
            <>
                যুক্তরাষ্ট্রে দুই বছরের মাস্টার্স প্রোগ্রামের মোট খরচ ৫০-১২০ লক্ষ টাকা। এতে অন্তর্ভুক্ত: টিউশন ফি (৩০-৮০
                লক্ষ টাকা), থাকা-খাওয়া (১৫-২৫ লক্ষ টাকা), বই ও অন্যান্য (৫-১৫ লক্ষ টাকা)। প্রাইভেট বিশ্ববিদ্যালয়ে খরচ
                বেশি, পাবলিক বিশ্ববিদ্যালয়ে তুলনামূলক কম। স্কলারশিপ ও এসিস্ট্যান্টশিপের মাধ্যমে খরচ কমানো সম্ভব।
            </>
        ),
    },
    {
        id: "faq4",
        question: "যুক্তরাষ্ট্রে ডেটা সায়েন্সে মাস্টার্স করার খরচ কত?",
        answer: (
            <>
                ডেটা সায়েন্সে মাস্টার্স করার খরচ বছরে ৪০-৭০ লক্ষ টাকা। MIT, Stanford-এ ৬০-৭০ লক্ষ টাকা, যেখানে স্টেট
                ইউনিভার্সিটিতে ৩৫-৫০ লক্ষ টাকা। জীবনযাত্রার খরচ শহরভেদে আলাদা - নিউইয়র্ক, সান ফ্রান্সিসকোতে বেশি,
                টেক্সাস, ফ্লোরিডায় কম। গড়ে মোট খরচ দুই বছরে ৮০-১০০ লক্ষ টাকা।
            </>
        ),
    },
    {
        id: "faq5",
        question: "যুক্তরাষ্ট্রে কি এক বছরের মাস্টার্স প্রোগ্রাম রয়েছে?",
        answer: (
            <>
                হ্যাঁ, যুক্তরাষ্ট্রে এক বছরের মাস্টার্স প্রোগ্রাম আছে, তবে সীমিত। সাধারণত MBA, ডেটা সায়েন্স, ফিন্যান্স,
                এবং কিছু ইঞ্জিনিয়ারিং প্রোগ্রামে পাওয়া যায়। Northwestern Kellogg, Duke Fuqua-তে One-Year MBA আছে। তবে
                বেশিরভাগ মাস্টার্স প্রোগ্রাম ১.৫-২ বছরের। এক বছরের প্রোগ্রাম থাকলেও ভর্তির যোগ্যতা ও খরচ বেশি হয়।
            </>
        ),
    }
];
const educationArticlesData = [
    {
        id: 5,
        title: "IELTS/TOEFL পরীক্ষার জন্য কীভাবে প্রস্তুতি নেবেন?",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article1.jpg",
        category: "ভাষার দক্ষতা",
        excerpt: "IELTS ও TOEFL পরীক্ষায় ভাল স্কোরের জন্য কার্যকর প্রস্তুতি কৌশল"
    },
    {
        id: 6,
        title: "শেষ মুহূর্তের প্রস্তুতি: পরীক্ষার আগের রাতের করণীয়",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article2.jpg",
        category: "পরীক্ষা প্রস্তুতি",
        excerpt: "পরীক্ষার আগের রাতে কী করবেন এবং কী করবেন না - বিশেষজ্ঞ পরামর্শ"
    },
    {
        id: 7,
        title: "পড়াশোনায় মনোযোগ ধরে রাখার ৫টি বিজ্ঞানভিত্তিক উপায়",
        date: "১২ জুলাই, ২০২৫",
        readTime: "পড়তে সময় লাগবে: ৫ মিনিট",
        image: "/images/article4.jpg",
        category: "অধ্যয়ন কৌশল",
        excerpt: "বিজ্ঞানভিত্তিক পদ্ধতিতে পড়াশোনায় মনোযোগ বৃদ্ধির কার্যকর উপায়"
    }
];


export default function TopUniversities() {
    const {country, city} = useParams<UniversityParams>();

    const [searchQuery, setSearchQuery] = useState('');

    const [selectedFilters, setSelectedFilters] = useState<FilterState>({
        degree: [],
        location: [],
        cities: [],
        scholarships: false,
        rating: null
    });

    useEffect(() => {
        if (city) {
            setSelectedFilters(prev => ({
                ...prev,
                cities: [city]
            }));
        }
    }, [city]);

    const filteredUniversities = useMemo(() => {
        let filtered = universities;

        if (country) {
            filtered = filtered.filter(university =>
                university.country === country
            );
        }

        if (selectedFilters.cities.length > 0) {
            filtered = filtered.filter(university =>
                selectedFilters.cities.includes(university.city)
            );
        }

        if (searchQuery.trim()) {
            filtered = filtered.filter(university =>
                university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                university.englishName.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filtered;
    }, [country, selectedFilters.cities, searchQuery]);

    if (!country || !city) {
        return <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-500">দেশের তথ্য পাওয়া যায়নি।</p>
        </div>;
    }


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold text-purple-600">
                                {getTitle(country, city)}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Sidebar Filters */}
                    <div className="lg:col-span-1">
                        <FilterSidebar
                            filters={selectedFilters}
                            onFiltersChange={setSelectedFilters}
                        />
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Search Bar */}
                        <div className="mb-6">
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <Search
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"/>
                                    <Input
                                        type="text"
                                        placeholder="বাছাই করুন: বিশ্ববিদ্যালয়, ডিগ্রি কোর্স নিয়ে"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                                <Select>
                                    <SelectTrigger className="w-48">
                                        <SelectValue placeholder="সব নূতন ফেলুন"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="newest">সব নূতন ফেলুন</SelectItem>
                                        <SelectItem value="oldest">পুরাতন</SelectItem>
                                        <SelectItem value="popular">জনপ্রিয়</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger className="w-48">
                                        <SelectValue placeholder="৭৮টি ফলাফল"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="10">১০টি ফলাফল</SelectItem>
                                        <SelectItem value="25">২৫টি ফলাফল</SelectItem>
                                        <SelectItem value="50">৫০টি ফলাফল</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Search Stats */}
                        <SearchStats totalResults={universities.length}/>

                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredUniversities.map((university) => (
                                <UniversityCard
                                    key={university.id}
                                    university={university}
                                />
                            ))}
                        </div>
                        <div className={"flex items-center justify-center gap-10 my-10"}>
                            <Button size={"xl"} variant={"outline"}>
                                <ArrowLeft/> পূর্ববর্তী
                            </Button>
                            <p className={"text-lg font-semibold"}>১</p>
                            <Button size={"xl"} variant={"outline"}>
                                <ArrowRight/>
                                পরবর্তী
                            </Button>
                        </div>
                        <ExploreCoursesSection/>
                        <div className="grid  grid-cols-1 md:grid-cols-3  gap-4 sm:gap-6 lg:gap-8">
                            {educationArticlesData.map((article) => (
                                <div key={article.id} className="flex">
                                    <ArticleCard article={article}/>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>

            </div>

            <FAQAccordion title={"শিক্ষার্থীদের করা সবথেকে বেশি প্রশ্ন সমূহ-"} data={faqs}
                          className={"md:p-8 rounded-xl"}/>
            <StudyOptionsAccordion/>
        </div>
    );
};
