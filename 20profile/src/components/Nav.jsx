// eslint-disable-next-line no-unused-vars
import React from 'react';

const Nav = () => {
    return (
        <div className='sm:pt-5 sm:pb-5 w-full bg-gray-900 border-gray-800 border-b'>
            <div className='container px-5 mx-auto'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-12 px-0 sm:col-start-1 sm:col-span-12 sm:px-0 lg:col-start-1 lg:col-span-12 lg:px-0 xl:col-span-8 xl:col-start-3 2xl:col-span-8 2xl:col-start-3'>
                        <nav className='items-center justify-between lg:justify-start'>
                            <nav className='items-center justify-between'>
                                <div className='md:block md:ml-0 md:pr-4 md:space-x-8'>
                                    
                                    <a aria-current="page" direction="up" className="font-bold text-gray-300 hover:text-white mr-10 md:mr-0" href="/#">Hello !</a>

                                    <a direction="up" className='font-medium text-gray-300 hover:text-white mr-10 md:mr-0' href='#projects'> Projects</a>

                                    <a direction="up" className='font-medium text-gray-300 hover:text-white mr-10 md:mr-0' href='#skills'> Skills </a>

                                    
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