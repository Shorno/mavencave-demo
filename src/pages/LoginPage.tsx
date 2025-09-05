import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator"
import {Mail, Lock, Eye, EyeOff} from "lucide-react"
import {useState} from "react"
import {Link} from "react-router";

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-xl border border-white/20">
            <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-3xl font-bold text-purple-700">
                    সাইন ইন
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                    আমাদের প্ল্যাটফর্মে সাইন ইন করুন ব্যক্তিগতকৃত ফিচার ব্যবহার করতে, আপনার
                    অগ্রগতি ট্র্যাক করতে এবং সমস্ত স্টাডি রিসোর্স এক জায়গায় পরিচালনা করতে
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <form className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-purple-700 font-medium">
                            আপনার ইমেইল লিখুন
                        </Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"/>
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
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"/>
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

                    <div className="text-right">
                        <Button
                            variant="link"
                            className="p-0 h-auto text-purple-700 hover:text-purple-800 text-sm"
                        >
                            পাসওয়ার্ড ভুলে গেছেন?
                        </Button>
                    </div>

                    <Button
                        type="submit"
                        className="w-full  text-white font-medium py-6"
                    >
                        সাইন ইন
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
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"/>
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"/>
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"/>
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"/>
                        </svg>
                        গুগল দিয়ে সাইন ইন করুন
                    </Button>

                    <Button
                        variant="outline"
                        className="w-full bg-white/90 border-gray-300 hover:bg-gray-50 py-6"
                    >
                        <svg className="w-4 h-4 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                            <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        ফেসবুক দিয়ে সাইন ইন করুন
                    </Button>
                </div>

                <p className="text-center text-sm text-gray-600">
                    একটি অ্যাকাউন্ট নেই?{' '}
                    <Button variant="link" asChild
                            className="p-0 h-auto text-purple-700 hover:text-purple-800 hover:underline font-medium">
                        <Link to={"/signup"}>সাইন আপ  করুন</Link>
                    </Button>
                </p>
            </CardContent>
        </Card>
    );
}
