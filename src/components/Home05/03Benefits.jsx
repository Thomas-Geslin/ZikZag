import Image from "next/image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import background from '../../public/assets/Home05/benefits_background.png'
import square from '../../public/assets/Home05/benefits_square.png'


export default function BenefitsHome05() {
    return(
        <section id='goTopViewport' className='flex justify-center ml-20 mt-16'>
            <div className='relative'>
                <Image src={square} alt='carré de décoration' className='absolute' />
                <Image src={background} alt='poignée de main' className='relative Home05BackgroundAnimation-2' />
            </div>
            
            <div className='w-1/2 max-xl:w-auto pl-24 pt-28 rounded-bl-lg relative'>
                <p className='absolute -top-[100px] left-7 font-Amiri text-[310px] text-greyBackground'>Profit</p>

                <h2 className='text-orange font-bold mb-2 relative'>OUR BENEFITS<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                <h3 className='font-Amiri text-5xl leading-tight mb-4 relative text-slightGrey w-2/3'>Few Reasons Why You Should Choose Us</h3>
                <p className=' text-slightGrey text-lg mb-5 w-2/3 leading-8'>We seamlessly merge two key components – economics and information technology.</p>

                <div className='flex items-center mb-5 group'>
                    <div className='bg-white p-2.5 rounded-full shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] mr-6 group-hover:bg-orange ease-in-out duration-300'><FontAwesomeIcon icon={faCheck} className='w-5 text-orange group-hover:opacity-100 group-hover:text-white ease-in-out duration-300' /></div>
                    <p className=' text-greyText text-lg w-1/2 leading-8'>High standards of professionalism, integrity. Establishment of close working relationships.</p>
                </div>

                <div className='flex items-center mb-5 group'>
                    <div className='bg-white p-2.5 rounded-full shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] mr-6 group-hover:bg-orange ease-in-out duration-300'><FontAwesomeIcon icon={faCheck} className='w-5 text-orange group-hover:opacity-100 group-hover:text-white ease-in-out duration-300' /></div>
                    <p className='text-greyText text-lg w-5/12 leading-8'>We do not have to be the best, we do have to give our best. Ability to learn.</p>
                </div>

                <div className='flex items-center group -ml-1 my-9 relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-bold pl-1 group-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
            </div>
        </section>
    )
}