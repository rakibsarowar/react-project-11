// eslint-disable-next-line no-unused-vars
import React from 'react';

const Nav = () => {
    return (
        <div className='sm:pt-5 sm:pb-5 w-full bg-gray-900 border-gray-800 border-b'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-12 xl:col-span-8 xl:col-start-3'>
                        <nav className='items-center justify-between lg:justify-start'>
                            <nav>
                                <div className=''>
                                    
                                    <a aria-current="page" direction="up" className="font-bold text-gray-300 hover:text-white mr-10 md:mr-0" href="/#">Hello !</a>

                                    <a direction="up" className='font-medium text-gray-300 hover:text-white mr-10 md:mr-0 '> Projects</a>

                                    
                                </div>
                            </nav>

                        </nav>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nav;