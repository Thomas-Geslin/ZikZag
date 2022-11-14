import Image from "next/image"
import { useEffect } from "react";

// Awesome Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import women from '../../public/assets/Home04/about_women.png'
import dot from '../../public/assets/Home04/about_dot.png'
import video from '../../public/assets/Home04/about_video.png'

// Keyframe for smooth reveal
const reveal = keyframes`
  from {
    opacity: 0;
    transform: scale(0.7);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const revealLeft = keyframes`
  from {
    transform: translateX(-300px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;


export default function AboutHome04() {
    useEffect(() => {
        // Function for auto-increment counter on scroll
        function autoIncrement(limit, target, detail) {
            let numberLimit = limit;
            let numberInitial = 0;
            let timer = 2.5;
            let interval = Math.ceil((timer * 1000) / numberLimit - detail);
            const numberTarget = document.getElementById(target)

            function countdown() {
                numberTarget.innerHTML = ++numberInitial;
                if (numberInitial < numberLimit) {
                    setTimeout(countdown, interval);
                }
            }
            setTimeout(countdown, interval);
        }
        const viewportNumber = document.getElementById('numberViewport');
    
        const optionsNumber = {
          root: null,
          treshold: 0.5
        }
    
        const observerNumber = new IntersectionObserver(function (entries) {
          entries.forEach((entry) => {
              if(entry.isIntersecting) {
                autoIncrement(15, 'numberTarget1', 0);
                autoIncrement(250, 'numberTarget2', 3);
                autoIncrement(36, 'numberTarget3', 0);
                autoIncrement(17, 'numberTarget4', 0);
              };
          })
          
        }, optionsNumber);
        observerNumber.observe(viewportNumber);
    }, [])


    return(
        <section className='mt-32 mb-40 relative'>
            <div className='flex justify-center ml-16 mb-40'>
                <div className='relative'>
                    <Reveal keyframes={reveal} duration={800} delay={700} triggerOnce><Image src={dot} alt='femme travaillant sur un ordinateur' className='absolute left-0' /></Reveal>
                    <Reveal keyframes={revealLeft} duration={800} triggerOnce><Image src={women} alt='femme travaillant sur un ordinateur' className='relative' /></Reveal>
                    <Image src={video} alt='femme travaillant sur un ordinateur' className='absolute -bottom-20 -right-14' />
                </div>

                <div className='w-1/3 relative mt-20 ml-32'>
                    <h2 className='text-orange font-bold mb-3 relative'>ABOUT ZIKZAG<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h3 className="w-2/3 font-Amiri text-5xl text-slightGrey leading-tight mb-4 max-xl:w-full">Generating New Business Ideas</h3>
                    <p className="w-9/12 text-greyText text-lg leading-8 mb-8 max-xl:w-full">We seamlessly merge two key components – economics and information technology. This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service. The challenges it presents may seem daunting, but we help you approach change with confidence, adapt with purpose.</p>
                    <button className="text-white bg-orange font-semibold py-4 px-9 rounded hover:bg-darkBlueBackground ease-in-out duration-500">LEARN MORE</button>
                </div>
            </div>

            <div id="numberViewport" className='flex justify-between w-7/12 m-auto'>
                <div className='flex items-center'>
                    <p id='numberTarget1' className='text-orange text-7xl font-Amiri mr-3'>0</p>
                    <p className='text-sm font-bold text-slightGrey w-1/2'>YEARS OF EXPERIENCE</p>
                </div>

                <div className='flex items-center'>
                    <p id='numberTarget2' className='text-orange text-7xl font-Amiri mr-3'>0</p>
                    <p className='text-sm font-bold text-slightGrey w-1/2'>TRUSTED CLIENTS</p>
                </div>

                <div className='flex items-center'>
                    <p id='numberTarget3' className='text-orange text-7xl font-Amiri mr-3'>0</p>
                    <p className='text-sm font-bold text-slightGrey w-1/2'>VISITED CONFERENCES</p>
                </div>

                <div className='flex items-center'>
                    <p id='numberTarget4' className='text-orange text-7xl font-Amiri mr-3'>0</p>
                    <p className='text-sm font-bold text-slightGrey w-1/2'>MASTER CERTIFICATION</p>
                </div>
            </div>
        </section>
    )
}