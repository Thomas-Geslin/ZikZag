import { useEffect } from "react";
import Image from "next/image"

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

import square from "../../public/assets/Home06/vision_square.png"
import line from "../../public/assets/Home06/vision_line.png"

import payment from '../../public/assets/Home02/offer_icon_payment_color.png'
import money from '../../public/assets/Home02/offer_icon_money_color.png'
import balance from '../../public/assets/Home02/offer_icon_balance_color.png'
import light from '../../public/assets/Home02/benefits_icon_light.png'

import dynamic from '../../public/assets/Home02/logo_dynamic_color.png'
import okta from '../../public/assets/Home02/logo_okta_color.png'
import max from '../../public/assets/Home02/logo_max_color.png'
import solana from '../../public/assets/Home02/logo_solana_color.png'
import deters from '../../public/assets/Home02/logo_deters_color.png'
import honey from '../../public/assets/Home02/logo_honey_color.png'


export default function VisionHome06() {
    const { color, secondaryColor } = useContext(ColorContext);


    useEffect(() => {
        // Intersection Obeserver for fixed progress-bar Strategy
        function autoIncrementBar(limit, target) {
            let numberLimit = limit;
            let numberInitial = 0;
            let timer = 1.5;
            let interval = Math.ceil((timer * 1000) / numberLimit );
            const numberTarget = document.getElementById(target)

            function countdown() {
                numberTarget.innerHTML = ++numberInitial + '%';
                if (numberInitial < numberLimit) {
                    setTimeout(countdown, interval);
                }
            }
            setTimeout(countdown, interval);
        }

        const target = document.querySelectorAll('.progressBarStrategyTarget');
        const viewport = document.getElementById('progressBarStrategy');
    
        const options = {
          root: null,
          treshold: 0.5
        }
    
        const observer = new IntersectionObserver(function (entries) {
          entries.forEach((entry) => {
              if(entry.isIntersecting) {
                autoIncrementBar(55, 'firstBar');
                autoIncrementBar(75, 'secondBar');
                autoIncrementBar(68, 'thirdBar');
                for(entry of target) {
                entry.classList.add('strategy-bar-animation')
                }
              };
          })
          
        }, options);
        observer.observe(viewport);
    }, [])

    return(
        <section id='goTopViewport' className='mb-20 mt-40 relative z-10'>
            <div className='flex justify-center max-xl:flex-col max-xl:items-center'>
                <div className='grid grid-cols-2 w-1/3 min-w-[570px] relative mr-32 ml-80 max-w-[600px] 850:ml-0 850:mr-0 850:min-w-[280px] 850:grid-cols-1 850:w-[90%]'>
                    <Image src={square} alt='carré de décoration' className='absolute top-28 animation-vision-Home06 850:hidden' />
                    <Image src={line} alt='ligne de décoration' className='absolute top-28 -left-40 850:hidden' />
                    
                    <div className={`max-w-[270px] bg-white text-left relative mx-4 shadow-[6px_5px_30px_0px_rgb(0,0,0,0.25)] hover:shadow-none rounded-lg pl-9 group hover-bg-${secondaryColor} ease-in-out duration-300 850:justify-self-center`}>
                        <div className='w-16 rounded-full mr-6 mt-8'><Image src={payment} alt='icone de paiement'className='w-10' /></div>
                        <p className='font-Amiri text-3xl mt-6 group-hover:text-white ease-in-out duration-300'>Partnership System</p>
                        <p className='text-greyText mt-3 w-10/12 leading-7 group-hover:text-white ease-in-out duration-300'>Strategy experience and analytical expertise combine</p>
                        <div className='pb-8 flex items-center group -ml-1 mt-6 relative max-xl:mb-10'><span className={`w-10 h-0.5 bg-${color} absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500`}></span><span className={`w-3 h-0.5 top-[9px] left-[28px] bg-${color} absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><span className={`w-3 h-0.5 bg-${color} absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><p className={`text-sm text-${color} font-semibold pl-1 group-hover:translate-x-10 ease-in-out duration-500`}>READ MORE</p></div>
                    </div>

                    <div className={`max-w-[270px] relative top-6 bg-white text-left relative mx-4 shadow-[6px_5px_30px_0px_rgb(0,0,0,0.25)] hover:shadow-none rounded-lg pl-9 group hover-bg-${secondaryColor} ease-in-out duration-300 850:justify-self-center`}>
                        <div className='w-16 rounded-full mr-6 mt-8'><Image src={money} alt='icone de paiement'className='w-10' /></div>
                        <p className='font-Amiri text-3xl mt-6 group-hover:text-white ease-in-out duration-300'>Partnership System</p>
                        <p className='text-greyText mt-3 w-10/12 leading-7 group-hover:text-white ease-in-out duration-300'>Strategy experience and analytical expertise combine</p>
                        <div className='pb-8 flex items-center group -ml-1 mt-6 relative max-xl:mb-10'><span className={`w-10 h-0.5 bg-${color} absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500`}></span><span className={`w-3 h-0.5 top-[9px] left-[28px] bg-${color} absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><span className={`w-3 h-0.5 bg-${color} absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><p className={`text-sm text-${color} font-semibold pl-1 group-hover:translate-x-10 ease-in-out duration-500`}>READ MORE</p></div>
                    </div>

                    <div className={`max-w-[270px] bg-white relative top-8 text-left relative mx-4 shadow-[6px_5px_30px_0px_rgb(0,0,0,0.25)] hover:shadow-none rounded-lg pl-9 group hover-bg-${secondaryColor} ease-in-out duration-300 850:justify-self-center`}>
                        <div className='w-16 rounded-full mr-6 mt-8'><Image src={balance} alt='icone de paiement'className='w-10' /></div>
                        <p className='font-Amiri text-3xl mt-6 group-hover:text-white ease-in-out duration-300'>Partnership System</p>
                        <p className='text-greyText mt-3 w-10/12 leading-7 group-hover:text-white ease-in-out duration-300'>Strategy experience and analytical expertise combine</p>
                        <div className='pb-8 flex items-center group -ml-1 mt-6 relative max-xl:mb-10'><span className={`w-10 h-0.5 bg-${color} absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500`}></span><span className={`w-3 h-0.5 top-[9px] left-[28px] bg-${color} absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><span className={`w-3 h-0.5 bg-${color} absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><p className={`text-sm text-${color} font-semibold pl-1 group-hover:translate-x-10 ease-in-out duration-500`}>READ MORE</p></div>
                    </div>

                    <div className={`max-w-[270px] bg-white relative top-14 text-left relative mx-4 shadow-[6px_5px_30px_0px_rgb(0,0,0,0.25)] hover:shadow-none rounded-lg pl-9 group hover-bg-${secondaryColor} ease-in-out duration-300 850:justify-self-center`}>
                        <div className='w-16 rounded-full mr-6 mt-8'><Image src={light} alt='icone de paiement'className='w-10' /></div>
                        <p className='font-Amiri text-3xl mt-6 group-hover:text-white ease-in-out duration-300'>Partnership System</p>
                        <p className='text-greyText mt-3 w-10/12 leading-7 group-hover:text-white ease-in-out duration-300'>Strategy experience and analytical expertise combine</p>
                        <div className='pb-8 flex items-center group -ml-1 mt-6 relative max-xl:mb-10'><span className={`w-10 h-0.5 bg-${color} absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500`}></span><span className={`w-3 h-0.5 top-[9px] left-[28px] bg-${color} absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><span className={`w-3 h-0.5 bg-${color} absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right`}></span><p className={`text-sm text-${color} font-semibold pl-1 group-hover:translate-x-10 ease-in-out duration-500`}>READ MORE</p></div>
                    </div>
                </div>

                <div className='w-[40%] relative top-32 max-xl:w-[90%]'>
                    <h2 className={`text-${color} font-semibold mb-3 relative`}>OUR VISION<span className={`absolute top-5 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
                    <h3 className="font-Amiri text-5xl text-slightGrey leading-tight mb-4 w-[59%] max-xl:w-full 650:text-4xl">Strategy is at the Heart of What We Do</h3>
                    <p className="text-greyText text-lg w-[63%] leading-8 mb-8 max-xl:w-full">Our team applies its wide-ranging experience to determining the strategies that will best enable our clients to achieve clear, long-term objectives.</p>

                    <div className="relative w-2/3 mb-12 max-xl:w-full" id='progressBarStrategy'>
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>DIGITAL STRATEGY</p>
                            <p id='firstBar'>0%</p>
                        </div>

                        <span id='let' className="w-[55%] h-1 progressBarStrategyTarget scale-x-0 bg-orange absolute -bottom-3 rounded ease-out duration-1000"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>

                    <div className="relative w-2/3 mb-12 max-xl:w-full">
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>FINANCIAL SERVICE</p>
                            <p id='secondBar'>0%</p>
                        </div>

                        <span className="w-[75%] h-1 progressBarStrategyTarget scale-x-0 bg-orange absolute -bottom-3 rounded"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>

                    <div className="relative w-2/3 mb-10 max-xl:w-full max-xl:mb-44">
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>CONSALTING</p>
                            <p id='thirdBar'>0%</p>
                        </div>

                        <span className="w-[68%] h-1 progressBarStrategyTarget scale-x-0 bg-orange absolute -bottom-3 rounded"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-28 max-xl:grid 850-xl:grid-cols-3 650-850:grid-cols-2 850:mt-14'>
                <div className="bg-dynamicBk mx-6 bg-no-repeat bg-center rounded-lg py-16 px-14 group hover:cursor-pointer">
                    <Image src={dynamic} alt="logo de l'entreprise dynamix" className='relative top-1 m-auto opacity-0 group-hover:opacity-100 ease-in duration-300' />
                </div>

                <div className="bg-oktaBk mx-6 bg-no-repeat bg-center rounded-md py-16 px-10 group  hover:cursor-pointer">
                    <Image src={okta} alt="logo de l'entreprise okta" className='relative top-1 m-auto opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
                </div>

                <div className="bg-maxBk mx-6 bg-no-repeat bg-center rounded-md py-16 px-10 group e hover:cursor-pointer">
                    <Image src={max} alt="logo de l'entreprise max papers" className='relative top-1 m-auto opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
                </div>

                <div className="bg-solanaBk mx-6 bg-no-repeat bg-center rounded-md py-16 px-10 group  hover:cursor-pointer">
                    <Image src={solana} alt="logo de l'entreprise solana" className='m-auto opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
                </div>

                <div className="bg-detersBk mx-6 bg-no-repeat bg-center rounded-md py-16 px-14 group  hover:cursor-pointer">
                    <Image src={deters} alt="logo de l'entreprise deters" className='relative top-1 m-auto opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
                </div>

                <div className="bg-honeyBk mx-6 bg-no-repeat bg-center rounded-md py-16 px-10 group  hover:cursor-pointer">
                    <Image src={honey} alt="logo de l'entreprise honey hosting" className='relative top-1 m-auto opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
                </div>
            </div>
        </section>
    )
}