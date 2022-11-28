import Image from "next/image"

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import background from '../../public/assets/Home01/benefits_picture.jpg'
import square from '../../public/assets/Home01/benefits_square.png'
import graphic from '../../public/assets/Home01/benefits_graphic.png'


export default function BenefitsHome01() {
    const { color, secondaryColor } = useContext(ColorContext);


    return(
        <section className='flex max-xl:flex-col relative z-10'>
            <div className='relative -top-10 w-1/2 max-xl:w-full'>
                <Image src={background} alt="réunion d'entreprise" className='rounded-tr-lg w-full' />
                <Image src={square} alt='infographie' className='absolute -bottom-10 max-xl:hidden' />
            </div>

            <div className={`font-NunitoSans w-1/2 max-xl:w-auto bg-${secondaryColor} pl-24 pt-28 rounded-bl-lg relative max-xl:-top-10 max-xl:pl-[5%] max-xl:pb-60`}>
                <h2 className={`text-${color} font-bold mb-2 relative`}>OUR BENEFITS<span className={`absolute top-5 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
                <h3 className='font-Amiri text-5xl leading-tight mb-4 text-white w-2/3 max-xl:w-10/12'>Few Reasons Why You Should Choose Us</h3>
                <p className='text-[#dddfe1] text-lg mb-5 w-2/3 leading-8 max-xl:w-10/12'>We seamlessly merge two key components – economics and information technology.</p>

                <div className='flex items-center mb-5 group'>
                    <div className={`bg-[#24313a] p-2.5 rounded-full shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] mr-6 group-hover-bg-${color} ease-in-out duration-300`}><FontAwesomeIcon icon={faCheck} className='w-5 text-white group-hover:opacity-100 group-hover:text-white ease-in-out duration-300' /></div>
                    <p className='text-[#dddfe1] text-lg w-1/2 leading-8 max-xl:w-8/12'>High standards of professionalism, integrity. Establishment of close working relationships.</p>
                </div>

                <div className='flex items-center mb-5 group'>
                    <div className={`bg-[#24313a] p-2.5 rounded-full shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] mr-6 group-hover-bg-${color} ease-in-out duration-300`}><FontAwesomeIcon icon={faCheck} className='w-5 text-white group-hover:opacity-100 group-hover:text-white ease-in-out duration-300' /></div>
                    <p className='text-[#dddfe1] text-lg w-5/12 leading-8 max-xl:w-8/12'>We do not have to be the best, we do have to give our best. Ability to learn.</p>
                </div>

                <div className='flex items-center 850:mb-20 group'>
                    <div className={`bg-[#24313a] p-2.5 rounded-full shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] mr-6 group-hover-bg-${color} ease-in-out duration-300`}><FontAwesomeIcon icon={faCheck} className='w-5 text-white group-hover:opacity-100 group-hover:text-white ease-in-out duration-300' /></div>
                    <p className='text-[#dddfe1] text-lg w-5/12 leading-8 max-xl:w-8/12'>A different way of thinking, both inside and outside the box.</p>
                </div>

                <Image src={graphic} alt='dessin de graphique' className='absolute right-0 bottom-0' />
            </div>
        </section>
    )
}