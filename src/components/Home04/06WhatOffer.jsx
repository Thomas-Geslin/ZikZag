import Image from "next/image"

import slide1 from '../../public/assets/PAGES/About/slide_01.jpg'
import slide2 from '../../public/assets/PAGES/About/slide_02.jpg'
import slide3 from '../../public/assets/PAGES/About/slide_03.jpg'
import icon1 from '../../public/assets/PAGES/About/slide_01_icon.png'
import icon2 from '../../public/assets/PAGES/About/slide_02_icon.png'
import icon3 from '../../public/assets/PAGES/About/slide_03_icon.png'
import dot from '../../public/assets/Home04/about_dot.png'

export default function WhatOfferHome04() {
    return(
        <section className='text-center'>
            <h2 className='text-orange font-bold mb-4 relative w-40 m-auto'><span className='absolute bottom-1 left-0 bg-orange h-0.5 w-2'></span>WHAT WE OFFER<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
            <h3 className='font-Amiri text-slightGrey text-[56px]'>Meet Our Team</h3>
            <p className='text-greyText text-lg w-[36%] m-auto mb-10 1050:w-10/12'>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>
            
            <div className='flex justify-center relative 1050:flex-col 1050:items-center'>
                <Image src={dot} alt='point de décoration' className='absolute bottom-96 left-28 1050:hidden' />

                <div className='relative group hover:cursor-pointer'>
                    <Image src={slide1} alt="photo d'employé" className="w-[440px] m-auto rounded-lg max-xl:w-[90%]" />

                    <div className="bg-white flex justify-between items-center px-8 h-28 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] rounded-md w-10/12 m-auto relative -top-20 z-10 group-hover:-translate-y-16 ease-in-out duration-500">
                        <div className="pl-4">
                            <p className="font-Amiri text-3xl text-slightGrey">Luciana Batista</p>
                            <p className="text-[#989898] font-semibold text-sm">CHIEF EXECUTIVE OFFICER</p>
                        </div>

                        <Image src={icon1} alt='icon de décoration' />
                    </div>
                </div>

                <div className='relative group hover:cursor-pointer mx-8'>
                    <Image src={slide2} alt="photo d'employé" className="w-[440px] m-auto rounded-lg max-xl:w-[90%]" />

                    <div className="bg-white flex justify-between items-center px-8 h-28 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] rounded-md w-10/12 m-auto relative -top-20 z-10 group-hover:-translate-y-16 ease-in-out duration-500">
                        <div className="pl-4">
                            <p className="font-Amiri text-3xl text-slightGrey">James Anderson</p>
                            <p className="text-[#989898] font-semibold text-sm">CHIEF EXECUTIVE OFFICER</p>
                        </div>

                        <Image src={icon2} alt='icon de décoration' />
                    </div>
                </div>

                <div className='relative group hover:cursor-pointer'>
                    <Image src={slide3} alt="photo d'employé" className="w-[440px] m-auto rounded-lg max-xl:w-[90%]" />

                    <div className="bg-white flex justify-between items-center px-8 h-28 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] rounded-md w-10/12 m-auto relative -top-20 z-10 group-hover:-translate-y-16 ease-in-out duration-500">
                        <div className="pl-4">
                            <p className="font-Amiri text-3xl text-slightGrey">Clare Gordon</p>
                            <p className="text-[#989898] font-semibold text-sm">CHIEF CUSTOMER OFFICER</p>
                        </div>

                        <Image src={icon3} alt='icon de décoration' />
                    </div>
                </div>
            </div>
        </section>
    )
}