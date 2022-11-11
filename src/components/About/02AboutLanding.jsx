import Image from "next/image"
import { useEffect } from "react";


import people from '../../public/assets/About/about_people.png'
import line01 from '../../public/assets/About/about_line_01.png'
import line02 from '../../public/assets/About/about_line_02.png'
import line03 from '../../public/assets/About/about_line_03.png'
import line04 from '../../public/assets/About/about_line_04.png'
import quote from '../../public/assets/About/about_quote.png'

export default function AboutLanding() {
  useEffect(() => {
    // Intersection Obeserver for fixed GoToTop
    const target = document.getElementById('aboutFirstReveal');
    const targetSecond = document.getElementById('aboutSecondReveal');
    const targetThird = document.getElementById('aboutThirdReveal');
    const targetFourth = document.getElementById('aboutFourthReveal');
    const targetFifth = document.getElementById('aboutFifthReveal');
    const viewport = document.getElementById('aboutViewport');

    const options = {
      root: null,
      treshold: 1.0
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
          if(entry.isIntersecting) { 
            target.classList.add('revealAboutFirst');
            targetSecond.classList.add('revealAboutSecond');
            targetThird.classList.add('revealAboutThird');
            targetFourth.classList.add('revealAboutFourth');
            targetFifth.classList.add('revealAboutFifth');
          }
      })
    }, options);
    observer.observe(viewport);
  },[])


    return(
        <section className="z-10 flex justify-center items-center mt-24 mb-64 max-xl:flex-col max-xl:items-start 850:mt-14">
            <div id='aboutViewport' className="relative 430:w-[300px]">
                <Image id='aboutFirstReveal' src={people} alt='dessin de personnes se saluant' className="mr-28 ml-28 opacity-0 min-w-[217px] 850:w-5/12 850:ml-8" />
                <Image id='aboutSecondReveal' src={line01} alt='ligne de décoration' className="absolute bottom-0 left-28 opacity-0 min-w-[217px] 850:w-5/12 850:left-8" />
                <Image id='aboutThirdReveal' src={line02} alt='ligne de décoration' className="absolute bottom-0 right-28 opacity-0 min-w-[217px] 850:w-5/12 850:right-48 430:left-8" />
                <Image id='aboutFourthReveal' src={line03} alt='ligne de décoration' className="absolute bottom-0 left-28 opacity-0 min-w-[217px] 850:w-5/12 850:left-8" />
                <Image id='aboutFifthReveal' src={line04} alt='ligne de décoration' className="absolute bottom-0 right-28 opacity-0 min-w-[217px] 850:w-5/12 850:right-48 430:left-8" />
            </div>

            <div className="w-1/3 max-xl:w-10/12 max-xl:mx-10 max-xl:mt-10">
                <h2 className='text-orange font-semibold mb-3 relative'>ABOUT ZIKZAG<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                <h3 className="font-Amiri text-5xl text-slightGrey w-2/3 leading-tight mb-4 max-xl:w-full">We Work for Your Incredible Success</h3>
                <p className="text-greyText text-lg w-9/12 leading-7 mb-8 max-xl:w-full">We seamlessly merge two key components – economics and information technology. This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.</p>

                <div className="bg-[#f5f5f5] w-9/12 border-l-orange border-l-[3px] rounded-br-lg relative max-xl:w-full">
                    <p className="font-Amiri text-3xl text-slightGrey w-10/12 leading-tight py-7 pl-9">Best Counsalting Solutions since 2002.</p>
                    <Image src={quote} alt='icone de guillemet' className="w-20 absolute -top-3 right-0" />
                </div>
            </div>
        </section>
    )
}