// FAQAccordion.tsx
import type { FAQ } from '@/data/types';
import React from 'react';


interface FAQProps {
  faqs: FAQ[];
  heading: string;
}

const FaqAccordion: React.FC<FAQProps> = ({ faqs, heading }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2 mb-4">{heading}</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <details key={index} className="group border border-gray-300 rounded-lg p-4 bg-white shadow-sm transition duration-300 open:bg-orange-50">
            <summary className="flex justify-between items-center cursor-pointer font-semibold text-gray-800 hover:text-orange-600 transition duration-300">
              {faq.question}
              <span className="transform transition duration-300 group-open:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </summary>
            <p className="mt-2 text-gray-600 border-t pt-2">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;