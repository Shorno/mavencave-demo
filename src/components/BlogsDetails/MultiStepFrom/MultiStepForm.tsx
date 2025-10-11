// src/components/MultiStepForm.jsx

import  { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Stepper from './Stepper';




const totalSteps = 3;

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({}); 

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleOptionSelect = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final Form Data:', formData);
    alert(`Form Submitted Successfully!\nData: ${JSON.stringify(formData, null, 2)}`);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 nextStep={nextStep} formData={formData} handleOptionSelect={handleOptionSelect} />;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} formData={formData} handleOptionSelect={handleOptionSelect} />;
      case 3:
        return <Step3 prevStep={prevStep} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  // মূল UI স্ট্রাকচার (রেসপনসিভ লেআউট)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        
        {/* বাম দিকের Stepper / Progress Bar (মোবাইলে উপরে থাকবে) */}
        <div className="w-full md:w-1/3 p-8 bg-gray-50 text-white flex flex-col justify-between">
          <div>
            <div className="mb-8 hidden md:block"> {/* Previous বাটন শুধু ডেক্সটপে দেখানোর জন্য */}
              <button onClick={prevStep} className={`transition-opacity ${currentStep === 1 ? 'opacity-0 cursor-default' : 'hover:text-gray-300'}`}>
                 <span className="text-xl">&larr; Back</span>
              </button>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-800">
              Start your study abroad journey
            </h1>
            <Stepper currentStep={currentStep} totalSteps={totalSteps} />
          </div>
        </div>

        {/* ডান দিকের ফর্ম কন্টেন্ট */}
        <div className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto">
          <div className="flex justify-between items-center mb-6 md:hidden"> {/* মোবাইলের জন্য Back বাটন */}
            <button onClick={prevStep} className={`text-gray-600 transition-opacity ${currentStep === 1 ? 'opacity-0 cursor-default' : 'hover:text-gray-900'}`}>
              &larr; Back
            </button>
          </div>
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;