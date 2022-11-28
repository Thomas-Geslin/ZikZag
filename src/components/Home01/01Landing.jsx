import Image from "next/image";

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

import squareOrange from '../../public/assets/Home01/landing_square_orange.png'
import squareWhite from '../../public/assets/Home01/landing_square_white.png'
import squareDark from '../../public/assets/Home01/landing_square_dark.png'


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
    transform: translateX(50px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const revealLeft = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1; 
  }
`;


export default function Landing01() {
  const { color } = useContext(ColorContext);


    return(
        <section className='overflow-hidden'>
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                navigation={{
                  nextEl: '.nextHome01Landing',
                  prevEl: '.prevHome01Landing'
                }}
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: 5000
                }}
                loop
            >
                <SwiperSlide className="relative">
                    <Reveal keyframes={reveal} duration={600} triggerOnce className="relative">
                    <div className='text-white pt-[310px] pb-96 pl-[370px] bg-cover bg-Home1FirstSlide bg-no-repeat max-2xl:bg-auto max-xl:pl-[5%]'>
                        <Reveal keyframes={revealLeft} duration={800} delay={1300} triggerOnce><p className='font-semibold mb-2 850-1050:text-base 850:text-sm'>GIVING BACK - OUR COMMITMENT</p></Reveal>
                        <Reveal keyframes={revealLeft} duration={800} delay={800} triggerOnce><h1 className='min-w-[780px] font-Amiri text-7xl w-1/2 mb-10 leading-[80px] 850-1050:text-[100px] 850:min-w-fit 850:w-1/2 650-850:text-[70px] 650:leading-[60px] 650:mb-10 430-650:text-[50px] 430:text-[40px] 430:py-4 650:mt-0'>Services that Lead the Way to Better Business</h1></Reveal>
                        <div className='font-semibold flex'>
                            <Reveal keyframes={reveal} duration={800} delay={1800} triggerOnce><button className={`rounded bg-${color} py-5 px-11 mr-5 text-sm border-transparent border-solid border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]`}>LEARN MORE</button></Reveal>
                            <Reveal keyframes={reveal} duration={800} delay={2200} triggerOnce><button className="rounded border border-[#c0c0c3] border-solid py-5 px-11 text-sm hover:bg-white hover:text-black ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]">GET IN TOUCH</button></Reveal>
                        </div>
                    </div>
                    </Reveal>

                    <div className='absolute w-full top-0'>
                        <Reveal keyframes={reveal} duration={800} delay={2000} triggerOnce><Image src={squareWhite} alt='carré blanc' className='absolute top-40 -right-96 animation-landingHome06-top-2'/></Reveal>
                        <Reveal keyframes={reveal} duration={800} delay={2500} triggerOnce><Image src={squareWhite} alt='carré blanc' className='absolute -top-52 -left-[500px] animation-landingHome06-top' /></Reveal>
                        <Reveal keyframes={revealRight} duration={800} delay={1500} triggerOnce><Image src={squareOrange} alt='carré orange' className='z-10 absolute top-4 -right-[450px] animation-landingHome06-top-3' /></Reveal>
                        <Reveal keyframes={reveal} duration={800} delay={1000} triggerOnce><Image src={squareDark} alt='carré sombre' className='absolute -top-72 -left-60' /></Reveal>
                    </div>

                    <button className='prevHome01Landing group w-14 h-0.5 bg-white absolute left-10 top-[50%] 1050:hidden'><span className='w-3 h-0.5 bg-white -rotate-45 absolute -left-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white rotate-45 absolute -left-0.5 top-1'></span><span className='absolute -right-7 -top-2.5 text-white'>03</span></button>
                    <button className='nextHome01Landing w-14 h-0.5 bg-white absolute right-10 top-[50%] 1050:hidden'><span className='w-3 h-0.5 bg-white rotate-45 absolute -right-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white -rotate-45 absolute -right-0.5 top-1'></span><span className='absolute -left-7 -top-2.5 text-white'>02</span></button>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <Reveal keyframes={reveal} duration={600} triggerOnce className="relative">
                    <div className='text-white pt-[310px] pb-96 pl-[370px] bg-cover bg-Home1SecondSlide bg-no-repeat max-2xl:bg-auto  max-xl:pl-[5%]'>
                        <Reveal keyframes={revealLeft} duration={800} delay={1300} triggerOnce><p className='font-semibold mb-2 850-1050:text-base 850:text-sm'>TECHNOLOGICAL SOLUTIONS</p></Reveal>
                        <Reveal keyframes={revealLeft} duration={800} delay={800} triggerOnce><h1 className='min-w-[780px] font-Amiri text-7xl w-1/2 mb-10 leading-[80px] 850-1050:text-[100px] 850:min-w-fit 850:w-1/2 650-850:text-[70px] 650:leading-[60px] 650:mb-10 430-650:text-[50px] 430:text-[40px] 430:py-4 650:mt-0'>Transformation is at the Hearth of What We Do</h1></Reveal>
                        <div className='font-semibold flex'>
                            <Reveal keyframes={reveal} duration={800} delay={1800} triggerOnce><button className={`rounded bg-${color} py-5 px-11 mr-5 text-sm border-transparent border-solid border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]`}>LEARN MORE</button></Reveal>
                            <Reveal keyframes={reveal} duration={800} delay={2200} triggerOnce><button className="rounded border border-[#c0c0c3] border-solid py-5 px-11 text-sm hover:bg-white hover:text-black ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]">GET IN TOUCH</button></Reveal>
                        </div>
                    </div>
                    </Reveal>

                    <div className='absolute w-full top-0'>
                        <Reveal keyframes={reveal} duration={800} delay={2000} triggerOnce><Image src={squareWhite} alt='carré blanc' className='absolute top-40 -right-96 animation-landingHome06-top-2'/></Reveal>
                        <Reveal keyframes={reveal} duration={800} delay={2500} triggerOnce><Image src={squareWhite} alt='carré blanc' className='absolute -top-52 -left-[500px] animation-landingHome06-top' /></Reveal>
                        <Reveal keyframes={revealRight} duration={800} delay={1500} triggerOnce><Image src={squareOrange} alt='carré orange' className='z-10 absolute top-4 -right-[450px] animation-landingHome06-top-3' /></Reveal>
                        <Reveal keyframes={reveal} duration={800} delay={1000} triggerOnce><Image src={squareDark} alt='carré sombre' className='absolute -top-72 -left-60' /></Reveal>
                    </div>

                    <button className='prevHome01Landing group w-14 h-0.5 bg-white absolute left-10 top-[50%] 1050:hidden'><span className='w-3 h-0.5 bg-white -rotate-45 absolute -left-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white rotate-45 absolute -left-0.5 top-1'></span><span className='absolute -right-7 -top-2.5 text-white'>01</span></button>
                    <button className='nextHome01Landing w-14 h-0.5 bg-white absolute right-10 top-[50%] 1050:hidden'><span className='w-3 h-0.5 bg-white rotate-45 absolute -right-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white -rotate-45 absolute -right-0.5 top-1'></span><span className='absolute -left-7 -top-2.5 text-white'>03</span></button>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <Reveal keyframes={reveal} duration={600} triggerOnce className="relative">
                    <div className='text-white pt-[310px] pb-96 pl-[370px] bg-cover bg-Home1ThirdSlide bg-no-repeat max-2xl:bg-auto max-xl:pl-[5%]'>
                        <Reveal keyframes={revealLeft} duration={800} delay={1300} triggerOnce><p className='font-semibold mb-2 850-1050:text-base 850:text-sm'>OUTSOURCING & NEARSHORE</p></Reveal>
                        <Reveal keyframes={revealLeft} duration={800} delay={800} triggerOnce><h1 className='min-w-[780px] font-Amiri text-7xl w-1/2 mb-10 leading-[80px] 850-1050:text-[100px] 850:min-w-fit 850:w-1/2 650-850:text-[70px] 650:leading-[60px] 650:mb-10 430-650:text-[50px] 430:text-[40px] 430:py-4 650:mt-0'>We Combine Business with Technologies</h1></Reveal>
                        <div className='font-semibold flex'>
                            <Reveal keyframes={reveal} duration={800} delay={1800} triggerOnce><button className={`rounded bg-${color} py-5 px-11 mr-5 text-sm border-transparent border-solid border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]`}>LEARN MORE</button></Reveal>
                            <Reveal keyframes={reveal} duration={800} delay={2200} triggerOnce><button className="rounded border border-[#c0c0c3] border-solid py-5 px-11 text-sm hover:bg-white hover:text-black ease-in-out duration-500 430-1050:text-sm 1050:px-7 1050:py-3 430:text-[12px]">GET IN TOUCH</button></Reveal>
                        </div>
                    </div>
                    </Reveal>

                    <div className='absolute w-full top-0'>
                        <Reveal keyframes={reveal} duration={800} delay={2000} triggerOnce><Image src={squareWhite} alt='carré blanc' className='absolute top-40 -right-96 animation-landingHome06-top-2'/></Reveal>
                        <Reveal keyframes={reveal} duration={800} delay={2500} triggerOnce><Image src={squareWhite} alt='carré blanc' className='absolute -top-52 -left-[500px] animation-landingHome06-top' /></Reveal>
                        <Reveal keyframes={revealRight} duration={800} delay={1500} triggerOnce><Image src={squareOrange} alt='carré orange' className='z-10 absolute top-4 -right-[450px] animation-landingHome06-top-3' /></Reveal>
                        <Reveal keyframes={reveal} duration={800} delay={1000} triggerOnce><Image src={squareDark} alt='carré sombre' className='absolute -top-72 -left-60' /></Reveal>
                    </div>

                    
                    <button className='prevHome01Landing group w-14 h-0.5 bg-white absolute left-10 top-[50%] 1050:hidden'><span className='w-3 h-0.5 bg-white -rotate-45 absolute -left-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white rotate-45 absolute -left-0.5 top-1'></span><span className='absolute -right-7 -top-2.5 text-white'>02</span></button>
                    <button className='nextHome01Landing w-14 h-0.5 bg-white absolute right-10 top-[50%] 1050:hidden'><span className='w-3 h-0.5 bg-white rotate-45 absolute -right-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-white -rotate-45 absolute -right-0.5 top-1'></span><span className='absolute -left-7 -top-2.5 text-white'>01</span></button>
                </SwiperSlide>
            </Swiper>    
        </section>
    )
}