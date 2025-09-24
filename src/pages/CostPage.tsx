import React, {useEffect, useState} from 'react'
import {Card, CardContent} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {Label} from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

// Type definitions
type Country = 'usa' | 'uk' | 'canada' | 'australia'
type Housing = 'shared' | 'private'
type Food = 'cook' | 'mealplan' | 'eatout'
type Transport = 'transit' | 'taxi' | 'bike'
type FunFrequency = 0 | 1 | 2 | 3

interface City {
    value: string
    label: string
    mult: number
}

interface CountryOption {
    value: Country
    label: string
}

interface HousingOption {
    value: Housing
    label: string
}

interface FoodOption {
    value: Food
    label: string
}

interface TransportOption {
    value: Transport
    label: string
}


type CityData = {
    [key in Country]: City[]
}

interface BaseCosts {
    housing: {
        [key in Housing]: number
    }
    food: {
        [key in Food]: number
    }
    transport: {
        [key in Transport]: number
    }
    misc: number
    funPerWeek: number
}

const CITY_DATA: CityData = {
    usa: [
        {value: 'newyork', label: 'নিউ ইয়র্ক', mult: 1.6},
        {value: 'sf', label: 'সান ফ্রানসিসকো', mult: 1.5},
        {value: 'austin', label: 'অস্টিন', mult: 1.1},
    ],
    uk: [
        {value: 'london', label: 'লন্ডন', mult: 1.5},
        {value: 'manchester', label: 'ম্যানচেস্টার', mult: 1.1},
        {value: 'edinburgh', label: 'এডিনবার্গ', mult: 1.2},
    ],
    canada: [
        {value: 'toronto', label: 'টরন্টো', mult: 1.3},
        {value: 'vancouver', label: 'ভ্যাঙ্কুভার', mult: 1.35},
        {value: 'montreal', label: 'মন্ট্রিয়াল', mult: 1.1},
    ],
    australia: [
        {value: 'sydney', label: 'সিডনি', mult: 1.4},
        {value: 'melbourne', label: 'মেলবোর্ন', mult: 1.3},
        {value: 'brisbane', label: 'ব্রিসবেন', mult: 1.2},
    ]
} as const

const BASE: BaseCosts = {
    housing: {shared: 800, private: 1300},
    food: {cook: 250, mealplan: 400, eatout: 650},
    transport: {transit: 80, taxi: 260, bike: 30},
    misc: 200,
    funPerWeek: 60
} as const

const fmt = (n: number): string => '$' + n.toLocaleString('en-US', {maximumFractionDigits: 0})

