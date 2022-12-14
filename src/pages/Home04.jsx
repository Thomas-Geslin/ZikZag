import Head from 'next/head'

import HeaderHome04 from '../components/Home04/HeaderHome04'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import WidgetTheme from '../components/WidgetTheme'
import WidgetColor from '../components/WidgetColor'

import LandingHome04 from '../components/Home04/01Landing'
import AboutHome04 from '../components/Home04/02About'
import OfferHome04 from '../components/Home04/03Offer'
import VisionHome04 from '../components/Home04/04Vision'
import FeatureHome04 from '../components/Home04/05Features'
import WhatOfferHome04 from '../components/Home04/06WhatOffer'
import BenefitsHome04 from '../components/Home04/07Benefits'
import BlogHome01 from '../components/Home01/08Blog'

export default function Home04() {
    return(
        <div className='font-NunitoSans'>
            <Head>
                <title>ZikZag | Home 04</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderHome04 />
            
            <main>
                <LandingHome04 />

                <AboutHome04 />

                <OfferHome04 />

                <VisionHome04 />

                <FeatureHome04 />

                <WhatOfferHome04 />

                <BenefitsHome04 />

                <BlogHome01 />
            </main>

            <WidgetTheme />

            <WidgetColor />

            <BackToTop />

            <Footer />
        </div>
    )
}