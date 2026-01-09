import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add a shadow when the user scrolls down
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm"
                    : "bg-transparent border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo with a subtle hover pulse */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                            <span className="text-white font-black text-xl">S</span>
                        </div>
                        <span className="text-2xl font-extrabold tracking-tight text-gray-900">
                            Sell<span className="text-indigo-600">Sharp</span>
                        </span>
                    </div>

                    {/* Desktop Navigation - Animated Underline */}
                    <nav className="hidden md:flex items-center gap-10">
                        {["Features", "Pricing", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="group relative text-sm font-semibold text-gray-600 transition hover:text-indigo-600"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA - Added Ring Offset and fixed typo */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition">
                            Sign In
                        </button>
                        <button className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:scale-105 active:scale-95 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button - Morphing Icon */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative p-2 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                            <span className={`h-0.5 w-6 bg-current rounded-full transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`h-0.5 w-6 bg-current rounded-full transition-all ${isOpen ? "opacity-0" : ""}`} />
                            <span className={`h-0.5 w-6 bg-current rounded-full transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Smoother Slide & Fade */}
            <div
                className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-4 opacity-0 invisible"
                    }`}
            >
                <nav className="flex flex-col gap-2 p-6">
                    {["Features", "Pricing", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="px-4 py-3 text-lg font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="mt-4 w-full rounded-xl bg-indigo-600 py-4 text-base font-bold text-white shadow-xl shadow-indigo-100 active:scale-[0.98] transition-transform">
                        Login Today
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;