const CostPage: React.FC = () => {
    const [country, setCountry] = useState<Country>('usa')
    const [city, setCity] = useState<string>('')
    const [housing, setHousing] = useState<Housing>('shared')
    const [food, setFood] = useState<Food>('eatout')
    const [transport, setTransport] = useState<Transport>('transit')
    const [fun, setFun] = useState<FunFrequency>(0)
    const [total, setTotal] = useState<string>('$0000/মাস')


    const cities: City[] = CITY_DATA[country] || []

    useEffect(() => {
        setCity('')
    }, [country])

    const calc = (): void => {
        if (!city) {
            setTotal('শহর নির্বাচন করুন')
            return
        }

        const selectedCity = cities.find(c => c.value === city)
        const mult = selectedCity?.mult ?? 1

        const housingCost = BASE.housing[housing] * mult
        const foodCost = BASE.food[food] * Math.pow(mult, 0.7)
        const transportCost = BASE.transport[transport] * Math.pow(mult, 0.6)
        const misc = BASE.misc * mult

        const funWeekly = fun === 0 ? 0 : fun === 1 ? 1 : fun === 2 ? 2.5 : 4
        const funCost = BASE.funPerWeek * funWeekly * 4 * mult

        const totalCost = Math.round(housingCost + foodCost + transportCost + misc + funCost)
        setTotal(fmt(totalCost) + '/মাস')
    }

    const reset = (): void => {
        setCountry('usa')
        setCity('')
        setHousing('shared')
        setFood('eatout')
        setTransport('transit')
        setFun(0)
        setTotal('$0000/মাস')
    }

    const countryOptions: CountryOption[] = [
        {value: 'usa', label: 'যুক্তরাষ্ট্র'},
        {value: 'uk', label: 'যুক্তরাজ্য'},
        {value: 'canada', label: 'কানাডা'},
        {value: 'australia', label: 'অস্ট্রেলিয়া'}
    ]

    const housingOptions: HousingOption[] = [
        {value: 'shared', label: 'শেয়ার্ড'},
        {value: 'private', label: 'ব্যক্তিগত'}
    ]

    const foodOptions: FoodOption[] = [
        {value: 'eatout', label: 'বাইরে খাওয়া'},
        {value: 'mealplan', label: 'মিল প্ল্যান'},
        {value: 'cook', label: 'রান্না করা'}
    ]

    const transportOptions: TransportOption[] = [
        {value: 'transit', label: 'গণপরিবহন'},
        {value: 'taxi', label: 'ট্যাক্সি'},
        {value: 'bike', label: 'সাইকেল'}
    ]

    const handleCountryChange = (value: Country): void => {
        setCountry(value)
    }

    const handleCityChange = (value: string): void => {
        setCity(value)
    }

    const handleHousingChange = (value: Housing): void => {
        setHousing(value)
    }

    const handleFoodChange = (value: Food): void => {
        setFood(value)
    }

    const handleTransportChange = (value: Transport): void => {
        setTransport(value)
    }

    const handleFunChange = (value: string): void => {
        setFun(Number(value) as FunFrequency)
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-purple-600 mb-4">
                        খরচ ক্যালকুলেটর
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm leading-relaxed">
                        আমাদের কস্ট ক্যালকুলেটর আপনাকে দ্রুত আপনার IELTS প্রস্তুতি, পরীক্ষার খরচ এবং সংশ্লিষ্ট সার্ভিসের
                        মোট ব্যয় অনুমান করতে সাহায্য করে।
                        শুধু আপনার তথ্য ইনপুট করুন এবং একটি পরিষ্কার, স্বচ্ছ খরচের বিশ্লেষণ পান—যাতে আপনি আত্মবিশ্বাসের
                        সাথে আপনার যাত্রা পরিকল্পনা করতে পারেন।
                    </p>
                </div>

                <Card className="bg-white shadow-sm border border-gray-200">
                    <CardContent className="p-8">
                        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
                            {/* Two Column Grid Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                {/* Left Column */}
                                <div className="space-y-6">
                                    {/* Country Selection */}
                                    <div>
                                        <Label className="text-purple-600 font-medium mb-3 block">
                                            আপনি কোথায় পড়াশোনা করতে চান?
                                        </Label>
                                        <div className="grid grid-cols-4 gap-3">
                                            {countryOptions.map((option) => (
                                                <Button
                                                    key={option.value}
                                                    type="button"
                                                    variant="outline"
                                                    className={`
                                                        h-12 text-sm border-gray-300 rounded-lg
                                                        ${country === option.value
                                                        ? 'bg-purple-50 border-purple-300 text-purple-700'
                                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                                    }
                                                    `}
                                                    onClick={() => handleCountryChange(option.value)}
                                                >
                                                    {option.label}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Housing Type */}
                                    <div>
                                        <Label className="text-purple-600 font-medium mb-3 block">
                                            পছন্দের আবাসনের ধরন?
                                        </Label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {housingOptions.map((option) => (
                                                <Button
                                                    key={option.value}
                                                    type="button"
                                                    variant="outline"
                                                    className={`
                                                        h-12 text-sm border-gray-300 rounded-lg
                                                        ${housing === option.value
                                                        ? 'bg-purple-50 border-purple-300 text-purple-700'
                                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                                    }
                                                    `}
                                                    onClick={() => handleHousingChange(option.value)}
                                                >
                                                    {option.label}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Transport */}
                                    <div>
                                        <Label className="text-purple-600 font-medium mb-3 block">
                                            আপনি কীভাবে যাতায়াত করতে পছন্দ করবেন?
                                        </Label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {transportOptions.map((option) => (
                                                <Button
                                                    key={option.value}
                                                    type="button"
                                                    variant="outline"
                                                    className={`
                                                        h-12 text-sm border-gray-300 rounded-lg
                                                        ${transport === option.value
                                                        ? 'bg-purple-50 border-purple-300 text-purple-700'
                                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                                    }
                                                    `}
                                                    onClick={() => handleTransportChange(option.value)}
                                                >
                                                    {option.label}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-6">
                                    {/* City Selection */}
                                    <div>
                                        <Label className="text-purple-600 font-medium mb-3 block">
                                            আপনার শহর নির্বাচন করুন
                                        </Label>
                                        <Select value={city} onValueChange={handleCityChange} disabled={!country}>
                                            <SelectTrigger className="h-12! border-gray-300 rounded-lg w-full">
                                                <SelectValue placeholder="আপনার শহর খুঁজুন"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {cities.map((option) => (
                                                    <SelectItem
                                                        key={option.value}
                                                        value={option.value}
                                                        className="py-3"
                                                    >
                                                        {option.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Food Preference */}
                                    <div>
                                        <Label className="text-purple-600 font-medium mb-3 block">
                                            আপনি কীভাবে খেতে পছন্দ করেন?
                                        </Label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {foodOptions.map((option) => (
                                                <Button
                                                    key={option.value}
                                                    type="button"
                                                    variant="outline"
                                                    className={`
                                                        h-12 text-sm border-gray-300 rounded-lg
                                                        ${food === option.value
                                                        ? 'bg-purple-50 border-purple-300 text-purple-700'
                                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                                    }
                                                    `}
                                                    onClick={() => handleFoodChange(option.value)}
                                                >
                                                    {option.label}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Party Frequency */}
                                    <div>
                                        <Label className="text-purple-600 font-medium mb-3 block">
                                            সপ্তাহে কতবার পার্টি করেন?
                                        </Label>
                                        <Select
                                            value={fun > 0 ? fun.toString() : ""}
                                            onValueChange={handleFunChange}
                                        >
                                            <SelectTrigger className="h-12! border-gray-300 rounded-lg w-full">
                                                <SelectValue placeholder="নির্বাচন করুন"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1" className="py-3">১ বার</SelectItem>
                                                <SelectItem value="2" className="py-3">২–৩ বার</SelectItem>
                                                <SelectItem value="3" className="py-3">৩ বারের বেশি</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            {/* Calculate Button */}
                            <div className="flex justify-center mt-8">
                                <Button
                                    type="button"
                                    onClick={calc}
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-12 h-12 py-3 text-lg font-medium rounded-xl"
                                >
                                    জীবনযাত্রার খরচ হিসাব করুন
                                </Button>
                            </div>
                        </form>

                        {/* Result Section */}
                        <div className="text-center mt-12">
                            <h2 className="text-3xl font-bold text-purple-600 mb-4">মোট খরচ</h2>
                            <div className="text-4xl font-bold text-gray-800 mb-6">
                                {total}
                            </div>
                            <Button
                                type="button"
                                onClick={reset}
                                className="bg-purple-600 h-12 hover:bg-purple-700 text-white px-8 py-3 font-medium rounded-xl"
                            >
                                আবার পরীক্ষা করুন
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default CostPage
