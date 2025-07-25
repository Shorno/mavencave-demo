import {ChevronDown, DatabaseIcon, Menu, ChevronRight} from "lucide-react"
import {useState} from "react"
import {motion, AnimatePresence} from "motion/react"
import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger} from "@/components/ui/dropdown-menu"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {type NavigationItem, navigationItems} from "../data/navigation"
import {Link} from "react-router";

const MultiLevelDropdown = ({ items }: { items: NavigationItem[] }) => {
    return (
        <>
            {items.map((item) => (
                <div key={item.label}>
                    {item.hasDropdown && item.dropdownItems ? (
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger className="flex items-center justify-between font-medium">
                                <span>{item.label}</span>
                                <ChevronRight className="h-4 w-4" />
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="w-64">
                                <MultiLevelDropdown items={item.dropdownItems} />
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                    ) : (
                        <DropdownMenuItem asChild>
                            <Link to={item.href} className="font-medium w-full">
                                {item.label}
                            </Link>
                        </DropdownMenuItem>
                    )}
                </div>
            ))}
        </>
    )
}

const MobileMultiLevelNav = ({
                                 items,
                                 expandedItems,
                                 toggleExpanded,
                                 setIsOpen,
                                 level = 0
                             }: {
    items: NavigationItem[],
    expandedItems: string[],
    toggleExpanded: (itemLabel: string) => void,
    setIsOpen: (isOpen: boolean) => void,
    level?: number
}) => {
    const getItemKey = (item: NavigationItem) => `${item.label}-level-${level}`

    return (
        <div className={`space-y-2 ${level > 0 ? 'ml-4' : ''}`}>
            {items.map((item, index) => {
                const itemKey = getItemKey(item)
                const isExpanded = expandedItems.includes(itemKey)

                return (
                    <motion.div
                        key={itemKey}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: index * 0.1,
                            ease: "easeOut"
                        }}
                        className="w-full"
                    >
                        {item.hasDropdown && item.dropdownItems ? (
                            <div className="space-y-2">
                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full flex items-center justify-between px-4 py-3 text-left font-medium text-gray-900 bg-white hover:bg-gray-50 rounded-lg border transition-all duration-200 ${
                                        level > 0 ? 'bg-gray-50 border-gray-200' : ''
                                    }`}
                                    onClick={() => toggleExpanded(itemKey)}
                                >
                                    <span className={level > 0 ? 'text-sm' : ''}>{item.label}</span>
                                    <motion.div
                                        animate={{
                                            rotate: isExpanded ? 180 : 0
                                        }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                    >
                                        <ChevronDown className="h-4 w-4 text-gray-500" />
                                    </motion.div>
                                </motion.button>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className={`border-l-2 border-blue-100 pl-3 space-y-2 ${
                                                level > 0 ? 'border-gray-200' : ''
                                            }`}>
                                                <MobileMultiLevelNav
                                                    items={item.dropdownItems}
                                                    expandedItems={expandedItems}
                                                    toggleExpanded={toggleExpanded}
                                                    setIsOpen={setIsOpen}
                                                    level={level + 1}
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <motion.a
                                href={item.href}
                                whileTap={{ scale: 0.98 }}
                                className={`block w-full px-4 py-3 font-medium text-gray-900 bg-white hover:bg-gray-50 rounded-lg border transition-all duration-200 ${
                                    level > 0 ? 'text-sm bg-gray-50 border-gray-200' : ''
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </motion.a>
                        )}
                    </motion.div>
                )
            })}
        </div>
    )
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [expandedItems, setExpandedItems] = useState<string[]>([])

    const toggleExpanded = (itemLabel: string) => {
        setExpandedItems((prev) =>
            prev.includes(itemLabel)
                ? prev.filter((item) => item !== itemLabel)
                : [...prev, itemLabel]
        )
    }

    return (
        <nav className="w-full md:py-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/"
                           className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                            <DatabaseIcon className="h-8 w-8"/>
                            <span className="text-2xl font-bold tracking-tight">
                                Maven<span className="font-medium text-gray-600">cave</span>
                            </span>
                        </Link>
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
                                            <DropdownMenuContent align="start" className="w-64">
                                                <MultiLevelDropdown items={item.dropdownItems || []} />
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    ) : (
                                        <Link
                                            to={item.href}
                                            className="rounded-lg font-medium px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                                        >
                                            {item.label}
                                        </Link>
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
                                        <div className="px-6 py-6">
                                            <MobileMultiLevelNav
                                                items={navigationItems}
                                                expandedItems={expandedItems}
                                                toggleExpanded={toggleExpanded}
                                                setIsOpen={setIsOpen}
                                            />
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
