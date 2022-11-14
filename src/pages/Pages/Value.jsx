import Head from "next/head"

import HeaderSecond from '../../components/HeaderSecond'
import Footer from "../../components/Footer"
import VisionValue from "../../components/PAGES/Value/01Vision"
import OfferValue from "../../components/PAGES/Value/02Offer"
import BenefitsValue from "../../components/PAGES/Value/03Benefits"
import WhatOfferValue from "../../components/PAGES/Value/04WhatOffer"


export default function SingleTeam() {
    return(
        <div>
            <Head>
                <title>ZikZag | OurValue</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            <main>
                <section className="bg-valueTeamBackground bg-no-repeat text-center text-white">
                    <h1 className="font-Amiri text-6xl pt-60 mb-6">Value</h1>
                    <p className="font-semibold text-sm pb-48 z-10"><span className="opacity-50">HOME &gt;</span> VALUE</p>
                </section>

                <VisionValue />

                <OfferValue />

                <BenefitsValue />

                <WhatOfferValue />
            </main>

            <Footer />
        </div>
    )
}