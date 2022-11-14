import Image from "next/image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import { InfoCardElement } from "../../../datas/Elements/InfoCardElement"
import { SlideCardElement } from "../../../datas/Elements/SlideCardElement"

import arrow  from '../../../public/assets/Home02/offer_arrow.png'


export default function InfoElement() {
    return(
        <section className='mt-20'>
            <p className='text-slightGrey font-Amiri text-4xl mb-16'>Info Boxes</p>


            <div className='flex'>
                {InfoCardElement.map((el) => {
                    return(
                        <div key={el.index} className={`OfferCardBackground-${el.index} rounded-lg w-[370px] m-auto mb-8 relative group hover:cursor-pointer hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.15)] ease-in-out duration-500`}>
                            <span className='w-full h-full absolute bg-white left-0 rounded-lg opacity-0 group-hover:opacity-100 ease-in-out duration-500'></span>
                            <div className={`bg-${el.icon} bg-no-repeat bg-center bg-[length:45px_45px] bg-white z-10 rounded-full -top-10 left-12 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] w-20 h-20 absolute group-hover:bg-orange ease-in-out duration-500`}><Image src={el.iconWhite} alt={el.altIcon} className='opacity-0 w-12 group-hover:opacity-100 relative left-4 top-4 ease-in-out duration-500' /></div>
                            <p className='relative z-10 text-white font-Amiri text-4xl w-9/12 text-left pl-12 pb-28 pt-16 group-hover:text-slightGrey ease-in-out duration-500'>{el.title}</p>
                            <div className='pl-12 pb-8 group-hover:opacity-0 ease-in-out duration-500'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px] opacity-70' /></div>
                            <p className='absolute bottom-16 pl-12 text-left w-11/12 text-greyText leading-7 translate-y-14 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500'>Strategy experience and analyical expertise combine to enable decision making and create value.</p>
                        </div>
                    )
                })}
            </div>


            <div className='flex justify-between'>
                {SlideCardElement.map((el) =>
                    <div key={el.index} className='flex relative items-center rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[32.5%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto'>
                    <Image src={el.picture} alt={el.alt} className='mx-6 max-xl:py-10' />
                    <div>
                        <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>{el.title}</p>
                        <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise.</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover:text-orange' />
                    </div>
                )}
            </div>
        </section>
    )
}