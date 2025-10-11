// BlogCards.tsx
import React from "react";
import blogDetails from "../../data/blogDetails";
import EligibilityCard from "./EligibilityCard";

const UKMastersInfo: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
      {blogDetails.map((blog) => (
        <div
          key={blog.id}
          className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
        >
          {/* Header */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-1">{blog.title}</h2>
            <p className="text-gray-500 text-sm">
              {blog.country} &bull; {blog.reading_time} &bull; Updated:{" "}
              {blog.last_updated}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-4">
            {/* Context */}
            {blog.sections.context && (
              <div>
                <h3 className="font-medium">{blog.sections.context.title}</h3>
                <p className="text-gray-700">{blog.sections.context.content}</p>
              </div>
            )}

            {/* Expert Opinion */}
            {blog.sections.expert_opinion && (
              <div>
                <h3 className="font-medium">{blog.sections.expert_opinion.title}</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {blog.sections.expert_opinion.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Advisor Experience */}
            {blog.sections.advisor_experience && (
              <div>
                <h3 className="font-medium">{blog.sections.advisor_experience.title}</h3>
                <p className="text-gray-700">
                  {blog.sections.advisor_experience.content}
                </p>
              </div>
            )}

            {/* Suggestions */}
            {blog.sections.suggestions && (
              <div>
                <h3 className="font-medium">{blog.sections.suggestions.title}</h3>
                <p className="text-gray-700">{blog.sections.suggestions.content}</p>
                {/* Intakes */}
                {blog.sections.suggestions.intakes && (
                  <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                    {blog.sections.suggestions.intakes.map((intake, idx) => (
                      <li key={idx}>
                        <span className="font-semibold">{intake.name}:</span>{" "}
                        {intake.description}
                      </li>
                    ))}
                  </ul>
                )}
                {/* Note */}
                {blog.sections.suggestions.note && (
                  <p className="text-gray-600 mt-2 italic">
                    {blog.sections.suggestions.note}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
       <div className="md:w-1/3 mb-8 md:mb-0 order-1 md:order-2">
        <EligibilityCard /> 
      </div>
    </div>
  );
};

export default UKMastersInfo;
