import Head from "next/head"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faComment } from "@fortawesome/free-regular-svg-icons"
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons"

import HeaderSecond from '../../../components/HeaderSecond'
import Footer from "../../../components/Footer"
import StandardArticle from "../../../components/BLOG/StandardArticle"
import AsideArticle from "../../../components/BLOG/AsideArticle"


export default function Quote() {
    return(
        <div class='font-NunitoSans'>
            <Head>
                <title>ZikZag | Blog Quote</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            <main>
                <section className='bg-quoteStandardBackground bg-cover bg-top bg-no-repeat pt-80 px-[19%] text-white 430-850:px-[5%] 430:px-[5%]'>
                    <div className='bg-orange flex flex-col items-center justify-center rounded w-[60px] py-0.5 mb-7'>
                        <p className='font-Amiri text-[26px]'>24</p>
                        <p className='text-xs font-semibold relative bottom-2'>FEB</p>
                    </div>

                    <p className='font-semibold mb-6'>FINANCE</p>
                    <h1 className='font-Amiri text-6xl leading-[80px] 430:text-4xl'>The Disappointing Reality of Sustainability Efforts</h1>

                    <span className='w-[62%] h-px bg-[#6e6f6f] absolute mt-10 850:w-[90%]'></span>

                    <div className='flex mt-16 pb-8 650-850:min-w-[470px] 650:min-w-[300px] 650:flex-col'>
                        <div className='flex items-center mr-8 650:mb-3'>
                            <FontAwesomeIcon icon={faUser} className='w-3 mr-2' />
                            <p className='font-semibold'>By Kate Black</p>
                        </div>

                        <div className='flex items-center mr-auto 650:mb-3'>
                            <FontAwesomeIcon icon={faComment} className='w-3 mr-2' />
                            <p className='font-semibold'>2 Comments</p>
                        </div>

                        <div className='flex items-center rounded bg-darkBlueBackground py-0.5 px-2.5 650:mb-3 650:w-[60px]'>
                            <FontAwesomeIcon icon={faHeart} className='w-3 mr-1' />
                            <p className='font-semibold'>8</p>
                        </div>

                        <div className='flex items-center rounded bg-darkBlueBackground py-0.5 px-2.5 ml-2 650:mb-3 650:ml-0 650:w-[60px]'>
                            <FontAwesomeIcon icon={faEye} className='w-3 mr-1' />
                            <p className='font-semibold'>74</p>
                        </div>
                    </div>
                </section>


                <div className='w-[62%] m-auto mt-12 flex justify-between min-w-[1180px] max-xl:flex-col max-xl:items-center max-xl:pb-40 max-xl:min-w-fit'>
                    <div className='w-[74%] max-xl:w-full'>
                        <div className='mb-10 max-xl:w-[90%] m-auto'>
                            <svg viewBox="0 0 62.4 44.8" className='w-14 mb-10'>
                                <path style={{ fill: '#ff4a17' }} class="st0" d="M40.8,30.6c-0.9,2.3-1.7,3.9-0.9,6.5c0.7,2.3,2.5,3.9,4.5,5.2c3.7,2.4,8.7,3.6,12.6,0.9
                                c3.8-2.5,5.8-7.3,4.4-11.7c-0.4-1.3-1.2-2.4-2.2-3.2c-2.1-3.2-6.1-4.5-9.9-4.3c-2.2,0.1-4.5,0.8-6.2,2.4c-0.6,0.6-1.1,1.2-1.6,2
                                c-0.2,0.4-0.6,1.4-0.8,2C40.7,30.7,40.6,31.3,40.8,30.6z"></path>
                                <path style={{ fill: '#ff4a17' }} class="st0" d="M10,41.2c4.6,3.3,12.4,4.1,15.9-1.2c1-1.5,1.5-3.1,1.6-4.6c0.6-3-0.5-6-2.8-8c-0.5-0.7-1.1-1.3-1.6-2
                                c-1.8-2-4.9-2.2-7.2-1c-2.6,0-5.2,0.7-7.3,2.7C4.1,31.2,5.5,37.9,10,41.2z"></path>
                                <path class="st1" d="M42,36.2c-7.2-11.4,14.9-17.4,18.7-4.6c1.7,5.8-2.8,11.2-8.6,11.6c-3.9,0.2-7.6-1.4-10.5-4.1
                                C29,27.4,38.5,10.5,48.7,1.3c0.7-0.7-0.3-1.7-1.1-1.1C39.2,7.9,31.1,19.6,35,31.5c2.8,8.4,12.2,16.1,21.3,12
                                c9.3-4.1,7.1-16.5-1.4-20.1c-8.5-3.5-20.1,4-14.3,13.4C41.2,37.8,42.5,37,42,36.2L42,36.2z"></path>
                                <path class="st1" d="M8,36.2c-7.2-11.4,14.9-17.4,18.7-4.6c1.7,5.8-2.8,11.2-8.6,11.6c-3.9,0.2-7.6-1.4-10.5-4.1
                                C-5,27.4,4.5,10.5,14.7,1.3c0.7-0.7-0.3-1.7-1.1-1.1C5.2,7.9-2.9,19.6,1,31.5c2.8,8.4,12.2,16.1,21.3,12
                                c9.3-4.1,7.1-16.5-1.4-20.1c-8.5-3.5-20.1,4-14.3,13.4C7.2,37.8,8.5,37,8,36.2L8,36.2z"></path>
                            </svg>
                            
                            <p className='text-slightGrey font-Amiri text-2xl mb-4'>“There are no secrets to success. It is the result of preparation, hard work, and learning failure.”</p>
                            <p className='font-semibold text-orange'>- Oliver Sandero</p>
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