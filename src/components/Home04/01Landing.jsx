import Image from "next/image"

import slide1 from '../../public/assets/Home04/landing_slide_1.jpg'

import stat from '../../public/assets/Home02/offer_icon_stat_color.png'

export default function LandingHome04() {
    return(
        <section className="relative">
            <Image src={slide1} alt='personne avec un casque de réalité virtuelle' className='absolute' />

            <div className='text-center text-white relative pt-44'>
                <p className='text-[20px] font-light'>PERFECT SOLUTION FOR YOUR COMPAGNY</p>
                <h1 className='text-[130px] font-Amiri -mb-7 -mt-4'>Custom Solutions</h1>
                <p className='text-[22px]'>We seamlessly merge two key componentes - economics and information technology.</p>

                <div className='mt-11'>
                    <button className="rounded bg-white py-4 px-9 mr-5 text-[15px] border-transparent font-semibold text-black border-solid hover:text-white border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500">LEARN MORE</button>
                    <button className="rounded border border-[#c0c0c3] border-solid py-4 px-9 text-[15px] font-semibold hover:bg-white hover:text-black ease-in-out duration-500">GET IN TOUCH</button>
                </div>

                <div id='headerViewport' className='w-[61%] bg-[#14212b99] flex justify-between m-auto mt-[165px] text-left'>
                    <div className='flex items-center hover:bg-white group ease-in-out duration-500 py-8 pl-8'>
                        <Image src={stat} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                        <div className='text-white'>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                            <p className='leading-7 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                        </div>
                    </div>

                    <div className='flex items-center hover:bg-white group ease-in-out duration-500  py-8 pl-8'>
                        <Image src={stat} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                        <div className='text-white'>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                            <p className='leading-7 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                        </div>
                    </div>

                    <div className='flex items-center hover:bg-white group ease-in-out duration-500  py-8 pl-8'>
                        <Image src={stat} alt='icone de graphique' className='w-11 mr-6 relative bottom-4' />
                        <div className='text-white'>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                            <p className='leading-7 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}