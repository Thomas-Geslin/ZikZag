import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import background from '../../public/assets/Home03/landing_people.png'
import squareLeft from '../../public/assets/Home03/landing_square_2.png'
import squareRight from '../../public/assets/Home03/landing_square_1.png'

import para1 from '../../public/assets/Home03/landing_parallax_1.png'
import para2 from '../../public/assets/Home03/landing_parallax_2.png'
import para3 from '../../public/assets/Home03/landing_parallax_3.png'

import man from '../../public/assets/Home03/landing_man.png'
import line1 from '../../public/assets/Home03/landing_line_1.png'
import line2 from '../../public/assets/Home03/landing_line_2.png'
import line3 from '../../public/assets/Home03/landing_line_3.png'
import line4 from '../../public/assets/Home03/landing_line_4.png'

export default function LandingHome03() {
    return(
        <section className='bg-orange pt-64 relative overflow-hidden'>
            <div>
                <Image src={para1} alt='carré de décoration' className='landingBackgroundAnimation absolute' />
                <Image src={para2} alt='carré de décoration' className='landingBackgroundAnimation absolute bottom-56 -left-80' />
                <Image src={para3} alt='carré de décoration' className='landingBackgroundAnimation-delay absolute bottom-10' />
                <Image src={para2} alt='carré de décoration' className='landingBackgroundAnimation-delay absolute top-20 left-[1200px]' />
            </div>

            <div className='text-white ml-[19%] relative'>
                <div className='flex items-center'>
                    <div className='shadow-[3px_3px_20px_3px_rgb(0,0,0,0.12)] group bg-white px-7 py-6 rounded-full hover:bg-darkBlueBackground hover:cursor-pointer ease-linear duration-300'><FontAwesomeIcon icon={faPlay} className='w-4 text-black group-hover:text-white' /></div>
                    <p className='font-bold text-sm ml-5'>HOW IT WORKS</p>
                </div>
                <h1 className='font-Amiri text-7xl w-5/12 leading-[80px] mt-9'>We Champion the Bold to Achieve the Extraordinary</h1>
                <div className='font-semibold mt-10 pb-60'>
                    <button className="rounded bg-darkBlueBackground py-5 px-11 mr-5 text-sm border-transparent border-solid border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500">LEARN MORE</button>
                    <button className="rounded border border-[#c0c0c3] border-solid py-5 px-11 text-sm hover:bg-darkBlueBackground hover:text-white hover:border-transparent ease-in-out duration-500">GET IN TOUCH</button>
                </div>
            </div>

            <Image src={squareLeft} alt='carré de décoration' className='absolute -left-64 -top-72' />
            <Image src={squareRight} alt='carré de décoration' className='absolute -right-[520px] top-24' />
            <Image src={background} alt='réunion entreprise' className='absolute -right-[420px] top-24' />

            <div className='absolute top-52 left-40 w-full'>
                <Image src={man} alt='dessin super-héros' className='absolute left-[700px]' />
                <Image src={line1} alt='ligne de décoration' className='absolute left-[700px]' />
                <Image src={line2} alt='ligne de décoration' className='absolute' />
                <Image src={line3} alt='ligne de décoration' className='absolute' />
                <Image src={line4} alt='ligne de décoration' className='absolute' />
            </div>

            <div className='flex items-center -rotate-90 absolute bottom-52 -left-24'>
                <FontAwesomeIcon icon={faLinkedin} className='w-3.5 text-white rotate-90 mr-6 hover:cursor-pointer' />
                <FontAwesomeIcon icon={faFacebookF} className='w-3 text-white rotate-90 mr-6 hover:cursor-pointer' />
                <FontAwesomeIcon icon={faTwitter} className='w-3.5 text-white rotate-90 mr-6 hover:cursor-pointer' />
                <span className='w-28 h-0.5 bg-white relative mr-6'></span>
                <p className='text-white font-semibold text-sm'>FOLLOW</p>
            </div>
        </section>
    )
}