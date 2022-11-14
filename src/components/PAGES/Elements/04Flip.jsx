import Image from "next/image"

import cardIcon02 from '../../../public/assets/PAGES/About/card_02_icon.png'


export default function FlipElement() {
    return(
        <section className='mt-20'>
            <p className='text-slightGrey font-Amiri text-4xl mb-5 Progress Bars'>Flip Boxes</p>


            <div className="flex justify-between relative max-xl:w-10/12 1060:flex-col 1060:items-center">
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
        </section>
    )
}