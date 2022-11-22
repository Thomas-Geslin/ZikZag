import Image from "next/image"
import Link from "next/link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import light from '../../public/assets/Home02/benefits_icon_light.png'
import stat from '../../public/assets/Home02/offer_icon_stat_color.png'
import money from '../../public/assets/Home02/offer_icon_money_color.png'

import background from '../../public/assets/Home06/offer_background.jpg'
import widget from '../../public/assets/Home06/offer_widget.png'

export default function OfferHome06() {
    return(
    <section className='mb-28'>
        <div className='bg-darkBlueBackground text-white flex justify-center py-12'>
            <div className='flex items-center mx-10 group hover:cursor-pointer'>
                <Image src={light} alt='icone de ampoule' className='w-12 mr-5' />
                <div>
                    <p className='text-white text-lg font-semibold group-hover:text-orange ease-in-out duration-300'>Get Consultation</p>
                    <p className='text-[#9fa2a5]'>You can get a free consultation.</p>
                </div>
            </div>

            <div className='flex items-center mx-10 group hover:cursor-pointer'>
                <Image src={stat} alt='icone de ampoule' className='w-10 mr-5' />
                <div>
                    <p className='text-white text-lg font-semibold group-hover:text-orange ease-in-out duration-300'>Fast & Quality Results</p>
                    <p className='text-[#9fa2a5]'>Please see our contact details below.</p>
                </div>
            </div>

            <div className='flex items-center mx-10 group hover:cursor-pointer'>
                <Image src={money} alt='icone de ampoule' className='w-10 mr-5' />
                <div>
                    <p className='text-white text-lg font-semibold group-hover:text-orange ease-in-out duration-300'>Personal Strategy</p>
                    <p className='text-[#9fa2a5]'>We can help you in marketing strategy.</p>
                </div>
            </div>
        </div>

        <div className='flex justify-center relative'>
            <div className='ml-28'>
              <h2 className='text-orange font-bold mb-4 pt-32 relative max-xl:pt-36 850:mt-12'>WHAT WE OFFER<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
              <h3 className='font-Amiri text-slightGrey text-5xl mb-5 w-2/3'>Generating New Business Ideas</h3>
              <p className='text-greyText text-lg mb-10 w-2/3'>We seamlessly merge two key components – economics and information technology.</p>

              <div className='grid grid-cols-2 w-10/12'>
                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className='text-orange w-5 mr-3' /><p className='text-greyText text-lg'>Advanced Analytic</p>
                </div>
                
                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className='text-orange w-5 mr-3' /><p className='text-greyText text-lg'>Customer Strategy</p>
                </div>

                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className='text-orange w-5 mr-3' /><p className='text-greyText text-lg'>Business Innovations</p>
                </div>

                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className='text-orange w-5 mr-3' /><p className='text-greyText text-lg'>Information Technology</p>
                </div>

                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className='text-orange w-5 mr-3' /><p className='text-greyText text-lg'>Corporate Finance</p>
                </div>

                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className='text-orange w-5 mr-3' /><p className='text-greyText text-lg'>Partnership System</p>
                </div>

                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className='text-orange w-5 mr-3' /><p className='text-greyText text-lg'>Digital Marketing</p>
                </div>

                <div className='flex items-center mb-3'>
                    <FontAwesomeIcon icon={faCheck} className='text-orange w-5 mr-3' /><p className='text-greyText text-lg'>Consultations</p>
                </div>
              </div>

              <Link href='/Contacts'><button className="text-sm font-semibold text-white rounded bg-orange px-11 py-5 mr-4 mt-8 hover:bg-darkBlueBackground ease-in-out duration-300">LEARN MORE</button></Link>
            </div>

            <div className='relative top-32 right-20'>
              <Image src={background} alt='réunion en entreprise' className='w-[600px] rounded' />
            </div>

            <Image src={widget} alt='réunion en entreprise' className='absolute -bottom-16 right-64 min-3xl:right-[600px]' />
        </div>
    </section>
    )  
}