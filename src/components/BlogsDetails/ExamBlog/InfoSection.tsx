// InfoSection.tsx
import type { AlternativeTest } from '@/data/types';
import React from 'react';


interface InfoSectionProps {
  heading: string;
  items: string[] | AlternativeTest[];
  isNumbered?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({ heading, items, isNumbered = false }) => {
  const ListTag = isNumbered ? 'ol' : 'ul';
  const ListStyle = isNumbered ? 'list-decimal' : 'list-disc';
  const ItemStyle = isNumbered ? 'font-medium' : 'font-normal';

  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-md bg-white h-full">
      <h3 className="text-xl font-semibold text-purple-700 mb-3 border-b pb-1">{heading}</h3>
      <ListTag className={`${ListStyle} list-inside space-y-2 text-gray-700 ml-4`}>
        {items.map((item, index) => (
          <li key={index}>
            {typeof item === 'string' ? (
              <span className={ItemStyle}>{item}</span>
            ) : (
              // Handles AlternativeTest interface
              <>
                <span className="font-bold">{item.test}</span>: {item.purpose}
              </>
            )}
          </li>
        ))}
      </ListTag>
    </div>
  );
};

export default InfoSection;