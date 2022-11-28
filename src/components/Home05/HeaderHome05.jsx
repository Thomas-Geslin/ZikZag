import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faAngleDown, faAngleRight, faXmark, faBagShopping } from '@fortawesome/free-solid-svg-icons'

import logo from "../../public/assets/Home02/logo.png"
import logoQueries from '../../public/assets/Home02/logo_consultancy.png'

import home01 from '../../public/assets/Header/home_01.jpg'
import home02 from '../../public/assets/Header/home_02.jpg'
import home03 from '../../public/assets/Header/home_03.jpg'
import home04 from '../../public/assets/Header/home_04.jpg'
import home05 from '../../public/assets/Header/home_05.jpg'
import home06 from '../../public/assets/Header/home_06.jpg'
import coming from '../../public/assets/Header/coming_soon.jpg'


export default function HeaderHome05() {
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
                    target.style.backgroundColor = 'white';
                }, 100)
                if(entry.isIntersecting) {
                    target.classList.remove('fixed-header');
                    target.style.backgroundColor = 'transparent';
                }
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
        <header className='z-20 absolute top-0 right-0 left-0 bg-transparent'>
            <div id='stickyHeader' className="flex font-Amiri text-white h-1.5 max-xl:hidden relative">
                <span className='w-1/3 bg-darkBlueBackground relative z-50'></span>
                <span className='w-1/3 bg-orange'></span>
                <span className='w-1/3 bg-orange opacity-30'></span>
            </div>

            <div id='fixedHeader' className='flex justify-between font-NunitoSans text-sm font-bold items-center px-14 bg-transparent max-xl:hidden'>
                <Image src={logo} alt="logo de l'entreprise" className='w-36 my-7' />

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

                                <Link href='/Home09'><div className='w-[280px] flex flex-col items-center'>
                                    <Image src={coming} alt='miniature de la page Coming Soon' className='rounded-md shadow-[11px_11px_15px_1px_rgb(0,0,0,0.50)]' />
                                    <p className='text-[20px] font-bold mt-3'>Coming Soon</p>
                                </div></Link>

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
                            <Link href='/Pages/About'><p className='mb-4 hover-underline-animation'>About</p></Link>
                            <Link href='/Pages/OurServices'><p className='mb-4 w-24 hover-underline-animation'>Our Services</p></Link>
                            <Link href='/Pages/OurTeam'><p className='mb-4 hover-underline-animation'>Our Team</p></Link>
                            <Link href='/Pages/SingleTeam'><p className='mb-4 hover-underline-animation'>Single Team</p></Link>
                            <Link href='/Pages/Value'><p className='mb-4 hover-underline-animation'>Value</p></Link>
                            <Link href='/Pages/Elements'><p className='mb-4 hover-underline-animation'>Elements</p></Link>
                            <Link href='/Pages/Typographie'><p className='mb-4 hover-underline-animation'>Typographie</p></Link>
                            <Link href='/Pages/FAQ'><p className='mb-4 hover-underline-animation'>FAQ</p></Link>
                            <Link href='/Pages/ComingSoon'><p className='mb-4 hover-underline-animation'>Coming Soon</p></Link>
                            <Link href='/Pages/Page404'><p className='hover-underline-animation'>Page 404</p></Link>
                        </div>
                    </div>

                    <div className='relative group hover:cursor-pointer hover-nav'>
                        <div className='flex items-start py-10'><p><span className='hover-nav-animation right-1'></span>BLOG</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5 group-hover:rotate-180 ease-linear duration-200' /></div>
                        <div className='bg-darkBlueBackground invisible absolute flex flex-col right-0 translate-y-6 opacity-0 text-white font-normal text-base py-8 px-10 rounded-md group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ease-linear duration-300'>
                            <Link href='/Blog/Listing'><p className='mb-4 hover-underline-animation w-5/12'>Blog Listing</p></Link>
                            <div className='flex justify-between items-baseline w-52 group/subdiv'>
                                <p className='mb-4 hover-underline-animation'>Blog Grid</p><FontAwesomeIcon icon={faAngleRight} className='w-2.5 relative top-1 group-hover/subdiv:rotate-180 ease-linear duration-200' />
                                <div className='bg-darkBlueBackground invisible absolute translate-y-4 opacity-0 right-[293px] top-12 rounded-md pl-10 pr-20 py-8 group-hover/subdiv:visible group-hover/subdiv:translate-y-0 group-hover/subdiv:opacity-100 ease-linear duration-300'>
                                    <Link href='/Blog/BlogGrid/2Columns'><p className='hover-underline-animation mb-4'>2 Columns</p></Link>
                                    <Link href='/Blog/BlogGrid/2ColumnsSidebar'><p className='hover-underline-animation mb-4'>2 columns + Sidebar</p></Link>
                                    <Link href='/Blog/BlogGrid/3Columns'><p className='hover-underline-animation mb-4'>3 Columns</p></Link>
                                    <Link href='/Blog/BlogGrid/4Columns'><p className='hover-underline-animation w-40'>4 Columns Full Width</p></Link>
                                </div>
                            </div>

                            <div className='flex justify-between items-baseline w-52 group/subdiv'>
                                <p className='mb-4 hover-underline-animation'>Blog Mansory</p><FontAwesomeIcon icon={faAngleRight} className='w-2.5 relative top-1 group-hover/subdiv:rotate-180 ease-linear duration-200' />
                                <div className='bg-darkBlueBackground invisible absolute translate-y-4 opacity-0 right-[293px] top-20 rounded-md pl-10 pr-20 py-8 group-hover/subdiv:visible group-hover/subdiv:translate-y-0 group-hover/subdiv:opacity-100 ease-linear duration-300'>
                                    <Link href='/Blog/BlogMasonry/2Columns'><p className='hover-underline-animation mb-4'>2 Columns</p></Link>
                                    <Link href='/Blog/BlogMasonry/2ColumnsSidebar'><p className='hover-underline-animation mb-4'>2 columns + Sidebar</p></Link>
                                    <Link href='/Blog/BlogMasonry/3Columns'><p className='hover-underline-animation mb-4'>3 Columns</p></Link>
                                    <Link href='/Blog/BlogMasonry/4Columns'><p className='hover-underline-animation w-40'>4 Columns Full Width</p></Link>
                                </div>
                            </div>

                            <div className='flex justify-between items-baseline w-52 group/subdiv'>
                                <p className='mb-4 hover-underline-animation'>Blog Single</p><FontAwesomeIcon icon={faAngleRight} className='w-2.5 relative top-1 group-hover/subdiv:rotate-180 ease-linear duration-200' />
                                <div className='bg-darkBlueBackground invisible absolute translate-y-4 opacity-0 right-[293px] top-32 rounded-md pl-10 pr-20 py-8 group-hover/subdiv:visible group-hover/subdiv:translate-y-0 group-hover/subdiv:opacity-100 ease-linear duration-300'>
                                    <Link href='/Blog/BlogSingle/Standard'><p className='hover-underline-animation w-16 mb-4'>Standard</p></Link>
                                    <Link href='/Blog/BlogSingle/Video'><p className='hover-underline-animation mb-4'>Video</p></Link>
                                    <Link href='/Blog/BlogSingle/Gallery'><p className='hover-underline-animation mb-4'>Gallery</p></Link>
                                    <Link href='/Blog/BlogSingle/Link'><p className='hover-underline-animation mb-4'>Link</p></Link>
                                    <Link href='/Blog/BlogSingle/Quote'><p className='hover-underline-animation mb-4'>Quote</p></Link>
                                    <Link href='/Blog/BlogSingle/Music'><p className='hover-underline-animation'>Music</p></Link>
                                </div>
                            </div>

                            <div className='flex justify-between items-baseline w-52 group/subdiv'>
                                <p className='mb-4 hover-underline-animation'>Single Layouts</p><FontAwesomeIcon icon={faAngleRight} className='w-2.5 relative top-1 group-hover/subdiv:rotate-180 ease-linear duration-200' />
                                <div className='bg-darkBlueBackground invisible absolute translate-y-4 opacity-0 right-[293px] top-20 rounded-md pl-10 pr-20 py-8 group-hover/subdiv:visible group-hover/subdiv:translate-y-0 group-hover/subdiv:opacity-100 ease-linear duration-300'>
                                    <Link href='/Blog/SingleLayouts/OverlayImage'><p className='hover-underline-animation w-28 mb-4'>Overlay Image</p></Link>
                                    <Link href='/Blog/SingleLayouts/TitleFirst'><p className='hover-underline-animation mb-4'>Title First</p></Link>
                                    <Link href='/Blog/SingleLayouts/ImageFirst'><p className='hover-underline-animation'>Image First</p></Link>
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
                                    <Link href='/Portfolio/PortfolioGrid/2Columns'><p className='hover-underline-animation mb-4'>2 Columns</p></Link>
                                    <Link href='/Portfolio/PortfolioGrid/3Columns'><p className='hover-underline-animation mb-4'>3 Columns</p></Link>
                                    <Link href='/Portfolio/PortfolioGrid/4Columns'><p className='hover-underline-animation mb-4 w-32'>4 Columns Wide</p></Link>
                                    <Link href='/Portfolio/PortfolioGrid/5Columns'><p className='hover-underline-animation'>5 Colums Wide</p></Link>
                                </div>
                            </div>

                            <div className='flex justify-between items-baseline w-52 group/subdiv'>
                                <p className='mb-4 hover-underline-animation w-2/3'>Portfolio Masonry</p><FontAwesomeIcon icon={faAngleRight} className='w-2.5 relative top-1 group-hover/subdiv:rotate-180 ease-linear duration-200' />
                                <div className='bg-darkBlueBackground invisible absolute translate-y-4 opacity-0 right-[293px] top-11 rounded-md pl-10 pr-48 py-8 group-hover/subdiv:visible group-hover/subdiv:translate-y-0 group-hover/subdiv:opacity-100 ease-linear duration-300'>
                                    <Link href='/Portfolio/PortfolioMasonry/Style-1'><p className='hover-underline-animation w-14 mb-4'>Style 1</p></Link>
                                    <Link href='/Portfolio/PortfolioMasonry/Style-2'><p className='hover-underline-animation mb-4'>Style 2</p></Link>
                                    <Link href='/Portfolio/PortfolioMasonry/Style-3'><p className='hover-underline-animation'>Style 3</p></Link>
                                </div>
                            </div>

                            <Link href='/Portfolio/Gallery'><p className='mb-4 hover-underline-animation w-32'>Portfolio Gallery</p></Link>
                            <Link href='/Portfolio/Single'><p className='hover-underline-animation w-12'>Single</p></Link>
                        </div>
                    </div>

                    <div className='relative group hover:cursor-pointer hover-nav'>
                        <div className='flex items-start py-10'><p><span className='hover-nav-animation right-1'></span>SHOP</p><FontAwesomeIcon icon={faAngleDown} className='w-3 text-[#979797] ml-1.5 mt-0.5 group-hover:rotate-180 ease-linear duration-200' /></div>
                        <div className='bg-darkBlueBackground invisible absolute right-0 translate-y-6 opacity-0 text-white font-normal text-base py-8 pl-10 pr-32 rounded-md group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ease-linear duration-300'>
                            <Link href='/Shop/Shop/Page1'><p className='mb-4 hover-underline-animation'>Shop</p></Link>
                            <Link href='/Shop/Cart'><p className='mb-4 hover-underline-animation'>Cart</p></Link>
                            <Link href='/Shop/Checkout'><p className='w-18 hover-underline-animation'>Checkout</p></Link>
                        </div>
                    </div>

                    <Link href='/Contacts'><p className='hover-nav'><span className='hover-nav-animation realtive left-2'></span>CONTACTS</p></Link>
                </nav>

                <div className='flex items-center justify-end w-2/12'>
                    <FontAwesomeIcon icon={faBagShopping} className='w-5' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5 ml-9' />
                    <Link href='/Contacts'><button className='inline-block p-9 py-4 ml-9 bg-darkBlueBackground text-white rounded hover:cursor-pointer hover:bg-orange hover:bg-orange ease-in duration-300'>CONTACT US</button></Link>
                </div>
            </div>


            <div className='bg-darkBlueBackground flex justify-between items-center absolute top-0 left-0 right-0 h-28 text-white px-20 z-100 min-xl:hidden 650:px-6'>
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
                                <Link href='/Home09'><p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[100px]'>Coming Soon</p></Link>
                                <p className='mb-3 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[100px]'>Coming Soon</p>
                            </div>
                        </div>

                        <div className='group'>
                            <div className='flex items-center justify-between pt-8 font-semibold text-sm group-hover:text-orange ease-linear duration-300'><p>PAGES</p><FontAwesomeIcon icon={faAngleRight} className='w-3 group-hover:rotate-90 ease-in duration-200' /></div>
                            <div className='ml-8 hidden group-hover:block'>
                                <Link href='/Pages/About'><p className='mb-6 mt-10 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[48px]'>About</p></Link>
                                <Link href='/Pages/OurServices'><p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[95px]'>Our Services</p></Link>
                                <Link href='/Pages/OurTeam'><p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[75px]'>Our Team</p></Link>
                                <Link href='/Pages/SingleTeam'><p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[90px]'>Single Team</p></Link>
                                <Link href='/Pages/Value'><p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[42px]'>Value</p></Link>
                                <Link href='/Pages/Elements'><p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[64px]'>Elements</p></Link>
                                <Link href='/Pages/Typographie'><p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[85px]'>Typography</p></Link>
                                <Link href='/Pages/FAQ'><p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[30px]'>FAQ</p></Link>
                                <Link href='/Pages/ComingSoon'><p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[100px]'>Coming Soon</p></Link>
                                <Link href='/Pages/404'><p className='mb-3 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[70px]'>Page 404</p></Link>
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
                                <Link href='/Shop/Shop/Page1'><p className='mb-6 mt-10 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[35px]'>Shop</p></Link>
                                <Link href='/Shop/Shop/Cart'><p className='mb-6 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[30px]'>Cart</p></Link>
                                <Link href='/Shop/Shop/Checkout'><p className='mb-3 hover:border-b hover:border-b-px hover:border-b-orange hover:text-orange ease-linear duration-200 w-[70px]'>Checkout</p></Link>
                            </div>
                        </div>

                        <Link href='/Pages/Contacts'><p className='flex items-center justify-between py-8 font-semibold text-sm hover:text-orange ease-linear duration-300'>CONTACTS</p></Link>
                    </div>

                    <div className='pt-4 relative'>
                        <p className='bg-white text-[#7e7e7e] rounded w-[320px] p-3 850:w-[180px]'>Search ...</p><div className='absolute top-[18px] right-1.5 bg-darkBlueBackground p-3 rounded'><FontAwesomeIcon icon={faMagnifyingGlass} className='w-4' /></div>
                    </div>
                </div>
            </div>
        </header>
    )
}