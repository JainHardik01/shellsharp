const Footer = () => {
    return (
        <>
            <footer className="bg-slate-900 text-gray-300 pt-20">
                <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">

                    {/* Brand Card */}
                    <div className="bg-slate-800 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            SellSharp
                        </h3>
                        <p className="text-sm text-gray-400">
                            AI-powered outreach built to help modern sales teams scale smarter,
                            faster, and more efficiently.
                        </p>
                    </div>

                    {/* Value Props */}
                    <div className="bg-slate-800 rounded-2xl p-6">
                        <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                            What We Do
                        </h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>• AI Email Generation</li>
                            <li>• Personalization Engine</li>
                            <li>• Smart Campaign Automation</li>
                        </ul>
                    </div>

                    {/* Trust / Logos */}
                    <div className="bg-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                        <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                            Trusted By
                        </h4>

                        <div className="flex gap-6 items-center opacity-80">
                            <img src="/assets/Nasscom-logo.png" className="h-7" />
                            <img src="/assets/gesia.png" className="h-18" />
                            <img src="/assets/isf.png" className="h-18" />
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 border-t border-slate-800 py-6 text-center text-sm text-gray-500">
                    © 2025 SellSharp · Crafted with care ·{" "}
                    <span className="hover:text-white cursor-pointer underline">
                        Privacy Policy
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer
