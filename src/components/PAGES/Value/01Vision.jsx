import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

import pc from '../../../public/assets/PAGES/Value/vision_pc.png'
import man from '../../../public/assets/PAGES/Value/vision_man.png'
import square from '../../../public/assets/PAGES/Value/vision_square.png'
import line1 from '../../../public/assets/PAGES/Value/vision_line_1.png'
import line2 from '../../../public/assets/PAGES/Value/vision_line_2.png'

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


export default function VisionValue() {
    return(
        <section className='overflow-hidden -mb-20'>
            <div className='flex justify-center mt-40 relative left-[10%] max-xl:flex-col max-xl:items-center max-xl:mt-20'>
                <div className="w-1/4 max-xl:w-full relative">
                    <h2 className='text-orange font-bold mb-3 relative'>OUR VISION<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h3 className="font-Amiri text-5xl text-slightGrey w-[95%] leading-tight mb-4 max-xl:w-10/12 650:text-4xl">Strategy is at the Heart of What We Do</h3>
                    <p className="text-greyText text-lg w-11/12 leading-8 mb-8 max-xl:w-10/12">Our vision is to inspire businesses to put employee wellbeing at the heart of everything they do. Our mission is to use employee wellbeing as a tool to champion positive change in the modern workplace.</p>

                
                    <div className='flex items-center pb-64 mt-8 max-xl:pb-20'>
                        <div className='group bg-white px-7 py-6 rounded-full shadow-[5px_5px_15px_3px_#dddddd] hover:bg-orange hover:cursor-pointer ease-linear duration-300'><FontAwesomeIcon icon={faPlay} className='w-4 text-orangeBright group-hover:text-white' /></div>
                        <p className='font-semibold text-slightGrey text-sm ml-5'>HOW IT WORKS</p>
                    </div>
                </div>

                <div className='relative max-xl:mb-20'>
                    <Image src={pc} alt='ordinateur' />
                    <Image src={man} alt="dessin d'homme travaillant" className='absolute top-0 animation-vision-value-2' />
                    <Image src={square} alt="carré de décoration" className='absolute top-0 animation-vision-value' />
                    <Image src={line1} alt="ligne de décoration" className='absolute top-0 animation-vision-value-3' />
                    <Image src={line2} alt="ligne de décoration" className='absolute top-0 animation-vision-value-3' />
                </div>
            </div>


            <div className='px-12 relative -top-20 850:px-0'>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={6}
                    loop
                    autoplay={{
                        delay: 3500
                    }}
                    speed={1000}
                >
                    <SwiperSlide className="w-40 min-w-[270px] rounded-lg py-14 px-10 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] ease-in duration-300 hover:cursor-pointer">
                        <div className='h-14 overflow-hidden'>
                            <Image src={dynamic} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={dynamicGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 min-w-[270px] rounded-md py-14 px-10 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-14 overflow-hidden'>
                            <Image src={okta} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={oktaGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 min-w-[270px] rounded-md py-14 px-10 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-14 overflow-hidden'>
                            <Image src={max} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={maxGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 min-w-[270px] rounded-md py-14 px-10 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-16 overflow-hidden'>
                            <Image src={solana} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-16 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={solanaGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 min-w-[270px] rounded-md py-14 px-10 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-14 overflow-hidden'>
                            <Image src={deters} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={detersGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 min-w-[270px] rounded-md py-14 px-10 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
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