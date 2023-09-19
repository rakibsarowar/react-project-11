// eslint-disable-next-line no-unused-vars
import React from 'react';
import Typed from 'typed.js';

const Hero = () => {

    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['React Developer', 'Vue Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <div className='md:container mx-auto mb-16 md:pt-16 md:mb-20'>
                <div>
                    <h1 className='text-7xl pt-8 font-semibold tracking-tighter text-gray-700 bg-gradient-to-br from-orange-500 to-amber-400 text-transparent bg-clip-text text-left font-link'>
                        Rakib, <br />
                        Experience <br />
                        <span ref={el} />
                    </h1>
                </div>
                <div className='text-xl text-gray-400'>
                    <p className="mb-8 leading-relaxed font-normal subpixel-antialiased">
                        I am an aspiring MERN & MEVN Stack Developer with strong knowledge of JavaScript, Es6, React , Vue, Express & MongoDB. I always seek out new knowledge, technology and actively develop my skills.
                    </p>
                    
                <p className="mb-10 leading-relaxed font-normal subpixel-antialiased">
                  Also, I love to connect with new friends and share my knowledge & thoughts in social media.

                  <a direction="up" className="ease-in font-normal underline underline-offset-8 decoration-2 decoration-amber-400 text-white hover:text-white hover:decoration-white" href="https://www.linkedin.com/in/rakibsarowar/" target="_blank" rel="noreferrer">
                    
                     LinkedIn</a> <span>| </span>

                  <a direction="up" className="ease-in font-normal underline underline-offset-8 decoration-2 decoration-amber-400 text-white hover:text-white hover:decoration-white" href="https://github.com/rakibsarowar" target="_blank" rel="noreferrer">
                    
                    GitHub</a>

                </p>
                <div className="pb-8">
                <a direction="up" duration="0.7" bg="white" className="px-12 text-white bg-gradient-to-br from-amber-200 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg md:text-xl py-4 text-center mb-7 inline-block" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800" href="https://drive.google.com/uc?export=download&amp;id=1Wv1K-0Bm3-Sjm_Ki0V-fFnT0FjPCUkiJ">
                  Resume</a>
              </div>


                </div>
            </div>
        </div>
    );
};

export default Hero;