import Image from 'next/image'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import logo from "../public/assets/Home/logo_consultancy.png"

import home01 from '../public/assets/Header/home_01.jpg'
import home02 from '../public/assets/Header/home_02.jpg'
import home03 from '../public/assets/Header/home_03.jpg'
import home04 from '../public/assets/Header/home_04.jpg'
import home05 from '../public/assets/Header/home_05.jpg'
import home06 from '../public/assets/Header/home_06.jpg'
import coming from '../public/assets/Header/coming_soon.jpg'

export default function HeaderAbout() {
    return(
        <header className='flex bg-transparent justify-between font-NunitoSans text-white text-sm font-bold items-center px-14 absolute top-0 left-0 right-0'>
            <Image src={logo} alt="logo de l'entreprise" className='w-36 my-7' />

            <nav className='flex justify-between items-center w-[36%] ml-36 text-white z-10'>
                <div className='relative group hover:cursor-pointer'>
                        <div className='flex items-start py-10'><p><span className='hover-nav-animation group-hover:after:scale-x-100'></span>HOME</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5' /></div>
                        <div className='bg-darkBlueBackground hidden absolute -left-72 translate-y-6 opacity-0 text-white font-normal text-base py-8 px-10 rounded-md group-hover:block group-hover:translate-y-0 group-hover:opacity-100 ease-linear duration-300'>
                            <div className='flex'>
                                <div className='w-[280px] flex flex-col items-center mb-8'>
                                    <Image src={home01} alt='miniature de la page Home01' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 1</p>
                                </div>

                                <Link href='/'><div className='w-[280px] flex flex-col items-center'>
                                    <Image src={home02} alt='miniature de la page Home02' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 2</p>
                                </div></Link>

                                <div className='w-[280px] flex flex-col items-center'>
                                    <Image src={home03} alt='miniature de la page Home03' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 3</p>
                                </div>

                                <div className='w-[280px] flex flex-col items-center'>
                                    <Image src={home04} alt='miniature de la page Home04' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 4</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='w-[280px] flex flex-col items-center'>
                                    <Image src={home05} alt='miniature de la page Home05' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 5</p>
                                </div>

                                <div className='w-[280px] flex flex-col items-center'>
                                    <Image src={home06} alt='miniature de la page Home06' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 1</p>
                                </div>

                                <div className='w-[280px] flex flex-col items-center'>
                                    <Image src={coming} alt='miniature de la page Coming Soon' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)]' />
                                    <p className='text-[20px] font-bold mt-3'>Home 1</p>
                                </div>

                                <div className='w-[280px] flex flex-col items-center'>
                                    <Image src={coming} alt='miniature de la page Coming Soon' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)]' />
                                    <p className='text-[20px] font-bold mt-3'>Home 1</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative group hover:cursor-pointer'>
                        <div className='flex items-start py-10'><p><span className='hover-nav-active--page'></span>PAGES</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5' /></div>
                        <div className='bg-darkBlueBackground hidden absolute -left-10 translate-y-6 opacity-0 text-white font-normal text-base py-8 pl-10 pr-32 rounded-md group-hover:block group-hover:translate-y-0 group-hover:opacity-100 ease-linear duration-300'>
                            <Link href='/About'><p className='mb-4 border-b-solid border-b border-b-orange w-12'>About</p></Link>
                            <p className='mb-4 w-24 hover-underline-animation'>Our Services</p>
                            <p className='mb-4 hover-underline-animation'>Our Team</p>
                            <p className='mb-4 hover-underline-animation'>Single Team</p>
                            <p className='mb-4 hover-underline-animation'>Value</p>
                            <p className='mb-4 hover-underline-animation'>Elements</p>
                            <p className='mb-4 hover-underline-animation'>Typographie</p>
                            <p className='mb-4 hover-underline-animation'>FAQ</p>
                            <p className='mb-4 hover-underline-animation'>Coming Soon</p>
                            <p className='mb-4 hover-underline-animation'>Page 404</p>
                        </div>
                    </div>

                    <div className='relative group hover:cursor-pointer'>
                        <div className='flex items-start py-10'><p><span className='hover-nav-animation right-2 group-hover:after:scale-x-100'></span>BLOG</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5' /></div>
                        <div className='bg-darkBlueBackground hidden absolute right-0 text-white font-normal text-base py-8 pl-10 pr-32 rounded-md group-hover:block'>
                            <p className='mb-4 hover-underline-animation'>Blog Listing</p>
                            <p className='mb-4 hover-underline-animation'>Blog Grid</p>
                            <p className='mb-4 hover-underline-animation'>Blog Masonry</p>
                            <p className='mb-4 hover-underline-animation'>Blog Single</p>
                            <p className='w-28 hover-underline-animation'>Single Layouts</p>
                        </div>
                    </div>

                    <div className='relative group hover:cursor-pointer'>
                        <div className='flex items-start py-10'><p><span className='hover-nav-animation left-4 group-hover:after:scale-x-100'></span>PORTFOLIO</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5' /></div>
                        <div className='bg-darkBlueBackground hidden absolute right-0 text-white font-normal text-base py-8 pl-10 pr-32 rounded-md group-hover:block'>
                            <p className='mb-4 hover-underline-animation'>Portfolio Grid</p>
                            <p className='mb-4 w-36 hover-underline-animation'>Portfolio Masonry</p>
                            <p className='mb-4 hover-underline-animation'>Portfolio Gallery</p>
                            <p className='hover-underline-animation'>Single</p>
                        </div>
                    </div>

                    <div className='relative group hover:cursor-pointer'>
                        <div className='flex items-start py-10'><p><span className='hover-nav-animation right-1 group-hover:after:scale-x-100'></span>SHOP</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5' /></div>
                        <div className='bg-darkBlueBackground hidden absolute right-0 text-white font-normal text-base py-8 pl-10 pr-32 rounded-md group-hover:block'>
                            <p className='mb-4 hover-underline-animation'>Shop</p>
                            <p className='mb-4 hover-underline-animation'>Cart</p>
                            <p className='w-18 hover-underline-animation'>Checkout</p>
                        </div>
                    </div>

                    <p className='group'><span className='hover-nav-animation left-3 group-hover:after:scale-x-100'></span>CONTACTS</p>
                </nav>

            <div className='flex justify-end w-2/12'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5' />
                <p className='font-Amiri text-[22px] ml-8 hover:cursor-pointer hover:opacity-70 ease-in-out duration-500'>+1 800 123 456 789</p>
            </div>
        </header>
    )
}