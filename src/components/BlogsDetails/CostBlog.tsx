import React from 'react';
import TestimonialScroll from './TestimonialScroll';

// JSON data structure (Retained in a constant for easy use in a single file)
const costData = {
  "lastUpdated": "অক্টোবর ৭, ২০২৫",
  "exchangeRate": {
    "AUD_to_INR": 59
  },
  "financialRequirement": {
    "firstYearLivingCost_AUD": 29710,
    "firstYearLivingCost_INR": "₹17.54 লক্ষ",
    "monthlyBudget_AUD": 2475,
    "monthlyBudget_INR": "₹1.46 লক্ষ",
    "note": "সিডনি ও মেলবোর্নের মতো প্রধান শহরগুলিতে খরচ বেশি হবে।"
  },
  "latestUpdates2025": [
    {
      "title": "আর্থিক প্রয়োজনীয়তা বৃদ্ধি",
      "details": "স্টুডেন্ট ভিসার জন্য প্রয়োজনীয় ন্যূনতম সঞ্চয়ের পরিমাণ বাড়ানো হয়েছে। এখন আপনাকে বার্ষিক জীবনযাত্রার খরচ বাবদ AU$29,710 (INR 17.5 লক্ষ) এর প্রমাণ দেখাতে হবে।"
    },
    {
      "title": "নতুন ভিসা নিয়ম ও ইংরেজি স্কোর",
      "details": "মার্চ ২০২৪ থেকে 'জেনুইন টেম্পোরারি এন্ট্র্যান্ট (GTE)' এর পরিবর্তে 'জেনুইন স্টুডেন্ট (GS)' শর্তটি চালু। IELTS স্কোর স্টুডেন্ট ভিসার জন্য ৬.০ ব্যান্ড (আগে ৫.৫) এবং টেম্পোরারি গ্র্যাজুয়েট ভিসার জন্য ৬.৫ ব্যান্ড (আগে ৬.০) প্রয়োজন।"
    },
    {
      "title": "পোস্ট-স্টাডি কাজের অধিকার (ভারতীয় শিক্ষার্থীদের জন্য)",
      "details": "অস্ট্রেলিয়া-ভারত ECTA চুক্তির অধীনে বর্ধিত পোস্ট-স্টাডি ওয়ার্ক ভিসা: ব্যাচেলর ডিগ্রির জন্য ২ বছর পর্যন্ত, মাস্টার্সের জন্য ৩ বছর এবং পিএইচডি-এর জন্য ৪ বছর পর্যন্ত।"
    }
  ],
  "monthlyBudgetEstimate": {
    "title": "মাসিক বাজেট পরিসীমা (একক শিক্ষার্থী)",
    "currencyUsed": "AUD & INR",
    "budgetTable": [
      {
        "category": "বাসস্থান (শেয়ার্ড)",
        "cost_AUD": "$900 - $1,900",
        "cost_INR": "₹53,100 - ₹1,12,100"
      },
      {
        "category": "খাদ্য ও মুদির জিনিস",
        "cost_AUD": "$560 - $1,120",
        "cost_INR": "₹33,000 - ₹66,000"
      },
      {
        "category": "ইউটিলিটি (গ্যাস, বিদ্যুৎ, জল)",
        "cost_AUD": "$140 - $280",
        "cost_INR": "₹8,200 - ₹16,500"
      },
      {
        "category": "ফোন ও ইন্টারনেট",
        "cost_AUD": "$70 - $120",
        "cost_INR": "₹4,100 - ₹7,100"
      },
      {
        "category": "গণপরিবহন",
        "cost_AUD": "$80 - $220",
        "cost_INR": "₹4,700 - ₹13,000"
      },
      {
        "category": "স্বাস্থ্যসেবা (OSHC গড়)",
        "cost_AUD": "$50",
        "cost_INR": "₹2,950"
      },
      {
        "category": "ব্যক্তিগত যত্ম ও বিনোদন",
        "cost_AUD": "$320 - $600",
        "cost_INR": "₹18,900 - ₹35,400"
      },
      {
        "category": "মোট আনুমানিক মাসিক খরচ",
        "cost_AUD": "$2,120 - $4,290",
        "cost_INR": "₹1,25,000 - ₹2,53,000"
      }
    ]
  },
  "accommodationOptions": {
    "title": "বাসস্থান/থাকার খরচ (সাপ্তাহিক)",
    "options": [
      {
        "type": "শেয়ার্ড রেন্টাল (প্রতি জন)",
        "cost_AUD_weekly": "$85 – $215",
        "description": "সবচেয়ে সাধারণ এবং সাশ্রয়ী পছন্দ। সিডনিতে সবচেয়ে ব্যয়বহুল।"
      },
      {
        "type": "অন-ক্যাম্পাস আবাসন",
        "cost_AUD_weekly": "$90 – $280",
        "description": "সুবিধার জন্য ভালো, তবে সীমিত প্রাপ্যতা।"
      },
      {
        "type": "প্রাইভেট রেন্টাল (১-বেডরুম)",
        "cost_AUD_weekly": "$185 – $440",
        "description": "স্বাধীনতা দেয়, তবে বিশেষ করে সিডনি বা মেলবোর্নে বেশ ব্যয়বহুল।"
      },
      {
        "type": "হোমস্টে",
        "cost_AUD_weekly": "$235 – $325",
        "description": "স্থানীয় পরিবারের সাথে থাকা; প্রায়শই খাবার/ইউটিলিটি অন্তর্ভুক্ত থাকে।"
      },
      {
        "type": "পারপাস-বিল্ট স্টুডেন্ট অ্যাকোমোডেশন (PBSA)",
        "cost_AUD_weekly": "$150 – $600",
        "description": "আধুনিক সুযোগ-সুবিধাসম্পন্ন সুরক্ষিত আবাসন।"
      }
    ]
  },
  "transportation": {
    "title": "পরিবহন",
    "averageCost_AUD_weekly": "$30 – $70",
    "details": [
      "গণপরিবহন: সবচেয়ে সাশ্রয়ী ও বহুল ব্যবহৃত।",
      "ছাত্র ডিসকাউন্ট: অনেক রাজ্য ছাত্র ভ্রমণ কার্ডে ৪০-৫০% ছাড় দেয়।"
    ]
  },
  "foodAndGroceries": {
    "title": "খাদ্য ও মুদির খরচ",
    "averageCost_AUD_weekly": "$80 – $200",
    "details": [
      "বাড়িতে রান্না: সবচেয়ে সস্তা বিকল্প (Aldi, Woolworths, Coles-এর মতো সুপারমার্কেট ব্যবহার করুন)।",
      "বাইরে খাওয়া: রেস্তোরাঁয় একবেলার খাবারের খরচ AUD 15–25।"
    ]
  },
  "tuitionFees": {
    "title": "অস্ট্রেলিয়ায় পড়াশোনার খরচ (টিউশন ফি)",
    "annualFeeRange": [
      {
        "degreeLevel": "ব্যাচেলর ডিগ্রি",
        "cost_AUD_annual": "$22,000 - $47,000",
        "cost_INR_annual": "₹13,00,000 - ₹27,70,000"
      },
      {
        "degreeLevel": "মাস্টার্স ডিগ্রি",
        "cost_AUD_annual": "$24,000 - $52,000",
        "cost_INR_annual": "₹14,15,000 - ₹30,70,000"
      },
      {
        "degreeLevel": "ডক্টরাল ডিগ্রি (PhD)",
        "cost_AUD_annual": "$22,000 - $45,000",
        "cost_INR_annual": "₹13,00,000 - ₹26,55,000"
      }
    ],
    "topUniversityFees2025": [
      {
        "university": "ইউনিভার্সিটি অফ মেলবোর্ন",
        "cost_AUD_annual": "AU$65,000",
        "cost_INR_annual": "₹38.3 লক্ষ"
      },
      {
        "university": "ইউনিভার্সিটি অফ সিডনি",
        "cost_AUD_annual": "AU$62,000",
        "cost_INR_annual": "₹36.6 লক্ষ"
      },
      {
        "university": "ইউনিভার্সিটি অফ নিউ সাউথ ওয়েলস (UNSW)",
        "cost_AUD_annual": "AU$60,465",
        "cost_INR_annual": "₹35.5 লক্ষ"
      },
      {
        "university": "অস্ট্রেলিয়ান ন্যাশনাল ইউনিভার্সিটি (ANU)",
        "cost_AUD_annual": "AU$48,000",
        "cost_INR_annual": "₹28.3 লক্ষ"
      },
      {
        "university": "মোনাশ ইউনিভার্সিটি",
        "cost_AUD_annual": "AU$46,000",
        "cost_INR_annual": "₹27.1 লক্ষ"
      }
    ]
  },
  "savingTips": {
    "title": "জীবনযাত্রার খরচ বাঁচানোর টিপস",
    "tips": [
      "শেয়ার্ড আবাসন ও শহরতলির দিকে থাকা: ভাড়া ২০-৩০% কমাতে পারে।",
      "গণপরিবহন ব্যবহার: সাপ্তাহিক ছাত্র পাসে প্রতি মাসে AU$800 এর বেশি সাশ্রয় সম্ভব।",
      "বাড়িতে বেশি রান্না করুন: নিয়মিত বাইরে খাওয়ার চেয়ে সস্তা, বাজেট সুপারমার্কেট ব্যবহার করুন।",
      "খণ্ডকালীন চাকরি: প্রতি ঘন্টায় AU$23-এর বেশি মজুরিতে কাজ করে মৌলিক খরচ মেটান।",
      "ছাত্র ডিসকাউন্ট ব্যবহার: UNiDAYS-এর মতো পরিষেবা ব্যবহার করে ১০-২৫% ছাড় পান।",
      "ইউটিলিটি ব্যবহারে স্মার্ট হন: সাধারণ অভ্যাসগুলি (যেমন আলো বন্ধ করা) মাসিক AU$20-30 সাশ্রয় করতে পারে।",
      "থ্রিফটিং: সেকেন্ড হ্যান্ড স্টোর বা থ্রিফটিং ব্যবহার করে সাশ্রয়ীভাবে জিনিসপত্র কিনুন।",
      "শিক্ষায় সাশ্রয়: পাবলিক বিশ্ববিদ্যালয় বা বৃত্তি (scholarships) ব্যবহার করে টিউশন ফি কমান।"
    ]
  }
};

