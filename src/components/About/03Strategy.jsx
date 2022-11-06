import Image from "next/image"

// Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import cardIcon02 from '../../public/assets/About/card_02_icon.png'
import people from '../../public/assets/About/strategy_people.png'
import graphic from '../../public/assets/About/strategy_graphic.png'
import line01 from '../../public/assets/About/strategy_line_01.png'
import line02 from '../../public/assets/About/strategy_line_02.png'
import line03 from '../../public/assets/About/strategy_line_03.png'
import line04 from '../../public/assets/About/strategy_line_04.png'

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

const revealBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export default function Strategy() {
    return(
        <section className="bg-greyBackground bg-squareBackground bg-no-repeat pb-32">
            <div className="w-[60.5%] m-auto flex justify-between relative -top-32">
                <div className="flip-card hover:cursor-pointer">
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

                <div className="flip-card hover:cursor-pointer">
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

                <div className="flip-card hover:cursor-pointer">
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


            <div className="flex justify-center mt-14 ml-12">
                <div className="w-1/3">
                    <h2 className='text-orange font-semibold mb-3 relative'>OUR STRATEGY<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h3 className="font-Amiri text-5xl text-slightGrey leading-tight mb-4">Strategy is at the<br></br>Heart of What We Do</h3>
                    <p className="text-greyText text-lg w-2/3 leading-8 mb-8">Our team applies its wide-ranging experience to determining the strategies that will best enable our clients to achieve clear, long-term objectives.</p>

                    <div className="relative w-2/3 mb-12">
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>DIGITAL STRATEGY</p>
                            <p>55%</p>
                        </div>

                        <span className="w-[55%] h-1 bg-orange absolute -bottom-3 rounded"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>

                    <div className="relative w-2/3 mb-12">
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>FINANCIAL SERVICE</p>
                            <p>75%</p>
                        </div>

                        <span className="w-[75%] h-1 bg-orange absolute -bottom-3 rounded"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>

                    <div className="relative w-2/3 mb-10">
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>CONSALTING</p>
                            <p>68%</p>
                        </div>

                        <span className="w-[68%] h-1 bg-orange absolute -bottom-3 rounded"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>
                </div>

                <div className="relative -ml-12">
                    <Reveal keyframes={revealBottom} triggerOnce duration={750} delay={300}><Image src={people} alt='dessin de personne ayant une conversation' className="w-[682px]" /></Reveal>
                    <Reveal keyframes={revealLeft} triggerOnce duration={750} delay={800}><Image src={graphic} alt='dessin de graphique' className="absolute bottom-0" /></Reveal>
                    <Reveal keyframes={revealRight} triggerOnce duration={750} delay={1300}><Image src={line01} alt='ligne de décoration' className="absolute bottom-0" /></Reveal>
                    <Reveal keyframes={revealLeft} triggerOnce duration={750} delay={1800}><Image src={line02} alt='ligne de décoration' className="absolute bottom-0" /></Reveal>
                    <Reveal keyframes={revealRight} triggerOnce duration={750} delay={2300}><Image src={line03} alt='ligne de décoration' className="absolute bottom-0" /></Reveal>
                    <Reveal keyframes={revealLeft} triggerOnce duration={750} delay={2800}><Image src={line04} alt='ligne de décoration' className="absolute bottom-0" /></Reveal>
                </div>
            </div>
        </section>
    )
}