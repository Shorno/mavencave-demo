import React, { useState } from 'react';
import bannerImage from "../../public/images/Bristy/getting-bit-after-class-help-shot-two-young-students-studying-together-classroom_590464-19534.avif";

// ======= Banner Section =======
interface Exam {
  name: string;
  route: string;
}

const Banner: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const exams: Exam[] = [
    { name: 'IELTS', route: 'ielts' },
    { name: 'TOEFL', route: 'toefl' },
    { name: 'PTE', route: 'pte' },
    { name: 'GRE', route: 'gre' },
    { name: 'GMAT', route: 'gmat' },
    { name: 'SAT', route: 'sat' },
  ];

  const handleExamSelect = (exam: Exam) => {
    setSelectedExam(exam);
    setIsDropdownOpen(false);
    console.log(`Navigating to route: /exams/${exam.route}`);
  };

  return (
    <div className="bg-[#e8e7fa] py-16 px-4 sm:px-8 font-sans antialiased">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center rounded-3xl overflow-hidden">
        <div className="md:w-1/2 p-6 md:p-12 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-[#4446a8] mb-4 leading-tight">
            বিদেশে উচ্চ শিক্ষার জন্য শীর্ষ <br className="hidden md:block" /> পরীক্ষাগুলো যাচাই করুন
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
            IELTS, GRE, GMAT, SAT এবং আরও অনেক কিছুর সমন্বয়ে আপনার প্রয়োজনীয় সব কিছু এখানে রয়েছে।
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative w-full sm:w-auto">
              <button
                className="bg-white text-gray-700 px-6 py-3 rounded-full border border-gray-300 shadow-sm flex items-center justify-between w-full sm:w-56 text-left"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedExam ? selectedExam.name : "সব পরীক্ষা"}
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
                  {exams.map((exam) => (
                    <button
                      key={exam.route}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                      onClick={() => handleExamSelect(exam)}
                    >
                      {exam.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="bg-[#4446a8] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#393b90] transition-colors duration-300 w-full sm:w-auto">
              পরীক্ষা সম্পর্কে বিস্তারিত দেখুন
            </button>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2">
          <img 
            src={bannerImage} 
            alt="Two smiling students with backpacks" 
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

// ======= FAQ Section =======
interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqItems: FAQItem[] = [
    { question: "বিদেশে উচ্চশিক্ষার জন্য কী কী পরীক্ষা দিতে হয়?", answer: "IELTS, TOEFL, Duolingo English Test - এগুলো ইংরেজি ভাষা দক্ষতার যাচাইয়ের জন্য নেওয়া হয়। এছাড়া GMAT (ব্যবসা প্রশাসন), GRE (সাধারণ গ্রাজুয়েট), SAT (সাধারণ বিশ্ববিদ্যালয় ভর্তি) পরীক্ষাসমূহ বিভিন্ন দেশে ভর্তির জন্য প্রয়োজন হয়।" },
    { question: "IELTS পরীক্ষার জন্য কত খরচ হয়?", answer: "IELTS পরীক্ষার খরচ নির্ভর করে আপনি কোন দেশে পরীক্ষা দিচ্ছেন এবং কোন ধরনের পরীক্ষা (Academic বা General) দিচ্ছেন তার উপর। সাধারণত, এটি প্রায় ৳21,500 এর কাছাকাছি থাকে।" },
    { question: "IELTS, TOEFL এবং Duolingo এর মধ্যে পার্থক্য কী?", answer: "IELTS এবং TOEFL হলো ঐতিহ্যবাহী পরীক্ষা যা অফলাইন বা অনলাইনে দেওয়া যায়। অন্যদিকে, Duolingo English Test একটি সম্পূর্ণ অনলাইন এবং সংক্ষিপ্ত পরীক্ষা যা দ্রুত ফলাফল দেয়।" },
    { question: "কত ব্যান্ড পেলে ভালো বিশ্ববিদ্যালয়ে ভর্তি হওয়া সম্ভব?", answer: "সাধারণত, ভালো বিশ্ববিদ্যালয়ে ভর্তির জন্য IELTS-এ 6.5 থেকে 7.5 এর মধ্যে ব্যান্ড স্কোর প্রয়োজন হয়। তবে, কিছু টপ-ইউনিভার্সিটিতে এর চেয়ে বেশি স্কোরও চাইতে পারে।" },
    { question: "আমি কীভাবে পরীক্ষার জন্য প্রস্তুতি শুরু করব?", answer: "প্রস্তুতি শুরু করার জন্য প্রথমে আপনার বর্তমান দক্ষতা যাচাই করুন। এরপর Mavencave-এর মতো প্ল্যাটফর্মে ভর্তি হয়ে বা আমাদের মক টেস্টগুলো দিয়ে আপনার দুর্বলতা খুঁজে বের করুন এবং নির্দিষ্ট পরিকল্পনা অনুযায়ী প্রস্তুতি নিন।" },
    { question: "আমি কি একাধিকবার IELTS দিতে পারব কি?", answer: "হ্যাঁ, IELTS পরীক্ষা একাধিকবার দেওয়া যায়। আপনার স্কোর উন্নত করার জন্য আপনি যতবার খুশি ততবার পরীক্ষা দিতে পারেন।" },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-8 font-sans antialiased">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#4446a8] mb-4">
          মনে প্রশ্ন এসেছে? আপনি একা নন! নিচের প্রশ্নগুলো থেকে বেছে নিন আপনার <br className="hidden md:block" /> উত্তর! অথবা আমাদের সাথে যোগাযোগ করুন!
        </h2>
        <div className="space-y-4 text-left">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-[#e8e7fa] rounded-lg shadow-md transition-all duration-300">
              <button
                className="w-full p-4 flex justify-between items-center focus:outline-none"
                onClick={() => handleToggle(index)}
              >
                <p className="text-gray-700 text-sm md:text-base font-semibold">{item.question}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-[#4446a8] flex-shrink-0 transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600 border-t border-gray-300">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ======= Popular Exams Section =======
interface PopularExam {
  country: string;
  title: string;
  description: string;
  buttonText: string;
}

const PopularExams: React.FC = () => {
  const exams: PopularExam[] = [
    { country: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg', title: 'IELTS', description: 'IELTS একটি আন্তর্জাতিক স্বীকৃত ইংরেজি ভাষার দক্ষতা পরীক্ষা যা পড়া, লেখা, শোনা, এবং বলার দক্ষতা যাচাই করে। কানাডা, ভারত, অস্ট্রেলিয়া ও নিউজিল্যান্ডে উচ্চশিক্ষার জন্য এটি প্রয়োজন হয়।', buttonText: 'শুরু করুন' },
    { country: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg', title: 'SAT', description: 'পূর্ববর্তী বছরগুলির প্রশ্নপত্র অভ্যাস করে আপনার স্কোর উন্নত করতে পারেন। এটি উচ্চশিক্ষার জন্য একটি গুরুত্বপূর্ণ প্রস্তুতি ধাপ।', buttonText: 'শুরু করুন' },
    { country: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg', title: 'TOEFL', description: 'TOEFL একটি আন্তর্জাতিক ইংরেজি ভাষা দক্ষতার পরীক্ষা যা বিশ্ববিদ্যালয়গুলোতে ভর্তি, বিশেষ করে যুক্তরাষ্ট্র এবং কানাডাতে, সাধারণত প্রয়োজন হয়।', buttonText: 'শুরু করুন' },
    { country: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg', title: 'GRE', description: 'আর্টস ও বিজ্ঞানে গ্র্যাজুয়েট প্রোগ্রাম-এর জন্য একটি প্রয়োজনীয় পরীক্ষা, যা লজিক, কোয়ান্টিটেটিভ, অ্যানালাইটিকাল ও ভার্বাল রিজনিং দক্ষতা যাচাই করে।', buttonText: 'শুরু করুন' },
    { country: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg', title: 'GMAT', description: 'ব্যবসা প্রশাসন ও MBA প্রোগ্রামে ভর্তির জন্য একটি প্রয়োজনীয় পরীক্ষা যা লজিক, যুক্তি, কোয়ান্টিটেটিভ ও ভার্বাল রিজনিং দক্ষতা যাচাই করে।', buttonText: 'শুরু করুন' },
    { country: '', title: 'Duolingo English Test', description: 'একটি অনলাইন ইংরেজি দক্ষতার পরীক্ষা, যেটি দ্রুত ও সহজে করা যায়। এটি অনেক বিশ্ববিদ্যালয় গ্রহণ করে।', buttonText: 'শুরু করুন' },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-8 font-sans antialiased text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#4446a8] mb-12">
          জনপ্রিয় বিদেশে উচ্চশিক্ষার পরীক্ষা সমূহ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exams.map((exam, index) => (
            <div key={index} className="bg-[#e8e7fa] p-6 rounded-2xl shadow-md text-left flex flex-col items-start">
              <div className="flex items-center mb-4">
                {exam.country && <img src={exam.country} alt={`${exam.title} flag`} className="w-10 h-auto mr-4" />}
                <h3 className="text-xl font-bold text-[#4446a8]">{exam.title}</h3>
              </div>
              <p className="text-sm text-gray-700 mb-6 flex-grow">{exam.description}</p>
              <button className="w-full bg-transparent border border-[#4446a8] text-[#4446a8] font-semibold py-3 px-8 rounded-full hover:bg-[#4446a8] hover:text-white transition-colors duration-300">
                {exam.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ======= Stats Section =======
interface Stat {
  value: string;
  label: string;
}

const Stats: React.FC = () => {
  const stats: Stat[] = [
    { value: "৮৭%", label: "অনুমোদন পাসের হার" },
    { value: "৮০%", label: "শিক্ষার্থী স্কলারশিপ পেতে সফল" },
    { value: "৪.৮/৫", label: "শিক্ষার্থীদের রেটিং" },
    { value: "১০,০০০+", label: "মক টেস্ট সম্পন্ন" },
  ];

  return (
    <div className="bg-white p-4 sm:p-8 flex justify-center font-sans antialiased">
      <div className="bg-[#4446a8] text-white p-6 sm:p-8 rounded-3xl shadow-lg w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">{stat.value}</span>
              <span className="text-xs sm:text-sm font-light">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ======= UpcomingDate Section =======
interface ExamDateDetail {
  icon: string;
  text: string;
}

interface ExamDate {
  title: string;
  subtitle: string;
  image: string;
  details: ExamDateDetail[];
}

const UpcomingDate: React.FC = () => {
  const examDates: ExamDate[] = [
    {
      title: 'IELTS for UKVI',
      subtitle: 'আইইএলটিএস অন কম্পিউটার - একাডেমিক আইইএলটিএস',
      image: 'https://i.ibb.co/5g08kvnz/polina-eroshkina-IS2-RNc-Xw-CFs-unsplash.jpg',
      details: [
        { icon: 'calendar', text: '২৪ জুলাই, সকাল ৯:০০ টা' },
        { icon: 'clock', text: 'ফলাফল: ৫ থেকে ৭ দিনের মধ্যে' },
        { icon: 'location', text: 'IELTS অন কম্পিউটার, বারিধারা' },
        { icon: 'fee', text: '৳ 21,500' },
        { icon: 'user', text: 'অনলাইন ফিজিক্যাল ক্লাস' },
      ],
    },
    {
      title: 'IELTS একাডেমিক',
      subtitle: 'আইইএলটিএস অন কম্পিউটার - একাডেমিক আইইএলটিএস',
      image: 'https://i.ibb.co/nqX15BGs/ben-mullins-o-XV3bz-R7jx-I-unsplash.jpg',
      details: [
        { icon: 'calendar', text: '২৪ জুলাই, সকাল ৯:০০ টা' },
        { icon: 'clock', text: 'ফলাফল: ৫ থেকে ৭ দিনের মধ্যে' },
        { icon: 'location', text: 'IELTS অন কম্পিউটার, বারিধারা' },
        { icon: 'fee', text: '৳ 21,500' },
        { icon: 'user', text: 'অনলাইন ফিজিক্যাল ক্লাস' },
      ],
    },
    {
      title: 'IELTS সাধারণ প্রশিক্ষণ',
      subtitle: 'আইইএলটিএস অন কম্পিউটার - সাধারণ',
      image: 'https://i.ibb.co/1BhSzFt/maccy-yioua5j-PPjc-unsplash.jpg',
      details: [
        { icon: 'calendar', text: '২৪ জুলাই, সকাল ৯:০০ টা' },
        { icon: 'clock', text: 'ফলাফল: ৫ থেকে ৭ দিনের মধ্যে' },
        { icon: 'location', text: 'IELTS অন কম্পিউটার, বারিধারা' },
        { icon: 'fee', text: '৳ 21,500' },
        { icon: 'user', text: 'অনলাইন ফিজিক্যাল ক্লাস' },
      ],
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'calendar': return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#4446a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
      case 'clock': return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#4446a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
      case 'location': return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#4446a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
      case 'fee': return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#4446a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.22-.403 3-1M9 16a2 2 0 01-2-2m2-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2z" /></svg>;
      case 'user': return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#4446a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
      default: return null;
    }
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-8 font-sans antialiased text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#4446a8] mb-4">আসন্ন পরীক্ষার তারিখসমূহ</h2>
        <p className="text-gray-600 text-sm md:text-base mb-12">প্রধান পরীক্ষাগুলোর পরবর্তী পরীক্ষার তারিখ সম্পর্কে অবগত হোন</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {examDates.map((exam, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-left flex flex-col items-center">
              <img src={exam.image} alt={exam.title} className="rounded-lg mb-6 w-full h-auto object-cover" />
              <div className="w-full">
                <h3 className="text-xl font-bold text-[#4446a8] mb-2">{exam.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{exam.subtitle}</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {exam.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center">{getIcon(detail.icon)}<span>{detail.text}</span></li>
                  ))}
                </ul>
                <button className="w-full bg-[#4446a8] text-white font-semibold py-3 mt-6 rounded-full hover:bg-[#393b90] transition-colors duration-300">
                  বিস্তারিত দেখুন
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-[#4446a8] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#393b90] transition-colors duration-300 flex items-center justify-center mx-auto">
          আরও দেখুন
        </button>
      </div>
    </div>
  );
};

// ======= Main Page =======
const Examss: React.FC = () => {
  return (
    <div>
      <Banner />
      <PopularExams />
      <Stats />
      <UpcomingDate />
      <FAQ />
    </div>
  );
};

export default Examss;