// Generic component for a Section Block (removed card styling to allow for single container)
const InfoCard = ({ title, children, className = '' }) => (
  // Applying padding and a visual separator for internal sections
  <section className={`p-6 border-t border-indigo-100 first:border-t-0 ${className}`}> 
    <h2 className="text-2xl font-bold text-indigo-700 mb-4 border-b pb-2 border-indigo-300">
      {title}
    </h2>
    {children}
  </section>
);

// Reusable component for displaying uniform data tables (University/Budget/Accommodation)
const DataDisplayTable = ({ data, columns }) => {
  if (!data || data.length === 0) return <p className="text-gray-500">কোনো তথ্য নেই।</p>;

  // Extract keys from the first object to use as column headers if not provided
  const keys = columns || Object.keys(data[0]);

  return (
    <div className="overflow-x-auto rounded-lg border border-indigo-300 shadow-md">
      <table className="min-w-full divide-y divide-indigo-200">
        <thead className="bg-indigo-50">
          <tr>
            {keys.map((key) => (
              <th
                key={key}
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-indigo-700 sm:px-6"
              >
                {/* Dynamically mapping object keys to Bengali headers */}
                {key === 'category' && 'খরচের শ্রেণী'}
                {key === 'cost_AUD' && 'AUD-এ খরচ'}
                {key === 'cost_INR' && 'INR-এ খরচ'}
                {key === 'degreeLevel' && 'ডিগ্রির স্তর'}
                {key === 'cost_AUD_annual' && 'AUD-এ গড় বার্ষিক ফি'}
                {key === 'cost_INR_annual' && 'INR-এ গড় বার্ষিক ফি'}
                {key === 'university' && 'বিশ্ববিদ্যালয়'}
                {key === 'type' && 'আবাসন বিকল্প'}
                {key === 'cost_AUD_weekly' && 'AUD-এ খরচ (সাপ্তাহিক)'}
                {key === 'description' && 'বর্ণনা'}
                {/* Fallback for safety */}
                {(!['category', 'cost_AUD', 'cost_INR', 'degreeLevel', 'cost_AUD_annual', 'cost_INR_annual', 'university', 'type', 'cost_AUD_weekly', 'description'].includes(key)) && key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-indigo-100 bg-white">
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-indigo-50/50'}>
              {keys.map((key) => (
                <td
                  key={key}
                  className="whitespace-nowrap px-4 py-3 text-sm text-gray-800 sm:px-6"
                >
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


// Main Application Component
const CostBlog = () => {
  const {
    lastUpdated,
    exchangeRate,
    financialRequirement,
    latestUpdates2025,
    monthlyBudgetEstimate,
    accommodationOptions,
    tuitionFees,
    transportation,
    foodAndGroceries,
    savingTips,
  } = costData;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
      
    

      {/* --- SINGLE MAIN CARD WRAPPER for all content --- */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl border border-indigo-300">
        
        <main className="divide-y divide-indigo-200"> {/* Use divide-y for clear section separation */}
        
          {/* --- Financial Requirement & Updates (Grid inside single InfoCard) --- */}
          <section className="">
              
              {/* Financial Summary Block */}
              <div className=" p-6 rounded-lg shadow-inner">
                 <h1 className="text-4xl sm:text-5xl font-extrabold text-grey-800">
          অস্ট্রেলিয়ায় জীবনযাত্রার ব্যয় (২০২৫-২৬)
        </h1>
        <p className="mt-2 text-grey-800 text-sm">
          সর্বশেষ হালনাগাদ: {lastUpdated} | বিনিময় হার: ১ AUD = {exchangeRate.AUD_to_INR} INR
        </p>
                <h2 className="text-xl font-bold text-indigo-700 mb-3 border-b pb-2 border-indigo-300">
                  আর্থিক প্রয়োজনীয়তা (সরকার নির্ধারিত)
                </h2>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-lg text-indigo-600">প্রথম বছরের ন্যূনতম খরচ:</span>
                  <br/>
                  <span className="block text-xl font-mono mt-1">
                    AU${financialRequirement.firstYearLivingCost_AUD.toLocaleString('en-AU')} ({financialRequirement.firstYearLivingCost_INR})
                  </span>
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold text-lg text-indigo-600">মাসিক আনুমানিক বাজেট:</span>
                  <br/>
                  <span className="block text-xl font-mono mt-1">
                    AU${financialRequirement.monthlyBudget_AUD.toLocaleString('en-AU')} ({financialRequirement.monthlyBudget_INR})
                  </span>
                </p>
                <p className="text-sm text-gray-500 italic border-t pt-2 mt-4">
                  দ্রষ্টব্য: {financialRequirement.note}
                </p>
              </div>

              {/* Latest Updates Block */}
              <div className="lg:col-span-2 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-indigo-700 mb-4 border-b pb-2 border-indigo-300">
                  শিক্ষার্থীদের জন্য সর্বশেষ আপডেট (২০২৫)
                </h2>
                <ul className="space-y-3">
                  {latestUpdates2025.map((update, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-indigo-500 font-bold mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div>
                        <strong className="text-indigo-600">{update.title}:</strong> {update.details}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
          </section>

          {/* --- Monthly Budget Table --- */}
          <InfoCard title={monthlyBudgetEstimate.title}>
            <DataDisplayTable
              data={monthlyBudgetEstimate.budgetTable}
              columns={['category', 'cost_AUD', 'cost_INR']}
            />
          </InfoCard>
          
          {/* --- Accommodation Table --- */}
          <InfoCard title={accommodationOptions.title}>
            <p className="text-sm text-gray-500 mb-4">
              (ব্যবহৃত বিনিময় হার: ১ AUD = {exchangeRate.AUD_to_INR} INR)
            </p>
            <DataDisplayTable
              data={accommodationOptions.options}
              columns={['type', 'cost_AUD_weekly', 'description']}
            />
          </InfoCard>

          {/* --- Transportation & Food Summary --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <section>
                  <h2 className="text-2xl font-bold text-indigo-700 mb-4 border-b pb-2 border-indigo-300">
                      {transportation.title}
                  </h2>
                  <p className="mb-2 text-lg text-gray-700 font-medium">
                      গড় সাপ্তাহিক খরচ: <span className='text-indigo-600 font-semibold'>{transportation.averageCost_AUD_weekly} AUD</span>
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {transportation.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                      ))}
                      <li className='text-sm italic'>অন্যান্য বিকল্প: সাইকেল (সাশ্রয়ী), গাড়ি/ট্যাক্সি/রাইডশেয়ার (ব্যয়বহুল)।</li>
                  </ul>
              </section>

              <section>
                  <h2 className="text-2xl font-bold text-indigo-700 mb-4 border-b pb-2 border-indigo-300">
                      {foodAndGroceries.title}
                  </h2>
                  <p className="mb-2 text-lg text-gray-700 font-medium">
                      গড় সাপ্তাহিক খরচ: <span className='text-indigo-600 font-semibold'>{foodAndGroceries.averageCost_AUD_weekly} AUD</span>
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {foodAndGroceries.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                      ))}
                      <li className='text-sm italic'>স্বাস্থ্যসেবা (OSHC): প্রতি মাসে AU$50, ভিসার জন্য বাধ্যতামূলক।</li>
                  </ul>
              </section>
          </div>


          {/* --- Tuition Fees Section --- */}
          <section className="space-y-8 p-6">
              <h2 className="text-3xl font-bold text-indigo-800 text-center border-b-2 border-indigo-300 pb-3">
                  {tuitionFees.title}
              </h2>
              
              {/* 1. Annual Fee Range Table */}
              <InfoCard title="ডিগ্রি অনুযায়ী গড় বার্ষিক ফি" className="p-0">
                <DataDisplayTable
                  data={tuitionFees.annualFeeRange}
                  columns={['degreeLevel', 'cost_AUD_annual', 'cost_INR_annual']}
                />
              </InfoCard>

              {/* 2. Top University Fees Table */}
              <InfoCard title="শীর্ষস্থানীয় বিশ্ববিদ্যালয়গুলির গড় বার্ষিক টিউশন ফি (২০২৫)" className="p-0">
                <DataDisplayTable
                  data={tuitionFees.topUniversityFees2025}
                  columns={['university', 'cost_AUD_annual', 'cost_INR_annual']}
                />
              </InfoCard>
          </section>


          {/* --- Saving Tips Section --- */}
          <InfoCard title={savingTips.title} className="bg-indigo-50 rounded-b-xl">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-5">
              {savingTips.tips.map((tip, index) => (
                <li key={index} className="text-gray-700">
                  {tip}
                </li>
              ))}
            </ul>
            <p className="text-center mt-6 text-indigo-600 font-semibold">
              পরিকল্পনা এবং স্মার্ট বাজেট তৈরি করাই হলো বিদেশে থাকাকালীন আপনার আর্থিক অবস্থা স্থিতিশীল রাখার মূল চাবিকাঠি।
            </p>
          </InfoCard>
        </main>

      </div>
      <TestimonialScroll></TestimonialScroll>

    </div>
  );
};

export default CostBlog;
