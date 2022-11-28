import Head from "next/head"
import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faComment } from "@fortawesome/free-regular-svg-icons"
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons"

import HeaderSecond from '../../../components/HeaderSecond'
import Footer from "../../../components/Footer"
import StandardArticle from "../../../components/BLOG/StandardArticle"
import AsideArticle from "../../../components/BLOG/AsideArticle"

import people from '../../../public/assets/BLOG/SingleLayouts/people.jpg'


export default function ImageFirst() {
    return(
        <div class='font-NunitoSans'>
            <Head>
                <title>ZikZag | Image First</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            <main>
                <section className="bg-singleLayoutsStandardBackground bg-cover bg-no-repeat text-center text-white">
                    <h1 className="font-Amiri text-6xl pt-60 mb-6">Blog Post</h1>
                    <p className="font-semibold text-sm pb-48 z-10"><span className="opacity-50">HOME &gt; ANALYSIS &gt;</span> AUTOMATION NATION: WHOSE JOB IS NEXT?</p>
                </section>


                <div className='w-[62%] m-auto mt-12 flex justify-between min-w-[1180px] max-xl:flex-col max-xl:items-center max-xl:pb-40 max-xl:min-w-fit'>
                    <div className='w-[74%] max-xl:w-full'>
                        <div className='mb-10 max-xl:w-[90%] m-auto'>
                            <Image src={people} alt="femme en train d'écrire" className='rounded-xl' />


                            <div className='bg-orange flex flex-col -mb-4 items-center justify-center rounded w-[60px] ml-auto relative right-8 -top-8 right-0 py-0.5 mb-7 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]'>
                                <p className='text-white font-Amiri text-[26px]'>24</p>
                                <p className='text-white text-xs font-semibold relative bottom-2'>FEB</p>
                            </div>

                            <p className='font-semibold mb-3 text-[#989898]'>ANALYSIS _ NEWS</p>
                            <h1 className='font-Amiri text-[42px]'>Automation Nation: Whose Job Is Next?</h1>

                            <div className='flex 650-850:min-w-[470px] 650:min-w-[300px] 650:flex-col'>
                                <div className='flex items-center mr-8 650:mb-3'>
                                    <FontAwesomeIcon icon={faUser} className='w-3 mr-2 text-[#989898]' />
                                    <p className='font-semibold text-[#989898]'>By Kate Black</p>
                                </div>

                                <div className='flex items-center mr-auto 650:mb-3'>
                                    <FontAwesomeIcon icon={faComment} className='w-3 mr-2 text-[#989898]' />
                                    <p className='font-semibold text-[#989898]'>2 Comments</p>
                                </div>

                                <div className='flex items-center rounded bg-greyBackground py-0.5 px-2.5 650:mb-3 650:w-[60px]'>
                                    <FontAwesomeIcon icon={faHeart} className='w-3 mr-1 text-[#989898]' />
                                    <p className='font-semibold text-[#989898]'>8</p>
                                </div>

                                <div className='flex items-center rounded bg-greyBackground py-0.5 px-2.5 ml-2 650:mb-3 650:w-[60px] 650:ml-0'>
                                    <FontAwesomeIcon icon={faEye} className='w-3 mr-1 text-[#616161]' />
                                    <p className='font-semibold text-[#989898]'>100</p>
                                </div>
                            </div>
                        </div>

                        <StandardArticle />
                    </div>

                    <AsideArticle />
                </div>
            </main>

            <Footer />
        </div>
    )
}