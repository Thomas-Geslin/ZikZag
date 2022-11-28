import Image from 'next/image'
import { useEffect } from 'react'

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
import graphic  from '../../public/assets/PAGES/About/slide_03_icon.png'
import volume  from '../../public/assets/PAGES/About/slide_01_icon.png'
import line from '../../public/assets/Home03/benefits_line.png'
import background02 from '../../public/assets/Home03/benefits_background_2.png'

// Philosophy Data
import { PhilosophyGridData } from '../../datas/Home02/PhilisophyGridData'


export default function BenefitsHome03() {
    useEffect(() => {
        // Intersection Obeserver for fixed GoToTop
        const target = document.getElementById('benefitsReveal1');
        const target2 = document.getElementById('benefitsReveal2');
        const viewport = document.getElementById('benefitsViewport01');
        const viewport2 = document.getElementById('benefitsViewport02');
    
        const options = {
          root: null,
          treshold: 0.2
        }
        const observer = new IntersectionObserver(function (entries) {
          entries.forEach((entry) => {
              if(entry.isIntersecting) { 
                target.classList.add('revealBenefits-Home03-1');
              }
          })
        }, options);
        observer.observe(viewport);

        const options2 = {
            root: null,
            treshold: 0.2
          }
          const observer2 = new IntersectionObserver(function (entries) {
            entries.forEach((entry) => {
                if(entry.isIntersecting) { 
                  target2.classList.add('revealBenefits-Home03-2');
                }
            })
          }, options2);
          observer2.observe(viewport2);
    },[])


    return(
        <section className='overflow-hidden relative z-10'>
            <div className='flex mx-12 max-xl:mx-0 max-xl:grid 850-xl:grid-cols-3 650-850:grid-cols-2 650:grid-cols-1'>
                <div className="w-2/12 max-xl:min-w-[260px] max-xl:justify-self-center rounded-lg py-14 px-10 mt-5 mb-6 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] ease-in duration-300 hover:cursor-pointer">
                    <div className='h-14 overflow-hidden'>
                        <Image src={dynamic} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                        <Image src={dynamicGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                    </div>
                </div>

                <div className="w-2/12 max-xl:min-w-[260px] max-xl:justify-self-center rounded-md py-14 px-10 mt-5 mb-6 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                    <div className='h-14 overflow-hidden'>
                        <Image src={okta} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                        <Image src={oktaGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                    </div>
                </div>

                <div className="w-2/12 max-xl:min-w-[260px] max-xl:justify-self-center rounded-md py-14 px-10 mt-5 mb-6 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                    <div className='h-14 overflow-hidden'>
                        <Image src={max} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                        <Image src={maxGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                    </div>
                </div>

                <div className="w-2/12 max-xl:min-w-[260px] max-xl:justify-self-center rounded-md py-14 px-10 mt-5 mb-6 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                    <div className='h-16 overflow-hidden'>
                        <Image src={solana} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-16 group-hover:translate-y-0 ease-in-out duration-300' />
                        <Image src={solanaGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-2 ease-in-out duration-300' />
                    </div>
                </div>

                <div className="w-2/12 max-xl:min-w-[260px] max-xl:justify-self-center rounded-md py-14 px-10 mt-5 mb-6 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                    <div className='h-14 overflow-hidden'>
                        <Image src={deters} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                        <Image src={detersGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                    </div>
                </div>

                <div className="w-2/12 max-xl:min-w-[260px] max-xl:justify-self-center rounded-md py-14 px-10 mt-5 mb-6 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                    <div className='h-14 overflow-hidden'>
                        <Image src={honey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                        <Image src={honeyGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                    </div>
                </div>
            </div>

            <div id='goTopViewport' className='bg-greyBackground'>
                <div id="benefitsViewport01" className='flex pt-16 relative max-xl:flex-col'>
                    <Image id="benefitsReveal1" src={background01} alt='deux personnes travaillant ensemble' className='opacity-0 w-1/2 h-[80%] 850-xl:min-w-[636px] 850-xl:min-h-[575px] 650-850:min-w-[500px] 650-850:min-h-[450px] 650:min-w-[310px]' />

                    <div className='ml-[7%] mt-36 850:mt-14'>
                        <h2 className='text-orange font-bold mb-2 relative'>OUR BENEFITS<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                        <h3 className='text-slightGrey font-Amiri text-5xl leading-tight mb-4'>Few Resons Why<br></br>You Should Choose Us</h3>
                        <p className='text-greyText text-lg mb-5 w-9/12 leading-8'>We seamlessly merge two key components – economics and information technology. This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.</p>
                   
                        <div className='mt-12 flex w-2/3 min-w-[570px] 650:flex-col 650:min-w-fit'>
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

                    <Image src={line} alt='ligne de décoration' className='absolute right-10 top-48 max-xl:hidden' />
                </div>

                <div id='benefitsViewport02' className='flex justify-end max-xl:flex-col-reverse max-xl:items-end max-xl:mt-20'>
                    <div className='w-7/12 relative rounded-bl-lg top-10 pl-[14%] max-2xl:rounded-none max-2xl:w-full max-2xl:top-0 850:pb-96 650:pl-10'>
                        <h2 className='text-orange font-bold mb-4 relative mt-20 650:mt-14'>OUR PHILOSOPHY<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
                        <h3 className='font-Amiri text-slightGrey text-5xl w-8/12 leading-[55px] mb-4'>Our Core Values and Principes</h3>
                        <p className='text-greyText text-lg w-3/4 leading-8 mb-10'>We’ve designed a culture that allows our stewards to assimilate with our clients and bring the best of who we are to your business. Our culture drives our – and more importantly – your success.</p>

                        <div className='grid grid-cols-3 h-48 min-w-[470px] w-10/12 max-2xl:h-60 850:flex 850:flex-col 650:pl-0 650:min-w-fit'>
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

                    <Image id='benefitsReveal2' src={background02} alt='deux personnes travaillant ensemble' className='pb-20 opacity-0 w-1/2 h-[80%] 850-xl:min-w-[720px] 850-xl:min-h-[650px] 650-850:min-w-[600px] 650-850:min-h-[550px] 650:min-w-[310px]' />
                </div>
            </div>
        </section>
    )
}