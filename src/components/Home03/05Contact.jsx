import Image from "next/image"

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

import man from '../../public/assets/Home03/contact_man.png'
import line from '../../public/assets/Home03/contact_line.png'
import letter1 from '../../public/assets/Home03/contact_letter_1.png'
import letter2 from '../../public/assets/Home03/contact_letter_2.png'
import letter3 from '../../public/assets/Home03/contact_letter_3.png'
import phone from '../../public/assets/footer/icon_phone.png'
import placeholder from '../../public/assets/footer/icon_placeholder.png'
import at from '../../public/assets/Home03/icon_at.png'

export default function ContactHome03() {
    const { color } = useContext(ColorContext);


    return(
        <section className='flex justify-center bg-Home03Contact bg-no-repeat bg-[top_5rem_left_51rem] pt-40 pb-12 mb-40 ml-32 min-3xl:bg-[top_5rem_left_70rem] max-xl:bg-none 1050:flex-col 1050:items-center 1050:ml-0'>
            <div className='mt-28 relative 650:w-[80%] 1050:mt-0'>
                <Image src={man} alt='dessin homme' className='mr-40 1050:mr-0' />
                <Image src={line} alt='ligne de décoration' className='absolute top-0 animation-contact-Home05-left' />
                <Image src={letter1} alt='dessin de lettre' className='absolute top-2 animation-contact-Home05-top-3' />
                <Image src={letter2} alt='dessin de lettre' className='absolute top-2 animation-contact-Home05-top-1' />
                <Image src={letter3} alt='dessin de lettre' className='absolute top-2 animation-contact-Home05-top-2' />
            </div>
            
            <div className='w-1/3 min-3xl:relative min-3xl:left-32 1050:w-10/12'>
                <h2 className={`text-${color} font-bold mb-4 pt-32 relative w-40 850-xl:pt-36 850:mt-0 850:pt-20`}>CONTACT US<span className={`absolute bottom-1 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
                <h3 className='font-Amiri text-slightGrey text-5xl mb-5'>Get in Touch</h3>
                <p className='text-greyText text-lg leading-9 w-10/12 mb-8'>Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email or fill out the contact form and we’ll get back to you.</p>
            
                <div className='flex items-start mb-8 leading-7'>
                    <div className=' bg-white rounded-full py-3.5 px-2 relative shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]'><Image src={placeholder} alt='icone de telephone' className='w-7 mr-3 relative top-0 left-1.5' /></div>
                    <div className='ml-8'>
                        <p className='font-bold text-slightGrey'>Visit Us:</p>
                        <p className='text-greyText'>27 Division ST, New York, NY 10002, USA</p>
                    </div>
                </div>
                    
                <div className='flex items-center mb-8'>
                    <div className=' bg-white rounded-full py-3.5 px-2 relative shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]'><Image src={at} alt='icone de telephone' className='w-7 mr-3 relative top-0 left-1.5' /></div>
                    <div className='ml-8'>
                        <p className='font-bold text-slightGrey'>Mail  Us:</p>
                        <p className='text-greyText'>zik_zag.mail@mail.com</p>
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className=' bg-white rounded-full py-3.5 px-2 relative shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]'><Image src={phone} alt='icone de telephone' className='w-7 mr-3 relative top-0 left-1.5' /></div>
                    <div className='ml-8'>
                        <p className='font-bold text-slightGrey'>Phone Us:</p>
                        <p className='text-greyText'>+1 (800) 123 456 789</p>
                    </div>
                </div>
            </div>
        </section>
    )
}