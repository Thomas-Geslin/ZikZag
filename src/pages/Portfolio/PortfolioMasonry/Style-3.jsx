import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Awesome Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import HeaderSecond from '../../../components/HeaderSecond'
import Footer from "../../../components/Footer"

import slide1 from '../../../public/assets/PORTFOLIO/Grid/slide_1.jpg'
import slide2 from '../../../public/assets/PORTFOLIO/Grid/slide_2.jpg'
import slide3 from '../../../public/assets/PORTFOLIO/Grid/slide_3_long_2.jpg'
import slide4 from '../../../public/assets/PORTFOLIO/Grid/slide_4.jpg'
import slide5 from '../../../public/assets/PORTFOLIO/Grid/slide_5.jpg'
import slide6 from '../../../public/assets/PORTFOLIO/Grid/slide_6_long.jpg'
import slide7 from '../../../public/assets/PORTFOLIO/Grid/slide_7_long_2.jpg'
import slide8 from '../../../public/assets/PORTFOLIO/Grid/slide_8.jpg'
import slide9 from '../../../public/assets/PORTFOLIO/Grid/slide_9.jpg'
import slide10 from '../../../public/assets/PORTFOLIO/Grid/slide_10.jpg'
import slide11 from '../../../public/assets/PORTFOLIO/Grid/slide_11.jpg'
import slide12 from '../../../public/assets/PORTFOLIO/Grid/slide_12_long.jpg'


// Keyframe for smooth reveal
const revealBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;



