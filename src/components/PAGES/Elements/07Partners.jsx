import Image from 'next/image';
import { useState, useEffect } from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

import dynamic from '../../../public/assets/Home02/logo_dynamic_color.png'
import okta from '../../../public/assets/Home02/logo_okta_color.png'
import max from '../../../public/assets/Home02/logo_max_color.png'
import solana from '../../../public/assets/Home02/logo_solana_color.png'
import deters from '../../../public/assets/Home02/logo_deters_color.png'
import honey from '../../../public/assets/Home02/logo_honey_color.png'
import dynamicGrey from '../../../public/assets/Home02/logo_dynamic_grey.png'
import oktaGrey from '../../../public/assets/Home02/logo_okta_grey.png'
import maxGrey from '../../../public/assets/Home02/logo_max_grey.png'
import solanaGrey from '../../../public/assets/Home02/logo_solana_grey.png'
import detersGrey from '../../../public/assets/Home02/logo_deters_grey.png'
import honeyGrey from '../../../public/assets/Home02/logo_honey_grey.png'


export default function PartnersElement() {
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
        <section>
            <p className='text-slightGrey font-Amiri text-4xl mb-10 pl-[10%] max-xl:pl-[5%]'>Partners</p>


            <div className='relative'>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={slideNumber}
                    loop
                    autoplay={{
                        delay: 3500
                    }}
                    speed={1000}
                >
                    <SwiperSlide className="w-40 min-w-[230px] rounded-lg py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] ease-in duration-300 hover:cursor-pointer">
                        <div className='h-14 overflow-hidden'>
                            <Image src={dynamic} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={dynamicGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 min-w-[230px] rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-14 overflow-hidden'>
                            <Image src={okta} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={oktaGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 min-w-[245px] rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-14 overflow-hidden'>
                            <Image src={max} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={maxGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 min-w-[260px] rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-16 overflow-hidden'>
                            <Image src={solana} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-16 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={solanaGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 min-w-[230px] rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-14 overflow-hidden'>
                            <Image src={deters} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={detersGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 min-w-[200px] rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-14 overflow-hidden'>
                            <Image src={honey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={honeyGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}