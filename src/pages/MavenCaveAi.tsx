import {useState} from 'react';
import {NavLink} from 'react-router';

export default function MavenCaveAi() {
    const [selected, setSelected] = useState('Search AI');
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        'What is AI?',
        'Correct my grammar',
        'Translate this sentence',
    ]);

    const options = [
        {label: 'Visa Predictor', path: '/resources/sop'},
        {label: 'SOP Generator', path: '/visa-predictor'},
    ];
    const handleSubmit = () => {
        if (input.trim()) {
            alert(`Selected: ${selected}\nInput: ${input}`);
            setHistory((prev) => [input.trim(), ...prev]);
            setInput('');
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#f7f9fc]">
            {/* Header */}
            <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between h-16">
                <h1 className="text-2xl font-bold text-indigo-700">MavenCave AI</h1>
            </header>

            {/* Welcome Section */}
            {/* <section className="flex flex-col items-center justify-center py-10 bg-gradient-to-br from-white to-indigo-50 px-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
          alt="Chatbot Avatar"
          className="w-24 h-24 mb-6 rounded-full shadow-md"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 text-center">
          How can I help you today?
        </h1>
      </section> */}

            {/* Main Layout */}
            <div
                className="flex flex-1 overflow-hidden"
                style={{height: 'calc(100vh - 16rem)'}}
            >
                {/* Sidebar */}
                <aside className="flex flex-col w-56 bg-white border-r shadow-lg">
                    {/* Option buttons */}
                    <nav className="flex flex-col p-4 gap-1">
                        {options.map((opt) => (
                            <NavLink
                                key={opt.label}
                                to={opt.path}
                                onClick={() => setSelected(opt.label)}
                                className={({isActive}) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                                        selected === opt.label || isActive
                                            ? 'bg-indigo-600 text-white shadow'
                                            : 'text-gray-700 hover:bg-indigo-100'
                                    }`
                                }
                            >
                                {opt.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Divider */}
                    <div className="border-t border-gray-200 mx-4"></div>

                    {/* History */}
                    <div className="flex-1 overflow-y-auto px-4 py-3">
                        <h3 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                            History
                        </h3>
                        {history.length === 0 ? (
                            <p className="text-gray-400 italic text-sm">No history yet</p>
                        ) : (
                            <ul className="flex flex-col gap-2">
                                {history.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => setInput(item)}
                                        title={item}
                                        className="cursor-pointer truncate rounded-md px-3 py-2 hover:bg-indigo-100 text-gray-700 text-sm"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8 overflow-y-auto bg-white">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6">
                            Ask Maven AI
                        </h2>

                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            rows={6}
                            placeholder="Type your question or prompt here..."
                            className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none mb-6 resize-none"
                        />

                        <button
                            onClick={handleSubmit}
                            disabled={!input.trim()}
                            className={`w-full md:w-auto px-6 py-3 rounded-xl font-semibold transition ${
                                input.trim()
                                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            Submit
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}
