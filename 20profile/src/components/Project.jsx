const Project = () => {
    return (

        <div id="project">
            <div className="container mx-auto pt-0 mb-16 md:pt-16 px-5 md:mb-20 sm font-sans relative">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 px-0 sm:col-start-1 sm:col-span-12 sm:px-0 lg:col-start-1 lg:col-span-8 lg:px-0 xl:col-span-8 xl:col-start-3 2xl:col-span-8 2xl:col-start-3">
                        <div>
                            <h1 className="text-4xl md:text-4xl font-custom font-extrabold text-transparent bg-gradient-to-l from-teal-100 via-violet-500 to-teal-600 bg-clip-text mb-2 pb-4" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800">Projects</h1>
                            <p className="text-light text-gray-400 font-light text-lg lg:text-2xl font-sans tracking-wide leading-relaxed lg:leading-relaxed" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800">Here are some of the projects I've worked on. </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-0 pb-8 pt-0 md:pb-8 md:pt-0 font-custom">
                <div className="container px-5 mx-auto">

                    <div className="grid grid-cols-12 gap-4">

                        <div className="col-span-12 px-0 sm:col-start-1 sm:col-span-12 sm:px-0 lg:col-start-1 lg:col-span-12 lg:px-0 xl:col-span-8 xl:col-start-3 2xl:col-span-8 2xl:col-start-3">

                            {/* Code Start ------------------------------------ */}
                            <div className="bg-gray-800 mb-10 rounded-xl md:rounded-3xl shadow-md  md:mb-20 overflow-hidden">
                                <div className="md:flex">
                                    <div className="basis-1/2 order-first md:order-last overflow-hidden bg-emerald-600">
                                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained h-80 w-full md:object-full md:h-full md:w-full">
                                            <div style={{ maxWidth: '1022px', display: 'block' }}>
                                                <img
                                                    src="../../public/image/thumbnail-address-small.webp"
                                                    alt="Frictionless Shipping Address"
                                                    decoding="async"
                                                    loading="lazy"
                                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="basis-1/2 p-4 md:p-10">
                                        <div className="tracking-wide text-sm text-teal-500 font-semibold mb-2 md:mb-4">
                                            Defend Yourself
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 md:mb-6 block">A Marshal Art Learning Site for Summer Camp
                                        </h2>
                                        <p className="text-gray-300 text-base md:text-lg font-normal mb-2 md:mb-2">This project features provides separate dashboards for allowing each role to access relevant information and perform specific actions.
                                        </p>
                                        <p className="text-gray-300 text-base md:text-lg font-normal mb-10 md:mb-12">-A Project build by Tailwind | React | MongoDB
                                        </p>
                                        <p className="text-gray-400 font-custom font-semibold mb-0">
                                            <span role="img" aria-label="link"> 🔐</span> Ask me to unlock</p>
                                    </div>
                                </div>
                            </div>
                            {/* Code End ------------------------------------ */}

                            {/* Code Start ------------------------------------ */}
                            <div className="bg-gray-800 mb-10 rounded-xl md:rounded-3xl shadow-md  md:mb-20 overflow-hidden">
                                <div className="md:flex">
                                    <div className="basis-1/2 order-first md:order-last overflow-hidden bg-emerald-600">
                                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained h-80 w-full md:object-full md:h-full md:w-full">
                                            <div style={{ maxWidth: '1022px', display: 'block' }}>
                                                <img
                                                    src="../../public/image/thumbnail-address-small.webp"
                                                    alt="Frictionless Shipping Address"
                                                    decoding="async"
                                                    loading="lazy"
                                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="basis-1/2 p-4 md:p-10">
                                        <div className="tracking-wide text-sm text-teal-500 font-semibold mb-2 md:mb-4">
                                            Tokopedia
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 md:mb-6 block">Frictionless Shipping Address
                                        </h2>
                                        <p className="text-gray-400 text-base md:text-lg font-normal mb-10 md:mb-20">Speed up filling address by maximizing automation on each label in order to increase success rate during checkout process.
                                        </p>
                                        <p className="text-gray-400 font-custom font-semibold mb-0">
                                            <span role="img" aria-label="link"> 🔐</span> Ask me to unlock</p>
                                    </div>
                                </div>
                            </div>
                            {/* Code End ------------------------------------ */}

                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-8 flex justify-center     items-center">
                <a direction="up" className="px-12 text-white bg-gradient-to-br from-amber-200 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg md:text-xl py-4 text-center  mb-7 inline-block" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800" href="#">
                    More Project</a>
            </div>

        </div>

    );
};

export default Project;