import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { use, useEffect, useState } from "react"

import HeaderSecond from '../../../components/HeaderSecond'
import Footer from "../../../components/Footer"

import { ArticleData } from "../../../datas/Blog/ArticleData"
import AsideArticle from "../../../components/BLOG/AsideArticle"


export default function TwoColumnsSidebar() {
    const [loadMore, setLoadMore] = useState(6);
    const [loading, setLoading] = useState(false)

    function loadMoreArticle() {
        setLoading(true);
        setTimeout(() => {
            setLoadMore(loadMore + 2);
            setLoading(false);
        }, 1500)
    };


    return(
        <div class='font-NunitoSans'>
            <Head>
                <title>ZikZag | 2 Columns + Sidebar</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            <main>
                <section className="bg-singleLayoutsStandardBackground bg-no-repeat text-center text-white">
                    <h1 className="font-Amiri text-6xl pt-60 mb-6">Grid 2 Columns + Sidebar</h1>
                    <p className="font-semibold text-sm pb-48 z-10"><span className="opacity-50">HOME &gt; </span> GRID 2 COLUMNS + SIDEBAR</p>
                </section>


                <div className='mx-[18%] mt-12 mb-40 flex jsutify-between'>
                    <div className='w-[74%]'>
                        <div className='articleAppear grid grid-cols-2 relative -top-4'>
                            {ArticleData.slice(0, loadMore).map((el) => {
                                return(
                                    <Link key={el.index} href='/Blog/BlogSingle/Standard'>
                                    <div className='mt-4 mb-6 relative border-solid border border-[#e5e5e5] rounded-lg p-5 max-w-[420px] hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.10)] hover:border-transparent ease-in-out duration-300 hover:cursor-pointer'>
                                        <Image  src={el.background} alt='persone travaillant sur un ordinateur' className='w-[380px] rounded-lg' />
                                        <div className='absolute right-10 bottom-44 bg-orange text-white flex flex-col items-center rounded px-4 py-1 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]'>
                                            <p className='font-Amiri text-2xl -mb-1'>24</p>
                                            <p className='text-xs font-semibold pb-1'>FEB</p>
                                        </div>
                                        <p className='font-semibold text-[#989898] mt-8 mb-3'>{el.categorie}</p>
                                        <p className='font-Amiri text-[28px] text-slightGrey leading-tight hover:underline ease-in-out duration-300'>{el.title}</p>
                                        <div className='flex items-center group relative my-3 max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-semibold pl-1 group-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
                                    </div>
                                    </Link>
                                )
                            })}
                        </div>

                        {loadMore < ArticleData.length 
                            ? <button onClick={loadMoreArticle} className='mt-10 text-sm text-slightGrey font-bold w-[170px] relative left-[50%] translate-x-[-50%] py-5 border border-orange rounded border-solid hover:bg-orange hover:border-transparent hover:text-white ease-in-out duration-300'>{loading === false ? 'LOAD MORE' : <div class="spinnerArticle"></div>}</button>
                            : <p className='mt-8 font-Amiri text-2xl text-slightGrey text-center'>Vous avez chargé tous les articles</p>
                        }
                    </div>

                    <AsideArticle />
                </div>

            </main>

            <Footer />
        </div>
    )
}