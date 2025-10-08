import { useRef } from "react";

export default function ToeflResult() {
  const railRef = useRef<HTMLDivElement | null>(null);

  // Card-swapping: slide by exactly one card (incl. gap)
  const stepScroll = (dir: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const first = rail.querySelector<HTMLElement>("[data-card]");
    const gap = 18; // matches design gap (~18px in original CSS)
    const cardW = first
      ? first.getBoundingClientRect().width
      : rail.clientWidth;
    const offset = Math.round(cardW + gap);
    rail.scrollBy({ left: dir * offset, behavior: "smooth" });
  };

  return (
    <main className="w-full bg-[#EDE6FF] text-[#131126]">
      <div className="mx-auto max-w-[1180px] px-4 md:px-6 lg:px-7 py-7 lg:py-10">
        <div className="grid items-start gap-[22px] lg:grid-cols-[1.12fr_.64fr]">
          {/* ================= LEFT ================= */}
          <div className="flex min-w-0 flex-col gap-[22px]">
            {/* Article */}
            <article
              aria-labelledby="post-title"
              className="rounded-[18px] border border-[#E3DEF7] bg-white p-4 md:p-6 shadow-[0_10px_28px_rgba(91,80,230,0.10)]"
            >
              <header className="mb-3">
                <h1
                  id="post-title"
                  className="m-0 text-[26px] sm:text-[32px] lg:text-[44px] font-extrabold leading-tight tracking-[-0.01em] text-[#5B50E6]"
                >
                  TOEFL ফলাফল ২০২৫: টেস্ট রিপোর্ট, স্কোরের বৈধতা, ফলাফল ডাউনলোড
                  করার পদ্ধতি
                </h1>
                <p className="mt-2 flex items-center gap-2 text-[14px] text-[#6F6A84]">
                  <span aria-hidden>⏱️</span> আপডেট করা হয়েছে: ৩০ আগস্ট, ২০২৫,
                  ১৪:৩৯
                </p>
              </header>

              <section className="space-y-3 text-[14px] sm:text-[16px] leading-8 text-[#241F3A]">
                <p>
                  আপনি কি TOEFL iBT পরীক্ষার ফলাফলের জন্য অপেক্ষা করছেন? পরীক্ষা
                  শেষ করার পর, আপনি আপনার ETS অ্যাকাউন্টে অনলাইনে আপনার স্কোর
                  চেক করতে পারেন বা প্রায় ৬ দিনের মধ্যে একটি ইমেইল নোটিফিকেশন
                  পাওয়ার জন্য অপেক্ষা করতে পারেন।
                </p>
                <p>
                  TOEFL-এর সর্বমোট স্কোর ১২০ পয়েন্ট, যেখানে প্রতিটি সেকশন
                  (Reading, Listening, Speaking, এবং Writing) সর্বোচ্চ ৩০
                  পয়েন্ট দেয়। সাধারণভাবে ১০০ বা তার উপরের স্কোরকে ভালো ধরা
                  হয়, এবং ১০০-এর উপরের স্কোরকে চমৎকার বলা হয়।
                </p>
                <p>
                  তবে মনে রাখবেন, নির্দিষ্ট স্কোরের প্রয়োজনীয়তা
                  বিশ্ববিদ্যালয়ের উপর ভিত্তি করে পরিবর্তিত হতে পারে।
                </p>
                <div className="rounded-xl bg-purple-100 p-4 text-slate-800 md:p-6 leading-relaxed">
                  যখন আপনি TOEFL-এর জন্য আবেদন করবেন, তখন যে পরীক্ষার ফি দেবেন
                  তা আপনাকে আপনার পছন্দের সর্বাধিক ৪টি বিশ্ববিদ্যালয়ে
                  বিনামূল্যে স্কোর পাঠানোর সুযোগ দেয়।
                </div>
              </section>
            </article>

            {/* =============== CARD RAIL (এই পৃষ্ঠায়) =============== */}
            <section
              aria-labelledby="onpage-left-title"
              className="rounded-[18px] border border-[#E3DEF7] bg-white p-[18px] shadow-[0_10px_28px_rgba(91,80,230,0.08)]"
            >
              <h2
                id="onpage-left-title"
                className="mb-3 flex items-center gap-2 text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold text-[#5B50E6]"
              >
                এই পৃষ্ঠায় <span aria-hidden>→</span>
              </h2>

              {/* Hide scrollbar but keep scrollable via buttons */}
              <div className="overflow-hidden">
                <div
                  ref={railRef}
                  className="grid grid-flow-col auto-cols-[calc((100%-18px)/2)] sm:auto-cols-[calc((100%-18px)/2)] gap-[18px] overflow-hidden snap-x snap-mandatory"
                >
                  {/* hide webkit scrollbar */}
                  <div className="hidden [&>*]:hidden"></div>
                  {/* 1-up mobile / 2-up md+ */}
                  <div className="contents md:[&>*]:auto-cols-[calc((100%-18px)/2)] [&>*]:auto-cols-[100%]" />

                  {/* Card 1 */}
                  <article
                    data-card
                    className="group snap-start cursor-pointer overflow-hidden rounded-[14px] border border-[#E3DEF7] bg-white shadow-[0_12px_28px_rgba(91,80,230,0.10)]
                               transition-transform duration-150 ease-out hover:-translate-y-[3px]"
                  >
                    <img
                      src="/images/TOEFL_pages/image-1.jpg"
                      alt=""
                      className="h-44 w-full object-cover transition-transform duration-150 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="flex-1 px-4 pt-3">
                      <h3 className="mb-1 m-0 text-[16px] font-extrabold leading-snug text-[#201B39]">
                        ১. TOEFL রেজাল্ট কিভাবে চেক করবেন?
                      </h3>
                      <p className="m-0 text-[14px] leading-6 text-[#5b5871]">
                        আপনি আপনার TOEFL রেজাল্টে দুটি সুবিধাজনক উপায়ে
                        অ্যাক্সেস করতে পারেন: অনলাইন এবং মেইলের মাধ্যমে।
                      </p>
                    </div>
                    <div className="flex items-center justify-between px-4 pb-4 pt-3">
                      <a
                        href="post-1.html"
                        className="inline-flex items-center rounded-full bg-[#F0EDFF] px-3 py-2 text-[13px] font-extrabold text-[#5B50E6]
                                   hover:bg-[#5B50E6] hover:text-white focus:outline-none cursor-pointer"
                      >
                        আরও পড়ুন <span className="ml-1">▾</span>
                      </a>
                      <span className="rounded-md bg-[#FAF7FF] px-2 py-1 text-[12px] font-extrabold text-[#4a3fd6]">
                        ৩/৬
                      </span>
                    </div>
                  </article>

                  {/* Card 2 */}
                  <article
                    data-card
                    className="group snap-start cursor-pointer overflow-hidden rounded-[14px] border border-[#E3DEF7] bg-white shadow-[0_12px_28px_rgba(91,80,230,0.10)]
                               transition-transform duration-150 ease-out hover:-translate-y-[3px]"
                  >
                    <img
                      src="/images/TOEFL_pages/image-2.jpg"
                      alt=""
                      className="h-44 w-full object-cover transition-transform duration-150 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="flex-1 px-4 pt-3">
                      <h3 className="mb-1 m-0 text-[16px] font-extrabold leading-snug text-[#201B39]">
                        ২. TOEFL স্কোর রিপোর্ট ডাউনলোড
                      </h3>
                      <p className="m-0 text-[14px] leading-6 text-[#5b5871]">
                        আপনি কি আপনার ইংরেজি ভাষার দক্ষতা বিশ্ববিদ্যালয় বা
                        নিয়োগকর্তাদের কাছে প্রদর্শন করতে চান? তাহলে, TOEFL iBT
                        পরীক্ষা নেওয়া একটি চমৎকার বিকল্প!
                      </p>
                    </div>
                    <div className="flex items-center justify-between px-4 pb-4 pt-3">
                      <a
                        href="#gre-sectioned-books"
                        className="inline-flex items-center rounded-full bg-[#F0EDFF] px-3 py-2 text-[13px] font-extrabold text-[#5B50E6]
                                   hover:bg-[#5B50E6] hover:text-white focus:outline-none cursor-pointer"
                      >
                        আরও পড়ুন <span className="ml-1">▾</span>
                      </a>
                      <span className="rounded-md bg-[#FAF7FF] px-2 py-1 text-[12px] font-extrabold text-[#4a3fd6]">
                        ২/৬
                      </span>
                    </div>
                  </article>

                  {/* Card 3 */}
                  <article
                    data-card
                    className="group snap-start cursor-pointer overflow-hidden rounded-[14px] border border-[#E3DEF7] bg-white shadow-[0_12px_28px_rgba(91,80,230,0.10)]
                               transition-transform duration-150 ease-out hover:-translate-y-[3px]"
                  >
                    <img
                      src="/images/TOEFL_pages/image-3.jpg"
                      alt=""
                      className="h-44 w-full object-cover transition-transform duration-150 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="flex-1 px-4 pt-3">
                      <h3 className="mb-1 m-0 text-[16px] font-extrabold leading-snug text-[#201B39]">
                        ৩. TOEFL পরীক্ষা পুনরায় দেওয়া
                      </h3>
                      <p className="m-0 text-[14px] leading-6 text-[#5b5871]">
                        আপনি TOEFL পরীক্ষা যতবার খুশি দিতে পারেন, তবে এর জন্য
                        একটি নিয়ম অনুসরণ করতে হবে।
                      </p>
                    </div>
                    <div className="flex items-center justify-between px-4 pb-4 pt-3">
                      <a
                        href="post-3.html"
                        className="inline-flex items-center rounded-full bg-[#F0EDFF] px-3 py-2 text-[13px] font-extrabold text-[#5B50E6]
                                   hover:bg-[#5B50E6] hover:text-white focus:outline-none cursor-pointer"
                      >
                        আরও পড়ুন <span className="ml-1">▾</span>
                      </a>
                      <span className="rounded-md bg-[#FAF7FF] px-2 py-1 text-[12px] font-extrabold text-[#4a3fd6]">
                        ৪/৬
                      </span>
                    </div>
                  </article>
                </div>
              </div>

              {/* Swap arrows (no bar) */}
              <div className="mt-3 flex gap-3">
                <button
                  type="button"
                  aria-label="পূর্ববর্তী"
                  onClick={() => stepScroll(-1)}
                  className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[#5B50E6] text-white shadow-[0_12px_28px_rgba(91,80,230,0.30)]
                             hover:bg-[#4C43D6] focus:outline-none"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="পরবর্তী"
                  onClick={() => stepScroll(1)}
                  className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[#5B50E6] text-white shadow-[0_12px_28px_rgba(91,80,230,0.30)]
                             hover:bg-[#4C43D6] focus:outline-none"
                >
                  ›
                </button>
              </div>
            </section>

            {/* ============== LONG LIST: #1 ============== */}
            <section
              id="gre-top-books"
              className="rounded-[18px] border border-[#E3DEF7] bg-white p-4 md:p-6 shadow-[0_10px_28px_rgba(91,80,230,0.08)]"
            >
              <h2 className="m-0 mb-4 text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold text-[#5B50E6]">
                ১. TOEFL রেজাল্ট কিভাবে চেক করবেন?
              </h2>

              <p className="m-0 mb-2 text-[14px] sm:text-[16px] leading-8 text-[#241F3A]">
                অনলাইন অ্যাক্সেস বেছে নিলে আপনি শুধু তাৎক্ষণিক ফলাফল পাবেন না,
                সময় এবং শ্রমও বাঁচবে। TOEFL হোম এডিশনের ফলাফল পাওয়ার
                প্রক্রিয়া সাধারণ TOEFL টেস্ট সেন্টার ভার্সনের মতোই।
              </p>

              <p className="m-0 mb-2 text-[14px] sm:text-[16px] leading-8 text-[#241F3A]">
                যদি আপনি আপনার TOEFL ফলাফলের একটি ফিজিক্যাল কপি ডাকের মাধ্যমে
                পেতে চান, তবে তা টেস্ট দেওয়ার আগে অনুরোধ করতে হবে।
              </p>

              <div className="rounded-xl bg-purple-100 p-4 text-slate-800 md:p-6 leading-relaxed">
                TOEFL iBT স্কোর রিপোর্ট আপনার টেস্টের তারিখ থেকে ১১ দিনের মধ্যে
                পাঠানো হবে। মনে রাখবেন, TOEFL ফলাফল পরীক্ষার তারিখ থেকে ২ বছর
                পর্যন্ত বৈধ থাকে।
              </div>

              <p className="m-0 mt-3 text-[14px] sm:text-[16px] leading-8 text-[#241F3A]">
                ফলাফল পরীক্ষা করার জন্য, আপনাকে কেবল ETS-এ আপনার অ্যাকাউন্টে লগ
                ইন করতে হবে। লগ ইন করার পর, আপনার TOEFL iBT স্কোর স্ক্রিনে দেখা
                যাবে। স্ক্রিনে সাধারণত আপনার মোট স্কোর এবং প্রতিটি সেকশনের স্কোর
                দেখানো থাকে।
              </p>

              <p className="m-0 mt-3 text-[14px] sm:text-[16px] leading-8 text-[#241F3A]">
                আপনার অ্যাকাউন্টে স্কোর দেখানোর ৮ দিনের মধ্যে, একটি ডাউনলোডযোগ্য
                PDF রিপোর্ট পাওয়া যাবে যাতে বিস্তারিত স্কোর থাকবে। এই রিপোর্ট
                আপনার রেকর্ড রাখার এবং বিশ্ববিদ্যালয়গুলিতে পাঠানোর জন্য
                ব্যবহারযোগ্য।
              </p>

              <div className="mt-3 rounded-xl bg-purple-100 p-4 text-slate-800 md:p-6 leading-relaxed">
                দ্রষ্টব্য:ডেলিভারি সময় আপনার এলাকার ডাক সেবার উপর নির্ভর করে
                ভিন্ন হতে পারে।
              </div>
            </section>

            {/* ============== LONG LIST: #2 ============== */}
            <section
              id="gre-sectioned-books"
              className="rounded-[18px] border border-[#E3DEF7] bg-white p-4 md:p-6 shadow-[0_10px_28px_rgba(91,80,230,0.08)]"
            >
              <h2 className="m-0 mb-4 text-[22px] sm:text-[32px] lg:text-[40px] font-extrabold leading-tight text-[#5B50E6]">
                ২. TOEFL স্কোর রিপোর্ট ডাউনলোড
              </h2>

              <p className="m-0 mb-2 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                একবার আপনি পরীক্ষা দিলে, আপনার TOEFL স্কোর রিপোর্টে প্রবেশ করতে
                হবে যাতে আপনি আপনার পারফরম্যান্স দেখতে পারেন।
              </p>

              <p className="m-0 mb-3 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                TOEFL স্কোর রিপোর্ট একটি সরকারি নথি যা পরীক্ষায় আপনার
                পারফরম্যান্সের বিস্তৃত বিবরণ প্রদান করে। এতে আপনার মোট স্কোর,
                সেকশন অনুযায়ী স্কোর, পরীক্ষা তারিখ এবং অন্যান্য গুরুত্বপূর্ণ
                তথ্য অন্তর্ভুক্ত থাকে।
              </p>

              <p className="m-0 mb-2 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                <strong>
                  TOEFL স্কোর রিপোর্ট অ্যাক্সেস করার জন্য দুটি বিকল্প রয়েছে:
                </strong>
              </p>
              <ol className="list-decimal pl-5 text-[14px] sm:text-[16px] leading-8 text-[#211B3A] space-y-2">
                <li>
                  <strong>অনলাইন অ্যাক্সেস: </strong>পরীক্ষার তারিখ থেকে প্রায়
                  ছয় দিনের মধ্যে আপনি আপনার ETS অ্যাকাউন্টে লগ ইন করে আপনার
                  স্কোর অনলাইনে দেখতে পারবেন ETS TOEFL ওয়েবসাইট থেকে। অনলাইন
                  অ্যাক্সেসের মাধ্যমে, আপনি একটি PDF রিপোর্টও ডাউনলোড করতে পারেন
                  যা আপনার স্কোরের বিস্তারিত তথ্য প্রদান করে, যা বিশ্ববিদ্যালয়
                  বা নিয়োগকর্তার সাথে শেয়ার করতে সহায়ক।
                </li>
                <li>
                  <strong>ডাউনলোডযোগ্য PDF: </strong> আপনার অ্যাকাউন্টে স্কোর
                  প্রদর্শিত হওয়ার আট দিনের মধ্যে একটি ডাউনলোডযোগ্য PDF রিপোর্ট
                  পাওয়া যায়। এই রিপোর্ট আপনার রেকর্ড রাখার এবং বিশ্ববিদ্যালয়ে
                  পাঠানোর জন্য সুবিধাজনক।
                </li>
              </ol>
            </section>

            {/* ============== LONG LIST: #3 ============== */}
            <section className="rounded-[18px] border border-[#E3DEF7] bg-white p-4 md:p-6 shadow-[0_10px_28px_rgba(91,80,230,0.08)]">
              <h2 className="m-0 mb-3 text-[20px] sm:text-[28px] lg:text-[34px] font-extrabold leading-tight text-[#5B50E6]">
                ৩. TOEFL পরীক্ষা পুনরায় দেওয়া
              </h2>
              <p className="m-0 mb-2 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                TOEFL পরীক্ষা দেওয়ার পরে, আরেকটি পরীক্ষার জন্য রেজিস্ট্রেশন
                করার আগে আপনাকে অন্তত ৩ দিন অপেক্ষা করতে হবে। অর্থাৎ, পূর্ববর্তী
                পরীক্ষার ৩ দিনের মধ্যে নতুন পরীক্ষা নেওয়া যাবে না।
              </p>
              <p className="m-0 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                তবে, আপনি একাধিক পরীক্ষা তারিখ নির্ধারণ করতে পারেন যদি প্রতিটি
                পরীক্ষার মধ্যে অন্তত ৩ দিনের ফাঁক থাকে।
              </p>
            </section>

            {/* ============== LONG LIST: #4 ============== */}
            <section className="rounded-[18px] border border-[#E3DEF7] bg-white p-4 md:p-6 shadow-[0_10px_28px_rgba(91,80,230,0.08)]">
              <h2 className="m-0 mb-3 text-[20px] sm:text-[28px] lg:text-[34px] font-extrabold leading-tight text-[#5B50E6]">
                ৪. TOEFL রেজাল্ট পুনর্মূল্যায়নের জন্য অনুরোধ কিভাবে করবেন?
              </h2>
              <p className="m-0 mb-3 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                প্রতি রিকোয়েস্টের জন্য চার্জ US$৮০। যদি উভয় সেকশন রিভিউ করতে
                হয়, তবে মোট ফি হবে US$১৬০।
              </p>

              <p className="m-0 mb-2 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                <strong>TOEFL রেজাল্ট রিভিউ করার জন্য উপলব্ধ অপশনগুলো:</strong>
              </p>
              <ol className="list-decimal pl-5 text-[14px] sm:text-[16px] leading-8 text-[#211B3A] space-y-2">
                <li>
                  <strong>ETS অ্যাকাউন্ট: </strong>আবেদনকারীরা তাদের ETS
                  অ্যাকাউন্ট বা TOEFL অফিসিয়াল অ্যাপের মাধ্যমে অনলাইনে রিভিউ
                  অনুরোধ করতে পারেন।
                </li>
                <li>
                  <strong>TOEFL iBT স্কোর রিভিউ রিকোয়েস্ট ফর্ম: </strong>{" "}
                  আবেদনকারীরা ফর্মটি পূরণ করে প্রদত্ত নির্দেশনা অনুযায়ী জমা
                  দিতে পারেন।
                </li>
              </ol>

              <div className="mt-3 rounded-xl bg-purple-100 p-4 text-slate-800 md:p-6 leading-relaxed">
                <p className="m-0 mb-2 text-[14px] sm:text-[16px] leading-8">
                  <strong>গুরুত্বপূর্ণ বিষয়গুলি মনে রাখার জন্য:</strong>
                </p>
                <ol className="list-decimal pl-5 text-[14px] sm:text-[16px] leading-8 text-[#211B3A] space-y-1">
                  <li>কেবল একবারের জন্য রিভিউ অনুরোধ করা যাবে।</li>
                  <li>
                    যদি উভয় সেকশনের জন্য রিভিউ প্রয়োজন হয়, তবে একটি একক
                    অনুরোধ করতে হবে; পৃথক অনুরোধ গ্রহণ করা হবে না।
                  </li>
                  <li>
                    TOEFL ফলাফল রিভিউ করার পরে, সংশোধিত স্কোরগুলো অফিসিয়াল হয়ে
                    যাবে এবং মূল স্কোরের স্থলে আসবে।
                  </li>
                  <li>
                    যদি আবেদনকারী ইতিমধ্যেই তাদের TOEFL স্কোর কোনো প্রতিষ্ঠান বা
                    সংস্থায় পাঠানোর জন্য অনুরোধ করে থাকে, তবে স্কোর
                    পুনঃপর্যালোচনা করা যাবে না।
                  </li>
                </ol>
              </div>

              <p className="m-0 mt-3 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                বিঃদ্রঃ অনুরোধ ও পেমেন্ট সম্পন্ন করার পরে, সংশোধিত TOEFL স্কোর
                সাধারণত ১–৩ সপ্তাহের মধ্যে রিপোর্ট করা হয়।
              </p>
            </section>

            {/* পরবর্তী ধাপ */}
            <section
              aria-labelledby="next-steps-title"
              className="rounded-[18px] border border-[#E3DEF7] bg-[#F0EDFF] p-4 md:p-5 shadow-[0_8px_22px_rgba(91,80,230,0.08)]"
            >
              <h3
                id="next-steps-title"
                className="m-0 mb-3 text-[18px] sm:text-[22px] font-extrabold text-[#4C43D6]"
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
                    className="flex min-h-[160px] flex-col gap-2 rounded-xl border border-[#E3DEF7] bg-white p-5 shadow-[0_10px_28px_rgba(91,80,230,0.10)]"
                  >
                    <h4 className="m-0 text-[16px] font-extrabold text-[#211B3A]">
                      {s.t}
                    </h4>
                    <a
                      className="mt-auto inline-flex items-center gap-1 font-extrabold text-[#5B50E6] hover:text-[#4C43D6]"
                      href="#!"
                    >
                      এখনই পড়ুন <span>→</span>
                    </a>
                  </article>
                ))}
              </div>
            </section>

            {/* Info bank: IELTS */}
            <section className="rounded-[18px] border border-[#E3DEF7] bg-[#F0EDFF] p-4 md:p-5 shadow-[0_8px_22px_rgba(91,80,230,0.08)]">
              <h3 className="m-0 mb-3 text-[18px] sm:text-[22px] font-extrabold text-[#2563EB]">
                IELTS গুরুত্বপূর্ণ তথ্য
              </h3>
              <div
                className="grid overflow-hidden rounded-xl border border-[#E3DEF7] bg-white [grid-template-columns:repeat(4,1fr)]
                              max-[1024px]:[grid-template-columns:repeat(3,1fr)]
                              max-[760px]:[grid-template-columns:repeat(2,1fr)]
                              max-[520px]:[grid-template-columns:repeat(1,1fr)]"
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
                    className="relative flex items-center justify-between gap-4 border-l border-t border-[#E3DEF7] px-4 py-3 font-bold text-[#201B39] hover:bg-[#F7F5FF]"
                  >
                    {label}{" "}
                    <span className="font-extrabold text-[#5B50E6]">→</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Info bank: TOEFL */}
            <section className="rounded-[18px] border border-[#E3DEF7] bg-[#F0EDFF] p-4 md:p-5 shadow-[0_8px_22px_rgba(91,80,230,0.08)]">
              <h3 className="m-0 mb-3 text-[18px] sm:text-[22px] font-extrabold text-[#2563EB]">
                TOEFL গুরুত্বপূর্ণ তথ্য
              </h3>
              <div
                className="grid overflow-hidden rounded-xl border border-[#E3DEF7] bg-white [grid-template-columns:repeat(3,1fr)]
                              max-[760px]:[grid-template-columns:repeat(2,1,1fr)]
                              max-[520px]:[grid-template-columns:repeat(1,1fr)]"
              >
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
                    className="relative flex items-center justify-between gap-4 border-l border-t border-[#E3DEF7] px-4 py-3 font-bold text-[#201B39] hover:bg-[#F7F5FF]"
                  >
                    {label}{" "}
                    <span className="font-extrabold text-[#5B50E6]">→</span>
                  </a>
                ))}
              </div>
            </section>

            {/* ===== FAQ ===== */}
            <section
              id="toefl-elite-faq"
              className="rounded-[18px] border border-[#E3DEF7] bg-white p-4 md:p-5 shadow-[0_10px_28px_rgba(91,80,230,0.08)]"
            >
              <h3 className="m-0 mb-3 text-[18px] sm:text-[24px] font-extrabold text-[#2563EB]">
                শিক্ষার্থীদের করা সবচেয়ে বেশি প্রশ্ন সমূহ–
              </h3>

              <div className="border-t border-[#E3DEF7]">
                {/* Q1 */}
                <details className="group border-b border-[#E3DEF7]" open>
                  <summary className="flex cursor-pointer list-none items-center py-3 pl-3 pr-10 font-bold text-[#201B39]">
                    <span>
                      শীর্ষ বিশ্ববিদ্যালয়গুলোর জন্য ভালো TOEFL স্কোর কী?
                    </span>
                    <span className="ml-auto inline-block group-open:rotate-180">
                      ^
                    </span>
                  </summary>
                  <div className="px-3 pb-3 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                    <p>
                      প্রোগ্রামভেদে ভিন্ন হলেও সাধারণ হদিস হিসেবে{" "}
                      <strong>iBT 100–105+</strong> (প্রতি সেকশনে 22–26) স্কোরকে
                      টপ-টিয়ার বিশ্ববিদ্যালয়গুলো প্রতিযোগিতামূলক ধরে। কিছু
                      প্রোগ্রাম <em>সাবস্কোর ন্যূনতম</em>ও দেয়—যেমন Speaking ≥
                      23, Writing ≥ 24 ইত্যাদি। গবেষণা/প্রফেশনাল স্কুলগুলোতে
                      কখনও <strong>105–110+</strong> চাওয়া হয়।
                    </p>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>
                        <strong>আন্ডারগ্র্যাড/অনেক মাস্টার্স:</strong> 90–100
                        যথেষ্ট হতে পারে, তবে বেশি স্কোর ভর্তি/স্কলারশিপে সুবিধা
                        দেয়।
                      </li>
                      <li>
                        <strong>উচ্চ প্রতিযোগিতার প্রোগ্রাম:</strong> 103–110
                        লক্ষ্য করুন; সাবস্কোর কাটা আছে কি না দেখে প্রস্তুতি নিন।
                      </li>
                    </ul>
                    <p>
                      শেষ কথা—<strong>অফিশিয়াল প্রোগ্রাম পেজ</strong>ের
                      সাম্প্রতিক নীতিই চূড়ান্ত। আবেদন করার আগে সেটি মিলিয়ে নিন।
                    </p>
                  </div>
                </details>

                {/* Q2 */}
                <details className="group border-b border-[#E3DEF7]">
                  <summary className="flex cursor-pointer list-none items-center py-3 pl-3 pr-10 font-bold text-[#201B39]">
                    <span>আমি কীভাবে আমার TOEFL ফলাফল পরীক্ষা করতে পারি?</span>
                    <span className="ml-auto inline-block group-open:rotate-180">
                      ^
                    </span>
                  </summary>
                  <div className="px-3 pb-3 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        <strong>ETS অ্যাকাউন্টে</strong> লগইন করুন (যে ইমেইল
                        দিয়ে রেজিস্টার করেছিলেন)।
                      </li>
                      <li>
                        <em>My Tests → Scores</em> সেকশনে গিয়ে আপনার টেস্টের
                        স্কোর দেখুন/ডাউনলোড করুন (PDF রিপোর্ট পাওয়া যায়)।
                      </li>
                      <li>
                        Reading/Listening-এর <em>অনঅফিশিয়াল</em> স্কোর সাথে
                        সাথেই দেখা যেতে পারে;{" "}
                        <strong>অফিশিয়াল পূর্ণ স্কোর</strong> সাধারণত কয়েক
                        কর্মদিবসের মধ্যে প্রকাশ পায়।
                      </li>
                      <li>
                        প্রয়োজনে সেখান থেকেই <strong>ইনস্টিটিউশন-সেন্ড</strong>{" "}
                        রিকোয়েস্ট দিন বা অতিরিক্ত রিপোর্ট অর্ডার করুন।
                      </li>
                    </ol>
                    <p>
                      স্কোর রিলিজ হলে ETS ইমেইলও পাঠায়—তবু অ্যাকাউন্টে লগইন
                      করলেই সবচেয়ে নিশ্চিন্ত।
                    </p>
                  </div>
                </details>

                {/* Q3 */}
                <details className="group border-b border-[#E3DEF7]">
                  <summary className="flex cursor-pointer list-none items-center py-3 pl-3 pr-10 font-bold text-[#201B39]">
                    <span>আমি কি আমার TOEFL স্কোর বাতিল করতে পারি?</span>
                    <span className="ml-auto inline-block group-open:rotate-180">
                      ^
                    </span>
                  </summary>
                  <div className="px-3 pb-3 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                    <p>
                      হ্যাঁ। পরীক্ষা শেষে সাবমিটের আগে আপনি{" "}
                      <strong>স্কোর বাতিল (Cancel)</strong> করতে পারেন—তাহলে তা
                      কোনো ইনস্টিটিউশনে যাবে না এবং রিপোর্টও দেখা যাবে না। পরে
                      মত বদলালে নির্দিষ্ট সময়সীমার মধ্যে
                      <strong>Reinstate</strong> করা যায় (সাধারণত ফি প্রযোজ্য)।
                      সময়সীমা/ফি দেশভেদে আপডেট হতে পারে, তাই ETS–এর বর্তমান নীতি
                      দেখুন।
                    </p>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>
                        যদি নিশ্চিত হন স্কোর লক্ষ্যমাত্রা ছুঁয়নি—তবেই বাতিল
                        করুন; না হলে প্রথমে দেখে নেওয়াই ভালো।
                      </li>
                      <li>
                        বাতিল করলে <em>ফ্রি ৪টি স্কোর রিপোর্ট</em> সুবিধাটিও
                        বাতিল হয়—রিইনস্টেট না করলে আর যাবে না।
                      </li>
                    </ul>
                  </div>
                </details>

                {/* Q4 */}
                <details className="group border-b border-[#E3DEF7]">
                  <summary className="flex cursor-pointer list-none items-center py-3 pl-3 pr-10 font-bold text-[#201B39]">
                    <span>B2 লেভেল কি ভালো TOEFL স্কোর?</span>
                    <span className="ml-auto inline-block group-open:rotate-180">
                      ^
                    </span>
                  </summary>
                  <div className="px-3 pb-3 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                    <p>
                      CEFR–এর <strong>B2</strong> সাধারণত{" "}
                      <strong>TOEFL iBT ~72–94</strong> রেঞ্জের সমতুল্য ধরা হয়।
                      এটি অনেক বিশ্ববিদ্যালয়ের জন্য গ্রহণযোগ্য, বিশেষ করে
                      আন্ডারগ্র্যাড বা কম প্রতিযোগিতার প্রোগ্রামে। তবে শীর্ষ বা
                      রিসার্চ-ইনটেনসিভ প্রোগ্রামগুলো সাধারণত{" "}
                      <strong>C1 (≈ 95–110+)</strong> পছন্দ করে।
                    </p>
                    <p>
                      আপনার টার্গেট যদি টপ-টিয়ার হয়, তাহলে{" "}
                      <strong>95–105+</strong> লক্ষ্য করা যুক্তিযুক্ত।
                    </p>
                  </div>
                </details>

                {/* Q5 */}
                <details className="group border-b border-[#E3DEF7]">
                  <summary className="flex cursor-pointer list-none items-center py-3 pl-3 pr-10 font-bold text-[#201B39]">
                    <span>আমি কি TOEFL পরীক্ষা দুবার দিতে পারি?</span>
                    <span className="ml-auto inline-block group-open:rotate-180">
                      ^
                    </span>
                  </summary>
                  <div className="px-3 pb-3 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                    <p>
                      অবশ্যই। আপনি যতবার খুশি <strong>রিটেক</strong> করতে
                      পারেন—দুই পরীক্ষার মধ্যে সাধারণত
                      <strong>ন্যূনতম ৩ দিনের</strong> ব্যবধান রাখতে হয় (ETS
                      নীতিমালা অনুযায়ী)। স্কোর-ইমপ্রুভ করতে চাইলে প্রথম টেস্টের
                      ভুল বিশ্লেষণ করে ২–৪ সপ্তাহ নিবিড় প্রস্তুতির পর আবার দিন।
                    </p>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>
                        <strong>স্মার্ট স্ট্রাটেজি:</strong> দুর্বল সেকশনে
                        লক্ষ্যভিত্তিক ড্রিল + ২টি টাইমড মক → তারপর রিটেক।
                      </li>
                      <li>
                        <strong>স্কোর সেন্ডিং:</strong> যে স্কোর ভালো, সেটিই
                        বিশ্ববিদ্যালয়ে পাঠান; অনেক স্কুল “সর্বোচ্চ স্কোর” গ্রহণ
                        করে।
                      </li>
                    </ul>
                    <p>
                      রিটেক গ্যাপ/নীতিতে পরিবর্তন হতে পারে—পরীক্ষার স্লট বুক
                      করার আগে ETS–এর বর্তমান নিয়ম দেখে নিন।
                    </p>
                  </div>
                </details>
              </div>
            </section>
          </div>

          {/* ================= RIGHT (sidebar) ================= */}
          <aside aria-labelledby="more-title">
            <div className="flex items-center justify-between px-1 pb-2">
              <h2
                id="more-title"
                className="m-0 text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold text-[#17132E]"
              >
                আরও পড়ুন
              </h2>
              <a
                className="inline-flex items-center gap-1 text-sm font-extrabold text-[#5B50E6] hover:underline"
                href="#"
              >
                সব দেখুন
              </a>
            </div>

            <div className="grid gap-[14px]">
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
                <a key={i} href="#" className="block no-underline text-inherit">
                  <img
                    src={s.img}
                    alt=""
                    className="h-[184px] w-full rounded-[12px] object-cover"
                  />
                  <div className="px-0.5 pt-2">
                    <h3 className="m-0 my-1 line-clamp-2 text-[16px] font-extrabold leading-snug text-[#211B3A]">
                      {s.t}
                    </h3>
                    <p className="m-0 text-[13px] text-[#776F92]">{s.m}</p>
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
