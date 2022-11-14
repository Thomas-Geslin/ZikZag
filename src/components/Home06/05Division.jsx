import Image from "next/image"

import slide1 from '../../public/assets/Home03/division_slide_1.jpg'
import slide2 from '../../public/assets/Home03/division_slide_2.jpg'
import slide3 from '../../public/assets/Home03/division_slide_3.jpg'
import slide4 from '../../public/assets/Home03/division_slide_4.jpg'


export default function DivisionHome06() {
    return(
        <section>
            <div className='flex justify-between mx-2 gap-3'>
                <div className='text-white rounded-xl overflow-hidden relative group'>
                    <Image src={slide1} alt='personne travaillant' />
                    <div className='absolute bottom-14 left-4'>
                        <p className='font-Amiri text-3xl bg-orange  px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500'>Information Technology</p>
                        <p className='absolute font-semibold top-14 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_CORPORATE_FINANCE_</p>
                    </div>
                </div>

                <div className='text-white rounded-xl overflow-hidden relative group'>
                    <Image src={slide2} alt='personne travaillant' />
                    <div className='absolute bottom-14 left-4'>
                        <p className='font-Amiri text-3xl bg-orange px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500'>Mobile App Startup</p>
                        <p className='absolute font-semibold top-14 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_STARTUP_</p>
                    </div>
                </div>

                <div className='text-white rounded-xl overflow-hidden relative group'>
                    <Image src={slide3} alt='personne travaillant' />
                    <div className='absolute bottom-14 left-4'>
                        <p className='font-Amiri text-3xl bg-orange px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500'>People Professionalism</p>
                        <p className='absolute font-semibold top-14 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_MARKETING_STRATEGY_</p>
                    </div>
                </div>

                <div className='text-white rounded-xl overflow-hidden relative group'>
                    <Image src={slide4} alt='personne travaillant' />
                    <div className='absolute bottom-14 left-4'>
                        <p className='font-Amiri text-3xl bg-orange px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500'>New Business Innovation</p>
                        <p className='absolute font-semibold top-14 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_CORPORATE_STRATEGY_</p>
                    </div>
                </div>
            </div>
        </section>
    )
}