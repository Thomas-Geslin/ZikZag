import Head from "next/head"
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faComment } from "@fortawesome/free-regular-svg-icons"
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons"

import HeaderSecond from '../../../components/HeaderSecond'
import Footer from "../../../components/Footer"
import StandardArticle from "../../../components/BLOG/StandardArticle"
import AsideArticle from "../../../components/BLOG/AsideArticle"

import link from '../../../public/assets/BLOG/BlogSingle/Link/link.svg'


export default function LinkBlog() {
    return(
        <div class='font-NunitoSans'>
            <Head>
                <title>ZikZag | Blog Link</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            <main>
                <section className='bg-linkStandardBackground bg-cover bg-top bg-no-repeat pt-80 px-[19%] text-white'>
                    <div className='bg-orange flex flex-col items-center justify-center rounded w-[60px] py-0.5 mb-7'>
                        <p className='font-Amiri text-[26px]'>24</p>
                        <p className='text-xs font-semibold relative bottom-2'>FEB</p>
                    </div>

                    <p className='font-semibold mb-6'>FINANCE</p>
                    <h1 className='font-Amiri text-6xl'>Getting Teamwork Right at the Top</h1>

                    <span className='w-[62%] h-px bg-[#6e6f6f] absolute mt-10'></span>

                    <div className='flex mt-16 pb-8'>
                        <div className='flex items-center mr-8'>
                            <FontAwesomeIcon icon={faUser} className='w-3 mr-2' />
                            <p className='font-semibold'>By Kate Black</p>
                        </div>

                        <div className='flex items-center mr-auto'>
                            <FontAwesomeIcon icon={faComment} className='w-3 mr-2' />
                            <p className='font-semibold'>2 Comments</p>
                        </div>

                        <div className='flex items-center rounded bg-darkBlueBackground py-0.5 px-2.5'>
                            <FontAwesomeIcon icon={faHeart} className='w-3 mr-1' />
                            <p className='font-semibold'>9</p>
                        </div>

                        <div className='flex items-center rounded bg-darkBlueBackground py-0.5 px-2.5 ml-2'>
                            <FontAwesomeIcon icon={faEye} className='w-3 mr-1' />
                            <p className='font-semibold'>79</p>
                        </div>
                    </div>
                </section>


                <div className='mx-[19%] mt-12 flex justify-between'>
                    <div className='w-[74%]'>
                        <div className='mb-10'>
                            <Image src={link} alt='icone de lien' />
                            <Link href='/'><p className='font-Amiri text-slightGrey text-2xl mt-6 hover:text-orange ease-in-out duration-300'>Building a Workforce for Digital.</p></Link>
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