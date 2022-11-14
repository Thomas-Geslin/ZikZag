import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import HeaderSecond from '../components/HeaderSecond'
import Footer from '../components/Footer'

import back404 from '../public/assets/PAGES/Page404/404.png'

export default function FourOhFour() {
  return (
    <div>
        <Head>
            <title>ZikZag | 404 Page</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="../"/>
        </Head>

        <HeaderSecond />

        <main>
            <section className="bg-404Background bg-no-repeat text-center text-white">
                <h1 className="font-Amiri text-6xl pt-60 mb-6">Error Page</h1>
                <p className="font-semibold text-sm pb-48 z-10"><span className="opacity-50">HOME &gt;</span> ERROR 404</p>
            </section>


            <section className='flex flex-col items-center shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] w-2/3 m-auto rounded-t-2xl py-32 relative -top-20 -mb-20 bg-white'>
                <Image src={back404} alt='arrière plan' />
                <h1 className='font-Amiri text-slightGrey text-5xl pt-10 pb-4'>Sorry We Can&apos;t Find That Page!</h1>
                <p className='text-greyText text-lg'>The page you are looking for was moved, removed, renamed or never existed.</p>

                <div className='pt-4 relative mt-6 mb-5'>
                    <p className='bg-greyBackground text-[#7e7e7e] rounded w-[450px] p-3 850:w-[180px]'>Search ...</p><div className='absolute bottom-1 right-1 bg-darkBlueBackground p-3 rounded'><FontAwesomeIcon icon={faMagnifyingGlass} className='w-4 text-white' /></div>
                </div>

                <Link href="/"><button className='bg-orange rounded text-sm text-white font-semibold px-7 py-4'>TAKE ME HOME</button></Link>
            </section>
        </main>

        <Footer />
    </div>
  )
    
}