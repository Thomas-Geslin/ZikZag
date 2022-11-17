import Image from 'next/image'
import { useEffect } from 'react';

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import square from '../../public/assets/Home01/vision_square.png'

import line01 from '../../public/assets/Home02/mouseover_line_01.png'
import line02 from '../../public/assets/Home02/mouseover_line_02.png'
import line03 from '../../public/assets/Home02/mouseover_line_03.png'
import line04 from '../../public/assets/Home02/mouseover_line_04.png'
import line05 from '../../public/assets/Home02/mouseover_line_05.png'
import line06 from '../../public/assets/Home02/mouseover_line_06.png'
import rocket from '../../public/assets/Home02/mouseover_rocket.png'
import standing from "../../public/assets/Home02/mouseover_standing.png"
import sit from "../../public/assets/Home02/mouseover_sit.png"

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


export default function VisionHome01() {
    const { color, secondaryColor } = useContext(ColorContext);


    useEffect(() => {
        // Function for auto-increment counter on scroll
        function autoIncrement(limit, target, detail) {
            let numberLimit = limit;
            let numberInitial = 0;
            let timer = 2.5;
            let interval = Math.ceil((timer * 1000) / numberLimit - detail);
            const numberTarget = document.getElementById(target)

            function countdown() {
                numberTarget.innerHTML = ++numberInitial;
                if (numberInitial < numberLimit) {
                    setTimeout(countdown, interval);
                }
            }
            setTimeout(countdown, interval);
        }
        const viewportNumber = document.getElementById('numberViewport');
    
        const optionsNumber = {
          root: null,
          treshold: 0.5
        }
    
        const observerNumber = new IntersectionObserver(function (entries) {
          entries.forEach((entry) => {
              if(entry.isIntersecting) {
                autoIncrement(15, 'numberTarget1', 0);
                autoIncrement(250, 'numberTarget2', 3);
                autoIncrement(36, 'numberTarget3', 0);
                autoIncrement(17, 'numberTarget4', 0);
              };
          })
          
        }, optionsNumber);
        observerNumber.observe(viewportNumber);



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
        <section id='numberViewport' className='mt-32 mb-32 items-center '>
            <div className='relative mx-[19%]'>
                <div className={`parallaxDivision-Home01 rounded-lg bg-${secondaryColor} z-10`}></div>

                <div className='flex text-center py-16 absolute left-[50%] translate-x-[-50%] top-0 m-auto'>
                    <div className='relative ml-20'>
                        <p id='numberTarget1' className={`font-Amiri text-7xl text-${color} tracking-tighter`}>0</p>
                        <p className='text-white font-bold text-sm w-2/3 m-auto'>YEARS OF EXPERIENCE</p>
                        <span className='absolute text-3xl text-greyText font-light -top-5 right-5'>+</span>
                    </div>

                    <div className='relative mx-36'>
                        <p id='numberTarget2' className={`font-Amiri text-7xl text-${color} tracking-tighter`}>250</p>
                        <p className='text-white font-bold text-sm w-2/3 m-auto'>TRUSTED CLIENTS</p>
                        <span className='absolute text-3xl text-greyText font-light -top-5 -right-3'>+</span>
                    </div>

                    <div className='relative mr-36'>
                        <p id='numberTarget3' className={`font-Amiri text-7xl text-${color} tracking-tighter`}>36</p>
                        <p className='text-white font-bold text-sm w-2/3 m-auto'>VISITED CONFERENCES</p>
                        <span className='absolute text-3xl text-greyText font-light -top-5 right-5'>+</span>
                    </div>

                    <div className='relative mr-20'>
                        <p id='numberTarget4' className={`font-Amiri text-7xl text-${color} tracking-tighter`}>17</p>
                        <p className='text-white font-bold text-sm w-2/3 m-auto'>MASTER CERTIFICATION</p>
                        <span className='absolute text-3xl text-greyText font-light -top-5 right-5'>+</span>
                    </div>
                </div>

                <Image src={square} alt='carré de decoration' className='absolute -z-10 -bottom-12 -right-24' />
            </div>
            

            <div className='flex justify-center mt-40'>
                <div className='relative'>
                    <Image src={sit} alt='dessin de personne assise' className='w-72 relative top-20 -right-8' /> 
                    <Image src={standing} alt='dessin de personne assise' className='w-40 absolute right-60 -top-16 animation-vision-Home01-top' /> 
                    <Image src={rocket} alt='dessin de personne assise' className='w-20 absolute top-28 right-6 animation-vision-Home01-top-2' /> 
                    <Image src={line01} alt='dessin de personne assise' className='w-72 absolute top-4 left-40 animation-vision-Home01-top-3' /> 
                    <Image src={line02} alt='dessin de personne assise' className='w-24 absolute -top-20 right-[420px] animation-vision-Home01-left' /> 
                    <Image src={line03} alt='dessin de personne assise' className='w-40 absolute -top-10 right-0 animation-vision-Home01-left' /> 
                    <Image src={line04} alt='dessin de personne assise' className='w-10 absolute top-72 -right-36 animation-vision-Home01-left' /> 
                    <Image src={line05} alt='dessin de personne assise' className='w-8 absolute top-8 right-[460px] animation-vision-Home01-left' /> 
                    <Image src={line06} alt='dessin de personne assise' className='w-16 absolute top-[270px] right-[450px] animation-vision-Home01-left' /> 
                </div>

                <div className="w-1/3 max-xl:w-full relative left-72 mb-20">
                    <h2 className={`text-${color} font-bold mb-3 relative`}>OUR VISION<span className={`absolute top-5 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
                    <h3 className="font-Amiri text-5xl text-slightGrey leading-tight mb-4 w-[81%] max-xl:w-full 650:text-4xl">Strategy is at the Heart of What We Do</h3>
                    <p className="text-greyText text-lg  w-10/12 leading-8 mb-8 max-xl:w-full">Our team applies its wide-ranging experience to determining the strategies that will best enable our clients to achieve clear, long-term objectives.</p>

                    <div className="relative w-10/12 mb-12 max-xl:w-full" id='progressBarStrategy'>
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>DIGITAL STRATEGY</p>
                            <p id='firstBar'>55%</p>
                        </div>

                        <span id='let' className="w-[55%] h-1 progressBarStrategyTarget scale-x-0 bg-orange absolute -bottom-3 rounded ease-out duration-1000"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>

                    <div className="relative  w-10/12 mb-12 max-xl:w-full">
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>FINANCIAL SERVICE</p>
                            <p id='secondBar'>75%</p>
                        </div>

                        <span className="w-[75%] h-1 progressBarStrategyTarget scale-x-0 bg-orange absolute -bottom-3 rounded"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>

                    <div className="relative  w-10/12 mb-10 max-xl:w-full max-xl:mb-44">
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>CONSALTING</p>
                            <p id='thirdBar'>68%</p>
                        </div>

                        <span className="w-[68%] h-1 progressBarStrategyTarget scale-x-0 bg-orange absolute -bottom-3 rounded"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>
                </div>
            </div>

            <div className='px-12'>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={6}
                    loop
                    autoplay={{
                        delay: 3500
                    }}
                    pagination
                    speed={1000}
                >
                    <SwiperSlide className="w-40 rounded-lg py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] ease-in duration-300 hover:cursor-pointer">
                        <div className='h-14 overflow-hidden'>
                            <Image src={dynamic} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={dynamicGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-14 overflow-hidden'>
                            <Image src={okta} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={oktaGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-14 overflow-hidden'>
                            <Image src={max} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={maxGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-16 overflow-hidden'>
                            <Image src={solana} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-16 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={solanaGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-14 overflow-hidden'>
                            <Image src={deters} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={detersGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="w-40 rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                        <div className='h-14 overflow-hidden'>
                            <Image src={honey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                            <Image src={honeyGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            
        </section>
    )
}