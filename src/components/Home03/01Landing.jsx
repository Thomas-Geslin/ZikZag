import Image from 'next/image'

// Awesome Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import background from '../../public/assets/Home03/landing_people.png'
import squareLeft from '../../public/assets/Home03/landing_square_2.png'
import squareRight from '../../public/assets/Home03/landing_square_1.png'

import para1 from '../../public/assets/Home03/landing_parallax_1.png'
import para2 from '../../public/assets/Home03/landing_parallax_2.png'
import para3 from '../../public/assets/Home03/landing_parallax_3.png'

import man from '../../public/assets/Home03/landing_man.png'
import line1 from '../../public/assets/Home03/landing_line_1.png'
import line2 from '../../public/assets/Home03/landing_line_2.png'
import line3 from '../../public/assets/Home03/landing_line_3.png'
import line4 from '../../public/assets/Home03/landing_line_4.png'
import { useEffect } from 'react';


// Keyframe for smooth reveal
const reveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const revealTop = keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const revealTopLittle = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const revealBottom = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const revealBottomLittle = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const revealRight = keyframes`
  from {
    transform: translateX(50px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const revealLeft = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;


export default function LandingHome03() {
  useEffect(() => {
    // Mouseover Parallax
    document.getElementById('parallaxViewport').addEventListener('mousemove', parallax);
    function parallax(e) {
      this.querySelectorAll('.layerHome03').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight - e.pageY*speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        layer.style.transition = 'all .15s'
      })
    }
  }, [])


    return(
        <section id='parallaxViewport' className='z-10 bg-orange pt-64 relative overflow-hidden'>
            <div>
                <Reveal keyframes={revealBottomLittle} duration={600} triggerOnce  className='absolute'><Image src={para1} alt='carré de décoration' className='landingBackgroundAnimation' /></Reveal>
                <Reveal keyframes={revealTopLittle} duration={600} triggerOnce className='landingBackgroundAnimation absolute bottom-56 -left-80'><Image src={para2} alt='carré de décoration' className='landingBackgroundAnimation' /></Reveal>
                <Reveal keyframes={revealBottomLittle} duration={600} triggerOnce   className='absolute bottom-10'><Image src={para3} alt='carré de décoration' className="landingBackgroundAnimation-delay" /></Reveal>
                <Reveal keyframes={revealTopLittle} duration={600} triggerOnce className='absolute top-[550px] left-[900px]'><Image src={para2} alt='carré de décoration' className='landingBackgroundAnimation-delay' /></Reveal>
            </div>

            <div className='text-white ml-[19%] relative'>
                <div className='flex items-center'>
                    <Reveal keyframes={reveal} duration={600} delay={600} triggerOnce><div className='shadow-[3px_3px_20px_3px_rgb(0,0,0,0.12)] group bg-white px-7 py-6 rounded-full hover:bg-darkBlueBackground hover:cursor-pointer ease-linear duration-300'><FontAwesomeIcon icon={faPlay} className='w-4 text-black group-hover:text-white' /></div></Reveal>
                    <Reveal keyframes={revealRight} duration={700} delay={900} triggerOnce><p className='font-bold text-sm ml-5'>HOW IT WORKS</p></Reveal>
                </div>
                <Reveal keyframes={revealLeft} duration={800} triggerOnce><h1 className='font-Amiri text-7xl w-5/12 leading-[80px] mt-9'>We Champion the Bold to Achieve the Extraordinary</h1></Reveal>
                <div className='font-semibold mt-10 pb-60 flex'>
                    <Reveal keyframes={reveal} duration={800} delay={1600} triggerOnce><button className="rounded bg-darkBlueBackground py-5 px-11 mr-5 text-sm border-transparent border-solid border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500">LEARN MORE</button></Reveal>
                    <Reveal keyframes={reveal} duration={800} delay={2200} triggerOnce><button className="rounded border border-[#c0c0c3] border-solid py-5 px-11 text-sm hover:bg-darkBlueBackground hover:text-white hover:border-transparent ease-in-out duration-500">GET IN TOUCH</button></Reveal>
                </div>
            </div>

            <Reveal keyframes={revealTop} duration={800} triggerOnce className='absolute -left-64 -top-72'><Image src={squareLeft} alt='carré de décoration' /></Reveal>
            <Reveal keyframes={revealTop} duration={800} delay={700} triggerOnce className='absolute -right-[520px] top-24'><Image src={squareRight} alt='carré de décoration' /></Reveal>
            <Reveal keyframes={revealRight} duration={800} triggerOnce className='absolute -right-[420px] top-24'><Image src={background} alt='réunion entreprise' /></Reveal>

            <div className='absolute top-52 left-40 w-full'>
                <Reveal keyframes={revealBottom} duration={800} delay={900} triggerOnce><Image src={man} alt='dessin super-héros' data-speed='-1.5' className='absolute left-[700px] layerHome03' /></Reveal>
                <Reveal keyframes={revealBottom} duration={800} delay={1500} triggerOnce><Image src={line1} alt='ligne de décoration' data-speed='-2.5' className='absolute left-[700px] layerHome03' /></Reveal>
                <Reveal keyframes={revealLeft} duration={800} delay={2100} triggerOnce><Image src={line2} alt='ligne de décoration' data-speed='1.5' className='absolute layerHome03' /></Reveal>
                <Reveal keyframes={reveal} duration={800} delay={2600} triggerOnce><Image src={line3} alt='ligne de décoration' data-speed='1.8' className='absolute layerHome03' /></Reveal>
                <Reveal keyframes={reveal} duration={800} delay={3100} triggerOnce><Image src={line4} alt='ligne de décoration' data-speed='1.8' className='absolute layerHome03' /></Reveal>
            </div>

            <div className='flex items-center -rotate-90 absolute bottom-52 -left-24'>
                <Reveal keyframes={reveal} duration={500} delay={4900} triggerOnce><FontAwesomeIcon icon={faLinkedin} className='w-3.5 text-white rotate-90 mr-6 hover:cursor-pointer' /></Reveal>
                <Reveal keyframes={reveal} duration={500} delay={4700} triggerOnce><FontAwesomeIcon icon={faFacebookF} className='w-3 text-white rotate-90 mr-6 hover:cursor-pointer' /></Reveal>
                <Reveal keyframes={reveal} duration={500} delay={4500} triggerOnce><FontAwesomeIcon icon={faTwitter} className='w-3.5 text-white rotate-90 mr-6 hover:cursor-pointer' /></Reveal>
                <Reveal keyframes={revealRight} duration={500} delay={4000} triggerOnce className='w-28 h-0.5 bg-white relative mr-6'><span></span></Reveal>
                <Reveal keyframes={revealBottom} duration={500} delay={3500} triggerOnce><p className='text-white font-semibold text-sm'>FOLLOW</p></Reveal>
            </div>
        </section>
    )
}