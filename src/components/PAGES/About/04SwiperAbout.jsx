import Image from "next/image"
import { useEffect, useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { AboutSwiperData } from "../../../datas/About/AboutSwiperData";


export default function SwiperAbout() {
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
        <section className="mt-7 mb-12">
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
                            <Image src={el.background} alt="photo d'employé" className="w-[440px] m-auto rounded-lg max-xl:w-[90%]" />

                            <div className="bg-white flex justify-between items-center px-8 h-28 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] rounded-md w-10/12 m-auto relative -top-20 z-10 group-hover:-translate-y-16 ease-in-out duration-500">
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