import React, { useEffect, useState } from "react";
import axios from "axios";
import CardsSection from "@/components/DashBoardOverviewComponents/CardSection";
import UpdatesTable from "@/components/DashBoardOverviewComponents/UpdatesTable";
import type { DashboardData } from "@/types/DashBoardTypes";
import CountriesPieChart from "@/components/DashBoardOverviewComponents/CountryPieChart";

const DashboardOverview: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
       
        const response = await axios.get("/src/data/dashboardData.json");
        setData(response.data);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      }
    };

    loadData();
  }, []);

  if (!data) return <p className="text-center text-gray-500 mt-10">Loading...</p>;

  return (
    <div className="p-6 space-y-6">
      <CardsSection cards={data.cards} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <VisitorsBarChart visitors={data.visitors} /> */}
        <CountriesPieChart countries={data.countries} />
      </div>

      <UpdatesTable updates={data.updates} />
    </div>
  );
};

export default DashboardOverview;
