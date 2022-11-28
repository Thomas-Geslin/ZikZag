import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import HeaderSecond from '../../../components/HeaderSecond'
import Footer from "../../../components/Footer"

import { ArticleDataMasonry3 } from "../../../datas/Blog/ArticleDataMasonry3"

import link from '../../../public/assets/BLOG/BlogSingle/Link/link.svg'


export default function ThreeColumnsMasonry() {
    const [loadMore, setLoadMore] = useState(9);
    const [loading, setLoading] = useState(false)

    function loadMoreArticle() {
        setLoading(true);
        setTimeout(() => {
            setLoadMore(loadMore + 3);
            setLoading(false);
        }, 1500)
    };


    return(
        <div class='font-NunitoSans'>
            <Head>
                <title>ZikZag | 3 Columns Masonry</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            <main>
                <section className="bg-singleLayoutsStandardBackground bg-cover bg-no-repeat text-center text-white">
                    <h1 className="font-Amiri text-6xl pt-60 mb-6">Blog Masonry</h1>
                    <p className="font-semibold text-sm pb-48 z-10"><span className="opacity-50">HOME &gt; </span>  BLOG MASONRY</p>
                </section>


                <div className='w-[60%] m-auto flex flex-wrap justify-between max-xl:m-auto max-xl:w-[90%] max-xl:justify-center max-xl:gap-2 max-xl:mt-20'>
                    {ArticleDataMasonry3.slice(0, loadMore).map((el) => {
                        return(
                            <Link key={el.index} href={el.href} className={`${el.class} relative max-xl:top-0`}>
                            {!el.background && <div className='mb-8 1050:mb-0'></div>}
                            <div className='relative mb-12 border-solid border border-[#e5e5e5] rounded-lg p-5 max-w-[370px] hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.10)] hover:border-transparent ease-in-out duration-300 hover:cursor-pointer 650-xl:max-w-[340px] 650:max-w-[310px]'>
                                {el.background && <Image  src={el.background} alt='persone travaillant sur un ordinateur' className='rounded-lg max-w-[330px] 650-xl:max-w-[300px] 650:max-w-[270px]' />}
                                
                                {el.quote && <div>
                                                <svg viewBox="0 0 62.4 44.8" className='w-14 absolute -top-8'>
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
                                                <p className='font-Amiri text-slightGrey text-2xl mb-4'>“There are no secrets to success. It is the result of preparation, hard work, and learning failure.”</p>
                                                <p className='font-bold text-orange'>- Oliver Sandero</p>
                                            </div>
                                }

                                {el.link &&
                                    <div>
                                        <Image src={link} alt='incone de lien' className='w-16 absolute -top-7' />
                                        <p className='font-Amiri text-2xl mt-4'>Building a Workforce for Digital.</p>
                                    </div>
                                }

                                
                                
                                {el.background 
                                ?   <div className='absolute right-20 bottom-48 bg-orange text-white flex flex-col items-center rounded px-4 py-1 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] max-2xl:bottom-64'>
                                        <p className='font-Amiri text-2xl -mb-1'>24</p>
                                        <p className='text-xs font-semibold pb-1'>FEB</p>
                                    </div>
                                
                                :   <div className='absolute right-20 -top-6 bg-orange text-white flex flex-col items-center rounded px-4 py-1 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]'>
                                        <p className='font-Amiri text-2xl -mb-1'>24</p>
                                        <p className='text-xs font-semibold pb-1'>FEB</p>
                                    </div>
                                }

                                <p className='font-bold text-sm text-[#989898] mt-8 mb-3'>{el.categorie}</p>
                                <p className='font-Amiri text-4xl text-slightGrey leading-tight hover:underline ease-in-out duration-300'>{el.title}</p>
                                <div className='flex items-center group relative my-3 max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-bold pl-1 group-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
                            </div>
                            </Link>
                        )
                    })}
                </div>
                
                {loadMore < ArticleDataMasonry3.length 
                    ? <button onClick={loadMoreArticle} className='relative text-sm text-slightGrey font-bold w-[170px] relative left-[50%] translate-x-[-50%] py-5 border border-orange rounded border-solid hover:bg-orange hover:border-transparent hover:text-white ease-in-out duration-300'>{loading === false ? 'LOAD MORE' : <div class="spinnerArticle"></div>}</button>
                    
                    : <p className='font-Amiri relative -mb-[200px] -top-[200px] text-2xl text-slightGrey text-center 850:mt-60'>Vous avez chargé tous les articles</p> 
                }
                
            </main>
            
            <div className='mb-40'></div>

            <Footer />
        </div>
    )
}