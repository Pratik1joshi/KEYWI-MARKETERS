"use client"
import React, { useState } from 'react'; // Added useState import



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
    // };
    // gsap.registerPlugin(useGSAP);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-lg rounded-lg z-20"> {/* Added fixed positioning */}
            <div className="flex justify-between items-center py-8 px-10"> {/* Reduced padding for small screens */}
                <div className="text-3xl lg:ms-28 font-bold tracking-wider flex justify-center items-center gap-2">
                    <div>KEYWI</div> <div className='text-[#51C4EE]'>MARKETERS</div>
                </div>
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? ( // Conditional rendering for close icon
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                            </svg>
                        ) : ( // Menu icon when closed
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                            </svg>
                        )}
                    </button>
                </div>

                <div className={`coffee absolute top-20 w-auto right-0  bg-white shadow-lg px-12 p-4 flex flex-col gap-8 items-center justify-center transition ease-in-out duration-500 rounded-lg z-10 ${isMenuOpen ? 'block' : 'hidden'} lg:static lg:flex lg:flex-row lg:justify-end lg:items-center lg:gap-8 lg:p-0 lg:shadow-none`}>
                    <a href="#" className="block lg:inline-block text-center lg:text-left border-transparent border-b-2 lg:border-transparent hover:border-[#51C4EE] hover:text-[#51C4EE] transition duration-300">Home</a>
                    <a href="#" className="block lg:inline-block text-center lg:text-left border-transparent border-b-2 lg:border-transparent hover:border-[#51C4EE] hover:text-[#51C4EE] transition duration-300">About</a>
                    <a href="#" className="block lg:inline-block text-center lg:text-left border-transparent border-b-2 lg:border-transparent hover:border-[#51C4EE] hover:text-[#51C4EE] transition duration-300">Services</a>
                    <a href="#" className="block lg:inline-block text-center lg:text-left border-transparent border-b-2 lg:border-transparent hover:border-[#51C4EE] hover:text-[#51C4EE] transition duration-300">Portfolio</a>
                    <a href="#" className="block lg:inline-block text-center lg:text-left border-transparent border-b-2 lg:border-transparent hover:border-[#51C4EE] hover:text-[#51C4EE] transition duration-300">Packages</a>
                    <a href="#" className="block lg:inline-block text-center lg:text-left border-transparent border-b-2 lg:border-transparent hover:border-[#51C4EE] hover:text-[#51C4EE] transition duration-300">Contact Us</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
