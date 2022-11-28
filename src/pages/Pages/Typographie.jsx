import Head from 'next/head'

import HeaderSecond from '../../components/HeaderSecond'
import Footer from '../../components/Footer'
import WidgetTheme from '../../components/WidgetTheme'

import HeadingsTypography from '../../components/PAGES/Typography/01Headings'
import TextTypography from '../../components/PAGES/Typography/02Text'
import HighlightersTypography from '../../components/PAGES/Typography/03Highlighters'
import DropcapsTypography from '../../components/PAGES/Typography/04Dropcaps'
import QuoteTypography from '../../components/PAGES/Typography/05Quote'
import ListingsTypography from '../../components/PAGES/Typography/06Listings'


export default function About() {
    return (
        <div className='font-NunitoSans'>
            <Head>
                <title>ZikZag | Typography</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            <main>
                <section className="bg-typographyTeamBackground bg-no-repeat text-center text-white">
                    <h1 className="font-Amiri text-6xl pt-60 mb-6">Typography</h1>
                    <p className="font-semibold text-sm pb-48 z-10"><span className="opacity-50">HOME &gt;</span> TYPOGRAPHY</p>
                </section>

                <div className='w-[60%] max-xl:w-[90%] m-auto mb-40'>
                    <HeadingsTypography />

                    <TextTypography />

                    <HighlightersTypography />

                    <DropcapsTypography />

                    <QuoteTypography />

                    <ListingsTypography />
                </div>
            </main>

            <WidgetTheme />

            <Footer />
        </div>  
    )
}