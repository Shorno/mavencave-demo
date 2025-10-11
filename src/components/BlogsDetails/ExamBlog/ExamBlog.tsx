// MainApp.tsx
import React from 'react';
import data from '../../../data/ExamBlog.json'; // আপনার JSON ফাইলের নাম
 // types.ts থেকে ইন্টারফেস ইম্পোর্ট

import type { AppData } from '@/data/types';
import UniversityOverviewTable from './UniversityOverviewTable';
import UniversityDetailsTable from './UniversityDetailsTable';

import TestimonialScroll from '../TestimonialScroll';
import EligibilityCard from '../EligibilityCard';
import InfoSection from './InfoSection';
import FaqAccordion from './FaqAccordian';


// JSON ডেটাটিকে TypeScript ইন্টারফেসে কাস্ট করুন
const appData: AppData = data as AppData;

const ExamBlog: React.FC = () => {
  const {
    title,
    last_updated,
    read_time,
    introduction,
    top_universities_quick_overview,
    detailed_university_list,
    gre_alternatives,
    how_to_apply_without_gre,
    why_study_without_gre,
    conclusion,
    frequently_asked_questions,
  } = appData;

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8 bg-gray-50 min-h-screen">
      
      {/* 📰 Header & Summary */}
      <header className="text-center mb-10 p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-2">{title}</h1>
        <p className="text-sm text-gray-500 border-b pb-2 mb-4">
          সর্বশেষ আপডেট: {last_updated} | পড়ার সময়: {read_time}
        </p>
        <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-gray-800 rounded-md text-left">
          <p className="font-medium text-lg">{introduction.summary}</p>
          <p className="text-xs mt-2 italic">তথ্যসূত্র: {introduction.source_of_information}</p>
          <p className="text-sm mt-3 font-semibold">বিনিময় হার: {top_universities_quick_overview.conversion_rate}</p>
        </div>
      </header>

      <hr className="my-8 border-gray-300" />

      {/* 📊 Quick Overview Table */}
      <UniversityOverviewTable 
        data={top_universities_quick_overview.universities} 
        heading={top_universities_quick_overview.heading} 
      />

      <hr className="my-8 border-gray-300" />

      {/* 🏛️ Detailed University Table */}
      <UniversityDetailsTable 
        data={detailed_university_list.universities_details} 
        heading={detailed_university_list.heading} 
      />

      <hr className="my-8 border-gray-300" />

      {/* ℹ️ Alternatives, Steps & Benefits Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-10">
        <InfoSection 
          heading={gre_alternatives.heading} 
          items={gre_alternatives.alternatives} 
        />
        <InfoSection 
          heading={how_to_apply_without_gre.heading} 
          items={how_to_apply_without_gre.steps} 
          isNumbered={true}
        />
        <InfoSection 
          heading={why_study_without_gre.heading} 
          items={why_study_without_gre.reasons} 
        />
      </div>

      <hr className="my-8 border-gray-300" />

      {/* ❓ FAQs Section */}
      <FaqAccordion 
        faqs={frequently_asked_questions} 
        heading="❓ সচরাচর জিজ্ঞাস্য প্রশ্ন (FAQs)" 
      />

      {/* 📝 Conclusion */}
      <div className="p-6 bg-indigo-50 border-l-4 border-indigo-500 rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-bold text-indigo-800 mb-3">উপসংহার</h2>
        <p className="text-gray-700">{conclusion.summary}</p>
        <div className="mt-4">
          <p className="font-semibold text-gray-800">অন্যান্য চমৎকার বিকল্প:</p>
          <ul className="list-disc list-inside text-gray-600 ml-4">
            {conclusion.other_options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-center font-bold text-lg text-indigo-700">{conclusion.call_to_action}</p>
      </div>
      <div>
        <TestimonialScroll></TestimonialScroll>
      </div>
        <div className="md:w-1/3 mb-8 md:mb-0 order-1 md:order-2">
              <EligibilityCard /> 
            </div>


    </div>
  );
};

export default ExamBlog;