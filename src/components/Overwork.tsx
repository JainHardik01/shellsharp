

const Overwork = () => {
    const features = [
        {
            title: "AI Email Generator",
            description:
                "Create persuasive, conversion-focused emails with our AI trained on millions of successful sales emails.",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8v8M8 12h8" />
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                </svg>
            ),
        },
        {
            title: "Smart Personalization",
            description:
                "Auto-insert prospect names, roles, company details, and industry-specific content for higher engagement.",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="7" r="4" />
                    <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
                </svg>
            ),
        },
        {
            title: "Tone & Style Control",
            description:
                "Choose from friendly, persuasive, direct, or custom tones to match your brand voice perfectly.",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6h16M4 12h10M4 18h6" />
                </svg>
            ),
        },
        {
            title: "1-Click Campaigns",
            description:
                "Launch entire email sequences with optimized timing and follow-ups in just one click.",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l6 7-6 7" />
                </svg>
            ),
        },
        {
            title: "Performance Analytics",
            description:
                "Track opens, clicks, replies, and conversions with real-time dashboards and insights.",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 20V10M10 20V4M16 20v-6" />
                </svg>
            ),
        },
        {
            title: "Lead Scoring AI",
            description:
                "Identify your hottest prospects with AI-powered behavior scoring and prioritization.",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Everything You Need to{" "}
                        <span className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                            Close More Deals
                        </span>
                    </h2>
                    <p className="text-lg text-gray-500">
                        Powerful features designed to streamline your sales process and maximize conversions.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-gray-200 bg-white p-7transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-8"
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Overwork
