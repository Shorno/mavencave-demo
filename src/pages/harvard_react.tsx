import React, { useEffect, useState } from 'react'

export default function HarvardReact() {
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    // --- Ported behaviors from script.js ---

    // Primary button alert
    const btn = document.querySelector(".btn-primary");
    const onBtn = () => alert("আপনার যোগ্যতা যাচাই করা হচ্ছে...");
    if (btn) btn.addEventListener("click", onBtn);

    // Chip active toggling
    const chipClick = (el) => () => {
      document.querySelectorAll('[data-chip]').forEach(c=>c.classList.remove('chip--active'));
      el.classList.add('chip--active');
    };
    const chips = Array.from(document.querySelectorAll('[data-chip]'));
    chips.forEach(el => el.addEventListener('click', chipClick(el)));

    // Toast CTA
    const ctaOutline = document.querySelector('.cta-outline');
    const onCta = (e) => {
      e.preventDefault();
      const t = document.createElement('div');
      t.textContent = 'শীঘ্রই ইন্টেক তালিকা যুক্ত হবে!';
      Object.assign(t.style, {
        position:'fixed', bottom:'24px', left:'24px', background:'#111827', color:'#fff',
        padding:'10px 14px', borderRadius:'10px', boxShadow:'0 10px 24px rgba(0,0,0,.18)',
        zIndex:'9999', opacity:'0', transition:'opacity .2s ease'
      });
      document.body.appendChild(t);
      requestAnimationFrame(()=>{ t.style.opacity='1'; });
      setTimeout(()=>{ t.style.opacity='0'; t.addEventListener('transitionend', ()=>t.remove(), {once:true}); }, 1700);
    };
    if (ctaOutline) ctaOutline.addEventListener('click', onCta);

    // Smooth-scroll for "see all"
    const seeAlls = Array.from(document.querySelectorAll('.see-all'));
    const onSeeAll = (e) => {
      e.preventDefault();
      const cta = document.querySelector('.cta-outline');
      if (cta) cta.scrollIntoView({behavior:'smooth', block:'center'});
    };
    seeAlls.forEach(a => a.addEventListener('click', onSeeAll));

    // Carousel controls
    const track = document.getElementById('blogTrack');
    const nextBtn = document.getElementById('btnNext');
    const prevBtn = document.getElementById('btnPrev');

    const updateButtons = () => {
      if (!track || !nextBtn || !prevBtn) return;
      const maxScroll = track.scrollWidth - track.clientWidth;
      prevBtn.style.display = track.scrollLeft <= 2 ? 'none' : 'flex';
      nextBtn.style.display = track.scrollLeft >= maxScroll - 2 ? 'none' : 'flex';
    };
    const scrollByCard = (dir=1) => {
      if (!track) return;
      const style = getComputedStyle(track);
      const gap = parseInt(style.columnGap || style.gap || 16, 10);
      const card = track.querySelector('.blog-card');
      const delta = (card ? card.clientWidth + gap : 280) * dir;
      track.scrollBy({ left: delta, behavior: 'smooth' });
    };
    nextBtn && nextBtn.addEventListener('click', () => scrollByCard(1));
    prevBtn && prevBtn.addEventListener('click', () => scrollByCard(-1));
    track && track.addEventListener('scroll', updateButtons, { passive:true });
    window.addEventListener('resize', updateButtons);
    updateButtons();

    // Keyboard support
    if (track) {
      track.tabIndex = 0;
      track.addEventListener('keydown', e=>{
        if (e.key === 'ArrowRight'){ e.preventDefault(); scrollByCard(1); }
        if (e.key === 'ArrowLeft'){ e.preventDefault(); scrollByCard(-1); }
      });
    }

    // Reveal-on-scroll animations
    const selectors = [
      '.card', '.rank-card', '.rank-tile', '.blog-card',
      '.cta', '.cta-outline', '.chip', '.bg-blue-600', '.see-all'
    ];
    const els = Array.from(document.querySelectorAll(selectors.join(',')));
    els.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.setProperty('--d', (Math.min(i, 6) * 0.06) + 's');
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));

    // cleanup
    return () => {
      if (btn) btn.removeEventListener("click", onBtn);
      chips.forEach(el => el.removeEventListener('click', chipClick(el)));
      if (ctaOutline) ctaOutline.removeEventListener('click', onCta);
      seeAlls.forEach(a => a.removeEventListener('click', onSeeAll));
      nextBtn && nextBtn.replaceWith(nextBtn.cloneNode(true));
      prevBtn && prevBtn.replaceWith(prevBtn.cloneNode(true));
      track && track.replaceWith(track.cloneNode(true));
      window.removeEventListener('resize', updateButtons);
      io.disconnect();
    };
  }, []);

  // Tabs data (labels in Bangla)
  const tabs = [
    { id: 'overview', label: 'সংক্ষিপ্ত বিবরণ' },
    { id: 'admission', label: 'ভর্তি' },
    { id: 'ranking', label: 'র‌্যাঙ্কিং' },
    { id: 'courses', label: 'কোর্স ও ফি' },
  ];

  return (
    <>
      <div>
        {/* Header Image */}
        <div className="relative w-full h-72">
          <img src="/assets/Rectangle 29.png" alt="Harvard" className="w-full h-full object-cover" />
        </div>

        {/* University Card */}
        <div className="container relative -mt-12">
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-3">
              <img src="/assets/image 14.png" alt="logo" className="w-12 h-12" />
              <div>
                <h1 className="text-lg font-bold">হার্ভার্ড বিশ্ববিদ্যালয়</h1>
                <p className="text-gray-600 text-sm">কেমব্রিজ - ম্যাসাচুসেটস</p>
              </div>
            </div>
            {/* Right */}
            <button className="btn btn-primary px-4 py-2 text-sm">আপনার যোগ্যতা যাচাই করুন</button>
          </div>
        </div>

        {/* Navigation Tabs (updated with active + hover) */}
        <div className="container mt-4">
          <ul className="flex border-b">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={[
                    "px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-t-md",
                    activeTab === tab.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-100 hover:text-gray-900"
                  ].join(' ')}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Figures Section */}
        <div className="container mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Blue Box with Table */}
          <div className="bg-blue-600 text-white rounded-lg shadow-md p-4 md:col-span-2">
            <h2 className="text-lg font-bold">গুরুত্বপূর্ণ দিক</h2>
            <p className="text-sm text-blue-100 mb-3">মুখ্যভাবে প্রদত্ত সংখ্যাগুলি সূত্র দ্বারা প্রদান করা হয়েছে</p>

            <div className="bg-blue-100 text-gray-900 rounded-md overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-gray-300 border-b border-gray-300">
                <div className="p-3 text-center">
                  <p className="text-xl font-bold">১৬৩৬</p>
                  <p className="text-sm">প্রতিষ্ঠিত</p>
                </div>
                <div className="p-3 text-center">
                  <p className="text-xl font-bold">৫৭,৭৮৬</p>
                  <p className="text-sm">মোট শিক্ষার্থীর সংখ্যা</p>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-300">
                <div className="p-3 text-center col-span-2">
                  <p className="text-xl font-bold">৭,৫২৪</p>
                  <p className="text-sm">মোট আন্তর্জাতিক শিক্ষার্থী</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
            <div className="text-center">
              <img src="/assets/Icons.png" alt="icon" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-bold">আপনার পছন্দের বিশ্ববিদ্যালয় খুঁজুন</h3>
              <p className="text-sm text-gray-600 mb-3">আপনার জন্য উপযুক্ত শ্রেষ্ঠ বিশ্ববিদ্যালয়গুলো বিনামূল্যে খুঁজে নিন</p>
              <button className="btn btn-primary w-full">আপনার পছন্দের বিশ্ববিদ্যালয় খুঁজুন</button>
            </div>

            {/* Footer with avatars */}
            <div className="flex items-center gap-2 mt-4 align-items-center justify-content-center">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" className="w-8 h-8 rounded-full border" />
              <img src="https://randomuser.me/api/portraits/men/45.jpg" className="w-8 h-8 rounded-full border -ml-4" />
              <p className="text-xs text-gray-600">গত মাসে ২,০০০-এর বেশি শিক্ষার্থী বিনামূল্যে আবেদন করেছে</p>
            </div>
          </div>
        </div>

        <main className="max-w-[67%] ml-0 mr-auto p-3 sm:p-6">
          <section className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-4 sm:p-6">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <h1 className="text-2xl sm:text-[26px] font-semibold">শীর্ষ কোর্সসমূহ</h1>
              <a href="#" className="see-all" style={{textDecoration: 'none'}}>
                সব দেখুন
                <span aria-hidden="true">›</span>
              </a>
            </div>

            {/* Chips */}
            <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="ক্যাটাগরি">
              <button className="chip chip--active" data-chip="true">আর্কিটেকচার <span aria-hidden="true">›</span></button>
              <button className="chip" data-chip="true">ডেটা সায়েন্স <span aria-hidden="true">›</span></button>
              <button className="chip" data-chip="true">ইঞ্জিনিয়ারিং সায়েন্স <span aria-hidden="true">›</span></button>
              <button className="chip" data-chip="true">বায়োলজি <span aria-hidden="true">›</span></button>
              <button className="chip" data-chip="true">শিক্ষকতা / শিক্ষা বিষয়ক স্টাডিজ <span aria-hidden="true">›</span></button>
            </div>

            {/* Minor breadcrumb-ish line */}
            <div className="mt-5 text-sm text-slate-600 flex items-center gap-2">
              <span>মাস্টার অব আর্কিটেকচার-১</span>
              <span className="text-slate-400">›</span>
            </div>

            {/* Content area */}
            <div className="mt-3 grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-4">
              {/* Left small card */}
              <article className="rounded-xl bg-slate-100 p-4 flex items-center gap-4">
                <div className="rounded-xl bg-white ring-1 ring-slate-200 shadow-sm w-12 h-12 flex items-center justify-center">
                  {/* calendar icon */}
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                    <path d="M16 2v4M8 2v4M3 10h18"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-slate-600 text-sm">৪২ ঘন্টা</p>
                </div>
              </article>

              {/* Right big card */}
              <article className="rounded-xl bg-[#3b66f6] text-white p-6 flex flex-col justify-center min-h-[140px]">
                <h3 className="text-lg sm:text-xl font-semibold">মাস্টার অব আর্কিটেকচার-২</h3>
                <a href="#" className="btn-plain mt-3 self-start">›</a>
              </article>
            </div>

            {/* Bottom CTA */}
            <div className="mt-5">
              <a href="#" className="cta w-full justify-center">
                আপনার জন্য সেরা কোর্সটি বেছে নিন
              </a>
            </div>
          </section>
        </main>

        <main className="max-w-[67%] ml-0 mr-auto p-3 sm:p-6">
          <section className="col-span-4 lg:col-span-3 space-y-6">
            <div className="card">
              <header className="card-head">
                <h2 className="card-title">ভর্তি গ্রহণ ও আবেদন শেষ তারিখ</h2>
                <a href="#" className="see-all" style={{textDecoration: 'none'}}>সব দেখুন <span aria-hidden="true">›</span></a>
              </header>

              <ul className="mt-4 space-y-5">
                {/* one row */}
                <li className="intake-row">
                  <span className="intake-month">JAN'2026</span>
                  <span className="badge-open">ভর্তি চলছে</span>
                </li>

                <li className="intake-row">
                  <span className="intake-month">MAY'2026</span>
                  <span className="badge-open">ভর্তি চলছে</span>
                </li>

                <li className="intake-row">
                  <span className="intake-month">AUG'2026</span>
                  <span className="badge-open">ভর্তি চলছে</span>
                </li>

                <li className="intake-row">
                  <span className="intake-month">SEP'2026</span>
                  <span className="badge-open">ভর্তি চলছে</span>
                </li>
              </ul>

              {/* CTA */}
              <div className="mt-6">
                <a href="#" className="cta-outline w-full justify-center">
                  আপনার জন্য সেরা ইন্টেকটি খুঁজুন
                </a>
              </div>
            </div>

            {/* Card: Eligibility header */}
            <div className="card">
              <header className="card-head">
                <h2 className="card-title">ভর্তি যোগ্যতার শর্ত</h2>
                <a href="#" className="see-all" style={{textDecoration: 'none'}}>সব দেখুন <span aria-hidden="true">›</span></a>
              </header>
            </div>
          </section>

          {/* Optional empty right 1/4 column (keeps left-aligned 3/4 layout) */}
          <aside className="hidden lg:block col-span-1"></aside>
        </main>

        <main className="max-w-[67%] ml-0 mr-auto p-3 sm:p-6">
          <section className="col-span-4 lg:col-span-3 space-y-7">
            {/* Card: Ranking */}
            <div className="rank-card">
              <header className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-[28px] font-bold">র‌্যাঙ্কিং</h2>
                <a href="#" className="see-all" style={{textDecoration: 'none'}}>সব দেখুন <span aria-hidden="true">›</span></a>
              </header>

              {/* Block: US News */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="logo-box">
                    <span className="text-white text-sm font-bold">USNEWS</span>
                  </div>
                  <h3 className="provider-title">ইউএস নিউজ</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rank-tile">
                    <div className="rank-no"># ৩</div>
                    <p className="rank-sub">সেরা জাতীয় স্কুলসমূহ – ২০২৫</p>
                  </div>
                  <div className="rank-tile">
                    <div className="rank-no"># ১</div>
                    <p className="rank-sub">সেরা বিশ্ব র‌্যাঙ্কিং স্কুলসমূহ – ২০২৩</p>
                  </div>
                  <div className="rank-tile sm:col-span-1">
                    <div className="rank-no"># ২</div>
                    <p className="rank-sub">সেরা বিশ্ববিদ্যালয় র‌্যাঙ্কিং স্কুলসমূহ – ২০২২</p>
                  </div>
                </div>
              </div>

              {/* Block: Times Higher Education */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="icon-circle">
                    <img src="/assets/THE logo.png" alt="" />
                  </div>
                  <h3 className="provider-title">টাইমস হায়ার এডুকেশন</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rank-tile">
                    <div className="rank-no"># ২</div>
                    <p className="rank-sub">সেরা বিশ্ব র‌্যাঙ্কিং স্কুলসমূহ – ২০২৩</p>
                  </div>
                  <div className="rank-tile">
                    <div className="rank-no"># ২</div>
                    <p className="rank-sub">সেরা বিশ্ববিদ্যালয় র‌্যাঙ্কিং স্কুলসমূহ – ২০২২</p>
                  </div>
                </div>
              </div>

              {/* Block: Webometrics */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="icon-circle">
                    <img src="/assets/webometrics.jpg" alt="" />
                  </div>
                  <h3 className="provider-title">ওয়েবোমেট্রিক্স - বিশ্ব</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rank-tile sm:col-span-1">
                    <div className="rank-no"># ১</div>
                    <p className="rank-sub">সেরা বিশ্ব র‌্যাঙ্কিং স্কুলসমূহ – ২০২৩</p>
                  </div>
                </div>
              </div>

              {/* Block: QS */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="icon-circle">
                    <img src="/assets/qs.png" alt="" />
                  </div>
                  <h3 className="provider-title">কিউএস র‌্যাঙ্ক</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rank-tile">
                    <div className="rank-no"># ৮</div>
                    <p className="rank-sub">সেরা বিশ্ব র‌্যাঙ্কিং স্কুলসমূহ – ২০২৫</p>
                  </div>
                  <div className="rank-tile">
                    <div className="rank-no"># ৫</div>
                    <p className="rank-sub">সেরা বিশ্ব র‌্যাঙ্কিং স্কুলসমূহ – ২০২৩</p>
                  </div>
                  <div className="rank-tile sm:col-span-2 md:col-span-1">
                    <div className="rank-no"># ৫</div>
                    <p className="rank-sub">সেরা বিশ্ব র‌্যাঙ্কিং স্কুলসমূহ – ২০২৩</p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-10">
                <a href="#" className="cta-outline w-full justify-center">
                  এখানে জানুন আপনার ভর্তি সম্ভাবনা
                </a>
              </div>
            </div>
          </section>

          {/* Right empty column keeps left section at 3/4 */}
          <aside className="hidden lg:block col-span-1"></aside>
        </main>

        <main className="max-w-[67%] ml-0 mr-auto p-3 sm:p-6">
          <section className="col-span-4 lg:col-span-3">
            {/* Header */}
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-2xl sm:text-[28px] font-extrabold tracking-tight">
                ব্লগসমূহ - ব্যবহারকারীরাও এটি পড়েছেন
              </h2>
            </div>

            {/* Carousel wrapper */}
            <div className="relative">
              {/* Scroll area */}
              <div id="blogTrack" className="track">
                {/* Card 1 */}
                <article className="blog-card snap-start">
                  <figure className="blog-media">
                    <img src="/assets/Rectangle 19.png" alt="পরীক্ষার প্রস্তুতি নিচ্ছে শিক্ষার্থীরা" />
                  </figure>
                  <div className="p-3 sm:p-4">
                    <h3 className="blog-title">
                      IELTS/TOEFL পরীক্ষার জন্য কিভাবে প্রস্তুতি নেবেন?
                    </h3>
                    <p className="blog-meta">১২ জুলাই, ২০২৫ / পড়তে সময় লাগবে: ৫ মিনিট</p>
                  </div>
                </article>

                {/* Card 2 */}
                <article className="blog-card snap-start">
                  <figure className="blog-media">
                    <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop" alt="লাইব্রেরিতে পড়াশোনা" />
                  </figure>
                  <div className="p-3 sm:p-4">
                    <h3 className="blog-title">
                      শেষ মুহূর্তের প্রস্তুতি: পরীক্ষার আগের রাতের করণীয়
                    </h3>
                    <p className="blog-meta">১২ জুলাই, ২০২৫ / পড়তে সময় লাগবে: ৫ মিনিট</p>
                  </div>
                </article>

                {/* Card 3 */}
                <article className="blog-card snap-start">
                  <figure className="blog-media">
                    <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop" alt="ল্যাপটপে পড়াশোনা" />
                  </figure>
                  <div className="p-3 sm:p-4">
                    <h3 className="blog-title">
                      পড়াশোনায় মনোযোগ বাড়ানোর বৈজ্ঞানিক টিপস
                    </h3>
                    <p className="blog-meta">১২ জুলাই, ২০২৫</p>
                  </div>
                </article>

                {/* Extra demo cards (optional) */}
                <article className="blog-card snap-start">
                  <figure className="blog-media">
                    <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop" alt="স্টাডি প্ল্যান" />
                  </figure>
                  <div className="p-3 sm:p-4">
                    <h3 className="blog-title">৭ দিনে স্মার্ট স্টাডি প্ল্যান বানান</h3>
                    <p className="blog-meta">১০ জুলাই, ২০২৫</p>
                  </div>
                </article>
              </div>

              {/* Next / Prev buttons */}
              <button className="carousel-btn next" aria-label="পরবর্তী" id="btnNext">➜</button>
              <button className="carousel-btn prev" aria-label="পূর্ববর্তী" id="btnPrev">➜</button>
            </div>

            {/* Breadcrumbs */}
            <nav className="mt-6 text-slate-600 text-sm">
              <ul className="flex flex-wrap gap-x-2 gap-y-1">
                <li><a className="crumb" href="#">বিদেশে উচ্চশিক্ষা</a></li><span className="sep">/</span>
                <li><a className="crumb" href="#">যুক্তরাজ্যে উচ্চশিক্ষা</a></li><span className="sep">/</span>
                <li><a className="crumb" href="#">যুক্তরাজ্যের বিশ্ববিদ্যালয়সমূহ</a></li><span className="sep">/</span>
                <li><a className="crumb" href="#">কেমব্রিজ, অক্সফোর্ড বিশ্ববিদ্যালয়সমূহ</a></li><span className="sep">/</span>
                <li className="font-semibold text-slate-900">হার্ভার্ড বিশ্ববিদ্যালয়</li>
              </ul>
            </nav>
          </section>

          {/* Right empty 1/4 keeps left block at 3/4 */}
          <aside className="hidden lg:block col-span-1"></aside>
        </main>
      </div>
    </>
  )
}
