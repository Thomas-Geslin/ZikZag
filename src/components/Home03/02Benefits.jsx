import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'

import dynamic from '../../public/assets/Home02/logo_dynamic_color.png'
import okta from '../../public/assets/Home02/logo_okta_color.png'
import max from '../../public/assets/Home02/logo_max_color.png'
import solana from '../../public/assets/Home02/logo_solana_color.png'
import deters from '../../public/assets/Home02/logo_deters_color.png'
import honey from '../../public/assets/Home02/logo_honey_color.png'
import dynamicGrey from '../../public/assets/Home02/logo_dynamic_grey.png'
import oktaGrey from '../../public/assets/Home02/logo_okta_grey.png'
import maxGrey from '../../public/assets/Home02/logo_max_grey.png'
import solanaGrey from '../../public/assets/Home02/logo_solana_grey.png'
import detersGrey from '../../public/assets/Home02/logo_deters_grey.png'
import honeyGrey from '../../public/assets/Home02/logo_honey_grey.png'

import background01 from '../../public/assets/Home03/benefits_background_1.png'
import graphic  from '../../public/assets/About/slide_03_icon.png'
import volume  from '../../public/assets/About/slide_01_icon.png'
import line from '../../public/assets/Home03/benefits_line.png'
import background02 from '../../public/assets/Home03/benefits_background_2.png'

// Philosophy Data
import { PhilosophyGridData } from '../../datas/Home02/PhilisophyGridData'


export default function BenefitsHome03() {
    return(
        <section>
            <div className='flex mx-12'>
                <div className="w-2/12 rounded-lg py-14 px-10 mt-5 mb-6 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] ease-in duration-300 hover:cursor-pointer">
                    <div className='h-14 overflow-hidden'>
                        <Image src={dynamic} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                        <Image src={dynamicGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                    </div>
                </div>

                <div className="w-2/12 rounded-md py-14 px-10 mt-5 mb-6 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                    <div className='h-14 overflow-hidden'>
                        <Image src={okta} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                        <Image src={oktaGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                    </div>
                </div>

                <div className="w-2/12 rounded-md py-14 px-10 mt-5 mb-6 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                    <div className='h-14 overflow-hidden'>
                        <Image src={max} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                        <Image src={maxGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                    </div>
                </div>

                <div className="w-2/12 rounded-md py-14 px-10 mt-5 mb-6 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                    <div className='h-16 overflow-hidden'>
                        <Image src={solana} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-16 group-hover:translate-y-0 ease-in-out duration-300' />
                        <Image src={solanaGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-2 ease-in-out duration-300' />
                    </div>
                </div>

                <div className="w-2/12 rounded-md py-14 px-10 mt-5 mb-6 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                    <div className='h-14 overflow-hidden'>
                        <Image src={deters} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                        <Image src={detersGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                    </div>
                </div>

                <div className="w-2/12 rounded-md py-14 px-10 mt-5 mb-6 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                    <div className='h-14 overflow-hidden'>
                        <Image src={honey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                        <Image src={honeyGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                    </div>
                </div>
            </div>

            <div id='goTopViewport' className='bg-greyBackground'>
                <div className='flex pt-16 relative'>
                    <Image src={background01} alt='deux personnes travaillant ensemble' />

                    <div className='ml-32 mt-36'>
                        <h2 className='text-orange font-bold mb-2 relative'>OUR BENEFITS<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                        <h3 className='text-slightGrey font-Amiri text-5xl leading-tight mb-4'>Few Resons Why<br></br>You Should Choose Us</h3>
                        <p className='text-greyText text-lg mb-5 w-9/12 leading-8'>We seamlessly merge two key components – economics and information technology. This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.</p>
                   
                        <div className='mt-12 flex w-2/3'>
                            <div>
                                <Image src={graphic} alt='icone de graphique' className='mb-6' />
                                <p className='font-Amiri text-slightGrey text-3xl'>Business Idea</p>
                                <p className='text-greyText leading-8 mb-4'>Strategy experience and analytical expertise combine to enable decision.</p>
                                <div className='flex items-center group relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-bold pl-1 group-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
                            </div>

                            <div className='-mt-4'>
                                <Image src={volume} alt='icone de graphique' className='mb-7' />
                                <p className='font-Amiri text-slightGrey text-3xl mb-0.5'>Moving Formward</p>
                                <p className='text-greyText leading-8 mb-4'>Strategy experience and analytical expertise combine to enable decision.</p>
                                <div className='flex items-center group relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-bold pl-1 group-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
                            </div>
                        </div>
                    </div>

                    <Image src={line} alt='ligne de décoration' className='absolute right-10 top-48' />
                </div>

                <div className='flex'>
                    <div className='w-7/12 relative rounded-bl-lg top-10 pl-[14%] max-2xl:rounded-none max-2xl:w-full max-2xl:top-0 850:pb-96 650:pl-10'>
                        <h2 className='text-orange font-bold mb-4 relative mt-20 650:mt-80'>OUR PHILOSOPHY<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
                        <h3 className='font-Amiri text-slightGrey text-5xl w-8/12 leading-[55px] mb-4'>Our Core Values and Principes</h3>
                        <p className='text-greyText text-lg w-3/4 leading-8 mb-10'>We’ve designed a culture that allows our stewards to assimilate with our clients and bring the best of who we are to your business. Our culture drives our – and more importantly – your success.</p>

                        <div className='grid grid-cols-3 h-48 w-10/12 max-2xl:h-60 850:flex 850:flex-col 650:pl-0'>
                        {PhilosophyGridData.map((el) => {
                            return (
                            <div key={el.index} className='flex rounded-md w-[210px] mb-4 pl-4 hover:cursor-pointer hover:bg-orange ease-in-out duration-500 group'>
                                <FontAwesomeIcon icon={faArrowDownLong} className='relative -top-5 w-3 -rotate-45 text-orange group-hover:text-white ease-in-out duration-500' />
                                <p className='text-lg font-semibold w-10/12 py-4 px-3 group-hover:text-white ease-in-out duration-500'>{el.line}</p>
                            </div>
                            )
                        })}
                        </div>
                    </div>

                    <Image src={background02} alt='deux personnes travaillant ensemble' className='pb-20' />
                </div>
            </div>
        </section>
    )
}