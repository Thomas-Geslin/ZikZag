import Image from "next/image"
import Link from "next/link";

import { useContext, useEffect, useState } from "react";
import { ColorContext } from "../../context/colorContext";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';

import slide1 from '../../public/assets/Home01/blog_slide_1.jpg'
import slide2 from '../../public/assets/Home01/blog_slide_2.jpg'
import slide3 from '../../public/assets/Home01/blog_slide_3.jpg'
import slide4 from '../../public/assets/Home01/blog_slide_4.jpg'
import slide5 from '../../public/assets/Home01/blog_slide_5.jpg'
import slide6 from '../../public/assets/Home01/blog_slide_6.jpg'
import slide7 from '../../public/assets/Home01/blog_slide_7.jpg'
import slide8 from '../../public/assets/Home01/blog_slide_8.jpg'

export default function BlogHome01() {
    const { color, secondaryColor } = useContext(ColorContext);
    const [slideNumber, setslideNumber] = useState(3)

    useEffect(() => {
        const windowSize = window.innerWidth;
        if(751 < windowSize < 1280) {
            setslideNumber(2)
        }
        if(windowSize < 750) {
            setslideNumber(1)
        }
    }, [])

    return(
        <section className='mb-40 w-[63%] m-auto relative z-10'>
            <div className='flex items-center justify-between 650:flex-col 650:items-start'>
                <div>
                    <h2 className={`text-${color} font-bold mb-3 relative`}>READ OUR BLOG<span className={`absolute top-4 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
                    <h3 className="font-Amiri text-5xl text-slightGrey leading-tight mb-4 max-xl:w-full 650:text-4xl">Featured News and Insights</h3>
                </div>
                <Link href='/Blog/Listing'><button className={`text-white font-semibold text-sm bg-${secondaryColor} px-9 py-4 rounded-sm hover-bg-${color} ease-in-out duration-300`}>ALL NEWS</button></Link>
            </div>

            <div className='relative'>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.prevHome01Blog',
                        nextEl: '.nextHome01Blog'
                    }}
                    slidesPerView={slideNumber}
                    spaceBetween={30}
                >
                    <SwiperSlide className='mt-4 mb-6 relative border-solid border border-[#e5e5e5] rounded-lg p-5 max-w-[370px] hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.10)] hover:border-transparent ease-in-out duration-300 hover:cursor-pointer'>
                        <Image  src={slide1} alt='persone travaillant sur un ordinateur' className='w-[330px] rounded-lg' />
                        <div className={`absolute right-10 bottom-44 bg-${color} text-white flex flex-col items-center rounded px-4 py-1 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]`}>
                            <p className='font-Amiri text-2xl -mb-1'>24</p>
                            <p className='text-xs font-semibold pb-1'>FEB</p>
                        </div>
                        <p className='font-semibold text-[#989898] mt-8 mb-3'>BUSINESS _ NEWS</p>
                        <p className='font-Amiri text-[28px] text-slightGrey leading-tight hover:underline ease-in-out duration-300'>Delivering What Consumers Really Value</p>
                        <div className='flex items-center group relative my-3 max-xl:mb-10'><span className={`w-10 h-0.5 bg-${color} absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500`}></span><span className={`w-3 h-0.5 top-[9px] left-[28px] bg-${color} absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><span className={`w-3 h-0.5 bg-${color} absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><p className={`text-sm text-${color} font-semibold pl-1 group-hover:translate-x-10 ease-in-out duration-500`}>READ MORE</p></div>
                    </SwiperSlide>

                    <SwiperSlide className='mt-4 relative border-solid border border-[#e5e5e5] rounded-lg p-5 max-w-[370px] hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.10)] hover:border-transparent ease-in-out duration-300 hover:cursor-pointer'>
                        <Image  src={slide2} alt='persone travaillant sur un ordinateur' className='w-[330px] rounded-lg' />
                        <div className={`absolute right-10 bottom-44 bg-${color} text-white flex flex-col items-center rounded px-4 py-1 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]`}>
                            <p className='font-Amiri text-2xl -mb-1'>24</p>
                            <p className='text-xs font-semibold pb-1'>FEB</p>
                        </div>
                        <p className='font-semibold text-[#989898] mt-8 mb-3'>ANALYSIS _ NEWS</p>
                        <p className='font-Amiri text-3xl text-slightGrey leading-tight hover:underline ease-in-out duration-300'>When Sustainability Requires Change</p>
                        <div className='flex items-center group relative my-3 max-xl:mb-10'><span className={`w-10 h-0.5 bg-${color} absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500`}></span><span className={`w-3 h-0.5 top-[9px] left-[28px] bg-${color} absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><span className={`w-3 h-0.5 bg-${color} absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><p className={`text-sm text-${color} font-semibold pl-1 group-hover:translate-x-10 ease-in-out duration-500`}>READ MORE</p></div>
                    </SwiperSlide>

                    <SwiperSlide className='mt-4 relative border-solid border border-[#e5e5e5] rounded-lg p-5 max-w-[370px] hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.10)] hover:border-transparent ease-in-out duration-300 hover:cursor-pointer'>
                        <Image  src={slide5} alt='persone travaillant sur un ordinateur' className='w-[330px] rounded-lg' />
                        <div className={`absolute right-10 bottom-44 bg-${color} text-white flex flex-col items-center rounded px-4 py-1 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]`}>
                            <p className='font-Amiri text-2xl -mb-1'>24</p>
                            <p className='text-xs font-semibold pb-1'>FEB</p>
                        </div>
                        <p className='font-semibold text-[#989898] mt-8 mb-3'>ANALYSIS _ NEWS</p>
                        <p className='font-Amiri text-3xl text-slightGrey leading-tight hover:underline ease-in-out duration-300'>Automation Nation: Whose Job Is Next ?</p>
                        <div className='flex items-center group relative my-3 max-xl:mb-10'><span className={`w-10 h-0.5 bg-${color} absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500`}></span><span className={`w-3 h-0.5 top-[9px] left-[28px] bg-${color} absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><span className={`w-3 h-0.5 bg-${color} absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><p className={`text-sm text-${color} font-semibold pl-1 group-hover:translate-x-10 ease-in-out duration-500`}>READ MORE</p></div>
                    </SwiperSlide>

                    <SwiperSlide className='mt-4 relative border-solid border border-[#e5e5e5] rounded-lg p-5 max-w-[370px] hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.10)] hover:border-transparent ease-in-out duration-300 hover:cursor-pointer'>
                        <Image  src={slide6} alt='persone travaillant sur un ordinateur' className='w-[330px] rounded-lg' />
                        <div className={`absolute right-10 bottom-44 bg-${color} text-white flex flex-col items-center rounded px-4 py-1 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]`}>
                            <p className='font-Amiri text-2xl -mb-1'>24</p>
                            <p className='text-xs font-semibold pb-1'>FEB</p>
                        </div>
                        <p className='font-semibold text-[#989898] mt-8 mb-3'>BUSINESS _ NEWS</p>
                        <p className='font-Amiri text-3xl text-slightGrey leading-tight hover:underline ease-in-out duration-300'>For the Wealthy, Work is the New Retirement</p>
                        <div className='flex items-center group relative my-3 max-xl:mb-10'><span className={`w-10 h-0.5 bg-${color} absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500`}></span><span className={`w-3 h-0.5 top-[9px] left-[28px] bg-${color} absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><span className={`w-3 h-0.5 bg-${color} absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><p className={`text-sm text-${color} font-semibold pl-1 group-hover:translate-x-10 ease-in-out duration-500`}>READ MORE</p></div>
                    </SwiperSlide>

                    <SwiperSlide className='mt-4 relative border-solid border border-[#e5e5e5] rounded-lg p-5 max-w-[370px] hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.10)] hover:border-transparent ease-in-out duration-300 hover:cursor-pointer'>
                        <Image  src={slide7} alt='persone travaillant sur un ordinateur' className='w-[330px] rounded-lg' />
                        <div className={`absolute right-10 bottom-44 bg-${color} text-white flex flex-col items-center rounded px-4 py-1 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]`}>
                            <p className='font-Amiri text-2xl -mb-1'>24</p>
                            <p className='text-xs font-semibold pb-1'>FEB</p>
                        </div>
                        <p className='font-semibold text-[#989898] mt-8 mb-3'>ANALYSIS _ NEWS</p>
                        <p className='font-Amiri text-3xl text-slightGrey leading-tight hover:underline ease-in-out duration-300'>Customers Know What They Want</p>
                        <div className='flex items-center group relative my-3 max-xl:mb-10'><span className={`w-10 h-0.5 bg-${color} absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500`}></span><span className={`w-3 h-0.5 top-[9px] left-[28px] bg-${color} absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><span className={`w-3 h-0.5 bg-${color} absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><p className={`text-sm text-${color} font-semibold pl-1 group-hover:translate-x-10 ease-in-out duration-500`}>READ MORE</p></div>
                    </SwiperSlide>

                    <SwiperSlide className='mt-4 relative border-solid border border-[#e5e5e5] rounded-lg p-5 max-w-[370px] hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.10)] hover:border-transparent ease-in-out duration-300 hover:cursor-pointer'>
                        <Image  src={slide8} alt='persone travaillant sur un ordinateur' className='w-[330px] rounded-lg' />
                        <div className={`absolute right-10 bottom-44 bg-${color} text-white flex flex-col items-center rounded px-4 py-1 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]`}>
                            <p className='font-Amiri text-2xl -mb-1'>24</p>
                            <p className='text-xs font-semibold pb-1'>FEB</p>
                        </div>
                        <p className='font-semibold text-[#989898] mt-8 mb-3'>BUSINESS _ NEWS</p>
                        <p className='font-Amiri text-3xl text-slightGrey leading-tight hover:underline ease-in-out duration-300'>Rebooting a Digital Solution to Finance</p>
                        <div className='flex items-center group relative my-3 max-xl:mb-10'><span className={`w-10 h-0.5 bg-${color} absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500`}></span><span className={`w-3 h-0.5 top-[9px] left-[28px] bg-${color} absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><span className={`w-3 h-0.5 bg-${color} absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><p className={`text-sm text-${color} font-semibold pl-1 group-hover:translate-x-10 ease-in-out duration-500`}>READ MORE</p></div>
                    </SwiperSlide>
                </Swiper>

                <button className='prevHome01Blog group w-14 h-0.5 bg-black absolute -left-20 top-[50%] 430:w-9 430:-left-12'><span className='w-3 h-0.5 bg-black -rotate-45 absolute -left-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-black rotate-45 absolute -left-0.5 top-1'></span></button>
                <button className='nextHome01Blog w-14 h-0.5 bg-black absolute -right-20 top-[50%] 430:w-9 430:-right-12'><span className='w-3 h-0.5 bg-black rotate-45 absolute -right-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-black -rotate-45 absolute -right-0.5 top-1'></span></button>
            </div>
            
        </section>
    )
}