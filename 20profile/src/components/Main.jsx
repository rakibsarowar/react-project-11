// eslint-disable-next-line no-unused-vars
import React from 'react';
import Hero from './Hero';
import Image from '../../public/element.svg'
import Thank from './Thank';
import Project from './project';
import Nav from './Nav';
import Skills from './Skills';


const Main = () => {
    return (
        <div className='bg-gray-900'>
            <Nav></Nav>
            <div className="container mx-auto  px-5 md:pt-0 relative">
                <img className="mt-5 hidden xl:block absolute" src={Image} alt="" />
            </div>
            <Hero></Hero>
            <Skills></Skills>
            <Project></Project>
            <Thank></Thank>
           
        </div>
    );
};

export default Main;