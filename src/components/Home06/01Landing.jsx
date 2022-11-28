import Image from "next/image"
import Link from "next/link";

// Awesome Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import line1 from "../../public/assets/Home06/landing_line_1.png"
import line2 from "../../public/assets/Home06/landing_line_2.png"
import squareLeft from "../../public/assets/Home06/landing_squareLeft_1.png"
import squareLRight1 from "../../public/assets/Home06/landing_squareRight_1.png"
import squareRight2 from "../../public/assets/Home06/landing_squareRight_2.png"


// Keyframe for smooth reveal
const reveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


export default function LandingHome06() {
    return(
         <section className='relative overflow-hidden z-10'>
            <Reveal keyframes={reveal} duration={800} triggerOnce>
            <div className='bg-Home06Landing bg-center bg-cover h-[923px]'>
                <div className='relative'>   
                    <Image src={line1} alt='ligne de décoration' className='absolute left-36 top-20 animation-landing-Home06' />
                    <Image src={line2} alt='ligne de décoration' className='absolute right-40 top-72 z-10 animation-landing-Home06-2 850:hidden' />
                    <Image src={squareLeft} alt='ligne de décoration' className='absolute -top-[305px] -left-[260px]' />
                    <Image src={squareRight2} alt='ligne de décoration' className='absolute right-0 top-36 -right-[550px]' />
                    <Image src={squareLRight1} alt='ligne de décoration' className='absolute right-0 top-[360px] -right-[400px]' />
                </div>

                <div className='shadow-[13px_11px_81px_0px_rgb(0,0,0,0.10)] backdrop-blur-[7.2px] rounded-3xl border border-solid border-white min-w-[600px] w-[40%] ml-auto relative top-60 right-64 pl-[70px] py-[60px] 850-1050:right-[10%] 850:min-w-fit 850:w-[80%] 850:mx-[5%] 850:left-0 430:pl-4 430:top-32'>
                    <h2 className='text-orange font-semibold mb-4 relative'>KEEP YOUR FINANCIAL LIFE SIMPLE<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h1 className='font-Amiri text-slightGrey leading-[80px] text-[80px] mb-5 w-10/12 850:text-[50px] 850:leading-[50px]'>We Shape the Perfect Solution</h1>
                    <p className='text-greyText text-lg mb-10 w-9/12 leading-8 430:text-base'>We want to bring a splash of colour into a see mingly grey world and become a global leader in consultancy and fintech services.</p>

                    <div className='flex items-center 430:flex-col'>
                        <Link href='/Contacts' className="850:mr-auto"><button className="text-sm font-semibold text-white rounded bg-orange px-11 py-5 mr-4 430:mb-5 430:px-6 430:py-3 hover:bg-darkBlueBackground ease-in-out duration-300">LEARN MORE</button></Link>
                        <div className='group bg-white px-7 py-6 rounded-full shadow-[5px_5px_15px_3px_#dddddd] hover:bg-orange hover:cursor-pointer ease-linear duration-300 430:mr-auto'><FontAwesomeIcon icon={faPlay} className='w-4 text-orangeBright group-hover:text-white' /></div>
                        <p className='font-bold text-slightGrey text-sm ml-5 430:ml-0 430:mt-5 430:mr-auto'>HOW IT WORKS</p>
                    </div>
                </div>
            </div>
            </Reveal>
         </section>
    )
}