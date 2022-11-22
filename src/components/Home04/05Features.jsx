import Image from "next/image"

import hand from '../../public/assets/Home04/feature_hand.jpg'
import line from '../../public/assets/Home04/feature_line.jpg'

import mission from '../../public/assets/Home02/benefits_icon_mission.png'
import light from '../../public/assets/Home02/benefits_icon_light.png'
import work from '../../public/assets/Home02/benefits_icon_work.png'
import target from '../../public/assets/Home02/benefits_icon_target.png'
import chart from '../../public/assets/Home01/icon_chart.png'
import pyramid from '../../public/assets/Home01/icon_pyramid.png'

export default function FeatureHome04() {
    return(
        <section className='mx-6 relative mt-16 mb-28'>
            <Image src={line} alt='graphique de décoration' className='absolute left-[50%] translate-x-[-50%] bottom-0 rounded-3xl' />

            <div className='bg-orange flex w-[63%] m-auto rounded-lg overflow-hidden relative top-0 mb-24'>
                <Image src={hand} alt='poignée de main' className='w-96' />
                <div className='text-white justify-center flex flex-col ml-16'>
                    <p className='font-Amiri text-[32px]'>Need Consultancy? Call Us +1 800 123 456 789</p>
                    <p>We help you see the world differently, discover opportunities you may never have imagined.</p>
                </div>
            </div>

            <div className='flex w-[63%] m-auto relative pb-6'>
                <div className='w-[45%] mr-8'>
                    <h2 className='text-orange font-bold mb-3 relative'>FEATURES<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h3 className="font-Amiri text-5xl text-slightGrey mb-4 w-[81%] max-xl:w-full 650:text-4xl">Core Values</h3>
                    <p className="text-greyText text-lg leading-8 mb-8 max-xl:w-full">We seamlessly merge two key components – economics and information technology. This is the main factor that sets us apart from our competition and allows us.</p>
                    <button className="bg-darkBlueBackground font-semibold text-sm text-white px-10 py-5 rounded hover:bg-orange ease-in-out duration-500">LEARN MORE</button>
                </div>

                <div className='grid grid-cols-2 relative -top-8'>
                    <div className='flex items-center group py-4'>
                        <Image src={pyramid} alt='icone de graphique' className='w-[70px] mr-6 relative bottom-4 group-hover:bg-white group-hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] ease-in-out duration-500 p-4 rounded-lg' />
                        <div className='text-black'>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Organization</p>
                            <p className='leading-7 w-11/12 text-greyText ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                        </div>
                    </div>

                    <div className='flex items-center group py-4'>
                        <Image src={mission} alt='icone de graphique' className='w-[70px] mr-6 relative bottom-4 group-hover:bg-white group-hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] ease-in-out duration-500 p-3 rounded-lg' />
                        <div className='text-black'>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Sustainability</p>
                            <p className='leading-7 w-11/12 text-greyText ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                        </div>
                    </div>

                    <div className='flex items-center group py-4'>
                        <Image src={light} alt='icone de graphique' className='w-[70px] mr-6 relative bottom-4 group-hover:bg-white group-hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] ease-in-out duration-500 p-2 rounded-lg' />
                        <div className='text-black'>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Marketing</p>
                            <p className='leading-7 w-11/12 text-greyText ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                        </div>
                    </div>

                    <div className='flex items-center group py-4'>
                        <Image src={work} alt='icone de graphique' className='w-[70px] mr-6 relative bottom-4 group-hover:bg-white group-hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] ease-in-out duration-500 p-2 rounded-lg' />
                        <div className='text-black'>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Customer Strategy</p>
                            <p className='leading-7 w-11/12 text-greyText ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                        </div>
                    </div>

                    <div className='flex items-center group py-4'>
                        <Image src={chart} alt='icone de graphique' className='w-[70px] mr-6 relative bottom-4 group-hover:bg-white group-hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] ease-in-out duration-500 p-4 rounded-lg' />
                        <div className='text-black'>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Improvement</p>
                            <p className='leading-7 w-11/12 text-greyText ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                        </div>
                    </div>

                    <div className='flex items-center group py-4'>
                        <Image src={target} alt='icone de graphique' className='w-[70px] mr-6 relative bottom-4 group-hover:bg-white group-hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] ease-in-out duration-500 p-2 rounded-lg' />
                        <div className='text-black'>
                            <p className='font-Amiri text-2xl mb-1 group-hover:text-black ease-in-out duration-500'>Transformation</p>
                            <p className='leading-7 w-11/12 text-greyText ease-in-out duration-500'>Strategy experience and analytical expertise combine to enable</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}