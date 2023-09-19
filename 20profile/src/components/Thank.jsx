// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const Thank = () => {

    const [isScrolling, setIsScrolling] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has already occurred

    useEffect(() => {
        const handleScroll = () => {
            if (!hasAnimated) {
                setIsScrolling(true);

                // Add a timeout to reset the animation after 1 second
                setTimeout(() => {
                    setIsScrolling(false);
                    setHasAnimated(true); // Mark the animation as completed
                }, 1000);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasAnimated]);



    return (
        <div>
            <div className="mt-0 pb-8 pt-0 sm:pb-10 sm:pt-0 font-custom">
                <div className="container px-5 mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 px-0 sm:col-start-1 sm:col-span-12 sm:px-0 lg:col-start-1 lg:col-span-12 lg:px-0 xl:col-span-8 xl:col-start-3 2xl:col-span-8 2xl:col-start-3">
                            <div className="grid grid-cols-10 gap-4" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800">
                                <div className="col-start-1 col-span-10 px-0 md:col-start-1 md:col-span-8 md:px-0 md:pr-9 md:mb-10">
                                    <div className={`not-prose mb-8 ${isScrolling && !hasAnimated ? 'zoom-out' : ''}`}>
                                        <span className="text-gray-500 text-4xl font-semibold font-custom md:text-9xl">Thank you</span>
                                    </div>
                                    <span className="text-gray-500 text-4xl font-semibold font-custom md:text-9xl">for stopping by!</span>
                                </div>
                                <div className="col-start-1 col-span-10 px-0 md:col-start-1 md:col-span-8 md:px-0 md:pr-9 md:mb-10">
                                    <div className={`not-prose mb-8 ${isScrolling && !hasAnimated ? 'zoom-out' : ''}`}>
                                        <span className="text-gray-500 text-4xl font-semibold font-custom md:text-9xl">

                                        </span>
                                    </div>
                                    <span className="text-gray-500 text-4xl font-semibold font-custom md:text-9xl">

                                    </span>
                                </div>

                            </div>
                            <div className="grid grid-cols-10 gap-4" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800">
                                <div className="col-start-1 col-span-10 px-0 md:col-start-1 md:col-span-9 md:px-0 md:pr-9">
                                    <div className="not-prose mb-8">
                                        <p className="text-gray-500 mb-44 text-2xl font-light font-custom md:text-5xl">Let's build something together.</p>
                                        <p className="mb-6">
                                            <a href="https://www.linkedin.com/in/rakibsarowar" target="_blank" rel="noreferrer" className="mr-11 mb-6 text-left md:text-center block md:inline-block px-0 py-3 rounded-full bg-gray-900 hover:text-white text-base md:text-lg font-bold text-gray-500">LinkedIn</a>
                                            <a href="https://www.instagram.com/rakibsarowar" target="_blank" rel="noreferrer" className="mr-11 mb-6 text-left md:text-center block md:inline-block px-0 py-3 rounded-full bg-gray-900 hover:text-white text-base md:text-lg font-bold text-gray-500">Instagram</a>
                                            <a href="https://github.com/rakibsarowar" target="_blank" rel="noreferrer" className="mr-11 mb-6 text-left md:text-center block md:inline-block px-0 py-3 rounded-full bg-gray-900 hover:text-white text-base md:text-lg font-bold text-gray-500">Github</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Thank;