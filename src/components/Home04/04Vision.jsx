import Image from "next/image"
import { useEffect } from "react"

import man from '../../public/assets/Home04/vision_man.png'
import dot from '../../public/assets/Home04/vision_dot.png'
import quote from '../../public/assets/About/about_quote.png'

import dynamic from '../../public/assets/Home02/logo_dynamic_color.png'
import okta from '../../public/assets/Home02/logo_okta_color.png'
import max from '../../public/assets/Home02/logo_max_color.png'
import solana from '../../public/assets/Home02/logo_solana_color.png'
import deters from '../../public/assets/Home02/logo_deters_color.png'
import honey from '../../public/assets/Home02/logo_honey_color.png'


export default function VisionHome04() {
    useEffect(() => {
        // Intersection Obeserver for fixed progress-bar Strategy
        const target = document.querySelectorAll('.progressBarStrategyTarget');
        const viewport = document.getElementById('progressBarStrategy');
    
        const options = {
          root: null,
          treshold: 0.5
        }
    
        const observer = new IntersectionObserver(function (entries) {
          entries.forEach((entry) => {
              if(entry.isIntersecting) {
                for(entry of target) {
                entry.classList.add('strategy-bar-animation')
                }
              };
          })
          
        }, options);
        observer.observe(viewport);
    }, [])


    return(
        <section className='mb-10'>
            <div className='flex justify-center'>
                <div className="w-1/3 max-xl:w-full relative top-20 left-16 mb-20">
                    <h2 className='text-orange font-semibold mb-3 relative'>OUR VISION<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h3 className="font-Amiri text-5xl text-slightGrey mb-4 w-[81%] max-xl:w-full 650:text-4xl">Strategy is at the Heart of What We Do</h3>
                    <p className="text-greyText text-lg w-3/4 leading-8 mb-8 max-xl:w-full">Our team applies its wide-ranging experience to determining the strategies that will best enable our clients to achieve clear, long-term objectives.</p>

                    <div className="relative w-3/4 mb-12 max-xl:w-full" id='progressBarStrategy'>
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>DIGITAL STRATEGY</p>
                            <p id='firstBar'>55%</p>
                        </div>

                        <span id='let' className="w-[55%] h-1 progressBarStrategyTarget scale-x-0 bg-orange absolute -bottom-3 rounded ease-out duration-1000"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>

                    <div className="relative w-3/4 mb-12 max-xl:w-full">
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>FINANCIAL SERVICE</p>
                            <p>75%</p>
                        </div>

                        <span className="w-[75%] h-1 progressBarStrategyTarget scale-x-0 bg-orange absolute -bottom-3 rounded"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>

                    <div className="relative w-3/4 mb-10 max-xl:w-full max-xl:mb-44">
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>CONSALTING</p>
                            <p>68%</p>
                        </div>

                        <span className="w-[68%] h-1 progressBarStrategyTarget scale-x-0 bg-orange absolute -bottom-3 rounded"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>
                </div>

                <div className='relative'>
                    <Image src={man} alt='discussion entre deux personnes' className='relative z-10' />
                    <Image src={dot} alt='points de décoration' className='absolute top-0' />
                    <div className="bg-[#f5f5f5] w-[467px] py-1 border-l-orange border-l-[3px] rounded-br-lg absolute right-5 bottom-0 z-20 max-xl:w-full">
                        <Image src={quote} alt='icone de guillemet' className="w-20 absolute -top-3 right-0" />
                        <p className="relative font-Amiri text-3xl text-slightGrey leading-tight py-7 pl-9">Custom Consulting Solutions since 2002.</p>
                    </div>
                </div>
            </div>
            
            <div className='flex justify-center mt-12'>
                <div className="bg-solanaBk bg-no-repeat bg-center rounded-md py-12 px-14 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                    <Image src={solana} alt="logo de l'entreprise solana" className='m-auto opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
                </div>

                <div className="bg-honeyBk bg-no-repeat bg-center rounded-md py-12 px-20 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                    <Image src={honey} alt="logo de l'entreprise honey hosting" className='m-auto relative top-1 opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
                </div>

                <div className="bg-oktaBk bg-no-repeat bg-center rounded-md py-12 px-16 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                    <Image src={okta} alt="logo de l'entreprise okta" className='m-auto relative top-1 opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
                </div>

                <div className="bg-dynamicBk bg-no-repeat bg-center rounded-lg py-12 px-20 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] ease-in duration-300 hover:cursor-pointer">
                    <Image src={dynamic} alt="logo de l'entreprise dynamix" className='m-auto relative top-1 opacity-0 group-hover:opacity-100 ease-in duration-300' />
                </div>
            </div>
        </section>
    )
}