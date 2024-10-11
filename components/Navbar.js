"use client"
import React, { useRef, useState } from 'react'; // Added useState import
import Link from 'next/link'; // Import Link from next/link
import { usePathname } from 'next/navigation'; // Import usePathname
import { useGSAP } from '@gsap/react';
import tl from '@/libs/animation';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
    const pathname = usePathname(); // Get the current pathname

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const container = useRef();

    useGSAP(() => {
        tl.from(container.current.querySelectorAll('.items'), {
            y: -40,
            opacity: 0,
            duration: 0.7,
            delay: 0.5,
            stagger: 0.1,
            ease: "power2.inOut",
            toggleActions: "play none none none",
            once:true,
        });
    });

    return (
        <nav ref={container} className="fixed top-0 left-0 w-full bg-white shadow-lg rounded-lg z-20">
            <div className="flex justify-between items-center py-4 px-10">
                <div className="items px:6 sm:px-8 md:px-14 lg:px-20">
                    <Link href="/"><img className='w-36 h-14 cursor-pointer' src='/logo1.png'></img></Link>
                </div>
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="items w-6 h-6">
                                <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="items w-6 h-6">
                                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                            </svg>
                        )}
                    </button>
                </div>

                <div className={`coffee absolute top-20 w-auto right-0 bg-white shadow-lg px-12 p-4 flex flex-col gap-8 items-center justify-center transition ease-in-out duration-500 rounded-lg z-10 ${isMenuOpen ? 'block' : 'hidden'} lg:static lg:flex lg:flex-row lg:justify-end lg:items-center lg:gap-8 lg:p-0 lg:shadow-none`}>
                    <span className="items">
                        <Link href="/" className={`block lg:inline-block text-center lg:text-left border-transparent border-b-2 lg:border-transparent transition duration-300 ${pathname === '/' ? 'text-[#51C4EE]' : 'hover:border-[#51C4EE] hover:text-[#51C4EE]'}`}>Home</Link>
                    </span>
                    <span className="items">
                        <Link href="/#about" className={`block lg:inline-block text-center lg:text-left border-transparent border-b-2 lg:border-transparent transition duration-300 ${pathname === '#about' ? 'text-[#51C4EE]' : 'hover:border-[#51C4EE] hover:text-[#51C4EE]'}`}>About</Link>
                    </span>
                    <span className="items">
                        <Link href="/#services" className={`block lg:inline-block text-center lg:text-left border-transparent border-b-2 lg:border-transparent transition duration-300 ${pathname === '#services' ? 'text-[#51C4EE]' : 'hover:border-[#51C4EE] hover:text-[#51C4EE]'}`}>Services</Link>
                    </span>
                    <span className="items">
                        <Link href="/portfolio" className={`block lg:inline-block text-center lg:text-left border-transparent border-b-2 lg:border-transparent transition duration-300 ${pathname === '/portfolio' ? 'text-[#51C4EE]' : 'hover:border-[#51C4EE] hover:text-[#51C4EE]'}`}>Portfolio</Link>
                    </span>
                    <span className="items">
                        <Link href="/package" className={`block lg:inline-block text-center lg:text-left border-transparent border-b-2 lg:border-transparent transition duration-300 ${pathname === '/package' ? 'text-[#51C4EE]' : 'hover:border-[#51C4EE] hover:text-[#51C4EE]'}`}>Packages</Link>
                    </span>
                    <span className="items">
                        <Link href="#contact" className={`block lg:inline-block text-center lg:text-left border-transparent border-b-2 lg:border-transparent transition duration-300 ${pathname === '#contact' ? 'text-[#51C4EE]' : 'hover:border-[#51C4EE] hover:text-[#51C4EE]'}`}>Contact Us</Link>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;