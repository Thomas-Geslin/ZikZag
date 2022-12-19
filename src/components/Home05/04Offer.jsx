import Image from 'next/image'
import { useEffect, useState } from 'react';

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Goal Data
import { GoalSwiperData } from '../../datas/Home02/GoalSwiperData';

import line from '../../public/assets/Home05/benefits_line_2.png'


export default function OfferHome05() {
  const { color } = useContext(ColorContext);

  let [slideNumber, setSlideNumber] = useState(2)

  useEffect(() => {
    const windowSize = window.innerWidth;
        if(windowSize < 650) {
          setSlideNumber(1);
        }
        else  {
            setSlideNumber(2);
        }
  }, [])


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
        <section className='pt-20 650:pt-0 relative'>
            <Image src={line} alt='ligne de décoration' className='absolute top-0 right-0 850:hidden' />

            <div id='numberViewport' className='flex w-[1150px] text-center py-16 relative m-auto min-w-[220px] my-10 max-xl:flex-col max-xl:mb-10 max-xl:w-[25%] max-xl:py-6 max-xl:my-0'>
                <div className='relative ml-20 max-xl:ml-0 max-xl:mb-5'>
                    <p id='numberTarget1' className={`font-Amiri text-7xl text-${color} tracking-tighter`}>0</p>
                    <p className='font-bold text-sm w-2/3 m-auto'>YEARS OF EXPERIENCE</p>
                    <span className='absolute text-3xl text-greyText font-light -top-5 right-5'>+</span>
                </div>

                <div className='relative mx-36 max-xl:mx-0 max-xl:mb-5'>
                    <p id='numberTarget2' className={`font-Amiri text-7xl text-${color} tracking-tighter`}>0</p>
                    <p className='font-bold text-sm w-2/3 m-auto'>TRUSTED CLIENTS</p>
                    <span className='absolute text-3xl text-greyText font-light -top-5 -right-3 max-xl:right-4'>+</span>
                </div>

                <div className='relative mr-36 max-xl:mr-0 max-xl:mb-5'>
                    <p id='numberTarget3' className={`font-Amiri text-7xl text-${color} tracking-tighter`}>0</p>
                    <p className='font-bold text-sm w-2/3 m-auto'>VISITED CONFERENCES</p>
                    <span className='absolute text-3xl text-greyText font-light -top-5 right-5'>+</span>
                </div>

                <div className='relative mr-20 max-xl:mr-0'>
                    <p id='numberTarget4' className={`font-Amiri text-7xl text-${color} tracking-tighter`}>0</p>
                    <p className='font-bold text-sm w-2/3 m-auto'>MASTER CERTIFICATION</p>
                    <span className='absolute text-3xl text-greyText font-light -top-5 right-5'>+</span>
                </div>
            </div>

            <div className='text-center'>
              <h2 className={`text-${color} font-bold mb-4 pt-32 relative w-40 m-auto max-xl:pt-10 850:mt-12`}><span className={`absolute bottom-1 left-0 bg-${color} h-0.5 w-2`}></span>WHAT WE OFFER<span className={`absolute bottom-1 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
              <h3 className='font-Amiri text-slightGrey text-5xl mb-5'>Our Latest Case Studies</h3>
              <p className='text-greyText text-lg w-[40%] m-auto mb-10 1050:w-10/12'>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>
            </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={slideNumber}
            spaceBetween={30}
            centeredSlides={true}
            loop
            pagination={{
              clickable: true
            }}
            autoplay={{
              delay: 4000
            }}
            speed={1000}
          >
            {GoalSwiperData.map((el) => {
              return (
                <SwiperSlide key={el.index} className='relative'>
                  <Image src={el.background} alt="Photo de présentation d'entreprise" className='rounded-xl' />
                  <div className='text-center bg-white relative bottom-10 w-[45%] min-w-[270px] m-auto rounded-xl shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]'>
                    <p className='font-Amiri text-3xl pt-5'>{el.title}</p>
                    <p className={`text-${color} font-semibold mt-1 pb-5 mb-10`}>{el.line}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </section>
    )
}