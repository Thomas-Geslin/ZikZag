import Image from 'next/image'

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


export default function BenefitsHome04() {
    const { color, secondaryColor } = useContext(ColorContext);


    return(
        <section className='relative mx-4 rounded-3xl overflow-hidden mb-32 z-10'>
            <div className='parallaxBenefits-Home04 max-w-[1840px] ml-auto mr-auto rounded-3xl 650:h-[800px]'></div>

            <div className='h-[645px] w-full bg-transparent absolute top-0 z-20'>
                <div className={`text-white bg-${color} relative my-12 w-[585px] pl-16 pr-12 pt-20 rounded-xl ml-[50%] max-xl:ml-[5%] 650:w-[90%] 430:my-5 430:pl-4 430:pr-4`}>
                    <h2 className='font-bold mb-3 relative'>OUR BENEFITS<span className='absolute top-5 ml-1 bg-white h-0.5 w-2'></span></h2>
                    <h3 className="relative font-Amiri text-5xl mb-4 max-xl:w-full 650:text-4xl">Why You Choose Us</h3>
                    <p className="relative text-lg leading-8 mb-8 max-xl:w-full 430:text-base">We seamlessly merge two key components – economics and information technology.</p>

                    <div className='flex items-center mb-5 group relative'>
                        <div className={`p-2 bg-[rgb(255,255,255,0.35)] rounded-full mr-6 group-hover-bg-${secondaryColor} ease-in-out duration-300`}><FontAwesomeIcon icon={faCheck} className='w-5 text-white group-hover:opacity-100 group-hover:text-white ease-in-out duration-300' /></div>
                        <p className='text-lg 430:text-base'>High standards of professionalism, integrity. Establishment of close working relationships.</p>
                    </div>

                    <div className='flex items-center mb-5 group relative pb-20'>
                        <div className={`p-2 bg-[rgb(255,255,255,0.35)] rounded-full mr-6 group-hover-bg-${secondaryColor} ease-in-out duration-300`}><FontAwesomeIcon icon={faCheck} className='w-5 text-white group-hover:opacity-100 group-hover:text-white ease-in-out duration-300' /></div>
                        <p className='text-lg w-10/12 430:text-base'>We do not have to be the best, we do have to give our best. Ability to learn.</p>
                    </div>

                    <button className={`bg-white text-black text-sm font-bold px-10 py-5 rounded absolute -bottom-7 hover:text-white hover-bg-${secondaryColor} ease-in-out duration-300`}>LEARN MORE</button>
                </div>
            </div>
        </section>
    )
} 