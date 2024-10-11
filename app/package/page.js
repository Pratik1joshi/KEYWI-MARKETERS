import React from 'react'

const page = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-start mb-12">
                    <h2 className="text-4xl font-extrabold text-[#000000] sm:text-5xl">
                        Pricing <span className='text-[#51C4EE]'>Plans</span>
                    </h2>
                    <p className="mt-4 text-xl text-gray-700">
                        Simple, transparent pricing for your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="bg-[#51C4EE] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-black">Basic Package
                            </h3>
                            <p className="mt-4 text-gray-700">Get started with our basic features.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-extrabold text-black">Rs 24000</span>
                            <span className="text-xl font-medium text-gray-700">/mo</span>
                        </div>
                        <ul className="mb-8 space-y-4 text-gray-700">
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Platform (facebook, instagram)
                                </span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Page setup and optimisation
                                </span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Marketing Campaign planning</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Monthly content calendar</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Ad Boosting ($30)</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>9 Graphic Designs</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>1 Day per week Photoshoot</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Monitoring and KPI based analysis</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>1 free photoshoot (except the ones mentioned above)</span>
                            </li>
                        </ul>
                        <a href="#contact" className="block w-full py-3 px-6 text-center rounded-md text-black font-medium bg-white border-2 border-transparent transform duration-500 hover:border-white hover:bg-transparent">
                            Get Started
                        </a>
                    </div>

                    <div className="bg-[#51C4EE] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-black">Starter</h3>
                            <p className="mt-4 text-gray-700">Perfect for small businesses and startups.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-5xl font-extrabold text-black">$49</span>
                            <span className="text-xl font-medium text-gray-700">/mo</span>
                        </div>
                        <ul className="mb-8 space-y-4 text-gray-700">
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>5 user accounts</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>100 transactions per month</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Standard support</span>
                            </li>
                        </ul>
                        <a href="#contact" className="block w-full py-3 px-6 text-center rounded-md text-black font-medium bg-white border-2 border-transparent transform duration-500 hover:border-white hover:bg-transparent">
                            Get Started
                        </a>
                    </div>


                    <div className="bg-[#51C4EE] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-black">Pro</h3>
                            <p className="mt-4 text-gray-700">Ideal for growing businesses and enterprises.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-5xl font-extrabold text-black">$99</span>
                            <span className="text-xl font-medium text-gray-700">/mo</span>
                        </div>
                        <ul className="mb-8 space-y-4 text-gray-700">
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Unlimited user accounts</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Unlimited transactions</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Priority support</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Advanced analytics</span>
                            </li>
                        </ul>
                        <a href="#contact" className="block w-full py-3 px-6 text-center rounded-md text-black font-medium bg-white border-2 border-transparent transform duration-500 hover:border-white hover:bg-transparent">
                            Get Started
                        </a>
                    </div>

                    <div className="bg-[#51C4EE] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-black">Enterprise</h3>
                            <p className="mt-4 text-gray-700">Tailored for large-scale deployments and custom needs.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-5xl font-extrabold text-black">Custom</span>
                        </div>
                        <ul className="mb-8 space-y-4 text-gray-700">
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Dedicated infrastructure</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Custom integrations</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Dedicated support team</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Premium SLAs</span>
                            </li>
                        </ul>
                        <a href="#contact" className="block w-full py-3 px-6 text-center rounded-md text-black font-medium bg-white border-2 border-transparent transform duration-500 hover:border-white hover:bg-transparent">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page