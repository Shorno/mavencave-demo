import React, { useState } from 'react';
import TestimonialScroll from './TestimonialScroll';

// JSON data structure (Retained in a constant for easy use in a single file)
const data = {
  "summary": {
    "lastUpdated": "October 9, 2025",
    "readTime": "9 min read",
    "blsPrediction": "over 2.7 million data-driven roles will be created by 2026",
    "employerHiringRate": "86% of U.S. employers plan to hire business analytics graduates",
    "startingSalaryRangeUSD": "$85,000–$120,000",
    "startingSalaryRangeINR": "₹74.8 lakh–₹1.06 crore",
    "stemOptDuration": "up to 3 years of post-study work (OPT)",
    "postStudySalaryRangeUSD": "USD 70,000-95,000",
    "postStudySalaryRangeINR": "₹62.16-84.36 lakh",
    "conversionRateUsed": "1 USD = ₹88.80 (for post-study salary range)"
  },
  "topUniversities": [
    {
      "name": "MIT (Sloan)",
      "qsRanking2026": 1,
      "tuitionFeeUSD": 93834,
      "tuitionFeeINR": 8329731
    },
    {
      "name": "UCLA (Anderson)",
      "qsRanking2026": 1,
      "tuitionFeeUSD": 90076,
      "tuitionFeeINR": 8000050
    },
    {
      "name": "Columbia Business School",
      "qsRanking2026": 5,
      "tuitionFeeUSD": 93024,
      "tuitionFeeINR": 8262423
    },
    {
      "name": "Duke University",
      "qsRanking2026": 7,
      "tuitionFeeUSD": 85600,
      "tuitionFeeINR": 7593088
    },
    {
      "name": "Cornell University",
      "qsRanking2026": 10,
      "tuitionFeeUSD": 87500,
      "tuitionFeeINR": 7768000
    },
    {
      "name": "Carnegie Mellon University",
      "qsRanking2026": 11,
      "tuitionFeeUSD": 74736,
      "tuitionFeeINR": 6635537
    },
    {
      "name": "Texas (McCombs)",
      "qsRanking2026": 12,
      "tuitionFeeUSD": 58000,
      "tuitionFeeINR": 5158400
    },
    {
      "name": "USC (Marshall)",
      "qsRanking2026": 16,
      "tuitionFeeUSD": 55765,
      "tuitionFeeINR": 4948453
    },
    {
      "name": "Washington (Foster)",
      "qsRanking2026": 23,
      "tuitionFeeUSD": 57500,
      "tuitionFeeINR": 5102000
    },
    {
      "name": "Purdue (Krannert)",
      "qsRanking2026": 24,
      "tuitionFeeUSD": 50000,
      "tuitionFeeINR": 4440000
    }
  ],
  "whyPursue": [
    {
      "heading": "World-Class Education",
      "details": "Programs at schools like MIT Sloan, Carnegie Mellon, and UT Austin McCombs combine machine learning, statistics, and programming (Python/R) with business strategy. 93% of U.S. employers value analytics skills for decision-making (GMAC 2024)."
    },
    {
      "heading": "Career Opportunities",
      "details": "The U.S. tech and finance hubs Silicon Valley, Seattle, New York, Austin actively recruit analytics graduates. The BLS projects 35% growth in data-related roles by 2032, far above the national average."
    },
    {
      "heading": "Strong ROI",
      "details": "Tuition ranges $30,000-$100,000 (₹26.4-₹88 lakh), but starting salaries average $85,000-$120,000 (₹74.8-₹1.06 crore), with elite graduates earning up to $140,000 (₹1.23 crore). STEM OPT allows up to 3 years of post-study work, further improving ROI."
    },
    {
      "heading": "Practical, Industry-Focused Learning",
      "details": "Over 90% of programs include internships or capstone projects with companies like IBM, Microsoft, and PwC, giving students a real-world portfolio."
    },
    {
      "heading": "Networking & Global Exposure",
      "details": "Alumni networks from schools like USC Marshall and Purdue Krannert exceed 100,000 professionals, offering mentorship and international career opportunities."
    }
  ],
  "eligibility": {
    "title": "MS in Business Analytics in US: Eligibility for Indian Students",
    "academic": [
      "A four-year bachelor’s degree (or equivalent) in any quantitative field such as Mathematics, Statistics, Economics, Computer Science, Engineering, or Business.",
      "Minimum GPA of 3.0 on a 4.0 scale (equivalent to 65–70% in India)."
    ],
    "technical": [
      "Proficiency in programming languages such as Python, R, SQL, or Java.",
      "Strong foundation in statistics, probability, and linear algebra.",
      "Completion of coursework or professional experience in data analysis, statistical modelling, or machine learning is preferred."
    ],
    "standardizedTests": [
      "GRE: Most universities recommend a competitive score of 167+.",
      "GMAT: Some programs accept 710+; however, a few schools offer GRE/GMAT waivers based on academic or professional experience."
    ],
    "workExperience": [
      "While not always mandatory, 4–12 months of full-time work experience in analytics, consulting, or related fields can strengthen applications."
    ],
    "additionalRequirements": [
      "Transcripts of previous academic qualifications.",
      "Three letters of recommendation, preferably from professors or supervisors familiar with your quantitative and analytical skills.",
      "Statement of Purpose (SOP) of at least 500 words outlining your interest in business analytics, career goals, and fit for the program.",
      "Certifications in data analytics, machine learning, or business intelligence tools (e.g., Tableau, Power BI) are an added advantage."
    ]
  },
  "otherUniversities": [
    {
      "name": "University of Southern California (USC)",
      "program": "MS in Analytics",
      "qsRanking2026": 146,
      "tuitionFeeUSD": 63000,
      "tuitionFeeINR": 5594400
    },
    {
      "name": "University of Michigan (Ann Arbor)",
      "program": "Master of Business Analytics",
      "qsRanking2026": 45,
      "tuitionFeeUSD": 69290,
      "tuitionFeeINR": 6150792
    },
    {
      "name": "New York University (NYU)",
      "program": "MS in Business Analytics",
      "qsRanking2026": 55,
      "tuitionFeeUSD": 93100,
      "tuitionFeeINR": 8275680
    },
    {
      "name": "Indiana University Bloomington",
      "program": "MS in Business Analytics",
      "qsRanking2026": "306 (joint)",
      "tuitionFeeUSD": 25500,
      "tuitionFeeINR": 2263200
    },
    {
      "name": "Northwestern University",
      "program": "MS in Analytics & Management",
      "qsRanking2026": 42,
      "tuitionFeeUSD": 69129,
      "tuitionFeeINR": 6138779
    },
    {
      "name": "Boston University (BU)",
      "program": "MS in Business Analytics",
      "qsRanking2026": 88,
      "tuitionFeeUSD": 82968,
      "tuitionFeeINR": 7366774
    },
    {
      "name": "University of Texas at Dallas (UTD)",
      "program": "MS in Business Analytics",
      "qsRanking2026": "597 (joint)",
      "tuitionFeeUSD": 55008,
      "tuitionFeeINR": 4884710
    },
    {
      "name": "University of Maryland, College Park",
      "program": "MS in Business Analytics",
      "qsRanking2026": "207 (joint)",
      "tuitionFeeUSD": 2072.50,
      "tuitionFeeINR": 184370.40,
      "perCredit": true
    },
    {
      "name": "University of Minnesota, Twin Cities",
      "program": "MS in Business Analytics",
      "qsRanking2026": "Not ranked",
      "tuitionFeeUSD": 66625,
      "tuitionFeeINR": 5913000
    },
    {
      "name": "Northeastern University",
      "program": "MS in Business Analytics",
      "qsRanking2026": "Not ranked",
      "tuitionFeeUSD": 93100,
      "tuitionFeeINR": 8275680
    }
  ],
  "admissionProcess": [
    {
      "stepNumber": 1,
      "title": "গবেষণা এবং বিশ্ববিদ্যালয়গুলিকে তালিকাভুক্ত করা",
      "details": "এমএস ইন বিজনেস অ্যানালিটিকস অফার করে এমন বিশ্ববিদ্যালয়গুলি অন্বেষণ করে শুরু করুন। প্রোগ্রামের পাঠ্যক্রম, ফ্যাকাল্টি দক্ষতা, প্লেসমেন্ট রেকর্ড এবং বিশেষত্বগুলি দেখুন। প্রতিটি বিশ্ববিদ্যালয়ের ফোকাস বোঝা আপনাকে আপনার ক্যারিয়ারের লক্ষ্যগুলির সাথে সারিবদ্ধ প্রোগ্রামগুলিকে লক্ষ্য করতে সহায়তা করে।"
    },
    {
      "stepNumber": 2,
      "title": "অনলাইন আবেদন পূরণ করা",
      "details": "একবার আপনি বিশ্ববিদ্যালয়গুলিকে তালিকাভুক্ত করলে, তাদের অনলাইন আবেদন ফর্মগুলি পূরণ করুন। প্রতিটি বিভাগে মনোযোগ দিন, কারণ ব্যক্তিগত বিবৃতি, প্রবন্ধ এবং প্রোগ্রাম-নির্দিষ্ট প্রশ্নগুলির নির্ভুল এবং চিন্তাশীল উত্তর অত্যন্ত গুরুত্বপূর্ণ।"
    },
    {
      "stepNumber": 3,
      "title": "সহায়ক নথি প্রস্তুত এবং আপলোড করা",
      "details": "সমস্ত প্রয়োজনীয় নথি সংগ্রহ করুন, যার মধ্যে রয়েছে আন্ডারগ্র্যাজুয়েট ট্রান্সক্রিপ্ট, মানসম্মত পরীক্ষার স্কোর (প্রয়োজন হলে GRE/GMAT), রেকমেন্ডেশন লেটার, একটি জীবনবৃত্তান্ত (resume) এবং একটি Statement of Purpose। কিছু অনুপস্থিত নেই তা নিশ্চিত করার জন্য সতর্কতার সাথে এগুলি বিশ্ববিদ্যালয়ের পোর্টালের মাধ্যমে আপলোড করুন।"
    },
    {
      "stepNumber": 4,
      "title": "আবেদন পর্যালোচনা এবং সংক্ষিপ্ত তালিকাভুক্তি",
      "details": "বিশ্ববিদ্যালয়গুলি একাডেমিক এবং পেশাদার মানদণ্ড পূরণকারী প্রার্থীদের সনাক্ত করতে সমস্ত আবেদন পর্যালোচনা করে। যদি আপনি সংক্ষিপ্ত তালিকাভুক্ত হন, আপনি পরবর্তী পর্যায়ে আমন্ত্রণ জানিয়ে একটি ইমেল পাবেন।"
    },
    {
      "stepNumber": 5,
      "title": "ইন্টারভিউ প্রক্রিয়া",
      "details": "অনেক বিশ্ববিদ্যালয় আপনার বিশ্লেষণাত্মক চিন্তাভাবনা, সমস্যা সমাধানের ক্ষমতা এবং যোগাযোগ দক্ষতা মূল্যায়নের জন্য ইন্টারভিউ পরিচালনা করে—যা ব্যক্তিগতভাবে বা ভিডিও কলের মাধ্যমে হতে পারে। আপনার সিদ্ধান্ত গ্রহণের প্রক্রিয়া এবং ক্যারিয়ারের প্রেরণা বোঝার জন্য কিছু ইন্টারভিউতে পরিস্থিতি-ভিত্তিক বা ওপেন-এন্ডেড প্রশ্ন অন্তর্ভুক্ত থাকতে পারে।"
    },
    {
      "stepNumber": 6,
      "title": "শর্তসাপেক্ষ অফার লেটার",
      "details": "যদি আপনার আবেদন এবং ইন্টারভিউ বিশ্ববিদ্যালয়ের প্রত্যাশা পূরণ করে, তাহলে আপনি একটি শর্তসাপেক্ষ অফার লেটার পাবেন। এটিতে সাধারণত চূড়ান্ত ট্রান্সক্রিপ্ট বা ইংরেজি দক্ষতার ডকুমেন্টেশনের মতো যেকোনো অবশিষ্ট প্রয়োজনীয়তাগুলি উল্লেখ করা থাকে।"
    },
    {
      "stepNumber": 7,
      "title": "চূড়ান্ত তালিকাভুক্তি",
      "details": "আপনার ভর্তি নিশ্চিত করতে, অনুরোধ করা সমস্ত নথি জমা দিন, প্রোগ্রামের ফি প্রদান করুন এবং অন্য যেকোনো আনুষ্ঠানিকতা সম্পন্ন করুন। এটি সম্পন্ন হলে, আপনি আনুষ্ঠানিকভাবে তালিকাভুক্ত হন এবং ইউএস-এ আপনার এমএস যাত্রা শুরু করার জন্য প্রস্তুত হন।"
    }
  ],
  "costOfStudy": {
    "title": "এমএস ইন বিজনেস অ্যানালিটিকস পড়ার খরচ",
    "conversionRate": "1 USD = ₹88.80",
    "estimatedAnnualCosts": [
      {
        "expenseCategory": "টিউশন ফি",
        "estimatedRangeUSD": "$30,000 – $90,000",
        "estimatedRangeINR": "₹2,664,000 – ₹7,996,800"
      },
      {
        "expenseCategory": "জীবনযাত্রার ব্যয়",
        "estimatedRangeUSD": "$15,000 – $25,000",
        "estimatedRangeINR": "₹1,332,000 – ₹2,220,000"
      },
      {
        "expenseCategory": "স্বাস্থ্য বীমা",
        "estimatedRangeUSD": "$1,200 – $2,000",
        "estimatedRangeINR": "₹1,06,560 – ₹1,77,600"
      },
      {
        "expenseCategory": "বই ও সরবরাহ",
        "estimatedRangeUSD": "$800 – $1,500",
        "estimatedRangeINR": "₹70,400 – ₹1,33,200"
      },
      {
        "expenseCategory": "বিবিধ খরচ",
        "estimatedRangeUSD": "$1,500 – $3,000",
        "estimatedRangeINR": "₹1,32,600 – ₹2,65,200"
      },
      {
        "expenseCategory": "মোট আনুমানিক খরচ",
        "estimatedRangeUSD": "$48,500 – $121,500",
        "estimatedRangeINR": "₹4,305,360 – ₹10,802,400"
      }
    ],
    "lowFeeStrategy": {
      "title": "কম ফিতে এমএস ইন বিজনেস অ্যানালিটিকস",
      "points": [
        "কম খরচে জীবনযাত্রা সহ রাজ্যগুলিতে পাবলিক বিশ্ববিদ্যালয় (যেমন: ইউনিভার্সিটি অফ আলাবামা অ্যাট বার্মিংহাম বা ওকলাহোমা স্টেট ইউনিভার্সিটি)।",
        "স্কলারশিপ এবং অ্যাসিস্ট্যান্টশিপ (মেধা-ভিত্তিক স্কলারশিপ, রিসার্চ অ্যাসিস্ট্যান্টশিপ (RA), টিচিং অ্যাসিস্ট্যান্টশিপ (TA))।",
        "STEM-পদবিযুক্ত প্রোগ্রাম (শিক্ষার্থীদের অপশনাল প্র্যাকটিক্যাল ট্রেনিং (OPT)-এ ৩ বছর পর্যন্ত কাজ করার অনুমতি দেয়, যা ROI উন্নত করে)।"
      ]
    }
  },
  "jobOpportunities": {
    "title": "এমএস ইন বিজনেস অ্যানালিটিকসের পরে চাকরির সুযোগ",
    "source": "U.S. Bureau of Labor Statistics (BLS, 2025)",
    "roles": [
      {
        "role": "ডেটা সায়েন্টিস্ট",
        "medianSalaryUSD": 112590,
        "medianSalaryINR": 9910000,
        "jobOutlookGrowth": "34% বৃদ্ধি",
        "keyIndustries": "প্রযুক্তি, ফিনান্স, কনসাল্টিং, ইন্স্যুরেন্স"
      },
      {
        "role": "অ্যানালিটিকস ম্যানেজার",
        "medianSalaryUSD": 101190,
        "medianSalaryINR": 8890000,
        "jobOutlookGrowth": "9% বৃদ্ধি",
        "keyIndustries": "ম্যানেজমেন্ট কনসাল্টিং, বিজনেস সার্ভিসেস"
      },
      {
        "role": "এআই স্ট্র্যাটেজিস্ট",
        "medianSalaryUSD": 140910,
        "medianSalaryINR": 12400000,
        "jobOutlookGrowth": "20% বৃদ্ধি",
        "keyIndustries": "সফটওয়্যার, আর অ্যান্ড ডি, ইঞ্জিনিয়ারিং, এআই-কেন্দ্রিক শিল্প"
      },
      {
        "role": "কম্পিউটার সিস্টেমস অ্যানালিস্ট",
        "medianSalaryUSD": 103790,
        "medianSalaryINR": 9130000,
        "jobOutlookGrowth": "9% বৃদ্ধি",
        "keyIndustries": "আইটি পরিষেবা, ফিনান্স, এন্টারপ্রাইজ ম্যানেজমেন্ট"
      },
      {
        "role": "ইনফরমেশন সিকিউরিটি অ্যানালিস্ট",
        "medianSalaryUSD": 124910,
        "medianSalaryINR": 11000000,
        "jobOutlookGrowth": "29% বৃদ্ধি",
        "keyIndustries": "আইটি, ফিনান্স, কনসাল্টিং, ম্যানেজমেন্ট সার্ভিসেস"
      }
    ],
    "keyInsights": [
      "বেতন শহর, নিয়োগকর্তা এবং অভিজ্ঞতার উপর নির্ভর করে পরিবর্তিত হয়। সিলিকন ভ্যালি, নিউ ইয়র্ক, এবং সিয়াটলের মতো উচ্চ-চাহিদার ক্ষেত্রগুলিতে উচ্চতর পারিশ্রমিক দেওয়া হয়।",
      "এমএস ইন বিজনেস অ্যানালিটিকস গ্র্যাজুয়েটরা প্রায়শই STEM OPT-এর জন্য যোগ্য হন, যা ৩ বছর পর্যন্ত পোস্ট-স্টাডি কাজের অনুমতি দেয়, কর্মজীবনের সম্ভাবনা এবং উপার্জনের সম্ভাবনা বাড়ায়।",
      "এই ভূমিকাগুলি আর্থিক পুরস্কার এবং শীর্ষস্থানীয় বৈশ্বিক সংস্থাগুলিতে অত্যাধুনিক প্রযুক্তি, এআই এবং ডেটা-চালিত কৌশলগত প্রকল্পগুলিতে কাজ করার সুযোগ উভয়ই প্রদান করে।"
    ]
  },
  "faq": [
    {
      "question": "ইউএসএ-তে এমএস ইন বিজনেস অ্যানালিটিকস কি মূল্যবান?",
      "answer": "হ্যাঁ, ইউএসএ-তে এমএস ইন বিজনেস অ্যানালিটিকস করা অত্যন্ত মূল্যবান। এই ডিগ্রি আপনাকে উন্নত ডেটা বিশ্লেষণ, পরিসংখ্যানগত মডেলিং এবং ব্যবসা কৌশলের দক্ষতা দিয়ে সজ্জিত করে, যা শিল্প জুড়ে উচ্চ চাহিদাযুক্ত। শক্তিশালী ক্যারিয়ারের সুযোগ এবং আকর্ষণীয় বেতনের সাথে মিলিত হলে, বিশেষ করে আন্তর্জাতিক শিক্ষার্থীদের জন্য STEM OPT সুবিধার কারণে, রিটার্ন অন ইনভেস্টমেন্ট উল্লেখযোগ্য।"
    },
    {
      "question": "বিজনেস অ্যানালিটিকসের জন্য ইউএসএ কি ভালো?",
      "answer": "অবশ্যই। ইউএসএ হলো প্রযুক্তি, ফিনান্স, স্বাস্থ্যসেবা এবং কনসাল্টিংয়ের জন্য একটি বৈশ্বিক কেন্দ্র, যা সবই ডেটা-চালিত সিদ্ধান্ত গ্রহণের উপর ব্যাপকভাবে নির্ভর করে। সিলিকন ভ্যালি, নিউ ইয়র্ক, এবং অস্টিনের মতো প্রধান প্রযুক্তি এবং ব্যবসা কেন্দ্রগুলিতে শীর্ষ বিশ্ববিদ্যালয়, শিল্প সহযোগিতা এবং ইন্টার্নশিপে অ্যাক্সেস সহ, শিক্ষার্থীরা একটি প্রতিযোগিতামূলক সুবিধা লাভ করে।"
    },
    {
      "question": "ইউএসএ-তে এমএস ইন বিজনেস অ্যানালিটিকসের জন্য সেরা বিশ্ববিদ্যালয় কোনটি?",
      "answer": "যদিও 'সেরা' বিশ্ববিদ্যালয় আপনার ক্যারিয়ারের লক্ষ্যগুলির উপর নির্ভর করে, কিছু শীর্ষ-র‍্যাঙ্কযুক্ত প্রোগ্রামের মধ্যে রয়েছে MIT Sloan School of Management, University of Texas at Austin (McCombs), Carnegie Mellon University (Heinz College), University of Southern California (Marshall), এবং Purdue University (Krannert)। প্রতিটিই প্রযুক্তিগত কঠোরতা থেকে শুরু করে শিল্প নেটওয়ার্কিং এবং প্লেসমেন্ট সুযোগ পর্যন্ত অনন্য শক্তি অফার করে।"
    },
    {
      "question": "ইউএসএ-তে এমএস ইন বিজনেস অ্যানালিটিকসের বেতন কত?",
      "answer": "ইউএসএ-তে এমএস ইন বিজনেস অ্যানালিটিকসের বেতন সাধারণত এন্ট্রি-লেভেলের ভূমিকার জন্য $৮৫,০০০ থেকে $১,২০,০০০ (₹৭৪.৮ লক্ষ – ₹১.০৬ কোটি) পর্যন্ত হয়ে থাকে। উচ্চ-চাহিদার অবস্থান বা প্রযুক্তি এবং ফিনান্সের মতো শীর্ষ শিল্পগুলির গ্র্যাজুয়েটরা $১,৩০,০০০ (₹১.১৪ কোটি) এর বেশি উপার্জন করতে পারে। অভিজ্ঞতা এবং উন্নত ভূমিকার সাথে, বেতন উল্লেখযোগ্যভাবে বাড়তে পারে, যা এই ডিগ্রিটিকে আর্থিকভাবে ফলপ্রসূ করে তোলে।"
    }
  ]
};


