import Image from "next/image"

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

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
import arrow  from '../../public/assets/Home02/offer_arrow.png'

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


export default function LandingHome09() {
    const { color, secondaryColor } = useContext(ColorContext);
    let slightColor = 'slightOrange';
    let slightBlue = 'slightBlue'
    if(color === 'red') {
        slightColor = 'slightRed';
        slightBlue = 'slightSecondaryBlue'
    }


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
                    <Reveal keyframes={reveal} duration={400} className="absolute w-screen"><Image src={slide1} alt='personne avec un casque de réalité virtuelle' className='w-full min-w-[950px] min-h-[400px]' /></Reveal>

                    <div className='text-center text-white relative pt-[10%]'>
                        <Reveal keyframes={revealTop} duration={600} delay={1200}><p className='text-[20px] font-light 850-1050:text-base 850:text-sm'>PERFECT SOLUTION FOR YOUR COMPAGNY</p></Reveal>
                        <Reveal keyframes={revealTop} duration={600} delay={300}><h1 className='text-[130px] font-Amiri -mb-7 -mt-4 850-1050:text-[100px] 650-850:text-[70px] 430-650:text-[50px] 430:text-[40px] 430:py-4 650:mb-0 650:mt-0'>Custom Solutions</h1></Reveal>
                        <Reveal keyframes={revealBottom} duration={600} delay={800}><p className='text-[22px] 850-1050:text-lg 430-850:text-base 430:text-sm'>We seamlessly merge two key componentes - economics and information technology.</p></Reveal>

                        <div className='mt-11 flex justify-center'>
                            <Reveal keyframes={reveal} duration={600} delay={1700}><button className="rounded bg-white py-4 px-9 mr-5 text-[15px] border-transparent font-semibold text-black border-solid hover:text-white border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]">LEARN MORE</button></Reveal>
                            <Reveal keyframes={reveal} duration={600} delay={2300}><button className="rounded border border-[#c0c0c3] border-solid py-4 px-9 text-[15px] font-semibold hover:bg-white hover:text-black ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]">GET IN TOUCH</button></Reveal>
                        </div>

                        <div id='headerViewport' className='flex font-Amiri text-white h-36 justify-center max-xl:flex-col mt-[177px] max-xl:h-auto max-xl:mt-28 850-1050:mt-16 1050-xl:mt-10 max-xl:top-0 650:w-full'>
                            <div className={`relative flex items-center bg-${color} rounded-tl-lg group max-xl:rounded-t-lg`}>
                                <span className={`absolute left-10 bottom-4 tracking-tighter text-8xl text-${slightColor}`}>01</span>
                                <p className='text-3xl z-10 pl-20 max-xl:py-14 650:pl-6 650:text-2xl'>Consulting for Corporates</p>
                                <div className='pr-24 1050:left-[80%] max-xl:absolute 1050-xl:right-24'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                                <span className='absolute right-32 1050-xl:right-52 1050:left-[77%] w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500'></span>
                            </div>

                            <div className={`relative flex items-center bg-${secondaryColor} group max-xl:rounded-[0]`}>
                                <span className={`text-8xl text-${slightBlue} absolute left-10 bottom-4 tracking-tighter`}>02</span>
                                <p className='text-3xl z-10 pl-20 max-xl:py-14 650:pl-6 650:text-2xl'>Consulting for Private Equity</p>
                                <div className='pr-24 1050:left-[80%] max-xl:absolute 1050-xl:right-24'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                                <span className='absolute right-32 1050-xl:right-52 1050:left-[77%] w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500'></span>
                            </div>

                            <div className={`relative flex items-center bg-${color} rounded-tr-lg group max-xl:rounded-b-lg`}>
                                <span className={`absolute left-10 bottom-4 tracking-tighter text-8xl text-${slightColor}`}>03</span>
                                <p className='text-3xl z-10 pl-20 max-xl:py-14 650:pl-6 650:text-2xl'>Consulting for Corporates</p>
                                <div className='pr-24 1050:left-[80%] max-xl:absolute 1050-xl:right-24'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                                <span className='absolute right-32 1050-xl:right-52 1050:left-[77%] w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500'></span>
                            </div>
                        </div>
                    </div>

                    <button className='prevHome04Landing group w-14 h-0.5 bg-white absolute left-10 top-[45%] max-xl:top-80 1050:hidden'><span className='w-3 h-0.5 bg-white -rotate-45 absolute -left-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white rotate-45 absolute -left-0.5 top-1'></span><span className='absolute -right-7 -top-2.5 text-white'>03</span></button>
                    <button className='nextHome04Landing w-14 h-0.5 bg-white absolute right-10 top-[45%] max-xl:top-80 1050:hidden'><span className='w-3 h-0.5 bg-white rotate-45 absolute -right-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white -rotate-45 absolute -right-0.5 top-1'></span><span className='absolute -left-7 -top-2.5 text-white'>02</span></button>
                </SwiperSlide>



                <SwiperSlide >
                    <Reveal keyframes={reveal} duration={400} className="absolute w-screen"><Image src={slide2} alt='personne avec un casque de réalité virtuelle' className='w-full min-w-[950px] min-h-[400px]' /></Reveal>

                    <div className='text-center text-white relative pt-[10%]'>
                        <Reveal keyframes={revealTop} duration={600} delay={1200}><p className='text-[20px] font-light 850-1050:text-base 850:text-sm'>GLOBAL REACH WITH LOCAL UNDERSTANDING</p></Reveal>
                        <Reveal keyframes={revealTop} duration={600} delay={300}><h1 className='text-[130px] font-Amiri -mb-7 -mt-4 850-1050:text-[100px]  650-850:text-[70px] 430-650:text-[50px] 650:mb-0 650:mt-0 430:text-[35px] 430:py-4'>Passion for Ideas</h1></Reveal>
                        <Reveal keyframes={revealBottom} duration={600} delay={800}><p className='text-[22px] 850-1050:text-lg 430-850:text-base 430:text-sm'>We seamlessly merge two key componentes - economics and information technology.</p></Reveal>

                        <div className='mt-11 flex justify-center'>
                            <Reveal keyframes={reveal} duration={600} delay={1700}><button className="rounded bg-white py-4 px-9 mr-5 text-[15px] border-transparent font-semibold text-black border-solid hover:text-white border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]">LEARN MORE</button></Reveal>
                            <Reveal keyframes={reveal} duration={600} delay={2300}><button className="rounded border border-[#c0c0c3] border-solid py-4 px-9 text-[15px] font-semibold hover:bg-white hover:text-black ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]">GET IN TOUCH</button></Reveal>
                        </div>

                        <div className='flex font-Amiri text-white h-36 justify-center max-xl:flex-col mt-[177px] max-xl:h-auto max-xl:mt-28 850-1050:mt-16 1050-xl:mt-10 max-xl:top-0 650:w-full'>
                            <div className={`relative flex items-center bg-${color} rounded-tl-lg group max-xl:rounded-t-lg`}>
                                <span className={`absolute left-10 bottom-4 tracking-tighter text-8xl text-${slightColor}`}>01</span>
                                <p className='text-3xl z-10 pl-20 max-xl:py-14 650:pl-6 650:text-2xl'>Consulting for Corporates</p>
                                <div className='pr-24 1050:left-[80%] max-xl:absolute 1050-xl:right-24'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                                <span className='absolute right-32 1050-xl:right-52 1050:left-[77%] w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500'></span>
                            </div>

                            <div className={`relative flex items-center bg-${secondaryColor} group max-xl:rounded-[0]`}>
                                <span className={`text-8xl text-${slightBlue} absolute left-10 bottom-4 tracking-tighter`}>02</span>
                                <p className='text-3xl z-10 pl-20 max-xl:py-14 650:pl-6 650:text-2xl'>Consulting for Private Equity</p>
                                <div className='pr-24 1050:left-[80%] max-xl:absolute 1050-xl:right-24'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                                <span className='absolute right-32 1050-xl:right-52 1050:left-[77%] w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500'></span>
                            </div>

                            <div className={`relative flex items-center bg-${color} rounded-tr-lg group max-xl:rounded-b-lg`}>
                                <span className={`absolute left-10 bottom-4 tracking-tighter text-8xl text-${slightColor}`}>03</span>
                                <p className='text-3xl z-10 pl-20 max-xl:py-14 650:pl-6 650:text-2xl'>Consulting for Corporates</p>
                                <div className='pr-24 1050:left-[80%] max-xl:absolute 1050-xl:right-24'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                                <span className='absolute right-32 1050-xl:right-52 1050:left-[77%] w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500'></span>
                            </div>
                        </div>
                    </div>

                    <button className='prevHome04Landing w-14 h-0.5 bg-white absolute left-10  top-[45%] max-xl:top-80 1050:hidden'><span className='w-3 h-0.5 bg-white -rotate-45 absolute -left-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white rotate-45 absolute -left-0.5 top-1'></span><span className='absolute -right-7 -top-2.5 text-white'>01</span></button>
                    <button className='nextHome04Landing w-14 h-0.5 bg-white absolute right-10  top-[45%] max-xl:top-80 1050:hidden'><span className='w-3 h-0.5 bg-white rotate-45 absolute -right-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white -rotate-45 absolute -right-0.5 top-1'></span><span className='absolute -left-7 -top-2.5 text-white'>03</span></button>
                </SwiperSlide>



                <SwiperSlide >
                    <Reveal keyframes={reveal} duration={400} className="absolute w-screen"><Image src={slide3} alt='personne avec un casque de réalité virtuelle' className='w-full min-w-[950px] min-h-[400px]' /></Reveal>

                    <div className='text-center text-white relative pt-[10%]'>
                        <Reveal keyframes={revealTop} duration={600} delay={1200}><p className='text-[20px] font-light 850-1050:text-base 850:text-sm'>CREATING YOUR STARTUP NUSINESS WITH</p></Reveal>
                        <Reveal keyframes={revealTop} duration={600} delay={300}><h1 className='text-[130px] font-Amiri -mb-7 -mt-4 850-1050:text-[100px]  650-850:text-[70px] 430-650:text-[50px] 430:text-[40px] 430:py-4 650:mb-0 650:mt-0'>Digital Marketing</h1></Reveal>
                        <Reveal keyframes={revealBottom} duration={600} delay={800}><p className='text-[22px] 850-1050:text-lg 430-850:text-base 430:text-sm'>We seamlessly merge two key componentes - economics and information technology.</p></Reveal>

                        <div className='mt-11 flex justify-center'>
                            <Reveal keyframes={reveal} duration={600} delay={1700}><button className="rounded bg-white py-4 px-9 mr-5 text-[15px] border-transparent font-semibold text-black border-solid hover:text-white border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]">LEARN MORE</button></Reveal>
                            <Reveal keyframes={reveal} duration={600} delay={2300}><button className="rounded border border-[#c0c0c3] border-solid py-4 px-9 text-[15px] font-semibold hover:bg-white hover:text-black ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]">GET IN TOUCH</button></Reveal>
                        </div>

                        <div className='flex font-Amiri text-white h-36 justify-center max-xl:flex-col mt-[177px] max-xl:h-auto max-xl:mt-28 850-1050:mt-16 1050-xl:mt-10 max-xl:top-0 650:w-full'>
                            <div className={`relative flex items-center bg-${color} rounded-tl-lg group max-xl:rounded-t-lg`}>
                                <span className={`absolute left-10 bottom-4 tracking-tighter text-8xl text-${slightColor}`}>01</span>
                                <p className='text-3xl z-10 pl-20 max-xl:py-14 650:pl-6 650:text-2xl'>Consulting for Corporates</p>
                                <div className='pr-24 1050:left-[80%] max-xl:absolute 1050-xl:right-24'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                                <span className='absolute right-32 1050-xl:right-52 1050:left-[77%] w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500'></span>
                            </div>

                            <div className={`relative flex items-center bg-${secondaryColor} group max-xl:rounded-[0]`}>
                                <span className={`text-8xl text-${slightBlue} absolute left-10 bottom-4 tracking-tighter`}>02</span>
                                <p className='text-3xl z-10 pl-20 max-xl:py-14 650:pl-6 650:text-2xl'>Consulting for Private Equity</p>
                                <div className='pr-24 1050:left-[80%] max-xl:absolute 1050-xl:right-24'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                                <span className='absolute right-32 1050-xl:right-52 1050:left-[77%] w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500'></span>
                            </div>

                            <div className={`relative flex items-center bg-${color} rounded-tr-lg group max-xl:rounded-b-lg`}>
                                <span className={`absolute left-10 bottom-4 tracking-tighter text-8xl text-${slightColor}`}>03</span>
                                <p className='text-3xl z-10 pl-20 max-xl:py-14 650:pl-6 650:text-2xl'>Consulting for Corporates</p>
                                <div className='pr-24 1050:left-[80%] max-xl:absolute 1050-xl:right-24'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                                <span className='absolute right-32 1050-xl:right-52 1050:left-[77%] w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500'></span>
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