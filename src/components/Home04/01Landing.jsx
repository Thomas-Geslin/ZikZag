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
                    <Reveal keyframes={reveal} duration={400} className="absolute"><Image src={slide1} alt='personne avec un casque de réalité virtuelle' /></Reveal>

                    <div className='text-center text-white relative pt-44'>
                        <Reveal keyframes={revealTop} duration={600} delay={1200}><p className='text-[20px] font-light'>PERFECT SOLUTION FOR YOUR COMPAGNY</p></Reveal>
                        <Reveal keyframes={revealTop} duration={600} delay={300}><h1 className='text-[130px] font-Amiri -mb-7 -mt-4'>Custom Solutions</h1></Reveal>
                        <Reveal keyframes={revealBottom} duration={600} delay={800}><p className='text-[22px]'>We seamlessly merge two key componentes - economics and information technology.</p></Reveal>

                        <div className='mt-11 flex justify-center'>
                            <Reveal keyframes={reveal} duration={600} delay={1700}><button className="rounded bg-white py-4 px-9 mr-5 text-[15px] border-transparent font-semibold text-black border-solid hover:text-white border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500">LEARN MORE</button></Reveal>
                            <Reveal keyframes={reveal} duration={600} delay={2300}><button className="rounded border border-[#c0c0c3] border-solid py-4 px-9 text-[15px] font-semibold hover:bg-white hover:text-black ease-in-out duration-500">GET IN TOUCH</button></Reveal>
                        </div>

                        <div id='headerViewport' className='w-[61%] bg-[#14212b99] flex justify-between m-auto mt-[165px] text-left'>
                            <div className='flex items-center hover:bg-white group ease-in-out duration-500 py-8 pl-8'>
                                <Image src={stat} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>

                            <div className='flex items-center hover:bg-white group ease-in-out duration-500  py-8 pl-8'>
                                <Image src={stat} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>

                            <div className='flex items-center hover:bg-white group ease-in-out duration-500  py-8 pl-8'>
                                <Image src={stat} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className='prevHome04Landing group w-14 h-0.5 bg-white absolute left-10 top-96'><span className='w-3 h-0.5 bg-white -rotate-45 absolute -left-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white rotate-45 absolute -left-0.5 top-1'></span><span className='absolute -right-7 -top-2.5 text-white'>03</span></button>
                    <button className='nextHome04Landing w-14 h-0.5 bg-white absolute right-10 top-96'><span className='w-3 h-0.5 bg-white rotate-45 absolute -right-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white -rotate-45 absolute -right-0.5 top-1'></span><span className='absolute -left-7 -top-2.5 text-white'>02</span></button>
                </SwiperSlide>



                <SwiperSlide >
                    <Reveal keyframes={reveal} duration={400} className="absolute"><Image src={slide2} alt='personne avec un casque de réalité virtuelle' /></Reveal>

                    <div className='text-center text-white relative pt-44'>
                        <Reveal keyframes={revealTop} duration={600} delay={1200}><p className='text-[20px] font-light'>GLOBAL REACH WITH LOCAL UNDERSTANDING</p></Reveal>
                        <Reveal keyframes={revealTop} duration={600} delay={300}><h1 className='text-[130px] font-Amiri -mb-7 -mt-4'>Passion for Ideas</h1></Reveal>
                        <Reveal keyframes={revealBottom} duration={600} delay={800}><p className='text-[22px]'>We seamlessly merge two key componentes - economics and information technology.</p></Reveal>

                        <div className='mt-11 flex justify-center'>
                            <Reveal keyframes={reveal} duration={600} delay={1700}><button className="rounded bg-white py-4 px-9 mr-5 text-[15px] border-transparent font-semibold text-black border-solid hover:text-white border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500">LEARN MORE</button></Reveal>
                            <Reveal keyframes={reveal} duration={600} delay={2300}><button className="rounded border border-[#c0c0c3] border-solid py-4 px-9 text-[15px] font-semibold hover:bg-white hover:text-black ease-in-out duration-500">GET IN TOUCH</button></Reveal>
                        </div>

                        <div id='headerViewport' className='w-[61%] bg-[#14212b99] flex justify-between m-auto mt-[165px] text-left'>
                            <div className='flex items-center hover:bg-white group ease-in-out duration-500 py-8 pl-8'>
                                <Image src={stat} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>

                            <div className='flex items-center hover:bg-white group ease-in-out duration-500  py-8 pl-8'>
                                <Image src={stat} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>

                            <div className='flex items-center hover:bg-white group ease-in-out duration-500  py-8 pl-8'>
                                <Image src={stat} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className='prevHome04Landing w-14 h-0.5 bg-white absolute left-10 top-96'><span className='w-3 h-0.5 bg-white -rotate-45 absolute -left-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white rotate-45 absolute -left-0.5 top-1'></span><span className='absolute -right-7 -top-2.5 text-white'>01</span></button>
                    <button className='nextHome04Landing w-14 h-0.5 bg-white absolute right-10 top-96'><span className='w-3 h-0.5 bg-white rotate-45 absolute -right-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white -rotate-45 absolute -right-0.5 top-1'></span><span className='absolute -left-7 -top-2.5 text-white'>03</span></button>
                </SwiperSlide>



                <SwiperSlide >
                    <Reveal keyframes={reveal} duration={400} className="absolute"><Image src={slide3} alt='personne avec un casque de réalité virtuelle' /></Reveal>

                    <div className='text-center text-white relative pt-44'>
                        <Reveal keyframes={revealTop} duration={600} delay={1200}><p className='text-[20px] font-light'>CREATING YOUR STARTUP NUSINESS WITH</p></Reveal>
                        <Reveal keyframes={revealTop} duration={600} delay={300}><h1 className='text-[130px] font-Amiri -mb-7 -mt-4'>Digital Marketing</h1></Reveal>
                        <Reveal keyframes={revealBottom} duration={600} delay={800}><p className='text-[22px]'>We seamlessly merge two key componentes - economics and information technology.</p></Reveal>

                        <div className='mt-11 flex justify-center'>
                            <Reveal keyframes={reveal} duration={600} delay={1700}><button className="rounded bg-white py-4 px-9 mr-5 text-[15px] border-transparent font-semibold text-black border-solid hover:text-white border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500">LEARN MORE</button></Reveal>
                            <Reveal keyframes={reveal} duration={600} delay={2300}><button className="rounded border border-[#c0c0c3] border-solid py-4 px-9 text-[15px] font-semibold hover:bg-white hover:text-black ease-in-out duration-500">GET IN TOUCH</button></Reveal>
                        </div>

                        <div id='headerViewport' className='w-[61%] bg-[#14212b99] flex justify-between m-auto mt-[165px] text-left'>
                            <div className='flex items-center hover:bg-white group ease-in-out duration-500 py-8 pl-8'>
                                <Image src={stat} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>

                            <div className='flex items-center hover:bg-white group ease-in-out duration-500  py-8 pl-8'>
                                <Image src={stat} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>

                            <div className='flex items-center hover:bg-white group ease-in-out duration-500  py-8 pl-8'>
                                <Image src={stat} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                                <div className='text-white'>
                                    <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                                    <p className='leading-7 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className='prevHome04Landing w-14 h-0.5 bg-white absolute left-10 top-96'><span className='w-3 h-0.5 bg-white -rotate-45 absolute -left-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white rotate-45 absolute -left-0.5 top-1'></span><span className='absolute -right-7 -top-2.5 text-white'>02</span></button>
                    <button className='nextHome04Landing w-14 h-0.5 bg-white absolute right-10 top-96'><span className='w-3 h-0.5 bg-white rotate-45 absolute -right-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white -rotate-45 absolute -right-0.5 top-1'></span><span className='absolute -left-7 -top-2.5 text-white'>01</span></button>
                </SwiperSlide>
            </Swiper>
            
        </section>
    )
}