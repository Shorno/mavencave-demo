import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';

// Static data structure for FAQ
interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

// Static data structure for Speakers
interface Speaker {
  name: string;
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="min-h-screen bg-white font-sans text-gray-800">

      <!-- Header/Hero Section (Screenshot 2025-10-05 210950.png) -->
      <section class="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <!-- Left Content -->
          <div class="lg:pr-10">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              বিদেশি পড়তে আগ্রহী শিক্ষার্থীদের উদ্দেশ্যে করা লাইভ ইভেন্ট।
            </h1>
            <p class="text-lg text-gray-600 mb-8">
              বিশ্বজুড়ে ৩০+ অভিজ্ঞ স্পিকারের কথা শুনুন
            </p>

            <!-- Feature Icons -->
            <div class="flex flex-col sm:flex-row gap-6 mb-10">
              <div class="flex items-center gap-3">
                <span class="p-2 rounded-full bg-red-100 text-red-600 font-bold text-xs shadow-lg">LIVE</span>
                <p class="text-gray-700">আমাদের শীর্ষস্থানীয় স্পিকারদের কথা শুনুন</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="p-2 rounded-full bg-yellow-100 text-yellow-600 font-bold text-xs shadow-lg">GIFT</span>
                <p class="text-gray-700">অংশগ্রহণকারীদের জন্য থাকছে এক্সক্লুসিভ কিটবক্স</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="p-2 rounded-full bg-green-100 text-green-600 font-bold text-xs shadow-lg">FREE</span>
                <p class="text-gray-700">সকল প্রশ্নের উত্তর পাবেন ফ্রিতে!</p>
              </div>
            </div>

            <!-- Call to Action Button -->
            <button class="w-full sm:w-auto px-10 py-4 text-lg font-semibold text-white bg-[#7C3AED] rounded-lg shadow-lg hover:bg-[#6D28D9] transition duration-300 transform hover:scale-[1.02]">
              আগত ইভেন্টগুলো দেখুন
            </button>
          </div>

          <!-- Right Image -->
          <div class="relative w-full h-80 sm:h-96 lg:h-[450px] overflow-hidden rounded-xl shadow-2xl">
            <img 
              src="https://placehold.co/800x600/7C3AED/ffffff?text=Event+Speaker" 
              alt="Speaker presenting to an audience" 
              class="w-full h-full object-cover"
            >
            <!-- Overlay to match image context if needed, but keeping it clean here -->
            <div class="absolute inset-0 bg-black bg-opacity-10"></div>
          </div>
        </div>
      </section>

