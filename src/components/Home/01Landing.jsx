import Image from 'next/image'
import Link from 'next/link'

// Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

// Assets Landing
import mouseoverLine01 from '../../public/assets/Home/mouseover_line_01.png'
import mouseoverLine02 from '../../public/assets/Home/mouseover_line_02.png'
import mouseoverLine03 from '../../public/assets/Home/mouseover_line_03.png'
import mouseoverLine04 from '../../public/assets/Home/mouseover_line_04.png'
import mouseoverLine05 from '../../public/assets/Home/mouseover_line_05.png'
import mouseoverLine06 from '../../public/assets/Home/mouseover_line_06.png'
import mouseoverRocket from '../../public/assets/Home/mouseover_rocket.png'
import mouseoverSquareLeft from "../../public/assets/Home/mouseover_square_grey.png"
import mouseoverSquareRight from "../../public/assets/Home/mouseover_square_orange.png"
import mouseoverStanding from "../../public/assets/Home/mouseover_standing.png"
import mouseoverSit from "../../public/assets/Home/mouseover_sit.png"

// Keyframe for smooth reveal
const reveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
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
    return(
        <section className='bg-greyBackground bg-squareBackground bg-no-repeat bg-[bottom_-50rem_left_43rem] relative mt-32 pb-6'>
          <div className='ml-52 pt-56'>
            <Reveal keyframes={revealRight} triggerOnce duration={750} delay={550}><h2 className='font-NunitoSans text-orange text-lg font-semibold'>PERFECT SOLUTION FOR YOUR COMPAGNY</h2></Reveal>
            <Reveal keyframes={revealRight} triggerOnce duration={750}><h1 className='font-Amiri text-slightGrey text-xl leading-90 w-5/12'>Your Business from Idea to Launching</h1></Reveal>

            <div className='flex items-center pb-64 mt-8'>
              <Reveal keyframes={reveal} triggerOnce duration={750} delay={1350}><Link href='/About'><div className='group bg-white p-7 rounded-full shadow-[5px_5px_15px_3px_#dddddd] hover:bg-orange hover:cursor-pointer ease-linear duration-300'><FontAwesomeIcon icon={faPlay} className='w-4 text-orangeBright group-hover:text-white' /></div></Link></Reveal>
              <Reveal keyframes={reveal} triggerOnce duration={750} delay={1200}><p className='font-bold text-slightGrey text-sm ml-5'>HOW IT WORKS</p></Reveal>
            </div>
          </div>

          <Reveal keyframes={revealBottom} triggerOnce duration={1050} delay={1600}><div onClick={() => window.scrollTo({ top: 1050, behavior: 'smooth' })} className='flex absolute bottom-4 left-36 -rotate-90 hover:cursor-pointer'><span className='relative top-3 h-0.5 w-14 mr-2 bg-orange'></span><p className='font-semibold'>SCROLL</p></div></Reveal>

          <div>
            <Reveal keyframes={reveal} triggerOnce duration={1050} delay={3100}><Image className='absolute top-44 right-24' src={mouseoverLine01} alt='ligne de décoration' /></Reveal>
            <Reveal keyframes={reveal} triggerOnce duration={1050} delay={3700}><Image className='absolute top-36 right-[850px]' src={mouseoverLine02} alt='ligne de décoration' /></Reveal>
            <Reveal keyframes={reveal} triggerOnce duration={1050} delay={4000}><Image className='absolute top-[130px] right-72' src={mouseoverLine03} alt='ligne de décoration' /></Reveal>
            <Reveal keyframes={reveal} triggerOnce duration={1050} delay={4200}><Image className='absolute bottom-24 right-28' src={mouseoverLine04} alt='ligne de décoration' /></Reveal>
            <Reveal keyframes={reveal} triggerOnce duration={1050} delay={4800}><Image className='absolute top-[300px] right-[920px]' src={mouseoverLine05} alt='ligne de décoration' /></Reveal>
            <Reveal keyframes={reveal} triggerOnce duration={1050} delay={5400}><Image className='absolute bottom-7 right-[880px]' src={mouseoverLine06} alt='ligne de décoration' /></Reveal>
            <Reveal keyframes={revealBottom} triggerOnce duration={1050} delay={1800}><Image className='absolute bottom-[200px] right-72' src={mouseoverRocket} alt='fusée de décoration' /></Reveal>
            <Reveal keyframes={revealLeft} triggerOnce duration={1050} delay={3000}><Image className='absolute bottom-0 -left-[680px]' src={mouseoverSquareLeft} alt='carré de décoration' /></Reveal>
            <Reveal keyframes={revealRight} triggerOnce duration={1050} delay={2100}><Image className='absolute bottom-[500px] right-0' src={mouseoverSquareRight} alt='carré de décoration' /></Reveal>
            <Reveal keyframes={revealRight} triggerOnce duration={750} delay={2400}><Image className='absolute -bottom-14 right-[610px]' src={mouseoverStanding} alt="dessin d'un homme ayant les bras levés" /></Reveal>
            <Reveal keyframes={revealLeft} triggerOnce duration={750} delay={1200}><Image className='absolute -bottom-12 right-56' src={mouseoverSit} alt="dessin d'un homme assis" /></Reveal>
          </div>
        </section>
    )
}