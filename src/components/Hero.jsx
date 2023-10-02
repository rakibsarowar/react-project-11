import React from "react";
import Typed from "typed.js";


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

    <>

      <div className="container mx-auto mb-16 md:pt-8 md:mb-20 sm font-sans relative">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 px-0 sm:col-start-1 sm:col-span-12 sm:px-0 lg:col-start-1 lg:col-span-12 lg:px-0 xl:col-span-12 xl:col-start-3 2xl:col-span-8 2xl:col-start-3">
            <div>
              <h1 className="text-5xl pt-2 md:text-8xl lg:text-8xl font-semibold tracking-tighter text-gray-700 mb-6 md:mb-4 pb-4 md:pb-2 bg-gradient-to-br from-orange-500 to-amber-200 text-transparent bg-clip-text text-left font-link">

                Rakib,<br />
                Experience<br />
                <span ref={el} />
              </h1>
              <div className="text-xl md:text-normal text-gray-400">
                <p className="mb-8 md:mb-2 leading-relaxed font-normal subpixel-antialiased">
                  I am an aspiring MERN & MEVN Stack Developer with strong knowledge of JavaScript, Es6, React , Vue, Express & MongoDB. I always seek out new knowledge, technology and actively develop my skills.
                </p>

                <p className="mb-10 md:mb-6 md:text-normal leading-relaxed font-normal subpixel-antialiased">
                  Also, I love to connect with new friends and share my knowledge & thoughts in social media.
                  <a direction="up" className="ease-in font-normal underline underline-offset-8 decoration-2 decoration-amber-400 text-white hover:text-white hover:decoration-white" href="https://www.linkedin.com/in/rakibsarowar/" target="_blank" rel="noreferrer"> LinkedIn</a> <span>| </span>
                  <a direction="up" className="ease-in font-normal underline underline-offset-8 decoration-2 decoration-amber-400 text-white hover:text-white hover:decoration-white" href="https://github.com/rakibsarowar" target="_blank" rel="noreferrer">GitHub</a>
                </p>
              </div>

              <div className="pb-2">
                <a direction="up" className="px-12 md:px-6 text-white bg-gradient-to-br from-amber-200 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-sm md:text-normal py-2 text-center mb-7 inline-block" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800" href="https://drive.google.com/uc?export=download&amp;id=1Wv1K-0Bm3-Sjm_Ki0V-fFnT0FjPCUkiJ">
                  Resume</a>
              </div>

            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Hero;

