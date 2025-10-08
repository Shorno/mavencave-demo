
import  { useRef, useCallback, useState } from "react";

export default function ToeflSyllabus() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<"reading" | "listening" | "speaking" | "writing">("reading");

  // Card slide (card swapping)
  const stepScroll = useCallback((dir: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const firstCard = rail.querySelector<HTMLElement>("[data-card]");
    const cardW = firstCard ? firstCard.getBoundingClientRect().width : rail.clientWidth;
    const gap = 18; // matches --gap:18px from original
    const offset = Math.round(cardW + gap);
    rail.scrollBy({ left: dir * offset, behavior: "smooth" });
  }, []);

  const Chip: React.FC<React.PropsWithChildren<{ href: string }>> = ({ href, children }) => (
    <a
      href={href}
      className="inline-flex items-center justify-center font-extrabold text-[13px] rounded-full px-3 py-2
                 bg-[#F0EDFF] text-[#5B50E6] hover:text-white hover:bg-[#5B50E6]
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8D84FF] cursor-pointer"
    >
      {children}
    </a>
  );

  return (
    <main className="min-h-screen w-full bg-[#EDE6FF]">
      <div className="w-full max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-7 lg:py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.12fr_.64fr] items-start">
          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col gap-6 min-w-0">
            {/* Main Article */}
            <article className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.10)] p-4 sm:p-6">
              <header className="mb-3">
                <h1 className="text-[#5B50E6] font-extrabold tracking-tight leading-tight text-[26px] sm:text-[32px] lg:text-[44px]">
                  TOEFL পরীক্ষার সিলেবাস ও প্যাটার্ন: সেকশন অনুযায়ী TOEFL ফরম্যাট
                </h1>
                <p className="text-sm text-[#6F6A84] mt-2 flex items-center gap-2">
                  <span aria-hidden>⏱️</span> আপডেট করা হয়েছে: ৩০ আগস্ট, ২০২৫, ১৪:৩৯
                </p>
              </header>

              <section className="text-[#241F3A] leading-8 text-[14px] sm:text-[16px] space-y-3">
                <p>
                  বিদেশে পড়াশোনা করতে চাওয়া শিক্ষার্থীদের জন্য TOEFL (Test of English as a Foreign Language) একটি অন্যতম পরিচিত ইংরেজি দক্ষতা পরীক্ষা।
                </p>
                <p>
                  ETS (Educational Testing Service) TOEFL পরীক্ষা পরিচালনা করে, যার দুটি ধরন আছে: TOEFL iBT (ইন্টারনেট ভিত্তিক) এবং TOEFL at Home (বাড়ি থেকে নেওয়া TOEFL পরীক্ষা)। এই পোস্টে আমরা ২০২৫ সালের TOEFL পরীক্ষার সিলেবাসের উপর গুরুত্ব দেব।
                </p>
                <p>TOEFL সিলেবাস পরীক্ষার্থীর পড়া, লেখা, কথা বলা, এবং শোনার দক্ষতা বিশ্ববিদ্যালয় পর্যায়ে মূল্যায়ন করে। TOEFL iBT এবং TOEFL iBT Online-এর ফরম্যাট একই।</p>
                <p>এটি আপনার ইংরেজি ভাষার দক্ষতার একটি সম্পূর্ণ মূল্যায়ন। TOEFL-এর সম্পূর্ণ সিলেবাস, যার মধ্যে লেখা, পড়া, শোনা, এবং কথা বলার অংশ অন্তর্ভুক্ত, এখানে পাওয়া যাবে।</p>
              </section>
            </article>

            {/* =============== CARD RAIL (এই পৃষ্ঠায়) =============== */}
            <section aria-labelledby="onpage-left-title" className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4">
              <h2
                id="onpage-left-title"
                className="m-0 mb-3 font-extrabold text-[#5B50E6] text-[20px] sm:text-[24px] lg:text-[28px] flex items-center gap-2"
              >
                এই পৃষ্ঠায় <span aria-hidden>→</span>
              </h2>

              {/* Rail: 2-up desktop / 1-up mobile; smooth scroll; no scrollbar visible */}
              <div
                ref={railRef}
                className="grid grid-flow-col gap-[18px] snap-x snap-mandatory overflow-x-auto scroll-smooth
                           auto-cols-[100%] sm:auto-cols-[calc((100%-18px)/2)]
                           [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {/* Card 1 */}
                <article
                  data-card
                  className="group bg-white border border-[#E3DEF7] rounded-xl shadow-[0_12px_28px_rgba(91,80,230,0.10)] overflow-hidden snap-start
                             transition-transform duration-150 ease-out hover:-translate-y-[3px] focus-within:-translate-y-[3px]"
                >
                  <img src="/images/TOEFL_pages/image-1.jpg" alt="" className="w-full h-44 object-cover duration-150 ease-out group-hover:scale-[1.02] group-focus-within:scale-[1.02]" />
                  <div className="px-4 pt-3 flex-1">
                    <h3 className="text-[16px] leading-snug font-extrabold text-[#201B39] mb-1">
                      ১. TOEFL iBT পরীক্ষা সিলেবাস ও প্যাটার্ন
                    </h3>
                    <p className="m-0 text-[14px] leading-6 text-[#5b5871]">
                      TOEFL iBT পরীক্ষা জুলাই ২০২৩-এ একটি বড় আপডেট পেয়েছে, যার ফলে এটি সংক্ষিপ্ত এবং পরীক্ষার্থীদের জন্য আরও কার্যকর হয়ে উঠেছে নতুন TOEFL ফরম্যাটের মাধ্যমে।
                    </p>
                  </div>
                  <div className="px-4 pb-4 pt-3 flex items-center justify-between">
                    <Chip href="post-1.html">আরও পড়ুন <span className="ml-1">▾</span></Chip>
                    <span className="text-[12px] font-extrabold text-[#4a3fd6] bg-[#FAF7FF] rounded-md px-2 py-1">৩/৬</span>
                  </div>
                </article>

                {/* Card 2 */}
                <article
                  data-card
                  className="group bg-white border border-[#E3DEF7] rounded-xl shadow-[0_12px_28px_rgba(91,80,230,0.10)] overflow-hidden snap-start
                             transition-transform duration-150 ease-out hover:-translate-y-[3px] focus-within:-translate-y-[3px]"
                >
                  <img src="/images/TOEFL_pages/image-2.jpg" alt="" className="w-full h-44 object-cover duration-150 ease-out group-hover:scale-[1.02] group-focus-within:scale-[1.02]" />
                  <div className="px-4 pt-3 flex-1">
                    <h3 className="text-[16px] leading-snug font-extrabold text-[#201B39] mb-1">
                      ২. TOEFL পরীক্ষা সিলেবাস ও প্যাটার্ন: সেকশন অনুযায়ী ফরম্যাট
                    </h3>
                    <p className="m-0 text-[14px] leading-6 text-[#5b5871]">
                      TOEFL পরীক্ষার প্রতিটি অংশের সময়কাল এবং প্রশ্নের সংখ্যা সম্পর্কে আরও জানুন।
                    </p>
                  </div>
                  <div className="px-4 pb-4 pt-3 flex items-center justify-between">
                    <Chip href="#gre-sectioned-books">আরও পড়ুন <span className="ml-1">▾</span></Chip>
                    <span className="text-[12px] font-extrabold text-[#4a3fd6] bg-[#FAF7FF] rounded-md px-2 py-1">২/৬</span>
                  </div>
                </article>

                {/* Card 3 */}
                <article
                  data-card
                  className="group bg-white border border-[#E3DEF7] rounded-xl shadow-[0_12px_28px_rgba(91,80,230,0.10)] overflow-hidden snap-start
                             transition-transform duration-150 ease-out hover:-translate-y-[3px] focus-within:-translate-y-[3px]"
                >
                  <img src="/images/TOEFL_pages/image-3.jpg" alt="" className="w-full h-44 object-cover duration-150 ease-out group-hover:scale-[1.02] group-focus-within:scale-[1.02]" />
                  <div className="px-4 pt-3 flex-1">
                    <h3 className="text-[16px] leading-snug font-extrabold text-[#201B39] mb-1">
                      ৩. TOEFL পরীক্ষার প্যাটার্নের প্রধান হাইলাইটস
                    </h3>
                    <p className="m-0 text-[14px] leading-6 text-[#5b5871]">
                      TOEFL পরীক্ষার ধাঁচ আগের বছরের মতোই থাকে।
                    </p>
                  </div>
                  <div className="px-4 pb-4 pt-3 flex items-center justify-between">
                    <Chip href="post-3.html">আরও পড়ুন <span className="ml-1">▾</span></Chip>
                    <span className="text-[12px] font-extrabold text-[#4a3fd6] bg-[#FAF7FF] rounded-md px-2 py-1">৪/৬</span>
                  </div>
                </article>
              </div>

              {/* Arrows */}
              <div className="flex gap-3 mt-3">
                <button
                  type="button"
                  aria-label="পূর্ববর্তী"
                  className="w-[52px] h-[52px] grid place-items-center rounded-full bg-[#5B50E6] text-white shadow-[0_12px_28px_rgba(91,80,230,0.30)]"
                  onClick={() => stepScroll(-1)}
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="পরবর্তী"
                  className="w-[52px] h-[52px] grid place-items-center rounded-full bg-[#5B50E6] text-white shadow-[0_12px_28px_rgba(91,80,230,0.30)]"
                  onClick={() => stepScroll(1)}
                >
                  ›
                </button>
              </div>
            </section>

            {/* ============== SECTION 1: Tabs ============== */}
            <section className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4 sm:p-6" id="gre-top-books">
              <h2 className="m-0 mb-3 font-extrabold text-[#5B50E6] text-[22px] sm:text-[30px] lg:text-[38px]">
                ১. TOEFL iBT পরীক্ষা সিলেবাস ও প্যাটার্ন
              </h2>

              <ol className="list-decimal pl-5 text-[#211B3A] text-[14px] sm:text-[16px] leading-8 space-y-2">
                <p className="m-0 mb-1"><strong>নতুন TOEFL iBT ফরম্যাটের পরিবর্তনসমূহ:</strong></p>
                <li>স্বাধীন Independent Writing Task এর পরিবর্তে এখন “Writing for an Academic Discussion” টাস্ক অন্তর্ভুক্ত করা হয়েছে।</li>
                <li>প্রতিটি সেকশনের সব প্রশ্নই এখন আপনার চূড়ান্ত স্কোরে গণ্য হবে। পূর্বে কিছু প্রশ্ন স্কোরের জন্য গণ্য হতো না এবং শুধুমাত্র পরীক্ষার উন্নয়নের উদ্দেশ্যে ব্যবহার হতো।</li>
                <li>মোট TOEFL পরীক্ষার সময়কাল কমিয়ে দুই ঘন্টা করা হয়েছে, যা আগে তিন ঘন্টা ছিল।</li>
              </ol>

              {/* Tabs */}
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-start gap-2 border-b border-slate-300 bg-slate-100 p-2 rounded-t-xl">
                  {([
                    ["reading", "TOEFL রিডিং সেকশন"],
                    ["listening", "TOEFL লিসনিং সেকশন"],
                    ["speaking", "TOEFL স্পিকিং সেকশন"],
                    ["writing", "TOEFL রাইটিং সেকশন"],
                  ] as const).map(([key, label]) => {
                    const active = activeTab === key;
                    return (
                      <button
                        key={key}
                        className={[
                          "text-[15px] px-5 py-2.5 rounded-lg focus:outline-none font-medium",
                          active ? "bg-indigo-600 text-white" : "bg-white text-slate-800 border border-slate-300",
                        ].join(" ")}
                        onClick={() => setActiveTab(key as any)}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                <div className="p-6 sm:p-8 bg-[#ede9fe] rounded-b-xl">
                  {activeTab === "reading" && (
                    <section>
                      <h3 className="text-2xl font-bold text-slate-900">TOEFL রিডিং সেকশন</h3>
                      <p className="mt-2 text-slate-800">TOEFL রিডিং সেকশনে পরীক্ষার্থীদের বিভিন্ন একাডেমিক পাঠ্যাংশ পড়ে ৩০–৪০টি প্রশ্নের উত্তর দিতে হয়।</p>
                      <hr className="my-4 border-slate-300/60" />
                      <ul className="text-slate-900 space-y-2">
                        <li>• ৩–৪টি passages থাকবে</li>
                        <li>• প্রতিটি passage-এর জন্য ১০টি প্রশ্ন</li>
                        <li>• সময়সীমা: ৫৪–৭২ মিনিট</li>
                      </ul>
                    </section>
                  )}
                  {activeTab === "listening" && (
                    <section>
                      <h3 className="text-2xl font-bold text-slate-900">TOEFL লিসনিং সেকশন</h3>
                      <p className="mt-2 text-slate-800">পরীক্ষার্থীদের লেকচার ও কথোপকথন শুনে প্রশ্নের উত্তর দিতে হয়।</p>
                      <hr className="my-4 border-slate-300/60" />
                      <ul className="text-slate-900 space-y-2">
                        <li>• ৩–৪টি লেকচার ও ২টি কথোপকথন</li>
                        <li>• মোট প্রশ্ন: ২৮–৩৯</li>
                        <li>• সময়সীমা: ৪১–৫৭ মিনিট</li>
                      </ul>
                    </section>
                  )}
                  {activeTab === "speaking" && (
                    <section>
                      <h3 className="text-2xl font-bold text-slate-900">TOEFL স্পিকিং সেকশন</h3>
                      <p className="mt-2 text-slate-800">৪টি স্পিকিং টাস্ক থাকে—১টি Independent ও ৩টি Integrated টাস্ক।</p>
                      <hr className="my-4 border-slate-300/60" />
                      <ul className="text-slate-900 space-y-2">
                        <li>• টাস্ক সংখ্যা: ৪</li>
                        <li>• প্রস্তুতি সময়: ১৫–৩০ সেকেন্ড</li>
                        <li>• উত্তর দেওয়ার সময়: ৪৫–৬০ সেকেন্ড</li>
                      </ul>
                    </section>
                  )}
                  {activeTab === "writing" && (
                    <section>
                      <h3 className="text-2xl font-bold text-slate-900">TOEFL রাইটিং সেকশন</h3>
                      <p className="mt-2 text-slate-800">TOEFL রাইটিং সেকশনে ২টি টাস্ক থাকে—Integrated Writing ও Independent Writing।</p>
                      <hr className="my-4 border-slate-300/60" />
                      <ul className="text-slate-900 space-y-2">
                        <li>• Integrated Writing: ২০ মিনিট</li>
                        <li>• Independent Writing: ৩০ মিনিট</li>
                        <li>• মোট সময়: প্রায় ৫০ মিনিট</li>
                      </ul>
                    </section>
                  )}
                </div>
              </div>
            </section>

            {/* ============== SECTION 2 (Expandable +) ============== */}
            <section id="gre-sectioned-books" className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4 sm:p-6 pb-10">
              <h2 className="m-0 mb-4 font-extrabold text-[#5B50E6] text-[22px] sm:text-[32px] lg:text-[40px] leading-tight">
                ২. TOEFL পরীক্ষা সিলেবাস ও প্যাটার্ন: সেকশন অনুযায়ী ফরম্যাট
              </h2>
              <p className="text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                শিক্ষার্থীদের জন্য TOEFL iBT সিলেবাসে পড়া, লেখা, কথা বলা এবং শোনার দক্ষতা অন্তর্ভুক্ত। TOEFL লেখা, TOEFL পড়া, TOEFL শোনা এবং TOEFL কথা বলার সিলেবাসের জন্য TOEFL পরীক্ষার ফরম্যাট নিম্নরূপ:
              </p>

              {[0,1,2,3].map((i) => (
                <details key={i} className="group bg-[#ece6ff] rounded-xl mt-4">
                  <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer select-none text-slate-900 font-medium text-[16px] sm:text-[17px]">
                    TOEFL পরীক্ষার সিলেবাস ও প্যাটার্ন - পড়ার জন্য
                    {/* plus sign — no animation */}
                    <span className="text-xl font-bold text-[#5B50E6]">+</span>
                  </summary>
                  <div className="bg-purple-50 border border-purple-200 rounded-b-xl mt-0 p-4 pb-6 text-slate-800">
                    <h4 className="font-semibold mb-2">TOEFL পরীক্ষার সিলেবাস ও প্যাটার্ন:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-[15px]">
                      <li><strong>Reading:</strong> ২টি প্যাসেজ (২০ প্রশ্ন, সময় ~৩৫ মিনিট)</li>
                      <li><strong>Listening:</strong> ৩টি লেকচার ও ২টি কথোপকথন (~২৮ প্রশ্ন, সময় ~৩৬ মিনিট)</li>
                      <li><strong>Speaking:</strong> ৪টি টাস্ক (সময় ~১৬ মিনিট)</li>
                      <li><strong>Writing:</strong> ২টি টাস্ক (সময় ~৩০ মিনিট)</li>
                    </ul>
                    <p className="mt-3 text-[14px] text-slate-600">পরীক্ষাটি অনলাইনে পরিচালিত হয়, এবং প্রতিটি অংশে দক্ষতা যাচাই করা হয় একাডেমিক প্রেক্ষাপটে।</p>
                  </div>
                </details>
              ))}
            </section>

            {/* ============== SECTION 3: প্রধান হাইলাইটস + টেবিল (from uploaded file) ============== */}
            <section className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4 sm:p-6">
              <h2 className="m-0 mb-3 font-extrabold text-[#5B50E6] text-[20px] sm:text-[28px] lg:text-[34px] leading-tight">
                ৩. TOEFL পরীক্ষার প্যাটার্নের প্রধান হাইলাইটস
              </h2>

              <ol className="list-decimal pl-5 text-[#211B3A] text-[14px] sm:text-[16px] leading-8 space-y-2">
                <li>• TOEFL পরীক্ষার প্যাটার্ন আগের বছরের মতোই থাকে।</li>
                <li>• আপনি TOEFL iBT (ইন্টারনেট-ভিত্তিক) পরীক্ষা অথবা TOEFL টেস্ট সেন্টার-ভিত্তিক পরীক্ষা দিতে পারেন, যা চারটি অংশে বিভক্ত: পঠন (Reading), শ্রবণ (Listening), বক্তৃতা (Speaking), এবং লেখা (Writing)।</li>
                <li>• প্রতিটি অংশ একাডেমিক সাফল্যের জন্য গুরুত্বপূর্ণ বিভিন্ন ভাষার দক্ষতা মূল্যায়ন করে। এখানে বিভিন্ন ধরনের প্রশ্ন থাকবে, যেমন: মাল্টিপল চয়েস, ইন্টিগ্রেটেড টাস্ক এবং ইনডিপেনডেন্ট টাস্ক।</li>
              </ol>
              <p className="text-[#211B3A] text-[14px] sm:text-[16px] leading-8 mt-2">
                নিম্নে TOEFL পরীক্ষার বিস্তারিত প্যাটার্ন ২০২৫ পরীক্ষার্থীদের সুবিধার জন্য দেওয়া হল।
              </p>

              {/* Table */}
              <div className="overflow-x-auto rounded-xl shadow-sm border border-slate-200 mt-6">
                <table className="min-w-full border-collapse bg-white text-left text-[15px] text-slate-800">
                  <thead>
                    <tr className="bg-purple-50 text-black text-[16px]">
                      <th className="px-5 py-3 font-semibold border border-indigo-600 rounded-tl-xl">বিভাগসমূহ</th>
                      <th className="px-5 py-3 font-semibold border border-indigo-600">সিলেবাস ও প্যাটার্ন</th>
                      <th className="px-5 py-3 font-semibold border border-indigo-600 rounded-tr-xl">সময়কাল</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-[15px]">
                    <tr className="hover:bg-slate-50">
                      <td className="px-5 py-3 font-medium border border-slate-200">Reading</td>
                      <td className="px-5 py-3 border border-slate-200">৩–৪টি প্যাসেজ, প্রতিটি প্যাসেজে ১০টি প্রশ্ন</td>
                      <td className="px-5 py-3 border border-slate-200">৫৪–৭২ মিনিট</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-5 py-3 font-medium border border-slate-200">Listening</td>
                      <td className="px-5 py-3 border border-slate-200">৩–৪টি লেকচার এবং ২–৩টি কথোপকথন, প্রতিটির জন্য ১০টি প্রশ্ন</td>
                      <td className="px-5 py-3 border border-slate-200">৪১–৫৭ মিনিট</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-5 py-3 font-medium border border-slate-200">Speaking</td>
                      <td className="px-5 py-3 border border-slate-200">৪টি প্রশ্ন</td>
                      <td className="px-5 py-3 border border-slate-200">১৭ মিনিট</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-5 py-3 font-medium border border-slate-200">Writing</td>
                      <td className="px-5 py-3 border border-slate-200">২টি টাস্ক</td>
                      <td className="px-5 py-3 border border-slate-200">৩০ মিনিট</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <ol className="list-decimal pl-5 text-[#211B3A] text-[14px] sm:text-[16px] leading-8 mt-4 space-y-2">
                <li>• TOEFL সিলেবাসে ভাষার এমন একটি বিস্তৃত দক্ষতার পরিধি অন্তর্ভুক্ত রয়েছে যা একাডেমিক ও পেশাদারী পরিবেশে সফলতার জন্য অপরিহার্য।</li>
                <li>• পঠন, শ্রবণ, বক্তৃতা এবং লেখার উপর মনোযোগের মাধ্যমে TOEFL পরীক্ষার্থীদের ইংরেজি-ভাষী পরিবেশে কার্যকরভাবে যোগাযোগ করতে এবং সাফল্য অর্জন করতে প্রস্তুত করে।</li>
                <li>• TOEFL সিলেবাসকে বোঝা এবং দক্ষতা অর্জন করা কাঙ্ক্ষিত স্কোর অর্জন এবং একাডেমিক ও ক্যারিয়ার সংক্রান্ত লক্ষ্য পূরণের জন্য অত্যন্ত গুরুত্বপূর্ণ।</li>
              </ol>
            </section>

            {/* ============== SECTION 4: TOEFL হোম এডিশন (from uploaded file) ============== */}
            <section className="bg-white border border-[#E3DEF7] rounded-2xl shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4 sm:p-6">
              <h2 className="m-0 mb-3 font-extrabold text-[#5B50E6] text-[20px] sm:text-[28px] lg:text-[34px] leading-tight">
                ৪. TOEFL হোম এডিশন: রেজিস্ট্রেশন প্রক্রিয়া
              </h2>

              {[
                "চলমান মহামারী এবং পরীক্ষার্থীকে যে চ্যালেঞ্জগুলোর মুখোমুখি হতে হচ্ছে তার প্রতিক্রিয়ায়, ETS TOEFL পরীক্ষার স্পেশাল হোম এডিশন চালু করেছে। এই বিকল্পের মাধ্যমে প্রার্থী তাদের নিজস্ব ঘর থেকে নিরাপদ ও আরামদায়কভাবে TOEFL পরীক্ষা দিতে পারবে। অনেক TOEFL টেস্ট সেন্টার কম ক্যাপাসিটিতে কাজ করছে বা লকডাউনের কারণে সাময়িকভাবে বন্ধ রয়েছে, তাই TOEFL হোম ভার্সন শিক্ষার্থীদের জন্য একটি সুবিধাজনক বিকল্প প্রদান করে।",
                "TOEFL হোম ভার্সন ঐতিহ্যবাহী পরীক্ষার সমস্ত মূল বৈশিষ্ট্য বজায় রাখে, যা নিশ্চিত করে যে প্রার্থীরা তাদের ইংরেজি ভাষার দক্ষতার সঠিক ও নির্ভরযোগ্য মূল্যায়ন পান। TOEFL হোম ভার্সনের রেজিস্ট্রেশন ফি অপরিবর্তিত রয়েছে – BDT ২৪,০০০, যা পরীক্ষার্থীদের জন্য এটি সহজলভ্য করে।",
                "TOEFL হোম টেস্টে অংশগ্রহণ করতে, প্রার্থীদের নির্দিষ্ট সিস্টেম রিকোয়ারমেন্ট পূরণ করতে হবে এবং প্রয়োজনীয় যন্ত্রপাতি থাকতে হবে। অফিসিয়াল ETS ওয়েবসাইট পরীক্ষায় প্রবেশ করার বিস্তারিত তথ্য এবং টিউটোরিয়াল প্রদান করে, যা নিশ্চিত করে যে প্রার্থীরা পরীক্ষার জন্য ভালোভাবে প্রস্তুত।",
                "TOEFL হোম ভার্সন প্রদান করে, ETS পরীক্ষাটিকে আরও অ্যাক্সেসযোগ্য করতে চায় এবং একই সঙ্গে এই চ্যালেঞ্জিং সময়ে প্রার্থীদের স্বাস্থ্য ও নিরাপত্তাকে অগ্রাধিকার দেয়।",
              ].map((t, i) => (
                <p key={i} className="m-0 mb-3 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">{t}</p>
              ))}
            </section>

            {/* ===== Next steps ===== */}
            <section aria-labelledby="next-steps-title" className="bg-[#F0EDFF] border border-[#E3DEF7] rounded-2xl shadow-[0_8px_22px_rgba(91,80,230,0.08)] p-4 sm:p-5">
              <h3 id="next-steps-title" className="m-0 mb-3 font-extrabold text-[#4C43D6] text-[18px] sm:text-[22px]">
                পরবর্তী ধাপ
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { t: "TOEFL পরীক্ষার তারিখ" },
                  { t: "TOEFL পরীক্ষা ফি" },
                  { t: "TOEFL পরীক্ষা" },
                ].map((s, i) => (
                  <article key={i} className="bg-white border border-[#E3DEF7] rounded-xl shadow-[0_10px_28px_rgba(91,80,230,0.10)] p-5 flex flex-col gap-2 min-h-[160px]">
                    <h4 className="text-[#211B3A] text-[16px] font-extrabold m-0">{s.t}</h4>
                    <a className="mt-auto inline-flex items-center gap-1 text-[#5B50E6] font-extrabold no-underline hover:text-[#4C43D6]" href="#!">
                      এখনই পড়ুন <span>→</span>
                    </a>
                  </article>
                ))}
              </div>
            </section>

            {/* ===== Info bank: IELTS ===== */}
            <section className="bg-[#F0EDFF] border border-[#E3DEF7] rounded-2xl shadow-[0_8px_22px_rgba(91,80,230,0.08)] p-4 sm:p-5">
              <h3 className="m-0 mb-3 font-extrabold text-[#2563EB] text-[18px] sm:text-[22px]">
                IELTS গুরুত্বপূর্ণ তথ্য
              </h3>
              <div className="bg-white border border-[#E3DEF7] rounded-xl grid overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[
                  "IELTS পরীক্ষা","IELTS পরীক্ষার তারিখ","IELTS পরীক্ষা ফি","IELTS মডিউল",
                  "IELTS শোনার অনুশীলন পরীক্ষা","IELTS কথা বলার অনুশীলন পরীক্ষা","IELTS লেখার অনুশীলন পরীক্ষা","IELTS পরীক্ষার কেন্দ্র",
                  "IELTS ফলাফল","IELTS-এর ধরন","IELTS প্যাটার্ন","IELTS ব্যান্ড স্কোর",
                  "IELTS পরীক্ষার যোগ্যতা","IELTS স্লট বুকিং","IELTS রেজিস্ট্রেশন","IELTS প্রস্তুতি",
                  "IELTS বই","IELTS অনলাইন পরীক্ষা",
                ].map((label, i) => (
                  <a key={i} href="#" className="relative flex items-center justify-between gap-4 px-4 py-3 border-t border-l border-[#E3DEF7] text-[#201B39] font-bold hover:bg-[#F7F5FF]">
                    {label} <span className="text-[#5B50E6] font-extrabold">→</span>
                  </a>
                ))}
              </div>
            </section>

            {/* ===== Info bank: TOEFL ===== */}
            <section className="bg-[#F0EDFF] border border-[#E3DEF7] rounded-2xl shadow-[0_8px_22px_rgba(91,80,230,0.08)] p-4 sm:p-5">
              <h3 className="m-0 mb-3 font-extrabold text-[#2563EB] text-[18px] sm:text-[22px]">
                TOEFL গুরুত্বপূর্ণ তথ্য
              </h3>
              <div className="bg-white border border-[#E3DEF7] rounded-xl grid overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "TOEFL পরীক্ষা","TOEFL তারিখসমূহ","TOEFL ফলাফল","TOEFL ফি","TOEFL সিলেবাস",
                  "TOEFL কথা বলার অনুশীলন পরীক্ষা","TOEFL লেখার অনুশীলন পরীক্ষা","TOEFL শোনার অনুশীলন পরীক্ষা",
                  "TOEFL বই","TOEFL রেজিস্ট্রেশন","TOEFL অনুশীলন","TOEFL প্রস্তুতি","TOEFL অনলাইন পরীক্ষা",
                ].map((label, i) => (
                  <a key={i} href="#" className="relative flex items-center justify-between gap-4 px-4 py-3 border-t border-l border-[#E3DEF7] text-[#201B39] font-bold hover:bg-[#F7F5FF]">
                    {label} <span className="text-[#5B50E6] font-extrabold">→</span>
                  </a>
                ))}
              </div>
            </section>

            {/* ===== FAQ (caret ^ on right, no animation) ===== */}
            <section id="toefl-faq" className="bg-[#ede9fe] rounded-xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">শিক্ষার্থীদের করা সবচেয়ে বেশি প্রশ্ন সমূহ–</h3>
              <div className="space-y-3">
                {[
                  {
                    q: "TOEFL পরীক্ষার প্যাটার্ন কী?",
                    a: (
                      <>
                        <p>TOEFL iBT পরীক্ষায় চারটি প্রধান অংশ থাকে — <strong>Reading, Listening, Speaking</strong> এবং <strong>Writing</strong>। পরীক্ষাটি সম্পূর্ণভাবে অনলাইন ও কম্পিউটার-ভিত্তিক।</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li><strong>Reading:</strong> ২টি প্যাসেজ, মোট ২০ প্রশ্ন (সময় ~৩৫ মিনিট)</li>
                          <li><strong>Listening:</strong> ৩টি লেকচার ও ২টি কথোপকথন (~২৮ প্রশ্ন, সময় ~৩৬ মিনিট)</li>
                          <li><strong>Speaking:</strong> ৪টি টাস্ক (~১৬ মিনিট)</li>
                          <li><strong>Writing:</strong> ২টি টাস্ক (~৩০ মিনিট)</li>
                        </ul>
                      </>
                    ),
                  },
                  {
                    q: "TOEFL স্পিকিং অংশটি কিভাবে গঠিত?",
                    a: (
                      <>
                        <p>স্পিকিং অংশে মোট ৪টি টাস্ক থাকে — ১টি <strong>Independent</strong> ও ৩টি <strong>Integrated</strong>। এখানে প্রার্থীকে নির্দিষ্ট বিষয়ে স্বল্প সময়ে সুনির্দিষ্ট উত্তর দিতে হয়।</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li><strong>Independent Task:</strong> ব্যক্তিগত মতামত বা অভিজ্ঞতা ভিত্তিক প্রশ্ন।</li>
                          <li><strong>Integrated Tasks:</strong> পড়া ও শোনার উপকরণ মিলিয়ে যুক্তি তৈরি করে উত্তর দিতে হয়।</li>
                          <li>প্রতিটি টাস্কে <em>১৫–৩০ সেকেন্ড প্রস্তুতি</em> ও <em>৪৫–৬০ সেকেন্ড উত্তর</em> সময় থাকে।</li>
                          <li>মূল্যায়ন: Delivery, Language Use, Topic Development অনুযায়ী।</li>
                        </ul>
                      </>
                    ),
                  },
                  {
                    q: "TOEFL পরীক্ষার স্কোর প্যাটার্ন কী?",
                    a: (
                      <>
                        <p>TOEFL-এর প্রতিটি অংশে সর্বোচ্চ <strong>৩০</strong> নম্বর থাকে, মোট <strong>১২০</strong>। স্কোরিং হয় স্বয়ংক্রিয় ও মানব মূল্যায়নের সমন্বয়ে।</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li><strong>Reading:</strong> ০–৩০</li>
                          <li><strong>Listening:</strong> ০–৩০</li>
                          <li><strong>Speaking:</strong> ০–৩০</li>
                          <li><strong>Writing:</strong> ০–৩০</li>
                        </ul>
                        <p className="mt-2">মোট স্কোর = চারটি অংশের যোগফল। অধিকাংশ বিশ্ববিদ্যালয় <strong>৯০–১০০+</strong> স্কোর গ্রহণ করে।</p>
                      </>
                    ),
                  },
                  {
                    q: "TOEFL-এ মার্কস কিভাবে বিভাজন করা হয়?",
                    a: (
                      <>
                        <p>TOEFL স্কোরিং হয় ETS-এর স্বয়ংক্রিয় সিস্টেম ও প্রশিক্ষিত মানব পরীক্ষকের যৌথ মূল্যায়নে। প্রতিটি অংশের মানদণ্ড আলাদা।</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li><strong>Reading & Listening:</strong> স্বয়ংক্রিয় মেশিন-স্কোরিং দ্বারা সঠিক উত্তর অনুযায়ী নম্বর।</li>
                          <li><strong>Speaking:</strong> প্রশিক্ষিত পরীক্ষকরা রেকর্ড করা উত্তর মূল্যায়ন করেন তিনটি মানদণ্ডে।</li>
                          <li><strong>Writing:</strong> প্রথমে AI-ভিত্তিক স্কোরিং, পরে মানব পরীক্ষকের রিভিউ করা হয়।</li>
                        </ul>
                      </>
                    ),
                  },
                  {
                    q: "TOEFL পরীক্ষার ফরম্যাট কী?",
                    a: (
                      <>
                        <p>TOEFL iBT পরীক্ষা বর্তমানে <strong>সংক্ষিপ্ত (Shortened Format)</strong> আকারে নেওয়া হয়, যার মোট সময় প্রায় <strong>১ ঘণ্টা ৫৬ মিনিট</strong>।</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li><strong>Reading:</strong> ~৩৫ মিনিট</li>
                          <li><strong>Listening:</strong> ~৩৬ মিনিট</li>
                          <li><strong>Speaking:</strong> ~১৬ মিনিট</li>
                          <li><strong>Writing:</strong> ~৩০ মিনিট</li>
                        </ul>
                        <p className="mt-2">পরীক্ষার সময় কোনো আলাদা ব্যাকরণ বা ভোকাব সেকশন থাকে না — সব দক্ষতা প্রশ্নের মাধ্যমে যাচাই হয়।</p>
                      </>
                    ),
                  },
                ].map((f, i) => (
                  <details key={i} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                    <summary className="cursor-pointer px-5 py-4 text-slate-900 font-medium flex items-center">
                      <span>{f.q}</span>
                      {/* caret ^ on right; flips with details open (no transition) */}
                      <span className="ml-auto inline-block group-open:rotate-180">^</span>
                    </summary>
                    <div className="px-6 pb-5 text-slate-700 leading-relaxed">{f.a}</div>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside aria-labelledby="more-title">
            <div className="flex items-center justify-between px-1 pb-2">
              <h2 id="more-title" className="m-0 font-extrabold text-[20px] sm:text-[24px] lg:text-[28px] text-[#17132E]">আরও পড়ুন</h2>
              <a className="inline-flex items-center gap-1 font-extrabold text-sm text-[#5B50E6] hover:underline" href="#">সব দেখুন</a>
            </div>
            <div className="grid gap-3">
              {[
                { img: "/images/TOEFL_pages/image-1.jpg", t: "প্রযুক্তি শিক্ষার জন্য সেরা বিশ্ববিদ্যালয়গুলো", m: "১২ জুলাই, ২০২৪ • ৫ মিনিট" },
                { img: "/images/TOEFL_pages/image-2.jpg", t: "বিশ্বের শীর্ষ ১০ বিশ্ববিদ্যালয়: কোথায় পড়বেন এবং কেন?", m: "১৯ জুলাই, ২০২৪ • ৫ মিনিট" },
                { img: "/images/TOEFL_pages/image-3.jpg", t: "যুক্তরাষ্ট্রের শীর্ষ বিশ্ববিদ্যালয়সমূহ ও তাদের বিশেষত্ব: কেন আপনার এখানেই পডা উচিত?", m: "১৯ জুলাই, ২০২৪ • ৫ মিনিট" },
              ].map((s, i) => (
                <a key={i} className="block no-underline text-inherit" href="#">
                  <img src={s.img} alt="" className="w-full h-46 object-cover rounded-xl" />
                  <div className="pt-2 px-0.5">
                    <h3 className="m-0 my-1 font-extrabold text-[16px] leading-snug text-[#211B3A] line-clamp-2">{s.t}</h3>
                    <p className="m-0 text-[#776F92] text-[13px]">{s.m}</p>
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
