"use client"
import React, { useState } from 'react'
import './Footer.css'
import Link from 'next/link'

const Footer = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setSuccess(false);

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await res.json();
            setLoading(false);

            if (result.success) {
                setSuccess(true);
                // Remove success message after 3 seconds
                setTimeout(() => setSuccess(false), 3000);
            } else {
                setError(true);
                // Remove error message after 3 seconds
                setTimeout(() => setError(false), 3000);
            }
        } catch (err) {
            setLoading(false);
            setError(true);
            // Remove error message after 3 seconds
            setTimeout(() => setError(false), 3000);
        }
    };

    return (
        <footer className="text-gray-600 body-font">
            {/* Newsletter Subscription Section */}
            <div className="bg-gradient-to-r from-blue-50 to-gray-100 py-20">
                <div className="container mx-auto text-center flex flex-col lg:flex-row justify-around items-center">
                    <div className="mb-4 lg:mb-0">
                        <h2 className="text-3xl font-bold mb-2 text-[#51C4EE]">Subscribe to our Newsletter</h2>
                        <p className="text-sm mb-4 text-gray-500">Stay updated with the latest news and offers.</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center w-full lg:w-1/2">
                        <div className="relative w-full md:w-3/4 lg:w-2/3">
                            <input
                                type="email"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="border border-gray-300 rounded-md p-3 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                                required
                            />
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m4-4v8" />
                                </svg>
                            </div>
                        </div>
                        <button onClick={handleSubmit} className="bg-[#51C4EE] text-white rounded-md px-6 py-3 mt-4 md:mt-0 md:ml-4 hover:bg-[#32b7e8] transition duration-300" disabled={loading}
                        >
                            {loading ? 'Subscribing' : 'Subscribe'}
                        </button>
                        {success && <p className="text-green-500 mt-4">You have been subscribed!</p>}
                        {error && <p className="text-red-500 mt-4">Failed to Subscribe.</p>}
                    </div>
                </div>
            </div>

            <div className="container px-20 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-col justify-around gap-8">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <div className="text-3xl font-bold tracking-wider flex justify-center items-center gap-2">
                            <div>KEYWI</div>
                            <div className='text-[#51C4EE]'>MARKETERS</div>
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
                            <img className='icon' src='/facebook-fill.svg' width={25} alt="Facebook" />
                        </span>
                    </div>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Quick Links</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-[#51C4EE] border-transparent border-b-2 hover:border-[#51C4EE] transition duration-300">Home</Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-gray-600 hover:text-[#51C4EE] border-transparent border-b-2 hover:border-[#51C4EE] transition duration-300">About</Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-gray-600 hover:text-[#51C4EE] border-transparent border-b-2 hover:border-[#51C4EE] transition duration-300">Services</Link>
                            </li>
                            <li>
                                <Link href="/package" className="text-gray-600 hover:text-[#51C4EE] border-transparent border-b-2 hover:border-[#51C4EE] transition duration-300">Packages</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact Us</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">keywimarketers@gmail.com</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">9801012409</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">9761619636</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Tridevi Sadak, Kathmandu 44600, Nepal</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Services</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Web Development</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Graphics Designing</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Digital Marketing</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Social Media Management</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Photoshoots & Videoshoots</a>
                            </li>
                        </nav>
                    </div>

                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center">
                    <p className="text-gray-500 text-sm text-center">© 2024 KEYWI MARKETERS —
                        <a href="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@keywimarketers</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer