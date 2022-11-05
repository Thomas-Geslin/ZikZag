import Image from "next/image"

// Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import people from '../../public/assets/About/about_people.png'
import line01 from '../../public/assets/About/about_line_01.png'
import line02 from '../../public/assets/About/about_line_02.png'
import line03 from '../../public/assets/About/about_line_03.png'
import line04 from '../../public/assets/About/about_line_04.png'
import quote from '../../public/assets/About/about_quote.png'

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

const revealLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const revealTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-200px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function AboutLanding() {
    return(
        <section className="flex justify-center items-center mt-24 mb-64">
            <div className="relative">
                <Reveal keyframes={revealTop} triggerOnce duration={750} delay={300}><Image src={people} alt='dessin de personnes se saluant' className="mr-28 ml-28" /></Reveal>
                <Reveal keyframes={revealLeft} triggerOnce duration={750} delay={800}><Image src={line01} alt='ligne de décoration' className="absolute bottom-0 left-28" /></Reveal>
                <Reveal keyframes={revealRight} triggerOnce duration={750} delay={1350}><Image src={line02} alt='ligne de décoration' className="absolute bottom-0 right-28" /></Reveal>
                <Reveal keyframes={revealLeft} triggerOnce duration={750} delay={1900}><Image src={line03} alt='ligne de décoration' className="absolute bottom-0 left-28" /></Reveal>
                <Reveal keyframes={revealRight} triggerOnce duration={750} delay={2500}><Image src={line04} alt='ligne de décoration' className="absolute bottom-0 right-28" /></Reveal>
            </div>

            <div className="w-1/3">
                <h2 className='text-orange font-semibold mb-3 relative'>ABOUT ZIKZAG<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                <h3 className="font-Amiri text-5xl text-slightGrey w-2/3 leading-tight mb-4">We Work for Your Incredible Success</h3>
                <p className="text-greyText text-lg w-9/12 leading-7 mb-8">We seamlessly merge two key components – economics and information technology. This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.</p>

                <div className="bg-[#f5f5f5] w-9/12 border-l-orange border-l-[3px] rounded-br-lg relative">
                    <p className="font-Amiri text-3xl text-slightGrey w-10/12 leading-tight py-7 pl-9">Best Counsalting Solutions since 2002.</p>
                    <Image src={quote} alt='icone de guillemet' className="w-20 absolute -top-3 right-0" />
                </div>
            </div>
        </section>
    )
}