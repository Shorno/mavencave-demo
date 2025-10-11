

import type { Blog } from "@/data/studyGuides";
import blogDetails from "@/data/studyGuides";
import { useParams } from "react-router";
import TestimonialScroll from "./TestimonialScroll";


const CoursesBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = id ? parseInt(id) : undefined;

  // Fetch the blog based on id
  const blogToShow: Blog | undefined = blogDetails.find(
    (b) => b.id === blogId
  );

  if (!blogToShow) {
    return <p className="text-center p-6">ডেটা পাওয়া যায়নি।</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-6 space-y-6">
        {/* Title & Meta */}
        <h2 className="text-2xl md:text-3xl font-bold">{blogToShow.title}</h2>
        <p className="text-gray-500 text-sm">
          শেষ হালনাগাদ: {blogToShow.last_updated} • পড়ার সময়: {blogToShow.reading_time}
        </p>

        {/* Introduction */}
        <p className="text-gray-700">{blogToShow.introduction}</p>

        {/* Highlights */}
        {blogToShow.highlights && (
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            {blogToShow.highlights.duration && <p><strong>Duration:</strong> {blogToShow.highlights.duration}</p>}
            {blogToShow.highlights.tuition_fees && <p><strong>Tuition Fees:</strong> {blogToShow.highlights.tuition_fees}</p>}
            {blogToShow.highlights.salary && <p><strong>Average Salary:</strong> {blogToShow.highlights.salary}</p>}
            {blogToShow.highlights.universities && (
              <p><strong>Top Universities:</strong> {blogToShow.highlights.universities.join(", ")}</p>
            )}
          </div>
        )}

        {/* Overview */}
        {blogToShow.overview && (
          <div className="mt-4">
            {blogToShow.overview.title && <h3 className="text-xl font-semibold mb-2">{blogToShow.overview.title}</h3>}
            {blogToShow.overview.description && <p className="text-gray-700">{blogToShow.overview.description}</p>}
          </div>
        )}

        {/* Why USA */}
        {blogToShow.why_usa && (
          <div className="mt-4">
            {blogToShow.why_usa.title && <h3 className="text-xl font-semibold mb-2">{blogToShow.why_usa.title}</h3>}
            {blogToShow.why_usa.points && (
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {blogToShow.why_usa.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <TestimonialScroll></TestimonialScroll>
    </div>
  );
};

export default CoursesBlog;
