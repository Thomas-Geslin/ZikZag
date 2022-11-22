import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

import { useContext, useEffect } from "react";
import { ColorContext } from "../context/colorContext";

import HeaderHome04 from '../components/Home04/HeaderHome04'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import WidgetTheme from '../components/WidgetTheme'
import WidgetColor from '../components/WidgetColor'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import LandingHome09 from '../components/Home09/Landing'
import StrategyHome01 from '../components/Home01/05Strategy'
import AboutLanding from '../components/PAGES/About/02AboutLanding';
import Philosophy from '../components/Home02/05Philosophy';
import Division from '../components/Home02/02SlideDivison';
import Benefits from '../components/Home02/03Benefits';
import BlogHome01 from '../components/Home01/08Blog'

import quote from '../public/assets/PAGES/About/about_quote.png'
import man from '../public/assets/Home01/about_man.png'
import line from '../public/assets/Home01/about_line.png'
import twitter from '../public/assets/Home01/about_icon_twitter.png'
import facebook from '../public/assets/Home01/about_icon_facebook.png'
import pinterest from '../public/assets/Home01/about_icon_pinterest.png'

import line01 from '../public/assets/Home02/mouseover_line_01.png'
import line02 from '../public/assets/Home02/mouseover_line_02.png'
import line03 from '../public/assets/Home02/mouseover_line_03.png'
import line04 from '../public/assets/Home02/mouseover_line_04.png'
import line05 from '../public/assets/Home02/mouseover_line_05.png'
import line06 from '../public/assets/Home02/mouseover_line_06.png'
import rocket from '../public/assets/Home02/mouseover_rocket.png'
import standing from "../public/assets/Home02/mouseover_standing.png"
import sit from "../public/assets/Home02/mouseover_sit.png"

import logo from "../public/assets/Home02/logo_consultancy.png"
import orangeSquare from '../public/assets/Home02/consultancy_widget_background.png'

import people from '../public/assets/PAGES/About/strategy_people.png'
import graphic from '../public/assets/PAGES/About/strategy_graphic.png'
import lineStrategy01 from '../public/assets/PAGES/About/strategy_line_01.png'
import lineStrategy02 from '../public/assets/PAGES/About/strategy_line_02.png'
import lineStrategy03 from '../public/assets/PAGES/About/strategy_line_03.png'
import lineStrategy04 from '../public/assets/PAGES/About/strategy_line_04.png'

import dynamic from '../public/assets/Home02/logo_dynamic_color.png'
import okta from '../public/assets/Home02/logo_okta_color.png'
import max from '../public/assets/Home02/logo_max_color.png'
import solana from '../public/assets/Home02/logo_solana_color.png'
import deters from '../public/assets/Home02/logo_deters_color.png'
import honey from '../public/assets/Home02/logo_honey_color.png'
import dynamicGrey from '../public/assets/Home02/logo_dynamic_grey.png'
import oktaGrey from '../public/assets/Home02/logo_okta_grey.png'
import maxGrey from '../public/assets/Home02/logo_max_grey.png'
import solanaGrey from '../public/assets/Home02/logo_solana_grey.png'
import detersGrey from '../public/assets/Home02/logo_deters_grey.png'
import honeyGrey from '../public/assets/Home02/logo_honey_grey.png'

