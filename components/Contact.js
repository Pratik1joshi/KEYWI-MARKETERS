'use client';
import React, { useState } from 'react';

const Contact = () => {
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
            const res = await fetch('/api/sendMail', {
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
        <section id='contact' className="text-gray-600 px-14 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1082868073436!2d85.31139047509384!3d27.71394267617877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fd7f4fbae7%3A0x8713d1151e276d79!2sTridevi%20Sadak%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1728371771578!5m2!1sen!2snp"
                        style={{ filter: 'grayscale(0.5) contrast(1) opacity(0.6)' }}
                    ></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">Tridevi Sadak, Kathmandu 44600, Nepal</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a className="text-[#51C4EE] leading-relaxed">keywimarketers@gmail.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">9801012409 <br />9761619636</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-700 text-4xl sm:text-5xl lg:text-5xl mb-5 font-bold title-font">CONTACT <span className='text-[#51C4EE]'>US</span></h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Let's Talk</p>

                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-[#51C4EE] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                required
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-[#51C4EE] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                required
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-[#51C4EE] focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                required
                            />
                        </div>
                        <div className='flex flex-col sm:gap-4 sm:flex-row'>

                            <button
                                type="submit"
                                className="text-white bg-[#51C4EE] border-2 border-transparent py-2 px-6 focus:outline-none hover:border-[#51C4EE] hover:text-gray-600 hover:bg-[#ffffff] rounded text-lg"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send'}
                            </button>
                              
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;