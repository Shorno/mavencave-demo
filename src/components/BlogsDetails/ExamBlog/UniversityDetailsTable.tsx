// UniversityDetailsTable.tsx
import type { DetailedUniversity } from '@/data/types';
import React from 'react';


interface DetailsTableProps {
  data: DetailedUniversity[];
  heading: string;
}

const UniversityDetailsTable: React.FC<DetailsTableProps> = ({ data, heading }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-green-200 pb-2 mb-4">{heading}</h2>
      <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-green-600">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">বিশ্ববিদ্যালয়</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">নীতি ও ফোকাস</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">GRE মওকুফ কোর্স</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-white uppercase tracking-wider">ইংরেজি যোগ্যতা</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-white uppercase tracking-wider">টিউশন/গ্রহণযোগ্যতা</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {data.map((uni, index) => (
              <tr key={uni.id} className={index % 2 === 0 ? 'bg-white' : 'bg-green-50 hover:bg-green-100'}>
                <td className="px-4 py-3 text-sm font-semibold text-green-800">
                  {uni.name} ({uni.established})
                  <p className="text-xs font-normal text-gray-500 mt-1">অবস্থান: {uni.key_details.location}</p>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 max-w-xs">
                  <span className="font-bold block">নীতি:</span> {uni.gre_policy}
                  <span className="font-bold block mt-1">ফোকাস:</span> {uni.admission_focus}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 max-w-sm">
                  <ul className="list-disc list-inside space-y-0.5">
                    {uni.key_details.gre_waiver_courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-3 text-sm text-center text-gray-700">
                  {uni.key_details.ielts && `IELTS: ${uni.key_details.ielts}`}
                  {uni.key_details.toefl && ` / TOEFL: ${uni.key_details.toefl}`}
                  {uni.key_details.ielts_speaking && ` / IELTS (Speaking): ${uni.key_details.ielts_speaking}`}
                  {uni.key_details.toefl_speaking && ` / TOEFL (Speaking): ${uni.key_details.toefl_speaking}`}
                </td>
                <td className="px-4 py-3 text-sm text-right text-gray-700">
                  <span className="font-bold block">${uni.key_details.average_tuition_fees_usd.toLocaleString('en-US')}</span>
                  <span className="block text-xs text-red-600">গ্রহণযোগ্যতা: {uni.key_details.acceptance_rate}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UniversityDetailsTable;