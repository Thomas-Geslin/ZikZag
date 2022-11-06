import Image from 'next/image'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import logo from "../public/assets/Home/logo.png"

import home01 from '../public/assets/Header/home_01.jpg'
import home02 from '../public/assets/Header/home_02.jpg'
import home03 from '../public/assets/Header/home_03.jpg'
import home04 from '../public/assets/Header/home_04.jpg'
import home05 from '../public/assets/Header/home_05.jpg'
import home06 from '../public/assets/Header/home_06.jpg'
import coming from '../public/assets/Header/coming_soon.jpg'

export default function Header() {
    return(
        <header className='shadow-[5px_6px_30px_0_rgba(0,0,0,0.12)] z-10 absolute top-0 right-0 left-0'>
            <div className="flex font-Amiri bg-darkBlueBackground text-white py-2 px-14">
                <p>Call Us: <span className="text-orangeBright">+1 800 123 456 789</span></p>
                <p className="ml-10 mr-auto">Mail Us: <span className="text-orangeBright">zikzag@mail.com</span></p>

                <p>Bespoke Solutions Tailored to Your Business. <span className="text-orangeBright">Free Counsultancy</span></p>
                <div className='flex justify-between w-36 ml-12'>
                    <FontAwesomeIcon icon={faTwitter} className='w-3 hover:text-[#1d9bf0] hover:cursor-pointer ease-linear duration-300' />
                    <FontAwesomeIcon icon={faFacebookF} className='w-2 hover:text-[#587abf] hover:cursor-pointer ease-linear duration-300' />
                    <FontAwesomeIcon icon={faPinterestP} className='w-2.5 hover:text-[#c42d2f] hover:cursor-pointer ease-linear duration-300' />
                    <FontAwesomeIcon icon={faInstagram} className='w-3 hover:text-[#af50a0] hover:cursor-pointer ease-linear duration-300' />
                </div>
            </div>

            <div className='flex justify-between font-NunitoSans text-sm font-bold items-center px-14 bg-white'>
                <Image src={logo} alt="logo de l'entreprise" className='w-36 my-7' />

                <nav className='flex justify-between items-center w-[36%] ml-36 text-slightGrey z-10'>
                <div className='relative group hover:cursor-pointer'>
                        <div className='flex items-start py-10 group'><p className='relative'><span className='hover-nav-active relative left-12 top-px'></span>HOME</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5 group-hover:rotate-180 ease-linear duration-200' /></div>
                        <div className='bg-darkBlueBackground absolute hidden -left-72 translate-y-6 opacity-0 text-white font-normal text-base py-8 px-10 rounded-md group-hover:block group-hover:translate-y-0 group-hover:opacity-100 ease-linear duration-300'>
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
                        <div className='flex items-start py-10'><p className='hover-nav'><span className='hover-nav-animation group-hover:after:scale-x-100 ease-linear duration-300'></span>PAGES</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5 group-hover:rotate-180 ease-linear duration-200' /></div>
                        <div className='bg-darkBlueBackground hidden absolute -left-10 translate-y-6 opacity-0 text-white font-normal text-base py-8 pl-10 pr-32 rounded-md group-hover:block group-hover:translate-y-0 group-hover:opacity-100 ease-linear duration-300'>
                            <Link href='/About'><p className='mb-4 hover-underline-animation'>About</p></Link>
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
                        <div className='flex items-start py-10'><p><span className='hover-nav-animation right-1 group-hover:after:scale-x-100'></span>BLOG</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5 group-hover:rotate-180 ease-linear duration-200' /></div>
                        <div className='bg-darkBlueBackground hidden absolute right-0 text-white font-normal text-base py-8 pl-10 pr-32 rounded-md group-hover:block'>
                            <p className='mb-4 hover-underline-animation'>Blog Listing</p>
                            <p className='mb-4 hover-underline-animation'>Blog Grid</p>
                            <p className='mb-4 hover-underline-animation'>Blog Masonry</p>
                            <p className='mb-4 hover-underline-animation'>Blog Single</p>
                            <p className='w-28 hover-underline-animation'>Single Layouts</p>
                        </div>
                    </div>

                    <div className='relative group hover:cursor-pointer'>
                        <div className='flex items-start py-10'><p><span className='hover-nav-animation left-4 group-hover:after:scale-x-100'></span>PORTFOLIO</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5 group-hover:rotate-180 ease-linear duration-200' /></div>
                        <div className='bg-darkBlueBackground hidden absolute right-0 text-white font-normal text-base py-8 pl-10 pr-32 rounded-md group-hover:block'>
                            <p className='mb-4 hover-underline-animation'>Portfolio Grid</p>
                            <p className='mb-4 w-36 hover-underline-animation'>Portfolio Masonry</p>
                            <p className='mb-4 hover-underline-animation'>Portfolio Gallery</p>
                            <p className='hover-underline-animation'>Single</p>
                        </div>
                    </div>

                    <div className='relative group hover:cursor-pointer'>
                        <div className='flex items-start py-10'><p><span className='hover-nav-animation right-1 group-hover:after:scale-x-100'></span>SHOP</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5 group-hover:rotate-180 ease-linear duration-200' /></div>
                        <div className='bg-darkBlueBackground hidden absolute right-0 text-white font-normal text-base py-8 pl-10 pr-32 rounded-md group-hover:block'>
                            <p className='mb-4 hover-underline-animation'>Shop</p>
                            <p className='mb-4 hover-underline-animation'>Cart</p>
                            <p className='w-18 hover-underline-animation'>Checkout</p>
                        </div>
                    </div>

                    <p className='group'><span className='hover-nav-animation group-hover:after:scale-x-100'></span>CONTACTS</p>
                </nav>

                <div className='flex items-center justify-end w-2/12'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5' />
                    <button className='inline-block p-9 py-4 ml-9 border-solid border border-orangeBright rounded hover:cursor_pointer hover:text-white hover:bg-darkBlueBackground hover:border-darkBlueBackground ease-in duration-300'>CONTACT US</button>
                </div>
            </div>
        </header>
    )
}