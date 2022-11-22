import Image from "next/image"

import payment from '../../public/assets/Home02/offer_icon_payment_color.png'
import money from '../../public/assets/Home02/offer_icon_money_color.png'
import light from '../../public/assets/Home02/benefits_icon_light.png'


export default function WhatOfferHome05() {
    return(
        <section className='text-center bg-Home05Offer bg-no-repeat bg-[bottom_left] bg-contain pb-20'>
            <h2 className='text-orange font-bold mb-4 relative w-40 m-auto max-xl:pt-36 850:mt-12'><span className='absolute bottom-1 left-0 bg-orange h-0.5 w-2'></span>WHAT WE OFFER<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
            <h3 className='font-Amiri text-slightGrey text-5xl mb-5'>Business Shaped Solutions</h3>
            <p className='text-greyText text-lg w-[40%] m-auto mb-10 1060:w-9/12'>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>
        
            <div className='flex justify-center w-2/3 m-auto'>
                <div className='bg-white max-w-[370px] text-left relative mx-4 shadow-[3px_3px_20px_3px_#eae9e9] rounded-lg pl-10 group hover:bg-darkBlueBackground ease-in-out duration-300'>
                    <div className='p-3 bg-[#ffede7] group-hover:bg-[#22313c] delay-75 ease-in-out duration-300 w-16 rounded-full mr-6 mt-8'><Image src={payment} alt='icone de paiement'className='w-10' /></div>
                    <p className='font-Amiri text-3xl mt-6 group-hover:text-white ease-in-out duration-300'>Partnership System</p>

                    <span className='absolute h-px bg-[#e5e5e5] w-[90%] mt-6 group-hover:bg-orange ease-in-out duration-300'></span>

                    <p className='text-greyText mt-12 leading-7 group-hover:text-white ease-in-out duration-300'>We seamlessly merge key components - economics & information technology.</p>
                    <div className='flex items-center group -ml-1 my-6 relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-bold pl-1 group-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
                </div>

                <div className='bg-white max-w-[370px] text-left relative mx-4 shadow-[3px_3px_20px_3px_#eae9e9] rounded-lg pl-10 group hover:bg-darkBlueBackground ease-in-out duration-300'>
                    <div className='p-3 bg-[#ffede7] group-hover:bg-[#22313c] delay-75 ease-in-out duration-300 w-16 rounded-full mr-6 mt-8'><Image src={money} alt='icone de paiement'className='w-10' /></div>
                    <p className='font-Amiri text-3xl mt-6 group-hover:text-white ease-in-out duration-300'>Business Innovation</p>

                    <span className='absolute h-px bg-[#e5e5e5] w-[90%] mt-6 group-hover:bg-orange ease-in-out duration-300'></span>

                    <p className='text-greyText mt-12 leading-7 group-hover:text-white ease-in-out duration-300'>We seamlessly merge key components - economics & information technology.</p>
                    <div className='flex items-center group -ml-1 my-6 relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-bold pl-1 group-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
                </div>

                <div className='bg-white max-w-[370px] text-left relative mx-4 shadow-[3px_3px_20px_3px_#eae9e9] rounded-lg pl-10 group hover:bg-darkBlueBackground ease-in-out duration-300'>
                    <div className='p-3 bg-[#ffede7] group-hover:bg-[#22313c] delay-75 ease-in-out duration-300 w-16 rounded-full mr-6 mt-8'><Image src={light} alt='icone de paiement'className='w-10' /></div>
                    <p className='font-Amiri text-3xl mt-6 group-hover:text-white ease-in-out duration-300'>Retirement Planning</p>

                    <span className='absolute h-px bg-[#e5e5e5] w-[90%] mt-6 group-hover:bg-orange ease-in-out duration-300'></span>

                    <p className='text-greyText mt-12 leading-7 group-hover:text-white ease-in-out duration-300'>We seamlessly merge key components - economics & information technology.</p>
                    <div className='flex items-center group -ml-1 my-6 relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-bold pl-1 group-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
                </div>
            </div>
        </section>
    )
}