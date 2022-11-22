import Image from "next/image"
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { AboutSwiperData } from "../../datas/About/AboutSwiperData";


export default function SwiperHome01() {
    let [slideNumber, setSlideNumber] = useState(4);
    
    /* useEffect(() => {
        const windowSize = window.innerWidth;
        if(windowSize < 599) {
            setSlideNumber(1);
        }
        else if(600 < windowSize < 1280) {
            setSlideNumber(2);
        }
        else if(1281 < windowSize && windowSize < 1650) {
            setSlideNumber(3);
        }
    }, [slideNumber]) */

    return (
        <section className='bg-greyBackground bg-squareBackground bg-cover bg-[center_top_-12rem] bg-center bg-no-repeat pb-60 pt-10'>
            <Swiper
                modules={[Pagination]}
                slidesPerView={slideNumber}
                slidesPerGroup={slideNumber}
                pagination={{
                    clickable: true
                }}
            >
                {AboutSwiperData.map((el) => {
                    return(
                        <SwiperSlide key={el.index} className='relative group hover:cursor-pointer'>
                            <Image src={el.background} alt="photo d'employé" className="m-auto rounded-lg w-[90%]" />

                            <div className='absolute top-10 right-12'>
                                <div className='bg-white p-3 rounded-full mb-3 translate-x-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 ease-in-out duration-500'><FontAwesomeIcon icon={faTwitter} className='w-3.5 text-[#1DA1F2]' /></div>
                                <div className='bg-white pl-3.5 py-3 rounded-full mb-3 translate-x-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 ease-in-out duration-500 delay-[0.1s]'><FontAwesomeIcon icon={faFacebookF} className='w-2.5 text-[#3B5998]' /></div>
                                <div className='bg-white pl-3.5 py-3 rounded-full mb-3 translate-x-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 ease-in-out duration-500 delay-[0.2s]'><FontAwesomeIcon icon={faPinterestP} className='w-3 text-[#E40000]' /></div>
                                <div className='bg-white p-3 rounded-full mb-3 translate-x-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 ease-in-out duration-500 delay-[0.3s]'><FontAwesomeIcon icon={faInstagram} className='w-3.5 text-[#C32AA3]' /></div>
                            </div>

                            <div className="bg-white flex justify-between items-center px-8 h-28 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] rounded-md w-3/4 m-auto relative -top-20 z-10 group-hover:-translate-y-16 ease-in-out duration-500">
                                <div className="pl-4">
                                    <p className="font-Amiri text-3xl text-slightGrey">{el.name}</p>
                                    <p className="text-[#989898] font-semibold text-sm">{el.work}</p>
                                </div>

                                <Image src={el.icon} alt='icon de décoration' />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}