export default function Home04() {
    const { color } = useContext(ColorContext);

    useEffect(() => {
        // Intersection Obeserver for fixed progress-bar
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

        const target = document.querySelectorAll('.progressBarTarget');
        const viewport = document.getElementById('progressBar');
    
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



        // Intersection Obeserver for fixed progress-bar Strategy
        const targetStrategy = document.querySelectorAll('.progressBarStrategyTarget');
        const viewportStrategy = document.getElementById('progressBarStrategy');

        const target2 = document.getElementById('strategyAbout01');
        const target3 = document.getElementById('strategyAbout02');
        const target4 = document.getElementById('strategyAbout03');
        const target5 = document.getElementById('strategyAbout04');
        const target6 = document.getElementById('strategyAbout05');
        const target7 = document.getElementById('strategyAbout06');
    
        const optionsStrategy = {
          root: null,
          treshold: 0.5
        }
    
        const observerStrategy = new IntersectionObserver(function (entries) {
          entries.forEach((entry) => {
              if(entry.isIntersecting) {
                autoIncrementBar(55, 'fourthBar');
                autoIncrementBar(75, 'fifthBar');
                autoIncrementBar(68, 'sixthBar');
                for(entry of targetStrategy) {
                entry.classList.add('strategy-bar-animation')
                }
                target2.classList.add('revealStrategyAbout-1');
                target3.classList.add('revealStrategyAbout-2');
                target4.classList.add('revealStrategyAbout-3');
                target5.classList.add('revealStrategyAbout-4');
                target6.classList.add('revealStrategyAbout-5');
                target7.classList.add('revealStrategyAbout-6');
              };
          })
          
        }, optionsStrategy);
        observerStrategy.observe(viewportStrategy);
    }, [])


    return(
        <div className='font-NunitoSans'>
            <Head>
                <title>ZikZag | Home 09</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderHome04 />
            
            <main>
                <LandingHome09 />

                <div className='mt-10'></div>

                <StrategyHome01 />

                <section id='goTopViewport' className='flex bg-white rounded-b-xl justify-center mr-40 1050:flex-col'>
                    <div className='relative 1050-xl:mt-40'>
                        <Image src={man} alt="dessin d'une personne les bras levé animation" className='relative top-10 left-32' />
                        <Image src={line} alt="ligne de décoration" className='absolute top-10 left-28 lineOfferAnimation' />
                        <Image src={twitter} alt="icone de twitter" className='absolute top-10 left-28 twitterOfferAnimation' />
                        <Image src={facebook} alt="icone de facebook" className='absolute top-14 left-28 facebookOfferAnimation' />
                        <Image src={pinterest} alt="icone de pinterest" className='absolute top-20 left-28 pinterestOfferAnimation' />
                    </div>

                    <div className="w-5/12 pt-32 pl-32 pb-48 max-xl:w-full max-xl:mx-10 max-xl:mt-10 1050:pl-[10%] 1050:pb-10">
                        <h2 className={`text-${color} font-bold mb-3 relative`}>ABOUT ZIKZAG<span className={`absolute top-5 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
                        <h3 className="font-Amiri text-5xl text-slightGrey leading-tight mb-4 max-xl:w-full 650-850:text-3xl 650:text-2xl">We Shape the Perfect Solution for Company</h3>
                        <p className="text-greyText w-10/12 text-lg leading-7 mb-8 max-xl:w-full 650-850:text-base">We seamlessly merge two key components – economics and information technology. This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.</p>

                        <div className={`bg-[#f5f5f5] w-10/12 border-l-${color} border-l-[3px] rounded-br-lg relative max-xl:w-full`}>
                            <p className="font-Amiri text-3xl text-slightGrey w-10/12 leading-tight py-7 pl-9 850:text-lg">Best Counsalting Solutions since 2002.</p>
                            <Image src={quote} alt='icone de guillemet' className="w-20 absolute -top-3 right-0" />
                        </div>
                    </div>
                </section>


                <section className='flex relative justify-center pt-40 max-xl:flex-col overflow-hidden 850:-mb-32'>
                    <div className='relative max-xl:left-[10%]'>
                        <Image src={sit} alt='dessin de personne assise' className='w-72 relative top-20 850-xl:left-60 850:w-[180px] 850:left-48' /> 
                        <Image src={standing} alt='dessin de personne assise' className='w-40 absolute right-60 -top-16 animation-vision-Home01-top 850-xl:left-20 850:w-[100px] 850:left-20 850:top-0' /> 
                        <Image src={rocket} alt='dessin de personne assise' className='w-20 absolute top-28 right-6 animation-vision-Home01-top-2 850-xl:left-96 850:w-[50px] 850:left-72' /> 
                        <Image src={line01} alt='dessin de personne assise' className='w-72 absolute top-4 left-40 animation-vision-Home01-top-3 850-xl:left-96 850:w-[170px] 850:left-60' /> 
                        <Image src={line02} alt='dessin de personne assise' className='w-24 absolute -top-20 right-[420px] animation-vision-Home01-left 850-xl:left-0 850:w-[70px] 850:left-0 850:top-0' /> 
                        <Image src={line03} alt='dessin de personne assise' className='w-40 absolute -top-10 right-0 animation-vision-Home01-left 850-xl:left-96 850:w-[100px] 850:left-60 850:-top-6' /> 
                        <Image src={line04} alt='dessin de personne assise' className='w-10 absolute top-72 -right-36 animation-vision-Home01-left 850-xl:left-[610px] 850:w-[20px] 850:left-96 850:top-52' /> 
                        <Image src={line05} alt='dessin de personne assise' className='w-8 absolute top-8 right-[460px] animation-vision-Home01-left 850-xl:left-0 850:w-[35px] 850:left-0 850:top-14' /> 
                        <Image src={line06} alt='dessin de personne assise' className='w-16 absolute top-[270px] right-[450px] animation-vision-Home01-left 850-xl:left-0 850:w-[40px] 850:left-3' /> 
                    </div>

                    <div className="w-1/3 max-xl:w-10/12 relative left-72 max-xl:left-[10%] max-xl:top-32">
                        <h2 className={`text-${color} font-bold mb-3 relative`}>OUR VISION<span className={`absolute top-5 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
                        <h3 className="font-Amiri text-5xl text-slightGrey leading-tight mb-4 w-[81%] max-xl:w-full 650:text-4xl">Strategy is at the Heart of What We Do</h3>
                        <p className="text-greyText text-lg  w-10/12 leading-8 mb-8 max-xl:w-full">Our team applies its wide-ranging experience to determining the strategies that will best enable our clients to achieve clear, long-term objectives.</p>

                        <div className="relative w-10/12 mb-12 max-xl:w-full" id='progressBar'>
                            <div className="flex justify-between text-slightGrey font-bold text-sm">
                                <p>DIGITAL STRATEGY</p>
                                <p id='firstBar'>55%</p>
                            </div>

                            <span id='let' className="w-[55%] h-1 progressBarTarget scale-x-0 bg-orange absolute -bottom-3 rounded ease-out duration-1000"></span>
                            <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                        </div>

                        <div className="relative  w-10/12 mb-12 max-xl:w-full">
                            <div className="flex justify-between text-slightGrey font-bold text-sm">
                                <p>FINANCIAL SERVICE</p>
                                <p id='secondBar'>75%</p>
                            </div>

                            <span className="w-[75%] h-1 progressBarTarget scale-x-0 bg-orange absolute -bottom-3 rounded"></span>
                            <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                        </div>

                        <div className="relative  w-10/12 mb-10 max-xl:w-full max-xl:mb-44">
                            <div className="flex justify-between text-slightGrey font-bold text-sm">
                                <p>CONSALTING</p>
                                <p id='thirdBar'>68%</p>
                            </div>

                            <span className="w-[68%] h-1 progressBarTarget scale-x-0 bg-orange absolute -bottom-3 rounded"></span>
                            <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                        </div>
                    </div>
                </section>


                <section className='bg-transparent relative w-10/12 m-auto rounded-xl relative text-center max-xl:flex max-xl:flex-col-reverse max-xl:items-center max-xl:w-full max-xl:h-[800px] max-xl:mb-60'>
                    <div className='bg-darkBlueBackground parallaxConsultancy-Home02 rounded-xl max-xl:w-full max-xl:h-[800px]'></div>
                    
                    <div className='absolute -right-20 -top-7 max-xl:relative max-xl:right-0 max-xl:top-[650px]'>
                        <Image src={orangeSquare} alt='carré orange' className='w-80' />
                        <div className='text-white absolute top-0 right-12 flex flex-col justify-center items-center'>
                            <div className='p-4 w-14 rounded-full bg-white'><FontAwesomeIcon icon={faPhoneVolume} className={`relative left-px bottom-px w-6 -rotate-45 text-${color}`} /></div>
                            <p className='font-Amiri text-3xl my-4'>+1 800 123 456 789</p>
                            <p className='font-semibold'>OR CALL US 24/7</p>
                        </div>
                    </div>

                    <div className='mb-20 absolute left-[50%] translate-x-[-50%] top-0 max-xl:top-60 max-xl:w-full'>
                        <Image src={logo} alt='logo de entreprise' className='m-auto pt-20 mb-10' />
                        <p className='font-Amiri text-white text-5xl mb-3 max-xl:w-full 850:text-3xl'>Get a Free Counsultancy Right Now!</p>
                        <p className='text-[#dddfe1] text-[20px] px-7 850:text-base'>We help you see the world differently, discover opportunities you may never have imagined.</p>
                        <button className={`text-white font-semibold bg-${color} rounded px-8 py-4 border border-solid border-${color} hover:bg-transparent ease-in duration-300 mt-12 mb-16 850:px-6 850:py-3 850:text-base`}>GET IN TOUCH</button>
                    </div>
                </section>


                <AboutLanding />


                <section className="flex justify-center mt-14 mx-12 max-xl:flex-col overflow-hidden">
                    <div className="w-1/3 max-xl:w-full">
                        <h2 className={`text-${color} font-bold mb-3 relative`}>OUR STRATEGY<span className={`absolute top-5 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
                        <h3 className="font-Amiri text-5xl text-slightGrey leading-tight mb-4 w-[81%] max-xl:w-full 650:text-4xl">Strategy is at the Heart of What We Do</h3>
                        <p className="text-greyText text-lg w-2/3 leading-8 mb-8 max-xl:w-full">Our team applies its wide-ranging experience to determining the strategies that will best enable our clients to achieve clear, long-term objectives.</p>

                        <div className="relative w-2/3 mb-12 max-xl:w-full" id='progressBarStrategy'>
                            <div className="flex justify-between text-slightGrey font-bold text-sm">
                                <p>DIGITAL STRATEGY</p>
                                <p id='fourthBar'>0%</p>
                            </div>

                            <span id='let' className="w-[55%] h-1 progressBarStrategyTarget scale-x-0 bg-orange absolute -bottom-3 rounded ease-out duration-1000"></span>
                            <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                        </div>

                        <div className="relative w-2/3 mb-12 max-xl:w-full">
                            <div className="flex justify-between text-slightGrey font-bold text-sm">
                                <p>FINANCIAL SERVICE</p>
                                <p id='fifthBar'>0%</p>
                            </div>

                            <span className="w-[75%] h-1 progressBarStrategyTarget scale-x-0 bg-orange absolute -bottom-3 rounded"></span>
                            <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                        </div>

                        <div className="relative w-2/3 mb-10 max-xl:w-full max-xl:mb-44">
                            <div className="flex justify-between text-slightGrey font-bold text-sm">
                                <p>CONSALTING</p>
                                <p id='sixthBar'>0%</p>
                            </div>

                            <span className="w-[68%] h-1 progressBarStrategyTarget scale-x-0 bg-orange absolute -bottom-3 rounded"></span>
                            <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                        </div>
                    </div>

                    <div className="relative -ml-12 max-xl:pl-20">
                        <Image id='strategyAbout01' src={people} alt='dessin de personne ayant une conversation' className="opacity-0" />
                        <Image id='strategyAbout02' src={graphic} alt='dessin de graphique' className="opacity-0 absolute bottom-0" />
                        <Image id='strategyAbout03' src={lineStrategy01} alt='ligne de décoration' className="opacity-0 absolute bottom-0 right-0" />
                        <Image id='strategyAbout04' src={lineStrategy02} alt='ligne de décoration' className="opacity-0 absolute bottom-0" />
                        <Image id='strategyAbout05' src={lineStrategy03} alt='ligne de décoration' className="opacity-0 absolute bottom-0 right-0" />
                        <Image id='strategyAbout06' src={lineStrategy04} alt='ligne de décoration' className="opacity-0 absolute bottom-0" />
                    </div>
                </section>


                <div className='pb-52'></div>

                <Philosophy />

                <h2 className={`text-center text-${color} font-bold mb-4 pt-32 relative w-40 m-auto max-xl:pt-36 850:mt-12 max-xl:mt-0`}><span className={`absolute bottom-1 left-3 bg-${color} h-0.5 w-2`}></span>OUR STRATEGY<span className={`absolute bottom-1 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
                <h3 className='text-center font-Amiri text-slightGrey text-6xl mb-5 -mb-10'>Main Principles</h3>

                <Division />

                <Benefits />

                <h2 className={`text-center text-${color} font-bold mb-4 pt-10 relative w-40 m-auto max-xl:pt-20 max-xl:mt-0`}><span className={`absolute bottom-1 left-3 bg-${color} h-0.5 w-2`}></span>OUR STRATEGY<span className={`absolute bottom-1 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
                <h3 className='text-center font-Amiri text-slightGrey text-6xl mb-5'>Main Principles</h3>

                <div className='px-12 pb-40'>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={5}
                        loop
                        autoplay={{
                            delay: 3500
                        }}
                        pagination
                        speed={1000}
                    >
                        <SwiperSlide className="w-40 min-w-[360px] rounded-lg py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] ease-in duration-300 hover:cursor-pointer">
                            <div className='h-14 overflow-hidden'>
                                <Image src={dynamic} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                                <Image src={dynamicGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="w-40 min-w-[360px] rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                            <div className='h-14 overflow-hidden'>
                                <Image src={okta} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                                <Image src={oktaGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="w-40 min-w-[360px] rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                            <div className='h-14 overflow-hidden'>
                                <Image src={max} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                                <Image src={maxGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="w-40 min-w-[360px] rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                            <div className='h-16 overflow-hidden'>
                                <Image src={solana} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-16 group-hover:translate-y-0 ease-in-out duration-300' />
                                <Image src={solanaGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-2 ease-in-out duration-300' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="w-40 min-w-[360px] rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                            <div className='h-14 overflow-hidden'>
                                <Image src={deters} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                                <Image src={detersGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="w-40 min-w-[360px] rounded-md py-14 px-10 mt-5 mb-10 group hover:shadow-[11px_10px_38px_0px_rgb(0,0,0,0.10)] hover:cursor-pointer ease-in-out duration-300">
                            <div className='h-14 overflow-hidden'>
                                <Image src={honey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-14 group-hover:translate-y-0 ease-in-out duration-300' />
                                <Image src={honeyGrey} alt="logo de l'entreprise dynamix" className='m-auto -translate-y-12 group-hover:translate-y-2 ease-in-out duration-300' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <BlogHome01 />
            </main>

            <WidgetColor />

            <WidgetTheme />

            <BackToTop />

            <Footer />
        </div>
    )
}