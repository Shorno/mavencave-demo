import React, { useMemo } from 'react';
import { Link } from 'react-router';

const testimonials = [
  {
    id: 1,
    name: "Rubab Salman",
    score: 8,
    review: "Alhumdulillah I have got above my desire bands! All thanks to Miss Lovleen! She is amazing and her teaching style is so friendly that anyone can ask questions without hesitation! Practicing during sessions is the best part of her class! Always giving homework and make sure we are doing best out of it. Thank you Mam Lovleen, it wouldn't be possible without your support, I am honored to be coached by best of the best! And ofcourse leap scholars! The whole team is very supportive! Specially Khushi Salot, she helped me in terms of test booking also making sure my IELTS journey is going smooth ! Thank you LEAP SCHOLAR -Best platform for IELTS coaching",
    date: "2024-06-21",
  },
  {
    id: 2,
    name: "Anika Rahman",
    score: 7.5,
    review: "The coaching at LEAP SCHOLAR was transformative. The personalized feedback and dedicated practice sessions significantly boosted my confidence. Achieved my desired score thanks to the supportive environment and expert guidance.",
    date: "2024-07-10",
  },
  {
    id: 3,
    name: "Samiul Islam",
    score: 8.5,
    review: "Outstanding results! Miss Lovleen's teaching methods are incredibly effective. The team went above and beyond, even assisting with administrative tasks. Highly recommend LEAP SCHOLAR to anyone serious about their IELTS.",
    date: "2024-06-28",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    score: 7,
    review: "Excellent platform for IELTS prep! The constant homework and follow-up ensured I was always on track. The entire LEAP SCHOLAR team is encouraging and professional. Great experience overall.",
    date: "2024-07-05",
  },
  {
    id: 5,
    name: "Hasan Tarique",
    score: 7.5,
    review: "From the very first session, the support was exceptional. The practice material provided was exactly what I needed to score well. Highly grateful to the entire LEAP SCHOLAR team!",
    date: "2024-07-15",
  },
];

const TestimonialCard = ({ testimonial }) => {
  const shortReview = testimonial.review.length > 250 
    ? testimonial.review.substring(0, 250) + '...' 
    : testimonial.review;

  const initials = testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg m-4 w-full md:w-[350px] flex-shrink-0 border border-gray-100 transform transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <div className="flex items-start mb-4 relative">
        <div className="w-12 h-12 rounded-full bg-gray-500 flex flex-col items-center justify-center text-white text-xs font-bold mr-3 overflow-hidden relative">
          <span className="text-xl leading-none">{initials[0]}</span>
          <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full shadow-md">
            {testimonial.score}
          </div>
        </div>
        <div className="flex flex-col mt-1">
          <p className="font-semibold text-gray-800">{testimonial.name}</p>
          <div className="flex items-center text-xs text-gray-500">
            <span className="text-yellow-500 mr-1">★★★★★</span>
            <span className="text-[10px] ml-1">{testimonial.date}</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-700 italic mt-2">"{shortReview}"</p>
    </div>
  );
};

const TestimonialScroll = () => {
  const doubledTestimonials = useMemo(() => {
    return [...testimonials, ...testimonials];
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-900 py-12 md:py-20">
      {/* ✅ Inline animation CSS */}
      <style>
        {`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .animate-scroll-up {
          animation: scrollUp 25s linear infinite;
        }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 items-center">
        
        <div className="lg:w-1/2 w-full h-[550px] relative overflow-hidden rounded-2xl">
          <div 
            className="absolute inset-0 z-10 pointer-events-none" 
            style={{ 
              background: 'linear-gradient(to bottom, rgba(17,24,39,1) 0%, rgba(17,24,39,0) 10%, rgba(17,24,39,0) 90%, rgba(17,24,39,1) 100%)' 
            }}
          ></div>

          <div 
            className="flex flex-col items-center animate-scroll-up"
            style={{ minHeight: `${doubledTestimonials.length * 350}px` }} 
            onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
          >
            {doubledTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`${testimonial.id}-${index}`} 
                testimonial={testimonial} 
              />
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col justify-center text-center lg:text-left p-6 lg:p-0">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Have Questions? Get Guidance <span className="text-indigo-400">to reach your Dream University</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Connect with India's finest counsellors and biggest study abroad community.
          </p>
          
          <Link to="/eligibility" className="mt-8 mx-auto lg:mx-0 w-fit bg-indigo-600 text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
            Get Guidance
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialScroll;
