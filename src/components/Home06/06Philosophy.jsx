import Image from "next/image"
import { useEffect, useState } from "react"

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

import background from '../../public/assets/Home06/philosophy_background.png'
import square from '../../public/assets/Home06/philosophy_square.png'


export default function PhilosophyHome06() {
    const { color, secondaryColor } = useContext(ColorContext);

    const [currentSlide, setCurrentSlide] = useState(0);

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


    function activeRectangle(categorie) {
        let currentCategorie = categorie;
        let remove = document.getElementsByClassName(`home06-philosophy-active-${secondaryColor}`);
        remove[0].classList.remove(`home06-philosophy-active-${secondaryColor}`);
        let target = document.getElementById(currentCategorie);
        target.classList.add(`home06-philosophy-active-${secondaryColor}`);
    }

    function slideAnimation(slide, slideNumber) {
        if(slideNumber === currentSlide) {
            return;
        }
        else if(slideNumber > currentSlide) {
            let target = document.getElementById(slide);
            if(target.classList.contains('Home06SlideAnimationRemove')) { target.classList.remove('Home06SlideAnimationRemove') } 
            target.classList.add('Home06SlideAnimation');
            setCurrentSlide(slideNumber);
        }
        else {
            let slides = document.getElementsByClassName('slide');
            let slidesArray = Array.from(slides).slice(slideNumber);
                slidesArray.forEach(slide => {
                    if(slide.classList.contains('Home06SlideAnimation')) {
                        slide.classList.add('Home06SlideAnimationRemove');
                        setTimeout(() => {
                        slide.classList.remove('Home06SlideAnimation');
                        slide.classList.add('Home06SlideAnimationRemove');
                        }, 50)
                    }
                })
            setCurrentSlide(slideNumber);
        }
    }

    function slideSelection(categorie, slide, slideNumber) {
        activeRectangle(categorie);
        slideAnimation(slide, slideNumber);
    }

    function slideReset (number) {
        let slides = document.getElementsByClassName('slide');
        let slidesArray = Array.from(slides);
            slidesArray.forEach(slide => {
                if(slide.classList.contains('Home06SlideAnimation')) {
                    slide.classList.add('Home06SlideAnimationRemove');
                    setTimeout(() => {
                    slide.classList.remove('Home06SlideAnimation');
                    slide.classList.add('Home06SlideAnimationRemove');
                    }, 50)
                }
            })
        setCurrentSlide(number);
    }


    return(
        <section className='mb-32 flex flex-col items-center relative z-10 mt-16 overflow-hidden'>
            <div className='flex justify-center max-xl:flex-col max-xl:items-center'>
                <div className='w-1/4 max-xl:w-[90%] relative top-24'>
                    <h2 className={`text-${color} font-bold mb-4 relative`}>OUR PHILOSOPHY<span className={`absolute bottom-1 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
                    <h3 className='font-Amiri text-black text-5xl leading-[55px] mb-4'>Solutions that Grow Your Business</h3>
                        
                    <div className='mb-6'>
                        <button id="quality" onClick={() => { activeRectangle('quality'); slideReset(0) }} className={`home06-philosophy-active-${secondaryColor} bg-greyBackground text-slightGrey font-bold text-sm py-3.5 px-8 rounded mr-2.5 hover-bg-${secondaryColor} hover:text-white hover:cursor-pointer ease-in-out duration-300`}>Quality</button>
                        <button id="support" onClick={() => slideSelection('support', 'supportSlide', 1)} className={`bg-greyBackground text-slightGrey font-bold text-sm py-3.5 px-8 rounded mr-2.5 hover-bg-${secondaryColor} hover:text-white hover:cursor-pointer ease-in-out duration-300`}>Support</button>
                        <button id="people" onClick={() => slideSelection('people', 'peopleSlide', 2)} className={`bg-greyBackground text-slightGrey font-bold text-sm py-3.5 px-8 rounded hover-bg-${secondaryColor} hover:text-white hover:cursor-pointer ease-in-out duration-300`}>People</button>
                    </div>

                    <div className="overflow-hidden relative">
                        <div>
                            <p className='text-greyText mb-6 leading-7 w-[95%] bg-white'>From implantables to wearables, embedded system software has become an integrated part of our lives. We help companies across all markets continue to push the boundaries of hardware and software design through our dedicated embedded system engineering practice</p>
                            <p className='text-greyText leading-7 w-11/12'>Our team applies its wide-ranging experience to determining the strategies that will best enable our clients to achieve.</p>
                        </div>

                        <div id='supportSlide' className="absolute top-0 translate-y-[100%] bg-white slide">
                            <p className='text-greyText mb-6 leading-7 w-[95%]'>From implantables to wearables, embedded system software has become an integrated part of our lives. We help companies across all markets continue to push the boundaries of hardware and software design through our dedicated embedded system engineering practice</p>
                            <p className='text-greyText leading-7 w-11/12'>Our team applies its wide-ranging experience to determining the strategies that will best enable our clients to achieve.</p>
                        </div>

                        <div id='peopleSlide' className="absolute top-0 translate-y-[100%] bg-white slide">
                            <p className='text-greyText mb-6 leading-7 w-[95%]'>From implantables to wearables, embedded system software has become an integrated part of our lives. We help companies across all markets continue to push the boundaries of hardware and software design through our dedicated embedded system engineering practice</p>
                            <p className='text-greyText leading-7 w-11/12'>Our team applies its wide-ranging experience to determining the strategies that will best enable our clients to achieve.</p>
                        </div>
                    </div>
                </div>

                <div className='relative top-24 left-40 max-xl:left-10'>
                    <Image src={background} alt='femme travaillant derrière un bureau' className='relative z-10' />
                    <Image src={square} alt='carré de décoration' className='absolute top-0 animation-philosophy-home06' />
                </div>
            </div>

            <div id='numberViewport' className='flex text-center pt-16 relative w-[1090px] max-xl:flex-col max-xl:items-center max-xl:mt-14'>
              <div className='relative flex items-center max-xl:mb-5'>
                  <p id='numberTarget1' className={`font-Amiri text-7xl text-${color} tracking-tighter mr-5`}>0</p>
                  <p className='text-slightGrey font-bold text-sm text-left leading-6'>YEARS OF EXPERIENCE</p>
              </div>

              <div className='relative mx-36 flex items-center max-xl:mx-0 max-xl:mb-5'>
                  <p id='numberTarget2' className={`font-Amiri text-7xl text-${color} tracking-tighter mr-5`}>0</p>
                  <p className='text-slightGrey font-bold text-sm text-left leading-6'>TRUSTED CLIENTS</p>
              </div>

              <div className='relative mr-36 flex items-center max-xl:mr-0 max-xl:mb-5'>
                  <p id='numberTarget3' className={`font-Amiri text-7xl text-${color} tracking-tighter mr-5`}>0</p>
                  <p className='text-slightGrey font-bold text-sm text-left leading-6'>VISITED CONFERENCES</p>
              </div>

              <div className='relative mr-20 flex items-center max-xl:mr-0'>
                  <p id='numberTarget4' className={`font-Amiri text-7xl text-${color} tracking-tighter mr-5`}>0</p>
                  <p className='text-slightGrey font-bold text-sm text-left leading-6'>MASTER CERTIFICATION</p>
              </div>
            </div>
        </section>
    )
}