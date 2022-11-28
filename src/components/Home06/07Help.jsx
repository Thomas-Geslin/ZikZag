import Image from "next/image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

import logo from "../../public/assets/Home02/logo.png"
import line1 from '../../public/assets/Home06/landing_line_1.png'
import square from '../../public/assets/Home06/help_square.png'
import squareRight from '../../public/assets/Home06/help_square_right.png'
import squareLeft from '../../public/assets/Home06/help_square_left.png'


export default function HelpHome06() {
    return(
        <section className='bg-Home06Help bg-no-repeat bg-center relative z-10 mb-32 pb-72 overflow-hidden 650:pb-96'>
            <div className='relative'>
                <Image src={squareRight} alt='carré de décoration' className='absolute top-96 -right-72' />
                <Image src={squareLeft} alt='carré de décoration' className='absolute top-[550px] -left-40 max-xl:hidden' />
                <Image src={line1} alt='ligne de décoration' className='absolute left-48 top-14 animation-success-home06 1050:hidden' />
            </div>

            <div className='shadow-[13px_11px_81px_0px_rgb(0,0,0,0.10)] backdrop-blur-[7.2px] rounded-3xl border border-solid border-white w-1/3 min-w-[480px] max-h-[470px] relative top-28 left-[46%] pl-[70px] py-[60px] 1050:left-[5%] 650:min-w-[300px]'>
                <Image src={logo} alt='logo de entreprise' className='w-36' />
                <h2 className='font-Amiri text-slightGrey leading-tight text-5xl my-9 w-9/12'>Need help finding the best solution?</h2>
                <button className="text-sm bg-orange font-semibold py-5 px-10 rounded text-white hover:bg-darkBlueBackground ease-in-out duration-300">GET IN TOUCH</button>

                <div className='absolute -right-64 -bottom-28 max-xl:relative 650-xl:-right-20 650-xl:-top-10 650:mt-10  650:top-0 650:right-0'>
                    <Image src={square} alt='carré orange' className='w-80 max-xl:relative 650-xl:-right-20 650:right-0' />
                    <div className='text-white absolute top-0 right-12 flex flex-col justify-center items-center'>
                        <div className='p-4 w-14 rounded-full bg-white'><FontAwesomeIcon icon={faPhoneVolume} className='relative left-px bottom-px w-6 -rotate-45 text-orange' /></div>
                        <p className='font-Amiri text-3xl mt-6 relative left-2 650:text-base 650:mt-2'>+1 800 123 456 789</p>
                        <p className='font-semibold'>OR CALL US 24/7</p>
                    </div>
                </div>
            </div>
        </section>
    )
}