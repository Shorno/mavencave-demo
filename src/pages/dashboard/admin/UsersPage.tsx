import React, { useEffect, useState, } from 'react';

// --- Type Definition for a User ---
// Note: Changed type name to UserType for clarity, although it follows your previous BlogsType structure for consistency.
export type UserType = {
  _id: string;
  name: string;
  email: string;
  country: string;
  avatarUrl: string; // Placeholder for image
  signUpDate: string; // ISO date or a date string
  status: 'সক্রিয়' | 'নিষ্ক্রিয়' | string;
};

// Dummy Data (Replace with API fetch later)
const DUMMY_USERS: UserType[] = [
    { _id: '1', name: 'সামিহা ইসলাম', email: 'samihaislam@gmail.com', country: 'অস্ট্রেলিয়া', avatarUrl: 'https://i.pravatar.cc/150?img=1', signUpDate: '১৭ অক্টোবর ২০২৩', status: 'সক্রিয়' },
    { _id: '2', name: 'রায়া খানম', email: 'rayakhanom@gmail.com', country: 'আয়ারল্যান্ড', avatarUrl: 'https://i.pravatar.cc/150?img=2', signUpDate: '১৭ অক্টোবর ২০২৩', status: 'সক্রিয়' },
    { _id: '3', name: 'ফাহিম আহমেদ', email: 'fahlmahmed@gmail.com', country: 'যুক্তরাষ্ট্র', avatarUrl: 'https://i.pravatar.cc/150?img=3', signUpDate: '১৬ অক্টোবর ২০২৩', status: 'সক্রিয়' },
    { _id: '4', name: 'সাফিয়া আক্তার', email: 'safiamaakter@gmail.com', country: 'অস্ট্রেলিয়া', avatarUrl: 'https://i.pravatar.cc/150?img=4', signUpDate: '১৬ অক্টোবর ২০২৩', status: 'নিষ্ক্রিয়' },
    { _id: '5', name: 'তানভীর হোসাইন', email: 'tanvirhossain@gmail.com', country: 'কানাডা', avatarUrl: 'https://i.pravatar.cc/150?img=5', signUpDate: '১৬ অক্টোবর ২০২৩', status: 'সক্রিয়' },
    { _id: '6', name: 'রাফি রহমান', email: 'rafirahman@gmail.com', country: 'জার্মানি', avatarUrl: 'https://i.pravatar.cc/150?img=6', signUpDate: '১৫ অক্টোবর ২০২৩', status: 'সক্রিয়' },
    { _id: '7', name: 'উম্মে হাবিবা', email: 'ummehabiba@gmail.com', country: 'যুক্তরাজ্য', avatarUrl: 'https://i.pravatar.cc/150?img=7', signUpDate: '১৫ অক্টোবর ২০২৩', status: 'সক্রিয়' },
    { _id: '8', name: 'সুমাইয়া রহমান', email: 'sumaiya88@gmail.com', country: 'কানাডা', avatarUrl: 'https://i.pravatar.cc/150?img=8', signUpDate: '১৫ অক্টোবর ২০২৩', status: 'সক্রিয়' },
    { _id: '9', name: 'তাওসীফ মোগনী', email: 'tawsif1708@gmail.com', country: 'অস্ট্রেলিয়া', avatarUrl: 'https://i.pravatar.cc/150?img=9', signUpDate: '১৪ অক্টোবর ২০২৩', status: 'নিষ্ক্রিয়' },
    { _id: '10', name: 'দিলরুবা নূর', email: 'sinthianoor@gmail.com', country: 'যুক্তরাজ্য', avatarUrl: 'https://i.pravatar.cc/150?img=10', signUpDate: '১৪ অক্টোবর ২০২৩', status: 'সক্রিয়' },
];

const PAGE_SIZE = 10;
const TOTAL_DUMMY_COUNT = 250; // Total count for pagination display

