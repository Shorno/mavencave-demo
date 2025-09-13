

export const Intro = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <div className="text-sm text-gray-500 mb-2">
        <span className="font-bold">সফলতা টুটোরিয়াল</span> / পরীক্ষা-সমূহ / IELTS / প্র্যাকটিস টেস্ট
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">IELTS প্র্যাকটিস টেস্ট</h1>
      <div className="flex items-center text-gray-500 text-sm mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>আপডেট করা হয়েছে ২০ এপ্রিল, ২০২৩</span>
      </div>
      <p className="text-gray-700 mb-4">
        IELTS পরীক্ষার জন্য প্রস্তুতি নিচ্ছেন? আমাদের ব্যাপক IELTS প্র্যাকটিস টেস্টগুলো আপনাকে আপনার টার্গেট ব্যান্ড স্কোর অর্জন
        করার জন্য ডিজাইন করা হয়েছে।
      </p>
      <p className="text-gray-700 mb-4">
        প্র্যাকটিস টেস্টগুলো খুবই গুরুত্বপূর্ণ কারণ এগুলো আপনাকে IELTS পরীক্ষার ফরম্যাটের সাথে পরিচিত করে, সময়
        ব্যবস্থাপনায় দক্ষ করে তোলে, এবং প্রশ্নের উত্তরগুলোতে দ্রুত এবং সঠিকভাবে উত্তর দেওয়া সাহায্য করে।
      </p>
      <p className="text-gray-700">
        বাস্তব পরীক্ষার পরিবেশ অনুকরণ করার মাধ্যমে আপনি আত্মবিশ্বাস অর্জন করবেন এবং আপনার শোনার, পড়ার,
        লেখার ও বলার দক্ষতা উন্নত করবেন, যাতে পরীক্ষার দিন আপনি সম্পূর্ণ প্রস্তুত থাকেন।
      </p>
      <p className="text-gray-700 mt-4">
        আজই আমাদের প্র্যাকটিস টেস্ট দিয়ে আপনার প্রস্তুতি শুরু করুন এবং সফলতার প্রথম পদক্ষেপ নিন।
      </p>
    </div>
  );
};

// IeltsReading Component
export const IeltsReading = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">১. IELTS প্র্যাকটিস টেস্ট: রিডিং</h2>
      <p className="text-gray-700 mb-4">
        IELTS Reading টেস্ট, Academic অথবা General Training মডিউল যাই হোক না কেন, আপনার কাছে ৬০ মিনিট সময়
        থাকবে ৪০টি প্রশ্নের উত্তর দেওয়ার জন্য।
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">Academic মডিউল:</span> আপনাকে বিভিন্ন বর্ণনামূলক, তথ্যভিত্তিক এবং বিশ্লেষণাত্মক বিষয় নিয়ে প্রশ্ন করা হবে। কখনও
        কখনও ডায়াগ্রাম বা গ্রাফিক্স সহ এই প্রশ্নগুলো হয়, কারণ এগুলো জার্নাল, আর্টিকেল এবং সংবাদপত্র থেকে নেওয়া হয়।
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold">General Training মডিউল:</span> আপনি ছোট বিবরণ বিষয়ক লেখা, কাজের সাথে সম্পর্কিত লেখা, এবং একটি ছোট সাধারণ
        আগ্রহের বিষয় নিয়ে লেখা অংশের মুখোমুখি হবেন, যা হ্যান্ডবুক বা বিজ্ঞাপন হতে পারে।
      </p>
      <p className="text-gray-700 mb-4">
        আপনার দক্ষতা বাড়াতে এবং ব্যান্ড স্কোর উন্নত করতে আমাদের IELTS Reading Tests দিয়ে প্র্যাকটিস করুন।
      </p>
      <p className="text-gray-700 mb-6">
        IELTS Reading টেস্টের অভ্যাস করার জন্য একটি sample paper একটি চেষ্টা করে দেখতে চান?
      </p>
      <a href="#" className="w-full text-center bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors block">
        IELTS রিডিং প্র্যাকটিস টেস্টের জন্য এখানে ক্লিক করুন →
      </a>
    </div>
  );
};

