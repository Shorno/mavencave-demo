export interface University {
    id: string;
    name: string;
    location: string;
    logo: string;
    englishName: string
    qsRank: number | string;
    tuitionFee: string;
    ieltsScore: number;
    country: string;
    city: string;
}

const newYorkUniversities: University[] = [
    {
        id: "ny_1",
        name: "কলম্বিয়া বিশ্ববিদ্যালয়",
        englishName: "Columbia University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.columbia.edu/favicon.ico",
        qsRank: 22,
        tuitionFee: "-/-",
        ieltsScore: 6.0
    },
    {
        id: "ny_2",
        name: "বার্কলে কলেজ",
        englishName: "Berkeley College",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://berkeleycollege.edu/favicon.ico",
        qsRank: 27,
        tuitionFee: "১২ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "ny_3",
        name: "নিউ ইয়র্ক বিশ্ববিদ্যালয়",
        englishName: "New York University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.nyu.edu/favicon.ico",
        qsRank: 39,
        tuitionFee: "২০ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "ny_4",
        name: "ইয়েশিভা বিশ্ববিদ্যালয়",
        englishName: "Yeshiva University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.yu.edu/favicon.ico",
        qsRank: 246,
        tuitionFee: "১৮ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "ny_5",
        name: "ওয়াগনার কলেজ",
        englishName: "Wagner College",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.wagner.edu/favicon.ico",
        qsRank: 251,
        tuitionFee: "৩৭ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "ny_6",
        name: "অ্যাডেলফি বিশ্ববিদ্যালয়",
        englishName: "Adelphi University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.adelphi.edu/favicon.ico",
        qsRank: 251,
        tuitionFee: "১৭ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "ny_7",
        name: "মেট্রোপলিটন কলেজ অফ নিউ ইয়র্ক",
        englishName: "Metropolitan College of New York",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.mcny.edu/favicon.ico",
        qsRank: 701,
        tuitionFee: "১৭ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "ny_8",
        name: "ফোর্ডহ্যাম বিশ্ববিদ্যালয়",
        englishName: "Fordham University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.fordham.edu/favicon.ico",
        qsRank: 801,
        tuitionFee: "৪২ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "ny_9",
        name: "গ্লাসগো ক্যালেডোনিয়ান নিউ ইয়র্ক কলেজ",
        englishName: "Glasgow Caledonian New York College",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.gcnyc.edu/favicon.ico",
        qsRank: 1001,
        tuitionFee: "-/-",
        ieltsScore: 6.5
    },
    {
        id: "ny_10",
        name: "দ্য সিটি কলেজ অফ নিউ ইয়র্ক",
        englishName: "The City College of New York",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.ccny.cuny.edu/favicon.ico",
        qsRank: 1001,
        tuitionFee: "১২ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "ny_11",
        name: "সেন্ট জন'স বিশ্ববিদ্যালয়",
        englishName: "St. John's University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.stjohns.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৯ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "ny_12",
        name: "টুরো কলেজ",
        englishName: "Touro College",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.touro.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৪ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "ny_13",
        name: "আইকাহন স্কুল অফ মেডিসিন অ্যাট মাউন্ট সিনাই",
        englishName: "Icahn School of Medicine at Mount Sinai",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.mountsinai.org/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "৪৫ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "ny_14",
        name: "কুইন্স কলেজ",
        englishName: "Queens College",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.qc.cuny.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১১ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "ny_15",
        name: "নিউ ইয়র্ক ফিল্ম একাডেমি",
        englishName: "New York Film Academy",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.nyfa.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "২৭ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "ny_16",
        name: "নিউ ইয়র্ক টেক - লং আইল্যান্ড",
        englishName: "New York Tech - Long Island",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.nyit.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "৩৩ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "ny_17",
        name: "লং আইল্যান্ড বিশ্ববিদ্যালয়",
        englishName: "Long Island University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.liu.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "২০ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "ny_18",
        name: "বারুচ কলেজ",
        englishName: "Baruch College",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.baruch.cuny.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১৬ লাখ টাকা/বছর",
        ieltsScore: 6.0
    },
    {
        id: "ny_19",
        name: "মার্সি কলেজ",
        englishName: "Mercy College",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.mercy.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "-/-",
        ieltsScore: 6.5
    },
    {
        id: "ny_20",
        name: "পেস বিশ্ববিদ্যালয়",
        englishName: "Pace University",
        country: "usa",
        city: "new-york",
        location: "নিউ ইয়র্ক",
        logo: "https://www.pace.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "১২ লাখ টাকা/বছর",
        ieltsScore: 6.0
    }
];
const bostonUniversities: University[] = [
    {
        id: "boston_1",
        name: "বোস্টন বিশ্ববিদ্যালয়",
        englishName: "Boston University",
        country: "usa",
        city: "boston",
        location: "বোস্টন",
        logo: "https://www.bu.edu/favicon.ico",
        qsRank: 108,
        tuitionFee: "৬৪ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "boston_2",
        name: "নর্থইস্টার্ন বিশ্ববিদ্যালয়",
        englishName: "Northeastern University",
        country: "usa",
        city: "boston",
        location: "বোস্টন",
        logo: "https://www.northeastern.edu/favicon.ico",
        qsRank: 375,
        tuitionFee: "৬১ লাখ টাকা/বছর",
        ieltsScore: 6.5
    },
    {
        id: "boston_3",
        name: "বোস্টন কলেজ",
        englishName: "Boston College",
        country: "usa",
        city: "boston",
        location: "বোস্টন",
        logo: "https://www.bc.edu/favicon.ico",
        qsRank: 631,
        tuitionFee: "৬৬ লাখ টাকা/বছর",
        ieltsScore: 7.0
    },
    {
        id: "boston_4",
        name: "সাফোক বিশ্ববিদ্যালয়",
        englishName: "Suffolk University",
        country: "usa",
        city: "boston",
        location: "বোস্টন",
        logo: "https://www.suffolk.edu/favicon.ico",
        qsRank: "-/-",
        tuitionFee: "৪৬ লাখ টাকা/বছর",
        ieltsScore: 6.5
    }
];


export const universities: University[] = [
    ...newYorkUniversities,
    ...bostonUniversities,
];