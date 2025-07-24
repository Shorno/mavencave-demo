import {Button} from "@/components/ui/button"
import {motion} from "motion/react"
import FourCardGrid from "@/components/four-card-grid.tsx";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card.tsx";
import {useState} from "react";
import {stories} from "@/components/success-stories.tsx";
import CTASection from "@/components/cta.tsx";

const advisors = [
    {
        title: "তাসফিয়া নূর",
        subtitle: "প্রিন্সিপাল, Sequoia Capital",
        image: "/images/advisor/advisor1.jpg",
    },
    {
        title: "তাহমিদ রেজা",
        subtitle: "প্রতিষ্ঠাতা ও সিইও, InCred",
        image: "/images/advisor/advisor2.jpg",
    },
    {
        title: "হাফসা জান্নাত",
        subtitle: "তথ্য প্রধান, University of Chicago ",
        image: "/images/advisor/advisor3.jpg",

    },
    {
        title: "নাফিউল হাসান",
        subtitle: "সিইও, Versura",
        image: "/images/advisor/advisor4.jpg",

    },
]

export default function AboutPage() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % stories.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length)
    }

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    const imageVariants = {
        hidden: {opacity: 0, scale: 0.8},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    return (
        <div>
            <div className="min-h-screen bg-gray-50 px-4 py-8 md:px-8 lg:px-16 flex items-center">
                <div className="mx-auto max-w-7xl container">
                    <motion.div
                        className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Left Content */}
                        <div className="space-y-6">
                            <motion.h1
                                className="text-3xl font-semibold text-gray-900 md:text-4xl lg:text-5xl leading-tight"
                                variants={itemVariants as any}
                            >
                                আমাদের প্রতিশ্রুতি: সবার জন্য বিশ্বমানের শিক্ষা
                            </motion.h1>

                            <motion.p className="text-lg text-gray-700 leading-relaxed" variants={itemVariants as any}>
                                ম্যাভেনকেভ-এ, আমরা বিশ্বাস করি শিক্ষা সকলের অধিকার। তাই আমরা কৃত্রিম বুদ্ধিমত্তা (AI)
                                ব্যবহার করে বিশ্বমানের শিক্ষা ও ভিসা গাইডলাইন সবার দোরগোড়ায় পৌঁছে দিচ্ছি। IELTS
                                প্রস্তুতি থেকে শুরু করে SOP লেখা, ভিসা পূর্বাভাস থেকে বিশ্ববিদ্যালয় নির্বাচন — প্রতিটি
                                ধাপে আমরা আছি আপনার পাশে। আমাদের লক্ষ্য হলো সহজ, ব্যক্তিগতকৃত ও দক্ষ অভিজ্ঞতা নিশ্চিত
                                করা যেন আপনি আত্মবিশ্বাসের সাথে বিদেশে পড়াশোনা শুরু করতে পারেন। প্রযুক্তির শক্তি দিয়ে
                                আমরা গড়ে তুলছি নতুন প্রজন্মের শিক্ষার পথ। আপনিও আজই যাত্রা শুরু করুন আপনার স্বপ্নের
                                গন্তব্যের পথে।
                            </motion.p>

                            <motion.div variants={itemVariants as any}>
                                <motion.div
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    transition={{type: "spring", stiffness: 400, damping: 17}}
                                >
                                    <Button
                                        size="lg"
                                        className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 text-lg font-medium rounded-lg transition-colors duration-200"
                                    >
                                        আপনার যাত্রা শুরু করুন
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Images Grid */}
                        <motion.div className="grid grid-cols-2 gap-4 h-fit" variants={containerVariants}>
                            <div className="flex w-full gap-4 col-span-2 justify-center">
                                {/* Top image spanning full width */}
                                <motion.div variants={imageVariants as any}>
                                    <motion.div
                                        whileHover={{scale: 1.02, y: -5}}
                                        transition={{duration: 0.3}}
                                    >
                                        <img
                                            src="/images/h1.png"
                                            alt="Group of professionals in traditional attire"
                                            className="object-cover h-full"
                                        />
                                    </motion.div>
                                </motion.div>

                                {/* Bottom left image */}
                                <motion.div
                                    className="flex items-end"
                                    variants={imageVariants as any}
                                    whileHover={{scale: 1.05, rotate: 1}}
                                    transition={{duration: 0.3}}
                                >
                                    <img
                                        src="/images/h2.png"
                                        alt="Students working in office environment"
                                        className="object-cover w-full"
                                    />
                                </motion.div>
                            </div>

                            {/* Bottom right image */}
                            <motion.div
                                className="flex items-start justify-center col-span-2"
                                variants={imageVariants as any}
                                whileHover={{scale: 1.05, rotate: -1}}
                                transition={{duration: 0.3}}
                            >
                                <img
                                    src="/images/h3.png"
                                    alt="Students collaborating with computers"
                                    className="object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible"
                        className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Text content */}
                        <div className="space-y-6">
                            <motion.h2 initial={{opacity: 0, y: 50}}
                                       whileInView={{opacity: 1, y: 0}}
                                       transition={{duration: 0.6, ease: "easeOut"}}
                                       viewport={{once: true, amount: 0.5}}
                                       className="text-5xl font-semibold text-gray-900 leading-tight">
                                আমাদের প্রতিষ্ঠাতাদের সঙ্গে পরিচিত হন
                            </motion.h2>
                            <motion.p initial={{opacity: 0, y: 50}}
                                      whileInView={{opacity: 1, y: 0}}
                                      transition={{duration: 0.6, ease: "easeOut"}}
                                      viewport={{once: true, amount: 0.5}}
                                      className="text-lg text-gray-600 leading-relaxed">
                                ম্যাভেনকেভ-এর পেছনে আছেন কিছু স্বপ্নবাজ তরুণ, যারা প্রযুক্তিকে কাজে লাগিয়ে
                                শিক্ষাক্ষেত্রে বৈপ্লবিক পরিবর্তন আনার লক্ষ্য নিয়ে এগিয়ে চলেছেন। তাদের অভিজ্ঞতা, মেধা
                                এবং ছাত্রদের প্রতি দায়বদ্ধতাই আমাদের প্রতিটি সমাধানে প্রতিফলিত হয়। চলুন, তাদের গল্প
                                জানুন — কীভাবে তারা গড়েছেন এই এআই-চালিত প্ল্যাটফর্ম, যা বদলে দিচ্ছে বিদেশে পড়াশোনার
                                অভিজ্ঞতা আপনার স্বপ্নপূরণে যারা দিনরাত কাজ করছেন, এবার তাদের চিনে নেওয়ার পালা।
                            </motion.p>
                        </div>

                        {/* Right side - Founder photos */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* First founder */}
                            <motion.div initial={{opacity: 0, y: 50}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.6, ease: "easeOut"}}
                                        viewport={{once: true, amount: 0.5}}
                                        className="relative rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/images/employee1.png"
                                    alt="Sumaiya Gaiznibeen"
                                    width={300}
                                    height={400}
                                    className="w-full h-96 object-cover"
                                />
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <motion.h3 initial={{opacity: 0}}
                                               whileInView={{opacity: 1}}
                                               transition={{duration: 0.6, ease: "easeOut"}}
                                               viewport={{once: true, amount: 0.5}}
                                               className="text-white text-xl font-semibold mb-2">সুমাইয়া মাহজাবিন
                                    </motion.h3>
                                    <motion.p initial={{opacity: 0}}
                                              whileInView={{opacity: 1}}
                                              transition={{duration: 0.6, ease: "easeOut"}}
                                              viewport={{once: true, amount: 0.5}}
                                              className="text-gray-200 text-sm leading-relaxed">
                                        শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়
                                        <br/>
                                        কলম্বিয়া বিশ্ববিদ্যালয়, নিউ ইয়র্ক
                                    </motion.p>
                                </div>
                            </motion.div>

                            {/* Second founder */}
                            <motion.div initial={{opacity: 0, y: 50}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                                        viewport={{once: true, amount: 0.5}}
                                        className="relative rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/images/employee2.png"
                                    alt="Adib Hosen"
                                    width={300}
                                    height={400}
                                    className="w-full h-96 object-cover"
                                />
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <motion.h3 initial={{opacity: 0}}
                                               whileInView={{opacity: 1}}
                                               transition={{duration: 0.6, ease: "easeOut"}}
                                               viewport={{once: true, amount: 0.5}}
                                               className="text-white text-xl font-semibold mb-2">আদিব হোসেন
                                    </motion.h3>
                                    <motion.p initial={{opacity: 0}}
                                              whileInView={{opacity: 1}}
                                              transition={{duration: 0.6, ease: "easeOut"}}
                                              viewport={{once: true, amount: 0.5}}
                                              className="text-gray-200 text-sm leading-relaxed">
                                        ঢাকা বিশ্ববিদ্যালয়
                                        <br/>
                                        সাবেক ভিসি বিনিয়োগকারী, SAIF Partners
                                    </motion.p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className={"max-w-7xl mx-auto px-4 lg:px-6"}>
                <p className={"text-center text-xl sm:text-3xl lg:text-4xl font-semibold py-8"}>আমাদের পরামর্শদাতা</p>
                <FourCardGrid items={advisors}/>
                <div className={"py-8"}>
                    <p className={"text-center  sm:text-3xl lg:text-4xl font-semibold py-8"}>
                        বিশ্বজুড়ে বিনিয়োগকারীদের বিশ্বাস অর্জন করেছে
                    </p>
                    <div className={"sm:flex flex flex-col justify-center items-center sm:gap-16"}>
                        <img src={"/images/brands/brand3.png"} alt={"brand"} className={"h-14 sm:h-20"}/>
                        <img src={"/images/brands/brand4.png"} alt={"brand"} className={"h-14 sm:h-20"}/>
                        <img src={"/images/brands/brand2.png"} alt={"brand"} className={"h-14 sm:h-20"}/>
                        <img src={"/images/brands/brand1.png"} alt={"brand"} className={"h-14 sm:h-20"}/>
                    </div>
                </div>
            </div>
            <div className="mb-16 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">স্বপ্ন পূরণের গল্পগুলো</h2>
                </div>

                <div className="relative">
                    <Button
                        variant="secondary"
                        size="icon"
                        className="absolute left-2 md:-left-10 top-1/2 -translate-y-1/2 z-10 rounded-full w-10 h-10 md:w-12 md:h-12 bg-blue-600 hover:bg-blue-700 text-white border-0"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="h-4 w-4 md:h-5 md:w-5"/>
                    </Button>

                    <Button
                        variant="secondary"
                        size="icon"
                        className="absolute right-2 md:-right-10 top-1/2 -translate-y-1/2 z-10 rounded-full w-10 h-10 md:w-12 md:h-12 bg-blue-600 hover:bg-blue-700 text-white border-0"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-4 w-4 md:h-5 md:w-5"/>
                    </Button>

                    <div className="md:hidden px-8">
                        <Card className="bg-white border-0 shadow-lg">
                            <CardContent className="p-0 -mt-4">
                                <div className="relative rounded-lg">
                                    <img
                                        src={stories[currentSlide].image || "/placeholder.svg"}
                                        alt="Success story"
                                        className="w-full h-64 p-2 object-cover rounded-lg"
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-700 text-sm leading-relaxed">"{stories[currentSlide].quote}"</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="hidden md:grid md:grid-cols-3 gap-8 px-16">
                        {stories.map((story, index) => (
                            <Card
                                key={index}
                                className={`bg-white border-0 shadow-lg transition-all duration-300 ${
                                    index === currentSlide ? "scale-105" : "scale-100 opacity-70"
                                }`}
                            >
                                <CardContent className="p-0 -mt-4">
                                    <div className="relative rounded-lg">
                                        <img
                                            src={story.image || "/placeholder.svg"}
                                            alt="Success story"
                                            className="w-full h-64 p-2 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-700 text-sm leading-relaxed">"{story.quote}"</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8 space-x-2">
                        {stories.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                    index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                                }`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
                <CTASection/>
            </div>

        </div>
    )
}
