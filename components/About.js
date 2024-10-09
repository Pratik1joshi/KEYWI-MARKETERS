import React from 'react'

const About = () => {
    return (
        <section id='about' className="text-gray-800 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <h1 className='lg:text-5xl font-bold md:text-5xl md:py-4 py-6 text-4xl lg:py-2 lg:px-28'>About <span className='text-[#51C4EE]'>US</span></h1>
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/hero1.png" />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <p>Founded in 2024, Keywi Marketers is a client-focused marketing agency dedicated to delivering
                            personalized, results-driven solutions for businesses of all sizes. We offer a comprehensive
                            range of marketing services, both digital and traditional, ensuring that every campaign is tailored
                            to your unique needs while remaining budget-friendly.<br/>
                            <br/>
                            Specializing in web development, social media management, and influencer marketing, we
                            blend creativity, technology, and strategic insights to help your brand thrive. At Keywi Marketers,
                            we pride ourselves on offering flexible, affordable packages designed to provide maximum value
                            without compromising quality.<br/>
                            <br/>
                            Our company mottos, "Your Key to Nepal" and "Dream Big, Grow Big" with us, reflect our
                            commitment to unlocking new opportunities for your business and empowering you to reach
                            your full potential. We work closely with our clients to create client-oriented strategies that
                            resonate with their audience, driving measurable growth and success.<br/>
                            <br/>
                            Let Keywi Marketers be your partner in navigating the marketing landscape and achieving big
                            dreams!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About