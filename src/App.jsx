import React from 'react'

const images = [
  { src: '/assets/img_1.jpg', alt: 'Team 1' },
  { src: '/assets/img_2.jpg', alt: 'Team 2' },
  { src: '/assets/img_3.jpg', alt: 'Team 3' },
  { src: '/assets/img_4.jpg', alt: 'Team 4' },
]

const jobs = [
  { title: 'SEO কনটেন্ট রাইটার', location: 'ঢাকা, বাংলাদেশ / ফুল টাইম' },
  { title: 'ভিডিও এডিটর', location: 'ঢাকা, বাংলাদেশ / ফুল টাইম' },
  { title: 'এডুকেশন কোচ', location: 'ঢাকা, বাংলাদেশ / ফুল টাইম' },
  { title: 'IELTS ট্রেইনার', location: 'ঢাকা, বাংলাদেশ / ফুল টাইম' },
  { title: 'ইউজার রিসার্চার', location: 'ঢাকা, বাংলাদেশ / ফুল টাইম' },
  { title: 'অপারেশনস ম্যানেজার', location: 'ঢাকা, বাংলাদেশ / ফুল টাইম' },
  { title: 'প্রোডাক্ট ডিজাইনার', location: 'ঢাকা, বাংলাদেশ / ফুল টাইম' },
  { title: 'এক্সিকিউটিভ অ্যাসিস্ট্যান্ট', location: 'ঢাকা, বাংলাদেশ / ফুল টাইম' },
]

function BengaliHero() {
  return (
    <section className="bg-[#f6f7ff] text-slate-900 pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 md:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-bengali text-4xl font-extrabold leading-tight tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              কিছু বড়োদের কর্মকাণ্ডের<br className="hidden sm:block" /> অংশ হন
            </h1>
            <p className="font-bengali mt-6 max-w-2xl text-base leading-7 text-slate-700">
              আমাদের মূল বিশ্বাস হলো, কাজ শুধুমাত্র একটি চাকরি নয় — এটি একটি উদ্দেশ্য‑চালিত যাত্রা। আমাদের সাথে যুক্ত হলে, আপনি কেবল একটি পদ পূরণ করেন না; বরং আপনি অর্থবহ পরিবর্তনের অংশ হন এবং একটি উচ্চ দক্ষ দলের সহযোগিতায় নিজের সম্ভাবনার নতুন সংজ্ঞা তৈরি করেন। আমরা এমন একটি সহায়তামূলক সংস্কৃতি গড়ি যেখানে প্রতিটি অবদান গুরুত্বপূর্ণ, এবং আপনার ধারাবাহিক উন্নয়নকে আমরা অগ্রাধিকার দিই। নিজের থেকেও বড়ো কিছুর অংশ হন — একটি দল, একটি লক্ষ্য, এবং একটি আন্দোলনের অংশ, যা স্থায়ী মূল্য সৃষ্টি করছে।
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {images.map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-black/5">
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Jobs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-bengali text-4xl font-extrabold text-violet-800">ওপেন পজিশনসমূহ</h2>
          <a href="#" className="rounded-lg bg-violet-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-800">সব দেখুন →</a>
        </div>
        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <div key={idx} className="flex flex-col justify-between gap-4 rounded-xl border border-gray-300 bg-white p-6 shadow-sm md:flex-row md:items-center">
              <div>
                <h3 className="font-bengali text-xl font-bold text-violet-800">{job.title}</h3>
                <p className="font-bengali text-sm text-gray-600">{job.location}</p>
              </div>
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-violet-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-800">
                জব বিস্তারিত দেখুন →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <main>
      <BengaliHero />
      <Jobs />
    </main>
  )
}
