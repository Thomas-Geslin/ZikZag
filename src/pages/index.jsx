import Head from 'next/head'


import Header from '../components/Header'
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

import Landing from '../components/Home/01Landing';
import Division from '../components/Home/02SlideDivison';
import Benefits from '../components/Home/03Benefits';
import Offer from '../components/Home/04Offer';
import Philosophy from '../components/Home/05Philosophy';
import Business from '../components/Home/06Business';
import SwiperGoal from '../components/Home/07SwiperGoal';
import Consultancy from '../components/Home/08Consultancy';
import Testimonial from '../components/Home/09Testimonial';


export default function Home() {
  return (
    <div>
      <Head>
        <title>ZikZag | Home 2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Landing />

        <Division />

        <Benefits />

        <Offer />

        <Philosophy />

        <Business />

        <SwiperGoal />

        <Consultancy />

        <Testimonial />
      </main>

      <BackToTop />

      <Footer />
    </div>
  )
}
