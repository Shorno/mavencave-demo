interface UniversityData {
  id: string;
  university_name: string;
  location: string;
  degree: string;
  qs_rank: number;
  admission_fee: string;
  ielts_score: number;
  logo: string;
  important_info: string;
  established_year: number;
  total_students: number;
  total_international_students: number;
  best_courses: string[];
  course_duration: string;
  application_end_dates: string[];
  eligibility: string;
  ranking: {
    qs_ranking: number;
    the_ranking: number;
    us_news_ranking: number;
    arwu_ranking: number;
    forbes_ranking: number;
    cwt_ranking: number;
  };
}

const universities: UniversityData[] = [
  {
    id: "1",
    university_name: "ফ্রাইয়ে ইউনিভারসিট্যাট,বারলিন",
    location: "বারলিন",
    degree: "মাস্টার্স",
    qs_rank: 4,
    admission_fee: "$৯৭",
    ielts_score: 7.5,
    logo: "https://i.ibb.co/RGMK9MK0/images-12.jpg",
    important_info:
      "1592 সালে প্রতিষ্ঠিত, Trinity College Dublin আয়ারল্যান্ডের সবচেয়ে পুরানো বিশ্ববিদ্যালয় এবং এটি ইউরোপের অন্যতম মর্যাদাপূর্ণ প্রতিষ্ঠান।",
    established_year: 1592,
    total_students: 36000,
    total_international_students: 7000,
    best_courses: ["Law", "Business Administration", "Medicine", "Public Policy", "Engineering"],
    course_duration: "12 months",
    application_end_dates: ["January 15", "February 1", "March 15", "October 1", "November 1", "December 1"],
    eligibility:
      "Strong academic record with a bachelor's degree, competitive GRE/GMAT scores, and a compelling statement of purpose.",
    ranking: {
      qs_ranking: 4,
      the_ranking: 2,
      us_news_ranking: 3,
      arwu_ranking: 1,
      forbes_ranking: 5,
      cwt_ranking: 3,
    },
  },
  {
    id: "2",
    university_name: "হুমবোল্ট ইউনিভারসিট্যাট জু বার্লিন",
    location: "বার্লিন",
    degree: "মাস্টার্স",
    qs_rank: 5,
    admission_fee: "$90",
    ielts_score: 7.0,
    logo: "https://i.ibb.co/mVH7DxQQ/download-3.png",
    important_info:
      "1854 সালে প্রতিষ্ঠিত, University College Dublin আয়ারল্যান্ডের অন্যতম শীর্ষ গবেষণা বিশ্ববিদ্যালয় এবং আন্তর্জাতিকভাবে স্বীকৃত।",
    established_year: 1854,
    total_students: 17000,
    total_international_students: 3800,
    best_courses: ["Computer Science", "Engineering", "Business", "Law", "Medicine"],
    course_duration: "18 months",
    application_end_dates: ["December 1", "December 15", "January 10", "January 15", "March 1", "April 1"],
    eligibility:
      "Competitive GPA, high GRE/GMAT scores, excellent letters of recommendation, and a well-written statement of purpose.",
    ranking: {
      qs_ranking: 5,
      the_ranking: 3,
      us_news_ranking: 6,
      arwu_ranking: 2,
      forbes_ranking: 4,
      cwt_ranking: 5,
    },
  },
  {
    id: "3",
    university_name: "টেকনিশে ইউনিভারসিট্যাট বার্লিন",
    location: "বার্লিন",
    degree: "মাস্টার্স",
    qs_rank: 7,
    admission_fee: "$80",
    ielts_score: 6.5,
    logo: "https://i.ibb.co/8ddwFhR/download-4.png",
    important_info:
      "1975 সালে প্রতিষ্ঠিত, Dublin City University আধুনিক গবেষণা এবং উদ্ভাবনের জন্য সুপরিচিত এবং এটি আয়ারল্যান্ডের একটি দ্রুত বর্ধনশীল বিশ্ববিদ্যালয়।",
    established_year: 1975,
    total_students: 18000,
    total_international_students: 3000,
    best_courses: ["Data Science", "Engineering", "Business Analytics", "Education"],
    course_duration: "24 months",
    application_end_dates: ["February 15", "March 30", "July 1", "October 15"],
    eligibility:
      "Bachelor’s degree with strong GPA, IELTS/TOEFL proficiency, and relevant work/research experience preferred.",
    ranking: {
      qs_ranking: 7,
      the_ranking: 5,
      us_news_ranking: 8,
      arwu_ranking: 4,
      forbes_ranking: 6,
      cwt_ranking: 7,
    },
  },
  {
    id: "4",
    university_name: "বার্ড কলেজ বার্লিন",
    location: "বার্লিন",
    degree: "মাস্টার্স",
    qs_rank: 145,
    admission_fee: "$80",
    ielts_score: 6.5,
    logo: "https://i.ibb.co/8ddwFhR/download-4.png",
    important_info:
      "1975 সালে প্রতিষ্ঠিত, Dublin City University আধুনিক গবেষণা এবং উদ্ভাবনের জন্য সুপরিচিত এবং এটি আয়ারল্যান্ডের একটি দ্রুত বর্ধনশীল বিশ্ববিদ্যালয়।",
    established_year: 1975,
    total_students: 18000,
    total_international_students: 3000,
    best_courses: ["Data Science", "Engineering", "Business Analytics", "Education"],
    course_duration: "24 months",
    application_end_dates: ["February 15", "March 30", "July 1", "October 15"],
    eligibility:
      "Bachelor’s degree with strong GPA, IELTS/TOEFL proficiency, and relevant work/research experience preferred.",
    ranking: {
      qs_ranking: 7,
      the_ranking: 5,
      us_news_ranking: 8,
      arwu_ranking: 4,
      forbes_ranking: 6,
      cwt_ranking: 7,
    },
  },
];

export default universities;
