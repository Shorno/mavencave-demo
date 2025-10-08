import React, { useRef } from "react";

export default function ToeflRegistration() {
  const railRef = useRef<HTMLDivElement | null>(null);

  // Card swapping via smooth horizontal scroll
  const stepScroll = (dir: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const firstCard = rail.querySelector<HTMLElement>("[data-card]");
    const cardW = firstCard
      ? firstCard.getBoundingClientRect().width
      : rail.clientWidth;
    const gap = 18; // gap-4.5 ≈ styles.css 18px
    const offset = Math.round(cardW + gap);
    rail.scrollBy({ left: dir * offset, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen w-full bg-[#EDE6FF]">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6 lg:px-7 py-7 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_.64fr] gap-6 items-start">
          {/* ================= LEFT ================= */}
          <div className="flex flex-col gap-6 min-w-0">
            {/* Article */}
            <article className="bg-white border border-[#E3DEF7] rounded-[18px] shadow-[0_10px_28px_rgba(91,80,230,0.10)] p-4 md:p-6">
              <header className="mb-2">
                <h1 className="m-0 text-[#5B50E6] font-extrabold tracking-tight leading-tight text-[26px] sm:text-[32px] lg:text-[44px]">
                  TOEFL নিবন্ধন ২০২৫: কিভাবে TOEFL-এর জন্য নিবন্ধন করবেন?
                </h1>
                <p className="m-0 mt-2 text-[14px] text-[#6F6A84] flex items-center gap-2">
                  <span aria-hidden>⏱️</span> আপডেট করা হয়েছে: ৩০ আগস্ট, ২০২৫,
                  ১৪:৩৯
                </p>
              </header>

              <section className="text-[#241F3A] text-[14px] sm:text-[16px] leading-8 space-y-3">
                <p>
                  TOEFL পরীক্ষার প্রস্তুতির সময়, নিশ্চিত করুন যে আপনি আপনার
                  প্রথম বিশ্ববিদ্যালয়ের আবেদন শেষ হওয়ার তারিখের কমপক্ষে দুই
                  থেকে তিন মাস আগে রেজিস্ট্রেশন প্রক্রিয়া শুরু করছেন। এই
                  সময়সীমা আপনার স্কোরগুলি নির্বাচিত বিশ্ববিদ্যালয়গুলিতে
                  পৌঁছানোর জন্য যথেষ্ট সময় দেয়।
                </p>
                <p>
                  TOEFL পরীক্ষার জন্য রেজিস্ট্রেশন করতে, অফিসিয়াল ETS TOEFL
                  ওয়েবসাইটে যান এবং একটি নতুন অ্যাকাউন্ট তৈরি করুন অথবা বিদ্যমান
                  অ্যাকাউন্টে লগ ইন করুন। এরপর আপনার পছন্দের পরীক্ষার তারিখ এবং
                  নিকটতম টেস্ট সেন্টার নির্বাচন করুন। প্রয়োজনীয় ফি BDT ২৪,০০০
                  জমা দিয়ে রেজিস্ট্রেশন প্রক্রিয়া সম্পূর্ণ করুন।
                </p>
              </section>
            </article>

            {/* =============== এই পৃষ্ঠায় (cards + arrows) =============== */}
            <section
              aria-labelledby="onpage-left-title"
              className="bg-white border border-[#E3DEF7] rounded-[18px] shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4"
            >
              <h2
                id="onpage-left-title"
                className="m-0 mb-3 font-extrabold text-[#5B50E6] text-[20px] sm:text-[24px] lg:text-[28px] flex items-center gap-2"
              >
                এই পৃষ্ঠায় <span aria-hidden>→</span>
              </h2>

              {/* Track: hidden overflow (no drag/scrollbar). Buttons control slide. */}
              <div className="overflow-hidden select-none">
                <div
                  ref={railRef}
                  className="grid grid-flow-col auto-cols-[calc((100%-18px)/2)] sm:auto-cols-[calc((100%-18px)/2)] gap-[18px] overflow-hidden snap-x snap-mandatory"
                >
                  {/* Mobile: 1-up */}
                  <style>{`
                    @media (max-width: 760px){
                      .auto-cols-\\[calc\\(\\(100\\%-18px\\)\\/2\\)\\]{
                        grid-auto-columns:100%;
                      }
                    }
                  `}</style>

                  {/* Card 1 */}
                  <article
                    data-card
                    className="group bg-white border border-[#E3DEF7] rounded-[14px] shadow-[0_12px_28px_rgba(91,80,230,0.10)] overflow-hidden snap-start cursor-pointer transition-transform duration-150 ease-out hover:-translate-y-[3px]"
                  >
                    <img
                      src="/images/TOEFL_pages/image-1.jpg"
                      alt=""
                      className="w-full h-44 object-cover transition-transform duration-150 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="px-4 pt-3 flex-1">
                      <h3 className="m-0 mb-1 font-extrabold text-[16px] leading-snug text-[#201B39]">
                        ১. TOEFL নিবন্ধন প্রক্রিয়া
                      </h3>
                      <p className="m-0 text-[14px] leading-6 text-[#5b5871]">
                        TOEFL রেজিস্ট্রেশন প্রক্রিয়া সরল এবং এটি অনলাইনে
                        সম্পূর্ণ করা যায়।
                      </p>
                    </div>
                    <div className="px-4 pb-4 pt-3 flex items-center justify-between">
                      <a
                        href="post-1.html"
                        className="inline-flex items-center font-extrabold text-[13px] text-[#5B50E6] bg-[#F0EDFF] rounded-full px-3 py-2 hover:bg-[#5B50E6] hover:text-white cursor-pointer"
                      >
                        আরও পড়ুন <span className="ml-1">▾</span>
                      </a>
                      <span className="text-[12px] font-extrabold text-[#4a3fd6] bg-[#FAF7FF] rounded-md px-2 py-1">
                        ৩/৬
                      </span>
                    </div>
                  </article>

                  {/* Card 2 */}
                  <article
                    data-card
                    className="group bg-white border border-[#E3DEF7] rounded-[14px] shadow-[0_12px_28px_rgba(91,80,230,0.10)] overflow-hidden snap-start cursor-pointer transition-transform duration-150 ease-out hover:-translate-y-[3px]"
                  >
                    <img
                      src="/images/TOEFL_pages/image-2.jpg"
                      alt=""
                      className="w-full h-44 object-cover transition-transform duration-150 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="px-4 pt-3 flex-1">
                      <h3 className="m-0 mb-1 font-extrabold text-[16px] leading-snug text-[#201B39]">
                        ২. TOEFL নিবন্ধন ফি: পেমেন্টের উপায়
                      </h3>
                      <p className="m-0 text-[14px] leading-6 text-[#5b5871]">
                        TOEFL রেজিস্ট্রেশন ফি সাধারণত বিভিন্ন পেমেন্ট মাধ্যমের
                        মাধ্যমে প্রদেয় হতে পারে, যা দেশ এবং অঞ্চলের উপর নির্ভর
                        করে।
                      </p>
                    </div>
                    <div className="px-4 pb-4 pt-3 flex items-center justify-between">
                      <a
                        href="#gre-sectioned-books"
                        className="inline-flex items-center font-extrabold text-[13px] text-[#5B50E6] bg-[#F0EDFF] rounded-full px-3 py-2 hover:bg-[#5B50E6] hover:text-white cursor-pointer"
                      >
                        আরও পড়ুন <span className="ml-1">▾</span>
                      </a>
                      <span className="text-[12px] font-extrabold text-[#4a3fd6] bg-[#FAF7FF] rounded-md px-2 py-1">
                        ২/৬
                      </span>
                    </div>
                  </article>

                  {/* Card 3 */}
                  <article
                    data-card
                    className="group bg-white border border-[#E3DEF7] rounded-[14px] shadow-[0_12px_28px_rgba(91,80,230,0.10)] overflow-hidden snap-start cursor-pointer transition-transform duration-150 ease-out hover:-translate-y-[3px]"
                  >
                    <img
                      src="/images/TOEFL_pages/image-3.jpg"
                      alt=""
                      className="w-full h-44 object-cover transition-transform duration-150 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="px-4 pt-3 flex-1">
                      <h3 className="m-0 mb-1 font-extrabold text-[16px] leading-snug text-[#201B39]">
                        ৩. TOEFL বাতিল/পুনঃনির্ধারণ ফি
                      </h3>
                      <p className="m-0 text-[14px] leading-6 text-[#5b5871]">
                        TOEFL বাতিলকরণ এবং পুনঃনির্ধারণ ফি পরিবর্তনশীল এবং আপনার
                        অবস্থান ও ETS নীতির উপর নির্ভর করে।
                      </p>
                    </div>
                    <div className="px-4 pb-4 pt-3 flex items-center justify-between">
                      <a
                        href="post-3.html"
                        className="inline-flex items-center font-extrabold text-[13px] text-[#5B50E6] bg-[#F0EDFF] rounded-full px-3 py-2 hover:bg-[#5B50E6] hover:text-white cursor-pointer"
                      >
                        আরও পড়ুন <span className="ml-1">▾</span>
                      </a>
                      <span className="text-[12px] font-extrabold text-[#4a3fd6] bg-[#FAF7FF] rounded-md px-2 py-1">
                        ৪/৬
                      </span>
                    </div>
                  </article>
                </div>
              </div>

              {/* Arrows (swap only) */}
              <div className="flex gap-3 mt-3">
                <button
                  type="button"
                  aria-label="পূর্ববর্তী"
                  onClick={() => stepScroll(-1)}
                  className="w-[52px] h-[52px] grid place-items-center rounded-full bg-[#5B50E6] text-white shadow-[0_12px_28px_rgba(91,80,230,0.30)] hover:bg-[#4C43D6]"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="পরবর্তী"
                  onClick={() => stepScroll(1)}
                  className="w-[52px] h-[52px] grid place-items-center rounded-full bg-[#5B50E6] text-white shadow-[0_12px_28px_rgba(91,80,230,0.30)] hover:bg-[#4C43D6]"
                >
                  ›
                </button>
              </div>
            </section>

            {/* ============== LONG LIST: #1 ============== */}
            <section
              id="gre-top-books"
              className="bg-white border border-[#E3DEF7] rounded-[18px] shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4 md:p-6"
            >
              <h2 className="m-0 mb-4 font-extrabold text-[#5B50E6] text-[22px] sm:text-[30px] lg:text-[38px]">
                ১. TOEFL নিবন্ধন প্রক্রয়া
              </h2>
              <p className="m-0 mb-2 text-[#241F3A] text-[14px] sm:text-[16px] leading-8">
                এখানে ধাপে ধাপে TOEFL রেজিস্ট্রেশন এবং প্রস্তুতির গাইড দেওয়া
                হলো:
              </p>

              <ol className="list-none pl-0 my-2 space-y-3 text-[#241F3A] text-[14px] sm:text-[16px] leading-8">
                <li>
                  <strong>ETS অ্যাকাউন্ট তৈরি করুন:</strong> অফিসিয়াল ETS TOEFL
                  ওয়েবসাইটে যান এবং একটি নতুন অ্যাকাউন্ট তৈরি করুন। যদি আপনার
                  ইতিমধ্যে অ্যাকাউন্ট থাকে, তবে আপনার লগইন তথ্য ব্যবহার করে লগ
                  ইন করুন।
                </li>
                <li>
                  <strong>পরীক্ষার তারিখ এবং স্থান নির্বাচন করুন: </strong> লগ
                  ইন করার পরে আপনার সুবিধাজনক তারিখ এবং পরীক্ষা কেন্দ্র নির্বাচন
                  করুন। পরীক্ষার তারিখ এবং কেন্দ্র এমনভাবে বাছাই করুন যা আপনার
                  প্রস্তুতির সময়সূচীর সাথে মানানসই।
                </li>
                <li>
                  <strong>ব্যক্তিগত তথ্য দিন: </strong>প্রয়োজনীয় ব্যক্তিগত
                  তথ্য সঠিকভাবে পূরণ করুন। এর মধ্যে থাকতে পারে আপনার নাম,
                  ঠিকানা, যোগাযোগের তথ্য এবং পরিচয় তথ্য।
                </li>
                <li>
                  <strong>পটভূমি সংক্রান্ত প্রশ্নের উত্তর দিন: </strong>{" "}
                  রেজিস্ট্রেশনের সময় ETS যদি কিছু পটভূমি সংক্রান্ত প্রশ্ন
                  জিজ্ঞেস করে, সেগুলোর সঠিক উত্তর দিন।
                </li>
                <li>
                  <strong>রেজিস্ট্রেশন তথ্য যাচাই করুন: </strong>প্রদত্ত সকল
                  তথ্য যাচাই করুন এবং প্রয়োজনে সংশোধন করুন।
                </li>
                <li>
                  <strong>রেজিস্ট্রেশন ফি প্রদান করুন: </strong>প্রয়োজনীয়
                  রেজিস্ট্রেশন ফি অনলাইনে প্রদান করুন।
                </li>
                <li>
                  <strong> নিশ্চিতকরণ পান: </strong>রেজিস্ট্রেশন সম্পন্ন ও
                  পেমেন্ট প্রসেসিং-এর পর নিশ্চিতকরণ ইমেল পাবেন।
                </li>
                <li>
                  <strong>পরীক্ষার জন্য প্রস্তুতি নিন: </strong>নিশ্চিতকরণের পরে
                  প্রস্তুতি শুরু করুন—স্টাডি ম্যাটেরিয়াল ও প্র্যাকটিস টেস্ট
                  ব্যবহার করুন।
                </li>
                <li>
                  <strong>পরীক্ষায় অংশগ্রহণ করুন:</strong> নির্ধারিত দিনে ৩০
                  মিনিট আগে পৌঁছান; বৈধ আইডি নিন।
                </li>
                <li>
                  <strong>স্কোর গ্রহণ করুন: </strong>পরীক্ষার প্রায় ৬ দিন পরে
                  অনলাইনে স্কোর দেখা যাবে।
                </li>
              </ol>

              <p className="m-0 text-[#241F3A] text-[14px] sm:text-[16px] leading-8">
                নোট: এই ধাপগুলি অনুসরণ করে আপনি TOEFL রেজিস্ট্রেশন সম্পন্ন করতে
                পারবেন এবং পরীক্ষার জন্য কার্যকরভাবে প্রস্তুতি নিতে পারবেন।
              </p>
            </section>

            {/* ============== LONG LIST: #2 ============== */}
            <section
              id="gre-sectioned-books"
              className="bg-white border border-[#E3DEF7] rounded-[18px] shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4 md:p-6"
            >
              <h2 className="m-0 mb-4 font-extrabold text-[#5B50E6] text-[22px] sm:text-[32px] lg:text-[40px] leading-tight">
                ২. TOEFL নিবন্ধন ফি: পেমেন্টের উপায়
              </h2>

              <p className="m-0 mb-2 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                <strong>
                  ETS (Educational Testing Service) দ্বারা TOEFL রেজিস্ট্রেশন ফি
                  প্রদানের জন্য সাধারণত যে পেমেন্ট পদ্ধতিগুলো গ্রহণযোগ্য, তা
                  হলো:
                </strong>
              </p>
              <ol className="list-decimal pl-5 space-y-3 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                <li>
                  <strong>ক্রেডিট বা ডেবিট কার্ড: </strong>Visa, Mastercard,
                  American Express, Discover ইত্যাদি।
                </li>
                <li>
                  <strong>ইলেকট্রনিক ফান্ড ট্রান্সফার (EFT): </strong> কিছু দেশে
                  সরাসরি ব্যাংক অ্যাকাউন্ট থেকে।
                </li>
                <li>
                  <strong>ব্যাংক ট্রান্সফার: </strong> নির্দিষ্ট অঞ্চলে ETS
                  অ্যাকাউন্টে ট্রান্সফার।
                </li>
                <li>
                  <strong>মানি অর্ডার বা ব্যাংক ড্রাফট: </strong> বিশেষ ক্ষেত্রে
                  ডাকযোগে/ব্যাংকের মাধ্যমে।
                </li>
              </ol>
            </section>

            {/* ============== LONG LIST: #3 ============== */}
            <section className="bg-white border border-[#E3DEF7] rounded-[18px] shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4 md:p-6">
              <h2 className="m-0 mb-3 font-extrabold text-[#5B50E6] text-[20px] sm:text-[28px] lg:text-[34px] leading-tight">
                ৩. TOEFL বাতিল/পুনঃনির্ধারণ ফি
              </h2>

              <p className="m-0 mb-2 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                এখানে সাধারণ একটি সংক্ষিপ্ত বিবরণ দেওয়া হলো:
              </p>
              <ol className="list-decimal pl-5 space-y-3 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                <li>
                  <strong>ক্যানসেলেশন ফি: </strong>প্রায় BDT ৬,৫০০–২২,০০০
                  (তারিখের কাছাকাছি হলে বেশি)।
                </li>
                <li>
                  <strong>রিসিডিউলিং ফি: </strong>প্রায় BDT ৬,৫০০–১৪,০০০
                  (সাধারণত ক্যানসেলেশনের চেয়ে কম)।
                </li>
              </ol>
              <p className="m-0 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                মনে রাখবেন, ফিগারগুলো পরিবর্তনশীল—সর্বশেষ তথ্যের জন্য ETS TOEFL
                অফিসিয়াল ওয়েবসাইট দেখুন।
              </p>
            </section>

            {/* ============== LONG LIST: #4 ============== */}
            <section className="bg-white border border-[#E3DEF7] rounded-[18px] shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4 md:p-6">
              <h2 className="m-0 mb-3 font-extrabold text-[#5B50E6] text-[20px] sm:text-[28px] lg:text-[34px] leading-tight">
                ৪. TOEFL হোম এডিশন: নিবন্ধন প্রক্রিয়া
              </h2>

              <p className="m-0 mb-3 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                চলমান মহামারির প্রেক্ষিতে ETS **TOEFL Home Edition** চালু
                করেছে—বাড়ি থেকে অনলাইন প্রোক্টরিং সহ পরীক্ষা। টেস্ট সেন্টারের
                সমান কনটেন্ট/স্কোরিং/সময়; রেজিস্ট্রেশন ফি ~BDT ২৪,০০০।
              </p>
              <p className="m-0 mb-3 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                অংশগ্রহণের জন্য নির্দিষ্ট সিস্টেম রিকোয়ারমেন্ট পূরণ করতে হবে—ETS
                সাইটে বিস্তারিত নির্দেশনা ও টিউটোরিয়াল আছে।
              </p>
              <p className="m-0 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                Home Version পরীক্ষার্থীদের জন্য অ্যাক্সেসযোগ্যতা বাড়ায় এবং
                স্বাস্থ্য/নিরাপত্তা অগ্রাধিকার দেয়।
              </p>
            </section>

            {/* পরবর্তী ধাপ */}
            <section
              aria-labelledby="next-steps-title"
              className="bg-[#F0EDFF] border border-[#E3DEF7] rounded-[18px] shadow-[0_8px_22px_rgba(91,80,230,0.08)] p-4 md:p-5"
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
                  { t: "TOEFL ফলাফল" },
                ].map((s, i) => (
                  <article
                    key={i}
                    className="bg-white border border-[#E3DEF7] rounded-xl shadow-[0_10px_28px_rgba(91,80,230,0.10)] p-5 flex flex-col gap-2 min-h-[160px]"
                  >
                    <h4 className="m-0 text-[#211B3A] text-[16px] font-extrabold">
                      {s.t}
                    </h4>
                    <a
                      className="mt-auto inline-flex items-center gap-1 text-[#5B50E6] font-extrabold no-underline hover:text-[#4C43D6] cursor-pointer"
                      href="#!"
                    >
                      এখনই পড়ুন <span>→</span>
                    </a>
                  </article>
                ))}
              </div>
            </section>

            {/* Info bank: IELTS */}
            <section className="bg-[#F0EDFF] border border-[#E3DEF7] rounded-[18px] shadow-[0_8px_22px_rgba(91,80,230,0.08)] p-4 md:p-5">
              <h3 className="m-0 mb-3 font-extrabold text-[#2563EB] text-[18px] sm:text-[22px]">
                IELTS গুরুত্বপূর্ণ তথ্য
              </h3>
              <div className="bg-white border border-[#E3DEF7] rounded-xl grid overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
            <section className="bg-[#F0EDFF] border border-[#E3DEF7] rounded-[18px] shadow-[0_8px_22px_rgba(91,80,230,0.08)] p-4 md:p-5">
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

            {/* ===== FAQ ===== */}
            <section
              id="toefl-home-faq"
              className="bg-white border border-[#E3DEF7] rounded-[18px] shadow-[0_10px_28px_rgba(91,80,230,0.08)] p-4 md:p-5"
            >
              <h3 className="m-0 mb-3 font-extrabold text-[#2563EB] text-[18px] sm:text-[24px]">
                শিক্ষার্থীদের করা সবচেয়ে বেশি প্রশ্ন সমূহ–
              </h3>

              <div className="border-t border-[#E3DEF7]">
                {/* Q1 */}
                <details className="group border-b border-[#E3DEF7]" open>
                  <summary className="list-none cursor-pointer py-3 pl-3 pr-10 font-bold text-[#201B39] flex items-center">
                    <span>TOEFL হোম এডিশন কি?</span>
                    {/* caret at right, rotates instantly (no transition classes) */}
                    <span className="ml-auto inline-block group-open:rotate-180">
                      ^
                    </span>
                  </summary>
                  <div className="px-3 pb-3 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                    <p>
                      <strong>TOEFL iBT Home Edition</strong> হলো একই TOEFL iBT
                      পরীক্ষা, তবে আপনি ঘরে বসে অনলাইন প্রোক্টরিংয়ের মাধ্যমে
                      দেন। <em>কনটেন্ট, স্কোরিং, সময়</em>—সবই টেস্ট সেন্টারের
                      সমান এবং অধিকাংশ বিশ্ববিদ্যালয় একইভাবে গ্রহণ করে।
                      পার্থক্য শুধু পরীক্ষা দেওয়ার স্থান ও পর্যবেক্ষণের পদ্ধতি।
                    </p>
                  </div>
                </details>

                {/* Q2 */}
                <details className="group border-b border-[#E3DEF7]">
                  <summary className="list-none cursor-pointer py-3 pl-3 pr-10 font-bold text-[#201B39] flex items-center">
                    <span>TOEFL হোম এডিশন কীভাবে কাজ করে?</span>
                    <span className="ml-auto inline-block group-open:rotate-180">
                      ^
                    </span>
                  </summary>
                  <div className="px-3 pb-3 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong>রেজিস্ট্রেশন:</strong> ETS অ্যাকাউন্টে লগইন করে
                        Home Edition নির্বাচন করুন।
                      </li>
                      <li>
                        <strong>সিস্টেম চেক:</strong> ETS Secure Browser ইন্সটল
                        করে ডিভাইস টেস্ট করুন।
                      </li>
                      <li>
                        <strong>পরীক্ষার দিন:</strong> বৈধ আইডি দেখানো, রুম
                        স্ক্যান ইত্যাদি।
                      </li>
                      <li>
                        <strong>প্রোক্টরিং:</strong> ওয়েবক্যাম/অডিও/স্ক্রিন
                        মনিটরিং।
                      </li>
                      <li>
                        <strong>স্কোর:</strong> আনঅফিশিয়াল সাথে সাথে; অফিসিয়াল
                        কয়েক কর্মদিবস।
                      </li>
                    </ol>
                  </div>
                </details>

                {/* Q3 */}
                <details className="group border-b border-[#E3DEF7]">
                  <summary className="list-none cursor-pointer py-3 pl-3 pr-10 font-bold text-[#201B39] flex items-center">
                    <span>
                      TOEFL হোম এডিশনের জন্য সিস্টেমের প্রয়োজনীয়তাগুলো কি কি?
                    </span>
                    <span className="ml-auto inline-block group-open:rotate-180">
                      ^
                    </span>
                  </summary>
                  <div className="px-3 pb-3 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                    <ul className="list-disc ml-6 space-y-1">
                      <li>
                        <strong>কম্পিউটার:</strong> ডেস্কটপ/ল্যাপটপ
                        (Windows/macOS)।
                      </li>
                      <li>
                        <strong>ব্রাউজার/সফটওয়্যার:</strong> ETS Secure Browser
                        ইন্সটল।
                      </li>
                      <li>
                        <strong>ক্যামেরা/অডিও:</strong> ফ্রন্ট ওয়েবক্যাম,
                        মাইক্রোফোন ও স্পিকার।
                      </li>
                      <li>
                        <strong>ইন্টারনেট:</strong> স্থিতিশীল ব্রডব্যান্ড।
                      </li>
                      <li>
                        <strong>পরিবেশ:</strong> শান্ত, আলাদা রুম; ডেস্ক
                        পরিচ্ছন্ন।
                      </li>
                    </ul>
                    <p>
                      পরীক্ষার আগে <strong>অফিশিয়াল সিস্টেম চেক</strong> চালান।
                    </p>
                  </div>
                </details>

                {/* Q4 */}
                <details className="group border-b border-[#E3DEF7]">
                  <summary className="list-none cursor-pointer py-3 pl-3 pr-10 font-bold text-[#201B39] flex items-center">
                    <span>
                      TOEFL হোম এডিশনের সময় পরীক্ষার নিরাপত্তা কীভাবে নিশ্চিত
                      করা হয়?
                    </span>
                    <span className="ml-auto inline-block group-open:rotate-180">
                      ^
                    </span>
                  </summary>
                  <div className="px-3 pb-3 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                    <ul className="list-disc ml-6 space-y-1">
                      <li>
                        <strong>আইডি ভেরিফিকেশন</strong>,{" "}
                        <strong>রুম স্ক্যান</strong>,{" "}
                        <strong>Secure Browser</strong>।
                      </li>
                      <li>
                        <strong>লাইভ প্রোক্টরিং + রেকর্ডিং</strong>।
                      </li>
                      <li>নিয়ম লঙ্ঘনে টেস্ট বাতিল হতে পারে।</li>
                    </ul>
                  </div>
                </details>

                {/* Q5 */}
                <details className="group border-b border-[#E3DEF7]">
                  <summary className="list-none cursor-pointer py-3 pl-3 pr-10 font-bold text-[#201B39] flex items-center">
                    <span>
                      TOEFL হোম এডিশন পরীক্ষার সময় কি আমি বিরতি নিতে পারি?
                    </span>
                    <span className="ml-auto inline-block group-open:rotate-180">
                      ^
                    </span>
                  </summary>
                  <div className="px-3 pb-3 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
                    <p>
                      সাধারণত <strong>১টি ১০-মিনিটের নির্ধারিত বিরতি</strong>{" "}
                      থাকে (Reading/Listening-এর পর)। অনির্ধারিত বিরতিতে টাইমার
                      চলে; অনুমতি ছাড়া সিট ছাড়লে টেস্ট বাতিল হতে পারে।
                    </p>
                  </div>
                </details>
              </div>
            </section>
          </div>

          {/* ================= RIGHT ================= */}
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
      </div>
    </main>
  );
}
