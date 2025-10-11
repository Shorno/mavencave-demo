// Step3.jsx



const Step3 = ({ prevStep, formData, handleChange, handleSubmit }) => {
  const isFormValid = formData.name && formData.email && formData.phone;

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-6">Your personal details</h2>

      <div className="mb-6">
        <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Your name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name || ''}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Your email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email || ''}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-10">
        <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">Your Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={formData.phone || ''}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={prevStep}
          className="text-gray-600 py-3 px-6 rounded-lg font-bold hover:text-gray-900 transition duration-200"
        >
          &larr; Previous
        </button>
        <button
          type="submit"
          disabled={!isFormValid} // ইনপুট ফিল্ড ফিল আপের পর বাটন একটিভ হবে
          className={`py-3 px-8 rounded-lg font-bold transition duration-300 ${
            isFormValid 
              ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
              : 'bg-gray-300 text-gray-600 cursor-not-allowed'
          }`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Step3;