import Image from "next/image"

import payment from '../../public/assets/Home02/offer_icon_payment_color.png'
import money from '../../public/assets/Home02/offer_icon_money_color.png'
import balance from '../../public/assets/Home02/offer_icon_balance_color.png'
import light from '../../public/assets/Home02/benefits_icon_light.png'

export default function OfferHome04() {
    return(
        <section id='goTopViewport' className='text-center bg-darkBlueBackground mx-8 rounded-3xl mb-20'>
            <h2 className='text-orange font-semibold mb-4 pt-24 relative w-40 m-auto max-xl:pt-36 850:mt-12'><span className='absolute bottom-1 left-0 bg-orange h-0.5 w-2'></span>WHAT WE OFFER<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
            <h3 className='font-Amiri text-white text-5xl mb-5'>Business Shaped Solutions</h3>
            <p className='text-[#c4c8cb] text-lg font-normal leading-8 w-[40%] m-auto pb-12 1060:w-9/12'>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>
        
            <div className='flex w-2/3 justify-between m-auto pb-24'>
                <div className='text-white text-left bg-[#1a2630] rounded-lg pl-10 mx-5 hover:bg-white ease-in-out duration-500 group'>
                    <div className='pb-6 pt-9'><Image src={payment} alt='icone de paiement' className='w-12' /></div>
                    <p className='font-Amiri text-3xl w-1/2 mb-4 group-hover:text-black ease-in-out duration-500'>Partnership System</p>
                    <p className='leading-8 mb-4 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine</p>
                    <div className='flex items-center mb-8 group/arrow relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group/arrow-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group/arrow-hover:rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group/arrow-hover:-rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-semibold pl-1 group/arrow-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
                </div>

                <div className='text-white text-left bg-[#1a2630] rounded-lg pl-10 mx-5 hover:bg-white ease-in-out duration-500 group'>
                    <div className='pb-6 pt-9'><Image src={money} alt='icone de paiement' className='w-12' /></div>
                    <p className='font-Amiri text-3xl w-1/2 mb-4 group-hover:text-black ease-in-out duration-500'>New Business Innovation</p>
                    <p className='leading-8 mb-4 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine</p>
                    <div className='flex items-center mb-8 group/arrow relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group/arrow-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group/arrow-hover:rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group/arrow-hover:-rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-semibold pl-1 group/arrow-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
                </div>

                <div className='text-white text-left bg-[#1a2630] rounded-lg pl-10 mx-5 hover:bg-white ease-in-out duration-500 group'>
                    <div className='pb-6 pt-9'><Image src={balance} alt='icone de paiement' className='w-12' /></div>
                    <p className='font-Amiri text-3xl w-1/2 mb-4 group-hover:text-black ease-in-out duration-500'>Recession Strategies</p>
                    <p className='leading-8 mb-4 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine</p>
                    <div className='flex items-center mb-8 group/arrow relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group/arrow-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group/arrow-hover:rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group/arrow-hover:-rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-semibold pl-1 group/arrow-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
                </div>

                <div className='text-white text-left bg-[#1a2630] rounded-lg pl-10 mx-5 hover:bg-white ease-in-out duration-500 group'>
                    <div className='pb-6 pt-9'><Image src={light} alt='icone de paiement' className='w-12' /></div>
                    <p className='font-Amiri text-3xl w-1/2 mb-4 group-hover:text-black ease-in-out duration-500'>Retirement Planning</p>
                    <p className='leading-8 mb-4 group-hover:text-black ease-in-out duration-500'>Strategy experience and analytical expertise combine</p>
                    <div className='flex items-center mb-8 group/arrow relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group/arrow-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group/arrow-hover:rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group/arrow-hover:-rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-semibold pl-1 group/arrow-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
                </div>
            </div>
        </section>
    )
}