import { ArrowRight, Sparkles, Zap, TrendingUp, Edit3, Send, MoreHorizontal } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            AI-Powered Sales Platform
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            AI-Powered Emails{" "}
                            <span className="bg-linear-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                                That Close Deals
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                            Transform your sales outreach with intelligent email automation.
                            Generate personalized emails, optimize delivery, and convert more
                            leads into customers.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-indigo-700 hover:scale-[1.02]">
                                Start Free Trial
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-8 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 transition">
                                Watch Demo
                            </button>
                        </div>

                        {/* Trust */}
                        <div className="mt-10 flex gap-8 justify-center lg:justify-start">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Zap className="w-5 h-5 text-indigo-600" />
                                <span className="text-sm">Setup in 2 minutes</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <TrendingUp className="w-5 h-5 text-indigo-600" />
                                <span className="text-sm">3x higher response rates</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT MOCKUP */}
                    <div className="relative max-w-8xl mx-auto p-20 flex justify-center items-center bg-gray-50/50 rounded-[4rem]">

                        {/* 2. Main Container with 'Floating' Animation */}
                        <div className="relative group transition-all duration-500 animate-float-slow">

                            {/* Main Glass Card */}
                            <div className="relative z-10 bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white p-6 sm:p-10 overflow-hidden backdrop-blur-sm">

                                {/* Window Header */}
                                <div className="flex items-center gap-2 mb-8">
                                    <div className="ml-4 h-7 flex-1 bg-gray-50 border border-gray-100 rounded-xl flex items-center px-3">
                                        <div className="w-20 h-1.5 bg-gray-200 rounded-full" />
                                    </div>
                                </div>

                                {/* Profile Section */}
                                <div className="space-y-8">
                                    <div className="flex gap-5 items-center">
                                        <div className="relative">
                                            <div className="w-14 h-14 rounded-2xl bg-linear-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center text-xl font-black shadow-xl shadow-indigo-200 ring-4 ring-indigo-50">
                                                AI
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="h-5 bg-gray-100 rounded-lg w-1/3 mb-2 animate-pulse" />
                                            <div className="h-3 bg-gray-50 rounded-lg w-1/2" />
                                        </div>
                                        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                            <MoreHorizontal className="text-gray-400 w-6 h-6" />
                                        </button>
                                    </div>

                                    {/* AI Suggestion Box */}
                                    <div className="border-t border-gray-50 pt-8 space-y-5">
                                        <div className="relative">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 mb-3 uppercase tracking-widest">
                                                AI Suggestion
                                            </span>
                                            <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                                "Namaste! Based on your mood, I've curated a playlist featuring
                                                <span className="text-indigo-600 font-bold"> Arijit Singh</span> and
                                                <span className="text-violet-600 font-bold"> Kumar Sanu</span>. Syncing now..."
                                            </p>
                                        </div>

                                        <div className="space-y-3 opacity-40">
                                            <div className="h-2 bg-gray-100 rounded-full w-full" />
                                            <div className="h-2 bg-gray-100 rounded-full w-11/12" />
                                        </div>
                                    </div>

                                    {/* Action Area - Higher Z-Index to stay clickable */}
                                    <div className="flex items-center gap-4 pt-4 relative z-30">
                                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_-5px_rgba(79,70,229,0.4)]">
                                            <Send size={18} />
                                            Send Now
                                        </button>
                                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold rounded-2xl border-2 border-gray-100 text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-all active:scale-95">
                                            <Edit3 size={18} />
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* 3. FLOATING BADGE: TOP RIGHT */}
                            <div className="absolute -top-10 -right-10 z-20 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white p-5 animate-float-delayed hover:scale-110 transition-transform">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shadow-inner">
                                        <TrendingUp className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-1">Match</p>
                                        <p className="text-xl font-black text-gray-800">98.2%</p>
                                    </div>
                                </div>
                            </div>

                            {/* 4. FLOATING BADGE: BOTTOM LEFT (Repositioned for clickability) */}
                            <div className="absolute -bottom-12 -left-20 z-20 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white p-5 animate-float hover:scale-110 transition-transform hidden lg:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shadow-inner">
                                        <Sparkles className="w-6 h-6 text-indigo-600 animate-pulse" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-1">Status</p>
                                        <p className="text-sm font-black text-indigo-600">Synced 🎶</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    );
}
