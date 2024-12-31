import React, { useState } from 'react';
import { PrivacyPolicyData } from '../../Utils/DummyData';

const PrivacyContent = () => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };


    return (
        <div className="bg-Navbar">
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="md:pb-20 pb-10">
                    <div className="flex md:flex-row flex-col justify-between w-full text-white md:items-center">
                        <p className="text-white heading1">Read the Policies Carefully</p>
                        <p className="text-primaryColor text8">Last Updated: 24 June, 2024</p>
                    </div>
                    <p className="text-white md:py-10 py-4 text9">
                        Welcome to <span className="text-primaryColor text9 font-extrabold">Deep Beauty Salon.</span> We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                    </p>

                    {/* Show only the first data item initially */}
                    {PrivacyPolicyData.slice(0, 1).map((item, i) => (
                        <div key={i} className="md:py-10 py-4 gap-5">
                            <p className="text4 font-semiBold text-white md:pb-5 pb-2">{item.heading}</p>
                            <p className="text-white font-normal text9">{item.description}</p>

                            <ul className="list-disc md:pl-5 ">
                                {item.Bullets && item.Bullets.map((bullet, ind) => (
                                    <li key={ind} className="flex py-2 space-x-2">
                                        <div className="flex items-center">
                                            {bullet.subhead && (
                                                <p className="text-white font-bold text9">{bullet.subhead}
                                                    <span className="text-white font-normal text9 pt-[2px] pl-[2px] md:pl-2">{bullet.para}</span>
                                                </p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            {!expanded && (
                                <button onClick={toggleExpanded} className="text-yellow-500 underline">
                                    Read More
                                </button>
                            )}
                        </div>
                    ))}

                    {expanded && (
                        <>
                            {PrivacyPolicyData.slice(1).map((item, i) => (
                                <div key={i} className="md:py-10 py-4 gap-5">
                                    <p className="text4 font-semiBold text-white md:pb-5 pb-2">{item.heading}</p>
                                    <p className="text-white font-normal text9">{item.description}</p>

                                    <ul className="list-disc md:pl-5">
                                        {item.Bullets && item.Bullets.map((bullet, ind) => (
                                            <li key={ind} className="flex py-2 space-x-2">
                                                <div className="flex items-center">
                                                    {i === PrivacyPolicyData.length - 2 && bullet.subhead === "Email:" || bullet.subhead === "Phone:" ? (
                                                        <p className="text-white font-bold text9">
                                                            {bullet.subhead}
                                                            <span className="text-yellow-500 font-normal text9 pt-[2px] pl-[2px] md:pl-2">
                                                                {bullet.para}
                                                            </span>
                                                        </p>
                                                    )
                                                        : (
                                                            bullet.subhead && bullet.para ? (
                                                                <p className="text-white font-bold text9">{bullet.subhead}
                                                                    <span className="text-white text9 font-normal pt-[2px] pl-[2px] md:pl-2">{bullet.para}</span>
                                                                </p>
                                                            ) :
                                                                <span className="text-white text9 pt-[2px] pl-[2px] md:pl-2">{bullet.para}</span>
                                                        )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <button onClick={toggleExpanded} className="text-yellow-500 underline">
                                Show Less
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PrivacyContent;
