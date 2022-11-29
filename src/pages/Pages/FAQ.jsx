import Head from 'next/head'

import HeaderSecond from '../../components/HeaderSecond'
import Footer from '../../components/Footer'
import WidgetTheme from '../../components/WidgetTheme'

import HelpFAQ from '../../components/PAGES/FAQ/01Help'
import ConsultancyFAQ from '../../components/PAGES/FAQ/02Consultancy'


export default function FAQ() {
    return (
        <div className='font-NunitoSans'>
            <Head>
                <title>ZikZag | FAQ</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            <main className='relative z-10'>
                <section className="bg-faqTeamBackground bg-no-repeat text-center text-white">
                    <h1 className="font-Amiri text-6xl pt-60 mb-6">FAQ</h1>
                    <p className="font-semibold text-sm pb-48 z-10"><span className="opacity-50">HOME &gt;</span> FAQ</p>
                </section>

                <div className='w-[60%] m-auto max-xl:w-[90%] mb-40'>
                    <HelpFAQ />

                    <ConsultancyFAQ />
                </div>
            </main>

            <WidgetTheme />

            <Footer />
        </div>  
    )
}