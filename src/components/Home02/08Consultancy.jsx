import Image from 'next/image'
import { useEffect, useState } from 'react';

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

// Consultancy Assets
import logo from "../../public/assets/Home02/logo_consultancy.png"
import orangeSquare from '../../public/assets/Home02/consultancy_widget_background.png'
import dynamic from '../../public/assets/Home02/logo_dynamic_color.png'
import okta from '../../public/assets/Home02/logo_okta_color.png'
import max from '../../public/assets/Home02/logo_max_color.png'
import solana from '../../public/assets/Home02/logo_solana_color.png'
import deters from '../../public/assets/Home02/logo_deters_color.png'
import honey from '../../public/assets/Home02/logo_honey_color.png'


export default function Consultancy() {
  const { color } = useContext(ColorContext);


  let [slideNumber, setSlideNumber] = useState(5)

  useEffect(() => {
    const windowSize = window.innerWidth;
        if(windowSize < 499) {
          setSlideNumber(1);
        }
        else if(windowSize < 500 && windowSize < 900) {
            setSlideNumber(2);
        } else if(windowSize < 901 && windowSize < 1280) {
            setSlideNumber(4);
        }
  }, [])

    return(
        <section className='-mb-20 relative -top-32 z-10'>
          <div className='bg-transparent relative w-10/12 m-auto rounded-xl relative text-center max-xl:flex max-xl:flex-col-reverse max-xl:items-center max-xl:w-full max-xl:h-[800px] max-xl:mb-20'>
            <div className='bg-darkBlueBackground parallaxConsultancy-Home02 rounded-xl max-xl:w-full max-xl:h-[800px]'></div>
                    
            <div className='absolute -right-20 -top-7 max-xl:relative max-xl:right-0 max-xl:top-[650px]'>
                <Image src={orangeSquare} alt='carré orange' className='w-80' />
                <div className='text-white absolute top-0 right-12 flex flex-col justify-center items-center'>
                    <div className='p-4 w-14 rounded-full bg-white'><FontAwesomeIcon icon={faPhoneVolume} className={`relative left-px bottom-px w-6 -rotate-45 text-${color}`} /></div>
                    <p className='font-Amiri text-3xl my-4'>+1 800 123 456 789</p>
                    <p className='font-semibold'>OR CALL US 24/7</p>
                </div>
            </div>

            <div className='mb-20 absolute left-[50%] translate-x-[-50%] top-0 max-xl:top-60 max-xl:w-full'>
                <Image src={logo} alt='logo de entreprise' className='m-auto pt-20 mb-10' />
                <p className='font-Amiri text-white text-5xl mb-3 max-xl:w-full 850:text-3xl'>Get a Free Counsultancy Right Now!</p>
                <p className='text-[#dddfe1] text-[20px] px-7 850:text-base'>We help you see the world differently, discover opportunities you may never have imagined.</p>
                <button className={`text-white font-semibold bg-${color} rounded px-8 py-4 border border-solid border-${color} hover:bg-transparent ease-in duration-300 mt-12 mb-16 850:px-6 850:py-3 850:text-base 430:mt-4`}>GET IN TOUCH</button>
            </div>
          </div>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={slideNumber}
            loop
            freeMode
            autoplay={{
              delay: 1
            }}
            speed={2500}
          >
            <SwiperSlide className="bg-dynamicBk bg-no-repeat bg-center rounded-lg py-16 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] ease-in duration-300 hover:cursor-pointer">
              <Image src={dynamic} alt="logo de l'entreprise dynamix" className='m-auto opacity-0 group-hover:opacity-100 ease-in duration-300' />
            </SwiperSlide>

            <SwiperSlide className="bg-oktaBk bg-no-repeat bg-center rounded-md py-16 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
              <Image src={okta} alt="logo de l'entreprise okta" className='m-auto opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
            </SwiperSlide>

            <SwiperSlide className="bg-maxBk bg-no-repeat bg-center rounded-md py-16 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
              <Image src={max} alt="logo de l'entreprise max papers" className='m-auto opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
            </SwiperSlide>

            <SwiperSlide className="bg-solanaBk bg-no-repeat bg-center rounded-md py-16 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
              <Image src={solana} alt="logo de l'entreprise solana" className='m-auto opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
            </SwiperSlide>

            <SwiperSlide className="bg-detersBk bg-no-repeat bg-center rounded-md py-16 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
              <Image src={deters} alt="logo de l'entreprise deters" className='m-auto opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
            </SwiperSlide>

            <SwiperSlide className="bg-honeyBk bg-no-repeat bg-center rounded-md py-16 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
              <Image src={honey} alt="logo de l'entreprise honey hosting" className='m-auto opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
            </SwiperSlide>
          </Swiper>
        </section>
    )
}