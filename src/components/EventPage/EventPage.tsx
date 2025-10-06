
import React, { useState } from "react";
import UpcomingEvent from "./UpcomingEvent";
import image1 from "../../../public/images/Bristy/Event455318Img-min-1024x615.jpg"

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface Speaker {
  name: string;
  title: string;
  imageUrl: string;
}

const EventPage: React.FC = () => {
  // FAQ accordion state
  const [activeFaqId, setActiveFaqId] = useState<number | null>(1);

  // Data for features section
  const features = [
    {
      title: "বেস্ট রেটেড স্পিকার",
      description:
        "বিশ্বসেরা বিশ্ববিদ্যালয়ের অভিজ্ঞ শিক্ষাবিদ, গবেষক ও বিশেষজ্ঞদের অভিজ্ঞতা থেকে শুরু করে নির্ভুল শিক্ষকের সঙ্গে শিক্ষা।",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-12 h-12 text-[#7C3AED] mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M19 19H5V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          <rect x="4" y="2" width="16" height="4" rx="2" ry="2" />
          <path d="M12 11h.01" />
          <path d="M10 15h4" />
        </svg>
      ),
    },
    {
      title: "মানসম্মত কনটেন্ট",
      description:
        "আমাদের অভিজ্ঞ স্পিকারের তৈরি করা কনটেন্টএর সব থেকে সেরা ও কার্যকর অংশ আপনার জন্য অপেক্ষা করছে।",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-[#7C3AED] mb-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "নেটওয়ার্কিং এর সুযোগ",
      description:
        "আপনার হাতে থাকবে বিদেশে উচ্চশিক্ষা আমাদের শিক্ষাবিদ ও বিশেষজ্ঞদের সঙ্গে পরিচিত হওয়া।",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-[#7C3AED] mb-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m8 10 2 2 2-2m4 0 2 2 2-2" />
        </svg>
      ),
    },
  ];

  // Data for speakers section
  const speakers: Speaker[] = [
    {
      name: "এলমা নাওয়ার",
      title: "আন্তর্জাতিক ডিজাইনার, যুক্তরাজ্য থেকে পিএইচডি গবেষক",
      imageUrl: "https://i.ibb.co.com/dwvbwLXZ/employee1.png",
    },
    {
      name: "আরিহান রহমান",
      title:
        "গবেষক, ইউনিভার্সিটি অফ ইলিনয়, ইন্টারন্যাশনাল কনফারেন্সের নতুন তারকা গবেষক",
      imageUrl: "https://i.ibb.co.com/gZwsdm0S/employee2.png",
    },
    {
      name: "সাবিহা চৌধুরী",
      title:
        "সিনিয়র ফেলো, ক্যানাডা থেকে ইন্টারন্যাশনাল স্টাডিজ ও ম্যানেজমেন্টের বিশেষজ্ঞ",
      imageUrl: "https://i.ibb.co.com/KpZQNwnn/expert1.jpg",
    },
    {
      name: "নাফিস আহমেদ",
      title: "ছাত্র-ছাত্রী, ক্যানাডা থেকে গ্লোবাল বিজনেস ও ম্যানেজমেন্ট",
      imageUrl: "https://i.ibb.co.com/KzN7sWyF/expert3.jpg",
    },
  ];

  // FAQ data
  const faqs: FaqItem[] = [
    {
      id: 1,
      question: "এই সব ইভেন্ট কি বিনামূল্যে?",
      answer:
        "ছোট থেকে এ আমাদের লক্ষ্য। যারা বিশ্বাস করি, কেরিয়ারে তারা শীর্ষে থাকতে পারে, তাদের সুযোগ থাকা উচিত। অন্য কোথাও খরচ হওয়ার প্রয়োজন নেই। এটি আমাদের একমাত্র আশা। এই সব ইভেন্ট সম্পূর্ণ বিনামূল্যে।",
    },
    {
      id: 2,
      question: "আমি কিভাবে ইভেন্টটিতে যোগ দেবো?",
      answer:
        'ইভেন্টটিতে যোগ দেওয়ার জন্য, আপনাকে কেবল "আগত ইভেন্টগুলো দেখুন" বাটনে ক্লিক করতে হবে এবং রেজিস্ট্রেশন ফর্মটি পূরণ করতে হবে। রেজিস্ট্রেশন সম্পন্ন হলে ইভেন্টের লিংক আপনার ইমেইলে পাঠিয়ে দেওয়া হবে।',
    },
    {
      id: 3,
      question: "আমি কিভাবে কোনো ইভেন্টের সিডওয়ার/অ্যাক্সেস পাব?",
      answer:
        "লাইভ ইভেন্ট শেষ হওয়ার ৭২ ঘন্টার মধ্যে সমস্ত নিবন্ধিত অংশগ্রহণকারীদের ইভেন্টের রেকর্ডিং এবং অন্য কোনো প্রাসঙ্গিক সিডওয়ার/অ্যাক্সেস লিংক ইমেলের মাধ্যমে সরবরাহ করা হবে।",
    },
  ];

  const toggleFaq = (id: number) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Header/Hero */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="lg:pr-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              বিদেশি পড়তে আগ্রহী শিক্ষার্থীদের উদ্দেশ্যে করা লাইভ ইভেন্ট।
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              বিশ্বজুড়ে ৩০+ অভিজ্ঞ স্পিকারের কথা শুনুন
            </p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-full bg-red-100 text-red-600 font-bold text-xs shadow-lg">
                  LIVE
                </span>
                <p className="text-gray-700">আমাদের শীর্ষস্থানীয় স্পিকারদের কথা শুনুন</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-full bg-yellow-100 text-yellow-600 font-bold text-xs shadow-lg">
                  GIFT
                </span>
                <p className="text-gray-700">অংশগ্রহণকারীদের জন্য থাকছে এক্সক্লুসিভ কিটবক্স</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-full bg-green-100 text-green-600 font-bold text-xs shadow-lg">
                  FREE
                </span>
                <p className="text-gray-700">সকল প্রশ্নের উত্তর পাবেন ফ্রিতে!</p>
              </div>
            </div>

            <button className="w-full sm:w-auto px-10 py-4 text-lg font-semibold text-white bg-[#7C3AED] rounded-lg shadow-lg hover:bg-[#6D28D9] transition duration-300 transform hover:scale-[1.02]">
              আগত ইভেন্টগুলো দেখুন
            </button>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-80 sm:h-96 lg:h-[450px] overflow-hidden rounded-xl shadow-2xl">
            <img
              src={image1}
              alt="Speaker presenting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10" />
          </div>
        </div>
      </section>
<UpcomingEvent></UpcomingEvent>
      {/* Why Attend */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-16">
            কেন আপনার আমাদের ইভেন্টগুলোতে অংশগ্রহণ করা উচিত?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg transition hover:shadow-xl"
              >
                {f.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-16">
            আমাদের পূর্ববর্তী স্পিকারদের সাথে পরিচিত হন!
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {speakers.map((s, idx) => (
              <div
                key={idx}
                className="relative min-h-64 rounded-xl overflow-hidden shadow-lg group"
              >
                <img
                  src={s.imageUrl}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 flex flex-col justify-end">
                  <h3 className="text-white text-lg font-bold">{s.name}</h3>
                  <p className="text-white text-sm opacity-90">{s.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-12">
            মনে প্রশ্ন এসেছে? আপনি একা নন। নিচের প্রশ্নগুলো থেকে বেছে নিন আপনার উত্তর!
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="rounded-xl shadow-md bg-[#EDE9FE]">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex justify-between items-center w-full p-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    fill="none"
                    className={`w-6 h-6 text-[#7C3AED] transition-transform duration-300 ${
                      activeFaqId === faq.id ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
                {activeFaqId === faq.id && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 border-t border-[#DCD3FC] pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventPage;

