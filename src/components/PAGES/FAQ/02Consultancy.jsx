import Image from 'next/image'

import { useContext, useEffect } from "react";
import { ColorContext } from "../../../context/colorContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

// Consultancy Assets
import logo from "../../../public/assets/Home02/logo_consultancy.png"
import orangeSquare from '../../../public/assets/Home02/consultancy_widget_background.png'
import arrow  from '../../../public/assets/Home02/offer_arrow.png'

import { FaqCardElement } from '../../../datas/FAQ/FaqCardElement'


export default function ConsultancyFAQ() {
    const { color } = useContext(ColorContext);

    return(
        <section className='mt-80 relative bg-greyBackground -mx-[33.3%] max-xl:-mx-[6%] -mb-60 max-xl:mt-20'>
                <div className='bg-transparent relative w-10/12 m-auto rounded-xl -top-60 relative text-center max-xl:flex max-xl:flex-col-reverse max-xl:items-center max-xl:w-full max-xl:h-[800px] max-xl:mb-60'>
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


            <div className='text-center w-[62%] m-auto min-w-[1170px] relative -top-52 max-xl:min-w-fit max-xl:w-[90%]'>
                <h2 className='text-orange font-bold mb-4 w-48 m-auto relative max-xl:pt-0 850:mt-0'><span className='absolute bottom-1 left-3.5 bg-orange h-0.5 w-2'></span>SUPPORT CENTER<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
                <h3 className='font-Amiri text-slightGrey text-5xl mb-5'>Still Need help?</h3>
                <p className='text-greyText text-lg w-[65%] m-auto mb-20 1050:w-9/12'>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>
            
                <div className='flex max-xl:flex-col max-xl:items-center'>
                    {FaqCardElement.map((el) => {
                        return(
                            <div key={el.index} className={`FaqCardBackground-${el.index} rounded-lg w-[370px] m-auto mb-8 relative group hover:cursor-pointer hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.15)] ease-in-out duration-500 max-xl:mb-20 430:w-[90%]`}>
                                <span className='w-full h-full absolute bg-white left-0 rounded-lg opacity-0 group-hover:opacity-100 ease-in-out duration-500'></span>
                                <div className={`bg-${el.icon} bg-no-repeat bg-center bg-[length:45px_45px] bg-white z-10 rounded-full -top-10 left-12 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] w-20 h-20 absolute group-hover:bg-orange ease-in-out duration-500`}><Image src={el.iconWhite} alt={el.altIcon} className='opacity-0 w-12 group-hover:opacity-100 relative left-4 top-4 ease-in-out duration-500' /></div>
                                <p className='relative z-10 text-white font-Amiri text-4xl w-9/12 text-left pl-12 pb-28 pt-16 group-hover:text-slightGrey ease-in-out duration-500'>{el.title}</p>
                                <div className='pl-12 pb-8 group-hover:opacity-0 ease-in-out duration-500'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px] opacity-70' /></div>
                                <p className='absolute bottom-16 pl-12 text-left w-11/12 text-greyText leading-7 translate-y-14 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500'>Strategy experience and analyical expertise combine to enable decision making and create value.</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}