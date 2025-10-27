import * as React from "react";

import type { CountryData } from "../../types/DashBoardTypes";
import { Legend, Pie, PieChart } from "recharts";
import { Tooltip } from "../ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";

interface Props {
  countries: CountryData[];
}

const COLORS = ["#7C3AED", "#22C55E", "#FACC15", "#3B82F6", "#EF4444"];

const CountriesPieChart: React.FC<Props> = ({ countries }) => {
  return (
    <div className="bg-white shadow-md p-5 rounded-2xl border border-gray-100">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        জনপ্রিয় দেশসমূহ
      </h3>

      <div className="flex justify-center items-center h-[250px]">
        <PieChart>
          <Tooltip content={<TooltipContent />} />
          <Legend className="text-sm" />
          <Pie
            data={countries}
            dataKey="value"
            nameKey="name"
            innerRadius={40}
            outerRadius={80}
            fill="#7C3AED"
            stroke="white"
          >
            {countries.map((_, i) => (
              <cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default CountriesPieChart;
