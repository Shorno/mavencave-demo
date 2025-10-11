// Step2.jsx



const educationLevels = ['10th', '12th', 'Bachelor\'s', 'Master\'s', 'MBBS / MD'];
const examStatuses = ['Not decided', 'Already gave exam', 'Booked my exam', 'Planning'];

const Step2 = ({ nextStep, prevStep, formData, handleOptionSelect }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">What's your highest level of education?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {educationLevels.map(level => (
          <button
            key={level}
            onClick={() => handleOptionSelect('highestEducation', level)}
            className={`py-2 px-4 border rounded-lg transition duration-200 ${
              formData.highestEducation === level
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-indigo-50 hover:border-indigo-500'
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6">What is your English language exam status?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-8">
        {examStatuses.map(status => (
          <button
            key={status}
            onClick={() => handleOptionSelect('examStatus', status)}
            className={`py-2 px-4 border rounded-lg transition duration-200 ${
              formData.examStatus === status
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-indigo-50 hover:border-indigo-500'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6">Select your current city</h2>
      <select
        name="currentCity"
        value={formData.currentCity || ''}
        onChange={(e) => handleOptionSelect('currentCity', e.target.value)}
        className="w-full py-2.5 px-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 mb-10"
      >
        <option value="" disabled>Eg. Bangladesh</option>
        <option value="Dhaka">Dhaka</option>
        <option value="Chittagong">Chittagong</option>
        <option value="Kolkata">Kolkata</option>
        {/* আরো অপশন যোগ করুন */}
      </select>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="text-gray-600 py-3 px-6 rounded-lg font-bold hover:text-gray-900 transition duration-200"
        >
          &larr; Previous
        </button>
        <button
          onClick={nextStep}
          disabled={!formData.highestEducation || !formData.examStatus || !formData.currentCity}
          className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-bold hover:bg-indigo-700 disabled:opacity-50 transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;