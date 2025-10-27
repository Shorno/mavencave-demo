import React from "react";
import type { DashboardCards } from "../../types/DashBoardTypes";

interface Props {
  cards: DashboardCards;
}

const CardsSection: React.FC<Props> = ({ cards }) => {
  const cardItems = [
    { title: "মোট ব্যবহারকারী", value: cards.totalUsers },
    { title: "নতুন ব্যবহারকারী", value: cards.newUsers },
    { title: "অ্যাকটিভ ব্যবহারকারী", value: cards.activeUsers },
    { title: "পুরষ্কারপ্রাপ্ত ব্যবহারকারী", value: cards.rewardedUsers },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {cardItems.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-md p-5 rounded-2xl border border-gray-100"
        >
          <p className="text-sm text-gray-600">{card.title}</p>
          <h2 className="text-2xl font-bold text-indigo-600 mt-2">{card.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default CardsSection;
