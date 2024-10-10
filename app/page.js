"use client"
import React, { useRef } from 'react';
import Link from 'next/link'; // Import Link from next/link
import About from '@/components/About';
import Services from '@/components/Services';
import { useGSAP } from '@gsap/react';  
import tl from '@/libs/animation';

const Page = () => {
  const container = useRef();

    useGSAP(() => {
        tl.from(container.current.querySelectorAll('.headings'), {
            x: -100,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            oggleActions: "play none none none",
            ease: "power2.inOut",
        },"hero");
        tl.from(container.current.querySelectorAll('.buttons'),{
          opacity:0,
          duration:0.7,
          ease:"power2.inOut",
          oggleActions: "play none none none",
          stagger:0.1,
        })
        tl.from(container.current.querySelectorAll("img"),{
          x:200,
          opacity:0,
          duration:0.7,
          ease:"power2.inOut",
          oggleActions: "play none none none",
        },"hero")
        tl.from(container.current,{backgroundColor:"white", duration:0.5},"hero")
    });
  return (
    <>
      <section ref={container} className="text-gray-600 lg:body-font px-3 md:px-6 lg:px-16 bg-[#51C4EE]">
        <div className="container mx-auto flex flex-col md:flex-row items-center py-16"> {/* Reduced padding for smaller screens */}
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="headings title-font text-5xl sm:text-5xl md:text-5xl lg:text-6xl mb-4 text-white font-extrabold">DREAM BIG</h1> {/* Adjusted text size for various screens */}
            <h1 className="headings title-font text-5xl sm:px-4 sm:text-5xl md:text-5xl lg:text-6xl lg:px-12 mb-4 px-2 md:px-10 font-extrabold text-[#ffffff] text-outline">GROW BIG</h1> {/* Adjusted text size for various screens */}
            <p className="headings mb-8 leading-relaxed text-white underline text-lg sm:text-xl">#1 Digital marketing Agency in Nepal</p> {/* Adjusted text size for smaller screens */}
            <div className="flex justify-center">
              <a href="#contact" className="buttons" >
                <button className="inline-flex text-gray-700 bg-white border-2 border-transparent py-2 px-4 transform duration-500 focus:outline-none hover:bg-transparent hover:border-white hover:text-white rounded text-lg">Book a meeting</button>
              </a>
              <a href="/package" className="buttons" >
                <button className=" ml-4 inline-flex transform duration-500 text-white hover:text-gray-700 bg-transparent border-2 py-2 px-4 focus:outline-none hover:bg-white hover:border-transparent rounded text-lg">Start a project</button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/home1.png" />
          </div>
        </div>
      </section>
      <About/>
      <Services/>
    </>
  );
}

export default Page;