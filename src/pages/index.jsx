import Head from 'next/head'

import HeaderSecond from '../components/HeaderSecond'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import WidgetTheme from '../components/WidgetTheme'
import WidgetColor from '../components/WidgetColor'

import Landing01 from '../components/Home01/01Landing'
import AboutHome01 from '../components/Home01/02About'
import OfferHome01 from '../components/Home01/03Offer'
import BenefitsHome01 from '../components/Home01/04Benefits'
import StrategyHome01 from '../components/Home01/05Strategy'
import SwiperHome01 from '../components/Home01/06Swiper'
import VisionHome01 from '../components/Home01/07Vision'
import Testimonial from '../components/Home02/09Testimonial'
import BlogHome01 from '../components/Home01/08Blog'

export default function Home01() {
    return(
        <div className='font-NunitoSans'>
            <Head>
                <title>ZikZag | Home 01</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            <main>
                <Landing01 />

                <AboutHome01 />

                <OfferHome01 />
                
                <BenefitsHome01 />

                <StrategyHome01 />

                <SwiperHome01 />

                <VisionHome01 />

                <Testimonial />

                <BlogHome01 />
            </main>

            <BackToTop />

            <WidgetColor />

            <WidgetTheme />

            <Footer />            
        </div>

    )
}