// src/components/Stepper.jsx


const Stepper = ({ currentStep, totalSteps }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  // প্রতিটি ধাপের নাম
  const stepNames = {
    1: "Country & Goal",
    2: "Education Status",
    3: "Personal Info"
  };

  return (
    <div className="flex flex-col space-y-6">
      {steps.map((step) => (
        <div key={step} className="flex flex-col">
          <div className="flex items-center">
            {/* ডট বা বুলেট */}
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                step <= currentStep ? 'bg-indigo-400' : 'bg-gray-600'
              }`}
            ></div>
            
            {/* লাইন এবং টেক্সট */}
            <div className={`ml-3 transition-all duration-300 ${step === currentStep ? 'text-indigo-400 font-bold' : 'text-gray-400'}`}>
                {stepNames[step]}
            </div>
          </div>

          {/* ডটগুলোকে কানেক্ট করার জন্য উল্লম্ব রেখা (শেষ ধাপ ছাড়া) */}
          {step < totalSteps && (
            <div 
                className={`ml-1.5 h-10 w-0.5 transition-colors duration-300 ${
                    step < currentStep ? 'bg-indigo-400' : 'bg-gray-600'
                }`}>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;