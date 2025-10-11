// UniversityOverviewTable.tsx
import type { UniversityOverview } from '@/data/types';
import React from 'react';


interface OverviewTableProps {
  data: UniversityOverview[];
  heading: string;
}

const UniversityOverviewTable: React.FC<OverviewTableProps> = ({ data, heading }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-200 pb-2 mb-4">{heading}</h2>
      <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">বিশ্ববিদ্যালয়</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">QS র‍্যাঙ্কিং '26</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-white uppercase tracking-wider">বার্ষিক টিউশন (USD)</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-white uppercase tracking-wider">বার্ষিক টিউশন (INR)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {data.map((uni, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50 hover:bg-blue-100'}>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-blue-700">{uni.university_name}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-800">{uni.qs_world_ranking_2026}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-800">${uni.annual_tuition_fees_usd.toLocaleString('en-US')}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-medium text-green-700">₹{uni.annual_tuition_fees_inr.toLocaleString('en-IN')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UniversityOverviewTable;