export default function UsersPage() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'সক্রিয়' | 'নিষ্ক্রিয়'>('all');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(TOTAL_DUMMY_COUNT); // Using a fixed large number for better pagination feel
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [showMenuId, setShowMenuId] = useState<string | null>(null); // For the action menu

  // --- 1. DATA FETCHING (API Integration Point) ---
  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query, statusFilter]);

  async function fetchUsers() {
    setLoading(true);
    
    // 💡 NOTE: Replace with your actual backend API call
    try {
        // Example API URL construction:
        const url = new URL('/api/admin/users', window.location.origin);
        url.searchParams.set('page', String(page));
        url.searchParams.set('pageSize', String(PAGE_SIZE));
        if (query) url.searchParams.set('q', query);
        if (statusFilter !== 'all') url.searchParams.set('status', statusFilter);
        
        // --- Dummy Data Logic (Simulate fetch and filtering) ---
        await new Promise(resolve => setTimeout(resolve, 500)); 
        
        const filteredUsers = DUMMY_USERS.filter(u => 
            (statusFilter === 'all' || u.status === statusFilter) &&
            (u.name.toLowerCase().includes(query.toLowerCase()) || u.email.toLowerCase().includes(query.toLowerCase()))
        );
        
        // Use filtered results if searching/filtering, otherwise use dummy for UI consistency
        const usersToDisplay = (query || statusFilter !== 'all') ? filteredUsers : DUMMY_USERS;
        
        setUsers(usersToDisplay.slice(0, PAGE_SIZE)); // Display first PAGE_SIZE elements of the filtered list
        setTotal((query || statusFilter !== 'all') ? filteredUsers.length : TOTAL_DUMMY_COUNT);
        // -----------------------------------------------------

    } catch (err) {
      console.error('Failed to fetch users:', err);
      setUsers([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }
  
  // --- 2. SEARCH & FILTER HANDLERS ---
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setPage(1); 
  }

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setStatusFilter(e.target.value as 'all' | 'সক্রিয়' | 'নিষ্ক্রিয়');
    setPage(1); 
  }

  // --- 3. EXPORT CSV FUNCTIONALITY ---
  function escapeCsv(text: string | number | undefined) {
    if (text == null) return '';
    const str = String(text);
    const shouldQuote = /[",\n,]/.test(str);
    return shouldQuote ? `"${str.replace(/"/g, '""')}"` : str;
  }

  function exportCSV() {
    if (!users.length) return alert('Export করার জন্য কোনো ব্যবহারকারী নেই।');
    
    const headers = ['Name', 'Email', 'Country', 'SignUp Date', 'Status'];
    const rows = users.map(u => [
      escapeCsv(u.name),
      escapeCsv(u.email),
      escapeCsv(u.country),
      escapeCsv(u.signUpDate),
      escapeCsv(u.status),
    ]);

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `users-page-${page}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    alert('CSV সফলভাবে ডাউনলোড হয়েছে!');
  }
  
  // --- 4. ADD NEW USER FUNCTIONALITY (API Integration Point) ---
 async function handleAddUser(e: React.FormEvent) {
    e.preventDefault();
    if (!newUserName || !newUserEmail) return alert('অনুগ্রহ করে নাম এবং ইমেইল দিন।');
    
    try {
      // 💡 NOTE: Replace with your actual POST API call to create a new user
      const payload = { 
          name: newUserName, 
          email: newUserEmail,
          // Add other necessary fields (e.g., password, role)
      };
      
      // ✅ API কলটি চালু করা হলো এবং payload ব্যবহার করা হলো
      const res = await fetch('/api/admin/users', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(payload), // <-- payload এখন ব্যবহৃত হচ্ছে
      });
      
      if (!res.ok) {
          // যদি রেসপন্স ok না হয়, তবে এরর থ্রো করা হবে
          const errorData = await res.json();
          throw new Error(errorData.message || 'ব্যবহারকারী যোগ করতে ব্যর্থ হয়েছে');
      }
      
      // const createdUser = await res.json(); 
      
      // Close modal and refresh list
      setShowAddModal(false);
      setNewUserName('');
      setNewUserEmail('');
      setPage(1);
      fetchUsers(); // Re-fetch data to show the new user
      
      alert('নতুন ব্যবহারকারী সফলভাবে যোগ করা হয়েছে!');

    } catch (err) {
      console.error('Add User Failed:', err);
      // এখানে API থেকে আসা এরর মেসেজটি দেখানো যেতে পারে
      alert('ব্যবহারকারী যোগ করতে ব্যর্থ হয়েছে। ' + (err instanceof Error ? err.message : 'অনুগ্রহ করে সার্ভার লগ চেক করুন।'));
    }
}

  // --- 5. Action Handlers (Delete, Edit, etc.) ---
  async function handleDelete(userId: string) {
    if (!confirm('আপনি কি নিশ্চিত যে এই ব্যবহারকারীকে মুছে ফেলতে চান?')) return;
    setShowMenuId(null);
    try {
      // 💡 NOTE: Replace with your actual DELETE API call
      // const res = await fetch(`/api/admin/users/${userId}`, { method: 'DELETE' });
      // if (!res.ok) throw new Error('Delete failed');
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Optimistic refresh
      setUsers(prev => prev.filter(u => u._id !== userId));
      setTotal(prev => Math.max(0, prev - 1));
      
      alert('ব্যবহারকারী সফলভাবে মুছে ফেলা হয়েছে।');

    } catch (err) {
      console.error(err);
      alert('ব্যবহারকারী মুছে ফেলা সম্ভব হয়নি।');
    }
  }
  
  function handleEdit(userId: string) {
      alert(`Editing user: ${userId}`);
      setShowMenuId(null);
  }

  // --- 6. PAGINATION AND UI CALCULATIONS ---
  const showingFrom = total === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const showingTo = Math.min(page * PAGE_SIZE, total);
  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-blue-800 mb-6">ব্যবহারকারীরা</h1>

        {/* --- Header and Action Buttons --- */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <div className="flex justify-end gap-3 mb-6">
            <button
              onClick={exportCSV}
              className="flex items-center px-4 py-2 bg-white text-blue-700 border border-blue-200 rounded-lg shadow-sm hover:bg-blue-50 transition duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.707-9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 10.586V3a1 1 0 10-2 0v7.586L6.707 7.707z" clipRule="evenodd" />
              </svg>
              এক্সপোর্ট CSV ফাইল
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              ব্যবহারকারী যোগ করুন
            </button>
          </div>

          {/* --- Search and Filter Bar --- */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="relative flex-1">
              <input
                value={query}
                onChange={handleSearchChange}
                placeholder=" সার্চ করুন"
                className="w-full md:w-96 border border-gray-300 pl-10 pr-4 py-2 rounded-lg focus:ring-blue-700 focus:border-blue-700"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="relative">
                <select value={statusFilter} onChange={handleStatusChange} className="border border-gray-300 px-4 py-2 rounded-lg appearance-none bg-white pr-10">
                    <option value="all">অবস্থা</option>
                    <option value="সক্রিয়">সক্রিয়</option>
                    <option value="নিষ্ক্রিয়">নিষ্ক্রিয়</option>
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
                  <th className="px-4 py-3 min-w-[200px]">ব্যবহারকারী</th>
                  <th className="px-4 py-3 min-w-[200px]">ইমেইল</th>
                  <th className="px-4 py-3 min-w-[120px]">পছন্দের দেশ</th>
                  <th className="px-4 py-3 min-w-[150px]">সাইন-আপ তারিখ</th>
                  <th className="px-4 py-3 min-w-[100px]">অবস্থা</th>
                  <th className="px-4 py-3 min-w-[80px]">কার্যক্রম</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center text-gray-500">ডেটা লোড হচ্ছে...</td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center text-gray-500">কোনো ব্যবহারকারী পাওয়া যায়নি</td>
                  </tr>
                ) : (
                  users.map(user => (
                    <tr key={user._id} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 flex items-center">
                        <img 
                          src={user.avatarUrl} 
                          alt={user.name}
                          className="w-8 h-8 rounded-full object-cover mr-3 flex-shrink-0"
                          // Fallback to a generic icon if the image fails to load
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        {user.name}
                      </td>
                      <td className="px-4 py-3 text-gray-700">{user.email}</td>
                      <td className="px-4 py-3">{user.country}</td>
                      <td className="px-4 py-3">{user.signUpDate}</td>
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          user.status === 'সক্রিয়' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 relative">
                        {/* More/Ellipsis Button (কার্যক্রম) */}
                        <button
                          className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition"
                          onClick={() => setShowMenuId(showMenuId === user._id ? null : user._id)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </button>
                        
                        {/* Action Dropdown Menu */}
                        {showMenuId === user._id && (
                            <div 
                                className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-lg border z-20 overflow-hidden"
                                onMouseLeave={() => setShowMenuId(null)} // Hide on mouse leave
                            >
                                <button 
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                                    onClick={() => handleEdit(user._id)}
                                >
                                    সম্পাদনা করুন
                                </button>
                                <button 
                                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                    onClick={() => handleDelete(user._id)}
                                >
                                    মুছে ফেলুন
                                </button>
                            </div>
                        )}
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
                // Use blue-700 for the Next button as per the screenshot's style (next page button)
                className="px-4 py-2 border border-blue-700 rounded-lg bg-blue-700 text-white hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                পরবর্তী
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Add New User Modal --- */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="absolute inset-0 bg-black opacity-40" onClick={() => setShowAddModal(false)} />
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 z-10 transform scale-100 transition-all duration-300">
            <h2 className="text-xl font-medium mb-5 text-gray-800">নতুন ব্যবহারকারী যোগ করুন</h2>
            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">নাম</label>
                <input 
                  value={newUserName} 
                  onChange={e => setNewUserName(e.target.value)} 
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-blue-700 focus:border-blue-700" 
                  placeholder="ব্যবহারকারীর পুরো নাম"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
                <input 
                  type="email"
                  value={newUserEmail} 
                  onChange={e => setNewUserEmail(e.target.value)} 
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-blue-700 focus:border-blue-700" 
                  placeholder="example@email.com"
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
                  className="px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition"
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