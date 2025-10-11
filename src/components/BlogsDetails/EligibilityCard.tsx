// src/components/EligibilityCard.jsx

import { useNavigate } from "react-router";

const EligibilityCard = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/eligibility'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-2xl rounded-xl w-full sm:max-w-md md:max-w-lg lg:max-w-xl overflow-hidden">
        
        {/* উপরের ইমেজ সেকশন */}
        <div className="relative bg-blue-500 h-56 flex items-end justify-center">
          <img 
            src="path/to/your/image.jpg" 
            alt="Student with US flag" 
            className="w-full h-full object-cover"
            style={{ backgroundImage: `url(https://via.placeholder.com/400x300/1e40af/ffffff?text=Admit+Eligibility+Check)` }}
          />

          {/* টীকা (Speech Bubble) */}
          <div className="absolute top-4 left-4 bg-pink-100 p-3 rounded-xl shadow-md transform -rotate-2">
            <p className="text-xs font-semibold text-gray-800">
              Get a chance to go from a F1 student visa holder to a permanent resident!
            </p>
            <div className="absolute w-0 h-0 border-t-[10px] border-t-pink-100 border-l-[10px] border-l-transparent -bottom-2 left-4 transform rotate-[40deg]"></div>
          </div>
        </div>

        {/* নিচের কন্টেন্ট সেকশন */}
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Find out Universities in the USA where you get Admission
          </h2>

          <button
            onClick={handleButtonClick}
            className="w-full py-3 px-6 rounded-lg font-bold text-white 
                       bg-gradient-to-r from-indigo-600 to-violet-600 
                       hover:from-indigo-700 hover:to-violet-700 
                       transition duration-200 shadow-lg mb-4"
          >
            Check your Admit Eligibility Now
          </button>
          
          <div className="text-gray-500 text-sm">
            <span role="img" aria-label="heart">❤️</span> 2L+ Leap students sent abroad
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCard;
