import Image from "next/image"

// Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import people from '../../public/assets/Home01/strategy_people.png'
import line01 from '../../public/assets/Home01/strategy_line_01.png'
import line02 from '../../public/assets/Home01/strategy_line_02.png'
import line03 from '../../public/assets/Home01/strategy_line_03.png'
import line04 from '../../public/assets/Home01/strategy_line_04.png'
import line05 from '../../public/assets/Home01/strategy_line_05.png'

import mission from '../../public/assets/Home02/benefits_icon_mission.png'
import light from '../../public/assets/Home02/benefits_icon_light.png'
import work from '../../public/assets/Home02/benefits_icon_work.png'
import target from '../../public/assets/Home02/benefits_icon_target.png'


const reveal = keyframes`
  from {
    transform: scale(0.7);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const revealRightBig = keyframes`
  from {
    opacity: 0;
    transform: translateX(400px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const revealLeftBig = keyframes`
  from {
    opacity: 0;
    transform: translateX(-400px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const revealBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(250px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export default function StrategyHome01() {
    return(
        <section className='text-center pb-60'>
            <h2 className='text-orange font-semibold mb-4 pt-32 relative w-40 m-auto max-xl:pt-36 850:mt-12'><span className='absolute bottom-1 left-3 bg-orange h-0.5 w-2'></span>OUR STRATEGY<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
            <h3 className='font-Amiri text-slightGrey text-6xl mb-5'>Main Principles</h3>

            <div className='mt-20 relative'>
                <div className='absolute top-0'>
                    <Reveal keyframes={revealBottom} triggerOnce duration={1050} delay={300}><Image src={people} alt='dessin de réunion' className='absolute top-0 left-[530px]' /></Reveal>
                    <Reveal keyframes={reveal} triggerOnce duration={1050} delay={1000}><Image src={line01} alt='ligne de décoration' className='absolute left-[530px]' /></Reveal>
                    <Reveal keyframes={reveal} triggerOnce duration={1050} delay={1600}><Image src={line02} alt='ligne de décoration' className='absolute left-[530px]' /></Reveal>
                    <Reveal keyframes={reveal} triggerOnce duration={1050} delay={2200}><Image src={line03} alt='ligne de décoration' className='absolute left-[530px]' /></Reveal>
                    <Reveal keyframes={reveal} triggerOnce duration={1050} delay={2800}><Image src={line04} alt='ligne de décoration' className='absolute left-[530px]' /></Reveal>
                    <Reveal keyframes={reveal} triggerOnce duration={1050} delay={3400}><Image src={line05} alt='ligne de décoration' className='relative left-[530px]' /></Reveal>
                </div>

                <div className='relative grid grid-cols-2 relative'>
                    <Reveal keyframes={revealLeftBig} triggerOnce duration={1050} delay={300}>
                    <div className='flex relative bg-white left-44 text-left items-center rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto'>
                        <Image src={light} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                        <div>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Organization</p>
                            <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover:text-orange' />
                    </div>
                    </Reveal>

                    <Reveal keyframes={revealRightBig} triggerOnce duration={1050} delay={300}>
                    <div className='flex relative bg-white top-4 left-[330px] text-left items-center rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto'>
                        <Image src={mission} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                        <div>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Sustainability</p>
                            <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover:text-orange' />
                    </div>
                    </Reveal>

                    <Reveal keyframes={revealLeftBig} triggerOnce duration={1050} delay={300}>
                    <div className='flex relative bg-white text-left top-12 left-32 items-center  rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto'>
                        <Image src={light} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                        <div>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Marketing</p>
                            <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover:text-orange' />
                    </div>
                    </Reveal>

                    <Reveal keyframes={revealRightBig} triggerOnce duration={1050} delay={300}>
                    <div className='flex relative bg-white text-left top-16 left-96 items-center  rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto'>
                        <Image src={work} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                        <div>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Customer Strategy</p>
                            <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover:text-orange' />
                    </div>
                    </Reveal>

                    <Reveal keyframes={revealLeftBig} triggerOnce duration={1050} delay={300}>
                    <div className='flex relative bg-white text-left items-center top-24 left-40 rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto'>
                        <Image src={light} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                        <div>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Improvement</p>
                            <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover:text-orange' />
                    </div>
                    </Reveal>

                    <Reveal keyframes={revealRightBig} triggerOnce duration={1050} delay={300}>
                    <div className='flex relative bg-white text-left  left-[340px] top-28 items-center  rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto'>
                        <Image src={target} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                        <div>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Transformation</p>
                            <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover:text-orange' />
                    </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}