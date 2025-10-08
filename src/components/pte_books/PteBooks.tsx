import React, { useRef } from "react";

export default function PteBooks() {
  const railRef = useRef<HTMLDivElement | null>(null);

  const stepScroll = (dir: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const firstCard = rail.querySelector<HTMLElement>("[data-card]");
    const cardW = firstCard ? firstCard.getBoundingClientRect().width : rail.clientWidth;
    const gap = 16; // matches gap-4 (we use 18px in original CSS)
    const offset = Math.round(cardW + gap);
    rail.scrollBy({ left: dir * offset, behavior: "smooth" });
  };

  return (
    <main className="w-full min-h-screen bg-[#EDE6FF] px-4 sm:px-6 lg:px-8 py-7 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1180px] mx-auto">
        {/* ================= LEFT ================= */}
        <div className="lg:col-span-7 space-y-6 min-w-0">
          {/* Article card */}
          <article className="rounded-2xl bg-white border border-[#E3DEF7] shadow-[0_10px_28px_rgba(91,80,230,.10)] p-5 sm:p-6">
            <nav className="text-sm text-[#6F6A84] mb-2">
              <a href="#" className="hover:underline">
                বিদেশে উচ্চশিক্ষা
              </a>{" "}
              /
              <a href="#" className="hover:underline ml-1">
                পরীক্ষাসমূহ
              </a>{" "}
              /
              <a href="#" className="hover:underline ml-1">
                PTE
              </a>{" "}
              /<span className="font-semibold ml-1">বইসমূহ</span>
            </nav>

            <h1 className="text-[#5B50E6] font-extrabold leading-tight text-3xl md:text-4xl mb-2">
              ২০২৫ সালের পরীক্ষার জন্য PTE বই:{" "}
              <br className="hidden sm:block" />
              সেকশন অনুযায়ী বই ও স্টাডি ম্যাটেরিয়াল
            </h1>

            <p className="text-xs sm:text-sm text-[#6F6A84] flex items-center gap-2 mb-3">
              <span aria-hidden>⏱️</span> আপডেট করা হয়েছে: জুন ২৫, ২০২৫, ০৬ঃ৩৪
            </p>

            <div className="space-y-3 text-[15px] leading-8 text-[#241F3A]">
              <p>
                PTE একাডেমিক পরীক্ষার প্রস্তুতিতে সঠিক স্টাডি ম্যাটেরিয়াল
                নির্বাচন একটি বড় পরিবর্তন আনতে পারে। সঠিক বই ব্যবহার করে আপনি
                পরীক্ষার কৌশল আয়ত্ত করতে পারবেন, সময় ব্যবস্থাপনা উন্নত করবেন,
                এবং প্রতিটি সেকশন দক্ষতার সঙ্গে মোকাবিলা করার আত্মবিশ্বাস অর্জন
                করবেন।
              </p>
              <p>
                PTE একাডেমিক পরীক্ষা সারাবছর অনুষ্ঠিত হয়, যা আপনাকে সুবিধাজনক
                পরীক্ষার তারিখ বেছে নেওয়ার নমনীয়তা দেয়। ২০২৫ সালের হিসাবে,
                বাংলাদেশে PTE পরীক্ষার ফি ২৭,০০০ BDT।
              </p>
              <p>
                আপনার প্রস্তুতি সহজ করতে, আমরা শীর্ষ ৭টি PTE বইয়ের একটি তালিকা
                তৈরি করেছি, যাতে রয়েছে বিশেষজ্ঞ-প্রস্তাবিত রিসোর্স এবং PTE PDF
                বই, যা আপনাকে কার্যকরভাবে অনুশীলন করতে এবং উচ্চ স্কোর অর্জন করতে
                সহায়তা করবে।
              </p>
              <p>
                আপনি যদি গভীর ব্যাখ্যা বা বাস্তব পরীক্ষার সিমুলেশন চান, এই PTE
                বইগুলো আপনাকে সাফল্যের পথে নিয়ে যাবে।
              </p>
            </div>
          </article>

          {/* Rail: “এই পৃষ্ঠায় →” */}
          <section className="rounded-2xl bg-white border border-[#E3DEF7] shadow-[0_10px_28px_rgba(91,80,230,.10)] p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-[#5B50E6] font-extrabold text-2xl">
                এই পৃষ্ঠায় →
              </h2>
            </div>

            {/* Horizontal rail (cards) */}
            <div
              ref={railRef}
              className="
                grid grid-flow-col gap-[18px]
                auto-cols-[100%] md:auto-cols-[calc((100%-18px)/2)]
                overflow-x-auto snap-x snap-mandatory scroll-smooth
                [&::-webkit-scrollbar]:hidden [scrollbar-width:none]
              "
            >
              {/* Card 1 */}
              <article
                data-card
                className="group bg-white border border-[#E3DEF7] rounded-[14px] shadow-[0_12px_28px_rgba(91,80,230,.10)] overflow-hidden snap-start cursor-pointer transition-transform duration-150 ease-out hover:-translate-y-[3px]"
              >
                <img
                  src="/images/pte_books/image-4.jpg"
                  alt="Reading book"
                  className="w-full h-44 object-cover transition-transform duration-150 ease-out group-hover:scale-[1.02]"
                />
                <div className="px-[14px] pt-3 flex-1">
                  <h3 className="m-0 mb-1 font-extrabold text-[16px] text-[#201B39] leading-snug">
                    ১. কোন বই দিয়ে আপনার পরীক্ষার প্রস্তুতি শুরু করবেন?
                  </h3>
                  <p className="m-0 text-[14px] text-[#5b5871] leading-6">
                    শুরুতে কনসেপ্ট-ভিত্তিক বই ও অফিশিয়াল প্রশ্নপত্র—দুটোই লাগবে।
                  </p>
                </div>
                <div className="px-[14px] pb-[14px] pt-3 flex items-center justify-between">
                  <a
                    href="#pte-1"
                    className="inline-flex items-center gap-[6px] font-extrabold text-[13px] text-[#5B50E6] bg-[#F0EDFF] rounded-full px-3 py-2 hover:bg-[#5B50E6] hover:text-white"
                  >
                    আরও পড়ুন <span>▾</span>
                  </a>
                  <span className="text-[12px] font-extrabold text-[#4a3fd6] bg-[#FAF7FF] rounded-full px-[10px] py-[6px]">
                    ৩/৬
                  </span>
                </div>
              </article>

              {/* Card 2 */}
              <article
                data-card
                className="group bg-white border border-[#E3DEF7] rounded-[14px] shadow-[0_12px_28px_rgba(91,80,230,.10)] overflow-hidden snap-start cursor-pointer transition-transform duration-150 ease-out hover:-translate-y-[3px]"
              >
                <img
                  src="/images/pte_books/image-5.jpg"
                  alt="Library"
                  className="w-full h-44 object-cover transition-transform duration-150 ease-out group-hover:scale-[1.02]"
                />
                <div className="px-[14px] pt-3 flex-1">
                  <h3 className="m-0 mb-1 font-extrabold text-[16px] text-[#201B39] leading-snug">
                    ২. সেকশনভিত্তিক সেরা PTE বই
                  </h3>
                  <p className="m-0 text-[14px] text-[#5b5871] leading-6">
                    রিডিং, লিসনিং, স্পিকিং ও রাইটিং–প্রতি সেকশনের জন্য curated
                    তালিকা।
                  </p>
                </div>
                <div className="px-[14px] pb-[14px] pt-3 flex items-center justify-between">
                  <a
                    href="#pte-2"
                    className="inline-flex items-center gap-[6px] font-extrabold text-[13px] text-[#5B50E6] bg-[#F0EDFF] rounded-full px-3 py-2 hover:bg-[#5B50E6] hover:text-white"
                  >
                    আরও পড়ুন <span>▾</span>
                  </a>
                  <span className="text-[12px] font-extrabold text-[#4a3fd6] bg-[#FAF7FF] rounded-full px-[10px] py-[6px]">
                    ৪/৬
                  </span>
                </div>
              </article>

              {/* Card 3 */}
              <article
                data-card
                className="group bg-white border border-[#E3DEF7] rounded-[14px] shadow-[0_12px_28px_rgba(91,80,230,.10)] overflow-hidden snap-start cursor-pointer transition-transform duration-150 ease-out hover:-translate-y-[3px]"
              >
                <img
                  src="/images/pte_books/image-6.jpg"
                  alt="Study desk"
                  className="w-full h-44 object-cover transition-transform duration-150 ease-out group-hover:scale-[1.02]"
                />
                <div className="px-[14px] pt-3 flex-1">
                  <h3 className="m-0 mb-1 font-extrabold text-[16px] text-[#201B39] leading-snug">
                    ৩. আপনার জন্য কোন কম্বিনেশনটি ঠিক?
                  </h3>
                  <p className="m-0 text-[14px] text-[#5b5871] leading-6">
                    সময় কম? এই বাণ্ডেল দিয়ে ৮–১০ সপ্তাহে ফিনিশ করুন।
                  </p>
                </div>
                <div className="px-[14px] pb-[14px] pt-3 flex items-center justify-between">
                  <a
                    href="#pte-3"
                    className="inline-flex items-center gap-[6px] font-extrabold text-[13px] text-[#5B50E6] bg-[#F0EDFF] rounded-full px-3 py-2 hover:bg-[#5B50E6] hover:text-white"
                  >
                    আরও পড়ুন <span>▾</span>
                  </a>
                  <span className="text-[12px] font-extrabold text-[#4a3fd6] bg-[#FAF7FF] rounded-full px-[10px] py-[6px]">
                    ৫/৬
                  </span>
                </div>
              </article>
            </div>

            {/* Arrows (card swapping) */}
            <div className="flex gap-2 pt-3">
              <button
                aria-label="পূর্ববর্তী"
                className="w-12 h-12 rounded-full grid place-items-center text-white bg-[#5B50E6] shadow-[0_12px_28px_rgba(91,80,230,.30)] hover:-translate-y-[2px] transition-transform"
                onClick={() => stepScroll(-1)}
              >
                ‹
              </button>
              <button
                aria-label="পরবর্তী"
                className="w-12 h-12 rounded-full grid place-items-center text-white bg-[#5B50E6] shadow-[0_12px_28px_rgba(91,80,230,.30)] hover:-translate-y-[2px] transition-transform"
                onClick={() => stepScroll(1)}
              >
                ›
              </button>
            </div>
          </section>

          {/* ১. কেন PTE বই গুরুত্বপূর্ণ */}
          <section
            id="pte-why"
            className="bg-white border border-[#E3DEF7] rounded-[18px] shadow-[0_10px_28px_rgba(91,80,230,.08)] p-5"
          >
            <h2 className="m-0 mb-4 text-[#5B50E6] font-bold text-[22px] sm:text-[30px]">
              ১. কেন PTE বইগুলো আপনার পরীক্ষার প্রস্তুতির জন্য গুরুত্বপূর্ণ?
            </h2>
            <p className="text-[#211B3A] leading-8 text-[14px] sm:text-[16px]">
              PTE পরীক্ষার জন্য প্রস্তুতি নিতে হলে সঠিক স্টাডি মেটেরিয়াল
              অত্যন্ত গুরুত্বপূর্ণ, যাতে আপনি উচ্চ স্কোর পেতে পারেন...
            </p>
            <p className="text-[#211B3A] leading-8 text-[14px] sm:text-[16px]">
              উচ্চমানের বইতে বিনিয়োগ করা আপনার PTE প্রস্তুতির জন্য একটি বড়
              পরিবর্তন আনতে পারে।
            </p>
            <h3 className="text-[#5B50E6] font-bold mt-4 mb-2 text-[18px] sm:text-[22px]">
              PTE সফলতার জন্য মানসম্মত স্টাডি ম্যাটেরিয়ালের ভূমিকা
            </h3>
            <ul className="list-disc ml-5 text-[#211B3A] leading-8 text-[14px] sm:text-[16px]">
              <li>পরীক্ষার কাঠামো সম্পূর্ণভাবে বোঝা</li>
              <li>আসল পরীক্ষার মতো প্রশ্ন দিয়ে প্র্যাকটিস করা</li>
              <li>সময় ব্যবস্থাপনার দক্ষতা উন্নত করা</li>
              <li>শব্দভাণ্ডার ও ব্যাকরণ জ্ঞান বাড়ানো</li>
            </ul>
            <h3 className="text-[#5B50E6] font-bold mt-4 mb-2 text-[18px] sm:text-[22px]">
              অনলাইন রিসোর্সের সাথে PTE বই কীভাবে পরিপূরক হয়
            </h3>
            <ul className="list-disc ml-5 text-[#211B3A] leading-8 text-[14px] sm:text-[16px]">
              <li>বিস্তারিত ব্যাখ্যা এবং স্ট্র্যাটেজি প্রদান করে</li>
              <li>কাঠামোবদ্ধ স্টাডি প্ল্যান অফার করে</li>
              <li>ফুল-লেন্থ প্র্যাকটিস টেস্ট অন্তর্ভুক্ত করে</li>
            </ul>
            <p className="text-[#211B3A] leading-8 text-[14px] sm:text-[16px]">
              বইয়ের সঙ্গে অনলাইন প্র্যাকটিস মিলিয়ে ব্যবহার করলে একটি পূর্ণাঙ্গ
              প্রস্তুতি কৌশল তৈরি হয়।
            </p>
          </section>

          {/* ২. শীর্ষ ৭টি বই */}
          <section
            id="pte-2"
            className="bg-white border border-[#E3DEF7] rounded-[18px] shadow-[0_10px_28px_rgba(91,80,230,.08)] p-5"
          >
            <h2 className="m-0 mb-4 text-[#5B50E6] font-bold text-[22px] sm:text-[30px]">
              ২. শীর্ষ ৭টি PTE একাডেমিক বই
            </h2>
            <p className="text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
              আমরা একটি তালিকা প্রস্তুত করেছি যেটিতে সুপারিশকৃত PTE একাডেমিক
              বইগুলো রয়েছে...
            </p>
            <p className="text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
              PTE প্রস্তুতির জন্য সেরা বইগুলোর তালিকা নিচে দেওয়া হলো:
            </p>

            {[
              {
                t: "1. The Official Guide to PTE Academic",
                price: "মূল্য: ৪৮০০ BDT (৪০ USD)",
                pros: [
                  "প্রামাণিক পরীক্ষার বিষয়বস্তু",
                  "সমস্ত সেকশন ব্যাপকভাবে কভার করে",
                  "ডিজিটাল অ্যাক্সেস অন্তর্ভুক্ত",
                ],
                cons: ["কিছুটা ব্যয়বহুল", "অতিরিক্ত প্র্যাকটিস প্রশ্নের অভাব"],
                features: [
                  "PTE Academic নির্মাতাদের দ্বারা লেখা",
                  "পূর্ণ দৈর্ঘ্যের প্র্যাকটিস টেস্ট অন্তর্ভুক্ত",
                  "বিস্তারিত ব্যাখ্যা এবং স্কোরিং ক্রাইটেরিয়া প্রদান",
                ],
              },
              {
                t: "2. PTE Academic Practice Tests Plus",
                price: "মূল্য: ৯৮০ BDT",
                pros: [
                  "বাস্তবধর্মী প্রশ্ন ও সময়চাপ অনুশীলন",
                  "কার্যকর টিপস এবং স্ট্র্যাটেজি",
                  "বিভিন্ন কঠিন স্তরের ভালো ব্যালান্স",
                ],
                cons: [
                  "তাত্ত্বিক ব্যাখ্যার সীমাবদ্ধতা",
                  "ইন্টারেক্টিভ অনুশীলনের অভাব",
                ],
                features: [
                  "পূর্ণদৈর্ঘ্য প্র্যাকটিস পরীক্ষা (একাধিক)",
                  "উত্তর ব্যাখ্যা ও স্কোরিং টিপস",
                  "অনলাইন প্র্যাকটিস ম্যাটেরিয়াল অ্যাক্সেস",
                ],
              },
              {
                t: "3. Expert PTE Academic Coursebook",
                price: "মূল্য: ১,৪৯৫ BDT",
                pros: [
                  "স্ব-অধ্যয়নের জন্য উপযুক্ত",
                  "দুর্বল অংশ উন্নত করতে ফোকাস করে",
                  "লিসেনিং স্ক্রিপ্ট অন্তর্ভুক্ত",
                ],
                cons: ["পূর্ণদৈর্ঘ্য টেস্ট কম", "সব্যাপকভাবে সহজলভ্য নয়"],
                features: [
                  "প্রতিটি সেকশনের জন্য বিস্তারিত স্ট্র্যাটেজি",
                  "শব্দভান্ডার বৃদ্ধি করার অনুশীলন",
                  "ব্যাকরণ ব্যাখ্যা এবং অনুশীলন",
                ],
              },
              {
                t: "4. PTE Academic Testbuilder",
                price: "মূল্য: ৮০০ BDT",
                pros: [
                  "টেস্ট নেওয়ার কৌশলে জোর",
                  "উন্নত শিক্ষার্থীদের জন্য উপযুক্ত",
                  "অডিও রিসোর্স অন্তর্ভুক্ত",
                ],
                cons: [
                  "শুরু শিক্ষার্থীদের জন্য খুব কঠিন হতে পারে",
                  "কিছু প্রশ্ন বাস্তব পরীক্ষার চেয়ে কঠিন",
                ],
                features: [
                  "পরীক্ষামুখী টেস্ট পেপার",
                  "ধাপে ধাপে উত্তর বিশ্লেষণ",
                  "প্রতিটি প্রশ্নের ধরন মোকাবেলার স্ট্র্যাটেজি",
                ],
              },
              {
                t: "5. Wiley’s PTE Advantage for Academic Exam",
                price: "মূল্য: ৭০০ BDT",
                pros: [
                  "নতুন শিক্ষার্থীর জন্য উপযোগী",
                  "সাশ্রয়ী মূল্য",
                  "লিসনিং প্র্যাকটিসের জন্য CD অন্তর্ভুক্ত",
                ],
                cons: ["কম পূর্ণদৈর্ঘ্য টেস্ট", "অনলাইন রিসোর্স নেই"],
                features: [
                  "বিষয়ভিত্তিক ব্যাখ্যা",
                  "স্পিকিং ও রাইটিংয়ের জন্য স্যাম্পল উত্তর",
                  "ব্যাকরণ এবং শব্দভাণ্ডার বৃদ্ধি",
                ],
              },
              {
                t: "6. The Complete PTE Academic Preparation Guide",
                price: "মূল্য: ২,১০০ BDT",
                pros: [
                  "খুব বিস্তারিত",
                  "বাস্তব কৌশলের উপর ফোকাস",
                  "স্ব-অধ্যয়ের জন্য উপকারী",
                ],
                cons: [
                  "শুরু শিক্ষার্থীদের জন্য অতিরিক্ত জটিল হতে পারে",
                  "অনলাইন অ্যাক্সেস নেই",
                ],
                features: [
                  "৭৯+ স্কোর করার জন্য কৌশলসমূহ",
                  "সাধারণ ভুল এবং তা এড়িয়ে চলার উপায়",
                  "২০+ প্র্যাকটিস টেস্ট",
                ],
              },
              {
                t: "7. PTE Academic",
                price: "মূল্য: ৫০০ BDT",
                pros: [
                  "ধাপে ধাপে কৌশলসহ সুসংগঠিত",
                  "উচ্চ স্কোরের নমুনা উত্তর অন্তর্ভুক্ত",
                  "Writing এবং Speaking-এর জন্য কার্যকর টেমপ্লেট প্রদান",
                  "জটিল প্রশ্ন মোকাবেলার জন্য উন্নত কৌশলসমূহ অন্তর্ভুক্ত",
                ],
                cons: [
                  "PTE বইয়ের PDF ফ্রি ডাউনলোড হিসেবে সহজলভ্য নয়",
                  "কিছু ব্যাখ্যা আরও বিস্তারিত হতে পারত",
                ],
                features: [
                  "চারটি সেকশন (Speaking, Writing, Reading, Listening) সম্পূর্ণভাবে কভার করা",
                  "প্রতিটি সেকশনে ৭৯+ স্কোর করার জন্য বিস্তারিত কৌশল",
                  "প্র্যাকটিস প্রশ্ন এবং মডেল উত্তর",
                ],
              },
            ].map((b, i) => (
              <article key={i} className="my-5">
                <h3 className="text-[#5B50E6] font-bold text-[18px] sm:text-[22px] m-0 mb-2">
                  {b.t}
                </h3>

                <h4 className="text-[#201B39] font-bold text-[14px] sm:text-[16px] mt-2 mb-1">
                  মূল বৈশিষ্ট্যসমূহ:
                </h4>
                <ul className="list-disc ml-5 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                  {b.features.map((f, k) => (
                    <li key={k}>{f}</li>
                  ))}
                </ul>

                <h4 className="text-[#201B39] font-bold text-[14px] sm:text-[16px] mt-2 mb-1">
                  সুবিধাসমূহ:
                </h4>
                <ul className="list-disc ml-5 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                  {b.pros.map((p, k) => (
                    <li key={k}>{p}</li>
                  ))}
                </ul>

                <h4 className="text-[#201B39] font-bold text-[14px] sm:text-[16px] mt-2 mb-1">
                  অসুবিধাসমূহ:
                </h4>
                <ul className="list-disc ml-5 text-[14px] sm:text-[16px] leading-8 text-[#211B3A]">
                  {b.cons.map((c, k) => (
                    <li key={k}>{c}</li>
                  ))}
                </ul>

                <p className="font-bold text-[#17132E] mt-1">{b.price}</p>
              </article>
            ))}

            <h3 className="text-[#5B50E6] font-bold mt-4 mb-2 text-[18px] sm:text-[22px]">
              এখন সামগ্রিকভাবে PTE একাডেমিক প্রস্তুতিমূলক বইগুলোর তুলনা:
            </h3>
            <div className="overflow-auto">
              <table className="w-full border-separate border-spacing-0 text-[13.5px] sm:text-[15px]">
                <thead>
                  <tr className="bg-[#F7F5FF] text-[#5B50E6]">
                    <th className="text-left font-bold border border-[#E3DEF7] border-b-0 p-3">
                      বইয়ের নাম / প্রকাশক
                    </th>
                    <th className="text-left font-bold border border-[#E3DEF7] border-b-0 p-3">
                      মূল্য
                    </th>
                    <th className="text-left font-bold border border-[#E3DEF7] border-b-0 p-3">
                      সর্বোত্তম
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "The Official Guide to PTE Academic",
                      "৪৮০০ BDT",
                      "প্রামাণিক অনুশীলনের জন্য সেরা",
                    ],
                    [
                      "PTE Academic Practice Tests Plus",
                      "৯৮০ BDT",
                      "পরীক্ষার সিমুলেশনের জন্য ভালো",
                    ],
                    [
                      "Expert PTE Academic Coursebook",
                      "১,৪৯৫ BDT",
                      "স্ব-অধ্যয়নের জন্য উপযুক্ত",
                    ],
                    [
                      "PTE Academic Testbuilder",
                      "৮০০ BDT",
                      "উন্নত শিক্ষার্থীর জন্য চমৎকার",
                    ],
                    [
                      "Wiley’s PTE Advantage",
                      "৭০০ BDT",
                      "শিক্ষানবীশদের জন্য ভালো",
                    ],
                    [
                      "The Complete PTE Guide",
                      "২,১০০ BDT",
                      "বিস্তারিত কৌশলের জন্য সেরা",
                    ],
                    [
                      "PTE Academic 79 Plus",
                      "৫০০ BDT",
                      "শেষ মুহূর্তের প্রস্তুতির জন্য সেরা",
                    ],
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 ? "bg-[#FCFAFF]" : ""}>
                      {r.map((cell, k) => (
                        <td
                          key={k}
                          className="border border-[#E3DEF7] p-3 align-top"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ৩. বই নির্বাচন */}
          <section
            id="pte-3"
            className="bg-white border border-[#E3DEF7] rounded-[18px] shadow-[0_10px_28px_rgba(91,80,230,.08)] p-5"
          >
            <h2 className="m-0 mb-4 text-[#5B50E6] font-bold text-[22px] sm:text-[30px]">
              ৩. আপনার জন্য সঠিক PTE বই কীভাবে নির্বাচন করবেন?
            </h2>
            <p className="text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
              আপনার প্রস্তুতির জন্য সেরা PTE একাডেমিক বই কীভাবে নির্বাচন করবেন
              তা এখানে দেখানো হলো:
            </p>

            <h3 className="text-[#5B50E6] font-bold mt-4 mb-2 text-[18px] sm:text-[22px]">
              আপনার শেখার ধরন এবং পরীক্ষার লক্ষ্য বিবেচনা করুন
            </h3>
            <ul className="list-disc ml-5 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
              <li>
                যদি আপনি সুগঠিতভাবে শেখার ধরন পছন্দ করেন, তাহলে বিস্তৃত ব্যাখ্যা
                সহ PTE বই নির্বাচন করুন।
              </li>
              <li>
                যদি আপনি আরও অনুশীলনভিত্তিক প্রস্তুতিতে মনোযোগ দেন, তাহলে একাধিক
                মক টেস্ট সহ PTE বই বেছে নিন।
              </li>
              <li>
                যদি আপনার সময় সীমিত থাকে, তাহলে কৌশল এবং দ্রুত পুনরাবৃত্তির উপর
                ফোকাস করা PTE বই নির্বাচন করুন।
              </li>
            </ul>

            <h3 className="text-[#5B50E6] font-bold mt-4 mb-2 text-[18px] sm:text-[22px]">
              বইয়ের বিষয়বস্ত্ত বিবেচনা: অনুশীলন পরীক্ষা, টিপস এবং কৌশলসমূহ
            </h3>
            <p className="text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
              একটি ভালো PTE বইয়ে থাকা উচিত:
            </p>
            <ul className="list-disc ml-5 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
              <li>আসল পরীক্ষার ধাঁচে প্রশ্নসমূহ</li>
              <li>উত্তর এবং ব্যাখ্যা</li>
              <li>প্রতিটি সেকশনের জন্য কৌশলগত টিপস</li>
            </ul>

            <h3 className="text-[#5B50E6] font-bold mt-4 mb-2 text-[18px] sm:text-[22px]">
              মূল্য বনাম মান: আপনার বিনিয়োগ থেকে সেরা রিটার্ন (ROI) পাওয়া
            </h3>
            <ul className="list-disc ml-5 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
              <li>
                বেশি দামের PTE বইতে প্রায়শই অফিসিয়াল কনটেন্ট এবং ডিজিটাল
                অ্যাকসেস থাকে।
              </li>
              <li>বাজেট-বান্ধব PTE বইও কার্যকর অনুশীলনের সুযোগ দিতে পারে।</li>
              <li>
                বিবেচনা করুন বইটি কি অতিরিক্ত অনলাইন রিসোর্স সরবরাহ করছে কি না।
              </li>
            </ul>

            {/* Quick links */}
            <div className="grid grid-cols-2 gap-3 mt-3 max-sm:grid-cols-1">
              <div className="bg-[#FBFAFF] border border-[#E3DEF7] rounded-[10px] p-4 text-center font-bold text-[#211B3A]">
                PTE Listening পরীক্ষা
              </div>
              <div className="bg-[#FBFAFF] border border-[#E3DEF7] rounded-[10px] p-4 text-center font-bold text-[#211B3A]">
                PTE Writing পরীক্ষা
              </div>
            </div>
          </section>

          {/* ৪. টিপস */}
          <section
            id="pte-tips"
            className="bg-white border border-[#E3DEF7] rounded-[18px] shadow-[0_10px_28px_rgba(91,80,230,.08)] p-5"
          >
            <h3 className="m-0 mb-4 text-[#5B50E6] font-bold text-[22px] sm:text-[30px]">
              ৪. PTE বই ব্যবহার করে সর্বোচ্চ ফলাফল অর্জনের টিপস
            </h3>
            <p className="text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
              PTE একাডেমিক পরীক্ষার প্রস্তুতির জন্য সঠিক স্টাডি ম্যাটেরিয়াল এবং
              কার্যকর কৌশল প্রয়োজন...
            </p>
            <p className="text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
              PTE PDF বা বই ব্যবহার করে সেরা ফলাফল পেতে এখানে পাঁচটি
              গুরুত্বপূর্ণ টিপস দেওয়া হলো:
            </p>
            <ul className="list-disc ml-5 text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
              <li>
                <strong>সঠিক ম্যাটেরিয়াল নির্বাচন করুন</strong> – ...
              </li>
              <li>
                <strong>স্টাডি প্ল্যান অনুসরণ করুন</strong> – ...
              </li>
              <li>
                <strong>বিভিন্ন ধাঁচের প্রশ্ন নিয়ে প্র্যাকটিস করুন</strong> –
                ...
              </li>
              <li>
                <strong>টাইম ম্যানেজমেন্টে ফোকাস করুন</strong> – ...
              </li>
              <li>
                <strong>ছোট রিভিউ এবং বিষয়ভিত্তিক রিভিশন করুন</strong> – ...
              </li>
            </ul>
            <p className="text-[#211B3A] text-[14px] sm:text-[16px] leading-8">
              সঠিক PTE বই নির্বাচন করে এবং কার্যকর স্টাডি প্ল্যান অনুসরণ করলে...
            </p>
            <p className="text-[#17132E] font-semibold">
              মেভেনকেভ-এর সাথে আপনার সক্ষমতা আনলক করুন! ...
            </p>
          </section>

          {/* পরবর্তী ধাপ */}
          <section
            id="next-steps"
            className="bg-white border border-[#E3DEF7] rounded-[18px] shadow-[0_10px_28px_rgba(91,80,230,.08)] p-5"
          >
            <h2 className="m-0 mb-4 text-[#5B50E6] font-bold text-[22px] sm:text-[30px]">
              পরবর্তী ধাপ
            </h2>
            <div className="grid gap-5 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {[
                "PTE পরীক্ষার তারিখসমূহ",
                "PTE পরীক্ষার ফি",
                "PTE পরীক্ষার ফলাফল",
              ].map((t, i) => (
                <article
                  key={i}
                  className="bg-[#F7F5FF] border border-[#E3DEF7] rounded-[14px] p-5 min-h-[144px] flex flex-col justify-between hover:-translate-y-[2px] transition-transform"
                >
                  <h3 className="m-0 mb-4 font-semibold text-[#131126] text-[18px] sm:text-[22px]">
                    {t}
                  </h3>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#5B50E6] font-semibold"
                  >
                    এখনই পড়ুন <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* IELTS info bank */}
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

          {/* PTE info bank */}
          <section className="bg-[#F0EDFF] border border-[#E3DEF7] rounded-2xl shadow-[0_8px_22px_rgba(91,80,230,0.08)] p-4 sm:p-5">
            <h3 className="m-0 mb-3 font-extrabold text-[#2563EB] text-[18px] sm:text-[22px]">
              TOEFL গুরুত্বপূর্ণ তথ্য
            </h3>

            <div className="bg-white border border-[#E3DEF7] rounded-xl grid overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "PTE পরীক্ষা",
                "PTE তারিখসমূহ",
                "PTE ফলাফল",
                "PTE ফি",
                "PTE সিলেবাস",
                "PTE কথা বলার অনুশীলন পরীক্ষা",
                "PTE লেখার অনুশীলন পরীক্ষা",
                "PTE শোনার অনুশীলন পরীক্ষা",
                "PTE বই",
                "PTE রেজিস্ট্রেশন",
                "PTE অনুশীলন",
                "PTE প্রস্তুতি",
                "PTE অনলাইন পরীক্ষা",
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
            id="faq"
            className="bg-white border border-[#E3DEF7] rounded-[18px] shadow-[0_10px_28px_rgba(91,80,230,.08)] p-5"
          >
            <h2 className="m-0 mb-4 text-[#5B50E6] font-bold text-[22px] sm:text-[30px]">
              শিক্ষার্থীদের করা সবচেয়ে বেশি প্রশ্ন সমূহ-
            </h2>

            <div>
              {[
                [
                  "আমাকে কেন PTE প্রস্তুতির বই দরকার?",
                  "অফিশিয়াল ফরম্যাট, প্রশ্নের ধরণ, স্কোরিং পদ্ধতি ও কৌশল একসাথে বোঝার দ্রুত এবং কাঠামোবদ্ধ উপায় হচ্ছে বই...",
                ],
                [
                  "স্ব-অধ্যয়নের জন্য সেরা PTE বইগুলো কোনগুলো?",
                  "The Official Guide... Practice Tests Plus... Testbuilder / Expert Coursebook — একটি শক্ত কম্বিনেশন।",
                ],
                [
                  "PTE প্রস্তুতির জন্য ২ দিন কি যথেষ্ট?",
                  "শুধু রিভিশনের জন্য শেষ দুই দিন কাজে লাগতে পারে; নতুন করে শুরু করার জন্য যথেষ্ট নয়...",
                ],
                [
                  "একটি মানসম্পন্ন PTE বইতে আমি কী দেখতে চাই?",
                  "আসল ফরম্যাটে প্রশ্ন, উত্তর-ব্যাখ্যা, স্কোরিং টিপস, সেকশনভিত্তিক কৌশল...",
                ],
                [
                  "PTE বই কি সব ধরনের ইংরেজি দক্ষতার জন্য উপযুক্ত?",
                  "হ্যাঁ—বেগিনার থেকে অ্যাডভান্সড পর্যন্ত সবার জন্য বই আছে...",
                ],
              ].map(([q, a], i) => (
                <details
                  key={i}
                  className="group border-t border-[#E5E1F6] first:border-t-0"
                >
                  <summary className="list-none cursor-pointer py-4 text-left">
                    <button
                      className="w-full flex items-center justify-between gap-3 font-semibold text-[#17132E] text-[16px] sm:text-[20px]"
                      aria-expanded="false"
                      onClick={(e) => {
                        // Let <details> handle toggling; keep button semantics for right-side caret placement
                        // Prevent default button form submission
                        e.preventDefault();
                        const parent = (
                          e.currentTarget as HTMLButtonElement
                        ).closest("details");
                        if (parent) parent.open = !parent.open;
                      }}
                    >
                      <span>{q}</span>
                      {/* caret on the right, toggles instantly (no transition) */}
                      <span className="ml-auto select-none group-open:rotate-180">
                        ^
                      </span>
                    </button>
                  </summary>
                  <div className="pb-4 text-[#383358] text-[14px] sm:text-[16px] leading-8">
                    <p className="m-0">{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* ================= RIGHT ================= */}
        <aside className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-[#17132E] font-extrabold text-2xl">
                আরও পড়ুন
              </h2>
              <a
                className="text-[#5B50E6] font-extrabold text-sm hover:underline"
                href="#"
              >
                সব দেখুন
              </a>
            </div>

            {[
              {
                img: "/images/pte_books/image-1.jpg",
                t: "বিশ্বের শীর্ষ ১০ বিশ্ববিদ্যালয়: কোথায় পড়বেন এবং কেন?",
                m: "১৯ জুলাই, ২০২৫ • পড়তে সময় লাগবে: ৫ মিনিট",
              },
              {
                img: "/images/pte_books/image-2.jpg",
                t: "যুক্তরাষ্ট্রে শীর্ষ বিশ্ববিদ্যালয়সমূহ ও তাদের স্কলারশিপ:",
                m: "২১ জুলাই, ২০২৫ • পড়তে সময় লাগবে: ৪ মিনিট",
              },
              {
                img: "/images/pte_books/image-3.jpg",
                t: "প্রযুক্তি শিক্ষার জন্য সেরা বিশ্ববিদ্যালয়গুলো",
                m: "২৬ জুলাই, ২০২৫ • পড়তে সময় লাগবে: ৬ মিনিট",
              },
            ].map((s, i) => (
              <a key={i} href="#" className="block group not-last:mb-4">
                <img
                  src={s.img}
                  alt=""
                  className="rounded-xl w-full h-48 object-cover transition-transform duration-200 group-hover:-translate-y-1"
                />
                <div className="pt-[14px]">
                  <h3 className="font-extrabold text-[16px] leading-snug line-clamp-2">
                    {s.t}
                  </h3>
                  <p className="text-[#776F92] text-sm">{s.m}</p>
                </div>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
