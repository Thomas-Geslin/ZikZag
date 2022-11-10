import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import background from '../../public/assets/Home03/landing_people.png'

export default function LandingHome03() {
    return(
        <section className='bg-orange pt-64 relative'>
            <div className='text-white ml-[19%]'>
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

            <Image src={background} alt='réunion entreprise' className='absolute -right-[420px] top-24' />

            <div>

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