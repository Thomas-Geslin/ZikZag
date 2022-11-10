import Image from "next/image"

import arrow  from '../../public/assets/Home02/offer_arrow.png'
import quote from '../../public/assets/About/about_quote.png'
import man from '../../public/assets/Home01/about_man.png'
import line from '../../public/assets/Home01/about_line.png'
import twitter from '../../public/assets/Home01/about_icon_twitter.png'
import facebook from '../../public/assets/Home01/about_icon_facebook.png'
import pinterest from '../../public/assets/Home01/about_icon_pinterest.png'

export default function AboutHome01() {
    return(
        <section className='relative -top-32 shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] w-9/12 m-auto'>
            <div className='flex font-Amiri text-white h-36 relative m-auto max-xl:flex-col max-xl:top-0 650:w-full'>
                <div className='relative flex items-center bg-darkBlueBackground rounded-tl-lg group max-xl:rounded-lg'>
                    <span className='text-8xl text-[#2a3843] absolute left-16 bottom-4 tracking-tighter'>01</span>
                    <p className='text-3xl z-10 pl-32 max-xl:py-14 650:pl-6 650:text-2xl'>Consulting for Private Equity</p>
                    <div className='px-24 650:px-16'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                    <span className='absolute right-32 w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500 max-xl:right-56'></span>
                </div>

                <div className='relative flex items-center bg-orange rounded-tr-lg group max-xl:rounded-lg'>
                    <span className='absolute left-16 bottom-4 tracking-tighter text-8xl text-[#ff673c]'>02</span>
                    <p className='text-3xl z-10 pl-32 max-xl:py-14 650:pl-6 650:text-2xl'>Consulting for Corporates</p>
                    <div className='px-24 850:right-0 650:px-16'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                    <span className='absolute right-32 w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-14 ease-in-out duration-500 max-xl:right-56'></span>
                </div>
            </div>
            
            <div className='flex'>
                <div className="w-5/12 pt-32 pl-32 pb-48 max-xl:w-10/12 max-xl:mx-10 max-xl:mt-10">
                    <h2 className='text-orange font-bold mb-3 relative'>ABOUT ZIKZAG<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h3 className="font-Amiri text-5xl text-slightGrey leading-tight mb-4 max-xl:w-full">We Shape the Perfect Solution for Company</h3>
                    <p className="text-greyText text-lg leading-7 mb-8 max-xl:w-full">We seamlessly merge two key components – economics and information technology. This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.</p>

                    <div className="bg-[#f5f5f5] border-l-orange border-l-[3px] rounded-br-lg relative max-xl:w-full">
                        <p className="font-Amiri text-3xl text-slightGrey w-10/12 leading-tight py-7 pl-9">Best Counsalting Solutions since 2002.</p>
                        <Image src={quote} alt='icone de guillemet' className="w-20 absolute -top-3 right-0" />
                    </div>
                </div>

                <div>
                    <Image src={man} alt="dessin d'une personne les bras levé" className='relative top-10 left-32' />
                    <Image src={line} alt="ligne de décoration" className='absolute top-48 right-20 lineOfferAnimation' />
                    <Image src={twitter} alt="icone de twitter" className='absolute top-48 right-20 twitterOfferAnimation' />
                    <Image src={facebook} alt="icone de facebook" className='absolute top-52 right-20 facebookOfferAnimation' />
                    <Image src={pinterest} alt="icone de pinterest" className='absolute top-56 right-20 pinterestOfferAnimation' />
                </div>
            </div>
        </section>
    )
}