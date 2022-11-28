import Image from "next/image"

// Awesome Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import slide1 from '../../public/assets/Home04/landing_slide_1.jpg'
import slide2 from '../../public/assets/Home04/landing_slide_2.jpg'
import slide3 from '../../public/assets/Home04/landing_slide_3.jpg'

import stat from '../../public/assets/Home02/offer_icon_stat_color.png'
import report from  '../../public/assets/Home02/offer_icon_report_color.png'
import chess from  '../../public/assets/Home04/icon_chess.png'


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
    transform: translateY(-50px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const revealBottom = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1; 
  }
`;


export default function LandingHome04() {
    return(
        <section className="relative top-24">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                navigation={{
                    prevEl: '.prevHome04Landing',
                    nextEl: '.nextHome04Landing'
                }}
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: 6000
                }}
                loop
            >
                <SwiperSlide className="relative">
                    <Reveal keyframes={reveal} duration={400} className="absolute w-screen"><Image src={slide1} alt='personne avec un casque de réalité virtuelle' className='w-full min-w-[1800px] min-h-[790px]' /></Reveal>

                    <div className='text-center text-white relative pt-[10%]'>
                        <Reveal keyframes={revealTop} duration={600} delay={1200}><p className='text-[20px] font-light 850-1050:text-base 850:text-sm'>PERFECT SOLUTION FOR YOUR COMPAGNY</p></Reveal>
                        <Reveal keyframes={revealTop} duration={600} delay={300}><h1 className='text-[130px] font-Amiri -mb-7 -mt-4 850-1050:text-[100px] 650-850:text-[70px] 430-650:text-[50px] 430:text-[40px] 430:py-4 650:mb-0 650:mt-0'>Custom Solutions</h1></Reveal>
                        <Reveal keyframes={revealBottom} duration={600} delay={800}><p className='text-[22px] 850-1050:text-lg 430-850:text-base 430:text-sm'>We seamlessly merge two key componentes - economics and information technology.</p></Reveal>

                        <div className='mt-11 flex justify-center'>
                            <Reveal keyframes={reveal} duration={600} delay={1700}><button className="rounded bg-white py-4 px-9 mr-5 text-[15px] border-transparent font-semibold text-black border-solid hover:text-white border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]">LEARN MORE</button></Reveal>
                            <Reveal keyframes={reveal} duration={600} delay={2300}><button className="rounded border border-[#c0c0c3] border-solid py-4 px-9 text-[15px] font-semibold hover:bg-white hover:text-black ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]">GET IN TOUCH</button></Reveal>
                        </div>

                        <div id='headerViewport' className='w-[61%] min-w-[850px] bg-[#14212b99] flex justify-between m-auto mt-[7%] text-left 850:flex-col 850:min-w-fit 850:w-full 430:mt-[20%]'>
                            <div className='flex items-center hover:bg-white group ease-in-out duration-500 py-8 pl-8'>
                                <Image src={stat} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500 430:text-sm'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>

                            <div className='flex items-center hover:bg-white group ease-in-out duration-500  py-8 pl-8'>
                                <Image src={report} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500 430:text-sm'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>

                            <div className='flex items-center hover:bg-white group ease-in-out duration-500  py-8 pl-8'>
                                <Image src={chess} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500 430:text-sm'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className='prevHome04Landing group w-14 h-0.5 bg-white absolute left-10 top-[45%] max-xl:top-80 1050:hidden'><span className='w-3 h-0.5 bg-white -rotate-45 absolute -left-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white rotate-45 absolute -left-0.5 top-1'></span><span className='absolute -right-7 -top-2.5 text-white'>03</span></button>
                    <button className='nextHome04Landing w-14 h-0.5 bg-white absolute right-10 top-[45%] max-xl:top-80 1050:hidden'><span className='w-3 h-0.5 bg-white rotate-45 absolute -right-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white -rotate-45 absolute -right-0.5 top-1'></span><span className='absolute -left-7 -top-2.5 text-white'>02</span></button>
                </SwiperSlide>



                <SwiperSlide className="relative">
                <Reveal keyframes={reveal} duration={400} className="absolute w-screen"><Image src={slide2} alt='personne avec un casque de réalité virtuelle' className='w-full min-w-[1800px] min-h-[790px]' /></Reveal>

                <div className='text-center text-white relative pt-[10%]'>
                        <Reveal keyframes={revealTop} duration={600} delay={1200}><p className='text-[20px] font-light 850-1050:text-base 850:text-sm'>GLOBAL REACH WITH LOCAL UNDERSTANDING</p></Reveal>
                        <Reveal keyframes={revealTop} duration={600} delay={300}><h1 className='text-[130px] font-Amiri -mb-7 -mt-4 850-1050:text-[100px]  650-850:text-[70px] 430-650:text-[50px] 650:mb-0 650:mt-0 430:text-[35px] 430:py-4'>Passion for Ideas</h1></Reveal>
                        <Reveal keyframes={revealBottom} duration={600} delay={800}><p className='text-[22px] 850-1050:text-lg 430-850:text-base 430:text-sm'>We seamlessly merge two key componentes - economics and information technology.</p></Reveal>

                        <div className='mt-11 flex justify-center'>
                            <Reveal keyframes={reveal} duration={600} delay={1700}><button className="rounded bg-white py-4 px-9 mr-5 text-[15px] border-transparent font-semibold text-black border-solid hover:text-white border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]">LEARN MORE</button></Reveal>
                            <Reveal keyframes={reveal} duration={600} delay={2300}><button className="rounded border border-[#c0c0c3] border-solid py-4 px-9 text-[15px] font-semibold hover:bg-white hover:text-black ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]">GET IN TOUCH</button></Reveal>
                        </div>

                        <div id='headerViewport' className='w-[61%] min-w-[850px] bg-[#14212b99] flex justify-between m-auto mt-[7%] text-left 850:flex-col 850:min-w-fit 850:w-full 430:mt-[20%]'>
                            <div className='flex items-center hover:bg-white group ease-in-out duration-500 py-8 pl-8'>
                                <Image src={stat} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500 430:text-sm'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>

                            <div className='flex items-center hover:bg-white group ease-in-out duration-500  py-8 pl-8'>
                                <Image src={report} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500 430:text-sm'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>

                            <div className='flex items-center hover:bg-white group ease-in-out duration-500  py-8 pl-8'>
                                <Image src={chess} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500 430:text-sm'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className='prevHome04Landing w-14 h-0.5 bg-white absolute left-10  top-[45%] max-xl:top-80 1050:hidden'><span className='w-3 h-0.5 bg-white -rotate-45 absolute -left-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white rotate-45 absolute -left-0.5 top-1'></span><span className='absolute -right-7 -top-2.5 text-white'>01</span></button>
                    <button className='nextHome04Landing w-14 h-0.5 bg-white absolute right-10  top-[45%] max-xl:top-80 1050:hidden'><span className='w-3 h-0.5 bg-white rotate-45 absolute -right-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white -rotate-45 absolute -right-0.5 top-1'></span><span className='absolute -left-7 -top-2.5 text-white'>03</span></button>
                </SwiperSlide>



                <SwiperSlide className="relative">
                    <Reveal keyframes={reveal} duration={400} className="absolute w-screen"><Image src={slide3} alt='personne avec un casque de réalité virtuelle' className='w-full min-w-[1800px] min-h-[790px]' /></Reveal>

                    <div className='text-center text-white relative pt-[10%]'>
                        <Reveal keyframes={revealTop} duration={600} delay={1200}><p className='text-[20px] font-light 850-1050:text-base 850:text-sm'>CREATING YOUR STARTUP NUSINESS WITH</p></Reveal>
                        <Reveal keyframes={revealTop} duration={600} delay={300}><h1 className='text-[130px] font-Amiri -mb-7 -mt-4 850-1050:text-[100px]  650-850:text-[70px] 430-650:text-[50px] 430:text-[40px] 430:py-4 650:mb-0 650:mt-0'>Digital Marketing</h1></Reveal>
                        <Reveal keyframes={revealBottom} duration={600} delay={800}><p className='text-[22px] 850-1050:text-lg 430-850:text-base 430:text-sm'>We seamlessly merge two key componentes - economics and information technology.</p></Reveal>

                        <div className='mt-11 flex justify-center'>
                            <Reveal keyframes={reveal} duration={600} delay={1700}><button className="rounded bg-white py-4 px-9 mr-5 text-[15px] border-transparent font-semibold text-black border-solid hover:text-white border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]">LEARN MORE</button></Reveal>
                            <Reveal keyframes={reveal} duration={600} delay={2300}><button className="rounded border border-[#c0c0c3] border-solid py-4 px-9 text-[15px] font-semibold hover:bg-white hover:text-black ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]">GET IN TOUCH</button></Reveal>
                        </div>

                        <div id='headerViewport' className='w-[61%] min-w-[850px] bg-[#14212b99] flex justify-between m-auto mt-[7%] text-left 850:flex-col 850:min-w-fit 850:w-full 430:mt-[20%]'>
                            <div className='flex items-center hover:bg-white group ease-in-out duration-500 py-8 pl-8'>
                                <Image src={stat} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500 430:text-sm'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>

                            <div className='flex items-center hover:bg-white group ease-in-out duration-500  py-8 pl-8'>
                                <Image src={report} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500 430:text-sm'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>

                            <div className='flex items-center hover:bg-white group ease-in-out duration-500  py-8 pl-8'>
                                <Image src={chess} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500 430:text-sm'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className='prevHome04Landing w-14 h-0.5 bg-white absolute left-10 top-[45%] max-xl:top-80 1050:hidden'><span className='w-3 h-0.5 bg-white -rotate-45 absolute -left-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white rotate-45 absolute -left-0.5 top-1'></span><span className='absolute -right-7 -top-2.5 text-white'>02</span></button>
                    <button className='nextHome04Landing w-14 h-0.5 bg-white absolute right-10 top-[45%] max-xl:top-80 1050:hidden'><span className='w-3 h-0.5 bg-white rotate-45 absolute -right-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white -rotate-45 absolute -right-0.5 top-1'></span><span className='absolute -left-7 -top-2.5 text-white'>01</span></button>
                </SwiperSlide>
            </Swiper>
            
        </section>
    )
}