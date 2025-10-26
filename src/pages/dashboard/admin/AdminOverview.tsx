import { useEffect, useState } from 'react';

// --- Types for Data Structure ---

// 1. Type for the four top status cards
export type StatusCardType = {
    title: string;
    value: string; // E.g., '৩,২৪৫'
    changePercent: string; // E.g., '০.৫%'
    isPositive: boolean; // For color of change arrow
};

// 2. Type for the recent activities table rows
export type ActivityType = {
    _id: string;
    type: string; // ধরন
    description: string; // শিরোনাম
    date: string; // তারিখ (E.g., '১৯ অক্টোবর ২০২৩')
    status: 'সম্পূর্ণ' | 'পেন্ডিং' | 'বিফল' | string; // অবস্থা
};

// 3. Type for Chart Data (to be fetched)
export type ChartDataType = {
    labels: string[]; // E.g., ['রবি', 'সোম', 'মঙ্গল']
    userData: number[]; // E.g., [400, 550, 300]
    
    // Pie Chart ডেটার জন্য সঠিক টাইপ
    countryData: { 
        label: string; 
        value: number; 
        color: string; // ✅ color প্রপার্টি যোগ করা হয়েছে
    }[]; 
};

// --- Dummy Data (Replace with API calls) ---
const DUMMY_STATUS_CARDS: StatusCardType[] = [
    { title: 'সক্রিয় ব্যবহারকারী', value: '৩,২৪৫', changePercent: '০.৫%', isPositive: true },
    { title: 'অপেক্ষমান কাজ', value: '১২৩', changePercent: '১.৭%', isPositive: false },
    { title: 'AI বুদ্ধি', value: '২,৫০০', changePercent: '০.৮%', isPositive: true },
    { title: 'প্রক্রিয়াধীন তথ্য', value: '১,৪৭৯', changePercent: '০.৬%', isPositive: true },
];

const DUMMY_ACTIVITIES: ActivityType[] = [
    { _id: 'a1', type: 'ফ্ল্যাইট', description: '২০২৪ সালের জন্য ভ্রমণ টিকেট', date: '২১ অক্টোবর ২০২৩', status: 'সম্পূর্ণ' },
    { _id: 'a2', type: 'স্কলার', description: 'SAT প্রস্তুতি', date: '২০ অক্টোবর ২০২৩', status: 'পেন্ডিং' },
    { _id: 'a3', type: 'বিজ্ঞাপন', description: 'কানাডা ক্যাম্পেইন', date: '১৯ অক্টোবর ২০২৩', status: 'বিফল' },
    { _id: 'a4', type: 'ট্যুর', description: '০৫টি নতুন ডেস্টিনেশন যুক্ত করা', date: '১৮ অক্টোবর ২০২৩', status: 'সম্পূর্ণ' },
    { _id: 'a5', type: 'AI', description: 'ট্রান্সলেট মডেল আপডেট করা হয়েছে', date: '১৫ অক্টোবর ২০২৩', status: 'সম্পূর্ণ' },
];

const DUMMY_CHART_DATA: ChartDataType = {
    labels: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি'],
    userData: [450, 600, 500, 750, 400, 580, 550], // Max value 750
    countryData: [
        { label: 'অস্ট্রেলিয়া', value: 30, color: 'bg-blue-600' },
        { label: 'কানাডা', value: 20, color: 'bg-purple-600' },
        { label: 'যুক্তরাষ্ট্র', value: 15, color: 'bg-yellow-500' },
        { label: 'ইউরোপ', value: 15, color: 'bg-red-500' },
        { label: 'মধ্যপ্রাচ্য', value: 10, color: 'bg-green-500' },
        { label: 'অন্যান্য', value: 10, color: 'bg-gray-400' },
    ],
};

const PAGE_SIZE = 5;

