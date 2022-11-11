import Head from 'next/head'

import HeaderSecond from '../components/HeaderSecond'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

import LandingHome03 from '../components/Home03/01Landing'
import BenefitsHome03 from '../components/Home03/02Benefits'
import StrategyHome01 from '../components/Home01/05Strategy'
import DivisionHome03 from '../components/Home03/03Division'
import PricingHome03 from '../components/Home03/04Pricing'
import ContactHome03 from '../components/Home03/05Contact'

export default function Home03() {
    return(
        <div>
            <Head>
                <title>ZikZag | Home 03</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />
            
            <main>
                <LandingHome03 />

                <BenefitsHome03 />

                <StrategyHome01 />

                <DivisionHome03 />

                <PricingHome03 />

                <ContactHome03 />
            </main>

            <BackToTop />

            <Footer />
        </div>
    )
}