
const BuildByExpert = () => {
    return (
        <section className="bg-gray-50 py-15 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Built by Experts, Powered by AI
                    </h2>
                    <p className="text-lg text-gray-600">
                        SellSharp combines proven sales principles with cutting-edge AI to
                        help your team convert faster. From startups to enterprises, we help
                        scale outreach and close more deals.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-3">

                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition p-8 text-center">
                        <img
                            src="/assets/ai-learning.png"
                            alt="AI Learning"
                            className="mx-auto mb-6 h-48"
                        />
                        <p className="text-gray-600">
                            Our algorithms continuously learn from high-performing campaigns
                            across industries.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition p-8 text-center">
                        <img
                            src="/assets/analytics.png"
                            alt="Analytics"
                            className="mx-auto mb-6 h-48"
                        />
                        <p className="text-gray-600">
                            Powerful analytics and smart suggestions help you iterate faster
                            and better.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition p-8 text-center">
                        <img
                            src="/assets/automation.png"
                            alt="Automation"
                            className="mx-auto mb-6 h-48"
                        />
                        <p className="text-gray-600">
                            Predictive workflows and automation reduce manual effort and
                            improve efficiency.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default BuildByExpert
