import Head from "next/head"
import Image from "next/image"

// Awesome Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'

import HeaderSecond from '../../components/HeaderSecond'
import Footer from '../../components/Footer'
import PricingHome03 from '../../components/Home03/04Pricing'

import { OfferGridData } from "../../datas/Home01/OfferGridData"
// Philosophy Data
import { PhilosophyGridData } from '../../datas/Home02/PhilisophyGridData'

import arrow  from '../../public/assets/Home02/offer_arrow.png'
import line from '../../public/assets/PAGES/OurServices/offer_line.png'
// Assets Philosophy
import philosophyBackground from '../../public/assets/PAGES/OurServices/philosophy_background.jpg'
import philosophyLine from '../../public/assets/Home02/philosophy_background_line.png'

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



export default function OurServices() {
    return(
        <div>
            <Head>
                <title>ZikZag | OurServices</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            <main>
                <section className="bg-ourServicesBackground bg-no-repeat text-center text-white">
                    <h1 className="font-Amiri text-6xl pt-60 mb-6">Our Services</h1>
                    <p className="font-semibold text-sm pb-48 z-10"><span className="opacity-50">HOME &gt;</span> OUR SERVICES</p>
                </section>


                <section className='text-center relative mb-20'>
                    <h2 className='text-orange font-bold mb-4 pt-24 relative w-40 m-auto max-xl:pt-36 850:mt-12'><span className='absolute bottom-1 left-0 bg-orange h-0.5 w-2'></span>WHAT WE OFFER<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h3 className='font-Amiri text-slightGrey text-5xl mb-5'>Business Shaped Solutions</h3>
                    <p className='text-greyText text-lg w-[40%] leading-8 m-auto mb-10 1060:w-9/12'>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>
                
                    <Image src={line} alt='ligne de décoration' className='absolute left-28 top-32' />

                    <div className='grid grid-cols-3 m-auto w-[63%] mt-20'>
                        {OfferGridData.map((el) => {
                            return(
                                <div key={el.index} className={`OfferCardBackground-${el.index} rounded-lg w-[370px] m-auto mb-20 relative group hover:cursor-pointer hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.15)] ease-in-out duration-500`}>
                                    <span className='w-full h-full absolute bg-white left-0 rounded-lg opacity-0 group-hover:opacity-100 ease-in-out duration-500'></span>
                                    <div className={`bg-${el.icon} bg-no-repeat bg-center bg-[length:45px_45px] bg-white z-10 rounded-full -top-10 left-12 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] w-20 h-20 absolute group-hover:bg-orange ease-in-out duration-500`}><Image src={el.iconWhite} alt={el.altIcon} className='opacity-0 w-12 group-hover:opacity-100 relative left-4 top-4 ease-in-out duration-500' /></div>
                                    <p className='relative z-10 text-white font-Amiri text-4xl w-9/12 text-left pl-12 pb-28 pt-16 group-hover:text-slightGrey ease-in-out duration-500'>{el.title}</p>
                                    <div className='pl-12 pb-8 group-hover:opacity-0 ease-in-out duration-500'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px] opacity-70' /></div>
                                    <p className='absolute bottom-16 pl-12 text-left w-11/12 text-greyText leading-7 translate-y-14 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500'>Strategy experience and analyical expertise combine to enable decision making and create value.</p>
                                </div>
                            )
                        })}
                    </div>
                </section>


                <section className='flex relative -top-10 max-2xl:flex-col'>
                    <Image src={philosophyBackground} alt="Réunion d'entreprise" className='rounded-xl max-2xl:rounded-none max-2xl:w-full' />

                    <div className='bg-[#14212B] w-1/2 relative rounded-bl-lg top-10 pl-20 max-2xl:rounded-none max-2xl:w-full max-2xl:top-0 850:pb-96 650:pl-10'>
                        <Image src={philosophyLine} alt='dessin de ligne de décoration' className='absolute right-1 top-1' />
                        <h2 className='text-orange font-semibold mb-4 relative mt-32 650:mt-80'>OUR PHILOSOPHY<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
                        <h3 className='font-Amiri text-white text-5xl w-8/12 leading-[55px] mb-4'>Our Core Values and Principes</h3>
                        <p className='text-[#dddfe1] text-lg w-[72%] leading-8 mb-10'>We’ve designed a culture that allows our stewards to assimilate with our clients and bring the best of who we are to your business. Our culture drives our – and more importantly – your success.</p>

                        <div className='grid grid-cols-3 h-48 w-10/12 pl-10 max-2xl:h-60 850:flex 850:flex-col 650:pl-0'>
                        {PhilosophyGridData.map((el) => {
                            return (
                            <div key={el.index} className='flex bg-[#15222a] rounded-md w-[210px] mb-4 pl-4 hover:cursor-pointer hover:bg-orange ease-in-out duration-500 group'>
                                <FontAwesomeIcon icon={faArrowDownLong} className='relative -top-5 w-3 -rotate-45 text-orange group-hover:text-white ease-in-out duration-500' />
                                <p className='text-lg text-white font-semibold w-10/12 py-4 px-3'>{el.line}</p>
                            </div>
                            )
                        })}
                        </div>
                    </div>
                </section>


                <PricingHome03 />


                <section className='text-center mb-80 mt-40'>
                    <div className='mt-20 relative'>
                        <div className='absolute top-0'>
                            <Reveal keyframes={revealBottom} duration={800} triggerOnce><Image src={people} alt='dessin de réunion' className='absolute top-0 left-[530px]' /></Reveal>
                            <Reveal keyframes={revealScale} duration={800} delay={800} triggerOnce><Image src={line01} alt='ligne de décoration' className='absolute left-[530px]' /></Reveal>
                            <Reveal keyframes={revealScale} duration={800} delay={1500} triggerOnce><Image src={line02} alt='ligne de décoration' className='absolute left-[530px]' /></Reveal>
                            <Reveal keyframes={revealScale} duration={800} delay={2100} triggerOnce><Image src={line03} alt='ligne de décoration' className='absolute left-[530px]' /></Reveal>
                            <Reveal keyframes={revealScale} duration={800} delay={2700} triggerOnce><Image src={line04} alt='ligne de décoration' className='absolute left-[530px]' /></Reveal>
                            <Reveal keyframes={revealScale} duration={800} delay={3600} triggerOnce><Image src={line05} alt='ligne de décoration' className='relative left-[530px]' /></Reveal>
                        </div>

                        <div className='relative grid grid-cols-2 relative'>
                            <Reveal keyframes={revealLeft} duration={800} triggerOnce>
                            <div className='flex relative bg-white left-44 text-left items-center rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto'>
                                <Image src={light} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                                <div>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Organization</p>
                                    <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                                </div>
                                <FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover:text-orange' />
                            </div>
                            </Reveal>


                            <Reveal keyframes={revealRight} duration={800} triggerOnce>
                            <div className='flex relative bg-white top-4 left-[330px] text-left items-center rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto'>
                                <Image src={mission} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                                <div>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Sustainability</p>
                                    <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                                </div>
                                <FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover:text-orange' />
                            </div>
                            </Reveal>
                            

                            <Reveal keyframes={revealLeft} duration={800} triggerOnce>
                            <div className='flex relative bg-white text-left top-12 left-32 items-center  rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto'>
                                <Image src={light} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                                <div>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Marketing</p>
                                    <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                                </div>
                                <FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover:text-orange' />
                            </div>
                            </Reveal>
                            

                            <Reveal keyframes={revealRight} duration={800} triggerOnce>
                            <div className='flex relative bg-white text-left top-16 left-96 items-center  rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto'>
                                <Image src={work} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                                <div>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Customer Strategy</p>
                                    <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                                </div>
                                <FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover:text-orange' />
                            </div>
                            </Reveal>
                            

                            <Reveal keyframes={revealLeft} duration={800} triggerOnce>
                            <div className='flex relative bg-white text-left items-center top-24 left-40 rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[45%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto'>
                                <Image src={light} alt="icone d'ampoule" className='mx-6 max-xl:py-10' />
                                <div>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>Improvement</p>
                                    <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
                                </div>
                                <FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover:text-orange' />
                            </div>
                            </Reveal>
                            

                            <Reveal keyframes={revealRight} duration={800} triggerOnce>
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
            </main>

            <Footer />
        </div>
    )
}