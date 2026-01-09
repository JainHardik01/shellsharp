import saasImg from '/assets/image/saas.png'
import forSalesTeamsImg from '/assets/image/ForSalesTeams.png'
import forAgenciesImg from '/assets/image/ForAgencies.png'
import forFreelancersImg from '/assets/image/ForFreelancers.png'
import forEnterpriseOpsImg from '/assets/image/ForEnterpriseOps.png'
import eCommerceImg from '/assets/image/ForE-Commerce.png'



const Features = () => {

    const solutions = [
        {
            img: saasImg,
            title: "For SaaS Products",
            desc: "Deliver onboarding, updates, and retention flows automatically with seamless AI-powered workflows.",
        },
        {
            img: forSalesTeamsImg,
            title: "For Sales Teams",
            desc: "Accelerate outreach with AI-generated, context-aware emails at scale.",
        },
        {
            img: forAgenciesImg,
            title: "For Agencies",
            desc: "Automate content workflows for multiple clients without compromising personalization.",
        },
        {
            img: eCommerceImg,
            title: "For E-Commerce",
            desc: "Recover carts, upsell, and reactivate customers on autopilot.",
        },
        {
            img: forFreelancersImg,
            title: "For Freelancers",
            desc: "Land more gigs with polished outreach and consistent follow-ups.",
        },
        {
            img: forEnterpriseOpsImg,
            title: "For Enterprise Ops",
            desc: "Ensure compliance, localization, and brand consistency at global scale.",
        },
    ];



    return (
        <>
            <section className="bg-white py-16 sm:py-18">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-xl font-bold tracking-widest text-blue-600 mb-3">
                            OUR WORK
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Solutions Designed to Deliver Results
                        </h2>
                        <p className="text-lg text-gray-600">
                            SellSharp adapts to every business model — see how it fits yours.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid gap-8 md:grid-cols-2 ">
                        {solutions.map((item, index) => (
                            <div
                                key={index}
                                className="group flex items-start gap-6 p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-500 hover:bg-linear-to-br hover:from-blue-50 hover:to-white">
                                {/* Image Container */}
                                <div className="shrink-0 w-34 h-34 rounded-xl bg-gray-50 flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-100">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 lg:gap-24 pt-10 md:pt-18 justify-items-center items-center opacity-80 max-w-6xl mx-auto px-4">

                        <img
                            src="/assets/Nasscom-logo.png"
                            alt="Nasscom Logo"
                            className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
                        />

                        <img
                            src="/assets/gesia.png"
                            alt="Gesia Logo"
                            className="h-16 md:h-24 w-auto object-contain hover:scale-110 transition-transform duration-300"
                        />

                        <img
                            src="/assets/isf.png"
                            alt="ISF Logo"
                            className="h-16 md:h-24 w-auto object-contain hover:scale-110 transition-transform duration-300"
                        />

                    </div>

                </div>
            </section>

        </>
    )
}

export default Features
