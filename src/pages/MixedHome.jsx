import Head from 'next/head'
import Image from 'next/image'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import Header from '../components//Header'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

import Landing from '../components/Home02/01Landing';
import Offer from '../components/Home02/04Offer';
import StrategyHome01 from '../components/Home01/05Strategy'
import Philosophy from '../components/Home02/05Philosophy';
import Division from '../components/Home02/02SlideDivison';
import Benefits from '../components/Home02/03Benefits';
import BlogHome01 from '../components/Home01/08Blog'

import arrow  from '../public/assets/Home02/offer_arrow.png'
import dynamic from '../public/assets/Home02/logo_dynamic_color.png'
import okta from '../public/assets/Home02/logo_okta_color.png'
import max from '../public/assets/Home02/logo_max_color.png'
import solana from '../public/assets/Home02/logo_solana_color.png'
import deters from '../public/assets/Home02/logo_deters_color.png'
import honey from '../public/assets/Home02/logo_honey_color.png'
import dynamicGrey from '../public/assets/Home02/logo_dynamic_grey.png'
import oktaGrey from '../public/assets/Home02/logo_okta_grey.png'
import maxGrey from '../public/assets/Home02/logo_max_grey.png'
import solanaGrey from '../public/assets/Home02/logo_solana_grey.png'
import detersGrey from '../public/assets/Home02/logo_deters_grey.png'
import honeyGrey from '../public/assets/Home02/logo_honey_grey.png'


export default function MixedHome() {
    return(
        <div className='font-NunitoSans'>
            <Head>

            </Head>

            <Header />

            <main>
                <Landing />

                <div className='mb-72'></div>

                <Offer />

                <StrategyHome01 />

                <div className='pb-28'></div>

                <Philosophy />

                <h2 className='text-center text-orange font-semibold mb-4 pt-32 relative w-40 m-auto max-xl:pt-36 850:mt-12'><span className='absolute bottom-1 left-3 bg-orange h-0.5 w-2'></span>OUR STRATEGY<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
                <h3 className='text-center font-Amiri text-slightGrey text-6xl mb-5 -mb-10'>Main Principles</h3>

                <Division />

                <Benefits />

                <h2 className='text-center text-orange font-semibold mb-4 pt-10 relative w-40 m-auto max-xl:pt-36 850:mt-12'><span className='absolute bottom-1 left-3 bg-orange h-0.5 w-2'></span>OUR STRATEGY<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
                <h3 className='text-center font-Amiri text-slightGrey text-6xl mb-5'>Main Principles</h3>

                <div className='px-12 pb-40'>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={6}
                        loop
                        autoplay={{
                            delay: 3500
                        }}
                        pagination
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

                <BlogHome01 />
            </main>

            <Footer />
        </div>
    )
}