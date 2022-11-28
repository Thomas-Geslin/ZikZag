import Image from "next/image"

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

import arrow  from '../../public/assets/Home02/offer_arrow.png'
import quote from '../../public/assets/PAGES/About/about_quote.png'
import man from '../../public/assets/Home01/about_man.png'
import line from '../../public/assets/Home01/about_line.png'
import twitter from '../../public/assets/Home01/about_icon_twitter.png'
import facebook from '../../public/assets/Home01/about_icon_facebook.png'
import pinterest from '../../public/assets/Home01/about_icon_pinterest.png'

export default function AboutHome01() {
    const { color, secondaryColor } = useContext(ColorContext);
    let slightColor = 'slightOrange';
    let slightBlue = 'slightBlue'
    if(color === 'red') {
        slightColor = 'slightRed';
        slightBlue = 'slightSecondaryBlue'
    }


    return(
        <section className='relative shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] w-9/12 min-w-[1260px] overflow-hidden m-auto z-20 -top-32 max-xl:w-[90%] 1050-xl:min-w-[970px] max-xl:mb-28 max-xl:pb-14 max-xl:-top-60 850-1050:min-w-[750px] 650-850:min-w-[480px] 430-650:min-w-[400px] 430:min-w-[300px]'>
            <div className='flex font-Amiri text-white h-36 relative m-auto max-xl:flex-col'>
                <div className='flex font-Amiri text-white h-36 justify-center max-xl:flex-col max-xl:h-auto max-xl:mt-28 850-1050:mt-16 1050-xl:mt-10 max-xl:top-0 650:w-full'>
                    <div className={`relative flex items-center bg-${color} rounded-tl-lg group max-xl:rounded-t-lg`}>
                        <span className={`absolute left-10 bottom-4 tracking-tighter text-8xl text-${slightColor}`}>01</span>
                        <p className='text-3xl z-10 pl-20 max-xl:py-14 650:pl-6 650:text-2xl'>Consulting for Corporates</p>
                        <div className='pr-24 1050:left-[80%] max-xl:absolute 1050-xl:right-24'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                        <span className='absolute right-32 1050-xl:right-52 1050:left-[77%] w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500'></span>
                    </div>

                    <div className={`relative flex items-center bg-${secondaryColor} group max-xl:rounded-[0]`}>
                        <span className={`text-8xl text-${slightBlue} absolute left-10 bottom-4 tracking-tighter`}>02</span>
                        <p className='text-3xl z-10 pl-20 max-xl:py-14 650:pl-6 430-650:text-2xl 430:text-[20px]'>Consulting for Private Equity</p>
                        <div className='pr-24 1050:left-[80%] max-xl:absolute 1050-xl:right-24'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                        <span className='absolute right-32 1050-xl:right-52 1050:left-[77%] w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500'></span>
                    </div>

                    <div className={`relative flex items-center bg-${color} rounded-tr-lg group max-xl:rounded-b-lg`}>
                        <span className={`absolute left-10 bottom-4 tracking-tighter text-8xl text-${slightColor}`}>03</span>
                        <p className='text-3xl z-10 pl-20 max-xl:py-14 650:pl-6 650:text-2xl'>Consulting for Corporates</p>
                        <div className='pr-24 1050:left-[80%] max-xl:absolute 1050-xl:right-24'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                        <span className='absolute right-32 1050-xl:right-52 1050:left-[77%] w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500'></span>
                    </div>
                </div>
            </div>
            
            <div className='flex bg-white rounded-b-xl max-xl:flex-col'>
                <div className="w-5/12 pt-32 pl-32 pb-48 max-xl:w-11/12 max-xl:mt-60 max-xl:pb-10 850-1050:pl-[5%] 850:pl-[20px]">
                    <h2 className={`text-${color} font-bold mb-3 relative`}>ABOUT ZIKZAG<span className={`absolute top-5 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
                    <h3 className="font-Amiri text-5xl text-slightGrey leading-tight mb-4 max-xl:w-full">We Shape the Perfect Solution for Company</h3>
                    <p className="text-greyText text-lg leading-7 mb-8 max-xl:w-full">We seamlessly merge two key components – economics and information technology. This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.</p>

                    <div className={`bg-[#f5f5f5] border-l-${color} border-l-[3px] rounded-br-lg relative max-xl:w-full`}>
                        <p className="font-Amiri text-3xl text-slightGrey w-10/12 leading-tight py-7 pl-9">Best Counsalting Solutions since 2002.</p>
                        <Image src={quote} alt='icone de guillemet' className="w-20 absolute -top-3 right-0" />
                    </div>
                </div>

                <div className='relative max-w-[90%] 430:-left-10'>
                    <Image src={man} alt="dessin d'une personne les bras levé animation" className='relative top-10 left-32 850:left-20' />
                    <Image src={line} alt="ligne de décoration" className='absolute top-6 left-24 lineOfferAnimation 430-850:left-12 430:left-16' />
                    <Image src={twitter} alt="icone de twitter" className='absolute top-6 left-24 twitterOfferAnimation 850:left-12' />
                    <Image src={facebook} alt="icone de facebook" className='absolute top-10 left-24 facebookOfferAnimation 850:left-12' />
                    <Image src={pinterest} alt="icone de pinterest" className='absolute top-14 left-24 pinterestOfferAnimation 850:left-12' />
                </div>
            </div>
        </section>
    )
}