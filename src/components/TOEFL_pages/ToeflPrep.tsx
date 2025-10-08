import { useRef } from "react";

export default function ToeflPrep() {
  const railRef = useRef<HTMLDivElement | null>(null);

  // Slide animation via smooth horizontal scroll
  const stepScroll = (dir: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const firstCard = rail.querySelector<HTMLElement>("[data-card]");
    const cardW = firstCard
      ? firstCard.getBoundingClientRect().width
      : rail.clientWidth;
    const gap = 16; // gap-4
    const offset = Math.round(cardW + gap);
    // Smooth slide (card-swapping)
    rail.scrollBy({ left: dir * offset, behavior: "smooth" });
  };

  return (
    <main className="w-full min-h-screen bg-[#EDE6FF] px-4 sm:px-6 lg:px-8 py-7 lg:py-10">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 gap-5 lg:grid-cols-[1.12fr_.64fr] items-start w-full">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-5 min-w-0">
          {/* Article */}
          <article className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.10)] p-4 sm:p-6">
            <header className="mb-3">
              <h1 className="text-[#5B50E6] font-extrabold tracking-tight leading-tight text-[26px] sm:text-[32px] lg:text-[44px]">
                TOEFL পরীক্ষা প্রস্তুতি ২০২৫: সেকশন অনুযায়ী টিপস ও ট্রিকস
              </h1>
              <p className="text-sm text-[#6F6A84] mt-2 flex items-center gap-2">
                <span aria-hidden>⏱️</span> আপডেট করা হয়েছে: ৩০ আগস্ট, ২০২৫,
                ১৪:৪৭
              </p>
            </header>
            <section className="text-[#241F3A] leading-8 text-[14px] sm:text-[16px] space-y-3">
              <p>
                TOEFL পরীক্ষায় ভালো স্কোর অর্জন করলে বিশ্বের বিভিন্ন খ্যাতনামা
                বিশ্ববিদ্যালয়ে শিক্ষার সুযোগ উন্মুক্ত হয়। আমাদের বিস্তারিত
                গাইডের সাহায্যে, আপনি কাঙ্ক্ষিত স্কোর অর্জন করতে পারবেন এবং
                আপনার স্বপ্নের লক্ষ্য পূরণ করতে পারবেন।
              </p>
              <p>
                এই পাতায় আমরা প্রতিটি মডিউল—Reading, Listening, Speaking, এবং
                Writing—সম্পর্কে বিস্তারিত আলোচনা করব এবং মূল্যবান প্রস্তুতির
                টিপস প্রদান করব।
              </p>
            </section>
          </article>

          {/* === Card Section with Slide Buttons === */}
          <section
            aria-labelledby="onpage-left-title"
            className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4"
          >
            <h2
              id="onpage-left-title"
              className="m-0 mb-3 font-extrabold text-[#5B50E6] text-[20px] sm:text-[24px] lg:text-[28px] flex items-center gap-2"
            >
              এই পৃষ্ঠায় <span aria-hidden>→</span>
            </h2>

            {/* Card rail */}
            <div
              ref={railRef}
              className="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[calc((100%-16px)/2)] gap-4 overflow-hidden snap-x snap-mandatory scroll-smooth select-none"
            >
              {[1, 2, 3].map((num) => (
                <article
                  key={num}
                  data-card
                  className="group bg-white border border-[#E3DEF7] rounded-xl shadow-[0_12px_28px_rgba(91,80,230,0.10)] overflow-hidden snap-start cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-[3px]"
                >
                  <img
                    src={`/images/TOEFL_pages/image-${num}.jpg`}
                    alt={`TOEFL card ${num}`}
                    className="w-full h-44 object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="px-4 pt-3 flex-1">
                    <h3 className="text-[16px] leading-snug font-extrabold text-[#201B39] mb-1">
                      {num}. TOEFL প্রস্তুতি টিপস
                    </h3>
                    <p className="m-0 text-[14px] leading-6 text-[#5b5871]">
                      TOEFL পরীক্ষায় ভালো করার জন্য সঠিক পরিকল্পনা, নিয়মিত
                      অনুশীলন ও সময় ব্যবস্থাপনা অপরিহার্য।
                    </p>
                  </div>
                  <div className="px-4 pb-4 pt-3 flex items-center justify-between">
                    <a
                      href="#!"
                      className="inline-flex items-center font-extrabold text-[13px] text-[#5B50E6] bg-[#F0EDFF] rounded-full px-3 py-2 transition-colors duration-200 hover:bg-[#5B50E6] hover:text-white cursor-pointer"
                    >
                      আরও পড়ুন <span className="ml-1">▾</span>
                    </a>
                    <span className="text-[12px] font-extrabold text-[#4a3fd6] bg-[#FAF7FF] rounded-md px-2 py-1">
                      {num}/৬
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Slide buttons */}
            <div className="flex gap-3 mt-3">
              <button
                type="button"
                aria-label="পূর্ববর্তী"
                className="w-12 h-12 grid place-items-center rounded-full bg-[#5B50E6] text-white shadow-[0_12px_28px_rgba(91,80,230,0.30)] hover:bg-[#4C43D6] transition"
                onClick={() => stepScroll(-1)}
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="পরবর্তী"
                className="w-12 h-12 grid place-items-center rounded-full bg-[#5B50E6] text-white shadow-[0_12px_28px_rgba(91,80,230,0.30)] hover:bg-[#4C43D6] transition"
                onClick={() => stepScroll(1)}
              >
                ›
              </button>
            </div>
          </section>

          {/* Long List 1 */}
          <section
            id="gre-top-books"
            className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4 sm:p-6"
          >
            <h2 className="m-0 mb-3 font-extrabold text-[#5B50E6] text-[22px] sm:text-[30px] lg:text-[38px]">
              ১. TOEFL পরীক্ষা প্রস্তুতি ২০২৫
            </h2>

            <p className="text-[#241F3A] text-[14px] sm:text-[16px] leading-8 font-semibold">
              <strong>
                TOEFL রিডিং সেকশনে সফল হওয়ার জন্য আপনাকে দ্রুত কঠিন প্যাসেজগুলো
                বোঝা এবং নির্দিষ্ট সময়ের মধ্যে সঠিক উত্তর দেওয়া প্রয়োজন।
              </strong>
            </p>
            <p className="text-[#241F3A] text-[14px] sm:text-[16px] leading-8">
              এই গুরুত্বপূর্ণ অংশে ভালো করার জন্য কিছু টিপস:
            </p>

            <ol className="list-none pl-0 my-2 space-y-3 text-[#241F3A] text-[14px] sm:text-[16px] leading-8">
              <li>
                <strong>একাডেমিক টেক্সটে মনোযোগ দিন: </strong> TOEFL রিডিং
                সেকশনের প্যাসেজগুলো একাডেমিক ধরণের। তাই একাডেমিক জার্নাল, The
                New York Times বা The Guardian-এর মতো সংবাদপত্র, অথবা একাডেমিক
                ব্লগ পড়ে নিজেকে অভ্যস্ত করুন।
              </li>
              <li>
                <strong>নোট নেওয়ার দক্ষতা অনুশীলন করুন: </strong> দেওয়া
                স্ক্র্যাচ পেপারে নোট নেওয়ার সুযোগ থাকায় কার্যকর নোট নেওয়ার
                কৌশল অনুশীলন করুন। মূল ধারণা, গুরুত্বপূর্ণ তথ্য এবং প্যাসেজের
                স্ট্রাকচার লিখে রাখুন, যা বোঝার এবং মনে রাখার ক্ষেত্রে সাহায্য
                করবে।
              </li>
              <li>
                <strong>স্পিড রিডিং চর্চা করুন: </strong>প্যাসেজের মূল ধারণা এবং
                গুরুত্বপূর্ণ তথ্য দ্রুত ধরার জন্য স্পিড রিডিং দক্ষতা বাড়ান।
                সময়সীমার মধ্যে পড়ার অভ্যাস করুন, তবে কমপ্রিহেনশন বজায় রাখুন।
              </li>
              <li>
                <strong>কনটেক্সট ক্লু ব্যবহার করুন: </strong> ভোকাবুলারি প্রশ্নে
                অজানা শব্দের অর্থ বের করতে পারিপার্শ্বিক বাক্য ব্যবহার করুন।
                শব্দগুলো প্রসঙ্গে কিভাবে ব্যবহার হয়েছে তা বোঝা সঠিক উত্তর
                দেওয়ার চাবিকাঠি।
              </li>
              <li>
                <strong>উত্তরের অপশনগুলো ভালোভাবে রিভিউ করুন:</strong>কিছু
                প্রশ্নের সঠিক উত্তর থাকতে পারে, তবে এটি প্যাসেজ বোঝার জন্য
                ডিজাইন করা হয়েছে। উত্তরগুলোর সূক্ষ্ম পার্থক্য লক্ষ্য করুন এবং
                সবচেয়ে সঠিকটি বাছাই করুন।
              </li>
              <li>
                <strong>পড়ার বিষয়বস্তু ভিন্ন করুন:</strong>অনুশীলনের সময়
                বিভিন্ন বিষয় এবং লেখার ধরন ব্যবহার করুন। এটি বিভিন্ন বিষয় এবং
                লেখার ধরনের সঙ্গে অভ্যস্ত হতে সাহায্য করে, যা TOEFL-এর বহুমুখী
                প্যাসেজ মোকাবিলায় গুরুত্বপূর্ণ।
              </li>
              <li>
                <strong>ফিডব্যাক নিন:</strong>টিউটর বা স্টাডি পার্টনারের সঙ্গে
                প্র্যাকটিস টেস্ট রিভিউ করুন এবং উন্নতির ক্ষেত্রের জন্য ফিডব্যাক
                নিন। বাহ্যিক ফিডব্যাক গুরুত্বপূর্ণ অন্তর্দৃষ্টি দেয় এবং কৌশল
                উন্নত করতে সাহায্য করে।
              </li>
            </ol>

            <p className="text-[#241F3A] text-[14px] sm:text-[16px] leading-8">
              এই বইগুলো প্র্যাকটিস প্রশ্ন এবং দ্রুত স্টাডি প্ল্যান পর্যন্ত
              বিস্তৃত রিসোর্স সরবরাহ করে, যা আপনার পরীক্ষায় সফলতা নিশ্চিত করতে
              সহায়তা করবে।
            </p>
          </section>

          {/* Sectioned List 2 */}
          <section
            id="gre-sectioned-books"
            className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4 sm:p-6"
          >
            <h2 className="m-0 mb-4 font-extrabold text-[#5B50E6] text-[22px] sm:text-[32px] lg:text-[40px] leading-tight">
              ২. TOEFL পরীক্ষা প্রস্তুতির টিপস: Listening
            </h2>

            <ol className="list-decimal pl-5 text-[#211B3A] text-[14px] sm:text-[16px] leading-8 space-y-3">
              <p className="m-0 mb-2 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                <strong>
                  TOEFL পরীক্ষার এই গুরুত্বপূর্ণ অংশে সাফল্য নিশ্চিত করার জন্য
                  কিছু গুরুত্বপূর্ণ টিপস হলো:
                </strong>
              </p>
              <li>
                <strong> বিভিন্ন ইংরেজি উৎস শুনুন: </strong>নিয়মিত ইংরেজি
                পডকাস্ট, নিউজ, এবং লেকচার শুনুন। এটি বিভিন্ন উচ্চারণ এবং বোধগম্য
                গতি বোঝার অভ্যাস তৈরি করে, যা TOEFL লিসেনিং সহজ করে।
              </li>
              <li>
                <strong>নোট নিন:</strong> অডিও ক্লিপ শুনতে শুনতে মূল পয়েন্টগুলো
                লিখার চর্চা করুন। নাম, তারিখ, এবং মূল ধারণার মতো গুরুত্বপূর্ণ
                তথ্য নোট করুন, যা পরবর্তী প্রশ্নের উত্তর দেওয়ার সময় সাহায্য
                করবে।
              </li>
              <li>
                <strong>মূল ধারণা বোঝার চেষ্টা করুন: </strong> লেকচার বা
                কথোপকথনের মূল উদ্দেশ্য ও ধারণা চিনতে মনোযোগ দিন। এটি আপনার তথ্য
                বুঝতে এবং মনে রাখতে সাহায্য করে।
              </li>
              <li>
                <strong>ট্রানজিশন শব্দ চিনুন: </strong>"However," "therefore,"
                এবং "for example" এর মতো শব্দগুলো লক্ষ্য করুন। এই শব্দগুলো
                গুরুত্বপূর্ণ পয়েন্ট এবং টপিক পরিবর্তনের সংকেত দেয়, যা তথ্যের
                প্রবাহ বোঝার জন্য সহায়ক।
              </li>
              <li>
                <strong>কনটেন্ট প্রেডিক্ট করার চর্চা করুন: </strong>শোনার আগে
                শিরোনাম বা পরিচিতি দেখে বিষয়টি অনুমান করুন। এটি সাহায্য করে
                প্রাসঙ্গিক তথ্যের ওপর ফোকাস রাখতে।
              </li>
              <li>
                <strong> সন্দর্ভ থেকে অর্থ বের করুন: </strong>কোনো শব্দ বা
                বাক্যাংশ মিস হলে, তার পারিপার্শ্বিক প্রসঙ্গ ব্যবহার করে অর্থ
                বোঝার চেষ্টা করুন। এটি আপনাকে ট্র্যাক থেকে বের না হতে এবং মূল
                বার্তা বুঝতে সাহায্য করে।
              </li>
              <li>
                <strong>রিভিউ ও সারসংক্ষেপ করুন: </strong>চর্চার ক্লিপ শোনার পরে
                মূল পয়েন্টগুলো নিজের ভাষায় সংক্ষেপে লিখুন। এটি গুরুত্বপূর্ণ
                তথ্য মনে রাখতে এবং প্রশ্নের উত্তর দিতে সাহায্য করবে।
              </li>
            </ol>
          </section>

          {/* Choose 3: Speaking */}
          <section className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4 sm:p-6">
            <h2 className="m-0 mb-3 font-extrabold text-[#5B50E6] text-[20px] sm:text-[28px] lg:text-[34px] leading-tight">
              ৩. TOEFL পরীক্ষা প্রস্তুতির টিপস: Speaking
            </h2>

            <p className="m-0 mb-2 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
              TOEFL পরীক্ষায় ভালো স্কোর করার জন্য আপনি নিচের টিপসগুলো অনুসরণ
              করতে পারেন:
            </p>

            <ol className="list-decimal pl-5 text-[#211B3A] text-[14px] sm:text-[16px] leading-8 space-y-3">
              <li>
                <strong>নিয়মিত ইংরেজি কথা বলার চর্চা করুন:</strong> প্রতিদিন
                ইংরেজিতে কথা বলুন, যা আত্মবিশ্বাস ও ফ্লুয়েন্সি বাড়ায়। বিভিন্ন
                বিষয় নিয়ে আলোচনা করার অভ্যাস আপনাকে আরও অভিযোজ্য করে তোলে।
              </li>
              <li>
                <strong>টাইমার ব্যবহার করুন:</strong> TOEFL পরীক্ষার সময়সীমার
                মধ্যে কথা বলার চর্চা করুন। এটি সময় ব্যবস্থাপনা শেখায় এবং আপনার
                ধারণা স্পষ্ট ও সংক্ষিপ্তভাবে প্রকাশ করতে সাহায্য করে।
              </li>
              <li>
                <strong>ভাবনাগুলো সাজান:</strong> কথা বলার আগে দ্রুত আপনার মূল
                পয়েন্টগুলো নোট করুন। এটি ফোকাস ধরে রাখে এবং আপনার উত্তরকে
                পরিষ্কার ও সুসংগঠিত করে, যা আপনাকে আরও পেশাদার দেখায়।
              </li>
              <li>
                <strong> স্পষ্ট উদাহরণ ব্যবহার করুন:</strong>আপনার যুক্তি বা
                বক্তব্য সমর্থনের জন্য সহজ ও প্রাসঙ্গিক উদাহরণ ব্যবহার করুন। এটি
                আপনার উত্তরকে আরও বিশ্বাসযোগ্য এবং বোঝার যোগ্য করে তোলে।
              </li>
              <li>
                <strong>উচ্চারণের দিকে মনোযোগ দিন: </strong>শব্দগুলো সঠিকভাবে ও
                স্পষ্টভাবে উচ্চারণের চর্চা করুন। ভালো উচ্চারণ পরীক্ষককে আপনার
                কথা বোঝার জন্য সাহায্য করে এবং দেখায় যে আপনি কার্যকরভাবে
                যোগাযোগ করতে পারেন।
              </li>
              <li>
                <strong>শব্দভাণ্ডার বাড়ান:</strong> নতুন শব্দ ও বাক্যাংশ শিখুন
                যাতে আপনার ধারণা আরও নির্ভুলভাবে প্রকাশ করা যায়। ভালো
                শব্দভাণ্ডার আপনাকে কার্যকরভাবে যোগাযোগ করতে সাহায্য করে এবং
                পরীক্ষককে আপনার ভাষাগত দক্ষতা দেখায়।
              </li>
              <li>
                <strong>নিজেকে রেকর্ড করুন:</strong> আপনার চর্চার উত্তর রেকর্ড
                করুন এবং শুনুন। এটি উন্নতির জন্য প্রয়োজনীয় জায়গাগুলো যেমন
                ব্যাকরণ ও উচ্চারণ সনাক্ত করতে সাহায্য করে, যা আপনার কথাকে আরও
                পরিষ্কার ও নিখুঁত করে তোলে।
              </li>
            </ol>
          </section>

          {/* Choose 4: Writing */}
          <section className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4 sm:p-6">
            <h2 className="m-0 mb-3 font-extrabold text-[#5B50E6] text-[20px] sm:text-[28px] lg:text-[34px] leading-tight">
              ৪. TOEFL পরীক্ষা প্রস্তুতির টিপস: Writing
            </h2>

            <p className="m-0 mb-2 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
              তবে, সময় সীমাবদ্ধতার মধ্যে, আপনি কীভাবে নিশ্চিত করতে পারেন যে
              আপনার লেখা খণ্ডটি বিশেষ মনে হবে? নিচের টিপসগুলো অনুসরণ করতে পারেন:
            </p>

            <ol className="list-decimal pl-5 text-[#211B3A] text-[14px] sm:text-[16px] leading-8 space-y-3">
              <li>
                <strong> টাস্কের চাহিদা বোঝা: </strong> TOEFL-এর বিভিন্ন রাইটিং
                টাস্ক যেমন ইন্টিগ্রেটেড এবং ইন্ডিপেন্ডেন্ট এসে সম্বন্ধে পরিচিত
                হোন। প্রতিটি টাস্কে কি প্রত্যাশা করা হচ্ছে তা জানা গুরুত্বপূর্ণ।
              </li>
              <li>
                <strong>নিবন্ধের কাঠামো চর্চা করুন: </strong> একটি পরিষ্কার ও
                সুসংগঠিত কাঠামো তৈরি করুন – পরিচিতি, মূল প্যারাগ্রাফ এবং
                উপসংহারসহ। এটি ধারাবাহিকতা নিশ্চিত করে এবং আপনার ধারণাগুলো
                কার্যকরভাবে প্রকাশ করতে সাহায্য করে।
              </li>
              <li>
                <strong>স্বচ্ছতা ও নির্ভুলতার দিকে মনোযোগ দিন: </strong> আপনার
                ধারণাগুলো প্রকাশ করতে সরল ও সংক্ষিপ্ত ভাষা ব্যবহার করুন। অত্যধিক
                জটিল বাক্য বা শব্দ ব্যবহার এড়িয়ে চলুন, যা বার্তাটি অস্পষ্ট করে
                দিতে পারে।
              </li>
              <li>
                <strong> স্পষ্ট উদাহরণ ব্যবহার করুন:</strong>আপনার যুক্তি বা
                বক্তব্য সমর্থনের জন্য সহজ ও প্রাসঙ্গিক উদাহরণ ব্যবহার করুন। এটি
                আপনার উত্তরকে আরও বিশ্বাসযোগ্য এবং বোঝার যোগ্য করে তোলে।
              </li>
              <li>
                <strong>শক্তিশালী বক্তব্য তৈরি করুন: </strong>্পষ্টভাবে আপনার
                মূল যুক্তি বা অবস্থান তুলে ধরার চর্চা করুন। এটি আপনার লেখা
                নির্দেশনা দেয় এবং কেন্দ্রীভূত ফোকাস বজায় রাখে।
              </li>
              <li>
                <strong>উদাহরণ দিয়ে সমর্থন করুন: </strong>ধারণা ও প্যারাগ্রাফের
                মধ্যে মসৃণ সংযোগ তৈরি করতে ট্রানজিশন শব্দ ও বাক্যাংশ ব্যবহার
                করুন। এটি লেখার প্রবাহ উন্নত করে এবং পাঠযোগ্যতা বাড়ায়।
              </li>
              <li>
                <strong>ট্রানজিশন শব্দ ব্যবহার করুন: </strong> আপনার চর্চার
                উত্তর রেকর্ড করুন এবং শুনুন। এটি উন্নতির জন্য প্রয়োজনীয়
                জায়গাগুলো যেমন ব্যাকরণ ও উচ্চারণ সনাক্ত করতে সাহায্য করে, যা
                আপনার কথাকে আরও পরিষ্কার ও নিখুঁত করে তোলে।
              </li>
              <li>
                <strong>প্রুফরিড ও সম্পাদনা করুন: </strong>ব্যাকরণ, বিরামচিহ্ন
                এবং বানানের ভুল ঠিক করার জন্য সময় নিয়ে আপনার লেখা পর্যালোচনা
                করুন। সম্পাদনা আপনার লেখার স্বচ্ছতা এবং পেশাদারিত্ব নিশ্চিত করে।
              </li>
            </ol>
          </section>

          {/* Next steps */}
          <section
            aria-labelledby="next-steps-title"
            className="bg-[#F0EDFF] border border-[#E3DEF7] rounded-2xl shadow-[0_8px_22px_rgba(91,80,230,0.08)] p-4 sm:p-5"
          >
            <h3
              id="next-steps-title"
              className="m-0 mb-3 font-extrabold text-[#4C43D6] text-[18px] sm:text-[22px]"
            >
              পরবর্তী ধাপ
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                { t: "TOEFL পরীক্ষার তারিখ" },
                { t: "TOEFL পরীক্ষা ফি" },
                { t: "TOEFL পরীক্ষা" },
              ].map((s, i) => (
                <article
                  key={i}
                  className="bg-white border border-[#E3DEF7] rounded-xl shadow-[0_10px_28px_rgba(91,80,230,0.10)] p-5 flex flex-col gap-2 min-h-[160px]"
                >
                  <h4 className="text-[#211B3A] text-[16px] font-extrabold m-0">
                    {s.t}
                  </h4>
                  <a
                    className="mt-auto inline-flex items-center gap-1 text-[#5B50E6] font-extrabold no-underline hover:text-[#4C43D6]"
                    href="#!"
                  >
                    এখনই পড়ুন <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Info bank: IELTS */}
          <section className="bg-[#F0EDFF] border border-[#E3DEF7] rounded-2xl shadow-[0_8px_22px_rgba(91,80,230,0.08)] p-4 sm:p-5">
            <h3 className="m-0 mb-3 font-extrabold text-[#2563EB] text-[18px] sm:text-[22px]">
              IELTS গুরুত্বপূর্ণ তথ্য
            </h3>

            <div
              className="bg-white border border-[#E3DEF7] rounded-xl grid overflow-hidden
                            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {[
                "IELTS পরীক্ষা",
                "IELTS পরীক্ষার তারিখ",
                "IELTS পরীক্ষা ফি",
                "IELTS মডিউল",
                "IELTS শোনার অনুশীলন পরীক্ষা",
                "IELTS কথা বলার অনুশীলন পরীক্ষা",
                "IELTS লেখার অনুশীলন পরীক্ষা",
                "IELTS পরীক্ষার কেন্দ্র",
                "IELTS ফলাফল",
                "IELTS-এর ধরন",
                "IELTS প্যাটার্ন",
                "IELTS ব্যান্ড স্কোর",
                "IELTS পরীক্ষার যোগ্যতা",
                "IELTS স্লট বুকিং",
                "IELTS রেজিস্ট্রেশন",
                "IELTS প্রস্তুতি",
                "IELTS বই",
                "IELTS অনলাইন পরীক্ষা",
              ].map((label, i) => (
                <a
                  key={i}
                  href="#"
                  className="relative flex items-center justify-between gap-4 px-4 py-3 border-t border-l border-[#E3DEF7] text-[#201B39] font-bold hover:bg-[#F7F5FF]"
                >
                  {label}{" "}
                  <span className="text-[#5B50E6] font-extrabold">→</span>
                </a>
              ))}
            </div>
          </section>

          {/* Info bank: TOEFL */}
          <section className="bg-[#F0EDFF] border border-[#E3DEF7] rounded-2xl shadow-[0_8px_22px_rgba(91,80,230,0.08)] p-4 sm:p-5">
            <h3 className="m-0 mb-3 font-extrabold text-[#2563EB] text-[18px] sm:text-[22px]">
              TOEFL গুরুত্বপূর্ণ তথ্য
            </h3>

            <div className="bg-white border border-[#E3DEF7] rounded-xl grid overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "TOEFL পরীক্ষা",
                "TOEFL তারিখসমূহ",
                "TOEFL ফলাফল",
                "TOEFL ফি",
                "TOEFL সিলেবাস",
                "TOEFL কথা বলার অনুশীলন পরীক্ষা",
                "TOEFL লেখার অনুশীলন পরীক্ষা",
                "TOEFL শোনার অনুশীলন পরীক্ষা",
                "TOEFL বই",
                "TOEFL রেজিস্ট্রেশন",
                "TOEFL অনুশীলন",
                "TOEFL প্রস্তুতি",
                "TOEFL অনলাইন পরীক্ষা",
              ].map((label, i) => (
                <a
                  key={i}
                  href="#"
                  className="relative flex items-center justify-between gap-4 px-4 py-3 border-t border-l border-[#E3DEF7] text-[#201B39] font-bold hover:bg-[#F7F5FF]"
                >
                  {label}{" "}
                  <span className="text-[#5B50E6] font-extrabold">→</span>
                </a>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section
            id="toefl-faq"
            className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4 sm:p-5"
          >
            <h3 className="m-0 mb-3 font-extrabold text-[#2563EB] text-[18px] sm:text-[24px]">
              শিক্ষার্থীদের করা সবচেয়ে বেশি প্রশ্ন সমূহ–
            </h3>

            <div className="border-t border-[#E3DEF7]">
              {/* Q1 */}
              <details className="group border-b border-[#E3DEF7]" open>
                <summary className="list-none cursor-pointer py-3 pl-3 pr-10 font-bold text-[#201B39] flex items-center">
                  <span>TOEFL-এর জন্য কীভাবে প্রস্তুতি নেব?</span>
                  <span className="ml-auto inline-block transition-transform duration-200 group-open:rotate-180">
                    ^
                  </span>
                </summary>
                <div className="px-3 pb-3 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                  <p>
                    শুরুতে একটি <strong>ডায়াগনস্টিক মক</strong> দিন
                    (ফ্রি/পেইড)—এতে কোন সেকশনে আপনি দুর্বল, তা বোঝা যাবে। তারপর
                    ৮–১২ সপ্তাহের <strong>স্টাডি প্ল্যান</strong> বানান এবং
                    ধারাবাহিকতা বজায় রাখুন।
                  </p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>
                      <strong>দৈনিক রুটিন (১.৫–৩ ঘন্টা):</strong> Reading
                      30–40m, Listening 30–40m, Speaking 20–30m, Writing 30–40m,
                      শেষে 10–15m ভোকাব/নোট রিভিউ।
                    </li>
                    <li>
                      <strong>Reading:</strong> স্কিমিং–স্ক্যানিং, প্রশ্নের ধরন
                      (Inference, Purpose, Vocabulary-in-Context), ভুল-বিশ্লেষণ
                      নোট করুন।
                    </li>
                    <li>
                      <strong>Listening:</strong> নোট-টেকিং সিস্টেম (সংক্ষিপ্ত
                      চিহ্ন/অভিধান), লেকচার/কনভারসেশন থেকে প্রধান
                      আইডিয়া–ডিটেইল–অর্গানাইজেশন ধরুন।
                    </li>
                    <li>
                      <strong>Speaking:</strong> টাস্ক টেমপ্লেট ব্যবহার করুন,
                      45–60 সেকেন্ডে স্পষ্ট স্ট্রাকচার (Intro → Point → Example
                      → Wrap) প্র্যাকটিস করুন এবং রেকর্ড শুনে নিজেই ফিডব্যাক
                      দিন।
                    </li>
                    <li>
                      <strong>Writing:</strong> Integrated-এ নোট-অ্যালাইনমেন্ট
                      (Reading vs. Lecture), Independent-এ 4-প্যারাগ্রাফ
                      টেমপ্লেট, ব্যাকরণ/সংযোগকারী শব্দের তালিকা তৈরি করুন।
                    </li>
                    <li>
                      <strong>মক টেস্ট:</strong> প্রতি ২ সপ্তাহে ১টি, শেষ ২–৩
                      সপ্তাহে টাইমড ফুল-লেংথ মক দিয়ে টাইমিং ও স্ট্যামিনা ঠিক
                      করুন।
                    </li>
                    <li>
                      <strong>ম্যাটেরিয়াল:</strong> ETS Official Tests/Guide,
                      TPO/TOEFL Practice Online, Noteful/TST Prep প্র্যাকটিস
                      সেট।
                    </li>
                  </ul>
                </div>
              </details>

              {/* Q2 */}
              <details className="group border-b border-[#E3DEF7]">
                <summary className="list-none cursor-pointer py-3 pl-3 pr-10 font-bold text-[#201B39] flex items-center">
                  <span>TOEFL প্রস্তুতির উপকরণ কোথায় পাওয়া যায়?</span>
                  <span className="ml-auto inline-block transition-transform duration-200 group-open:rotate-180">
                    ^
                  </span>
                </summary>
                <div className="px-3 pb-3 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>
                      <strong>অফিশিয়াল (ETS):</strong> Official Guide to the
                      TOEFL iBT, Official Practice Tests (TPO/TPO-like), TOEFL
                      Go! অ্যাপ।
                    </li>
                    <li>
                      <strong>কোর্স/প্ল্যাটফর্ম:</strong> Magoosh, Kaplan,
                      Princeton Review—স্টেপ-বাই-স্টেপ ভিডিও + প্র্যাকটিস।
                    </li>
                    <li>
                      <strong>YouTube চ্যানেল:</strong> TST Prep, Noteful,
                      NoteFull TOEFL—স্পিকিং/রাইটিং টেমপ্লেট ও লাইভ সমাধান।
                    </li>
                    <li>
                      <strong>ফ্রি রিডিং/লিসেনিং সোর্স:</strong> VOA Learning
                      English, BBC, National Geographic, TED Talks—একাডেমিক টোন
                      অভ্যস্ত করতে দারুণ।
                    </li>
                    <li>
                      <strong>শব্দভান্ডার:</strong> Quizlet/Anki-তে TOEFL
                      ফ্রিকোয়েন্সি লিস্ট; প্রতিদিন 15–20 শব্দ রিভিউ।
                    </li>
                  </ul>
                </div>
              </details>

              {/* Q3 */}
              <details className="group border-b border-[#E3DEF7]">
                <summary className="list-none cursor-pointer py-3 pl-3 pr-10 font-bold text-[#201B39] flex items-center">
                  <span>TOEFL-এর জন্য কত সময় প্রস্তুতি প্রয়োজন?</span>
                  <span className="ml-auto inline-block transition-transform duration-200 group-open:rotate-180">
                    ^
                  </span>
                </summary>
                <div className="px-3 pb-3 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                  <p>বর্তমান লেভেল ও টার্গেট স্কোরের উপর নির্ভর করে:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>
                      <strong>60–80 → 90–100 টার্গেট:</strong> 12–16 সপ্তাহ,
                      প্রতিদিন ~2–3 ঘন্টা, কঠোর বেসিক + টেমপ্লেট প্র্যাকটিস।
                    </li>
                    <li>
                      <strong>80–95 → 100–105 টার্গেট:</strong> 8–12 সপ্তাহ,
                      সপ্তাহে 2টি সেকশন-ফোকাসড মক + বিশ্লেষণ।
                    </li>
                    <li>
                      <strong>95+ → 105–110 টার্গেট:</strong> 4–6 সপ্তাহ,
                      উচ্চ-ফ্রিকোয়েন্সি ভুল কাটানো ও টাইমিং টিউনিং।
                    </li>
                  </ul>
                  <p>
                    যদি সময় কম থাকে, তাহলে{" "}
                    <strong>টাস্ক-টেমপ্লেট + মক বিশ্লেষণ</strong>কে অগ্রাধিকার
                    দিন। ধারাবাহিকতা স্কোরের সবচেয়ে বড় চালিকাশক্তি।
                  </p>
                </div>
              </details>

              {/* Q4 */}
              <details className="group border-b border-[#E3DEF7]">
                <summary className="list-none cursor-pointer py-3 pl-3 pr-10 font-bold text-[#201B39] flex items-center">
                  <span>কোথায় অনলাইনে বিনামূল্যে TOEFL প্রস্তুতি করা যায়?</span>
                  <span className="ml-auto inline-block transition-transform duration-200 group-open:rotate-180">
                    ^
                  </span>
                </summary>
                <div className="px-3 pb-3 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>
                      <strong>ETS ফ্রি রিসোর্স:</strong> স্যাম্পল প্রশ্ন,
                      স্কোরিং গাইড, অফিসিয়াল প্র্যাকটিস সেটের ট্রায়াল।
                    </li>
                    <li>
                      <strong>YouTube:</strong> TST Prep, Noteful—স্পিকিং/রাইটিং
                      টেমপ্লেট, রিয়েল-টাইম আন্সার রিভিউ।
                    </li>
                    <li>
                      <strong>ওপেন ম্যাটেরিয়াল:</strong> VOA/BBC/TED দিয়ে
                      Listening + নোট-টেকিং প্র্যাকটিস; Wikipedia/Smithsonian
                      দিয়ে Reading সামারি প্র্যাকটিস।
                    </li>
                    <li>
                      <strong>কমিউনিটি/ফোরাম:</strong> Reddit r/TOEFL, Facebook
                      গ্রুপ—মক ফিডব্যাক, স্টাডি পার্টনার খুঁজে পাওয়া যায়।
                    </li>
                    <li>
                      <strong>ভোকাব টুল:</strong> Quizlet/Anki—স্পেসড রিপিটিশনে
                      ফ্রি ভোকাব সেট।
                    </li>
                  </ul>
                  <p>
                    বাজেট না থাকলেও, উপরোক্ত ফ্রি সোর্স + নিয়মিত টাইমড
                    প্র্যাকটিসে <strong>90–100+</strong> স্কোর অর্জন সম্ভব।
                  </p>
                </div>
              </details>

              {/* Q5 */}
              <details className="group border-b border-[#E3DEF7]">
                <summary className="list-none cursor-pointer py-3 pl-3 pr-10 font-bold text-[#201B39] flex items-center">
                  <span>IELTS ৭ কি TOEFL-এর সমান?</span>
                  <span className="ml-auto inline-block transition-transform duration-200 group-open:rotate-180">
                    ^
                  </span>
                </summary>
                <div className="px-3 pb-3 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                  <p>
                    সাধারণ কনভার্সন অনুযায়ী{" "}
                    <strong>IELTS 7.0 ≈ TOEFL iBT 94–100</strong> রেঞ্জের
                    সমতুল্য ধরা হয়। তবে বিশ্ববিদ্যালয়ভেদে গ্রহণযোগ্য রেঞ্জ
                    ভিন্ন হতে পারে—কেউ কেউ সাবস্কোর
                    (Reading/Listening/Speaking/Writing) ন্যূনতমও নির্ধারণ করে।
                  </p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>
                      ভর্তি নীতিমালা প্রায়ই <strong>রেঞ্জ</strong> হিসেবে উল্লেখ
                      করে, তাই অফিশিয়াল প্রোগ্রাম পেজে সর্বশেষ চাহিদা মিলিয়ে
                      নিন।
                    </li>
                    <li>
                      যদি IELTS 7.0 থাকে, অধিকাংশ ক্ষেত্রে TOEFL ~95-এর সমতুল্য
                      হিসেবে বিবেচিত হয়।
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside aria-labelledby="more-title">
          <div className="flex items-center justify-between px-1 pb-2">
            <h2
              id="more-title"
              className="m-0 font-extrabold text-[20px] sm:text-[24px] lg:text-[28px] text-[#17132E]"
            >
              আরও পড়ুন
            </h2>
            <a
              className="inline-flex items-center gap-1 font-extrabold text-sm text-[#5B50E6] hover:underline"
              href="#"
            >
              সব দেখুন
            </a>
          </div>

          <div className="grid gap-3">
            {[
              {
                img: "/images/TOEFL_pages/image-1.jpg",
                t: "প্রযুক্তি শিক্ষার জন্য সেরা বিশ্ববিদ্যালয়গুলো",
                m: "১২ জুলাই, ২০২৪ • ৫ মিনিট",
              },
              {
                img: "/images/TOEFL_pages/image-2.jpg",
                t: "বিশ্বের শীর্ষ ১০ বিশ্ববিদ্যালয়: কোথায় পড়বেন এবং কেন?",
                m: "১৯ জুলাই, ২০২৪ • ৫ মিনিট",
              },
              {
                img: "/images/TOEFL_pages/image-3.jpg",
                t: "যুক্তরাষ্ট্রের শীর্ষ বিশ্ববিদ্যালয়সমূহ ও তাদের বিশেষত্ব: কেন আপনার এখানেই পডা উচিত?",
                m: "১৯ জুলাই, ২০২৪ • ৫ মিনিট",
              },
            ].map((s, i) => (
              <a key={i} className="block no-underline text-inherit" href="#">
                <img
                  src={s.img}
                  alt=""
                  className="w-full h-46 object-cover rounded-xl"
                />
                <div className="pt-2 px-0.5">
                  <h3 className="m-0 my-1 font-extrabold text-[16px] leading-snug text-[#211B3A] line-clamp-2">
                    {s.t}
                  </h3>
                  <p className="m-0 text-[#776F92] text-[13px]">{s.m}</p>
                </div>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
