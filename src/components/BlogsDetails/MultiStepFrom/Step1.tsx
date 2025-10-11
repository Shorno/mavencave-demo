// Step1.jsx

const countriesDataWithImages = [
    { name: 'USA', flagImage: '../../../../public/images/Bristy/images (23).png' },
    { name: 'UK', flagImage: '../../../../public/images/Bristy/images (20).png' },
    { name: 'Canada', flagImage: '../../../../public/images/Bristy/images (21).png' },
    { name: 'Ireland', flagImage: '../../../../public/images/Bristy/flag-of-ireland.jpg' },
    { name: 'Australia', flagImage: '../../../../public/images/Bristy/australia-flag.png' },
    { name: 'Germany', flagImage: '../../../../public/images/Bristy/images (22).png' },
    { name: 'Dubai/UAE', flagImage: '../../../../public/images/Bristy/51095OIjbWL.jpg' }, // Assuming a UAE flag for Dubai/UAE
    { name: 'Other', flagImage: '../../../../public/images/Bristy/world.avif' }, // A generic world/globe icon for 'Other'
];

// Original data arrays (kept for reference, though the mapped version is used below)
const countries = ['USA', 'UK', 'Canada', 'Ireland', 'Australia', 'Germany', 'Dubai/UAE', 'Other'];
const pursuits = ['PG Diploma', 'Master\'s', 'Bachelor\'s', 'MBA', 'PhD', 'Not decided'];
const passportOptions = ['Yes', 'Applied', 'No'];


/**
 * Step 1 component for the study abroad journey form.
 * @param {object} props
 * @param {function} props.nextStep - Function to advance to the next step.
 * @param {object} [props.formData={}] - Current state data of the form.
 * @param {function} props.handleOptionSelect - Function to update the form data state.
 */
const Step1 = ({ nextStep, formData = {}, handleOptionSelect }) => {
    
    // Helper function for rendering buttons with the style matching the Countries/Pursuits options in the image
    const SelectionButton = ({ fieldName, optionValue, children }) => {
        const isSelected = formData[fieldName] === optionValue;
        return (
            <button
                key={optionValue}
                onClick={() => handleOptionSelect(fieldName, optionValue)}
                // Styling refined to match the screenshot: rounded-lg, subtle border, primary color on select (white background, indigo border/text)
                className={`py-3 px-4 border text-sm font-medium rounded-lg transition duration-200 text-left w-full h-full
                    ${isSelected
                        ? 'bg-white text-indigo-600 border-indigo-600 shadow-md' // Selected Style (Matches image's country/pursuit button)
                        : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-500 hover:shadow-sm' // Default Style
                    }`}
            >
                {children}
            </button>
        );
    };

    // Helper function for rendering the simple Passport buttons
    const PassportButton = ({ optionValue }) => {
        const isSelected = formData.validPassport === optionValue;
        return (
            <button 
                onClick={() => handleOptionSelect('validPassport', optionValue)}
                // Styling for passport buttons (solid primary fill on selection)
                className={`flex-1 py-3 px-4 border text-sm font-medium rounded-lg transition duration-200 
                    ${isSelected 
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' 
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50' // Light background for unselected
                    }`}
            >
                {optionValue}
            </button>
        );
    };


    // Check if all required fields are selected to enable the Next button
    const allFieldsSelected = formData.dreamCountry && formData.pursuit && formData.validPassport;

    return (
        // Wrapper div with padding adjusted for the form content area
        <div className="max-w-xl mx-auto p-4 sm:p-0"> 

            {/* --- Choose your dream country --- */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose your dream country</h2>
            <div className="grid grid-cols-2 gap-3 mb-8"> {/* 2-column grid for countries */}
                {/* We map over countriesDataWithImages to get name and flagImage */}
                {countriesDataWithImages.map(({ name, flagImage }) => (
                    <SelectionButton
                        key={name}
                        fieldName="dreamCountry"
                        optionValue={name}
                    >
                        {/* Content for the button: Flag Image + Name */}
                        <span className="flex items-center">
                            {/* Uses <img> tag to display the flag image */}
                            <img 
                                src={flagImage} 
                                alt={`${name} flag`} 
                                className="w-5 h-5 mr-2 rounded-full object-cover" // Tailwind for image styling
                            />
                            {name}
                            {/* Dropdown arrow for 'Other' to match the image */}
                            {name === 'Other' && <span className="ml-auto text-sm text-gray-500">▼</span>}
                        </span>
                    </SelectionButton>
                ))}
            </div>

            {/* --- What do you wish to pursue? --- */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">What do you wish to pursue?</h2>
            <div className="grid grid-cols-3 gap-3 mb-8"> {/* 3-column grid for pursuits */}
                {pursuits.map(pursuit => (
                    <SelectionButton
                        key={pursuit}
                        fieldName="pursuit"
                        optionValue={pursuit}
                    >
                        {pursuit}
                    </SelectionButton>
                ))}
            </div>

            {/* --- Do you have a valid Passport? --- */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Do you have a valid Passport?</h2>
            <div className="flex space-x-3 mb-10"> {/* Flex container for passport options */}
                {passportOptions.map(option => (
                    <PassportButton 
                        key={option}
                        optionValue={option} 
                    />
                ))}
            </div>

            {/* --- Next Button --- */}
            <div className="flex justify-start"> {/* Align button to the start (left) */}
                <button
                    onClick={nextStep}
                    disabled={!allFieldsSelected} // সব অপশন সিলেক্ট না হলে নেক্সট বাটন ডিজেবল থাকবে
                    className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-bold hover:bg-indigo-700 disabled:opacity-50 transition duration-200 shadow-lg"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Step1;