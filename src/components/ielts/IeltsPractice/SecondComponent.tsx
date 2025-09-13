// src/components/IELTSComponents.jsx
import  { useState } from "react";

// IELTS Details Component
export const SecondComponent = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
      {/* Speaking Test Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">৪. IELTS প্র্যাকটিস টেস্ট: স্পিকিং</h2>
      <p className="text-gray-700 mb-4">
        IELTS স্পিকিং একটি স্ব-নিয়ন্ত্রিত কথোপকথন, যা Academic এবং General Training উভয় মডিউলের জন্য ১১ থেকে ১৪ মিনিটের
        মধ্যে হয় এবং এটি তিনটি ভাগে বিভক্ত।
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">পার্ট ১ (৪-৫ মিনিট):</span> টেস্ট চেক সহ পরিচিতি নিয়ে হয়। এখানে নির্দিষ্ট বিষয় যেমন আপনার পরিবার, পড়াশোনা, কাজ এবং
        ব্যক্তিগত আগ্রহ সম্পর্কে কিছু প্রশ্ন করা হয়।
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">পার্ট ২ (৩-৪ মিনিট):</span> আপনাকে একটি কার্ড দেওয়া হবে এবং একটি বিষয় নিয়ে ১ মিনিট প্রস্তুতি সময় পাবেন, তারপর
        এক থেকে দুই মিনিটের জন্য সে সম্পর্কে আপনার ব্যক্তিগত বিষয় নিয়ে বলতে হবে।
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold">পার্ট ৩ (৪-৫ মিনিট):</span> এটি পার্ট ২ থেকে আপনার বক্তব্যকে আরও বিস্তারিত ব্যাখ্যা এবং ১-এর সাধারণ বিষয় সম্পর্কিত
        প্রশ্ন করা হয়, যা আপনার পরীক্ষা নিয়ে প্রকাশ এবং আপনার ধারণার আলোচনার সুযোগ দেয়।
      </p>
      <p className="text-gray-700 mb-4">
        কথা বলা দক্ষতা, শব্দভাণ্ডার, ব্যাকরণ এবং উচ্চারণ উন্নত করা হয়। এর পাশাপাশি আপনার প্রস্তুতিকে আরও কার্যকর
        করে তোলে এবং আপনার কাঙ্খিত IELTS স্কোর অর্জন করতে সাহায্য করে।
      </p>
      <p className="text-gray-700 mb-4">
        IELTS প্র্যাকটিস খুবই গুরুত্বপূর্ণ কারণ এটি আপনাকে IELTS পরীক্ষার ফরম্যাটের মধ্যে দ্রুত অনুশীলন করতে সাহায্য করে,
        যা পরীক্ষার দিন আপনার সময় ব্যবস্থাপনা এবং আত্মবিশ্বাস বৃদ্ধি করে।
      </p>
      <a
        href="#"
        className="w-full text-center bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors block mb-8"
      >
        IELTS স্পিকিং প্র্যাকটিস টেস্টের জন্য এখানে ক্লিক করুন →
      </a>
    </div>
  );
};

// FAQ Component
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "IELTS এর দুটি প্রধান মডিউল কী কী?",
      a: "IELTS-এর দুটি প্রধান মডিউল হলো Academic এবং General Training।",
    },
    {
      q: "IELTS পরীক্ষাটি মোট কতটি অংশ নিয়ে গঠিত?",
      a: "IELTS পরীক্ষাটি মোট চারটি অংশ নিয়ে গঠিত: Reading, Writing, Listening, এবং Speaking।",
    },
    {
      q: "আমি কি স্পিকিং টেস্টের তারিখ ও সময় নিজে বেছে নিতে পারি?",
      a: "IELTS স্পিকিং টেস্ট সাধারণত লিখিত পরীক্ষার ৭ দিন আগে বা পরে অনুষ্ঠিত হয়। অনেক সময় আপনি আপনার সুবিধা মতো তারিখ ও সময় বেছে নিতে পারেন, তবে এটি কেন্দ্রের উপর নির্ভর করে।",
    },
    {
      q: "রিডিং টেস্টের সময়সীমা কত?",
      a: "IELTS রিডিং টেস্টের সময়সীমা ৬০ মিনিট।",
    },
    {
      q: "উভয় মডিউলে রাইটিং টেস্টের জন্য কত সময় দেওয়া হয়?",
      a: "IELTS রাইটিং টেস্টের জন্য উভয় মডিউলে (Academic এবং General Training) ৬০ মিনিট সময় দেওয়া হয়।",
    },
  ];

  return (
    <div className="bg-white p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">সাধারণ প্রশ্নাবলী (FAQ)</h2>
        {faqs.map((item, index) => (
          <div key={index} className="mb-4 border-b pb-2">
            <button
              className="w-full text-left font-medium text-gray-800 focus:outline-none flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {item.q}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && <p className="text-gray-700 mt-2">{item.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};
