const Tailored = () => {
    return (
        <>
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Tailored Outreach for <br />
                            Maximum Impact
                        </h1>

                        <p className="text-lg text-gray-600 max-w-xl mb-10">
                            No more one-size-fits-all templates. SellSharp delivers personalized,
                            high-converting messages that reflect your brand voice, customer
                            pain points, and each stage of the sales cycle.
                        </p>

                        <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition">
                            Get Started Today
                            <span className="text-xl">→</span>
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="relative group flex justify-center lg:justify-end items-center p-4">

                        {/* 1. Background Glow Effect (The "Aura") */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-indigo-500/30 transition-colors duration-700" />

                        {/* 2. The Image Container with Floating Animation */}
                        <div className="relative animate-float transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-2">
                            <img
                                src="/assets/ai-envelope.png"
                                alt="AI Outreach"
                                className="w-full max-w-md drop-shadow-[0_20px_50px_rgba(79,70,229,0.3)] filter contrast-[1.05]"
                            />

                            {/* 3. Optional: Subtle Glass Overlay or Accent */}
                            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 pointer-events-none" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Tailored
