import React, { useState } from 'react'

const Servicesitems = ({ servicesData }) => {
    // Initialize an array of false values for expansion state, one for each service
    const [expandedIndexes, setExpandedIndexes] = useState(
        Array(servicesData.length).fill(false)
    );

    const handleToggleExpand = (index) => {
        // Toggle the expansion state of the clicked service
        const updatedExpandedIndexes = [...expandedIndexes];
        updatedExpandedIndexes[index] = !updatedExpandedIndexes[index];
        setExpandedIndexes(updatedExpandedIndexes);
    };

    return (
        <>
            {servicesData.map((service, index) => (
                <div className="mainDiv xl:w-1/3 md:w-1/2 p-4" key={index}>
                    <div className="border border-gray-200 p-6 rounded-lg group hover:shadow-lg transition duration-300 ease-in-out">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#51C4EE] mb-4 transition duration-300 ease-in-out group-hover:border-2 group-hover:bg-white group-hover:border-[#51C4EE] group-hover:rounded-full">
                            {service.icon}
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{service.title}</h2>
                        <p className="leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: service.description }}></p>
                        <button onClick={() => handleToggleExpand(index)} className="mt-4 text-indigo-500">
                            {expandedIndexes[index] ? (
                                <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(81,196,238,1)">
                                    <path d="M12 8.36853L20.9679 13.1162L20.0321 14.8838L12 10.6315L3.96788 14.8838L3.0321 13.1162L12 8.36853Z"></path>
                                </svg>
                            ) : (
                                <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(81,196,238,1)">
                                    <path d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.96788 9.11619L3.0321 10.8838L12 15.6315Z"></path>
                                </svg>
                            )}
                        </button>
                        {expandedIndexes[index] && (
                            <p className="mt-2 text-gray-500" dangerouslySetInnerHTML={{ __html: service.extraInfo }} />
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Servicesitems;
