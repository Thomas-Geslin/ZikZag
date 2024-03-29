import Image from "next/image"

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

// Awesome Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import payment from '../../public/assets/Home02/offer_icon_payment_color.png'
import money from '../../public/assets/Home02/offer_icon_money_color.png'
import balance from '../../public/assets/Home02/offer_icon_balance_color.png'
import light from '../../public/assets/Home02/benefits_icon_light.png'


// Keyframe for smooth reveal
const revealBottom = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;


export default function OfferHome04() {
    const { color, secondaryColor } = useContext(ColorContext);


    return(
        <section id='goTopViewport' className='text-center max-w-[1840px] ml-auto mr-auto bg-darkBlueBackground mx-8 rounded-3xl mb-20 relative z-10'>
            <div className='absolute flex text-[#182631] font-Amiri text-[400px] left-[50%] translate-x-[-50%] -top-10 xl-2xl:text-[300px] max-xl:flex-col max-xl:text-[200px] max-xl:left-[5%] max-xl:translate-x-0 max-xl:leading-[180px] max-xl:top-0 650:hidden'>
                <Reveal keyframes={revealBottom} duration={600} triggerOnce><span>s</span></Reveal>
                <Reveal keyframes={revealBottom} duration={600} delay={300} triggerOnce><span>o</span></Reveal>
                <Reveal keyframes={revealBottom} duration={600} delay={600} triggerOnce><span>l</span></Reveal>
                <Reveal keyframes={revealBottom} duration={600} delay={900} triggerOnce><span>u</span></Reveal>
                <Reveal keyframes={revealBottom} duration={600} delay={1200} triggerOnce><span>t</span></Reveal>
                <Reveal keyframes={revealBottom} duration={600} delay={1500} triggerOnce><span>i</span></Reveal>
                <Reveal keyframes={revealBottom} duration={600} delay={1800} triggerOnce><span>o</span></Reveal>
                <Reveal keyframes={revealBottom} duration={600} delay={2100} triggerOnce><span>n</span></Reveal>
                <Reveal keyframes={revealBottom} duration={600} delay={2400} triggerOnce><span>s</span></Reveal>
            </div>

            <h2 className={`text-${color} font-bold mb-4 pt-24 relative w-40 m-auto max-xl:pt-36 850:mt-12`}><span className={`absolute bottom-1 left-0 bg-${color} h-0.5 w-2`}></span>WHAT WE OFFER<span className={`absolute bottom-1 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
            <h3 className='relative font-Amiri text-white text-5xl mb-5'>Business Shaped Solutions</h3>
            <p className='relative text-[#c4c8cb] text-lg font-normal leading-8 w-[40%] m-auto pb-12 1050:w-10/12'>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>

            <div className='flex w-2/3 justify-between m-auto pb-24 relative max-xl:flex-col max-xl:items-center 850:w-10/12'>
                <div className='text-white text-left bg-darkBlueBackground shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] rounded-lg pl-10 mx-4 hover:bg-white ease-in-out duration-500 group max-xl:mb-6'>
                    <div className='pb-6 pt-9'><Image src={payment} alt='icone de paiement' className='w-12' /></div>
                    <p className='font-Amiri text-3xl w-1/2 mb-4 group-hover:text-black ease-in-out duration-500'>Partnership System</p>
                    <p className='leading-8 mb-4 group-hover:text-black ease-in-out duration-500 max-xl:w-11/12'>Strategy experience and analytical expertise combine</p>
                    <div className='flex items-center group/arrow relative max-xl:mb-10'><span className={`w-10 h-0.5 bg-${color} absolute scale-x-0 group-hover/arrow:scale-x-100 origin-left ease-in-out duration-500`}></span><span className={`w-3 h-0.5 top-[9px] left-[28px] bg-${color} absolute scale-x-0 group-hover/arrow:rotate-45 group-hover/arrow:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><span className={`w-3 h-0.5 bg-${color} absolute left-[28px] scale-x-0 group-hover/arrow:-rotate-45 group-hover/arrow:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><p className={`text-sm text-${color} font-semibold pl-1 group-hover/arrow:translate-x-10 ease-in-out duration-500`}>READ MORE</p></div>
                </div>

                <div className='text-white text-left bg-darkBlueBackground shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] rounded-lg pl-10 mx-4 hover:bg-white ease-in-out duration-500 group max-xl:mb-6'>
                    <div className='pb-6 pt-9'><Image src={money} alt='icone de paiement' className='w-12' /></div>
                    <p className='font-Amiri text-3xl w-10/12 mb-4 group-hover:text-black ease-in-out duration-500'>New Business Innovation</p>
                    <p className='leading-8 mb-4 group-hover:text-black ease-in-out duration-500 max-xl:w-11/12'>Strategy experience and analytical expertise combine</p>
                    <div className='flex items-center mb-8 group/arrow relative max-xl:mb-10'><span className={`w-10 h-0.5 bg-${color} absolute scale-x-0 group-hover/arrow:scale-x-100 origin-left ease-in-out duration-500`}></span><span className={`w-3 h-0.5 top-[9px] left-[28px] bg-${color} absolute scale-x-0 group-hover/arrow:rotate-45 group-hover/arrow:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><span className={`w-3 h-0.5 bg-${color} absolute left-[28px] scale-x-0 group-hover/arrow:-rotate-45 group-hover/arrow:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><p className={`text-sm text-${color} font-semibold pl-1 group-hover/arrow:translate-x-10 ease-in-out duration-500`}>READ MORE</p></div>
                </div>

                <div className='text-white text-left bg-darkBlueBackground shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] rounded-lg pl-10 mx-4 hover:bg-white ease-in-out duration-500 group max-xl:mb-6'>
                    <div className='pb-6 pt-9'><Image src={balance} alt='icone de paiement' className='w-12' /></div>
                    <p className='font-Amiri text-3xl w-1/2 mb-4 group-hover:text-black ease-in-out duration-500'>Recession Strategies</p>
                    <p className='leading-8 mb-4 group-hover:text-black ease-in-out duration-500 max-xl:w-11/12'>Strategy experience and analytical expertise combine</p>
                    <div className='flex items-center mb-8 group/arrow relative max-xl:mb-10'><span className={`w-10 h-0.5 bg-${color} absolute scale-x-0 group-hover/arrow:scale-x-100 origin-left ease-in-out duration-500`}></span><span className={`w-3 h-0.5 top-[9px] left-[28px] bg-${color} absolute scale-x-0 group-hover/arrow:rotate-45 group-hover/arrow:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><span className={`w-3 h-0.5 bg-${color} absolute left-[28px] scale-x-0 group-hover/arrow:-rotate-45 group-hover/arrow:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><p className={`text-sm text-${color} font-semibold pl-1 group-hover/arrow:translate-x-10 ease-in-out duration-500`}>READ MORE</p></div>
                </div>

                <div className='text-white text-left bg-darkBlueBackground shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] rounded-lg pl-10 mx-4 hover:bg-white ease-in-out duration-500 group'>
                    <div className='pb-6 pt-9'><Image src={light} alt='icone de paiement' className='w-12' /></div>
                    <p className='font-Amiri text-3xl w-1/2 mb-4 group-hover:text-black ease-in-out duration-500'>Retirement Planning</p>
                    <p className='leading-8 mb-4 group-hover:text-black ease-in-out duration-500 max-xl:w-11/12'>Strategy experience and analytical expertise combine</p>
                    <div className='flex items-center mb-8 group/arrow relative max-xl:mb-10'><span className={`w-10 h-0.5 bg-${color} absolute scale-x-0 group-hover/arrow:scale-x-100 origin-left ease-in-out duration-500`}></span><span className={`w-3 h-0.5 top-[9px] left-[28px] bg-${color} absolute scale-x-0 group-hover/arrow:rotate-45 group-hover/arrow:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><span className={`w-3 h-0.5 bg-${color} absolute left-[28px] scale-x-0 group-hover/arrow:-rotate-45 group-hover/arrow:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><p className={`text-sm text-${color} font-semibold pl-1 group-hover/arrow:translate-x-10 ease-in-out duration-500`}>READ MORE</p></div>
                </div>
            </div>
        </section>
    )
}