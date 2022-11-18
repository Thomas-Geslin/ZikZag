import Image from "next/image"
import { useEffect } from "react"

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

import background from '../../../public/assets/PAGES/OurTeam/team_background.jpg'
import man from '../../../public/assets/PAGES/OurTeam/team_man.png'
import line from  '../../../public/assets/PAGES/OurTeam/line.png'

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


export default function TeamOurTeam() {
    useEffect(() => {
        // Function for auto-increment counter on scroll
        function autoIncrement(limit, target) {
            let numberLimit = limit;
            let numberInitial = 0;
            let timer = 2;
            let interval = Math.ceil((timer * 1000) / numberLimit );
            const numberTarget = document.getElementById(target)

            function countdown() {
                numberTarget.innerHTML = ++numberInitial;
                if (numberInitial < numberLimit) {
                    setTimeout(countdown, interval);
                }
            }
            setTimeout(countdown, interval);
        }
        const viewportNumber = document.getElementById('numberViewport');
    
        const optionsNumber = {
          root: null,
          treshold: 0.5
        }
    
        const observerNumber = new IntersectionObserver(function (entries) {
          entries.forEach((entry) => {
              if(entry.isIntersecting) {
                autoIncrement(15, 'numberTarget1');
                autoIncrement(17, 'numberTarget2');
              };
          })
          
        }, optionsNumber);
        observerNumber.observe(viewportNumber);
    }, [])


    return(
        <section className='mt-40'>
            <div className='flex items-center justify-center'>
                <div className='ml-48 relative'>
                    <Image src={line} alt='ligne de décoration' className='absolute bottom-0 -left-28' />
                    <Image src={background} alt='réunion entreprise' className='rounded-lg relative' />
                    <Image src={man} alt='dessin de super-héros' className='absolute top-12 left-80' />
                </div>

                <div className='w-1/3 ml-60'>
                    <h2 className='text-orange font-bold mb-3 relative'>ABOUT TEAM<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h3 className="font-Amiri text-5xl text-slightGrey leading-tight mb-4 max-xl:w-full">We Have Super<br></br>Skilled Professionals</h3>
                    <p className="text-greyText text-lg leading-8 w-2/3 mb-8 max-xl:w-full">We seamlessly merge two key components – economics and information technology. This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.</p>
                
                    <div id='numberViewport' className='flex'>
                        <div className='flex items-center'>
                            <p id='numberTarget1' className='text-orange text-7xl font-Amiri mr-3'>0</p>
                            <p className='text-sm font-bold text-slightGrey w-1/2'>YEARS OF EXPERIENCE</p>
                        </div>

                        <div className='flex items-center'>
                            <p id='numberTarget2' className='text-orange text-7xl font-Amiri mr-3'>0</p>
                            <p className='text-sm font-bold text-slightGrey w-1/2'>MASTER CERTIFICATION</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='px-12 mt-48'>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={6}
                    loop
                    autoplay={{
                        delay: 3500
                    }}
                    speed={1000}
                >
                    <SwiperSlide className="w-40 rounded-lg py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] ease-in duration-300 hover:cursor-pointer">
                        <div className='h-14 overflow-hidden'>
                            <Image src={dynamic} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={dynamicGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-14 overflow-hidden'>
                            <Image src={okta} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={oktaGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-14 overflow-hidden'>
                            <Image src={max} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={maxGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-16 overflow-hidden'>
                            <Image src={solana} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-16 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={solanaGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-14 overflow-hidden'>
                            <Image src={deters} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={detersGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
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