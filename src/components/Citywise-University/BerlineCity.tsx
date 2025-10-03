import React, { useEffect, useState } from "react";
import  universities  from "../../data/berlin-university";
import { Link } from "react-router";
import { FaTrophy } from "react-icons/fa";
import { MapPinIcon } from "lucide-react";



// University data type (based on JSON structure)
interface University {
  id: number;
  university_name: string;
  location: string;
  qs_rank: number;
  admission_fee: string;
  ielts_score: string;
  course_duration: string;
  degree: string;
  logo?: string;
  best_courses: string[];
}

const BerlineCity: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [universities, setUniversities] = useState<University[]>([]);

  // Filter states
  const [selectedDegrees, setSelectedDegrees] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedFees, setSelectedFees] = useState<string[]>([]);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const itemsPerPage = 10;

  // Clear all filters
  const clearFilters = () => {
    setSelectedDegrees([]);
    setSelectedLocations([]);
    setSelectedDurations([]);
    setSelectedFees([]);
    setSelectedCourses([]);
  };

  // Unique filter values
  const degreeOptions: string[] = [
    "মাস্টার্স",
    "পিএইচডি",
    "পিজি ডিপ্লোমা",
    "ইউজি ডিপ্লোমা",
    "পিজি+ইউজি ডিপ্লোমা",
  ];
  const locationOptions: string[] = [
    ...new Set(universities.map((uni: University) => uni.location)),
  ];
  const durationOptions: string[] = [
    ...new Set(universities.map((uni: University) => uni.course_duration)),
  ];
  const feeOptions: string[] = [
    ...new Set(universities.map((uni: University) => uni.admission_fee)),
  ];
  const courseOptions: string[] = [
    ...new Set(universities.flatMap((uni: University) => uni.best_courses)),
  ];

  // Filter logic
  useEffect(() => {
    let filtered: University[] = universities as University[];

    if (selectedDegrees.length > 0) {
      filtered = filtered.filter((uni) => selectedDegrees.includes(uni.degree));
    }

    if (selectedLocations.length > 0) {
      filtered = filtered.filter((uni) =>
        selectedLocations.includes(uni.location)
      );
    }

    if (selectedDurations.length > 0) {
      filtered = filtered.filter((uni) =>
        selectedDurations.includes(uni.course_duration)
      );
    }

    if (selectedFees.length > 0) {
      filtered = filtered.filter((uni) =>
        selectedFees.includes(uni.admission_fee)
      );
    }

    if (selectedCourses.length > 0) {
      filtered = filtered.filter((uni) =>
        uni.best_courses.some((course) => selectedCourses.includes(course))
      );
    }

    const sorted = filtered.sort((a, b) =>
      sortOrder === "asc" ? a.qs_rank - b.qs_rank : b.qs_rank - a.qs_rank
    );

    setUniversities(sorted);
    setCurrentPage(1);
  }, [
    sortOrder,
    selectedDegrees,
    selectedLocations,
    selectedDurations,
    selectedFees,
    selectedCourses,
  ]);

  // Checkbox helper
  const toggleCheckbox = (
    value: string,
    selectedList: string[],
    setSelectedList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selectedList.includes(value)) {
      setSelectedList(selectedList.filter((v) => v !== value));
    } else {
      setSelectedList([...selectedList, value]);
    }
  };

  // Pagination
  const totalPages = Math.ceil(universities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = universities.slice(startIndex, startIndex + itemsPerPage);

  return (
 <div className="min-h-screen bg-gray-50">
  {/* Header Section */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
    <h1 className="text-2xl sm:text-3xl text-blue-600 font-bold pb-4">
      
  বার্লিন, জার্মানির সেরা বিশ্ববিদ্যালয়: ২০২৫ সালের জন্য ফি, কোর্স এবং র‍্যাঙ্কিং
    </h1>
    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
      বিশ্বের শীর্ষস্থানীয় কিছু বিশ্ববিদ্যালয় যুক্তরাষ্ট্রে অবস্থিত এবং এসব
      প্রতিষ্ঠান বিস্তৃত পরিসরে বিভিন্ন বিষয়ে মাস্টার্স ডিগ্রি প্রদান করে...
    </p>
  </div>

  {/* Main Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-6 md:gap-8 pb-12">
    {/* Sidebar */}
    <aside className="bg-white rounded-lg shadow-lg p-4 sm:p-6 sticky top-4 md:top-6 max-h-[80vh] overflow-y-auto relative md:sticky">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">ফিল্টারসমূহ</h2>
        <button
          onClick={clearFilters}
          className="text-blue-500 hover:text-blue-700 text-sm font-semibold"
        >
          সব মুছে ফেলুন
        </button>
      </div>

      {[
        {
          label: "১ম বর্ষের ফি",
          options: feeOptions,
          selected: selectedFees,
          setSelected: setSelectedFees,
        },
        {
          label: "ডিগ্রী",
          options: degreeOptions,
          selected: selectedDegrees,
          setSelected: setSelectedDegrees,
        },
        {
          label: "কোর্সসমূহ",
          options: courseOptions,
          selected: selectedCourses,
          setSelected: setSelectedCourses,
        },
        {
          label: "শহরসমূহ",
          options: locationOptions,
          selected: selectedLocations,
          setSelected: setSelectedLocations,
        },
        {
          label: "কোর্সের মেয়াদ",
          options: durationOptions,
          selected: selectedDurations,
          setSelected: setSelectedDurations,
        },
      ].map(({ label, options, selected, setSelected }) => (
        <details key={label} className="group cursor-pointer last:border-none py-2">
          <summary className="flex justify-between items-center font-semibold text-gray-800">
            {label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 transform group-open:rotate-180 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <div className="mt-3 space-y-2 max-h-32 overflow-y-auto">
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center cursor-pointer text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 rounded"
                  checked={selected.includes(option)}
                  onChange={() => toggleCheckbox(option, selected, setSelected)}
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
        </details>
      ))}
    </aside>

    {/* Results */}
    <section>
      {/* Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-lg font-bold">
          Total Universities: {universities.length}
        </h1>
        <select
          className="border px-4 py-2 rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">QS Rank: Low to High</option>
          <option value="desc">QS Rank: High to Low</option>
        </select>
      </div>

      {/* University Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {currentItems.map((univ) => (
          <div
            key={univ.id}
            className="bg-white rounded-lg shadow-2xl p-5 flex flex-col justify-between"
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src={univ.logo || "https://via.placeholder.com/80"}
                alt={univ.university_name}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
              <div className="inline-flex flex-col">
                <h2 className="font-bold text-md ">{univ.university_name}</h2>
                <p className="text-gray-500 flex items-center gap-1">
                  <MapPinIcon className="w-5 h-5 text-gray-500" />
                  {univ.location}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="pl-10">
                <p className="text-sm text-gray-500">QS র‍্যাংক</p>
                <div className="flex items-center gap-1 font-bold pl-6">
                  <FaTrophy className="text-blue-500 w-4 h-4" />
                  {univ.qs_rank}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">টিউশন ফি</p>
                <p className="font-bold">{univ.admission_fee}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">ভর্তি প্রয়োজনীয়তা</p>
                <p className="font-bold"> {univ.ielts_score}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4 items-center justify-center flex-wrap">
              <button className="flex items-center gap-2 px-4 py-2 border border-blue-400 text-blue-500 rounded-full hover:bg-blue-50 transition">
                আরও জানুন
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6-6 6M4.5 12h15" />
                </svg>
              </button>
              <Link
                to="/eligibility"
                className="flex items-center gap-2 px-4 py-2 border border-blue-400 text-white bg-blue-600 rounded-full hover:bg-blue-500 transition"
              >
                যোগ্যতা যাচাই করুন
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 items-center gap-2 flex-wrap">
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          className={`px-4 py-2 border rounded ${
            currentPage === 1
              ? "bg-gray-200 text-gray-600 cursor-not-allowed"
              : "bg-white hover:bg-blue-100"
          }`}
          disabled={currentPage === 1}
        >
          পূর্ববর্তী
        </button>

        {[...Array(totalPages).keys()].map((page) => {
          const pageNumber = page + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`px-3 py-2 rounded border ${
                currentPage === pageNumber
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-blue-100"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
          className={`px-4 py-2 border rounded ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-600 cursor-not-allowed"
              : "bg-white hover:bg-blue-100"
          }`}
          disabled={currentPage === totalPages}
        >
          পরবর্তী
        </button>
      </div>
    </section>
  </div>
</div>
  );
};

export default BerlineCity;
