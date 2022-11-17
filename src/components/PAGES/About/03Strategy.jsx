import Image from "next/image"
import { useEffect } from "react";

import cardIcon02 from '../../../public/assets/PAGES/About/card_02_icon.png'
import people from '../../../public/assets/PAGES/About/strategy_people.png'
import graphic from '../../../public/assets/PAGES/About/strategy_graphic.png'
import line01 from '../../../public/assets/PAGES/About/strategy_line_01.png'
import line02 from '../../../public/assets/PAGES/About/strategy_line_02.png'
import line03 from '../../../public/assets/PAGES/About/strategy_line_03.png'
import line04 from '../../../public/assets/PAGES/About/strategy_line_04.png'


export default function Strategy() {
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

        const target2 = document.getElementById('strategyAbout01');
        const target3 = document.getElementById('strategyAbout02');
        const target4 = document.getElementById('strategyAbout03');
        const target5 = document.getElementById('strategyAbout04');
        const target6 = document.getElementById('strategyAbout05');
        const target7 = document.getElementById('strategyAbout06');
    
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
                target2.classList.add('revealStrategyAbout-1');
                target3.classList.add('revealStrategyAbout-2');
                target4.classList.add('revealStrategyAbout-3');
                target5.classList.add('revealStrategyAbout-4');
                target6.classList.add('revealStrategyAbout-5');
                target7.classList.add('revealStrategyAbout-6');
              };
          })
          
        }, options);
        observer.observe(viewport);
    }, [])
    return(
        <section className="bg-greyBackground bg-squareBackground bg-no-repeat pb-32">
            <div className="w-[60.5%] m-auto flex justify-between relative -top-32 max-xl:w-10/12 1060:flex-col 1060:items-center">
                <div className="flip-card hover:cursor-pointer 1060:min-w-[310px] 1060:mb-8">
                    <div className="flip-card-inner">
                        <div className="flip-card-front bg-card01Background bg-cover bg-no-repeat text-center text-white rounded-lg pb-14">
                            <Image src={cardIcon02} alt='dessin de puzzle' className="w-12 m-auto pt-16 mb-6" />
                            <p className="font-Amiri text-[42px] text-white mb-2">Our Mission</p>
                            <span className="text-5xl text-white">→</span>
                        </div>

                        <div className="flip-card-back rounded-lg bg-orange">
                            <p className="text-white text-lg pt-20 w-10/12 leading-8 m-auto">Partnerships are important so we&apos;re here to support you for the long term. We&apos;re never judgmental because we understand on a human level.</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card hover:cursor-pointer 1060:min-w-[310px] 1060:mb-8">
                    <div className="flip-card-inner">
                        <div className="flip-card-front bg-card02Background bg-no-repeat bg-cover text-center text-white rounded-lg pb-14">
                            <Image src={cardIcon02} alt='dessin de puzzle' className="w-12 m-auto pt-16 mb-6" />
                            <p className="font-Amiri text-[42px] text-white mb-2">Our Vision</p>
                            <span className="text-5xl text-white">→</span>
                        </div>

                        <div className="flip-card-back rounded-lg bg-orange">
                            <p className="text-white text-lg pt-20 w-10/12 leading-8 m-auto">Partnerships are important so we&apos;re here to support you for the long term. We&apos;re never judgmental because we understand on a human level.</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card hover:cursor-pointer 1060:min-w-[310px]">
                    <div className="flip-card-inner">
                        <div className="flip-card-front bg-card03Background bg-cover bg-no-repeat text-center text-white rounded-lg pb-14">
                            <Image src={cardIcon02} alt='dessin de puzzle' className="w-12 m-auto pt-16 mb-6" />
                            <p className="font-Amiri text-[42px] text-white mb-2">Our Value</p>
                            <span className="text-5xl text-white">→</span>
                        </div>

                        <div className="flip-card-back rounded-lg bg-orange">
                            <p className="text-white text-lg pt-20 w-10/12 leading-8 m-auto">Partnerships are important so we&apos;re here to support you for the long term. We&apos;re never judgmental because we understand on a human level.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center mt-14 mx-12 max-xl:flex-col">
                <div className="w-1/3 max-xl:w-full">
                    <h2 className='text-orange font-semibold mb-3 relative'>OUR STRATEGY<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h3 className="font-Amiri text-5xl text-slightGrey leading-tight mb-4 w-[81%] max-xl:w-full 650:text-4xl">Strategy is at the Heart of What We Do</h3>
                    <p className="text-greyText text-lg w-2/3 leading-8 mb-8 max-xl:w-full">Our team applies its wide-ranging experience to determining the strategies that will best enable our clients to achieve clear, long-term objectives.</p>

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

                <div className="relative -ml-12 max-xl:pl-20">
                    <Image id='strategyAbout01' src={people} alt='dessin de personne ayant une conversation' className="opacity-0" />
                    <Image id='strategyAbout02' src={graphic} alt='dessin de graphique' className="opacity-0 absolute bottom-0" />
                    <Image id='strategyAbout03' src={line01} alt='ligne de décoration' className="opacity-0 absolute bottom-0 right-0" />
                    <Image id='strategyAbout04' src={line02} alt='ligne de décoration' className="opacity-0 absolute bottom-0" />
                    <Image id='strategyAbout05' src={line03} alt='ligne de décoration' className="opacity-0 absolute bottom-0 right-0" />
                    <Image id='strategyAbout06' src={line04} alt='ligne de décoration' className="opacity-0 absolute bottom-0" />
                </div>
            </div>
        </section>
    )
}