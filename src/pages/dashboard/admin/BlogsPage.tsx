import React, { useEffect, useState } from 'react';

// --- Type Definition for a Blog Post ---
export type BlogsType = {
  _id: string;
  title: string;
  category: string;
  clicks: number;
  publishedAt: string; // ISO date or a date string
  status: 'প্রকাশিত' | 'ওপ্রকাশিত' | string;
};

// Dummy Data for initial view (Replace with API fetch later)
const DUMMY_BLOGS: BlogsType[] = [
  { _id: '1', title: 'বিয়ের শীর্ষ ১০ বিশ্ববিদ্যালয়: কোথায় পড়লে আপনি?', category: 'কলা ও বিজ্ঞান', clicks: 791, publishedAt: '২০ আগস্ট ২০২৩', status: 'প্রকাশিত' },
  { _id: '2', title: 'বিদেশী ল্যাবগুলোর খরচ কত? নিজেই হিসাব করুন!', category: 'হস্তশিল্প ও সৃজনশীলতা', clicks: 877, publishedAt: '১৯ আগস্ট ২০২৩', status: 'প্রকাশিত' },
  { _id: '3', title: 'সেবা কেন্দ্রগুলো যা আপনার ক্যারিয়ারে নতুন মাত্রা দেবে', category: 'কৌশল ও পদ্ধতি', clicks: 988, publishedAt: '১৮ আগস্ট ২০২৩', status: 'প্রকাশিত' },
  { _id: '4', title: 'ফুলের টপ শীর্ষ বিশ্ববিদ্যালয়সমূহ ও তাদের বিশেষত্ব', category: 'কলা ও বিজ্ঞান', clicks: 190, publishedAt: '১৮ আগস্ট ২০২৩', status: 'ওপ্রকাশিত' },
  { _id: '5', title: 'জীবিকার আগে রোগগুলোর পরিত্রাণ করবেন যেভাবে', category: 'পরীক্ষামূলক', clicks: 720, publishedAt: '১৮ আগস্ট ২০২৩', status: 'প্রকাশিত' },
  { _id: '6', title: 'কোর্স নির্বাচনে নিজের শখকে প্রাধান্য দিবেন? ', category: 'কৌশল ও পদ্ধতি', clicks: 792, publishedAt: '১৮ আগস্ট ২০২৩', status: 'প্রকাশিত' },
];

