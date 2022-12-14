import Head from 'next/head'

import HeaderSecond from '../../components/HeaderSecond'
import Footer from '../../components/Footer'
import WidgetTheme from '../../components/WidgetTheme'

import AboutNotice from '../../components/PAGES/About/01AboutNotice'
import AboutLanding from '../../components/PAGES/About/02AboutLanding'
import Strategy from '../../components/PAGES/About/03Strategy'
import SwiperAbout from '../../components/PAGES/About/04SwiperAbout'
import Testimonial from '../../components/Home02/09Testimonial'


export default function About() {
    return (
        <div className='font-NunitoSans'>
            <Head>
                <title>ZikZag | About</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            <main className='relative z-10'>
                <AboutNotice />

                <AboutLanding />

                <Strategy />

                <SwiperAbout />

                <Testimonial />
            </main>

            <WidgetTheme />

            <Footer />
        </div>
    )
}