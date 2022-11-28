import Image from "next/image"
import Link from "next/link";

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

import { OfferGridData } from "../../datas/Home01/OfferGridData"

import arrow  from '../../public/assets/Home02/offer_arrow.png'

export default function OfferHome01() {
    const { color, secondaryColor } = useContext(ColorContext);


    return(
        <section id='goTopViewport' className='bg-greyBackground relative -top-60 -mb-60 bg-squareBackground bg-no-repeat bg-[top_right_5rem] text-center'>
            <h2 className={`text-${color} font-bold mb-4 pt-60 relative w-40 m-auto max-xl:pt-36 850:mt-12`}><span className={`absolute bottom-1 left-0 bg-${color} h-0.5 w-2`}></span>WHAT WE OFFER<span className={`absolute bottom-1 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
            <h3 className='font-Amiri text-slightGrey text-5xl mb-5'>Business Shaped Solutions</h3>
            <p className='text-greyText text-lg w-[40%] m-auto mb-10 1050:w-10/12'>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>
        
            <div className='grid grid-cols-3 gap-4 m-auto w-[63%] min-w-[1170px] max-w-[1170px] mt-20 max-xl:min-w-fit 850-xl:grid-cols-2 850:grid-cols-1'>
                {OfferGridData.map((el) => {
                    return(
                        <Link key={el.index} href='/Pages/OurServices'>
                        <div className={`OfferCardBackground-${el.index} rounded-lg w-[370px] m-auto mb-20 relative group hover:cursor-pointer hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.15)] ease-in-out duration-500 430:w-[310px]`}>
                            <span className='w-full h-full absolute bg-white left-0 rounded-lg opacity-0 group-hover:opacity-100 ease-in-out duration-500'></span>
                            <div className={`bg-${el.icon} bg-no-repeat bg-center bg-[length:45px_45px] bg-white z-10 rounded-full -top-10 left-12 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] w-20 h-20 absolute group-hover-bg-${color} ease-in-out duration-500`}><Image src={el.iconWhite} alt={el.altIcon} className='opacity-0 w-12 group-hover:opacity-100 relative left-4 top-4 ease-in-out duration-500' /></div>
                            <p className='relative z-10 text-white font-Amiri text-4xl w-9/12 text-left pl-12 pb-28 pt-16 group-hover:text-slightGrey ease-in-out duration-500'>{el.title}</p>
                            <div className='pl-12 pb-8 group-hover:opacity-0 ease-in-out duration-500'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px] opacity-70' /></div>
                            <p className='absolute bottom-16 pl-12 text-left w-11/12 text-greyText leading-7 translate-y-14 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500'>Strategy experience and analyical expertise combine to enable decision making and create value.</p>
                        </div>
                        </Link>
                    )
                })}
            </div>

            <Link href='/Pages/OurServices' className="relative z-10"><button className={`rounded bg-${color} mb-60 text-white font-semibold text-sm py-4 px-10 hover-bg-${secondaryColor} ease-in-out duration-300`}>ALL SERVICES</button></Link>
        </section>
    )
}