import Image from 'next/image'
import { useEffect } from 'react';

// Awesome Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

// Assets Landing
import mouseoverLine01 from '../../public/assets/Home02/mouseover_line_01.png'
import mouseoverLine02 from '../../public/assets/Home02/mouseover_line_02.png'
import mouseoverLine03 from '../../public/assets/Home02/mouseover_line_03.png'
import mouseoverLine04 from '../../public/assets/Home02/mouseover_line_04.png'
import mouseoverLine05 from '../../public/assets/Home02/mouseover_line_05.png'
import mouseoverLine06 from '../../public/assets/Home02/mouseover_line_06.png'
import mouseoverRocket from '../../public/assets/Home02/mouseover_rocket.png'
import mouseoverSquareLeft from "../../public/assets/Home02/mouseover_square_grey.png"
import mouseoverSquareRight from "../../public/assets/Home02/mouseover_square_orange.png"
import mouseoverStanding from "../../public/assets/Home02/mouseover_standing.png"
import mouseoverSit from "../../public/assets/Home02/mouseover_sit.png"

// Keyframe for smooth reveal
const reveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const revealScale= keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const revealRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const revealLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const revealBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export default function Landing() {
  useEffect(() => {
    // Mouseover Parallax
    document.getElementById('landingViewport').addEventListener('mousemove', parallax);
    function parallax(e) {
      this.querySelectorAll('.layerHome02').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight - e.pageY*speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }
  },[])

    return(
        <section id="landingViewport" className='bg-greyBackground z-10 overflow-hidden bg-squareBackground bg-no-repeat bg-[bottom_-50rem_left_43rem] relative mt-32 pb-6 max-xl:mt-28'>
          <div className='ml-52 pt-56 1060:ml-10 1060:pt-20'>
            <Reveal keyframes={revealRight} duration={1000} delay={700} triggerOnce><h2 className='font-NunitoSans text-orange text-lg font-semibold max-xl:w-10/12 850:text-base'>PERFECT SOLUTION FOR YOUR COMPAGNY</h2></Reveal>
            <Reveal keyframes={revealRight} duration={1000} triggerOnce><h1 className='font-Amiri text-slightGrey text-xl leading-90 w-5/12  max-xl:w-10/12 850:text-3xl'>Your Business from Idea to Launching</h1></Reveal>

            <div className='flex items-center pb-64 mt-8'>
              <Reveal keyframes={reveal} duration={1000} delay={1550} triggerOnce><div className='group bg-white px-7 py-6 rounded-full shadow-[5px_5px_15px_3px_#dddddd] hover:bg-orange hover:cursor-pointer ease-linear duration-300'><FontAwesomeIcon icon={faPlay} className='w-4 text-orangeBright group-hover:text-white' /></div></Reveal>
              <Reveal keyframes={revealScale} duration={1000} delay={1400} triggerOnce><p className='font-bold text-slightGrey text-sm ml-5'>HOW IT WORKS</p></Reveal>
            </div>
          </div>

          <Reveal keyframes={revealBottom} duration={1000} delay={2000} triggerOnce><div onClick={() => window.scrollTo({ top: 1050, behavior: 'smooth' })} className='flex absolute bottom-4 -rotate-90 left-36 hover:cursor-pointer max-xl:left-8'><span className='relative top-2 h-0.5 w-14 mr-2 bg-orange'></span><p className='font-bold text-sm'>SCROLL</p></div></Reveal>

          <div>
            <Reveal keyframes={reveal} duration={1000} delay={4600} triggerOnce className='absolute top-44 right-24'><Image data-speed="-1" className='layerHome02' src={mouseoverLine01} alt='ligne de décoration' /></Reveal>
            <Reveal keyframes={reveal} duration={1000} delay={5200} triggerOnce className='absolute top-36 right-[850px] layerHome02'><Image data-speed="-1" className='layerHome02' src={mouseoverLine02} alt='ligne de décoration' /></Reveal>
            <Reveal keyframes={reveal} duration={1000} delay={5800} triggerOnce className='absolute top-[130px] right-72 layerHome02'><Image data-speed="-2" className='layerHome02' src={mouseoverLine03} alt='ligne de décoration' /></Reveal>
            <Reveal keyframes={reveal} duration={1000} delay={6300} triggerOnce className='absolute top-[550px] right-28 layerHome02'><Image data-speed="-2" className='layerHome02' src={mouseoverLine04} alt='ligne de décoration' /></Reveal>
            <Reveal keyframes={reveal} duration={1000} delay={6800} triggerOnce className='absolute top-[300px] right-[920px] layerHome02'><Image data-speed="-2" className='layerHome02' src={mouseoverLine05} alt='ligne de décoration' /></Reveal>
            <Reveal keyframes={reveal} duration={1000} delay={7300} triggerOnce className='absolute top-[660px] right-[880px] layerHome02'><Image data-speed="-2" className='layerHome02' src={mouseoverLine06} alt='ligne de décoration' /></Reveal>
            <Reveal keyframes={revealBottom} duration={1000} delay={2850} triggerOnce className=' absolute top-80 right-72'><Image data-speed="-2" className='layerHome02' src={mouseoverRocket} alt='fusée de décoration' /></Reveal>
            <Reveal keyframes={revealLeft} duration={1000} delay={3500} triggerOnce className='absolute top-40 -left-[680px]'><Image data-speed="2" className='layerHome02' src={mouseoverSquareLeft} alt='carré de décoration' /></Reveal>
            <Reveal keyframes={revealRight} duration={1000} delay={3400} triggerOnce className='absolute top-20 -right-44'><Image data-speed="2" className='layerHome02' src={mouseoverSquareRight} alt='carré de décoration' /></Reveal>
            <Reveal keyframes={revealLeft} duration={1000} delay={2600} triggerOnce className='absolute top-44 right-[610px] max-[1660px]:w-[200px]'><Image data-speed="-1" className='layerHome02' src={mouseoverStanding} alt="dessin d'un homme ayant les bras levés" /></Reveal>
            <Reveal keyframes={revealRight} duration={1000} delay={1200} triggerOnce className='absolute top-80 right-56 max-[1660px]:w-[350px]'><Image data-speed="-1" className='layerHome02' src={mouseoverSit} alt="dessin d'un homme assis" /></Reveal>
          </div>
        </section>
    )
}