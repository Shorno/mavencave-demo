import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Checkbox} from "@/components/ui/checkbox"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator"
import {User, Mail, Lock, Eye, EyeOff} from "lucide-react"
import {useState} from "react"
import GoogleIcon from "@/components/google-icon.tsx";
import FacebookIcon from "@/components/facebook-icon.tsx";
import {Link} from "react-router";

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-xl border border-white/20">
            <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-3xl font-bold text-purple-700">
                    সাইন আপ
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                    আমাদের প্ল্যাটফর্মে সাইন আপ করুন এবং বিশেষজ্ঞদের রিসোর্স, ব্যক্তিগতকৃত গাইড, এবং এমন
                    টুলগুলো ব্যবহার করুন যা আপনার বিদেশে পড়াশোনা করার যাত্রাকে আরও সহজ এবং দ্রুত করে তুলবে
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <form className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-purple-700 font-medium">
                            আপনার নাম লিখুন
                        </Label>
                        <div className="relative">
                            <User
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"/>
                            <Input
                                id="name"
                                type="text"
                                placeholder="আপনার নাম লিখুন"
                                className="pl-10 bg-white/90 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-purple-700 font-medium">
                            আপনার ইমেইল লিখুন
                        </Label>
                        <div className="relative">
                            <Mail
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"/>
                            <Input
                                id="email"
                                type="email"
                                placeholder="আপনার ইমেইল লিখুন"
                                className="pl-10 bg-white/90 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-purple-700 font-medium">
                            আপনার পাসওয়ার্ড লিখুন
                        </Label>
                        <div className="relative">
                            <Lock
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"/>
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="আপনার পাসওয়ার্ড লিখুন"
                                className="pl-10 pr-10 bg-white/90 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="w-4 h-4 text-gray-400"/>
                                ) : (
                                    <Eye className="w-4 h-4 text-gray-400"/>
                                )}
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-start space-x-2">
                        <Checkbox
                            id="terms"
                            className="border-gray-300 text-purple-600 focus:ring-purple-500 mt-0.5"
                        />
                        <Label
                            htmlFor="terms"
                            className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                        >
                            আমি টার্মস ও কন্ডিশনের সাথে একমত
                        </Label>
                    </div>

                    <Button
                        type="submit"
                        className="w-full text-white font-medium py-6"
                    >
                        সাইন আপ
                    </Button>
                </form>

                <div className="flex items-center">
                    <Separator className="flex-1"/>
                    <span className="mx-4 text-gray-500 text-sm">অথবা</span>
                    <Separator className="flex-1"/>
                </div>

                <div className="space-y-3">
                    <Button
                        variant="outline"
                        className="w-full bg-white/90 border-gray-300 hover:bg-gray-50 py-6"
                    >
                        <GoogleIcon/>
                        গুগল দিয়ে সাইন আপ করুন
                    </Button>

                    <Button
                        variant="outline"
                        className="w-full bg-white/90 border-gray-300 hover:bg-gray-50 py-6"
                    >
                        <FacebookIcon/>
                        ফেসবুক দিয়ে সাইন আপ করুন
                    </Button>
                </div>

                <p className="text-center text-sm text-gray-600">
                    ইতিমধ্যে একটি অ্যাকাউন্ট আছে?{' '}
                    <Button variant="link" asChild
                            className="p-0 h-auto text-purple-700 hover:text-purple-800 hover:underline font-medium">
                        <Link to={"/login"}>সাইন ইন করুন</Link>
                    </Button>
                </p>
            </CardContent>
        </Card>
    );
}
