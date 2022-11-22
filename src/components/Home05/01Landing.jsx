import Image from "next/image"

import background from '../../public/assets/Home05/landing_background.png'
import square from '../../public/assets/Home05/landing_square.png'
import line1 from '../../public/assets/Home05/landing_line_1.png'
import line2 from '../../public/assets/Home05/landing_line_2.png'
import phone from '../../public/assets/footer/icon_phone.png'

import dynamic from '../../public/assets/Home05/landing_partner_1.png'
import okta from '../../public/assets/Home05/landing_partner_2.png'
import max from '../../public/assets/Home05/landing_partner_3.png'
import solana from '../../public/assets/Home05/landing_partner_4.png'
import deters from '../../public/assets/Home05/landing_partner_5.png'
import honey from '../../public/assets/Home05/landing_partner_6.png'


export default function LandingHome05() {
    return(
        <section className='pt-48 relative'>
            <Image src={line1} alt='ligne de décoration' className='absolute top-0 left-0' />
            <Image src={line2} alt='ligne de décoration' className='absolute bottom-0 right-0' />

            <div className='flex items-end justify-end mr-8 min-3xl:justify-center'>
                <div className='relative w-[30%] mb-32 mr-20 min-3xl:ml-32'>
                    <p className='absolute -top-56 right-32 text-greyBackground text-[300px] font-Amiri'>Start</p>
                    <p className='text-sm font-bold text-slightGrey relative'>PERFECT SOLUTION FOR YOUR COMPANY</p>
                    <h1 className='font-Amiri text-[56px] leading-[60px] mt-6 relative'>We Champion the Striking to Accomplish the <span className='text-orange'>Exceptional</span></h1>
                    <p className='text-greyText leading-7 mt-4'>This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.</p>

                    <span className='absolute h-px bg-[#e5e5e5] mt-12 w-full'></span>

                    <div className='flex items-center mt-24'>
                        <button className="text-sm font-bold bg-orange py-5 px-10 rounded text-white hover:bg-darkBlueBackground ease-in-out duration-300 mr-6">WORK TOGETHER</button>
                        <div className='p-5 bg-[#ffede7] rounded-full mr-6'><Image src={phone} alt='icone de téléphone' className='w-6' /></div>
                        <div>
                            <p className='text-sm font-bold text-[#8a8a8a] mb-1.5'>CONTACT US DAILY</p>
                            <p className='font-bold'>+1 (800) 123 456 789</p>
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <Image src={square} alt='carré de décoration' className='absolute top-0' />
                    <Image src={background} alt='personne en train de travailler' className='relative Home05BackgroundAnimation' />
                </div>
            </div>

            <div className='flex justify-center mt-12 m-auto'>
                <div className="bg-dynamicBkGrey bg-no-repeat bg-center py-12 rounded-md px-14 mt-5 mb-10 group hover:cursor-pointer">
                    <Image src={dynamic} alt="logo de l'entreprise solana" className='relative top-1 m-auto opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
                </div>

                <div className="bg-oktaBkGrey bg-no-repeat bg-center rounded-md py-12 px-14 mt-5 mb-10 group hover:cursor-pointer">
                    <Image src={okta} alt="logo de l'entreprise solana" className='relative top-0.5 m-auto opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
                </div>

                <div className="bg-maxBkGrey bg-no-repeat bg-center rounded-md py-12 px-14 mt-5 mb-10 group hover:cursor-pointer">
                    <Image src={max} alt="logo de l'entreprise solana" className='relative top-0.5 m-auto opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
                </div>

                <div className="bg-solanaBkGrey bg-no-repeat bg-center rounded-md py-12 px-20 mt-5 mb-10 group hover:cursor-pointer">
                    <Image src={solana} alt="logo de l'entreprise honey hosting" className='relative -top-0 m-auto relative top-1 opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
                </div>

                <div className="bg-detersBkGrey bg-no-repeat bg-center rounded-md py-12 px-16 mt-5 mb-10 group hover:cursor-pointer">
                    <Image src={deters} alt="logo de l'entreprise okta" className='relative m-auto relative top-1 opacity-0 group-hover:opacity-100 ease-in-out duration-300' />
                </div>

                <div className="bg-honeyBkGrey bg-no-repeat bg-center rounded-lg py-12 px-20 mt-5 mb-10 group hover:cursor-pointer">
                    <Image src={honey} alt="logo de l'entreprise dynamix" className='relative m-auto relative top-1 opacity-0 group-hover:opacity-100 ease-in duration-300' />
                </div>
            </div>
        </section>
    )
}