"use client"
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Page = () => {
    const downloadRef = useRef(null);
    const usersRef = useRef(null);
    const filesRef = useRef(null);
    const placesRef = useRef(null);
    const textRef = useRef();
    const happyRef = useRef();

    useGSAP(() => {
        const texts = textRef.current.querySelectorAll('.texts');
        const tl4 = gsap.timeline()
        tl4.from(textRef.current.querySelectorAll(".heading"), {
            opacity: 0,
            x: -200,
            duration: 0.7,
            toggleActions: "play none none none",
        })

        tl4.from(textRef.current.querySelectorAll(".whyus"), {
            opacity: 0,
            x: -100,
            duration: 0.7,
            toggleActions: "play none none none",
        }, "whyus")

        tl4.from(texts, {
            opacity: 0,
            x: 100,
            duration: 0.4,
            ease: "power2.inOut",
            stagger: 0.5,
            toggleActions: "play none none none",

        }, "whyus")

        const divs = happyRef.current.querySelectorAll('.workDivs');
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: happyRef.current,
                start: 'top 65%',
                end: 'top 0%',
                markers: false,
                once:true,
                // scrub: 2
            },
        })

        tl2.from(happyRef.current.querySelectorAll(".ourworks"), {
            opacity: 0,
            y: 30,
            duration: 0.2,
            stagger:0.5,
            ease: "power2.inOut"
        })

        tl2.from(divs, {
            opacity: 0,
            // x: -200,
            y:30,
            duration: 0.8,
            stagger:0.4,
            ease: 'power2.out'
        })


    })
    useGSAP(() => {
        const animateValue = ( ref, start, end, duration) => {
            const tl3 = gsap.timeline({
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    markers: false,
                    once: true,
                },
            })
            tl3.fromTo(ref.current,
                { innerText: start },
                {
                    innerText: end,
                    duration: duration,
                    ease: 'power1.out',
                    snap: { innerText: 1 },  // Round the number to an integer
                    onUpdate: function () {
                        if (end == 500) {
                            ref.current.innerText = Math.ceil(ref.current.innerText) + 'K+';
                        } else {
                            ref.current.innerText = Math.ceil(ref.current.innerText) + '+';
                        }

                    }
                }
            );
        };

        // Apply the animation to each stat
        animateValue(downloadRef, 0, 20, 1.5);
        animateValue(usersRef, 0, 19, 1.5);
        animateValue(filesRef, 0, 500, 2);
        animateValue(placesRef, 0, 300, 2);

    });

    return (
        <section ref={textRef} className="text-gray-800 body-font overflow-hidden">
            <div className="container px-5 py-10 mx-auto flex flex-col gap-10">
                <h1 className='heading lg:text-5xl font-bold md:text-5xl md:py-4 py-4 text-4xl lg:py-2 lg:px-28'>Portfolio</h1>
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="whyus lg:w-1/2 w-4/5 lg:h-auto h-72 lg:-mt-10 object-cover object-center rounded" src="/whyus.png" />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className='texts text-3xl font-bold sm:text-2xl py-10'>Why Keywi <span className='text-[#51C4EE]'>Marketers?</span></h2>
                        <span className='texts text-lg md:text-xl lg:text-xl'>Keywi Marketers is your trusted partner for tailored, results-driven marketing solutions.</span><span className='texts text-lg md:text-xl lg:text-xl'> We offer a wide range of services, from web development to social media management and influencer marketing, all designed to meet your unique business goals.</span><span className='texts text-lg md:text-xl lg:text-xl'> With flexible, budget-friendly packages, we deliver maximum value without compromising quality.</span><span className='texts text-lg md:text-xl lg:text-xl'> At Keywi Marketers, we combine creativity and strategy to connect with your audience and drive real growth. Let us help you unlock new opportunities and elevate your brand.</span>
                    </div>
                </div>
                <div className="happy flex flex-wrap -m-4 text-center md:px-8 px-4 lg:px-20">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24" strokeWidth="2" fill="rgba(81,196,238,1)"><path d="M14.9968 2L21 8L21.0012 12.2606C20.4221 11.7806 19.7434 11.4178 19.0008 11.2074L19 9H14V4H5V20L10.0591 20.0009C10.1761 20.7365 10.4622 21.4172 10.8771 22.0006L3.9934 22C3.48412 22 3.06409 21.6171 3.00669 21.1239L3 21.0082V2.9918C3 2.49363 3.38689 2.06546 3.88533 2.00683L4.00221 2H14.9968ZM17.5 13C19.433 13 21 14.567 21 16.5L20.9985 16.6033C22.1531 16.9285 23 17.9903 23 19.25C23 20.7125 21.8583 21.9084 20.4175 21.995L20.25 22H14.75L14.5825 21.995C13.1417 21.9084 12 20.7125 12 19.25C12 17.99 12.8474 16.9279 14.0034 16.6025L14 16.5C14 14.567 15.567 13 17.5 13ZM17.5 15C16.769 15 16.1602 15.5229 16.027 16.215L16.0069 16.3555L16 16.5V18.12L14.5559 18.5256C14.1558 18.6328 13.9183 19.044 14.0256 19.4441C14.105 19.7405 14.3512 19.9476 14.6362 19.9915L14.7446 20.0002H20.2554C20.5846 19.998 20.8851 19.7775 20.9744 19.4441C21.0817 19.044 20.8442 18.6328 20.4441 18.5256L19.4322 18.2432L19 18.12V16.5L18.9931 16.3555C18.9204 15.5949 18.2797 15 17.5 15Z"></path></svg>
                            <h2 ref={downloadRef} className="title-font font-medium text-3xl text-gray-900">0</h2>
                            <p className="leading-relaxed">Projects</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-[#51C4EE] w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                            </svg>
                            <h2 ref={usersRef} className="title-font font-medium text-3xl text-gray-900">0</h2>
                            <p className="leading-relaxed">Happy Clients</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24" strokeWidth="2" fill="rgba(81,196,238,1)"><path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path></svg>
                            <h2 ref={filesRef} className="title-font font-medium text-3xl text-gray-900">0</h2>
                            <p className="leading-relaxed">Lines of Code</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24" strokeWidth="2" fill="rgba(81,196,238,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path></svg>
                            <h2 ref={placesRef} className="title-font font-medium text-3xl text-gray-900">0</h2>
                            <p className="leading-relaxed">Hours of Support</p>
                        </div>
                    </div>
                </div>
            </div>

            <section ref={happyRef} className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="ourworks sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Works</h1>
                        <p className="ourworks lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them man bun deep jianbing selfies heirloom.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="workDivs lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative h-80"> 
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/fresco.jpg"/>
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Marketing</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Fresco Himalayan</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="workDivs lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative h-80">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/unclesbakery.jpg"/>
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Design</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Uncle&rsquo;s Bakery</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="workDivs lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative h-80">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/nepalAki.jpg"/>
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Website</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Cocina Mitho Chha</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="workDivs lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative h-80">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362"/>
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="workDivs lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative h-80">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365"/>
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="workDivs lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative h-80">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366"/>
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container flex flex-col justify-center items-center px-5 py-24 mx-auto">
                    <h2 className='text-3xl font-bold py-10 text-[#51C4EE]'>Testimonial</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90&rsquo;s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                <p className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90&rsquo;s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                                <p className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90&rsquo;s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                                <p className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Page;