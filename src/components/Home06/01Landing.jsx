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
         <section className='relative overflow-hidden'>
            <Reveal keyframes={reveal} duration={800} triggerOnce>
            <div className='bg-Home06Landing bg-center bg-cover h-[923px]'>
                <div className='relative'>   
                    <Image src={line1} alt='ligne de décoration' className='absolute left-36 top-20 animation-landing-Home06' />
                    <Image src={line2} alt='ligne de décoration' className='absolute right-40 top-72 z-10 animation-landing-Home06-2' />
                    <Image src={squareLeft} alt='ligne de décoration' className='absolute -top-[305px] -left-[260px]' />
                    <Image src={squareRight2} alt='ligne de décoration' className='absolute right-0 top-36 -right-[550px]' />
                    <Image src={squareLRight1} alt='ligne de décoration' className='absolute right-0 top-[360px] -right-[400px]' />
                </div>

                <div className='shadow-[13px_11px_81px_0px_rgb(0,0,0,0.10)] backdrop-blur-[7.2px] rounded-3xl border border-solid border-white w-[40%] ml-auto relative top-60 right-64 pl-[70px] py-[60px]'>
                    <h2 className='text-orange font-semibold mb-4 relative max-xl:pt-36 850:mt-12'>KEEP YOUR FINANCIAL LIFE SIMPLE<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h1 className='font-Amiri text-slightGrey leading-[80px] text-[80px] mb-5 w-10/12'>We Shape the Perfect Solution</h1>
                    <p className='text-greyText text-lg mb-10 w-9/12 leading-8'>We want to bring a splash of colour into a see mingly grey world and become a global leader in consultancy and fintech services.</p>

                    <div className='flex items-center'>
                        <Link href='/Contacts'><button className="text-sm font-semibold text-white rounded bg-orange px-11 py-5 mr-4">LEARN MORE</button></Link>
                        <div className='group bg-white px-7 py-6 rounded-full shadow-[5px_5px_15px_3px_#dddddd] hover:bg-orange hover:cursor-pointer ease-linear duration-300'><FontAwesomeIcon icon={faPlay} className='w-4 text-orangeBright group-hover:text-white' /></div>
                        <p className='font-bold text-slightGrey text-sm ml-5'>HOW IT WORKS</p>
                    </div>
                </div>
            </div>
            </Reveal>
         </section>
    )
}