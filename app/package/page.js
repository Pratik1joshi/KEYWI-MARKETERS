import React from 'react';

const pricingPlans = [
    {
        title: "Starter",
        price: "14,999",
        duration: "/mo",
        description: "Get started with our starter features.",
        features: [
            "Platform (facebook, instagram)",
            "Copywriting",
            "Post Scheduling",
            "6 Graphic Designs",
            "1 free photoshoot",
        ]
    },
    {
        title: "Basic",
        price: "24000",
        duration: "/mo",
        description: "Get started with our basic features.",
        features: [
            "Platform (facebook, instagram)",
            "Page setup and optimisation",
            "Marketing Campaign planning",
            "Monthly content calendar",
            "Ad Boosting ($30)",
            "9 Graphic Designs",
            "1 Day per week Photoshoot",
            "Monitoring and KPI based analysis",
            "1 free photoshoot (except the ones mentioned above)",
        ]
    },
    {
        title: "Standard A",
        price: "43,450",
        duration: "/mo",
        description: "Get started with our Standard features.",
        features: [
            "Platform (facebook, instagram)",
            "Page setup and optimisation",
            "Marketing Campaign planning",
            "Monthly content calendar",
            "Ad Boosting ($45)",
            "12 Graphic Designs",
            "2 Day per week Photoshoot",
            "1 Day Videoshoot",
            "Monitoring and KPI based analysis",
            "1 free photoshoot (except the ones mentioned above)",
            "Influencer Marketing (30k - 100k followers on Instagram)",
            "Competitor Analysis"
        ]
    },
    {
        title: "Standard B",
        price: "54,450",
        duration: "/mo",
        description: "Get started with our Standard features.",
        features: [
            "Platform (facebook, instagram)",
            "Page setup and optimisation",
            "Marketing Campaign planning",
            "Monthly content calendar",
            "Ad Boosting ($45)",
            "12 Graphic Designs",
            "2 Day per week Photoshoot",
            "1 Day Videoshoot",
            "Monitoring and KPI based analysis",
            "1 free photoshoot (except the ones mentioned above)",
            "Influencer Marketing (100k+ followers on Instagram)",
            "1 free videoshoot (except the ones mentioned above)",
            "Competitor Analysis"
        ]
    },
    {
        title: "Premium A",
        price: "65,100",
        duration: "/mo",
        description: "Designed for established businesses.",
        features: [
            "Platform (facebook, instagram, tiktok)",
            "Page setup and optimisation",
            "Marketing Campaign planning",
            "Monthly content calendar",
            "Ad Boosting ($60)",
            "15 Graphic Designs",
            "7 Day per week Photoshoot",
            "2 Day Videoshoot",
            "Monitoring and KPI based analysis",
            "Influencer Marketing (30k - 100k followers on Instagram)",
            "Web Development",
            "1 free videoshoot (except the ones mentioned above)",
            "Competitor Analysis"
        ]
    },
    {
        title: "Premium B",
        price: "75,600",
        duration: "/mo",
        description: "Tailored for established businesses.",
        features: [
            "Platform (facebook, instagram, tiktok)",
            "Page setup and optimisation",
            "Marketing Campaign planning",
            "Monthly content calendar",
            "Ad Boosting ($60)",
            "15 Graphic Designs",
            "7 Day per week Photoshoot",
            "2 Day Videoshoot",
            "Monitoring and KPI based analysis",
            "Influencer Marketing (100k+ followers on Instagram)",
            "Web Development",
            "1 free videoshoot (except the ones mentioned above)",
            "Competitor Analysis"
        ]
    }
];

const Page = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-start mb-12">
                    <h2 className="text-4xl font-extrabold text-[#000000] sm:text-5xl">
                        Pricing <span className='text-[#51C4EE]'>Plans</span>
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Simple, transparent pricing for your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="bg-[#ffffff] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-black">{plan.title}</h3>
                                <p className="mt-4 text-gray-500">{plan.description}</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-5xl font-extrabold text-black">Rs. {plan.price}</span>
                                {plan.duration && <span className="text-xl font-medium text-gray-500">{plan.duration}</span>}
                            </div>
                            <ul className="mb-8 space-y-4 text-gray-700">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-black hover:scale-105 transition duration-300 ">
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Page;