export default function PortfolioStyle2() {
    const [loadMore, setLoadMore] = useState(8);
    const [loading, setLoading] = useState(false);
    const [categorieFilter, setCategorieFilter] = useState("all");

    function loadMoreArticle() {
        setLoading(true);
        setTimeout(() => {
            setLoadMore(loadMore + 4);
            setLoading(false);
        }, 1500)
    };

    function changeActivefilter(categorieSelection) {
        let target = document.getElementById(categorieSelection);
        let remove = document.querySelector('.filterPortfolioActive');
        remove.classList.remove('filterPortfolioActive');
        target.classList.add('filterPortfolioActive');
    }   

    function changeCategorie(categorieSelection) {
        setCategorieFilter(categorieSelection);
    }
    
    function filterCategorie(categorieSelection) {
        changeActivefilter(categorieSelection);
        changeCategorie(categorieSelection);
    }


    return(
        <div class='font-NunitoSans'>
            <Head>
                <title>ZikZag | Portfolio Style 3</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            <main>
                <section className="bg-singlePortfolioStandardBackground bg-cover bg-no-repeat text-center text-white">
                    <h1 className="font-Amiri text-6xl pt-60 mb-6">Portfolio Masonry 3</h1>
                    <p className="font-semibold text-sm pb-48 z-10"><span className="opacity-50">HOME &gt; </span> PORTFOLIO MASONRY 3</p>
                </section>

                <div className='w-[62%] min-w-[1180px] m-auto text-center mb-40 max-xl:mx-[5%] max-xl:min-w-fit'>
                    <h2 className='text-orange font-bold relative mb-2 mt-20 w-52 m-auto'><span className='absolute bottom-1 left-1.5 bg-orange h-0.5 w-2'></span>BUSINESS PORTFOLIO<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h3 className='text-slightGrey text-5xl font-Amiri leading-tight mb-3'>Our Case Studies</h3>
                    <p className='text-greyText text-lg w-7/12 m-auto'>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>


                    <div className='flex justify-between mt-14 w-2/3 m-auto 850:flex-col 850:items-center 850:w-full'>
                        <button onClick={() => filterCategorie('all')} id='all' className="font-bold text-sm py-1 px-3.5 filterPortfolioActive 850:mb-3">ALL WORKS</button>
                        <button onClick={() => filterCategorie('corporate')} id='corporate' className="font-bold text-sm py-1 px-3.5 850:mb-3">CORPORATE</button>
                        <button onClick={() => filterCategorie('finance')} id='finance' className="font-bold text-sm py-1 px-3.5 850:mb-3">FINANCE</button>
                        <button onClick={() => filterCategorie('marketing')} id='marketing' className="font-bold text-sm py-1 px-3.5 850:mb-3">MARKETING</button>
                        <button onClick={() => filterCategorie('startup')} id='startup' className="font-bold text-sm py-1 px-3.5 850:mb-3">STARTUP</button>
                        <button onClick={() => filterCategorie('strategy')} id='strategy' className="font-bold text-sm py-1 px-3.5">STRATEGY</button>
                    </div>


                    <div className ='flex justify-between 1050:flex-col 1050:items-center'>
                        <div className='mt-10 w-[48%] 1050:w-full'>
                            <Reveal keyframes={revealBottom} duration={600} triggerOnce className="relative">
                            <Link href='/Portfolio/Single'>
                            <div className='group relative'>
                                <Image src={slide12} alt="photo d'entreprise" className='rounded-xl' />
                                <div className='absolute bottom-14 left-4 text-white'>
                                    <p className='font-Amiri text-3xl bg-orange  px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500 text-left'>Integrated Innovations</p>
                                    <p className='absolute font-semibold top-14 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_ STARTUP _</p>
                                </div>
                            </div>
                            </Link>
                            </Reveal>
                        </div> 
                        
                        <div className='mt-10 w-[24%] 1050:w-full'>
                            <Reveal keyframes={revealBottom} duration={600} delay={200} triggerOnce className="relative">
                            <Link href='/Portfolio/Single'>
                            <div className='group relative'>
                                <Image src={slide11} alt="photo d'entreprise" className='rounded-xl' />
                                <div className='absolute bottom-14 left-4 text-white'>
                                    <p className='w-[92%] font-Amiri text-3xl bg-orange  px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500'>Differentiated Plateform</p>
                                    <p className='absolute font-semibold top-24 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_ FINANCE _ STRATEGY _</p>
                                </div>
                            </div>
                            </Link>
                            </Reveal>
                        </div> 

                        <div className='mt-10 w-[24%] 1050:w-full'>
                            <Reveal keyframes={revealBottom} duration={600} delay={400} triggerOnce className="relative">
                            <Link href='/Portfolio/Single'>
                            <div className='group relative'>
                                <Image src={slide10} alt="photo d'entreprise" className='rounded-xl' />
                                <div className='absolute bottom-14 left-4 text-white'>
                                    <p className='w-[92%] font-Amiri text-3xl bg-orange  px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500 text-left'>Corporate Finance</p>
                                    <p className='absolute font-semibold top-24 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_ MARKETING _ STARTUP _</p>
                                </div>
                            </div>
                            </Link>
                            </Reveal>
                        </div> 
                    </div> 


                    <div className ='flex justify-between 1050:flex-col 1050:items-center'>
                        <div className='mt-10 w-[24%] 1050:w-full'>
                            <Reveal keyframes={revealBottom} duration={600} triggerOnce className="relative">
                            <Link href='/Portfolio/Single'>
                            <div className='group relative'>
                                <Image src={slide9} alt="photo d'entreprise" className='rounded-xl' />
                                <div className='absolute bottom-14 left-4 text-white'>
                                    <p className='font-Amiri text-3xl bg-orange  px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500 text-left'>Integrated Innovations</p>
                                    <p className='absolute font-semibold top-14 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_ STARTUP _</p>
                                </div>
                            </div>
                            </Link>
                            </Reveal>
                        </div> 

                        <div className='mt-10 w-[24%] 1050:w-full'>
                            <Reveal keyframes={revealBottom} duration={600} delay={200} triggerOnce className="relative">
                            <Link href='/Portfolio/Single'>
                            <div className='group relative'>
                                <Image src={slide8} alt="photo d'entreprise" className='rounded-xl' />
                                <div className='absolute bottom-14 left-4 text-white'>
                                    <p className='w-[92%] font-Amiri text-3xl bg-orange  px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500'>Differentiated Plateform</p>
                                    <p className='absolute font-semibold top-24 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_ FINANCE _ STRATEGY _</p>
                                </div>
                            </div>
                            </Link>
                            </Reveal>
                        </div> 

                        <div className='mt-10 w-[48%] 1050:w-full'>
                            <Reveal keyframes={revealBottom} duration={600} delay={400} triggerOnce className="relative">
                            <Link href='/Portfolio/Single'>
                            <div className='group relative'>
                                <Image src={slide7} alt="photo d'entreprise" className='rounded-xl' />
                                <div className='absolute bottom-14 left-4 text-white'>
                                    <p className='w-[92%] font-Amiri text-3xl bg-orange  px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500 text-left'>Corporate Finance</p>
                                    <p className='absolute font-semibold top-24 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_ MARKETING _ STARTUP _</p>
                                </div>
                            </div>
                            </Link>
                            </Reveal>
                        </div> 
                    </div> 


                    <div className ='flex justify-between 1050:flex-col 1050:items-center'>
                        <div className='mt-10 w-[48%] 1050:w-full'>
                            <Reveal keyframes={revealBottom} duration={600} triggerOnce className="relative">
                            <Link href='/Portfolio/Single'>
                            <div className='group relative'>
                                <Image src={slide6} alt="photo d'entreprise" className='rounded-xl' />
                                <div className='absolute bottom-14 left-4 text-white'>
                                    <p className='font-Amiri text-3xl bg-orange  px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500 text-left'>Integrated Innovations</p>
                                    <p className='absolute font-semibold top-14 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_ STARTUP _</p>
                                </div>
                            </div>
                            </Link>
                            </Reveal>
                        </div> 

                        <div className='mt-10 w-[24%] 1050:w-full'>
                            <Reveal keyframes={revealBottom} duration={600} delay={200} triggerOnce className="relative">
                            <Link href='/Portfolio/Single'>
                            <div className='group relative'>
                                <Image src={slide5} alt="photo d'entreprise" className='rounded-xl' />
                                <div className='absolute bottom-14 left-4 text-white'>
                                    <p className='w-[92%] font-Amiri text-3xl bg-orange  px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500'>Differentiated Plateform</p>
                                    <p className='absolute font-semibold top-24 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_ FINANCE _ STRATEGY _</p>
                                </div>
                            </div>
                            </Link>
                            </Reveal>
                        </div> 

                        <div className='mt-10 w-[24%] 1050:w-full'>
                            <Reveal keyframes={revealBottom} duration={600} delay={400} triggerOnce className="relative">
                            <Link href='/Portfolio/Single'>
                            <div className='group relative'>
                                <Image src={slide4} alt="photo d'entreprise" className='rounded-xl' />
                                <div className='absolute bottom-14 left-4 text-white'>
                                    <p className='w-[92%] font-Amiri text-3xl bg-orange  px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500 text-left'>Corporate Finance</p>
                                    <p className='absolute font-semibold top-24 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_ MARKETING _ STARTUP _</p>
                                </div>
                            </div>
                            </Link>
                            </Reveal>
                        </div> 
                    </div> 


                    <div className ='flex justify-between 1050:flex-col 1050:items-center'>
                        <div className='mt-10 w-[48%] 1050:w-full'>
                            <Reveal keyframes={revealBottom} duration={600} triggerOnce className="relative">
                            <Link href='/Portfolio/Single'>
                            <div className='group relative'>
                                <Image src={slide3} alt="photo d'entreprise" className='rounded-xl' />
                                <div className='absolute bottom-14 left-4 text-white'>
                                    <p className='font-Amiri text-3xl bg-orange  px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500 text-left'>Integrated Innovations</p>
                                    <p className='absolute font-semibold top-14 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_ STARTUP _</p>
                                </div>
                            </div>
                            </Link>
                            </Reveal>
                        </div> 

                        <div className='mt-10 w-[24%] 1050:w-full'>
                            <Reveal keyframes={revealBottom} duration={600} delay={200} triggerOnce className="relative">
                            <Link href='/Portfolio/Single'>
                            <div className='group relative'>
                                <Image src={slide2} alt="photo d'entreprise" className='rounded-xl' />
                                <div className='absolute bottom-14 left-4 text-white'>
                                    <p className='w-[92%] font-Amiri text-3xl bg-orange  px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500'>Differentiated Plateform</p>
                                    <p className='absolute font-semibold top-24 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_ FINANCE _ STRATEGY _</p>
                                </div>
                            </div>
                            </Link>
                            </Reveal>
                        </div> 

                        <div className='mt-10 w-[24%] 1050:w-full'>
                            <Reveal keyframes={revealBottom} duration={600} delay={400} triggerOnce className="relative">
                            <Link href='/Portfolio/Single'>
                            <div className='group relative'>
                                <Image src={slide1} alt="photo d'entreprise" className='rounded-xl' />
                                <div className='absolute bottom-14 left-4 text-white'>
                                    <p className='w-[92%] font-Amiri text-3xl bg-orange  px-3 py-2 rounded-sm mb-1.5 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500 text-left'>Corporate Finance</p>
                                    <p className='absolute font-semibold top-24 bg-darkBlueBackground p-1.5 rounded-sm translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-700'>_ MARKETING _ STARTUP _</p>
                                </div>
                            </div>
                            </Link>
                            </Reveal>
                        </div> 
                    </div> 
                </div>
            </main>

            <Footer />
        </div>
    )
}