import Image from "next/image"
import Head from "next/head"

import HeaderSecond from '../../components/HeaderSecond'
import Footer from '../../components/Footer'
import TeamOurTeam from "../../components/PAGES/Team/01Team"
import OfferTeam from "../../components/PAGES/Team/02Offer"
import BenefitsTeam from "../../components/PAGES/Team/03Benefits"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

import logo from "../../public/assets/Home02/logo_consultancy.png"
import orangeSquare from '../../public/assets/Home02/consultancy_widget_background.png'


export default function OurTeam() {
    return(
        <div>
            <Head>
                <title>ZikZag | OurTeam</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            <main>
                <section className="bg-ourTeamBackground bg-no-repeat text-center text-white">
                    <h1 className="font-Amiri text-6xl pt-60 mb-6">Our Teams</h1>
                    <p className="font-semibold text-sm pb-48 z-10"><span className="opacity-50">HOME &gt;</span> OUR TEAM</p>
                </section>

                <TeamOurTeam />

                <OfferTeam />
                
                <section className='-mb-20 relative -top-32'>
                    <div className='bg-darkBlueBackground w-10/12 m-auto rounded-xl relative text-center max-xl:flex max-xl:flex-col-reverse max-xl:items-center max-xl:w-full'>
                        <div className='absolute -right-20 -top-7 max-xl:relative max-xl:right-0'>
                        <Image src={orangeSquare} alt='carré orange' className='w-80' />
                        <div className='text-white absolute top-0 right-12 flex flex-col justify-center items-center'>
                            <div className='p-4 w-14 rounded-full bg-white'><FontAwesomeIcon icon={faPhoneVolume} className='relative left-px bottom-px w-6 -rotate-45 text-orange' /></div>
                            <p className='font-Amiri text-3xl my-4'>+1 800 123 456 789</p>
                            <p className='font-semibold'>OR CALL US 24/7</p>
                        </div>
                        </div>

                        <div className='mb-20'>
                        <Image src={logo} alt='logo de entreprise' className='m-auto pt-20 mb-10' />
                        <p className='font-Amiri text-white text-5xl mb-3'>Get a Free Counsultancy Right Now!</p>
                        <p className='text-[#dddfe1] text-[20px] px-7'>We help you see the world differently, discover opportunities you may never have imagined.</p>
                        <button className='text-white font-semibold bg-orange rounded px-8 py-4 border border-solid border-orange hover:bg-transparent ease-in duration-300 mt-12 mb-16'>GET IN TOUCH</button>
                        </div>
                    </div>
                </section>

                <BenefitsTeam />
            </main>

            <Footer />
        </div>
    )
}