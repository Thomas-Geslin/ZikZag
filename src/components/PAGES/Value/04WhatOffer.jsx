import Image from "next/image"
import { useEffect } from "react";

import cardIcon02 from '../../../public/assets/PAGES/About/card_02_icon.png'


export default function WhatOfferValue() {
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
    }, [])


    return(
        <section id='goTopViewport' className='relative text-center mb-32'>
            <h2 className='text-orange font-bold mb-4 pt-60 relative w-40 m-auto max-xl:pt-36 850:mt-12'><span className='absolute bottom-1 left-0 bg-orange h-0.5 w-2'></span>WHAT WE OFFER<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
            <h3 className='font-Amiri text-slightGrey text-5xl mb-5'>Our Business Philosophy</h3>
            <p className='text-greyText text-lg w-[40%] m-auto mb-10 1060:w-9/12'>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>
        

            <div className="w-[60.5%] m-auto flex justify-between relative max-xl:w-10/12 1060:flex-col 1060:items-center">
                <div className="flip-card hover:cursor-pointer 1060:min-w-[310px] 1060:mb-8">
                    <div className="flip-card-inner">
                        <div className="flip-card-front bg-card01Background bg-no-repeat text-center text-white rounded-lg pb-14">
                            <Image src={cardIcon02} alt='dessin de puzzle' className="w-12 m-auto pt-16 mb-6" />
                            <p className="font-Amiri text-[42px] text-white mb-2">Our Mission</p>
                            <span className="text-5xl text-white">→</span>
                        </div>

                        <div className="flip-card-back rounded-lg bg-orange">
                            <p className="text-white text-lg pt-20 w-10/12 leading-8 m-auto">Partnerships are important so we&apos;re here to support yoou for the long term. We&apos;re never judgmental because we understand on a human level.</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card hover:cursor-pointer 1060:min-w-[310px] 1060:mb-8">
                    <div className="flip-card-inner">
                        <div className="flip-card-front bg-card02Background bg-no-repeat text-center text-white rounded-lg pb-14">
                            <Image src={cardIcon02} alt='dessin de puzzle' className="w-12 m-auto pt-16 mb-6" />
                            <p className="font-Amiri text-[42px] text-white mb-2">Our Vision</p>
                            <span className="text-5xl text-white">→</span>
                        </div>

                        <div className="flip-card-back rounded-lg bg-orange">
                            <p className="text-white text-lg pt-20 w-10/12 leading-8 m-auto">Partnerships are important so we&apos;re here to support yoou for the long term. We&apos;re never judgmental because we understand on a human level.</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card hover:cursor-pointer 1060:min-w-[310px]">
                    <div className="flip-card-inner">
                        <div className="flip-card-front bg-card03Background bg-no-repeat text-center text-white rounded-lg pb-14">
                            <Image src={cardIcon02} alt='dessin de puzzle' className="w-12 m-auto pt-16 mb-6" />
                            <p className="font-Amiri text-[42px] text-white mb-2">Our Value</p>
                            <span className="text-5xl text-white">→</span>
                        </div>

                        <div className="flip-card-back rounded-lg bg-orange">
                            <p className="text-white text-lg pt-20 w-10/12 leading-8 m-auto">Partnerships are important so we&apos;re here to support yoou for the long term. We&apos;re never judgmental because we understand on a human level.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div id='numberViewport' className='flex text-center py-16 relative w-[1150px] m-auto'>
                <div className='relative ml-20'>
                    <p id='numberTarget1' className='font-Amiri text-7xl text-orange tracking-tighter'>0</p>
                    <p className='font-bold text-sm w-2/3 m-auto'>YEARS OF EXPERIENCE</p>
                    <span className='absolute text-3xl text-[#bfbfbf] -top-5 right-5'>+</span>
                </div>

                <div className='relative mx-36'>
                    <p id='numberTarget2' className='font-Amiri text-7xl text-orange tracking-tighter'>0</p>
                    <p className='font-bold text-sm w-2/3 m-auto'>TRUSTED CLIENTS</p>
                    <span className='absolute text-3xl text-[#bfbfbf] -top-5 -right-3'>+</span>
                </div>

                <div className='relative mr-36'>
                    <p id='numberTarget3' className='font-Amiri text-7xl text-orange tracking-tighter'>0</p>
                    <p className='font-bold text-sm w-2/3 m-auto'>VISITED CONFERENCES</p>
                    <span className='absolute text-3xl text-[#bfbfbf] -top-5 right-5'>+</span>
                </div>

                <div className='relative mr-20'>
                    <p id='numberTarget4' className='font-Amiri text-7xl text-orange tracking-tighter'>0</p>
                    <p className='font-bold text-sm w-2/3 m-auto'>MASTER CERTIFICATION</p>
                    <span className='absolute text-3xl text-[#bfbfbf] -top-5 right-5'>+</span>
                </div>
            </div>
        </section>
    )
}