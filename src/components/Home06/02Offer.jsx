import Image from "next/image"
import Link from "next/link"

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import light from '../../public/assets/Home02/benefits_icon_light.png'
import stat from '../../public/assets/Home02/offer_icon_stat_color.png'
import money from '../../public/assets/Home02/offer_icon_money_color.png'

import background from '../../public/assets/Home06/offer_background.jpg'
import widget from '../../public/assets/Home06/offer_widget.png'


export default function OfferHome06() {
    const { color, secondaryColor } = useContext(ColorContext);


    return(
    <section className='mb-28 relative z-10'>
        <div className={`bg-${secondaryColor} text-white flex justify-center py-12 850:flex-col 850:items-center`}>
            <div className='flex items-center mx-10 group hover:cursor-pointer 850:mb-7'>
                <Image src={light} alt='icone de ampoule' className='w-12 mr-5' />
                <div>
                    <p className={`text-white text-lg font-semibold group-hover-text-${color} ease-in-out duration-300`}>Get Consultation</p>
                    <p className='text-[#9fa2a5]'>You can get a free consultation.</p>
                </div>
            </div>

            <div className='flex items-center mx-10 group hover:cursor-pointer 850:mb-7'>
                <Image src={stat} alt='icone de ampoule' className='w-10 mr-5' />
                <div>
                    <p className={`text-white text-lg font-semibold group-hover-text-${color} ease-in-out duration-300`}>Fast & Quality Results</p>
                    <p className='text-[#9fa2a5]'>Please see our contact details below.</p>
                </div>
            </div>

            <div className='flex items-center mx-10 group hover:cursor-pointer'>
                <Image src={money} alt='icone de ampoule' className='w-10 mr-5' />
                <div>
                    <p className={`text-white text-lg font-semibold group-hover-text-${color} ease-in-out duration-300`}>Personal Strategy</p>
                    <p className='text-[#9fa2a5]'>We can help you in marketing strategy.</p>
                </div>
            </div>
        </div>

        <div className='flex justify-center relative max-xl:flex-col max-xl:items-center max-xl:mb-60'>
            <div className='ml-28 430:ml-[5%]'>
              <h2 className={`text-${color} font-bold mb-4 pt-32 relative max-xl:pt-20`}>WHAT WE OFFER<span className={`absolute bottom-1 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
              <h3 className='font-Amiri text-slightGrey text-5xl mb-5 w-2/3 430:w-10/12'>Generating New Business Ideas</h3>
              <p className='text-greyText text-lg mb-10 w-2/3 430:w-10/12'>We seamlessly merge two key components – economics and information technology.</p>

              <div className='grid grid-cols-2 w-10/12 650:grid-cols-1'>
                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className={`text-${color} w-5 mr-3`} /><p className='text-greyText text-lg'>Advanced Analytic</p>
                </div>
                
                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className={`text-${color} w-5 mr-3`} /><p className='text-greyText text-lg'>Customer Strategy</p>
                </div>

                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className={`text-${color} w-5 mr-3`} /><p className='text-greyText text-lg'>Business Innovations</p>
                </div>

                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className={`text-${color} w-5 mr-3`} /><p className='text-greyText text-lg'>Information Technology</p>
                </div>

                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className={`text-${color} w-5 mr-3`} /><p className='text-greyText text-lg'>Corporate Finance</p>
                </div>

                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className={`text-${color} w-5 mr-3`} /><p className='text-greyText text-lg'>Partnership System</p>
                </div>

                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className={`text-${color} w-5 mr-3`} /><p className='text-greyText text-lg'>Digital Marketing</p>
                </div>

                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className={`text-${color} w-5 mr-3`} /><p className='text-greyText text-lg'>Consultations</p>
                </div>
              </div>

              <Link href='/Contacts'><button className={`text-sm font-semibold text-white rounded bg-${color} px-11 py-5 mr-4 mt-8 hover-bg-${secondaryColor} ease-in-out duration-300`}>LEARN MORE</button></Link>
            </div>

            <div className='relative top-32 right-20 max-xl:right-0 650:w-[90%]'>
              <Image src={background} alt='réunion en entreprise' className='w-[600px] rounded' />
            </div>

            <Image src={widget} alt='réunion en entreprise' className='absolute -bottom-16 right-64 min-3xl:right-[600px] max-xl:-bottom-44 max-xl:right-24 850:left-0' />
        </div>
    </section>
    )  
}