const PAGE_SIZE = 10;

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogsType[]>([]);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'প্রকাশিত' | 'ওপ্রকাশিত'>('all');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogCategory, setNewBlogCategory] = useState('');

  // 1. DATA FETCHING (API Integration Point)
  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query, statusFilter]);

  async function fetchBlogs() {
    setLoading(true);
    
    // 💡 NOTE: Replace with your actual backend API call
    try {
        // Construct API URL with parameters (page, pageSize, q, status)
        const url = new URL('/api/admin/blogs', window.location.origin);
        url.searchParams.set('page', String(page));
        url.searchParams.set('pageSize', String(PAGE_SIZE));
        if (query) url.searchParams.set('q', query);
        if (statusFilter !== 'all') url.searchParams.set('status', statusFilter);
        
        // --- Dummy Data Logic (Remove this for real API) ---
        // Simulate API delay and filtering logic on DUMMY_BLOGS
        await new Promise(resolve => setTimeout(resolve, 500)); 
        const filteredBlogs = DUMMY_BLOGS.filter(b => 
            (statusFilter === 'all' || b.status === statusFilter) &&
            (b.title.toLowerCase().includes(query.toLowerCase()) || b.category.toLowerCase().includes(query.toLowerCase()))
        );
        const startIndex = (page - 1) * PAGE_SIZE;
        const pagedBlogs = filteredBlogs.slice(startIndex, startIndex + PAGE_SIZE);
        
        setBlogs(pagedBlogs);
        setTotal(filteredBlogs.length); // Total count for pagination
        // -----------------------------------------------------

    } catch (err) {
      console.error('Failed to fetch blogs:', err);
      setBlogs([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }
  
  // 2. SEARCH & FILTER HANDLERS
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setPage(1); // Reset to page 1 on new search
  }

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setStatusFilter(e.target.value as 'all' | 'প্রকাশিত' | 'ওপ্রকাশিত');
    setPage(1); // Reset to page 1 on new filter
  }

  // 3. EXPORT CSV FUNCTIONALITY
  function escapeCsv(text: string | number | undefined) {
    if (text == null) return '';
    const str = String(text);
    const shouldQuote = /[",\n,]/.test(str);
    return shouldQuote ? `"${str.replace(/"/g, '""')}"` : str;
  }

  function exportCSV() {
    if (!blogs.length) return alert('Export করার জন্য কোনো ব্লগ নেই।');
    
    const headers = ['Title', 'Category', 'Clicks', 'Published Date', 'Status'];
    const rows = blogs.map(b => [
      escapeCsv(b.title),
      escapeCsv(b.category),
      escapeCsv(b.clicks),
      escapeCsv(b.publishedAt),
      escapeCsv(b.status),
    ]);

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blogs-page-${page}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  
  // 4. ADD NEW BLOG FUNCTIONALITY (API Integration Point)
 async function handleAddBlog(e: React.FormEvent) {
  e.preventDefault();
  if (!newBlogTitle || !newBlogCategory) return alert('অনুগ্রহ করে ব্লগ শিরোনাম এবং ক্যাটাগরি দিন।');
  
  try {
    // 💡 NOTE: Replace with your actual POST API call to create a new blog
    const payload = { 
        title: newBlogTitle, 
        category: newBlogCategory,
        // Add other necessary fields (e.g., content)
    };
    
    // ✅ API কল:
    const res = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error('Failed to add blog');
    // const created = await res.json(); 
    
    // --- ✅ সফলতা এবং UI আপডেট লজিক ---
    // (সিমুলেশন কোডটি কমেন্ট আউট করা হলো, কারণ আপনি উপরে রিয়েল API কলটি চালু করেছেন)
    // await new Promise(resolve => setTimeout(resolve, 300));

    // Close modal and refresh list (refresh page 1 to see the new blog)
    setShowAddModal(false);
    setNewBlogTitle('');
    setNewBlogCategory('');
    setPage(1);
    fetchBlogs(); // Re-fetch data
    
    alert('নতুন ব্লগ সফলভাবে যোগ করা হয়েছে!');

  } catch (err) {
   
    console.error(err);
    alert('ব্লগ যোগ করতে ব্যর্থ হয়েছে।');

    
  }
}

  // 5. DELETE BLOG FUNCTIONALITY (API Integration Point)
  async function handleDelete(blogId: string) {
    if (!confirm('আপনি কি নিশ্চিত যে এই ব্লগটি মুছে ফেলতে চান?')) return;
    try {
      // 💡 NOTE: Replace with your actual DELETE API call
      // const res = await fetch(`/api/admin/blogs/${blogId}`, { method: 'DELETE' });
      // if (!res.ok) throw new Error('Delete failed');
      
      // Simulate successful deletion
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Optimistic refresh
      setBlogs(prev => prev.filter(b => b._id !== blogId));
      setTotal(prev => Math.max(0, prev - 1));
      
      alert('ব্লগ সফলভাবে মুছে ফেলা হয়েছে।');

    } catch (err) {
      console.error(err);
      alert('ব্লগ মুছে ফেলা সম্ভব হয়নি।');
    }
  }

  // 6. PAGINATION AND UI CALCULATIONS
  const showingFrom = total === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const showingTo = Math.min(page * PAGE_SIZE, total);
  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div>
      <div>
        {/* --- Top Cards Section (Mock Data for UI) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-gray-500 mb-1">মোট ব্লগসমূহ</h3>
                <p className="text-3xl font-bold text-gray-900">৭৯৯</p>
                <div className="flex items-center text-sm text-green-600 mt-1">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L10 11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>+০.৫% বৃদ্ধি</span>
                </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-gray-500 mb-1">ড্রাফ্ট ব্লগ</h3>
                <p className="text-3xl font-bold text-gray-900">৪৫</p>
                <div className="flex items-center text-sm text-red-600 mt-1">
                    <svg className="w-4 h-4 mr-1 transform rotate-180" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L10 11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>-১.৭% হ্রাস</span>
                </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-gray-500 mb-1">অপেক্ষমান ব্লগ</h3>
                <p className="text-3xl font-bold text-gray-900">২২</p>
                <div className="flex items-center text-sm text-green-600 mt-1">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L10 11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>+০.৮% বৃদ্ধি</span>
                </div>
            </div>
        </div>

        {/* --- Main Table Container --- */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-blue-700">ব্লগসমূহ</h2>
            <div className="flex gap-3">
              <button
                onClick={exportCSV}
                className="flex items-center px-4 py-2 bg-purple-50 text-blue-700 border border-purple-200 rounded-lg shadow-sm hover:bg-purple-100 transition duration-150"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.707-9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 10.586V3a1 1 0 10-2 0v7.586L6.707 7.707z" clipRule="evenodd" />
                </svg>
                এক্সপোর্ট CSV
              </button>
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition duration-150"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                নতুন ব্লগ যোগ করুন
              </button>
            </div>
          </div>

          {/* --- Search and Filter Bar --- */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="relative flex-1">
              <input
                value={query}
                onChange={handleSearchChange}
                placeholder=" সার্চ করুন"
                className="w-full md:w-80 border border-gray-300 pl-10 pr-4 py-2 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="relative">
                <select value={statusFilter} onChange={handleStatusChange} className="border border-gray-300 px-4 py-2 rounded-lg appearance-none bg-white pr-10">
                    <option value="all">অবস্থা</option>
                    <option value="প্রকাশিত">প্রকাশিত</option>
                    <option value="ওপ্রকাশিত">ওপ্রকাশিত</option>
                </select>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
          </div>

          {/* --- Table --- */}
          <div className="overflow-x-auto min-h-[300px]">
            <table className="min-w-full text-left text-sm">
              <thead className="text-xs uppercase text-gray-700 bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 min-w-[250px]">ব্লগ শিরোনাম</th>
                  <th className="px-4 py-3 min-w-[120px]">ক্যাটাগরি</th>
                  <th className="px-4 py-3 min-w-[80px]">ক্লিক</th>
                  <th className="px-4 py-3 min-w-[150px]">প্রকাশের তারিখ</th>
                  <th className="px-4 py-3 min-w-[100px]">অবস্থা</th>
                  <th className="px-4 py-3 min-w-[80px]">কার্যক্রম</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center text-gray-500">ডেটা লোড হচ্ছে...</td>
                  </tr>
                ) : blogs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center text-gray-500">কোনো ব্লগ পাওয়া যায়নি</td>
                  </tr>
                ) : (
                  blogs.map(blog => (
                    <tr key={blog._id} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 flex items-center">
                        {/* Placeholder for Blog Image/Icon */}
                        <div className="w-10 h-10 bg-gray-200 rounded mr-3 flex-shrink-0" 
                            style={{ backgroundImage: `url('/api/blog/thumbnail/${blog._id}')`, backgroundSize: 'cover' }}>
                        </div> 
                        {blog.title}
                      </td>
                      <td className="px-4 py-3 text-gray-700">{blog.category}</td>
                      <td className="px-4 py-3">{blog.clicks.toLocaleString()}</td>
                      <td className="px-4 py-3">{blog.publishedAt}</td>
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          blog.status === 'প্রকাশিত' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {blog.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            title="মুছে ফেলুন"
                            onClick={() => handleDelete(blog._id)}
                            className="text-gray-500 hover:text-red-600 transition"
                          >
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 10-2 0v6a1 1 0 102 0V8z" clipRule="evenodd" />
                            </svg>
                          </button>
                          <button
                            title="সম্পাদনা করুন"
                            className="text-gray-500 hover:text-blue-600 transition"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-7.586 7.586a1 1 0 000 1.414l3 3a1 1 0 001.414 0l7-7-4.243-4.243-7 7z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* --- Pagination Footer --- */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600">
                {total === 0 ? '০টি আইটেম' : `সর্বমোট ${total}টি রেকর্ডের মধ্যে ${showingFrom}-${showingTo}টি দেখানো হচ্ছে।`}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1 || loading}
                className="px-3 py-1 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                পূর্ববর্তী
              </button>
              <div className="mx-2 text-sm text-gray-700 font-medium">পেজ {page} / {totalPages}</div>
              <button
                onClick={() => setPage(p => p + 1)}
                disabled={page >= totalPages || loading}
                className="px-3 py-1 border  rounded-lg bg-blue-700 text-white hover:bg-blue-900  transition"
              >
                পরবর্তী
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Add New Blog Modal --- */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="absolute inset-0 bg-black opacity-40" onClick={() => setShowAddModal(false)} />
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 z-10 transform scale-100 transition-all duration-300">
            <h2 className="text-xl font-medium mb-5 text-gray-800">নতুন ব্লগ যোগ করুন</h2>
            <form onSubmit={handleAddBlog} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ব্লগ শিরোনাম</label>
                <input 
                  value={newBlogTitle} 
                  onChange={e => setNewBlogTitle(e.target.value)} 
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-blue-700 focus:border-blue-800" 
                  placeholder="যেমন: সেরা ১০টি রান্নার রেসিপি"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ক্যাটাগরি</label>
                <input 
                  value={newBlogCategory} 
                  onChange={e => setNewBlogCategory(e.target.value)} 
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-purple-500 focus:border-purple-500" 
                  placeholder="যেমন: রান্না, ভ্রমণ, শিক্ষা"
                  required
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={() => setShowAddModal(false)} 
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  বাতিল
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-bluee-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                  যোগ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

