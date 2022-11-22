import Image from "next/image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faTelegramPlane, faInstagram } from '@fortawesome/free-brands-svg-icons'

import face from '../../public/assets/BLOG/BlogSingle/Standard/aside_portrait_face.jpg'
import faceBackground from '../../public/assets/BLOG/BlogSingle/Standard/aside_portrait_back.jpg'
import name from '../../public/assets/BLOG/BlogSingle/Standard/aside_portrait_name.png'

import post1 from '../../public/assets/BLOG/BlogSingle/Standard/aside_post_1.jpg'
import post2 from '../../public/assets/BLOG/BlogSingle/Standard/aside_post_2.jpg'
import post3 from '../../public/assets/BLOG/BlogSingle/Standard/aside_post_3.jpg'

import gallery1 from '../../public/assets/BLOG/BlogSingle/Standard/aside_gallery_1.jpg'
import gallery2 from '../../public/assets/BLOG/BlogSingle/Standard/aside_gallery_2.jpg'
import gallery3 from '../../public/assets/BLOG/BlogSingle/Standard/aside_gallery_3.jpg'
import gallery4 from '../../public/assets/BLOG/BlogSingle/Standard/aside_gallery_4.jpg'
import gallery5 from '../../public/assets/BLOG/BlogSingle/Standard/aside_gallery_5.jpg'
import gallery6 from '../../public/assets/BLOG/BlogSingle/Standard/aside_gallery_6.jpg'

import expertsBack from '../../public/assets/BLOG/BlogSingle/Standard/aside_expert_back.jpg'
import expertsLogo from '../../public/assets/BLOG/BlogSingle/Standard/aside_expert_logo.png'


