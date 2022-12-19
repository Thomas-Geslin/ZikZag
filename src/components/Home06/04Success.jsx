import Image from "next/image"

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

import line1 from '../../public/assets/Home06/success_line.png'
import line2 from '../../public/assets/Home06/landing_line_2.png'
import squareRight1 from '../../public/assets/Home06/success_square_2.png'
import squareLeft1 from '../../public/assets/Home06/success_square_1.png'


export default function SuccessHome06() {
    const { color } = useContext(ColorContext);


    return(
        <section className='bg-Home06Success bg-no-repeat bg-center mb-6 pb-72 overflow-hidden'>
            <div className='relative'>
                <Image src={squareRight1} alt='carré de décoration' className='absolute -top-24 -right-[420px]' />
                <Image src={squareLeft1} alt='carré de décoration' className='absolute top-60 -left-96' />
                <Image src={line1} alt='ligne de décoration' className='absolute right-24 top-48 animation-success-home06' />
                <Image src={line2} alt='ligne de décoration' className='absolute top-[520px] left-[770px] z-10' />
            </div>

            <div className='shadow-[13px_11px_81px_0px_rgb(0,0,0,0.10)] backdrop-blur-[7.2px] rounded-3xl border border-solid border-white min-w-[690px] w-[37.5%] relative top-40 left-[350px] pl-[70px] py-[60px] max-xl:left-[5%] 850:min-w-fit 850:mr-[10%] 650:pl-4'>
                <h2 className={`font-Amiri text-slightGrey leading-tight border-l-2 border-${color} text-5xl mb-5 w-11/12 pl-8 850:text-3xl`}>Success Usually Comes to Those Who are too Busy to be Looking for It</h2>
                <p className='mt-8 pl-7 text-greyText font-semibold text-sm'>CO-FOUNDER OF <span className='text-black'>ZIKZAG</span></p>
                <p className={`pl-7 font-Amiri text-${color} text-[24px]`}>Harry Barton</p>
            </div>
        </section>
    )
}