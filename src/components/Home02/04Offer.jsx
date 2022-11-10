import Image from 'next/image'
import { useEffect, useState } from 'react'

// Assets Offer
import offerMan from '../../public/assets/Home02/offer_man.png'
import offerWoman from '../../public/assets/Home02/offer_woman.png'
import offerIcon from '../../public/assets/Home02/offer_icon.png'
import offerSecondBackground from '../../public/assets/Home02/offer_woman_background.png'
import offerThirdBackground from '../../public/assets/Home02/offer_slide_3.png'
import offerFourthBackground from '../../public/assets/Home02/offer_slide_04.jpg'
import offerFifthBackground from '../../public/assets/Home02/offer_slide_5.png'
import offerSixthBackground from '../../public/assets/Home02/offer_slide_6.png'
import secondSlide from '../../public/assets/Home02/offer_picture_man.png'
import arrow  from '../../public/assets/Home02/offer_arrow.png'

import reportWhite from '../../public/assets/Home02/offer_icon_report_white.png'
import moneyWhite from '../../public/assets/Home02/offer_icon_money_white.png'
import statWhite from '../../public/assets/Home02/offer_icon_stat_white.png'
import rocketWhite from '../../public/assets/Home02/offer_icon_rocket_white.png'
import paymentWhite from '../../public/assets/Home02/offer_icon_payment_white.png'
import balanceWhite from '../../public/assets/Home02/offer_icon_balance_white.png'


