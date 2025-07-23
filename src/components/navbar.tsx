import {ChevronDown, DatabaseIcon, Menu} from "lucide-react"
import {useState} from "react"
import {motion, AnimatePresence} from "motion/react"

import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {navigationItems} from "../data/navigation"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [expandedItems, setExpandedItems] = useState<string[]>([])

    const toggleExpanded = (itemLabel: string) => {
        setExpandedItems((prev) =>
            prev.includes(itemLabel) ? prev.filter((item) => item !== itemLabel) : [...prev, itemLabel],
        )
    }



    return (
        <nav className="w-full md:py-3 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <a href="/"
                           className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                            <DatabaseIcon className="h-8 w-8"/>
                            <span className="text-2xl font-bold tracking-tight">
                                Maven<span className="font-medium text-gray-600">cave</span>
                            </span>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {navigationItems.map((item) => (
                                <div key={item.label}>
                                    {item.hasDropdown ? (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost"
                                                        className="flex items-center space-x-1 font-medium text-gray-700 hover:text-gray-900">
                                                    <span>{item.label}</span>
                                                    <ChevronDown className="h-4 w-4"/>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="start" className="w-48">
                                                {item.dropdownItems?.map((dropdownItem) => (
                                                    <DropdownMenuItem key={dropdownItem.label} asChild>
                                                        <a href={dropdownItem.href} className="font-medium">
                                                            {dropdownItem.label}
                                                        </a>
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="rounded-lg font-medium px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Button size="xl" className="font-medium px-6 bg-blue-600 hover:bg-blue-700 text-white">
                            সাইন ইন
                        </Button>
                    </div>

                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-gray-900">
                                    <Menu className="h-6 w-6"/>
                                    <span className="sr-only">Open navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full sm:w-[400px] p-0">
                                <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
                                    <a href="/" className="flex items-center space-x-2 text-blue-600">
                                        <DatabaseIcon className="h-6 w-6"/>
                                        <span className="text-xl font-bold tracking-tight">
                                            Maven<span className="font-medium text-gray-600">cave</span>
                                        </span>
                                    </a>
                                </div>

                                <div className="flex flex-col h-full">
                                    <div className="flex-1 overflow-y-auto overflow-x-hidden">
                                        <div className="px-6 py-6 space-y-3">
                                            {navigationItems.map((item, index) => (
                                                <motion.div
                                                    key={item.label}
                                                    initial={{opacity: 0, x: 20}}
                                                    animate={{opacity: 1, x: 0}}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay: index * 0.1,
                                                        ease: "easeOut"
                                                    }}
                                                    className="w-full"
                                                >
                                                    {item.hasDropdown ? (
                                                        <div className="space-y-2">
                                                            <motion.button
                                                                whileTap={{scale: 0.98}}
                                                                className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-gray-900 bg-white hover:bg-gray-50 rounded-lg border transition-all duration-200"
                                                                onClick={() => toggleExpanded(item.label)}
                                                            >
                                                                <span>{item.label}</span>
                                                                <motion.div
                                                                    animate={{
                                                                        rotate: expandedItems.includes(item.label) ? 180 : 0
                                                                    }}
                                                                    transition={{duration: 0.2, ease: "easeInOut"}}
                                                                >
                                                                    <ChevronDown className="h-4 w-4 text-gray-500"/>
                                                                </motion.div>
                                                            </motion.button>

                                                            <AnimatePresence>
                                                                {expandedItems.includes(item.label) && (
                                                                    <motion.div
                                                                        initial={{opacity: 0, height: 0}}
                                                                        animate={{opacity: 1, height: "auto"}}
                                                                        exit={{opacity: 0, height: 0}}
                                                                        transition={{duration: 0.2, ease: "easeInOut"}}
                                                                        className="ml-4 space-y-1 overflow-hidden"
                                                                    >
                                                                        <div
                                                                            className="border-l-2 border-blue-100 pl-3 space-y-1">
                                                                            {item.dropdownItems?.map((dropdownItem, subIndex) => (
                                                                                <motion.a
                                                                                    key={dropdownItem.label}
                                                                                    href={dropdownItem.href}
                                                                                    initial={{opacity: 0, x: 10}}
                                                                                    animate={{opacity: 1, x: 0}}
                                                                                    transition={{
                                                                                        duration: 0.2,
                                                                                        delay: subIndex * 0.05
                                                                                    }}
                                                                                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 w-full"
                                                                                    onClick={() => setIsOpen(false)}
                                                                                    whileTap={{scale: 0.98}}
                                                                                >
                                                                                    {dropdownItem.label}
                                                                                </motion.a>
                                                                            ))}
                                                                        </div>
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    ) : (
                                                        <motion.a
                                                            href={item.href}
                                                            whileTap={{scale: 0.98}}
                                                            className="block w-full px-4 py-3 font-medium text-gray-900 bg-white hover:bg-gray-50 rounded-lg border transition-all duration-200"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {item.label}
                                                        </motion.a>
                                                    )}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-6 border-t bg-gray-50 mt-auto">
                                        <motion.div
                                            initial={{opacity: 0, y: 20}}
                                            animate={{opacity: 1, y: 0}}
                                            transition={{duration: 0.3, delay: 0.4}}
                                            className="w-full"
                                        >
                                            <Button
                                                className="w-full py-3 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white min-w-0"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                সাইন ইন
                                            </Button>
                                        </motion.div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}