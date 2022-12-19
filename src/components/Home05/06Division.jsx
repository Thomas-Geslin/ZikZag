import Image from "next/image"

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

import logo from '../../public/assets/Home05/division_logo.png'
import square from '../../public/assets/Home05/division_square.png'


export default function DivisionHome05() {
    const { secondaryColor } = useContext(ColorContext);


    return(
        <section className='text-center text-white mb-20 relative overflow-hidden'>
            <div className='parallaxDivision-Home05 absolute 650:h-[700px]'></div>

            <div className='relative z-10'>
                <Image src={logo} alt="logo de l'entreprise" className='w-36 m-auto mb-12 pt-24' />
                <p className='font-Amiri text-5xl 650:w-11/12 650:m-auto'>Get a Free Counsultancy Right Now!</p>
                <p className='text-[20px] mt-3 650:w-11/12 650:m-auto 650:mt-2'>We help you see the world differently, discover opportunities you may never have imagined.</p>
                <button className={`text-sm text-black bg-white font-bold py-5 px-9 rounded mt-12 mb-24 hover-bg-${secondaryColor} hover:text-white ease-in-out duration-300`}>GET IN TOUCH</button>
            </div>

            <Image src={square} alt='carré de décoration' className='absolute left-[50%] translate-x-[-50%] top-0 min-w-[660px] 650:h-[700px]' />
        </section>
    )
}