// IeltsSummary Component
export const IeltsSummary = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto my-8">
      {/* Listening Section */}
      <div className="w-full mb-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">৩. IELTS প্র্যাকটিস টেস্ট: লিসেনিং</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p>
            IELTS Listening টেস্ট ৩০ মিনিটে হয়, যা Academic এবং General Training উভয় মডিউলের জন্য একই। এই টেস্ট আপনাকে চারটি রেকর্ডিং শুনতে হয়, যেখানে দেশীয় ইংরেজি বক্তব্য কথা বলছেন, এবং মোট ৪০টি প্রশ্নের উত্তর দিতে হয়, প্রতি রেকর্ডিংয়ে ১০টি প্রশ্ন থাকে।
          </p>
          <p>
            <span className="font-semibold text-gray-900">প্রতিটি রেকর্ডিং:</span> আপনি শুধু একবারই শুনতে পাবেন, যা আপনার সক্ষমতা পরীক্ষা করবে।
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>মূল ধারণা এবং গুরুত্বপূর্ণ তথ্য শোনা</li>
            <li>সম্ভাব্য, মতামত, এবং বক্তব্য উদ্দেশ্য বোঝা</li>
            <li>প্রাসঙ্গিক ভাবন ও কার্যকারণ অনুসরণ করা</li>
          </ul>
          <p>আপনি নিচের রেকর্ডিংগুলো থেকে শুনতে পারেন:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>রেকর্ডিং ১: সামাজিক প্রেক্ষাপটে দুইজন মানুষের মধ্যে কথোপকথন</li>
            <li>রেকর্ডিং ২: সামাজিক পরিবেশে একটি মনোলগ (যেমন, স্থানীয় সুবিধা গুলোর বর্ণনা)</li>
            <li>রেকর্ডিং ৩: একাডেমিক বিষয় নিয়ে মনোলগ (যেমন, বিশ্ববিদ্যালয়ের লেকচার)</li>
            <li>রেকর্ডিং ৪: শিক্ষামূলক পরিবেশে সামাজিক ব্যবহারের মধ্যে কথোপকথন</li>
          </ul>
        </div>
      </div>

      {/* Writing Section */}
      <div className="w-full p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">২. IELTS প্র্যাকটিস টেস্ট: রাইটিং</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p>
            IELTS Writing সেকশন সম্পন্ন করার জন্য আপনার কাছে ৬০ মিনিট সময় রয়েছে, যা Academic এবং General Training দুই মডিউলের জন্যই প্রযোজ্য।
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">Academic মডিউল:</h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Task 1-এ আপনাকে একটি টেবিল, গ্রাফ, বার, বা ডায়াগ্রাম কমপক্ষে ১৫০ শব্দে বর্ণনা করতে হবে।</li>
            <li>Task 2-এ একটি রচনা (essay) লিখতে হবে, যার দৈর্ঘ্য ন্যূনতম ২৫০ শব্দ।</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">General Training মডিউল:</h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Task 1-এ কমপক্ষে ১৫০ শব্দের একটি চিঠি লিখতে হবে।</li>
            <li>Task 2-এ একটি রচনা লিখতে হবে, যার দৈর্ঘ্য ন্যূনতম ২৫০ শব্দ।</li>
          </ul>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">নিবন্ধের নমুনা প্রশ্নসমূহ:</h3>
          <p className="text-lg text-gray-700">
            ১. মানুষের একটি প্রধান বিচার্য কাজ যে অন্যদেরকে আদালতের ভুল হনো কিনা জানাতে হয়...
          </p>
          <p className="text-lg text-gray-700 mt-4">
            ২. নিম্ন বর্ণিত ডায়াগ্রাম গ্রাফিক ও কাচের পাত্র পুনর্ব্যবহারের জন্য দেওয়া আছে...
          </p>
          <div className="mt-4 w-full flex justify-center">
            <img src="../../../../public/images/Bristy/fdd7501005d474b82054296090fd24fb.png" alt="Lifecycle of Glass and Plastic Recycling" className="max-w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Common Button */}
      <div className="w-full mt-8">
        <button className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          IELTS প্র্যাকটিস টেস্টের জন্য এখানে ক্লিক করুন →
        </button>
      </div>
    </div>
  );
};


export default Intro;
