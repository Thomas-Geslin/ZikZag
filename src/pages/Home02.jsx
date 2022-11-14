import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

import Landing from '../components/Home02/01Landing';
import Division from '../components/Home02/02SlideDivison';
import Benefits from '../components/Home02/03Benefits';
import Offer from '../components/Home02/04Offer';
import Philosophy from '../components/Home02/05Philosophy';
import Business from '../components/Home02/06Business';
import SwiperGoal from '../components/Home02/07SwiperGoal';
import Consultancy from '../components/Home02/08Consultancy';
import Testimonial from '../components/Home02/09Testimonial';


export default function Home() {
  return (
    <div className='font-NunitoSans'>
      <Head>
        <title>ZikZag | Home 2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../" />
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