"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useState } from 'react'; // Added useState import

gsap.registerPlugin(ScrollTrigger);
const Services = () => {

    const boxRef = useRef();

    useGSAP(() => {
        const lines = boxRef.current.querySelectorAll('.lines');
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: boxRef.current,
                start: 'top 65%',
                end: 'top 0%',
                // toggleActions: 'play none none none',
                markers: false,
                scrub: 2
            },
        })

        tl2.from(boxRef.current.querySelectorAll("h1"), {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.5,
            ease: "power2.inOut"
        })

        tl2.from(boxRef.current.querySelectorAll("img"), {
            opacity: 0,
            y: 80,
            duration: 1,
            ease: 'power2.out'
        }, "aboutSec")

        tl2.from(lines, {

            opacity: 0,
            y: 30,     // Move the text slightly up while fading in
            duration: 1,
            stagger: 0.2, // Stagger animation of each line
            ease: 'power2.out'
        }, "aboutSec");
    })

    return (
        <section ref={boxRef} id='services' className="text-gray-600 body-font">
            <div className="container lg:px-32 px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-start justify-start ">
                    <h1 className="sm:text-5xl text-4xl lg:text-5xl font-bold title-font mb-2 text-gray-900">Our <span className='text-[#51C4EE]'>Services</span></h1>
                    <p className="lg:w-full w-full leading-relaxed text-gray-500">At Keywi Marketers, we provide a comprehensive range of marketing solutions tailored to meet the unique needs of your business.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {servicesData.map((service, index) => { // Loop through services data
                        const [isExpanded, setIsExpanded] = useState(false); // State for expansion
                        return (
                            <div className="xl:w-1/3 md:w-1/2 p-4" key={index}>
                                <div className="border border-gray-200 p-6 rounded-lg group hover:shadow-lg transition duration-300 ease-in-out"> {/* Added group class */}
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#51C4EE] mb-4 transition duration-300 ease-in-out group-hover:border-2 group-hover:bg-white group-hover:border-[#51C4EE] group-hover:rounded-full"> {/* Added hover border classes */}
                                        {service.icon}
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{service.title}</h2>
                                    <p className="leading-relaxed text-base">{service.description}</p>
                                    <button onClick={() => setIsExpanded(!isExpanded)} className="mt-4 text-indigo-500">
                                        {isExpanded ? (
                                            <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(81,196,238,1)"><path d="M12 8.36853L20.9679 13.1162L20.0321 14.8838L12 10.6315L3.96788 14.8838L3.0321 13.1162L12 8.36853Z"></path></svg>
                                        ) : (

                                            <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(81,196,238,1)"><path d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.96788 9.11619L3.0321 10.8838L12 15.6315Z"></path></svg>
                                        )}
                                    </button>
                                    {isExpanded && ( // Conditionally render extra paragraph
                                        <p className="mt-2 text-gray-500" dangerouslySetInnerHTML={{ __html: service.extraInfo }} />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    )
}

// Sample data for services
const servicesData = [
    {
        title: "Web Development",
        icon: <svg width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(81,196,238,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path></svg>,
        description: "Our web development team creates custom, SEO-optimized websites that are not just visually appealing, but are designed to convert visitors into loyal customers. We stay ahead of trends, ensuring your website is responsive, fast, and aligned with your business goals.",
        extraInfo: "Why we’re the best:<br>● Expertise in both front-end and back-end development<br>● SEO-focused design for better rankings<br>● Fully customized solutions, no templates"
    },
    {
        title: "Social Media Management",
        icon: <svg width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(81,196,238,1)"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>,
        description: "We craft engaging social media strategies tailored to your brand’s voice, designed to grow your online presence. From content creation to paid ads, we help you connect with your audience on platforms like Facebook, Instagram, LinkedIn, and more.",
        extraInfo: "Why we’re the best:<br>● Creative, tailored content that resonates<br>● Proven track record of growing engagement<br>● Expertise across all major platforms"
    },
    {
        title: "Influencer Marketing",
        icon: <svg width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(81,196,238,1)"><path d="M21 11.6458V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11.6458C2.37764 10.9407 2 10.0144 2 9V3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V9C22 10.0144 21.6224 10.9407 21 11.6458ZM19 12.874C18.6804 12.9562 18.3453 13 18 13C16.8053 13 15.7329 12.4762 15 11.6458C14.2671 12.4762 13.1947 13 12 13C10.8053 13 9.73294 12.4762 9 11.6458C8.26706 12.4762 7.19469 13 6 13C5.6547 13 5.31962 12.9562 5 12.874V20H19V12.874ZM14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 10.1046 16.8954 11 18 11C19.1046 11 20 10.1046 20 9V4H4V9C4 10.1046 4.89543 11 6 11C7.10457 11 8 10.1046 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9Z"></path></svg>,
        description: "Our extensive network of influencers allows us to create strategic, authentic partnerships that amplify your brand. We ensure that your influencer collaborations are aligned with your target audience for maximum impact.",
        extraInfo: "Why we’re the best:<br>● Strong connections with influencers across industries<br>● Focus on authentic, high-impact collaborations<br>● Metrics-driven approach for measurable results"
    },
    {
        title: "Search Engine Optimization (SEO)",
        icon: <svg width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(81,196,238,1)"><path d="M8 3C4.13401 3 1 6.13401 1 10C1 13.866 4.13401 17 8 17H9.07089C9.02417 16.6734 9 16.3395 9 16C9 15.6605 9.02417 15.3266 9.07089 15H8C5.23858 15 3 12.7614 3 10C3 7.23858 5.23858 5 8 5H16C18.7614 5 21 7.23858 21 10C21 10.3428 20.9655 10.6775 20.8998 11.0008C21.4853 11.5748 21.9704 12.2508 22.3264 13C22.7583 12.0907 23 11.0736 23 10C23 6.13401 19.866 3 16 3H8ZM16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13ZM11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16C21 17.0191 20.6951 17.967 20.1716 18.7574L22.7071 21.2929L21.2929 22.7071L18.7574 20.1716C17.967 20.6951 17.0191 21 16 21C13.2386 21 11 18.7614 11 16Z"></path></svg>,
        description: "Our SEO strategies are designed to drive long-term success. Through in-depth keyword research, content optimization, and technical SEO, we help your brand rank higher in search engine results, increasing your visibility and conversions.",
        extraInfo: "Why we’re the best:<br>● Data-driven SEO strategies<br>● Comprehensive approach to on-page, off-page, and technical SEO<br>● Focus on organic traffic growth and higher conversions"
    },
    {
        title: "Digital Marketing",
        icon: <svg width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(81,196,238,1)"><path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM4.03961 11H19.9604L19.3604 8H4.63961L4.03961 11ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"></path></svg>,
        description: "From PPC to content marketing, our digital marketing services are crafted to generate leads and increase your online visibility. We employ data-driven tactics that help you reach the right audience and maximize your ROI.",
        extraInfo: "Why we’re the best:<br>● Targeted campaigns for maximum impact<br>● Continuous monitoring and optimization<br>● Expertise across PPC, email, and content marketing"
    },
    {
        title: "Traditional Marketing",
        icon: <svg width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(81,196,238,1)"><path d="M21 13.2422V20H22V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422ZM19 13.9725C18.8358 13.9907 18.669 14 18.5 14C17.2409 14 16.0789 13.478 15.25 12.6132C14.4211 13.478 13.2591 14 12 14C10.7409 14 9.5789 13.478 8.75 12.6132C7.9211 13.478 6.75911 14 5.5 14C5.331 14 5.16417 13.9907 5 13.9725V20H19V13.9725ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z"></path></svg>,
        description: "We offer traditional marketing services, including print ads, TV and radio campaigns, and outdoor advertising. Our creative, impactful campaigns engage audiences offline as effectively as online.",
        extraInfo: "Why we’re the best:<br>● Eye-catching, creative designs<br>● Strong understanding of traditional media<br>● Seamless integration with digital strategies"
    },
    {
        title: "Branding and Creative Services",
        icon: <svg width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(81,196,238,1)"><path d="M3.16113 4.46875C5.58508 2.0448 9.44716 1.9355 12.0008 4.14085C14.5528 1.9355 18.4149 2.0448 20.8388 4.46875C23.2584 6.88836 23.3716 10.741 21.1785 13.2947L13.4142 21.0858C12.6686 21.8313 11.4809 21.8652 10.6952 21.1874L10.5858 21.0858L2.82141 13.2947C0.628282 10.741 0.741522 6.88836 3.16113 4.46875ZM4.57534 5.88296C2.86819 7.59011 2.81942 10.3276 4.42902 12.0937L4.57534 12.2469L12 19.6715L17.3026 14.3675L13.7677 10.8327L12.7071 11.8934C11.5355 13.0649 9.636 13.0649 8.46443 11.8934C7.29286 10.7218 7.29286 8.8223 8.46443 7.65073L10.5656 5.54823C8.85292 4.17713 6.37076 4.23993 4.7286 5.73663L4.57534 5.88296ZM13.0606 8.71139C13.4511 8.32086 14.0843 8.32086 14.4748 8.71139L18.7168 12.9533L19.4246 12.2469C21.1819 10.4896 21.1819 7.64032 19.4246 5.88296C17.7174 4.17581 14.9799 4.12704 13.2139 5.73663L13.0606 5.88296L9.87864 9.06494C9.51601 9.42757 9.49011 9.99942 9.80094 10.3919L9.87864 10.4792C10.2413 10.8418 10.8131 10.8677 11.2056 10.5569L11.2929 10.4792L13.0606 8.71139Z"></path></svg>,
        description: "We help you create a brand identity that stands out. From logo design to full-scale branding projects, our creative team ensures that your brand tells a compelling story that resonates with your audience.",
        extraInfo: "Why we’re the best:<br>● Expertise in developing strong brand identities<br>● Tailored designs that capture your brand’s essence<br>● Full-service creative team"
    },
    {
        title: "Photoshoots & Videoshoots",
        icon: <svg width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(81,196,238,1)"><path d="M19.5761 14.5764L15.7067 10.707C15.3162 10.3164 14.683 10.3164 14.2925 10.707L6.86484 18.1346C5.11358 16.6671 4 14.4636 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 12.9014 19.8509 13.7679 19.5761 14.5764ZM8.58927 19.2386L14.9996 12.8283L18.6379 16.4666C17.1992 18.6003 14.7613 19.9998 11.9996 19.9998C10.7785 19.9998 9.62345 19.7268 8.58927 19.2386ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 10C11 11.1046 10.1046 12 9 12C7.89543 12 7 11.1046 7 10C7 8.89543 7.89543 8 9 8C10.1046 8 11 8.89543 11 10Z"></path></svg>,
        description: "Visual content is crucial in today’s marketing. We offer professional photoshoot and videoshoot services that create engaging, high-quality visuals to showcase your brand across social media, websites, and more.",
        extraInfo: "Why we’re the best:<br>● Professional photographers and videographers<br>● Visually appealing content aligned with your brand<br>● Expertise in producing content for all media types"
    },
    {
        title: "Event Planning & Organization",
        icon: <svg width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(81,196,238,1)"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7.00353L4 3H20ZM20 9H4V19H20V9ZM11 13V17H6V13H11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path></svg>,
        description: "We take the stress out of event planning, delivering seamless events that align with your brand and leave a lasting impact. Whether it’s a product launch, corporate gathering, or promotional event, we handle everything from concept to execution.",
        extraInfo: "Why we’re the best:<br>● End-to-end event management services<br>● Creative concepts tailored to your brand<br>● Expertise in planning events of all sizes"
    },
    {
        title: "Affordable and Flexible Packages",
        icon: <svg width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(81,196,238,1)"><path d="M20 3L22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7.00353L4 3H20ZM20 9H4V19H20V9ZM12 10L16 14H13V18H11V14H8L12 10ZM18.764 5H5.236L4.237 7H19.764L18.764 5Z"></path></svg>,
        description: "At Keywi Marketers, we understand that every business has different needs and budgets. We offer flexible and affordable packages that deliver high value and results, without compromising on quality.",
        extraInfo: "Why we’re the best:<br>● Tailored solutions for every budget<br>● No compromise on quality, regardless of package size<br>● Transparent pricing and flexible options"
    }

];

export default Services;