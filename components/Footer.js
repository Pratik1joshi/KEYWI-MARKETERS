import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            {/* Newsletter Subscription Section */}
            <div className="bg-gray-100 py-20">
                <div className="container mx-auto text-center flex justify-around">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
                        <p className="text-sm mb-4">Stay updated with the latest news and offers.</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border border-gray-300 rounded-md p-2 mb-2 md:mb-0 md:mr-2 w-full md:w-1/2 lg:w-1/3" // Adjusted width classes
                            required
                        />
                        <button className="bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-700 transition duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="container px-20 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col gap-8">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <div className="text-3xl font-bold tracking-wider flex justify-center items-center gap-2">
                            <div>YOUR</div>
                            <div className='text-green-600'>MARKETING</div>
                        </div>
                    </a>
                    <div className='flex items-center gap-4 py-4'>
                        <span className='icon cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-125'>
                            <img src='/instagram-line.svg' width={25} alt="Instagram" />
                        </span>
                        <span className='icon cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125'>
                            <img src='/linkedin-fill.svg' width={25} alt="LinkedIn" />
                        </span>
                        <span className='icon cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125'>
                            <img className='icon' src='/twitter-x-fill.svg' width={25} alt="Twitter" />
                        </span>
                        <span className='icon cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125'>
                            <img className='icon' src='/facebook-fill.svg' width={25} alt="Twitter" />
                        </span>
                    </div>
                </div>
                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center">
                    <p class="text-gray-500 text-sm text-center">© 2024 YOUR MARKETING —
                        <a href="#" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@yourmarketing</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer