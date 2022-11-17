import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faPinterestP, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

import slide1 from '../../public/assets/BLOG/BlogSingle/Standard/slide_1.jpg'
import slide2 from '../../public/assets/BLOG/BlogSingle/Standard/slide_2.jpg'
import slide3 from '../../public/assets/BLOG/BlogSingle/Standard/slide_3.jpg'

import quote from '../../public/assets/PAGES/About/about_quote.png'

import women from '../../public/assets/BLOG/BlogSingle/Standard/author_face.jpg'

import arrow  from '../../public/assets/Home02/offer_arrow.png'

import card1  from '../../public/assets/BLOG/BlogSingle/Standard/post_1.jpg'
import card2  from '../../public/assets/BLOG/BlogSingle/Standard/post_2.jpg'

import face1  from '../../public/assets/BLOG/BlogSingle/Standard/comment_1.jpeg'
import face2  from '../../public/assets/BLOG/BlogSingle/Standard/comment_2.jpeg'


export default function StandardArticle() {
    const [articleWidth, setArticleWidth] = useState('[100%]');
    const router = useRouter();

    useEffect(() => {
        let pathname = router.pathname;
        if(pathname === '/Blog/BlogSingle/Standard') { setArticleWidth('[74%]') } 
    }, [])


    return(
        <section className={`text-greyText leading-7 w-${articleWidth}`}>
            <div className='mb-6'>
                <p className='float-left font-Amiri text-3xl text-orange bg-white px-3 pb-0.5 pt-1.5 rounded shadow-[5px_4px_13px_0_rgb(145,145,145,0.3)] mt-2 mr-4'>C</p>
                <p>ybercrime is a threat to all the organizations, but when we take in consideration the financial market the level of menace increases increases exponentially. Today banks and other financial organizations face the need of providing the best possible services in the best possible way and reachable by everyone everywhere. We are watching to a spread of different products and services being available through the use.</p>
            </div>
            <p className='mb-10'>By 2030—little more than a decade from now—the <span className='text-orange underline'>global economy will likely be in the midst</span> of a major transformation. Companies and investors grapple with changing conditions constantly, but our research points to an unusual level of volatility in the decades ahead. To understand why, we look at the three major forces that will shape the 2020s: demographics, automation and inequality. These forces are already in motion and set to collide.</p>
        

            <div className='flex justify-between mb-6'>
                <Image src={slide1} alt='check entre plusieurs personnes' className='rounded-2xl w-[420px] h-[350px]' />
                <Image src={slide2} alt='cfemme travaillant ur ordinateur' className='rounded-2xl w-[420px] h-[350px]' />
            </div>
            <Image src={slide3} alt='réunion en entreprise' className='rounded-2xl' />


            <h2 className='font-Amiri text-slightGrey text-3xl py-10'>The New Rules for Marketing Your Brand</h2>
            <p className='mb-6'>Consumer products marketing has experienced a profound change over the last 5 to 10 years, from a world dominated by large global brands and established TV and big-box retail models to a world that’s quickly much more complex, with a proliferation of brands, channels and marketing tools. <span className='text-slightGrey font-bold'>Technology’s disrupted the industry in three ways.</span> Firstly, it’s disrupted the way consumers engage with brands. In the UK and the US now, over 60% of consumers discover brands.</p>
            <p className='mb-8'>There are five areas that we encourage CMOs to look at. The first is, what are my future-back platforms that will lead growth for the next 5 to 10 years? Taking today’s profit pools and forecasting them present forward just won’t capture the level of disruption that’s impacting these industries.</p>
        
            <div className="relative bg-[#f5f5f5] mb-10 py-1 border-l-orange border-l-[3px] rounded-br-lg max-xl:w-full">
                <Image src={quote} alt='icone de guillemet' className="w-20 absolute -top-3 right-0" />
                <p className="relative font-Amiri text-2xl text-slightGrey leading-tight pt-7 pb-5 pl-9">“There are no secrets to success. It is the result of preparation, hard work, and learning failure.”</p>
                <p className='text-[#a1a1a1] font-bold text-sm pl-9 pb-6'>– OLIVER SANDERO</p>
            </div> 

            <p className='mb-12'>Secondly, given those growth platforms, what is the brand portfolio, business portfolio that I’ll use to address them? Brand portfolio strategy is definitely rising in importance. And thirdly, when I’m clear on those platforms and those brands, how am I going to implement modern marketing to engage with the consumer? We’re seeing an extreme rise in profitable growth from the clients that we’re supporting to reset their marketing model. <span className='text-orange underline'>But that isn’t straightforward.</span> So actually, areas four and five are enablers. Four, what’s the data and technology strategy and the roadmap to implement that? The leaders are owning their own data, refreshing it constantly and, more importantly, using it to inform the business decisions. And they’re making the technology that underpins that a priority.</p>
        
        
            <div className='flex items-center'>
                <p className='text-slightGrey font-bold text-sm mr-8'>SHARE ARTICLE:</p>

                <div className='flex items-center mr-auto'>
                    <div className='mr-2.5 bg-[#1da1f2] p-2 rounded-full hover:-translate-y-0.5 ease-in-out duration-500'><FontAwesomeIcon icon={faTwitter} className='w-3.5 text-white' /></div>
                    <div className='mr-2.5 bg-[#3b5998] py-1.5 px-2 rounded-full hover:-translate-y-0.5 ease-in-out duration-500'><FontAwesomeIcon icon={faFacebookF} className='w-2.5 text-white' /></div>
                    <div className='mr-2.5 bg-[#e40000] py-1.5 px-2 rounded-full hover:-translate-y-0.5 ease-in-out duration-500'><FontAwesomeIcon icon={faPinterestP} className='w-3 text-white' /></div>
                    <div className='mr-2.5 bg-[#007bb5] p-2 rounded-full hover:-translate-y-0.5 ease-in-out duration-500'><FontAwesomeIcon icon={faLinkedinIn} className='w-3 text-white' /></div>
                </div>

                <p className='bg-greyBackground rounded py-1.5 px-2.5 text-xs font-semibold'>MARKETING</p>
                <p className='bg-greyBackground rounded py-1.5 px-2.5 text-xs font-semibold ml-2.5'>STRATEGY</p>
                <p className='bg-greyBackground rounded py-1.5 px-2.5 text-xs font-semibold ml-2.5'>TRADE</p>
            </div>
                
            <span className='w-[40%] bg-[#e5e5e5] h-px absolute mt-8'></span>

            <div className='mt-16 bg-greyBackground rounded-r-2xl flex mb-10'>
                <Image src={women} alt='portrait de femme' />

                <div className='pt-10 pl-9'>
                    <p className='font-Amiri text-slightGrey text-2xl mb-2'>About Kate Black</p>
                    <p className='leading-7 mb-6'>She is an economist and entrepreneur who has been a journalist since 2013. He has spoken about the promise of economy and marketing technology at numerous financial conferences.</p>
                    <div className='flex items-center mr-auto'>
                        <div className='mr-2.5 bg-white p-2 rounded-full hover:bg-[#c32aa3] ease-in-out duration-500 group'><FontAwesomeIcon icon={faInstagram} className='w-3.5 text-[#c32aa3] group-hover:text-white ease-in-out duration-500' /></div>
                        <div className='mr-2.5 bg-white py-1.5 px-2 rounded-full hover:bg-[#3b5998] ease-in-out duration-500 group'><FontAwesomeIcon icon={faFacebookF} className='w-2.5 text-[#3b5998] group-hover:text-white ease-in-out duration-500' /></div>
                        <div className='mr-2.5 bg-white py-1.5 px-2 rounded-full hover:bg-[#e40000] ease-in-out duration-500 group'><FontAwesomeIcon icon={faPinterestP} className='w-3 text-[#e40000] group-hover:text-white ease-in-out duration-500' /></div>
                        <div className='mr-2.5 bg-white p-2 rounded-full hover:bg-[#007bb5] ease-in-out duration-500 group'><FontAwesomeIcon icon={faTwitter} className='w-3 text-[#007bb5] group-hover:text-white ease-in-out duration-500' /></div>
                    </div>
                </div>
            </div>


            <div className='flex text-white justify-center h-36 mb-28 relative max-xl:flex-col max-xl:top-0 650:w-full'>
                <div className='relative flex items-center bg-darkBlueBackground rounded-l-lg group max-xl:rounded-lg'>
                    <span className='absolute left-12 w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:-translate-x-7 ease-in-out duration-500 max-xl:right-56'></span>
                    <div className='ml-6 mr-10 rotate-180 650:px-16'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                    <div className='mr-20'>
                        <p className='font-bold leading-7 mb-3'>Delivering What Consumers<br></br>Really Value</p>
                        <p className='text-greyText text-sm font-bold'>FEBRUARY 21, 2020</p>
                    </div>
                </div>

                <div className='relative flex items-center bg-orange rounded-r-lg group max-xl:rounded-lg'>
                    <div className='ml-20'>
                        <p className='font-bold leading-7 mb-3'>Delivering What Consumers<br></br>Really Value</p>
                        <p className='text-greyText text-sm font-bold'>FEBRUARY 21, 2020</p>
                    </div>
                    <span className='absolute right-14 w-12 h-12 rounded border-white border border-solid opacity-20 group-hover:opacity-40 group-hover:translate-x-7 ease-in-out duration-500 max-xl:right-56'></span>
                    <div className='ml-6 mr-10 650:px-16'><Image src={arrow} alt='icone de fleche' className=' min-w-[50px]' /></div>
                </div>
            </div>


            <h2 className='font-Amiri text-slightGrey text-4xl'>Related Posts</h2>
            <div className='flex justify-between mb-10'>
                <div className='mt-4 mb-6 relative border-solid border border-[#e5e5e5] rounded-lg p-5 max-w-[420px] hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.10)] hover:border-transparent ease-in-out duration-300 hover:cursor-pointer'>
                    <Image  src={card1} alt='persone travaillant sur un ordinateur' className='w-[380px] rounded-lg' />
                    <div className='absolute right-10 bottom-44 bg-orange text-white flex flex-col items-center rounded px-4 py-1 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]'>
                        <p className='font-Amiri text-2xl -mb-1'>24</p>
                        <p className='text-xs font-semibold pb-1'>FEB</p>
                    </div>
                    <p className='font-semibold text-[#989898] mt-8 mb-3'>BUSINESS _ FINANCE</p>
                    <p className='font-Amiri text-[28px] text-slightGrey leading-tight hover:underline ease-in-out duration-300'>You’re Still Not Using Digital Finance Tools?</p>
                    <div className='flex items-center group relative my-3 max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-semibold pl-1 group-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
                </div>

                <div className='mt-4 mb-6 relative border-solid border border-[#e5e5e5] rounded-lg p-5 max-w-[420px] hover:shadow-[6px_5px_30px_0px_rgb(0,0,0,0.10)] hover:border-transparent ease-in-out duration-300 hover:cursor-pointer'>
                    <Image  src={card2} alt='persone travaillant sur un ordinateur' className='w-[380px] rounded-lg' />
                    <div className='absolute right-10 bottom-44 bg-orange text-white flex flex-col items-center rounded px-4 py-1 shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]'>
                        <p className='font-Amiri text-2xl -mb-1'>24</p>
                        <p className='text-xs font-semibold pb-1'>FEB</p>
                    </div>
                    <p className='font-semibold text-[#989898] mt-8 mb-3'>ANALYSIS _ NEWS</p>
                    <p className='font-Amiri text-[28px] w-11/12 text-slightGrey leading-tight hover:underline ease-in-out duration-300'>Automation Nation: Whose Job Is Next?</p>
                    <div className='flex items-center group relative my-3 max-xl:mb-10'><span className='w-10 h-0.5 bg-orange absolute scale-x-0 group-hover:scale-x-100 origin-left ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[28px] bg-orange absolute scale-x-0 group-hover:rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[28px] scale-x-0 group-hover:-rotate-45 group-hover:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm text-orange font-semibold pl-1 group-hover:translate-x-10 ease-in-out duration-500'>READ MORE</p></div>
                </div>
            </div>


            <h2 className='text-slightGrey font-Amiri text-4xl py-10'>Comments <span className='text-[#d3d3d3]'>(02)</span></h2>
            <div>
                <div className='flex relative mb-8'>
                    <Image src={face1} alt='portrait' className='w-[80px] h-[80px] relative top-2.5' />

                    <div className='pl-8'>
                        <p className='font-bold text-slightGrey'>David Parker</p>
                        <p className='text-sm font-semibold text-[#d3d3d3] mb-4'>FEBRUARY 24, 2020</p>
                        <p>This is a useful post for finding broken links within the website, what about links pointing outwards that are broken? I can use a free web service but wondered if this was possible.</p>
                    </div>

                    <p className='text-orange text-sm font-semibold absolute top-0 right-0'>REPLY</p>
                </div>

                <span className='w-[40%] bg-[#e5e5e5] h-px absolute'></span>

                <div className='flex relative mt-16 ml-28'>
                    <Image src={face2} alt='portrait' className='w-[80px] h-[80px] relative top-2.5' />

                    <div className='pl-8'>
                        <p className='font-bold text-slightGrey'>David Parker</p>
                        <p className='text-sm font-semibold text-[#d3d3d3] mb-4'>FEBRUARY 24, 2020</p>
                        <p>This is a useful post for finding broken links within the website, what about links pointing outwards that are broken? I can use a free web service but wondered if this was possible.</p>
                    </div>

                    <p className='text-orange text-sm font-semibold absolute top-0 right-0'>REPLY</p>
                </div>
            </div>


            <div className='rounded-2xl px-14 py-14 mt-32 bg-white shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] mb-48'>
                <p className='font-Amiri text-slightGrey text-[36px]'>Leave a Reply</p>
                <p className='text-sm mb-7'>Your email address will not be published. Required fields are marked *</p>

                <form className='flex flex-col'>
                    <div className='flex justify-between'>
                        <input type='text' placeholder='Name *' className='bg-greyBackground px-4 py-2.5 rounded placeholder:text-greyText outline-none w-[49%]'></input>

                        <input type='text' placeholder='Your Email*' className='bg-greyBackground px-4 py-2.5 rounded placeholder:text-greyText outline-none w-[49%]'></input>
                    </div>

                    <input type='text' placeholder='Website' className='bg-greyBackground px-4 py-2.5 rounded mt-5 placeholder:text-greyText outline-none'></input>

                    <textarea placeholder='Your Comment...' className='bg-greyBackground pt-4 h-32 px-4 py-2.5 rounded mt-5 placeholder:text-greyText outline-none'></textarea>
                
                    <div className='flex'>
                        <input type='checkbox' className='mt-4 self-start'></input>
                        <p className='ml-3 relative top-1.5'>Save my name, email, and website in this browser for the next time I comment.</p>
                    </div>
                </form>

                <button className="bg-orange text-white font-semibold text-sm px-7 py-3.5 rounded mt-5 hover:bg-darkBlueBackground ease-in-out duration-500">POST COMMENT</button>
            </div>
        </section>
    )
}