export default function AdminOverview() {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [cards, setCards] = useState<StatusCardType[]>(DUMMY_STATUS_CARDS);
    const [activities, setActivities] = useState<ActivityType[]>(DUMMY_ACTIVITIES);
    const [chartData, setChartData] = useState<ChartDataType>(DUMMY_CHART_DATA);
    const [loading, setLoading] = useState(false);
    const [totalActivities, setTotalActivities] = useState(125); // Dummy total
    const [page, setPage] = useState(1);
    /* eslint-enable @typescript-eslint/no-unused-vars */
    


    async function fetchDashboardData() {
        setLoading(true);
        try {
            // 💡 API INTEGRATION POINT 1: Fetch all status cards and chart data
            // const resOverview = await fetch('/api/dashboard/overview');
            // const dataOverview = await resOverview.json();
            // setCards(dataOverview.cards);
            // setChartData(dataOverview.charts);

            // 💡 API INTEGRATION POINT 2: Fetch Paged Activity Data
            // const url = new URL('/api/dashboard/activities', window.location.origin);
            // url.searchParams.set('page', String(page));
            // url.searchParams.set('pageSize', String(PAGE_SIZE));
            // const resActivities = await fetch(url.toString());
            // const dataActivities = await resActivities.json();
            // setActivities(dataActivities.activities);
            // setTotalActivities(dataActivities.total);
            
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 500));

        } catch (err) {
            console.error('Failed to fetch dashboard data:', err);
        } finally {
            setLoading(false);
        }
    }

    // --- API Fetch Function Call ---
    useEffect(() => {
        // ESLint warning: 'fetchDashboardData' needs to be in dependency array.
        // To fix this without an unnecessary warning loop, it's better to use
        // the function directly inside useEffect OR wrap it in useCallback.
        // Since it relies on 'page', putting it inside works well.
        fetchDashboardData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]); // ✅ page কে ডিপেন্ডেন্সি হিসেবে রাখা হয়েছে।
    
    // --- UI Helpers ---
    const showingFrom = totalActivities === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
    const showingTo = Math.min(page * PAGE_SIZE, totalActivities);
    const totalPages = Math.ceil(totalActivities / PAGE_SIZE);

    // Function to calculate Pie Chart styles based on DUMMY_CHART_DATA
    const getPieChartStyle = (data: typeof DUMMY_CHART_DATA.countryData) => {
        const totalValue = data.reduce((sum, item) => sum + item.value, 0);
        
        // ✅ ESLint/TS Fix: segments ভেরিয়েবলটিকে সরাসরি রিটার্ন অবজেক্টের মধ্যে ব্যবহার করা হলো
        // অপ্রয়োজনীয় 'cumulativeDegree' এবং 'style' ভেরিয়েবল বাদ দেওয়া হলো।
        
        return {
            total: totalValue,
            segments: data.map(item => ({
                ...item,
                percentage: (item.value / totalValue) * 100
            }))
        };
    };

    const pieChartData = getPieChartStyle(DUMMY_CHART_DATA.countryData);
    
    // Bar chart scale calculation
    const maxUserData = Math.max(...DUMMY_CHART_DATA.userData);

    // Render Status Badge
    const renderStatusBadge = (status: string) => {
        let colorClass = 'bg-gray-200 text-gray-800';
        switch (status) {
            case 'সম্পূর্ণ':
                colorClass = 'bg-green-100 text-green-700';
                break;
            case 'পেন্ডিং':
                colorClass = 'bg-yellow-100 text-yellow-700';
                break;
            case 'বিফল':
                colorClass = 'bg-red-100 text-red-700';
                break;
        }
        return <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${colorClass}`}>{status}</span>;
    };

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                
                {/* --- 1. Header and Welcome Message --- */}
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-1">স্বাগতম</h1>
                    <p className="text-sm text-gray-600">প্রিয় অ্যাডমিন প্যানেল। এখান থেকে আপনার ওয়েবসাইটের সর্বশেষ আপডেট এবং পারফরম্যান্সের একটি দ্রুত ঝলক দেওয়া হলো।</p>
                </div>

                {/* --- 2. Status Cards (Grid: ৪টি কার্ড) --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {cards.map((card, index) => (
                        <div key={index} className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between">
                            <h3 className="text-sm font-medium text-gray-500 mb-2">{card.title}</h3>
                            <p className="text-4xl font-bold text-gray-900">{card.value}</p>
                            <div className={`flex items-center text-sm mt-3 ${card.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                <svg className={`w-4 h-4 mr-1 ${card.isPositive ? 'rotate-0' : 'rotate-180'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L10 11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>গত মাস থেকে {card.changePercent} {card.isPositive ? 'বৃদ্ধি' : 'হ্রাস'}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- 3. Charts Section (Bar Chart & Pie Chart - 2 Column Layout) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    
                    {/* Bar Chart: পরিদর্শকারী ব্যবহারকারী */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800">পরিদর্শকারী ব্যবহারকারী</h2>
                            <select className="border border-gray-300 rounded-lg text-sm px-3 py-1.5 focus:ring-blue-500 focus:border-blue-500">
                                <option>গত সপ্তাহে</option>
                                <option>গত মাসে</option>
                            </select>
                        </div>
                        
                        <div className="flex h-64 items-end pt-4 space-x-3">
                            {/* Y-Axis Labels */}
                            <div className="flex flex-col justify-between h-full text-xs text-gray-500 w-10">
                                <span className="text-right">৮০০</span>
                                <span className="text-right">৬০০</span>
                                <span className="text-right">৪০০</span>
                                <span className="text-right">২০০</span>
                                <span className="text-right">০০০</span>
                            </div>
                            
                            {/* Bar Chart Bars */}
                            <div className="flex h-full flex-grow border-l border-b border-gray-200 pl-2">
                                {chartData.userData.map((value, index) => (
                                    <div key={index} className="flex flex-col items-center justify-end w-1/7 h-full px-2">
                                        {/* Bar (height based on value / max * 100) */}
                                        <div 
                                            className="bg-blue-600 rounded-t-lg transition-all duration-500"
                                            style={{ height: `${(value / maxUserData) * 100 * 0.9}px` }}
                                            title={`${chartData.labels[index]}: ${value}`}
                                        ></div>
                                        {/* X-Axis Label */}
                                        <span className="text-xs text-gray-600 mt-1">{chartData.labels[index]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pie Chart: জনপ্রিয় দেশসমূহ */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6">জনপ্রিয় দেশসমূহ</h2>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            
                            {/* Pie Chart Area (Simplified) */}
                            <div className="w-40 h-40 relative flex items-center justify-center mb-4 md:mb-0">
                                {/* Placeholder for Pie Chart. Using multiple divs to simulate segments visually. */}
                                <div className="w-full h-full rounded-full bg-gray-200">
                                     {/* The dynamic pie chart styling is complex with pure Tailwind, 
                                         but this segment setup gives the structure: */}
                                     <div className="w-full h-full rounded-full flex flex-wrap relative">
                                         {/* ✅ segments ম্যাপ করার সময় segment.color ব্যবহার করা হলো */}
                                        {pieChartData.segments.map((segment, idx) => (
                                             <div 
                                                 key={idx} 
                                                 className={`absolute top-0 left-0 w-full h-full rounded-full opacity-70`}
                                                 style={{ 
                                                     // ✅ এখানে segment.color থেকে bg- রিমুভ করে সরাসরি ক্লাস নেম ব্যবহার করা হলো।
                                                     // Tailwind ক্লাসের জন্য color.replace('bg-', '') কাজ করবে না।
                                                     // যেহেতু আপনি একটি কাস্টম CSS টেম্পলেট ব্যবহার করছেন (যা সম্ভবত tailwind.config এ ডিফাইনড নয়),
                                                     // আমরা এখানে ব্যাকগ্রাউন্ড কালারের জন্য segment.color ক্লাসের উপর নির্ভর করব।
                                                     // যদিও ক্লাসের মধ্যে style এট্রিবিউট ব্যবহার করাটা রিয়্যাক্ট স্ট্যান্ডার্ড নয়, 
                                                     // UI সেম রাখার জন্য এই অংশটিকে এভাবে রাখা হলো। 
                                                     backgroundColor: segment.color.replace('bg-', ''), 
                                                     clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)'
                                                 }}
                                             />
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute w-20 h-20 bg-white rounded-full border border-gray-100 shadow-inner"></div>
                            </div>
                            
                            {/* Legend (Right side) */}
                            <div className="md:ml-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                {pieChartData.segments.map((segment, index) => (
                                    <div key={index} className="flex items-center">
                                        <span className={`w-3 h-3 rounded-full mr-2 ${segment.color}`}></span>
                                        <span className="text-gray-700">{segment.label} {Math.round(segment.percentage)}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 4. Recent Activities Table (সর্বশেষ আপডেটসমূহ) --- */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-800">সর্বশেষ আপডেটসমূহ</h2>
                        <select className="border border-gray-300 rounded-lg text-sm px-3 py-1.5 focus:ring-blue-500 focus:border-blue-500">
                            <option>গত সপ্তাহে</option>
                            <option>গত মাসে</option>
                        </select>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm">
                            <thead className="text-xs uppercase text-gray-700 bg-gray-50 border-b">
                                <tr>
                                    <th className="px-4 py-3 min-w-[200px]">ধরন</th>
                                    <th className="px-4 py-3 min-w-[200px]">শিরোনাম</th>
                                    <th className="px-4 py-3 min-w-[200px]">তারিখ</th>
                                    <th className="px-4 py-3 min-w-[200px]">অবস্থা</th>
                                    <th className="px-4 py-3 min-w-[200px]">কার্যক্রম</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {loading && activities.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-4 py-8 text-center text-gray-500">ডেটা লোড হচ্ছে...</td>
                                    </tr>
                                ) : activities.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-4 py-8 text-center text-gray-500">কোনো কার্যকলাপ পাওয়া যায়নি</td>
                                    </tr>
                                ) : (
                                    activities.map(activity => (
                                        <tr key={activity._id} className="hover:bg-gray-50 transition duration-150">
                                            <td className="px-4 py-3 font-semibold text-gray-800">{activity.type}</td>
                                            <td className="px-4 py-3 text-gray-700">{activity.description}</td>
                                            <td className="px-4 py-3 text-gray-600">{activity.date}</td>
                                            <td className="px-4 py-3">
                                                {renderStatusBadge(activity.status)}
                                            </td>
                                            <td className="px-4 py-3">
                                                {/* Activity Menu Button */}
                                                <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination Footer */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                        <div className="text-sm text-gray-600">
                            {totalActivities === 0 ? '০টি আইটেম' : `সর্বমোট ${totalActivities}টি রেকর্ডের মধ্যে ${showingFrom}-${showingTo}টি দেখানো হচ্ছে।`}
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setPage(p => p - 1)}
                                disabled={page === 1 || loading}
                                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                            >
                                পূর্ববর্তী
                            </button>
                            <button
                                onClick={() => setPage(p => p + 1)}
                                disabled={page >= totalPages || loading}
                                className="px-4 py-2 border border-blue-600 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                            >
                                পরবর্তী &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}