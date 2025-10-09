import { useState, useEffect } from 'react';
import {Button} from "@/components/ui/button.tsx";

export default function CGPACalculatorPage() {
    const [activeTab, setActiveTab] = useState('cgpa-to-gpa');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    // Reset when tab changes
    useEffect(() => {
        setInputValue('');
        setResult('');
        setError('');
    }, [activeTab]);

    const validateInput = (value: string, min: number, max: number) => {
        const num = parseFloat(value);
        if (isNaN(num) || num < min || num > max) {
            return false;
        }
        return true;
    };

    const handleCalculate = () => {
        setError('');

        if (!inputValue.trim()) {
            setError('একটি বৈধ মান লিখুন ফলাফল দেখার জন্য');
            setResult('');
            return;
        }

        const input = parseFloat(inputValue);

        switch (activeTab) {
            case 'cgpa-to-gpa':
                if (!validateInput(inputValue, 0, 4)) {
                    setError('ফলাফল দেখার জন্য একটি বৈধ CGPA লিখুন');
                    setResult('');
                } else {
                    setResult(`আপনার GPA হলো ${input.toFixed(2)}`);
                }
                break;

            case 'gpa-to-cgpa':
                if (!validateInput(inputValue, 0, 4)) {
                    setError('ফলাফল দেখার জন্য একটি বৈধ GPA লিখুন');
                    setResult('');
                } else {
                    setResult(`আপনার CGPA হলো ${input.toFixed(2)}`);
                }
                break;

            case 'cgpa-to-percentage':
                if (!validateInput(inputValue, 0, 4)) {
                    setError('ফলাফল দেখার জন্য একটি বৈধ CGPA লিখুন');
                    setResult('');
                } else {
                    const percentage = input * 25;
                    setResult(`আপনার শতাংশ হলো ${percentage.toFixed(2)}%`);
                }
                break;

            case 'percentage-to-cgpa':
                if (!validateInput(inputValue, 0, 100)) {
                    setError('ফলাফল দেখার জন্য একটি বৈধ শতাংশ লিখুন');
                    setResult('');
                } else {
                    const cgpa = input / 25;
                    setResult(`আপনার CGPA হলো ${cgpa.toFixed(2)}`);
                }
                break;

            case 'cgpa-to-marks':
                if (!validateInput(inputValue, 0, 4)) {
                    setError('ফলাফল দেখার জন্য একটি বৈধ CGPA লিখুন');
                    setResult('');
                } else {
                    const marks = input * 25;
                    setResult(`আপনার নম্বর হলো ${marks.toFixed(2)}%`);
                }
                break;

            case 'marks-to-cgpa':
                if (!validateInput(inputValue, 0, 100)) {
                    setError('বৈধ মার্কস লিখুন ফলাফল দেখার জন্য');
                    setResult('');
                } else {
                    const cgpa = input / 25;
                    setResult(`আপনার CGPA হলো ${cgpa.toFixed(2)}`);
                }
                break;

            default:
                break;
        }
    };

    const getTabConfig = () => {
        switch (activeTab) {
            case 'cgpa-to-gpa':
                return {
                    title: '৪ পয়েন্ট CGPA থেকে ৪ পয়েন্ট GPA কনভার্টার অনলাইন',
                    description: 'আমাদের সহজ ৪-পয়েন্ট থেকে ৪-পয়েন্ট কনভার্টারের মাধ্যমে সেকেন্ডের মধ্যে আপনার CGPA থেকে GPA হিসাব করুন',
                    sectionTitle: 'CGPA কে GPA-তে রূপান্তর করুন',
                    sectionDesc: 'আপনার ৪-পয়েন্ট স্কেলের CGPA প্রবেশ করুন, যাতে এটি ৪-পয়েন্ত স্কেলের GPA তে রূপান্তর করা যায়',
                    inputLabel: 'CGPA (০ থেকে ৪ স্কেল)',
                    placeholder: 'যেমন: ৩.৬২',
                    range: 'বৈধ সীমা: ০.০০ – ৪.০০',
                    formula: 'ফর্মুলা: GPA = CGPA',
                    conversionButtons: [
                        { key: 'cgpa-to-gpa', label: 'CGPA থেকে GPA ক্যালকুলেটর', active: true },
                        { key: 'cgpa-to-percentage', label: 'CGPA থেকে শতাংশ (%) ক্যালকুলেটর', active: false },
                        { key: 'cgpa-to-marks', label: 'CGPA থেকে নম্বর ক্যালকুলেটর', active: false }
                    ],
                    directionButtons: [
                        { key: 'cgpa-to-gpa', label: 'CGPA থেকে GPA', active: true },
                        { key: 'gpa-to-cgpa', label: 'GPA থেকে CGPA', active: false }
                    ]
                };

            case 'gpa-to-cgpa':
                return {
                    title: '৪ পয়েন্ট GPA থেকে ৪ পয়েন্ট CGPA কনভার্টার অনলাইন',
                    description: 'আমাদের সহজ ৪-পয়েন্ট থেকে ৪-পয়েন্ট কনভার্টারের মাধ্যমে কয়েক সেকেন্ডে আপনার GPA থেকে CGPA হিসাব করুন',
                    sectionTitle: 'GPA কে CGPA-তে রূপান্তর করুন',
                    sectionDesc: '৪-পয়েন্ট স্কেলে আপনার GPA লিখুন, এটি ৪-পয়েন্ট স্কেলের CGPA তে রূপান্তর করতে',
                    inputLabel: 'GPA (০ থেকে ৪ স্কেল)',
                    placeholder: 'যেমন: ৩.৬২',
                    range: 'বৈধ সীমা: ০.০০ – ৪.০০',
                    formula: 'ফর্মুলা: CGPA = GPA',
                    conversionButtons: [
                        { key: 'cgpa-to-gpa', label: 'CGPA থেকে GPA ক্যালকুলেটর', active: true },
                        { key: 'cgpa-to-percentage', label: 'CGPA থেকে শতাংশ (%) ক্যালকুলেটর', active: false },
                        { key: 'cgpa-to-marks', label: 'CGPA থেকে নম্বর ক্যালকুলেটর', active: false }
                    ],
                    directionButtons: [
                        { key: 'cgpa-to-gpa', label: 'CGPA থেকে GPA', active: false },
                        { key: 'gpa-to-cgpa', label: 'GPA থেকে CGPA', active: true }
                    ]
                };

            case 'cgpa-to-percentage':
                return {
                    title: 'অনলাইন CGPA থেকে শতাংশ কনভার্টার (৪-পয়েন্ট স্কেল)',
                    description: 'সহজেই আপনার CGPA কে পার্সেন্টেজে রূপান্তর করুন আমাদের সঠিক CGPA থেকে শতাংশ ক্যালকুলেটর ব্যবহার করে। স্ট্যান্ডার্ড কনভার্শন ফর্মুলা ব্যবহার করে ৪-পয়েন্ট স্কেলে সঙ্গে সঙ্গে ফলাফল পান।',
                    sectionTitle: 'CGPA কে শতাংশে রূপান্তর করুন',
                    sectionDesc: 'আপনার ৪-পয়েন্ত স্কেলের CGPA লিখুন যাতে এটি পার্সেন্টেজে রূপান্তরিত করা যায়',
                    inputLabel: 'CGPA (০ থেকে ৪ স্কেল)',
                    placeholder: 'যেমন: ৩.৬২',
                    range: 'বৈধ সীমা: ০.০০ – ৪.০০',
                    formula: 'ফর্মুলা: শতাংশ = CGPA × ২৫',
                    conversionButtons: [
                        { key: 'cgpa-to-gpa', label: 'CGPA থেকে GPA ক্যালকুলেটর', active: false },
                        { key: 'cgpa-to-percentage', label: 'CGPA থেকে শতাংশ (%) ক্যালকুলেটর', active: true },
                        { key: 'cgpa-to-marks', label: 'CGPA থেকে নম্বর ক্যালকুলেটর', active: false }
                    ],
                    directionButtons: [
                        { key: 'cgpa-to-percentage', label: 'CGPA থেকে শতাংশ', active: true },
                        { key: 'percentage-to-cgpa', label: 'শতাংশ থেকে CGPA', active: false }
                    ]
                };

            case 'percentage-to-cgpa':
                return {
                    title: 'অনলাইন শতাংশ থেকে CGPA কনভার্টার (৪-পয়েন্ট স্কেল)',
                    description: 'সহজেই আপনার সিজিপিএকে শতাংশে রূপান্তর করুন আমাদের সঠিক শতাংশ থেকে CGPA ক্যালকুলেটর মাধ্যমে। স্ট্যান্ডার্ড কনভার্শন ফর্মুলা ব্যবহার করে ৪-পয়েন্ট স্কেলে তাৎক্ষণিক ফলাফল পান।',
                    sectionTitle: 'শতাংশকে CGPA-তে রূপান্তর করুন',
                    sectionDesc: 'শতকরা ১০০-এর মধ্যে প্রবেশ করান, যাতে এটি ৪-পয়েন্ট স্কেলে CGPA-তে রূপান্তর করা যায়',
                    inputLabel: 'শতকরা (০ থেকে ১০০)',
                    placeholder: '৮০',
                    range: 'বৈধ সীমা: ০.০০ – ১০০.০০',
                    formula: 'ফর্মুলা: CGPA = শতাংশ ÷ ২৫',
                    conversionButtons: [
                        { key: 'cgpa-to-gpa', label: 'CGPA থেকে GPA ক্যালকুলেটর', active: false },
                        { key: 'cgpa-to-percentage', label: 'CGPA থেকে শতাংশ (%) ক্যালকুলেটর', active: true },
                        { key: 'cgpa-to-marks', label: 'CGPA থেকে নম্বর ক্যালকুলেটর', active: false }
                    ],
                    directionButtons: [
                        { key: 'cgpa-to-percentage', label: 'CGPA থেকে শতাংশ', active: false },
                        { key: 'percentage-to-cgpa', label: 'শতাংশ থেকে CGPA', active: true }
                    ]
                };

            case 'cgpa-to-marks':
                return {
                    title: 'অনলাইন CGPA থেকে নম্বর কনভার্টার (৪-পয়েন্ট স্কেল)',
                    description: 'আপনার CGPA-কে মুহূর্তের মধ্যে নম্বরে রূপান্তর করুন আমাদের সহজ CGPA থেকে নম্বর ক্যালকুলেটর দিয়ে। স্ট্যান্ডার্ড ৪-পয়েন্ট স্কেল সূত্র ব্যবহার করে সঠিক ফলাফল কয়েক সেকেন্ডের মধ্যে পান।',
                    sectionTitle: 'CGPA কে নম্বরে রূপান্তর করুন',
                    sectionDesc: 'আপনার ৪-পয়েন্ট স্কেলের CGPA প্রবেশ করুন, যাতে এটি নম্বর শতাংশে রূপান্তর করা যায়।',
                    inputLabel: 'CGPA (০ থেকে ৪ স্কেল)',
                    placeholder: 'যেমন: ৩.৬২',
                    range: 'বৈধ সীমা: ০.০০ – ৪.০০',
                    formula: 'ফর্মুলা: মার্কস % = CGPA × ২৫',
                    conversionButtons: [
                        { key: 'cgpa-to-gpa', label: 'CGPA থেকে GPA ক্যালকুলেটর', active: false },
                        { key: 'cgpa-to-percentage', label: 'CGPA থেকে শতাংশ (%) ক্যালকুলেটর', active: false },
                        { key: 'cgpa-to-marks', label: 'CGPA থেকে নম্বর ক্যালকুলেটর', active: true }
                    ],
                    directionButtons: [
                        { key: 'cgpa-to-marks', label: 'CGPA থেকে নম্বর', active: true },
                        { key: 'marks-to-cgpa', label: 'নম্বর থেকে CGPA', active: false }
                    ]
                };

            case 'marks-to-cgpa':
                return {
                    title: 'অনলাইন নম্বর থেকে CGPA কনভার্টার (৪-পয়েন্ট স্কেল)',
                    description: 'আপনার নম্বরকে মুহূর্তের মধ্যে CGPA-তে রূপান্তর করুন আমাদের সহজ নম্বর থেকে CGPA ক্যালকুলেটর দিয়ে। স্ট্যান্ডার্ড ৪-পয়েন্ট স্কেল সূত্র ব্যবহার করে সঠিক ফলাফল কয়েক সেকেন্ডের মধ্যে পান।',
                    sectionTitle: 'নম্বর থেকে CGPA রূপান্তর করুন',
                    sectionDesc: '১০০ এর মধ্যে নম্বর প্রবেশ করুন, যাতে এটি ৪-পয়েন্ট স্কেলের CGPA তে রূপান্তর করা যায়',
                    inputLabel: 'নম্বর (০ থেকে ১০০)',
                    placeholder: 'যেমন: ৮০',
                    range: 'বৈধ সীমা: ০.০০ – ১০০.০০',
                    formula: 'ফর্মুলা: CGPA = মার্কস ÷ ২৫',
                    conversionButtons: [
                        { key: 'cgpa-to-gpa', label: 'CGPA থেকে GPA ক্যালকুলেটর', active: false },
                        { key: 'cgpa-to-percentage', label: 'CGPA থেকে শতাংশ (%) ক্যালকুলেটর', active: false },
                        { key: 'cgpa-to-marks', label: 'CGPA থেকে নম্বর ক্যালকুলেটর', active: true }
                    ],
                    directionButtons: [
                        { key: 'cgpa-to-marks', label: 'CGPA থেকে নম্বর', active: false },
                        { key: 'marks-to-cgpa', label: 'নম্বর থেকে CGPA', active: true }
                    ]
                };

            default:
                return {
                    title: '',
                    description: '',
                    sectionTitle: '',
                    sectionDesc: '',
                    inputLabel: '',
                    placeholder: '',
                    range: '',
                    formula: '',
                    conversionButtons: [],
                    directionButtons: []
                };
        }
    };

    const config = getTabConfig();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-purple-100 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4">
                        {config.title}
                    </h1>
                    <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        {config.description}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Navigation Tabs */}
                <div className="mb-8">
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        {config.conversionButtons.map((button) => (
                            <Button size={"xl"}
                                key={button.key}
                                onClick={() => setActiveTab(button.key)}
                                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                                    button.active
                                        ? 'text-white'
                                        : 'bg-purple-200 text-purple-800 hover:bg-purple-300'
                                }`}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4">
                        {config.directionButtons.map((button) => (
                            <Button
                                size={"xl"}
                                key={button.key}
                                onClick={() => setActiveTab(button.key)}
                                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                                    button.active
                                        ? 'text-white'
                                        : 'bg-purple-200 text-purple-800 hover:bg-purple-300'
                                }`}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Calculator Section */}
                <div className="bg-white rounded-lg p-8 shadow-sm">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-xl font-semibold text-purple-600 mb-4 text-center">
                            {config.sectionTitle}
                        </h2>
                        <p className="text-gray-600 mb-8 text-center">
                            {config.sectionDesc}
                        </p>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-purple-600 font-medium mb-2">
                                    {config.inputLabel}
                                </label>
                                <input
                                    type="number"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder={config.placeholder}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    step="0.01"
                                />
                                <p className="text-sm text-gray-500 mt-1">{config.range}</p>
                            </div>

                            <div className="text-center">
                                <Button
                                    size={"xl"}
                                    onClick={handleCalculate}
                                >
                                    রূপান্তর
                                </Button>
                            </div>

                            <div className="text-center">
                                {error && (
                                    <p className="text-red-500">{error}</p>
                                )}
                                {result && (
                                    <p className="text-lg font-medium text-green-600">{result}</p>
                                )}
                            </div>

                            <div className="text-center">
                                <p className="text-sm text-gray-600">{config.formula}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
