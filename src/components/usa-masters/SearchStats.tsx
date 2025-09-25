interface SearchStatsProps {
    totalResults: number;
}

const SearchStats: React.FC<SearchStatsProps> = ({ totalResults }) => {
    return (
        <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
            <div>
                <span className="font-medium">{totalResults}টি</span> ফলাফল পাওয়া গেছে
            </div>
            <div className="flex items-center gap-4">
                <span>সব নূতন ফেলুন</span>
                <span>৭৮টি ফলাফল</span>
            </div>
        </div>
    );
};

export default SearchStats;
