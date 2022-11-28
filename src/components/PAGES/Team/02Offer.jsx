import Image from "next/image";

import { AboutSwiperData } from "../../../datas/About/AboutSwiperData";


export default function OfferTeam() {
    return(
        <section className='bg-greyBackground bg-squareBackground bg-no-repeat bg-center text-center pb-40'>
            <h2 className='text-orange font-bold mb-4 pt-20 relative w-40 m-auto max-xl:pt-36 850:mt-12'><span className='absolute bottom-1 left-0 bg-orange h-0.5 w-2'></span>WHAT WE OFFER<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
            <h3 className='font-Amiri text-slightGrey text-5xl mb-5'>Meet Our Team</h3>
            <p className='text-greyText text-lg w-[40%] m-auto mb-14 850:w-10/12'>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>

            <div className='grid grid-cols-4 gap-4 1050-xl:grid-cols-3 650-1050:grid-cols-2 650:grid-cols-1'>
                {AboutSwiperData.map((el) => {
                    return(
                        <div key={el.index} className='relative group hover:cursor-pointer'>
                            <Image src={el.background} alt="photo d'employé" className="w-[440px] m-auto rounded-lg max-xl:w-[90%]" />


                            <div className="bg-white flex justify-between items-center px-8 h-28 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] rounded-md w-10/12 m-auto relative -top-20 z-10 group-hover:-translate-y-16 ease-in-out duration-500">
                                <div className="pl-4">
                                    <p className="font-Amiri text-3xl text-slightGrey">{el.name}</p>
                                    <p className="text-[#989898] font-semibold text-sm">{el.work}</p>
                                </div>

                                <Image src={el.icon} alt='icon de décoration' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}