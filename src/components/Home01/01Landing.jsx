import Image from "next/image";

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
    return(
        <section className='overflow-hidden'>
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                navigation={{
                  nextEl: 'nextNavHome01'
                }}
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: 5000
                }}
                loop
            >
                <SwiperSlide>
                    <Reveal keyframes={reveal} duration={600} triggerOnce className="relative">
                    <div className='text-white pt-[310px] pb-96 pl-[370px] bg-cover bg-Home1FirstSlide bg-no-repeat'>
                        <Reveal keyframes={revealLeft} duration={800} delay={1300} triggerOnce><p className='font-semibold mb-2'>GIVING BACK - OUR COMMITMENT</p></Reveal>
                        <Reveal keyframes={revealLeft} duration={800} delay={800} triggerOnce><h1 className='font-Amiri text-7xl w-1/2 mb-10 leading-[80px]'>Services that Lead the Way to Better Business</h1></Reveal>
                        <div className='font-semibold flex'>
                            <Reveal keyframes={reveal} duration={800} delay={1800} triggerOnce><button className="rounded bg-orange py-5 px-11 mr-5 text-sm border-transparent border-solid border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500">LEARN MORE</button></Reveal>
                            <Reveal keyframes={reveal} duration={800} delay={2200} triggerOnce><button className="rounded border border-[#c0c0c3] border-solid py-5 px-11 text-sm hover:bg-white hover:text-black ease-in-out duration-500">GET IN TOUCH</button></Reveal>
                        </div>
                    </div>
                    </Reveal>

                    <div className='absolute w-full top-0'>
                        <Reveal keyframes={reveal} duration={800} delay={2000} triggerOnce><Image src={squareWhite} alt='carré blanc' className='absolute top-40 -right-96 animation-landingHome06-top-2'/></Reveal>
                        <Reveal keyframes={reveal} duration={800} delay={2500} triggerOnce><Image src={squareWhite} alt='carré blanc' className='absolute -top-52 -left-[500px] animation-landingHome06-top' /></Reveal>
                        <Reveal keyframes={revealRight} duration={800} delay={1500} triggerOnce><Image src={squareOrange} alt='carré orange' className='z-10 absolute top-4 -right-[450px] animation-landingHome06-top-3' /></Reveal>
                        <Reveal keyframes={reveal} duration={800} delay={1000} triggerOnce><Image src={squareDark} alt='carré sombre' className='absolute -top-72 -left-60' /></Reveal>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Reveal keyframes={reveal} duration={600} triggerOnce className="relative">
                    <div className='text-white pt-[310px] pb-96 pl-[370px] bg-Home1SecondSlide bg-no-repeat'>
                        <Reveal keyframes={revealLeft} duration={800} delay={1300} triggerOnce><p className='font-semibold mb-2'>TECHNOLOGICAL SOLUTIONS</p></Reveal>
                        <Reveal keyframes={revealLeft} duration={800} delay={800} triggerOnce><h1 className='font-Amiri text-7xl w-1/2 mb-10 leading-[80px]'>Transformation is at the Hearth of What We Do</h1></Reveal>
                        <div className='font-semibold flex'>
                            <Reveal keyframes={reveal} duration={800} delay={1800} triggerOnce><button className="rounded bg-orange py-5 px-11 mr-5 text-sm border-transparent border-solid border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500">LEARN MORE</button></Reveal>
                            <Reveal keyframes={reveal} duration={800} delay={2200} triggerOnce><button className="rounded border border-[#c0c0c3] border-solid py-5 px-11 text-sm hover:bg-white hover:text-black ease-in-out duration-500">GET IN TOUCH</button></Reveal>
                        </div>
                    </div>
                    </Reveal>

                    <div className='absolute w-full top-0'>
                        <Reveal keyframes={reveal} duration={800} delay={2000} triggerOnce><Image src={squareWhite} alt='carré blanc' className='absolute top-40 -right-96 animation-landingHome06-top-2'/></Reveal>
                        <Reveal keyframes={reveal} duration={800} delay={2500} triggerOnce><Image src={squareWhite} alt='carré blanc' className='absolute -top-52 -left-[500px] animation-landingHome06-top' /></Reveal>
                        <Reveal keyframes={revealRight} duration={800} delay={1500} triggerOnce><Image src={squareOrange} alt='carré orange' className='z-10 absolute top-4 -right-[450px] animation-landingHome06-top-3' /></Reveal>
                        <Reveal keyframes={reveal} duration={800} delay={1000} triggerOnce><Image src={squareDark} alt='carré sombre' className='absolute -top-72 -left-60' /></Reveal>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Reveal keyframes={reveal} duration={600} triggerOnce className="relative">
                    <div className='text-white pt-[310px] pb-96 pl-[370px] bg-Home1ThirdSlide bg-no-repeat'>
                        <Reveal keyframes={revealLeft} duration={800} delay={1300} triggerOnce><p className='font-semibold mb-2'>OUTSOURCING & NEARSHORE</p></Reveal>
                        <Reveal keyframes={revealLeft} duration={800} delay={800} triggerOnce><h1 className='font-Amiri text-7xl w-1/2 mb-10 leading-[80px]'>We Combine Business with Technologies</h1></Reveal>
                        <div className='font-semibold flex'>
                            <Reveal keyframes={reveal} duration={800} delay={1800} triggerOnce><button className="rounded bg-orange py-5 px-11 mr-5 text-sm border-transparent border-solid border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500">LEARN MORE</button></Reveal>
                            <Reveal keyframes={reveal} duration={800} delay={2200} triggerOnce><button className="rounded border border-[#c0c0c3] border-solid py-5 px-11 text-sm hover:bg-white hover:text-black ease-in-out duration-500">GET IN TOUCH</button></Reveal>
                        </div>
                    </div>
                    </Reveal>

                    <div className='absolute w-full top-0'>
                        <Reveal keyframes={reveal} duration={800} delay={2000} triggerOnce><Image src={squareWhite} alt='carré blanc' className='absolute top-40 -right-96 animation-landingHome06-top-2'/></Reveal>
                        <Reveal keyframes={reveal} duration={800} delay={2500} triggerOnce><Image src={squareWhite} alt='carré blanc' className='absolute -top-52 -left-[500px] animation-landingHome06-top' /></Reveal>
                        <Reveal keyframes={revealRight} duration={800} delay={1500} triggerOnce><Image src={squareOrange} alt='carré orange' className='z-10 absolute top-4 -right-[450px] animation-landingHome06-top-3' /></Reveal>
                        <Reveal keyframes={reveal} duration={800} delay={1000} triggerOnce><Image src={squareDark} alt='carré sombre' className='absolute -top-72 -left-60' /></Reveal>
                    </div>
                </SwiperSlide>
            </Swiper>    
        </section>
    )
}