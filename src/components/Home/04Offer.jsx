import Image from 'next/image'

// Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

// Offer Slider Data
import { OfferSliderData } from '../../datas/Home02/OfferSliderData'

// Assets Offer
import offerMan from '../../public/assets/Home/offer_man.png'
import offerWoman from '../../public/assets/Home/offer_woman.png'
import offerIcon from '../../public/assets/Home/offer_icon.png'

const reveal= keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const revealRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(200px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


export default function Offer() {
    return(
        <section className='bg-greyBackground font-NunitoSans text-center pb-48 bg-squareBackground bg-cover bg-[center_bottom_-9rem]'>
          <div className='flex font-Amiri text-white justify-center h-36 relative -top-[72px]'>
            <div className='relative flex items-center bg-darkBlueBackground rounded-l-lg group'>
              <span className='text-8xl text-[#2a3843] absolute left-16 bottom-4 tracking-tighter'>01</span>
              <p className='text-3xl z-10 pl-32'>Consulting for Private Equity</p>
              <p className='text-4xl px-24'>→</p>
              <span className='absolute right-32 w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500'></span>
            </div>

            <div className='relative flex items-center bg-orange rounded-r-lg group'>
              <span className='absolute left-16 bottom-4 tracking-tighter text-8xl text-[#ff673c]'>02</span>
              <p className='text-3xl z-10 pl-32'>Consulting for Corporates</p>
              <p className='text-4xl px-24'>→</p>
              <span className='absolute right-32 w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500'></span>
            </div>
          </div>

          <h2 className='text-orange font-bold mb-4 relative w-40 m-auto'><span className='absolute bottom-1 left-0 bg-orange h-0.5 w-2'></span>WHAT WE OFFER<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
          <h3 className='font-Amiri text-slightGrey text-5xl mb-5'>Business Shaped Solutions</h3>
          <p className='text-greyText text-lg w-[40%] m-auto mb-10'>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>

          <div className='flex justify-between w-[60%] m-auto mb-12'>
            {OfferSliderData.map((el) => {
              return (
                <div key={el.index} className='border border-[#E6E6E6] border-solid rounded w-[170px]'>
                  <Image src={el.pictureColor} alt={el.alt} className='m-auto py-5 w-12' />
                  <p className='text-sm text-slightGrey font-extrabold w-3/4 m-auto pb-3'>{el.line}</p>
                </div>
              )
            })}
          </div>

          <div className='flex relative bg-white w-[60%] m-auto rounded-md items-center shadow-[6px_5px_30px_0_rgb(0,0,0,0.12)]'>
            <div className='text-left ml-16'>
              <p className='font-Amiri text-3xl text-slightGrey mb-3'>Counsalting Service Include</p>
              <p className='text-greyText w-[400px] leading-8 mb-6'>Change is opportunity. The challenges it presents may seem daunting, but we help you approach change with confidence, adapt with purpose and embrace.</p>
              <p className='text-greyText w-[400px] leading-8 mb-8'>Our results solution combines implementation support, capability building and state-of-the-art diagnostic and analytic tools so you can continually change.</p>
              <p className='text-sm text-orange font-semibold'>READ MORE</p>
            </div>

            <div className='relative'>
              <Reveal keyframes={revealRight} triggerOnce duration={750} delay={250}><Image src={offerMan} alt='homme tenant un ordinateur' className='relative top-0 -left-9 my-8 pr-8' /></Reveal>
              <Reveal keyframes={reveal} triggerOnce duration={750} delay={1000}><Image src={offerIcon} alt='dessin de horloge' className='absolute bottom-7 right-12' /></Reveal>
              <Reveal keyframes={revealRight} triggerOnce duration={750} delay={1450}><Image src={offerWoman} alt="dessin d'une personne avec un bras levé" className='absolute bottom-6 -left-12 z-10' /></Reveal>
            </div>
          </div>
        </section>
    )
}