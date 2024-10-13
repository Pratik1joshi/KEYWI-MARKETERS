"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const textRef = useRef();

    useGSAP(() => {
        const lines = textRef.current.querySelectorAll('.lines');
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 65%',
                end: 'top 0%',
                toggleActions: 'play none none none',
                markers: false,
                scrub: 1,
                once: true,
            },
        })

        tl2.from(textRef.current.querySelectorAll("h1"), {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.5,
            ease: "power2.inOut",
            toggleActions: "play none none none",
        })

        tl2.from(textRef.current.querySelectorAll("img"), {
            opacity: 0,
            y: 80,
            duration: 1,
            ease: 'power2.out',
            toggleActions: 'play none none none',
        }, "aboutSec")

        tl2.from(lines, {
            opacity: 0,
            y: 30,     // Move the text slightly up while fading in
            duration: 1,
            stagger: 0.2, // Stagger animation of each line
            ease: 'power2.out',
            toggleActions: 'play none none none',
        }, "aboutSec");
    })

    return (
        <section id='about' className="text-gray-800 body-font overflow-hidden">
            <div ref={textRef} className="container px-5 py-16 mx-auto">
                <h1 className='lg:text-5xl font-bold md:text-5xl md:py-4 py-6 text-4xl lg:py-2 lg:px-28'>About Keywi <span className='text-[#51C4EE]'>Marketers</span></h1>
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/about.png" />
                    <div className="lg:w-1/2 w-full lg:pl-10 text-xl lg:py-6 mt-6 lg:mt-0">
                        <p>
                            <span className="lines">Founded in 2024, Keywi Marketers is a client-focused marketing agency dedicated to delivering</span>
                            <span className="lines">personalized, results-driven solutions for businesses of all sizes. We offer a comprehensive</span>
                            <span className="lines">range of marketing services, both digital and traditional, ensuring that every campaign is tailored</span>
                            <span className="lines">to your unique needs while remaining budget-friendly.</span><br /><br />
                            <span className="lines">Specializing in web development, social media management, and influencer marketing, we</span>
                            <span className="lines">blend creativity, technology, and strategic insights to help your brand thrive. At Keywi Marketers,</span>
                            <span className="lines">we pride ourselves on offering flexible, affordable packages designed to provide maximum value</span>
                            <span className="lines">without compromising quality.</span><br /><br />
                            <span className="lines">Our company mottos, &quot;Your Key to Nepal&quot; and &quot;Dream Big, Grow Big&quot; with us, reflect our</span>
                            <span className="lines">commitment to unlocking new opportunities for your business and empowering you to reach</span>
                            <span className="lines">your full potential. We work closely with our clients to create client-oriented strategies that</span>
                            <span className="lines">resonate with their audience, driving measurable growth and success.</span><br /><br />
                            <span className="lines">Let Keywi Marketers be your partner in navigating the marketing landscape and achieving big</span>
                            <span className="lines">dreams!</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
