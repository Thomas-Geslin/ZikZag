import Image from "next/image"

import hand from '../../public/assets/Home04/feature_hand.jpg'
import line from '../../public/assets/Home04/feature_line.jpg'
import stat from '../../public/assets/Home02/offer_icon_stat_color.png'

export default function FeatureHome04() {
    return(
        <section className='mx-6 relative mt-12 mb-28'>
            <Image src={line} alt='graphique de décoration' className='absolute right-0 bottom-0 rounded-3xl' />

            <div className='bg-orange flex w-[63%] m-auto rounded-lg overflow-hidden relative top-0 mb-28'>
                <Image src={hand} alt='poignée de main' className='w-96' />
                <div className='text-white justify-center flex flex-col ml-16'>
                    <p className='font-Amiri text-[32px]'>Need Consultancy? Call Us +1 800 123 456 789</p>
                    <p>We help you see the world differently, discover opportunities you may never have imagined.</p>
                </div>
            </div>

            <div className='flex w-[63%] m-auto relative pb-14'>
                <div className='w-[45%] mr-8'>
                    <h2 className='text-orange font-bold mb-3 relative'>FEATURES<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h3 className="font-Amiri text-5xl text-slightGrey mb-4 w-[81%] max-xl:w-full 650:text-4xl">Core Values</h3>
                    <p className="text-greyText text-lg leading-8 mb-8 max-xl:w-full">We seamlessly merge two key components – economics and information technology. This is the main factor that sets us apart from our competition and allows us.</p>
                    <button className="bg-darkBlueBackground font-semibold text-sm text-white px-10 py-5 rounded hover:bg-orange ease-in-out duration-500">LEARN MORE</button>
                </div>

                <div className='grid grid-cols-2 relative -top-4'>
                    <div className='flex items-center group py-6'>
                        <Image src={stat} alt='icone de graphique' className='w-16 mr-6 relative bottom-4 group-hover:bg-white group-hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] ease-in-out duration-500 p-4 rounded-lg' />
                        <div className='text-black'>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                            <p className='leading-7 w-10/12 text-greyText ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                        </div>
                    </div>

                    <div className='flex items-center group py-6'>
                        <Image src={stat} alt='icone de graphique' className='w-16 mr-6 relative bottom-4 group-hover:bg-white group-hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] ease-in-out duration-500 p-4 rounded-lg' />
                        <div className='text-black'>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                            <p className='leading-7 w-10/12 text-greyText ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                        </div>
                    </div>

                    <div className='flex items-center group py-6'>
                        <Image src={stat} alt='icone de graphique' className='w-16 mr-6 relative bottom-4 group-hover:bg-white group-hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] ease-in-out duration-500 p-4 rounded-lg' />
                        <div className='text-black'>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                            <p className='leading-7 w-10/12 text-greyText ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                        </div>
                    </div>

                    <div className='flex items-center group py-6'>
                        <Image src={stat} alt='icone de graphique' className='w-16 mr-6 relative bottom-4 group-hover:bg-white group-hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] ease-in-out duration-500 p-4 rounded-lg' />
                        <div className='text-black'>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                            <p className='leading-7 w-10/12 text-greyText ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                        </div>
                    </div>

                    <div className='flex items-center group py-6'>
                        <Image src={stat} alt='icone de graphique' className='w-16 mr-6 relative bottom-4 group-hover:bg-white group-hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] ease-in-out duration-500 p-4 rounded-lg' />
                        <div className='text-black'>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                            <p className='leading-7 w-10/12 text-greyText ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                        </div>
                    </div>

                    <div className='flex items-center group py-6'>
                        <Image src={stat} alt='icone de graphique' className='w-16 mr-6 relative bottom-4 group-hover:bg-white group-hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] ease-in-out duration-500 p-4 rounded-lg' />
                        <div className='text-black'>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Corporate Finance</p>
                            <p className='leading-7 w-10/12 text-greyText ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}