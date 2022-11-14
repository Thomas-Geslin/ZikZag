import Image from "next/image"

// Awesome Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import people from '../../../public/assets/PAGES/About/strategy_people.png'
import graphic from '../../../public/assets/PAGES/About/strategy_graphic.png'
import line01 from '../../../public/assets/PAGES/About/strategy_line_01.png'
import line02 from '../../../public/assets/PAGES/About/strategy_line_02.png'
import line03 from '../../../public/assets/PAGES/About/strategy_line_03.png'
import line04 from '../../../public/assets/PAGES/About/strategy_line_04.png'


// Keyframe for smooth reveal
const revealBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const revealRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(200px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const revealLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


export default function BenefitsTeam() {
    return(
        <section className='flex justify-center mb-40'>
            <div className="relative w-[35%] max-xl:pl-20">
                <Reveal keyframes={revealBottom} duration={800} triggerOnce><Image id='strategyAbout01' src={people} alt='dessin de personne ayant une conversation' /></Reveal>
                <Reveal keyframes={revealLeft} duration={800} delay={700} triggerOnce><Image id='strategyAbout02' src={graphic} alt='dessin de graphique' className="absolute bottom-0" /></Reveal>
                <Reveal keyframes={revealRight} duration={800} delay={1400} triggerOnce><Image id='strategyAbout03' src={line01} alt='ligne de décoration' className="absolute bottom-0 right-0" /></Reveal>
                <Reveal keyframes={revealLeft} duration={800} delay={2100} triggerOnce><Image id='strategyAbout04' src={line02} alt='ligne de décoration' className="absolute bottom-0" /></Reveal>
                <Reveal keyframes={revealRight} duration={800} delay={2800} triggerOnce><Image id='strategyAbout05' src={line03} alt='ligne de décoration' className="absolute bottom-0 right-0" /></Reveal>
                <Reveal keyframes={revealLeft} duration={800} delay={3500} triggerOnce><Image id='strategyAbout06' src={line04} alt='ligne de décoration' className="absolute bottom-0" /></Reveal>
            </div>

            <div className='font-NunitoSans w-1/3 relative top-24 ml-28 max-xl:w-auto'>
                <h2 className='text-orange font-bold mb-2 relative'>OUR BENEFITS<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                <h3 className='text-slightGrey w-3/4 font-Amiri text-5xl leading-tight mb-4'>Few Resons Why You Should Choose Us</h3>

                <div className='flex items-center mb-5 group'>
                    <div className='p-2 rounded-full shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] mr-6 group-hover:bg-orange ease-in-out duration-300'><FontAwesomeIcon icon={faCheck} className='w-5 text-orange group-hover:opacity-100 group-hover:text-white ease-in-out duration-300' /></div>
                    <p className='w-2/3 text-greyText leading-8 text-lg'>High standards of professionalism, integrity. Establishment of close working relationships.</p>
                </div>

                <div className='flex items-center mb-5 group'>
                    <div className='p-2 rounded-full shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] mr-6 group-hover:bg-orange ease-in-out duration-300'><FontAwesomeIcon icon={faCheck} className='w-5 text-orange group-hover:opacity-100 group-hover:text-white ease-in-out duration-300' /></div>
                    <p className='w-2/3 text-greyText leading-8 text-lg'>We do not have to be the best, we do have to give our best. Ability to learn.</p>
                </div>

                <div className='flex items-center 850:mb-20 group'>
                    <div className='p-2 rounded-full shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] mr-6 group-hover:bg-orange ease-in-out duration-300'><FontAwesomeIcon icon={faCheck} className='w-5 text-orange group-hover:opacity-100 group-hover:text-white ease-in-out duration-300' /></div>
                    <p className='w-2/3 text-greyText leading-8 text-lg'>A different way of thinking, both inside and outside the box. We do not have to be the best.</p>
                </div>
            </div>
        </section>
    )
}