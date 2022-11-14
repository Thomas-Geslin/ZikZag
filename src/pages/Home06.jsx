import Head from 'next/head'

import HeaderHome06 from '../components/Home06/HeaderHome06';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop'

import LandingHome06 from '../components/Home06/01Landing';
import OfferHome06 from '../components/Home06/02Offer';
import VisionHome06 from '../components/Home06/03Vision';
import SuccessHome06 from '../components/Home06/04Success';
import DivisionHome06 from '../components/Home06/05Division';
import PhilosophyHome06 from '../components/Home06/06Philosophy';
import HelpHome06 from '../components/Home06/07Help';
import BlogHome01 from '../components/Home01/08Blog';


export default function Home06() {
    return(
        <section>
            <Head>
                <title>ZikZag | Home 6</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../" />
            </Head>

            <HeaderHome06 />

            <main>
                <LandingHome06 />

                <OfferHome06 />

                <VisionHome06 />
                
                <SuccessHome06 />

                <DivisionHome06 />

                <PhilosophyHome06 />

                <HelpHome06 />

                <BlogHome01 />
            </main>

            <BackToTop />

            <Footer />
        </section>
    )
}