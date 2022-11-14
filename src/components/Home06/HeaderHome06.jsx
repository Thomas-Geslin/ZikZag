import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAngleDown, faAngleRight, faBars, faXmark, faBagShopping } from '@fortawesome/free-solid-svg-icons'

import logoFixed from "../../public/assets/Home02/logo.png"
import logoQueries from '../../public/assets/Home02/logo_consultancy.png'

import home01 from '../../public/assets/Header/home_01.jpg'
import home02 from '../../public/assets/Header/home_02.jpg'
import home03 from '../../public/assets/Header/home_03.jpg'
import home04 from '../../public/assets/Header/home_04.jpg'
import home05 from '../../public/assets/Header/home_05.jpg'
import home06 from '../../public/assets/Header/home_06.jpg'
import coming from '../../public/assets/Header/coming_soon.jpg'

export default function HeaderAbout() {
    useEffect(() => {
        // Intersection Obeserver for fixed Header
        const target = document.getElementById('fixedHeader');
        const sticky = document.getElementById('stickyHeader');

        const options = {
            root: null
        }

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach((entry) => {
                if(!entry.isIntersecting) setTimeout(() => {
                    target.classList.add('fixed-header');
                }, 100)
                if(entry.isIntersecting) target.classList.remove('fixed-header');
            })
        }, options);
        observer.observe(sticky);
    }, [])


    // Function gérant l'état du Aside Header
    function asideHeaderOpen() {
        const target = document.getElementById('asideHeader');
        target.classList.add('asideHeaderBlock');
    }
    function asideHeaderClose() {
        const target = document.getElementById('asideHeader');
        target.classList.remove('asideHeaderBlock');
    }


    return(
        <header className='z-50 flex bg-transparent justify-between font-NunitoSans text-sm font-bold items-center px-14 absolute top-0 left-0 right-0'>
            <Image src={logoFixed} alt="logo de l'entreprise" className='w-36 my-7 z-50' />

            <nav id='stickyHeader' className='flex justify-between items-center w-[36%] ml-36 z-50 max-xl:hidden'>
                <div className='relative group hover:cursor-pointer'>
                        <div className='flex items-start py-10'><p><span className='hover-nav-animation group-hover:after:scale-x-100'></span>HOME</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5' /></div>
                        <div className='bg-darkBlueBackground hidden absolute -left-72 translate-y-6 opacity-0 text-white font-normal text-base py-8 px-10 rounded-md group-hover:block group-hover:translate-y-0 group-hover:opacity-100 ease-linear duration-300'>
                            <div className='flex'>
                                <Link href='/'><div className='w-[280px] flex flex-col items-center mb-8'>
                                    <Image src={home01} alt='miniature de la page Home01' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 1</p>
                                </div></Link>

                                <Link href='/Home02'><div className='w-[280px] flex flex-col items-center'>
                                    <Image src={home02} alt='miniature de la page Home02' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 2</p>
                                </div></Link>

                                <Link href='/Home03'><div className='w-[280px] flex flex-col items-center'>
                                    <Image src={home03} alt='miniature de la page Home03' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 3</p>
                                </div></Link>

                                <Link href='/Home04'><div className='w-[280px] flex flex-col items-center'>
                                    <Image src={home04} alt='miniature de la page Home04' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 4</p>
                                </div></Link>
                            </div>

                            <div className='flex'>
                                <Link href='/Home05'><div className='w-[280px] flex flex-col items-center'>
                                    <Image src={home05} alt='miniature de la page Home05' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 5</p>
                                </div></Link>

                                <Link href='/Home06'><div className='w-[280px] flex flex-col items-center'>
                                    <Image src={home06} alt='miniature de la page Home06' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 6</p>
                                </div></Link>

                                <div className='w-[280px] flex flex-col items-center'>
                                    <Image src={coming} alt='miniature de la page Coming Soon' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)]' />
                                    <p className='text-[20px] font-bold mt-3'>Coming Soon</p>
                                </div>

                                <div className='w-[280px] flex flex-col items-center'>
                                    <Image src={coming} alt='miniature de la page Coming Soon' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)]' />
                                    <p className='text-[20px] font-bold mt-3'>Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative group hover:cursor-pointer'>
                        <div className='flex items-start py-10'><p><span className='hover-nav-active--page'></span>PAGES</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5' /></div>
                        <div className='bg-darkBlueBackground hidden absolute -left-10 translate-y-6 opacity-0 text-white font-normal text-base py-8 pl-10 pr-32 rounded-md group-hover:block group-hover:translate-y-0 group-hover:opacity-100 ease-linear duration-300'>
                            <Link href='/About'><p className='mb-4 hover-underline-animation w-12'>About</p></Link>
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
                <FontAwesomeIcon icon={faBagShopping} className='w-5' />
                <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5 ml-9' />
                <button className='inline-block p-9 py-4 ml-9 bg-darkBlueBackground text-white rounded hover:cursor-pointer hover:bg-orange hover:bg-darkBlueBackground hover:border-darkBlueBackground ease-in duration-300'>CONTACT US</button>
            </div>


            {/* Header Fixed */}
            <div id='fixedHeader' className='flex justify-between invisible fixed left-0 right-0 font-NunitoSans text-sm font-bold items-center px-14 bg-white ease-linear duration-300 max-xl:hidden'>
                <Image src={logoFixed} alt="logo de l'entreprise" className='w-36 my-7' />

                <nav className='flex justify-between items-center w-[36%] ml-36 text-slightGrey z-50'>
                <div className='relative group hover:cursor-pointer hover-nav'>
                        <div className='flex items-start py-10 group'><p className='relative'><span className='hover-nav-active relative left-12 top-px'></span>HOME</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5 group-hover:rotate-180 ease-linear duration-200' /></div>
                        <div className='bg-darkBlueBackground absolute invisible -left-72 translate-y-6 opacity-0 text-white font-normal text-base py-8 px-10 rounded-md group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ease-linear duration-300'>
                            <div className='flex'>
                                <Link href='/'><div className='w-[280px] flex flex-col items-center mb-8'>
                                    <Image src={home01} alt='miniature de la page Home01' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 1</p>
                                </div></Link>

                                <Link href='/Home02'><div className='w-[280px] flex flex-col items-center'>
                                    <Image src={home02} alt='miniature de la page Home02' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 2</p>
                                </div></Link>

                                <Link href='/Home03'><div className='w-[280px] flex flex-col items-center'>
                                    <Image src={home03} alt='miniature de la page Home03' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 3</p>
                                </div></Link>

                                <Link href='/Home04'><div className='w-[280px] flex flex-col items-center'>
                                    <Image src={home04} alt='miniature de la page Home04' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 4</p>
                                </div></Link>
                            </div>

                            <div className='flex'>
                                <Link href='/Home05'><div className='w-[280px] flex flex-col items-center'>
                                    <Image src={home05} alt='miniature de la page Home05' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 5</p>
                                </div></Link>

                                <Link href='/Home06'><div className='w-[280px] flex flex-col items-center'>
                                    <Image src={home06} alt='miniature de la page Home06' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)] hover:-translate-y-4 ease-in-out duration-500' />
                                    <p className='text-[20px] font-bold mt-3'>Home 6</p>
                                </div></Link>

                                <div className='w-[280px] flex flex-col items-center'>
                                    <Image src={coming} alt='miniature de la page Coming Soon' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)]' />
                                    <p className='text-[20px] font-bold mt-3'>Coming Soon</p>
                                </div>

                                <div className='w-[280px] flex flex-col items-center'>
                                    <Image src={coming} alt='miniature de la page Coming Soon' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)]' />
                                    <p className='text-[20px] font-bold mt-3'>Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative group hover:cursor-pointer hover-nav'>
                        <div className='flex items-start py-10'><p><span className='hover-nav-animation'></span>PAGES</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5 group-hover:rotate-180 ease-linear duration-200' /></div>
                        <div className='bg-darkBlueBackground invisible absolute -left-10 translate-y-6 opacity-0 text-white font-normal text-base py-8 pl-10 pr-32 rounded-md group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ease-linear duration-300'>
                            <Link href='/About'><p className='mb-4 hover-underline-animation'>About</p></Link>
                            <p className='mb-4 w-24 hover-underline-animation'>Our Services</p>
                            <p className='mb-4 hover-underline-animation'>Our Team</p>
                            <p className='mb-4 hover-underline-animation'>Single Team</p>
                            <p className='mb-4 hover-underline-animation'>Value</p>
                            <p className='mb-4 hover-underline-animation'>Elements</p>
                            <p className='mb-4 hover-underline-animation'>Typographie</p>
                            <p className='mb-4 hover-underline-animation'>FAQ</p>
                            <p className='mb-4 hover-underline-animation'>Coming Soon</p>
                            <p className='hover-underline-animation'>Page 404</p>
                        </div>
                    </div>

                    <div className='relative group hover:cursor-pointer hover-nav'>
                        <div className='flex items-start py-10'><p><span className='hover-nav-animation right-1'></span>BLOG</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5 group-hover:rotate-180 ease-linear duration-200' /></div>
                        <div className='bg-darkBlueBackground invisible absolute flex flex-col right-0 translate-y-6 opacity-0 text-white font-normal text-base py-8 px-10 rounded-md group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ease-linear duration-300'>
                            <p className='mb-4 hover-underline-animation w-5/12'>Blog Listing</p>
                            <div className='flex justify-between items-baseline w-52 group/subdiv'>
                                <p className='mb-4 hover-underline-animation'>Blog Grid</p><FontAwesomeIcon icon={faAngleRight} className='w-2.5 relative top-1 group-hover/subdiv:rotate-180 ease-linear duration-200' />
                                <div className='bg-darkBlueBackground invisible absolute translate-y-4 opacity-0 right-[293px] top-12 rounded-md pl-10 pr-20 py-8 group-hover/subdiv:visible group-hover/subdiv:translate-y-0 group-hover/subdiv:opacity-100 ease-linear duration-300'>
                                    <p className='hover-underline-animation mb-4'>2 Columns</p>
                                    <p className='hover-underline-animation mb-4'>2 columns + Sidebar</p>
                                    <p className='hover-underline-animation mb-4'>3 Columns</p>
                                    <p className='hover-underline-animation w-40'>4 Columns Full Width</p>
                                </div>
                            </div>

                            <div className='flex justify-between items-baseline w-52 group/subdiv'>
                                <p className='mb-4 hover-underline-animation'>Blog Mansory</p><FontAwesomeIcon icon={faAngleRight} className='w-2.5 relative top-1 group-hover/subdiv:rotate-180 ease-linear duration-200' />
                                <div className='bg-darkBlueBackground invisible absolute translate-y-4 opacity-0 right-[293px] top-20 rounded-md pl-10 pr-20 py-8 group-hover/subdiv:visible group-hover/subdiv:translate-y-0 group-hover/subdiv:opacity-100 ease-linear duration-300'>
                                    <p className='hover-underline-animation mb-4'>2 Columns</p>
                                    <p className='hover-underline-animation mb-4'>2 columns + Sidebar</p>
                                    <p className='hover-underline-animation mb-4'>3 Columns</p>
                                    <p className='hover-underline-animation w-40'>4 Columns Full Width</p>
                                </div>
                            </div>

                            <div className='flex justify-between items-baseline w-52 group/subdiv'>
                                <p className='mb-4 hover-underline-animation'>Blog Single</p><FontAwesomeIcon icon={faAngleRight} className='w-2.5 relative top-1 group-hover/subdiv:rotate-180 ease-linear duration-200' />
                                <div className='bg-darkBlueBackground invisible absolute translate-y-4 opacity-0 right-[293px] top-32 rounded-md pl-10 pr-20 py-8 group-hover/subdiv:visible group-hover/subdiv:translate-y-0 group-hover/subdiv:opacity-100 ease-linear duration-300'>
                                    <p className='hover-underline-animation w-16 mb-4'>Standard</p>
                                    <p className='hover-underline-animation mb-4'>Video</p>
                                    <p className='hover-underline-animation mb-4'>Gallery</p>
                                    <p className='hover-underline-animation mb-4'>Link</p>
                                    <p className='hover-underline-animation mb-4'>Quote</p>
                                    <p className='hover-underline-animation'>Music</p>
                                </div>
                            </div>

                            <div className='flex justify-between items-baseline w-52 group/subdiv'>
                                <p className='mb-4 hover-underline-animation'>Single Layouts</p><FontAwesomeIcon icon={faAngleRight} className='w-2.5 relative top-1 group-hover/subdiv:rotate-180 ease-linear duration-200' />
                                <div className='bg-darkBlueBackground invisible absolute translate-y-4 opacity-0 right-[293px] top-20 rounded-md pl-10 pr-20 py-8 group-hover/subdiv:visible group-hover/subdiv:translate-y-0 group-hover/subdiv:opacity-100 ease-linear duration-300'>
                                    <p className='hover-underline-animation w-28 mb-4'>Overlay Image</p>
                                    <p className='hover-underline-animation mb-4'>Title First</p>
                                    <p className='hover-underline-animation'>Image First</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative group hover:cursor-pointer hover-nav'>
                        <div className='flex items-start py-10'><p><span className='hover-nav-animation left-4'></span>PORTFOLIO</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5 group-hover:rotate-180 ease-linear duration-200' /></div>
                        <div className='bg-darkBlueBackground flex flex-col invisible absolute right-0 translate-y-6 opacity-0 text-white font-normal text-base py-8 px-10 rounded-md group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ease-linear duration-300'>
                        <div className='flex justify-between items-baseline w-52 group/subdiv'>
                                <p className='mb-4 hover-underline-animation'>Portfolio Grid</p><FontAwesomeIcon icon={faAngleRight} className='w-2.5 relative top-1 group-hover/subdiv:rotate-180 ease-linear duration-200' />
                                <div className='bg-darkBlueBackground invisible absolute translate-y-4 opacity-0 right-[293px] top-1.5 rounded-md pl-10 pr-20 py-8 group-hover/subdiv:visible group-hover/subdiv:translate-y-0 group-hover/subdiv:opacity-100 ease-linear duration-300'>
                                    <p className='hover-underline-animation mb-4'>2 Columns</p>
                                    <p className='hover-underline-animation mb-4'>3 Columns</p>
                                    <p className='hover-underline-animation mb-4 w-32'>4 Columns Wide</p>
                                    <p className='hover-underline-animation'>5 Colums Wide</p>
                                </div>
                            </div>

                            <div className='flex justify-between items-baseline w-52 group/subdiv'>
                                <p className='mb-4 hover-underline-animation w-2/3'>Portfolio Masonry</p><FontAwesomeIcon icon={faAngleRight} className='w-2.5 relative top-1 group-hover/subdiv:rotate-180 ease-linear duration-200' />
                                <div className='bg-darkBlueBackground invisible absolute translate-y-4 opacity-0 right-[293px] top-11 rounded-md pl-10 pr-48 py-8 group-hover/subdiv:visible group-hover/subdiv:translate-y-0 group-hover/subdiv:opacity-100 ease-linear duration-300'>
                                    <p className='hover-underline-animation w-14 mb-4'>Style 1</p>
                                    <p className='hover-underline-animation mb-4'>Style 2</p>
                                    <p className='hover-underline-animation'>Style 3</p>
                                </div>
                            </div>

                            <p className='mb-4 hover-underline-animation w-32'>Portfolio Gallery</p>
                            <p className='hover-underline-animation w-12'>Single</p>
                        </div>
                    </div>

                    <div className='relative group hover:cursor-pointer hover-nav'>
                        <div className='flex items-start py-10'><p><span className='hover-nav-animation right-1'></span>SHOP</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5 group-hover:rotate-180 ease-linear duration-200' /></div>
                        <div className='bg-darkBlueBackground invisible absolute right-0 translate-y-6 opacity-0 text-white font-normal text-base py-8 pl-10 pr-32 rounded-md group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ease-linear duration-300'>
                            <p className='mb-4 hover-underline-animation'>Shop</p>
                            <p className='mb-4 hover-underline-animation'>Cart</p>
                            <p className='w-18 hover-underline-animation'>Checkout</p>
                        </div>
                    </div>

                    <p className='hover-nav'><span className='hover-nav-animation realtive left-2'></span>CONTACTS</p>
                </nav>

                <div className='flex items-center justify-end w-2/12'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5' />
                    <button className='inline-block p-9 text-black py-4 ml-9 border-solid border border-orangeBright rounded hover:cursor_pointer hover:text-white hover:bg-darkBlueBackground hover:border-darkBlueBackground ease-in duration-300'>CONTACT US</button>
                </div>
            </div>



            {/* Header Small Device */}
            <div className='bg-darkBlueBackground flex justify-between items-center absolute top-0 left-0 right-0 h-28 text-white px-20 min-xl:hidden indexHeader 650:px-6'>
                <FontAwesomeIcon icon={faBars} onClick={asideHeaderOpen} className='w-5' />
                <Image src={logoQueries} alt='logo de entreprise' />
                <FontAwesomeIcon icon={faMagnifyingGlass} className='w-6' />

                <div id='asideHeader' className='hidden fixed left-0 top-0 bottom-0 bg-darkBlueBackground p-9 -translate-x-40 ease-in-out duration-500'>
                    <div className='absolute top-0 left-96 z-50 px-4 py-3 850:left-60' onClick={asideHeaderClose}><FontAwesomeIcon icon={faXmark} className='w-4 text-white' /></div>
                    <Image src={logoQueries} alt='logo de entreprise' className='ml-4 mb-6' />

                    <div>
                        <div className='group'>
                            <div className='flex items-center justify-between pt-8 font-semibold text-sm group-hover:text-orange ease-linear duration-300'><p>HOME</p><FontAwesomeIcon icon={faAngleRight} className='w-3 group-hover:rotate-90 ease-in duration-200' /></div>
                            <div className='ml-8 hidden group-hover:block'>
                                <Link href='/'><p className='mb-6 mt-10 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[58px]'>Home 1</p></Link>
                                <Link href='/Home02'><p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[58px]'>Home 2</p></Link>
                                <Link href='/Home03'><p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[58px]'>Home 3</p></Link>
                                <Link href='/Home04'><p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[58px]'>Home 4</p></Link>
                                <Link href='/Home05'><p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[58px]'>Home 5</p></Link>
                                <Link href='/Home06'><p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[58px]'>Home 6</p></Link>
                                <p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[100px]'>Coming Soon</p>
                                <p className='mb-3 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[100px]'>Coming Soon</p>
                            </div>
                        </div>

                        <div className='group'>
                            <div className='flex items-center justify-between pt-8 font-semibold text-sm group-hover:text-orange ease-linear duration-300'><p>PAGES</p><FontAwesomeIcon icon={faAngleRight} className='w-3 group-hover:rotate-90 ease-in duration-200' /></div>
                            <div className='ml-8 hidden group-hover:block'>
                                <Link href='/About'><p className='mb-6 mt-10 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[48px]'>About</p></Link>
                                <p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[90px]'>Our Services</p>
                                <p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[70px]'>Our Team</p>
                                <p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[85px]'>Single Team</p>
                                <p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[42px]'>Value</p>
                                <p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[64px]'>Elements</p>
                                <p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[85px]'>Typography</p>
                                <p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[30px]'>FAQ</p>
                                <p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[100px]'>Coming Soon</p>
                                <p className='mb-3 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[65px]'>Page 404</p>
                            </div>
                        </div>

                        <div className='group'>
                            <div className='flex items-center justify-between pt-8 font-semibold text-sm group-hover:text-orange ease-linear duration-300'><p>BLOG</p><FontAwesomeIcon icon={faAngleRight} className='w-3 group-hover:rotate-90 ease-in duration-200' /></div>
                            <div className='ml-8 hidden group-hover:block'>
                                <p className='mb-6 mt-10 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[85px]'>Blog Listing</p>
                                <p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[70px]'>Blog Grid</p>
                                <p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[100px]'>Blog Masonry</p>
                                <p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[80px]'>Blog Single</p>
                                <p className='mb-3 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[107px]'>Single Layouts</p>
                            </div>
                        </div>

                        <div className='group'>
                            <div className='flex items-center justify-between pt-8 font-semibold text-sm group-hover:text-orange ease-linear duration-300'><p>PORTFOLIO</p><FontAwesomeIcon icon={faAngleRight} className='w-3 group-hover:rotate-90 ease-in duration-200' /></div>
                            <div className='ml-8 hidden group-hover:block'>
                                <p className='mb-6 mt-10 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[100px]'>Portfolio Grid</p>
                                <p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[130px]'>Portfolio Masonry</p>
                                <p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[120px]'>Portfolio Sallery</p>
                                <p className='mb-3 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[45px]'>Single</p>
                            </div>
                        </div>

                        <div className='group'>
                            <div className='flex items-center justify-between pt-8 font-semibold text-sm group-hover:text-orange ease-linear duration-300'><p>SHOP</p><FontAwesomeIcon icon={faAngleRight} className='w-3 group-hover:rotate-90 ease-in duration-200' /></div>
                            <div className='ml-8 hidden group-hover:block'>
                                <p className='mb-6 mt-10 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[35px]'>Shop</p>
                                <p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[30px]'>Cart</p>
                                <p className='mb-3 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[70px]'>Checkout</p>
                            </div>
                        </div>

                        <p className='flex items-center justify-between py-8 font-semibold text-sm hover:text-orange ease-linear duration-300'>CONTACTS</p>
                    </div>

                    <div className='pt-4 relative'>
                        <p className='bg-white text-[#7e7e7e] rounded w-[320px] p-3 850:w-[180px]'>Search ...</p><div className='absolute bottom-0.5 right-0.5 bg-darkBlueBackground p-3 rounded'><FontAwesomeIcon icon={faMagnifyingGlass} className='w-4' /></div>
                    </div>
                </div>
            </div>
        </header>
    )
}