export default function AsideArticle() {
    return(
        <section className='max-xl:max-w-[300px] max-xl:mt-32'>
            <div className='relative'>
                <Image src={faceBackground} alt='carré de décoration' className='rounded-xl' />
                <Image src={face} alt='carré de décoration' className='absolute rounded-full w-[63%] left-[50%] translate-x-[-50%] top-10 z-10' />
                <Image src={name} alt='carré de décoration' className='absolute left-[50%] translate-x-[-50%] top-48' />

                <div className='w-full text-white text-center absolute left-[50%] translate-x-[-50%] top-64'>
                    <p className='font-Amiri text-2xl'>About Author</p>
                    <p className='text-[#dddfe1] leading-7'>Hi! I am an author of this blog.<br></br>Follow me. be in trend.</p>
                    <div className='flex items-center absolute left-[50%] translate-x-[-50%] -bottom-[70px]'>
                        <div className='mr-2.5 bg-white p-2 rounded-full hover:-translate-y-1 hover:bg-orange ease-in-out duration-500 group'><FontAwesomeIcon icon={faInstagram} className='w-3 text-orange group-hover:text-white ease-in-out duration-500' /></div>
                        <div className='mr-2.5 bg-white py-2 px-2.5 rounded-full hover:-translate-y-1 hover:bg-orange ease-in-out duration-500 group'><FontAwesomeIcon icon={faFacebookF} className='w-2 text-orange group-hover:text-white ease-in-out duration-500' /></div>
                        <div className='mr-2.5 bg-white py-2 px-2.5 rounded-full hover:-translate-y-1 hover:bg-orange ease-in-out duration-500 group'><FontAwesomeIcon icon={faTwitter} className='w-3 text-orange group-hover:text-white ease-in-out duration-500' /></div>
                        <div className='mr-2.5 bg-white p-2 rounded-full hover:-translate-y-1 hover:bg-orange ease-in-out duration-500 group'><FontAwesomeIcon icon={faTelegramPlane} className='w-3.5 text-orange group-hover:text-white ease-in-out duration-500' /></div>
                    </div>
                </div>
            </div>

            <div className='pt-4 relative my-10 mb-5'>
                <p className='bg-greyBackground text-[#7e7e7e] rounded p-3 850:w-[180px]'>Search ...</p><div className='absolute bottom-1 right-1 bg-darkBlueBackground p-3 rounded'><FontAwesomeIcon icon={faMagnifyingGlass} className='w-4 text-white' /></div>
            </div>


            <div className='flex relative mb-6'>
                <h3 className='font-Amiri text-2xl text-slightGrey'>Categories</h3>
                <span className='w-[40%] h-px bg-[#dcdcdc] absolute top-4 left-32'></span>
                <span className='w-[13%] h-[3px] bg-orange rounded absolute top-[15px] right-0'></span>
            </div>

            <div className='group flex relative hover:cursor-pointer'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 text-orange relative bottom-2 -translate-x-4 -translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 ease-in-out duration-300' /><p className='text-slightGrey font-extrabold text-sm mb-4 -translate-x-4 group-hover:text-orange group-hover:translate-x-2 ease-in-out duration-300'>ANALYSIS <span className='text-[#bab3b3]'>(9)</span></p></div>
            <div className='group flex relative hover:cursor-pointer'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 text-orange relative bottom-2 -translate-x-4 -translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 ease-in-out duration-300' /><p className='text-slightGrey font-extrabold text-sm mb-4 -translate-x-4 group-hover:text-orange group-hover:translate-x-2 ease-in-out duration-300'>BUSINESS <span className='text-[#bab3b3]'>(7)</span></p></div>
            <div className='group flex relative hover:cursor-pointer'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 text-orange relative bottom-2 -translate-x-4 -translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 ease-in-out duration-300' /><p className='text-slightGrey font-extrabold text-sm mb-4 -translate-x-4 group-hover:text-orange group-hover:translate-x-2 ease-in-out duration-300'>FINANCE <span className='text-[#bab3b3]'>(8)</span></p></div>
            <div className='group flex relative hover:cursor-pointer'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 text-orange relative bottom-2 -translate-x-4 -translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 ease-in-out duration-300' /><p className='text-slightGrey font-extrabold text-sm mb-4 -translate-x-4 group-hover:text-orange group-hover:translate-x-2 ease-in-out duration-300'>NEWS <span className='text-[#bab3b3]'>(8)</span></p></div>


            <div className='flex relative mb-6'>
                <h3 className='font-Amiri text-2xl text-slightGrey'>Recent Posts</h3>
                <span className='w-[43%] h-px bg-[#dcdcdc] absolute top-4 right-0'></span>
                <span className='w-[13%] h-[3px] bg-orange rounded absolute top-[15px] right-0'></span>
            </div>

            <div className='flex mb-7'>
                <Image src={post1} alt='réunion entreprise' className='w-[75px] rounded' />
                <div className='pl-3'>
                    <p className='font-semibold text-slightGrey mb-2 hover:text-orange ease-in-out duration-500'>When Sustainability<br></br>Requires Change</p>
                    <p className='text-sm text-[#a59898] font-semibold'>FEBRUARY 24, 2020</p>
                </div>
            </div>

            <div className='flex mb-7'>
                <Image src={post2} alt='réunion entreprise' className='w-[75px] rounded' />
                <div className='pl-3'>
                    <p className='font-semibold text-slightGrey mb-2 hover:text-orange ease-in-out duration-500'>A New Age for Trade &<br></br>Supply Chain Finance</p>
                    <p className='text-sm text-[#a59898] font-semibold'>FEBRUARY 24, 2020</p>
                </div>
            </div>

            <div className='flex mb-10'>
                <Image src={post3} alt='réunion entreprise' className='w-[75px] rounded' />
                <div className='pl-3'>
                    <p className='font-semibold text-slightGrey mb-2 hover:text-orange ease-in-out duration-500'>Automation Nation:<br></br>Whose Job Is Next?</p>
                    <p className='text-sm text-[#a59898] font-semibold'>FEBRUARY 24, 2020</p>
                </div>
            </div>


            <div className='flex relative mb-6'>
                <h3 className='font-Amiri text-2xl text-slightGrey'>Tags</h3>
                <span className='w-[75%] h-px bg-[#dcdcdc] absolute top-4 right-0'></span>
                <span className='w-[13%] h-[3px] bg-orange rounded absolute top-[15px] right-0'></span>
            </div>

            <div className='flex mb-2'>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>ANALYSIS</p>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>BUSINESS</p>
            </div>
            <div className='flex mb-2'>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>COUNSALTING</p>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>FINANCE</p>
            </div>
            <div className='flex mb-2'>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>MARKETING</p>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>NEW</p>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>STRATEGY</p>
            </div>
            <div className='flex mb-12'>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>TRADE</p>
            </div>


            <div className='flex relative mb-6'>
                <h3 className='font-Amiri text-2xl text-slightGrey'>Gallery</h3>
                <span className='w-[65%] h-px bg-[#dcdcdc] absolute top-4 right-0'></span>
                <span className='w-[13%] h-[3px] bg-orange rounded absolute top-[15px] right-0'></span>
            </div>

            <div className='grid grid-cols-3 gap-2 mb-20'>
                <Image src={gallery1} alt='homme travaillant sur un ordinateur' className='w-[82px] h-[82px] rounded hover:brightness-50 hover:cursor-pointer ease-in-out duration-500' />
                <Image src={gallery2} alt='réunion entreprise' className='w-[82px] h-[82px] rounded hover:brightness-50 hover:cursor-pointer ease-in-out duration-500' />
                <Image src={gallery3} alt='portrait femme' className='w-[82px] h-[82px] rounded hover:brightness-50 hover:cursor-pointer ease-in-out duration-500' />
                <Image src={gallery4} alt='personne écrivant' className='w-[82px] h-[82px] rounded hover:brightness-50 hover:cursor-pointer ease-in-out duration-500' />
                <Image src={gallery5} alt='portrait femme souriant' className='w-[82px] h-[82px] rounded hover:brightness-50 hover:cursor-pointer ease-in-out duration-500' />
                <Image src={gallery6} alt='personne faisant un croquis' className='w-[82px] h-[82px] rounded hover:brightness-50 hover:cursor-pointer ease-in-out duration-500' />
            </div>


            <div className='relative'>
                <Image src={expertsBack} alt='carré de décoration' className='rounded-2xl' />
                <Image src={expertsLogo} alt='logo de entreprise' className='absolute left-[50%] translate-x-[-50%] top-8' />
                <div className='text-center text-white absolute left-[50%] translate-x-[-50%] top-36'>
                    <p className='font-bold text-sm'>FIRST-CLASS FINANCE</p>
                    <p className='font-Amiri text-5xl'>Experts</p>
                    <button className="font-semibold text-sm text-slightGrey bg-white rounded py-4 px-7 mt-6">GET IN TOUCH</button>
                </div>
            </div>
        </section>
    )
}