export default function Offer() {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
    useEffect(() => {
      // Intersection Obeserver for fixed GoToTop
      const target = document.getElementById('offerFirstReveal');
      const targetSecond = document.getElementById('offerSecondReveal');
      const targetThird = document.getElementById('offerThirdReveal');
      const viewport = document.getElementById('offerViewport');
  
      const options = {
        root: null,
        rootMargin: '-200px',
        treshold: 1.0
      }
  
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if(entry.isIntersecting) { 
              target.classList.add('revealOfferFirst');
              targetSecond.classList.add('revealOfferSecond');
              targetThird.classList.add('revealOfferThird');
            }
        })
      }, options);
      observer.observe(viewport);
    },[])

    // Function pour faire apparaitre le bon slide
    function triangleAnimation(categorie) {
      let currentCategorie = categorie;
      let remove = document.getElementsByClassName('home02-offer-active');
      remove[0].classList.remove('home02-offer-active');
      let target = document.getElementById(currentCategorie);
      target.classList.add('home02-offer-active');
    }

    function slideAnimation(categorieSlide, slideNumber) {
      if(slideNumber > currentSlideNumber) {
          let target = document.getElementById(categorieSlide);
          target.classList.remove('offerSlide-remove');
          target.classList.add('offerSlide-active');
          setCurrentSlideNumber(slideNumber);
      } else if (slideNumber < currentSlideNumber) {
          let target = document.getElementById(categorieSlide);
          target.classList.remove('offerSlide-remove');
          target.classList.add('offerSlide-active');
          setTimeout(() => {
            let slides = document.getElementsByClassName('offerSlide');
            let slidesArray = Array.from(slides);
            slidesArray.forEach(slide => {
              let index = slidesArray.indexOf(slide);
              if(index > slideNumber) {
                if(slide.classList.contains('offerSlide-active')) {
                  slide.classList.add('offerSlide-remove');
                  setTimeout(() => {
                    slide.classList.remove('offerSlide-active');
                  }, 200);        
                }
              }
            })
          }, 400)
        setCurrentSlideNumber(slideNumber);
      }
    }

    function addActiveOffer(categorie, categorieSlide, slideNumber) {
      triangleAnimation(categorie);
      slideAnimation(categorieSlide, slideNumber);
    }


    return(
        <section className='bg-greyBackground font-NunitoSans text-center pb-48 bg-squareBackground bg-cover bg-[center_bottom_-9rem] max-xl:mt-32' id='goTopViewport'>
          <div className='flex font-Amiri text-white justify-center h-36 relative -top-[72px] w-10/12 m-auto max-xl:flex-col max-xl:top-0 650:w-full'>
            <div className='relative flex items-center bg-darkBlueBackground rounded-l-lg group max-xl:rounded-lg'>
              <span className='text-8xl text-[#2a3843] absolute left-16 bottom-4 tracking-tighter'>01</span>
              <p className='text-3xl z-10 pl-32 max-xl:py-14 650:pl-6 650:text-2xl'>Consulting for Private Equity</p>
              <div className='px-24 650:px-16'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
              <span className='absolute right-44 w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500 max-xl:right-56'></span>
            </div>

            <div className='relative flex items-center bg-orange rounded-r-lg group max-xl:rounded-lg'>
              <span className='absolute left-16 bottom-4 tracking-tighter text-8xl text-[#ff673c]'>02</span>
              <p className='text-3xl z-10 pl-32 max-xl:py-14 650:pl-6 650:text-2xl'>Consulting for Corporates</p>
              <div className='px-24 relative -right-12 850:right-0 650:px-16'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
              <span className='absolute right-32 w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500 max-xl:right-56'></span>
            </div>
          </div>

          <h2 className='text-orange font-bold mb-4 relative w-40 m-auto max-xl:pt-36 850:mt-12'><span className='absolute bottom-1 left-0 bg-orange h-0.5 w-2'></span>WHAT WE OFFER<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
          <h3 className='font-Amiri text-slightGrey text-5xl mb-5'>Business Shaped Solutions</h3>
          <p className='text-greyText text-lg w-[40%] m-auto mb-10 1060:w-9/12'>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>

          <div className='flex justify-between w-[60%] m-auto mb-12 max-xl:w-[80%] max-xl:flex-wrap'>
                <div onClick={() => addActiveOffer('business', 'businessSlide', 0)} id='business' className='relative bg-white bg-reportIcon bg-[center_top_1.2rem] bg-[length:50px_50px] bg-no-repeat border border-[#E6E6E6] home02-offer-active border-solid rounded w-[170px] hover:cursor-pointer hover:bg-orange group ease-in-out duration-300 850:w-full'>
                  <Image src={reportWhite} alt='icone de contrat' className='m-auto py-5 w-12 -z-10 opacity-0 group-hover:opacity-100 ease-in-out duration-300 home02-offer-active--icon' />
                  <p className='text-sm text-slightGrey font-extrabold w-3/4 m-auto pb-3 group-hover:text-white ease-in-out duration-300 home02-offer-active--text'>BUSINESS CONSULTATION</p>
                </div>

                <div onClick={() => addActiveOffer('marketing', 'marketingSlide', 1)} id='marketing' className='relative bg-white bg-moneyIcon bg-[center_top_1.2rem] bg-[length:50px_50px] bg-no-repeat border border-[#E6E6E6] border-solid rounded w-[170px] hover:cursor-pointer hover:bg-orange group ease-in-out duration-300 850:w-full 850:mt-8'>
                  <Image src={moneyWhite} alt='icone de sac argent' className='m-auto py-5 w-12 -z-10 opacity-0 group-hover:opacity-100 ease-in-out duration-300 home02-offer-active--icon' />
                  <p className='text-sm text-slightGrey font-extrabold w-3/4 m-auto pb-3 group-hover:text-white ease-in-out duration-300 home02-offer-active--text'>MARKETING STRATEGY</p>
                </div>

                <div onClick={() => addActiveOffer('analytic', 'analyticSlide', 2)} id='analytic' className='relative bg-white bg-statIcon bg-[center_top_1.2rem] bg-[length:50px_50px] bg-no-repeat border border-[#E6E6E6] border-solid rounded w-[170px] hover:cursor-pointer hover:bg-orange group ease-in-out duration-300 850:w-full 850:mt-8'>
                  <Image src={statWhite} alt='icone de graphique' className='m-auto py-5 w-12 -z-10 opacity-0 group-hover:opacity-100 ease-in-out duration-300 home02-offer-active--icon' />
                  <p className='text-sm text-slightGrey font-extrabold w-3/4 m-auto pb-3 group-hover:text-white ease-in-out duration-300 home02-offer-active--text'>ADVANCED ANALYTIC</p>
                </div>

                <div onClick={() => addActiveOffer('entreprise', 'entrepriseSlide', 3)} id='entreprise' className='relative bg-white bg-rocketIcon bg-[center_top_1.2rem] bg-[length:50px_50px] bg-no-repeat border border-[#E6E6E6] border-solid rounded w-[170px] hover:cursor-pointer hover:bg-orange group ease-in-out duration-300 850:w-full 850:mt-8'>
                  <Image src={rocketWhite} alt='icone de fusée' className='m-auto py-5 w-12 -z-10 opacity-0 group-hover:opacity-100 ease-in-out duration-300 home02-offer-active--icon' />
                  <p className='text-sm text-slightGrey font-extrabold w-3/4 m-auto pb-3 group-hover:text-white ease-in-out duration-300 home02-offer-active--text'>ENTREPRISE TECHNOLOGY</p>
                </div>

                <div onClick={() => addActiveOffer('partnership', 'partnershipSlide', 4)} id='partnership' className='relative bg-white bg-paymentIcon bg-[center_top_1.2rem] bg-[length:50px_50px] bg-no-repeat border border-[#E6E6E6] border-solid rounded w-[170px] hover:cursor-pointer hover:bg-orange group ease-in-out duration-300 1060:w-full 1060:mt-8'>
                  <Image src={paymentWhite} alt='icone de paiement' className='m-auto py-5 w-12 -z-10 opacity-0 group-hover:opacity-100 ease-in-out duration-300 home02-offer-active--icon' />
                  <p className='text-sm text-slightGrey font-extrabold w-3/4 m-auto pb-3 group-hover:text-white ease-in-out duration-300 home02-offer-active--text'>PARTNERSHIP SYSTEM</p>
                </div>

                <div onClick={() => addActiveOffer('innovation', 'innovationSlide', 5)} id='innovation' className='relative bg-white bg-balanceIcon bg-[center_top_1.2rem] bg-[length:50px_50px] bg-no-repeat border border-[#E6E6E6] border-solid rounded w-[170px] hover:cursor-pointer hover:bg-orange group ease-in-out duration-300 1060:w-5/12 max-xl:w-full max-xl:mt-8'>
                  <Image src={balanceWhite} alt='icone de balance' className='m-auto py-5 w-12 -z-10 opacity-0 group-hover:opacity-100 ease-in-out duration-300 home02-offer-active--icon' />
                  <p className='text-sm text-slightGrey font-extrabold w-3/4 m-auto pb-3 group-hover:text-white ease-in-out duration-300 home02-offer-active--text'>BUSINESS INNOVATION</p>
                </div>
          </div>


          <div id='offerViewport' className='relative w-[63%] left-[50%] translate-x-[-50%] shadow-[6px_5px_30px_0_rgb(0,0,0,0.12)] overflow-hidden rounded-md group'>
            <div id='businessSlide' className='offerSlide-active offerSlide flex relative bg-white m-auto items-center max-xl:w-[80%] max-xl:flex-col'>
              <div className='text-left ml-16'>
                <p className='font-Amiri text-3xl text-slightGrey mb-3 max-xl:mt-8'>Counsalting Service Include</p>
                <p className='text-greyText w-[400px] leading-8 mb-6 max-xl:w-auto max-xl:pr-8'>Change is opportunity. The challenges it presents may seem daunting, but we help you approach change with confidence, adapt with purpose and embrace.</p>
                <p className='text-greyText w-[400px] leading-8 mb-8 max-xl:w-auto max-xl:pr-8'>Our results solution combines implementation support, capability building and state-of-the-art diagnostic and analytic tools so you can continually change.</p>
                <div className='flex items-center group/arrow relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group/arrow-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group/arrow-hover:rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group/arrow-hover:-rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-bold pl-1 group/arrow-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
              </div>
              <div className='relative'>
                <Image id='offerFirstReveal' src={offerMan} alt='homme tenant un ordinateur' className='relative top-0 -left-9 my-8 pr-8 opacity-0 1060:left-0' />
                <Image id='offerSecondReveal' src={offerIcon} alt='dessin de horloge' className='absolute bottom-7 right-12 opacity-0 1060:left-0 1060:pl-2' />
                <Image id='offerThirdReveal' src={offerWoman} alt="dessin d'une personne avec un bras levé" className='absolute z-10 bottom-6 opacity-0 -left-12 1060:left-2' />
              </div>
            </div>


            <div id='marketingSlide' className='offerSlide flex top-0 absolute translate-y-[100%] left-0 bg-white m-auto items-center max-xl:w-[80%] max-xl:flex-col'>
              <div className='relative'>
                <Image src={offerSecondBackground} alt='homme tenant un ordinateur' className='relative mt-4 mb-12 ml-12 1060:left-0' />
                <Image src={secondSlide} alt="dessin d'une personne avec un bras levé" className='absolute bottom-12 left-12 1060:left-2' />
              </div>
              <div className='text-left ml-10 mr-20'>
                <p className='font-Amiri text-3xl text-slightGrey mb-3 max-xl:mt-8'>Counsalting Service Include</p>
                <p className='text-greyText w-[400px] leading-8 mb-6 max-xl:w-auto max-xl:pr-8'>Change is opportunity. The challenges it presents may seem daunting, but we help you approach change with confidence, adapt with purpose and embrace.</p>
                <p className='text-greyText w-[400px] leading-8 mb-8 max-xl:w-auto max-xl:pr-8'>Our results solution combines implementation support, capability building and state-of-the-art diagnostic and analytic tools so you can continually change.</p>
                <div className='flex items-center group/arrow relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group/arrow-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group/arrow-hover:rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group/arrow-hover:-rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-bold pl-1 group/arrow-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
              </div>
            </div>


            <div id='analyticSlide' className='offerSlide flex top-0 z-10 absolute translate-y-[100%] left-0 bg-white m-auto items-center max-xl:w-[80%] max-xl:flex-col'>
              <div className='text-left ml-16'>
                <p className='font-Amiri text-3xl text-slightGrey mb-3 max-xl:mt-8'>Counsalting Service Include</p>
                <p className='text-greyText w-[400px] leading-8 mb-6 max-xl:w-auto max-xl:pr-8'>Change is opportunity. The challenges it presents may seem daunting, but we help you approach change with confidence, adapt with purpose and embrace.</p>
                <p className='text-greyText w-[400px] leading-8 mb-8 max-xl:w-auto max-xl:pr-8'>Our results solution combines implementation support, capability building and state-of-the-art diagnostic and analytic tools so you can continually change.</p>
                <div className='flex items-center group/arrow relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group/arrow-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group/arrow-hover:rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group/arrow-hover:-rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-bold pl-1 group/arrow-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
              </div>
              <div className='relative'>
                <Image src={offerThirdBackground} alt='homme tenant un ordinateur' className='relative top-0 -left-9 my-8 pr-8 1060:left-0' />
                <Image src={offerIcon} alt='dessin de horloge' className='absolute bottom-7 right-12 1060:left-0 1060:pl-2' />
                <Image src={offerWoman} alt="dessin d'une personne avec un bras levé" className='absolute z-10 bottom-6 -left-12 1060:left-2' />
              </div>
            </div>


            <div id='entrepriseSlide' className='offerSlide flex top-0 z-10 absolute translate-y-[100%] left-0 bg-white m-auto items-center max-xl:w-[80%] max-xl:flex-col'>
              <div className='relative my-5'>
                <Image src={offerFourthBackground} alt='homme tenant un ordinateur' className='relative w-[550px] rounded-lg mt-4 mb-12 ml-12 1060:left-0' />
                <Image src={secondSlide} alt="dessin d'une personne avec un bras levé" className='absolute bottom-12 left-28 1060:left-2' />
              </div>
              <div className='text-left ml-32'>
                <p className='font-Amiri text-3xl text-slightGrey mb-3 max-xl:mt-8'>Counsalting Service Include</p>
                <p className='text-greyText w-[400px] leading-8 mb-6 max-xl:w-auto max-xl:pr-8'>Change is opportunity. The challenges it presents may seem daunting, but we help you approach change with confidence, adapt with purpose and embrace.</p>
                <p className='text-greyText w-[400px] leading-8 mb-8 max-xl:w-auto max-xl:pr-8'>Our results solution combines implementation support, capability building and state-of-the-art diagnostic and analytic tools so you can continually change.</p>
                <div className='flex items-center group/arrow relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group/arrow-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group/arrow-hover:rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group/arrow-hover:-rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-bold pl-1 group/arrow-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
              </div>
            </div>


            <div id='partnershipSlide' className='offerSlide flex top-0 z-10 absolute translate-y-[100%] left-0 bg-white m-auto items-center max-xl:w-[80%] max-xl:flex-col'>
              <div className='text-left ml-16'>
                <p className='font-Amiri text-3xl text-slightGrey mb-3 max-xl:mt-8'>Counsalting Service Include</p>
                <p className='text-greyText w-[400px] leading-8 mb-6 max-xl:w-auto max-xl:pr-8'>Change is opportunity. The challenges it presents may seem daunting, but we help you approach change with confidence, adapt with purpose and embrace.</p>
                <p className='text-greyText w-[400px] leading-8 mb-8 max-xl:w-auto max-xl:pr-8'>Our results solution combines implementation support, capability building and state-of-the-art diagnostic and analytic tools so you can continually change.</p>
                <div className='flex items-center group/arrow relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group/arrow-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group/arrow-hover:rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group/arrow-hover:-rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-bold pl-1 group/arrow-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
              </div>
              <div className='relative'>
                <Image src={offerFifthBackground} alt='homme tenant un ordinateur' className='relative top-0 -left-9 my-8 pr-8 1060:left-0' />
                <Image src={offerIcon} alt='dessin de horloge' className='absolute bottom-7 right-12 1060:left-0 1060:pl-2' />
                <Image src={offerWoman} alt="dessin d'une personne avec un bras levé" className='absolute z-10 bottom-6-left-12 1060:left-2' />
              </div>
            </div>


            <div id='innovationSlide' className='offerSlide flex top-0 z-10 absolute translate-y-[100%] left-0 bg-white m-auto items-center max-xl:w-[80%] max-xl:flex-col'>
              <div className='relative'>
                <Image src={offerSixthBackground} alt='homme tenant un ordinateur' className='relative mt-4 mb-12 ml-12 1060:left-0' />
                <Image src={secondSlide} alt="dessin d'une personne avec un bras levé" className='absolute bottom-12 left-12 1060:left-2' />
              </div>
              <div className='text-left ml-10 mr-20'>
                <p className='font-Amiri text-3xl text-slightGrey mb-3 max-xl:mt-8'>Counsalting Service Include</p>
                <p className='text-greyText w-[400px] leading-8 mb-6 max-xl:w-auto max-xl:pr-8'>Change is opportunity. The challenges it presents may seem daunting, but we help you approach change with confidence, adapt with purpose and embrace.</p>
                <p className='text-greyText w-[400px] leading-8 mb-8 max-xl:w-auto max-xl:pr-8'>Our results solution combines implementation support, capability building and state-of-the-art diagnostic and analytic tools so you can continually change.</p>
                <div className='flex items-center group/arrow relative max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group/arrow-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group/arrow-hover:rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group/arrow-hover:-rotate-45 group/arrow-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-bold pl-1 group/arrow-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
              </div>
            </div>
          </div>
        </section>
    )
}