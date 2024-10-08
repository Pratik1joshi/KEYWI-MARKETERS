import React from 'react';

const Page = () => {
  return (
    <section className="text-gray-600 lg:body-font px-4 md:px-10 lg:px-28 bg-gradient-to-r from-sky-400 to-blue-700 pt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-16"> {/* Reduced padding for smaller screens */}
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-white font-extrabold">DREAM BIG</h1> {/* Adjusted text size for various screens */}
          <h1 className="title-font text-3xl sm:px-10 sm:text-4xl md:text-5xl lg:text-6xl mb-4 px-5 md:px-20 font-extrabold text-[#ffffff] text-outline">GROW BIG</h1> {/* Adjusted text size for various screens */}
          <p className="mb-8 leading-relaxed text-white underline text-lg sm:text-xl">#1 Digital marketing Agency in Nepal</p> {/* Adjusted text size for smaller screens */}
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Book a meeting</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg">Start a project</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="/hero1.png"/>
        </div>
      </div>
    </section>
  );
}

export default Page;