// Generic component for a Section Header
const SectionHeader = ({ title, subTitle, className = '' }) => (
  <h2 className={`text-2xl sm:text-3xl font-bold text-indigo-800 mb-4 pb-2 border-b border-indigo-100 ${className}`}>
    {title}
    {subTitle && <span className="block text-base font-normal text-gray-500 mt-1">{subTitle}</span>}
  </h2>
);

// Reusable component for displaying uniform data tables (University/Cost/Jobs)
const DataDisplayTable = ({ data, columns, title }) => {
  if (!data || data.length === 0) return <p className="text-gray-500">কোনো তথ্য নেই।</p>;

  // Dynamically map English keys to Bengali/relevant headers
  const getHeaderName = (key) => {
    switch (key) {
      case 'name': return 'বিশ্ববিদ্যালয়';
      case 'qsRanking2026': return 'QS র‍্যাঙ্কিং (২০২৬)';
      case 'tuitionFeeUSD': return 'বার্ষিক ফি (USD)';
      case 'tuitionFeeINR': return 'বার্ষিক ফি (INR)';
      case 'program': return 'প্রোগ্রামের নাম';
      case 'expenseCategory': return 'খরচের বিভাগ';
      case 'estimatedRangeUSD': return 'আনুমানিক খরচ (USD)';
      case 'estimatedRangeINR': return 'আনুমানিক খরচ (INR)';
      case 'role': return 'ভূমিকাসমূহ';
      case 'medianSalaryUSD': return 'গড় বেতন (USD)';
      case 'medianSalaryINR': return 'গড় বেতন (INR)';
      case 'jobOutlookGrowth': return 'চাকরির বৃদ্ধির পূর্বাভাস';
      case 'keyIndustries': return 'প্রধান শিল্প';
      default: return key;
    }
  };

  const keys = columns || Object.keys(data[0]);

  return (
    <div className="mt-4">
      {title && <h3 className="text-xl font-semibold text-indigo-700 mb-3">{title}</h3>}
      <div className="overflow-x-auto rounded-lg border border-indigo-300 shadow-md">
        <table className="min-w-full divide-y divide-indigo-300">
          <thead className="bg-indigo-50">
            <tr>
              {keys.map((key) => (
                <th
                  key={key}
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-indigo-700 sm:px-6"
                >
                  {getHeaderName(key)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-indigo-100 bg-white">
            {data.map((row, index) => (
              // Using indigo-100/50 for subtle alternating row colors based on user request (avoiding bright indigo-300)
              <tr key={index} className={index % 2 === 0 ? 'bg-indigo-50' : 'bg-white hover:bg-indigo-100'}>
                {keys.map((key) => (
                  <td
                    key={key}
                    className="whitespace-nowrap px-4 py-3 text-sm text-gray-800 sm:px-6"
                  >
                    {/* Format tuition fees for better readability */}
                    {key.includes('FeeINR') || key.includes('SalaryINR') || key.includes('FeeUSD') || key.includes('SalaryUSD')
                      ? (typeof row[key] === 'number' ? row[key].toLocaleString('en-US') : row[key])
                      : row[key]
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


// Main Application Component
const CollegeBlog = () => {
  const {
    summary,
    topUniversities,
    whyPursue,
    eligibility,
    otherUniversities,
    admissionProcess,
    costOfStudy,
    jobOpportunities,
    faq,
  } = data;
  
  // Custom function to render list sections
  const renderList = (items) => (
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {items.map((item, index) => (
        <li key={index}>
          {typeof item === 'string' 
            ? item 
            : (
              <>
                <strong className="text-indigo-600">{item.heading}:</strong> {item.details}
              </>
            )
          }
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
      
      {/* --- Header Section (Remains outside for full-width visual impact) --- */}
      <header className="text-center mb-8 p-6 bg-indigo-700 rounded-xl shadow-2xl max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          ইউএসএ-তে এমএস ইন বিজনেস অ্যানালিটিকস (MSBA) গাইড
        </h1>
        <p className="mt-2 text-indigo-100 text-sm">
          {summary.lastUpdated} | {summary.readTime}
        </p>
      </header>

      {/* --- SINGLE MAIN CARD WRAPPER for all content --- */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-200">
        
        <main className="divide-y divide-indigo-100 p-6 sm:p-8"> 
        
          {/* 1. Summary Block */}
          <section className="pb-6">
            <SectionHeader title="সংক্ষিপ্ত বিবরণ: কেন MSBA" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-indigo-50 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">চাকরির সৃষ্টির পূর্বাভাস (BLS)</p>
                <p className="text-xl font-bold text-indigo-700 mt-1">{summary.blsPrediction}</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">নিয়োগের হার (U.S. Employer)</p>
                <p className="text-xl font-bold text-indigo-700 mt-1">{summary.employerHiringRate}</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">পোস্ট-স্টাডি কাজের সুযোগ (STEM OPT)</p>
                <p className="text-xl font-bold text-indigo-700 mt-1">{summary.stemOptDuration}</p>
              </div>
            </div>
            <div className="mt-6 p-4 border border-indigo-100 rounded-lg bg-white shadow-inner">
                <p className="text-base text-gray-700">
                    <strong className="text-indigo-600">প্রাথমিক বেতন পরিসীমা (Starting Salary):</strong> 
                    {summary.startingSalaryRangeUSD} ({summary.startingSalaryRangeINR})
                </p>
                <p className="text-sm text-gray-500 italic mt-1">
                    (USD 1 = {summary.conversionRateUsed.split('(')[1].replace(')', '')})
                </p>
            </div>
          </section>

          {/* 2. Why Pursue Section */}
          <section className="pt-6">
            <SectionHeader title="কেন এমএস ইন বিজনেস অ্যানালিটিকস অনুসরণ করবেন?" />
            {renderList(whyPursue)}
          </section>

          {/* 3. Top Universities Table */}
          <section className="pt-6">
            <SectionHeader title="শীর্ষস্থানীয় বিশ্ববিদ্যালয়সমূহ (Top Universities)" subTitle="২০২৬ QS র‍্যাঙ্কিং এবং বার্ষিক টিউশন ফি অনুযায়ী" />
            <DataDisplayTable 
              data={topUniversities} 
              columns={['name', 'qsRanking2026', 'tuitionFeeUSD', 'tuitionFeeINR']} 
            />
          </section>

          {/* 4. Eligibility Section */}
          <section className="pt-6">
            <SectionHeader title={eligibility.title} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-xl font-semibold text-indigo-700 mb-3">একাডেমিক প্রয়োজনীয়তা</h3>
                    {renderList(eligibility.academic)}
                    
                    <h3 className="text-xl font-semibold text-indigo-700 mb-3 mt-6">কাজের অভিজ্ঞতা</h3>
                    {renderList(eligibility.workExperience)}
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-indigo-700 mb-3">প্রযুক্তিগত দক্ষতা</h3>
                    {renderList(eligibility.technical)}
                    
                    <h3 className="text-xl font-semibold text-indigo-700 mb-3 mt-6">মানসম্মত পরীক্ষা (Standardized Tests)</h3>
                    {renderList(eligibility.standardizedTests)}
                </div>
            </div>
             <div className="mt-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">অন্যান্য প্রয়োজনীয়তা (Documentation)</h3>
                {renderList(eligibility.additionalRequirements)}
            </div>
          </section>

          {/* 5. Cost of Study Section */}
          <section className="pt-6">
            <SectionHeader title={costOfStudy.title} subTitle={`(বিনিময় হার: ${costOfStudy.conversionRate})`} />
            <DataDisplayTable 
              data={costOfStudy.estimatedAnnualCosts} 
              columns={['expenseCategory', 'estimatedRangeUSD', 'estimatedRangeINR']}
              title="আনুমানিক বার্ষিক খরচ (Estimated Annual Costs)"
            />
             <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">{costOfStudy.lowFeeStrategy.title}</h3>
                {renderList(costOfStudy.lowFeeStrategy.points)}
            </div>
          </section>

          {/* 6. Job Opportunities Table */}
          <section className="pt-6">
            <SectionHeader title={jobOpportunities.title} subTitle={`উৎস: ${jobOpportunities.source}`} />
            <DataDisplayTable 
              data={jobOpportunities.roles} 
              columns={['role', 'medianSalaryUSD', 'medianSalaryINR', 'jobOutlookGrowth', 'keyIndustries']} 
            />
            
            <div className="mt-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">মূল অন্তর্দৃষ্টি (Key Insights)</h3>
                {renderList(jobOpportunities.keyInsights)}
            </div>
          </section>

          {/* 7. Admission Process */}
          <section className="pt-6">
            <SectionHeader title="ভর্তি প্রক্রিয়া (Admission Process)" subTitle="ধাপে ধাপে আপনার আবেদন গাইড" />
            <ol className="space-y-4">
              {admissionProcess.map((step) => (
                <li key={step.stepNumber} className="border-l-4 border-indigo-300 pl-4 py-1">
                  <strong className="text-indigo-600 text-lg">ধাপ {step.stepNumber}: {step.title}</strong>
                  <p className="text-gray-600 text-sm mt-1">{step.details}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* 8. Other Universities Table */}
          <section className="pt-6">
            <SectionHeader title="অন্যান্য উল্লেখযোগ্য বিশ্ববিদ্যালয়সমূহ" />
            <DataDisplayTable 
              data={otherUniversities} 
              columns={['name', 'program', 'qsRanking2026', 'tuitionFeeUSD', 'tuitionFeeINR']} 
            />
          </section>

          {/* 9. FAQ Section */}
          <section className="pt-6">
            <SectionHeader title="সাধারণ জিজ্ঞাসা (FAQ)" />
            <div className="space-y-4">
              {faq.map((item, index) => (
                <div key={index} className="border border-indigo-100 p-4 rounded-lg bg-indigo-50">
                  <strong className="block text-indigo-700 mb-1">Q: {item.question}</strong>
                  <p className="text-gray-700">A: {item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

      </div>
      {/* --- END SINGLE MAIN CARD WRAPPER --- */}

    <TestimonialScroll></TestimonialScroll>
    </div>
  );
};

export default CollegeBlog;
