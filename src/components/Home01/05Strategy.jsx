import Image from "next/image"

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

// Awesome Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

// Assets
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
import chart from '../../public/assets/Home01/icon_chart.png'
import pyramid from '../../public/assets/Home01/icon_pyramid.png'


// Keyframe for smooth reveal
const revealBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(400px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const revealRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(400px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const revealLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-400px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const revealScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.6);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;


export default function StrategyHome01() {
  const { color } = useContext(ColorContext);


    return(
        <section className='text-center pb-60 overflow-hidden 1050-xl:pb-[750px] 850-1050:pb-[750px] 650-850:pb-[700px] 650:pb-[600px]'>
            <h2 className={`text-${color} font-bold mb-4 pt-32 relative w-40 m-auto max-xl:pt-36 850:mt-12`}><span className={`absolute bottom-1 left-2 bg-${color} h-0.5 w-2`}></span>OUR STRATEGY<span className={`absolute bottom-1 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
            <h3 className='font-Amiri text-slightGrey text-6xl mb-5'>Main Principles</h3>

            <div className='mt-20 relative'>
                <div className='absolute top-0 left-[50%] translate-x-[-50%] xl-2xl:left-80 max-2xl:translate-x-0 max-xl:top-[500px] max-xl:left-24'>
                    <Reveal keyframes={revealBottom} duration={800} triggerOnce><Image src={people} alt='dessin de réunion' className='absolute top-0' /></Reveal>
                    <Reveal keyframes={revealScale} duration={800} delay={800} triggerOnce><Image src={line01} alt='ligne de décoration' className='absolute' /></Reveal>
                    <Reveal keyframes={revealScale} duration={800} delay={1500} triggerOnce><Image src={line02} alt='ligne de décoration' className='absolute' /></Reveal>
                    <Reveal keyframes={revealScale} duration={800} delay={2100} triggerOnce><Image src={line03} alt='ligne de décoration' className='absolute' /></Reveal>
                    <Reveal keyframes={revealScale} duration={800} delay={2700} triggerOnce><Image src={line04} alt='ligne de décoration' className='absolute' /></Reveal>
                    <Reveal keyframes={revealScale} duration={800} delay={3600} triggerOnce><Image src={line05} alt='ligne de décoration' className='relative' /></Reveal>
                </div>

                <div className='relative grid grid-cols-2 relative min-3xl:left-20 max-xl:grid-cols-1'>
                    <Reveal keyframes={revealLeft} duration={800} triggerOnce className="h-[150px]">
                    <div className='flex relative bg-white left-44 text-left items-center rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto 1050-xl:max-w-[800px] 1050-xl:left-[150px] 1050:left-[10%] 1050:max-w-[80%]'>
                        <Image src={pyramid} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                        <div>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Organization</p>
                            <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className={`w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover-text-${color}`} />
                    </div>
                    </Reveal>


                    <Reveal keyframes={revealRight} duration={800} triggerOnce className="h-[150px]">
                    <div className='flex relative bg-white top-4 left-[330px] text-left items-center rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto 1050-xl:max-w-[800px] 1050-xl:left-[80px] 1050:left-[10%] 1050:max-w-[80%]'>
                        <Image src={mission} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                        <div>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Sustainability</p>
                            <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className={`w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover-text-${color}`} />
                    </div>
                    </Reveal>
                    

                    <Reveal keyframes={revealLeft} duration={800} triggerOnce className="h-[150px]">
                    <div className='flex relative bg-white text-left top-12 left-32 items-center rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto 1050-xl:max-w-[800px] 1050:left-[10%] 1050:max-w-[80%]'>
                        <Image src={light} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                        <div>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Marketing</p>
                            <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className={`w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover-text-${color}`} />
                    </div>
                    </Reveal>
                    

                    <Reveal keyframes={revealRight} duration={800} triggerOnce className="h-[150px]">
                    <div className='flex relative bg-white text-left top-16 left-96 items-center  rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto 1050-xl:max-w-[800px] 1050-xl:left-[80px] 1050-xl:top-[600px] 1050:left-[10%] 1050:max-w-[80%] 850-1050:top-[600px] 650-850:top-[500px] 650:top-[400px]'>
                        <Image src={work} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                        <div>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Customer Strategy</p>
                            <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className={`w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover-text-${color}`} />
                    </div>
                    </Reveal>
                    

                    <Reveal keyframes={revealLeft} duration={800} triggerOnce className="h-[150px]">
                    <div className='flex relative bg-white text-left items-center top-24 left-40 rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto 1050-xl:max-w-[800px] 1050-xl:top-[650px] 1050:left-[10%] 1050:max-w-[80%] 850-1050:top-[650px] 650-850:top-[550px] 650:top-[450px]'>
                        <Image src={chart} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                        <div>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Improvement</p>
                            <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className={`w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover-text-${color}`} />
                    </div>
                    </Reveal>
                    

                    <Reveal keyframes={revealRight} duration={800} triggerOnce className="h-[150px]">
                    <div className='flex relative bg-white text-left  left-[340px] top-28 items-center  rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto 1050-xl:max-w-[800px] 1050-xl:left-[80px] 1050-xl:top-[700px] 1050:left-[10%] 1050:max-w-[80%] 850-1050:top-[700px] 650-850:top-[600px] 650:top-[500px]'>
                        <Image src={target} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                        <div>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Transformation</p>
                            <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRightLong} className={`w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover-text-${color}`} />
                    </div> 
                    </Reveal>             
                </div>
            </div>
        </section>
    )
}