      <!-- Why Attend Section (Screenshot 2025-10-05 211030.png) -->
      <section class="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-16">
            কেন আপনার আমাদের ইভেন্টগুলোতে অংশগ্রহণ করা উচিত?
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            @for (feature of features; track feature.title) {
              <div class="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-xl">
                <!-- Icon (Using inline SVG for the required purple color) -->
                <svg [innerHTML]="feature.icon" class="w-12 h-12 text-[#7C3AED] mb-4"></svg>

                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  {{ feature.title }}
                </h3>
                <p class="text-gray-600">
                  {{ feature.description }}
                </p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Speakers Section (Screenshot 2025-10-05 211053.jpg) -->
      <section class="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-16">
            আমাদের পূর্ববর্তী স্পিকারদের সাথে পরিচিত হন!
          </h2>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            @for (speaker of speakers; track speaker.name) {
              <div class="relative w-full h-full min-h-64 rounded-xl overflow-hidden shadow-lg group">
                <img 
                  [src]="speaker.imageUrl" 
                  [alt]="speaker.name" 
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-in-out"
                >
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 flex flex-col justify-end">
                  <h3 class="text-white text-lg font-bold">
                    {{ speaker.name }}
                  </h3>
                  <p class="text-white text-sm opacity-90">
                    {{ speaker.title }}
                  </p>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- FAQ Section (Screenshot 2025-10-05 211113.png) -->
      <section class="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-12">
            মনে প্রশ্ন এসেছে? আপনি একা নন। নিচের প্রশ্নগুলো থেকে বেছে নিন আপনার উত্তর! অথবা আমাদের সাথে যোগাযোগ করুন!
          </h2>

          <div class="space-y-4">
            @for (item of faqs; track item.id) {
              <div class="rounded-xl shadow-md overflow-hidden bg-[#EDE9FE]">
                <!-- Question Button -->
                <button 
                  (click)="toggleFaq(item.id)" 
                  class="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                  [attr.aria-expanded]="activeFaqId() === item.id"
                >
                  <span class="text-lg font-semibold text-gray-800">{{ item.question }}</span>
                  <!-- Icon for toggle state -->
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="3" 
                    stroke="currentColor" 
                    class="w-6 h-6 text-[#7C3AED] transition-transform duration-300"
                    [class.rotate-0]="activeFaqId() !== item.id"
                    [class.rotate-180]="activeFaqId() === item.id"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>

                <!-- Answer Content -->
                @if (activeFaqId() === item.id) {
                  <div class="px-6 pb-6 pt-0">
                    <p class="text-gray-600 border-t border-[#DCD3FC] pt-4">{{ item.answer }}</p>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </section>

    </div>
  `,
  styles: [`
    /* Custom styles for matching the look better, though mostly relies on Tailwind */
    :host {
      display: block;
      /* Using Inter font as default and adding a fallback for Bengali readability */
      font-family: 'Inter', 'Noto Sans Bengali', sans-serif;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  // Signal to manage the active FAQ item (for the accordion)
  activeFaqId: WritableSignal<number | null> = signal(1);

  // Data for the 'Why Attend' section (feature cards)
  // Icons are Lucide/SVG equivalents for the specific look from the image.
  features = [
    {
      title: 'বেস্ট রেটেড স্পিকার',
      description: 'বিশ্বসেরা বিশ্ববিদ্যালয়ের অভিজ্ঞ শিক্ষাবিদ, গবেষক ও বিশেষজ্ঞদের অভিজ্ঞতা থেকে শুরু করে নির্ভুল শিক্ষকের সঙ্গে শিক্ষা।',
      icon: '<path d="M19 19H5V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/><rect x="4" y="2" width="16" height="4" rx="2" ry="2"/><path d="M12 11h.01"/><path d="M10 15h4"/>', // Speaker icon
    },
    {
      title: 'মানসম্মত কনটেন্ট',
      description: 'আমাদের অভিজ্ঞ স্পিকারের তৈরি করা কনটেন্টএর সব থেকে সেরা ও কার্যকর অংশ আপনার জন্য অপেক্ষা করছে।',
      icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>', // Badge icon
    },
    {
      title: 'নেটওয়ার্কিং এর সুযোগ',
      description: 'আপনার হাতে থাকবে বিদেশে উচ্চশিক্ষা আমাদের শিক্ষাবিদ ও বিশেষজ্ঞদের সঙ্গে পরিচিত হওয়া।',
      icon: '<circle cx="12" cy="12" r="10"/><path d="m8 10 2 2 2-2m4 0 2 2 2-2"/>', // Network/connections icon (simplified)
    },
  ];

  // Data for the 'Speakers' section
  speakers: Speaker[] = [
    {
      name: 'এলমা নাওয়ার',
      title: 'আন্তর্জাতিক ডিজাইনার, যুক্তরাজ্য থেকে পিএইচডি গবেষক',
      imageUrl: 'https://placehold.co/300x400/333333/ffffff?text=Speaker+A',
    },
    {
      name: 'আরিহান রহমান',
      title: 'গবেষক, ইউনিভার্সিটি অফ ইলিনয়, ইন্টারন্যাশনাল কনফারেন্সের নতুন তারকা গবেষক',
      imageUrl: 'https://placehold.co/300x400/4F46E5/ffffff?text=Speaker+B',
    },
    {
      name: 'সাবিহা চৌধুরী',
      title: 'সিনিয়র ফেলো, ক্যানাডা থেকে ইন্টারন্যাশনাল স্টাডিজ ও ম্যানেজমেন্টের বিশেষজ্ঞ',
      imageUrl: 'https://placehold.co/300x400/6D28D9/ffffff?text=Speaker+C',
    },
    {
      name: 'নাফিস আহমেদ',
      title: 'ছাত্র-ছাত্রী, ক্যানাডা থেকে গ্লোবাল বিজনেস ও ম্যানেজমেন্ট',
      imageUrl: 'https://placehold.co/300x400/7C3AED/ffffff?text=Speaker+D',
    },
  ];

  // Data for the FAQ section
  faqs: FaqItem[] = [
    {
      id: 1,
      question: 'এই সব ইভেন্ট কি বিনামূল্যে?',
      answer: 'ছোট থেকে এ আমাদের লক্ষ্য। যারা বিশ্বাস করি, কেরিয়ারে তারা শীর্ষে থাকতে পারে, তাদের সুযোগ থাকা উচিত। অন্য কোথাও খরচ হওয়ার প্রয়োজন নেই। এটি আমাদের একমাত্র আশা। এই সব ইভেন্ট সম্পূর্ণ বিনামূল্যে।',
    },
    {
      id: 2,
      question: 'আমি কিভাবে ইভেন্টটিতে যোগ দেবো?',
      answer: 'ইভেন্টটিতে যোগ দেওয়ার জন্য, আপনাকে কেবল "আগত ইভেন্টগুলো দেখুন" বাটনে ক্লিক করতে হবে এবং রেজিস্ট্রেশন ফর্মটি পূরণ করতে হবে। রেজিস্ট্রেশন সম্পন্ন হলে ইভেন্টের লিংক আপনার ইমেইলে পাঠিয়ে দেওয়া হবে।',
    },
    {
      id: 3,
      question: 'আমি কিভাবে কোনো ইভেন্টের সিডওয়ার/অ্যাক্সেস পাব?',
      answer: 'লাইভ ইভেন্ট শেষ হওয়ার ৭২ ঘন্টার মধ্যে সমস্ত নিবন্ধিত অংশগ্রহণকারীদের ইভেন্টের রেকর্ডিং এবং অন্য কোনো প্রাসঙ্গিক সিডওয়ার/অ্যাক্সেস লিংক ইমেলের মাধ্যমে সরবরাহ করা হবে।',
    },
  ];

  // Logic for the FAQ accordion
  toggleFaq(id: number): void {
    this.activeFaqId.update(currentId => (currentId === id ? null : id));
  }
}
