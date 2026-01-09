const CTA = () => {

    return (
        <>
            <section className="relative py-28 bg-white overflow-hidden">

                {/* Background Blur Shapes */}
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-150 h-150 bg-indigo-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-100 h-100 bg-purple-500/20 rounded-full blur-3xl"></div>

                <div className="relative max-w-4xl mx-auto px-6 text-center">

                    {/* Badge */}
                    <span className="inline-flex items-center px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs font-semibold tracking-wide mb-6">
                        START YOUR JOURNEY
                    </span>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Transform Sales Outreach <br className="hidden sm:block" />
                        With Intelligent AI
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                        Move beyond templates. Let AI craft relevant, timely, and human-like
                        conversations that consistently drive replies and revenue.
                    </p>

                    {/* CTA Panel */}
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl px-8 py-6 shadow-lg">
                        <button className="px-8 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-medium hover:opacity-90 transition">
                            Get Started Free
                        </button>
                    </div>

                    {/* Trust Line */}
                    <p className="mt-6 text-sm text-gray-500">
                        No credit card required · Setup in minutes
                    </p>
                </div>
            </section>

        </>
    );
}

export default CTA
