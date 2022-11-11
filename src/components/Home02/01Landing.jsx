import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';

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


export default function Landing() {
  useEffect(() => {
    // Intersection Obeserver for fixed GoToTop
    const target = document.getElementById('landingReveal1');
    const target2 = document.getElementById('landingReveal2');
    const target3 = document.getElementById('landingReveal3');
    const target4 = document.getElementById('landingReveal4');
    const target5 = document.getElementById('landingReveal5');
    const target6 = document.getElementById('landingReveal6');
    const target7 = document.getElementById('landingReveal7');
    const target8 = document.getElementById('landingReveal8');
    const target9 = document.getElementById('landingReveal9');
    const target10 = document.getElementById('landingReveal10');
    const target11 = document.getElementById('landingReveal11');
    const target12 = document.getElementById('landingReveal12');
    const target13 = document.getElementById('landingReveal13');
    const target14 = document.getElementById('landingReveal14');
    const target15 = document.getElementById('landingReveal15');
    const target16 = document.getElementById('landingReveal16');

    const viewport = document.getElementById('landingViewport');

    const options = {
      root: null,
      treshold: 0.5
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
          if(entry.isIntersecting) { 
            target.classList.add('revealLandingFirstHome02-1');
            target2.classList.add('revealLandingFirstHome02-2');
            target3.classList.add('revealLandingFirstHome02-3');
            target4.classList.add('revealLandingFirstHome02-4');
            target5.classList.add('revealLandingFirstHome02-5');
            target6.classList.add('revealLandingFirstHome02-6');
            target7.classList.add('revealLandingFirstHome02-7');
            target8.classList.add('revealLandingFirstHome02-8');
            target9.classList.add('revealLandingRightHome02-2');
            target10.classList.add('revealLandingRightHome02-3');
            target11.classList.add('revealLandingRightHome02-1');
            target12.classList.add('revealLandingRightHome02-4');
            target13.classList.add('revealLandingBottomHome02');
            target14.classList.add('revealLandingBottomHome02-1');
            target15.classList.add('revealLandingLeftHome02');
            target16.classList.add('revealLandingLeftHome02-2');
          }
      })
    }, options);
    observer.observe(viewport);
  },[])

    return(
        <section id="landingViewport" className='bg-greyBackground bg-squareBackground bg-no-repeat bg-[bottom_-50rem_left_43rem] relative mt-32 pb-6 max-xl:mt-28'>
          <div className='ml-52 pt-56 1060:ml-10 1060:pt-20'>
            <h2 id='landingReveal9' className='opacity-0 font-NunitoSans text-orange text-lg font-semibold max-xl:w-10/12 850:text-base'>PERFECT SOLUTION FOR YOUR COMPAGNY</h2>
            <h1 id='landingReveal10' className='opacity-0 font-Amiri text-slightGrey text-xl leading-90 w-5/12  max-xl:w-10/12 850:text-3xl'>Your Business from Idea to Launching</h1>

            <div className='flex items-center pb-64 mt-8'>
              <Link href='/About'><div id='landingReveal1' className='opacity-0 group bg-white px-7 py-6 rounded-full shadow-[5px_5px_15px_3px_#dddddd] hover:bg-orange hover:cursor-pointer ease-linear duration-300'><FontAwesomeIcon icon={faPlay} className='w-4 text-orangeBright group-hover:text-white' /></div></Link>
              <p id='landingReveal2' className='font-bold text-slightGrey text-sm ml-5 opacity-0'>HOW IT WORKS</p>
            </div>
          </div>

          <div id='landingReveal13' onClick={() => window.scrollTo({ top: 1050, behavior: 'smooth' })} className='opacity-0 delay-[1.6s] flex absolute bottom-4 left-36 -rotate-90 hover:cursor-pointer max-xl:left-8'><span className='relative top-3 h-0.5 w-14 mr-2 bg-orange'></span><p className='font-semibold'>SCROLL</p></div>

          <div id='parallaxWrapper' className='max-xl:hidden'>
            <Image id='landingReveal3' className='opacity-0 absolute top-44 right-24' src={mouseoverLine01} alt='ligne de décoration' />
            <Image id='landingReveal4' className='opacity-0 absolute top-36 right-[850px]' src={mouseoverLine02} alt='ligne de décoration' />
            <Image id='landingReveal5' className='opacity-0 absolute top-[130px] right-72' src={mouseoverLine03} alt='ligne de décoration' />
            <Image id='landingReveal6' className='opacity-0 absolute top-[550px] right-28' src={mouseoverLine04} alt='ligne de décoration' />
            <Image id='landingReveal7' className='opacity-0 absolute top-[300px] right-[920px]' src={mouseoverLine05} alt='ligne de décoration' />
            <Image id='landingReveal8' className='opacity-0 absolute top-[660px] right-[880px]' src={mouseoverLine06} alt='ligne de décoration' />
            <Image id='landingReveal14' className='opacity-0 absolute top-80 right-72' src={mouseoverRocket} alt='fusée de décoration' />
            <Image id='landingReveal15' className='opacity-0 absolute top-40 -left-[680px]' src={mouseoverSquareLeft} alt='carré de décoration' />
            <Image id='landingReveal11' className='opacity-0 absolute top-20 right-0' src={mouseoverSquareRight} alt='carré de décoration' />
            <Image id='landingReveal12' className='opacity-0 absolute top-44 right-[610px] max-[1660px]:w-[200px]' src={mouseoverStanding} alt="dessin d'un homme ayant les bras levés" />
            <Image id='landingReveal16' className='absolute top-80 right-56 opacity-0 max-[1660px]:w-[350px]' src={mouseoverSit} alt="dessin d'un homme assis" />
          </div>
        </section>
    )
}