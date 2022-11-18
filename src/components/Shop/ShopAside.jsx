import Image from "next/image"
import Link from "next/link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import aside1 from '../../public/assets/SHOP/aside_item_1.jpg'
import aside2 from '../../public/assets/SHOP/aside_item_2.jpg'
import aside3 from '../../public/assets/SHOP/aside_item_3.jpg'
import { useEffect, useState } from "react"


export default function ShopAside() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const itemData = sessionStorage.getItem('itemData');
        const item = JSON.parse(itemData);
        setItem(item);
    }, [])

    function clearCart() {
        sessionStorage.clear();
        location.reload();
    }


    return(
        <section>
            <div className='pt-4 relative my-10 mb-8'>
                <p className='bg-greyBackground text-[#7e7e7e] rounded p-3 850:w-[180px]'>Search Products ...</p><div className='absolute bottom-1 right-1 bg-darkBlueBackground p-3 rounded'><FontAwesomeIcon icon={faMagnifyingGlass} className='w-4 text-white' /></div>
            </div>


            <div className='flex relative mb-6'>
                <h3 className='font-Amiri text-2xl text-slightGrey'>Product Categories</h3>
                <span className='w-[22%] h-px bg-[#dcdcdc] absolute top-4 right-0'></span>
                <span className='w-[13%] h-[3px] bg-orange rounded absolute top-[15px] right-0'></span>
            </div>

            <div className='group flex relative hover:cursor-pointer'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 text-orange relative bottom-2 -translate-x-4 -translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 ease-in-out duration-300' /><p className='text-slightGrey font-extrabold text-sm mb-4 -translate-x-4 group-hover:text-orange group-hover:translate-x-2 ease-in-out duration-300'>ALBUMS <span className='text-[#bab3b3]'>(4)</span></p></div>
            <div className='group flex relative hover:cursor-pointer'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 text-orange relative bottom-2 -translate-x-4 -translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 ease-in-out duration-300' /><p className='text-slightGrey font-extrabold text-sm mb-4 -translate-x-4 group-hover:text-orange group-hover:translate-x-2 ease-in-out duration-300'>CLOTHING <span className='text-[#bab3b3]'>(12)</span></p></div>
            <div className='group flex relative hover:cursor-pointer'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 text-orange relative bottom-2 -translate-x-4 -translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 ease-in-out duration-300' /><p className='text-slightGrey font-extrabold text-sm mb-4 -translate-x-4 group-hover:text-orange group-hover:translate-x-2 ease-in-out duration-300'>HOODIE <span className='text-[#bab3b3]'>(6)</span></p></div>
            <div className='group flex relative hover:cursor-pointer'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 text-orange relative bottom-2 -translate-x-4 -translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 ease-in-out duration-300' /><p className='text-slightGrey font-extrabold text-sm mb-4 -translate-x-4 group-hover:text-orange group-hover:translate-x-2 ease-in-out duration-300'>MUSIC <span className='text-[#bab3b3]'>(6)</span></p></div>
            <div className='group flex relative hover:cursor-pointer'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 text-orange relative bottom-2 -translate-x-4 -translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 ease-in-out duration-300' /><p className='text-slightGrey font-extrabold text-sm mb-4 -translate-x-4 group-hover:text-orange group-hover:translate-x-2 ease-in-out duration-300'>POSTERS <span className='text-[#bab3b3]'>(5)</span></p></div>
            <div className='group flex relative hover:cursor-pointer'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 text-orange relative bottom-2 -translate-x-4 -translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 ease-in-out duration-300' /><p className='text-slightGrey font-extrabold text-sm mb-4 -translate-x-4 group-hover:text-orange group-hover:translate-x-2 ease-in-out duration-300'>SINGLES <span className='text-[#bab3b3]'>(2)</span></p></div>
            <div className='group flex relative hover:cursor-pointer'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 text-orange relative bottom-2 -translate-x-4 -translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 ease-in-out duration-300' /><p className='text-slightGrey font-extrabold text-sm mb-4 -translate-x-4 group-hover:text-orange group-hover:translate-x-2 ease-in-out duration-300'>T-SHIRTS <span className='text-[#bab3b3]'>(6)</span></p></div>
            <div className='group flex relative hover:cursor-pointer mb-8'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 text-orange relative bottom-2 -translate-x-4 -translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 ease-in-out duration-300' /><p className='text-slightGrey font-extrabold text-sm mb-4 -translate-x-4 group-hover:text-orange group-hover:translate-x-2 ease-in-out duration-300'>UNCATEGORIZED <span className='text-[#bab3b3]'>(0)</span></p></div>


            <div className='flex relative mb-4'>
                <h3 className='font-Amiri text-2xl text-slightGrey'>Price</h3>
                <span className='w-[73%] h-px bg-[#dcdcdc] absolute top-4 right-0'></span>
                <span className='w-[13%] h-[3px] bg-orange rounded absolute top-[15px] right-0'></span>
            </div>

            <div className='relative'>
                <span className='w-3 h-3 rounded-full bg-darkBlueBackground absolute'></span>
                <span className='w-full top-1 h-[3px] bg-greyBackground absolute'></span>
                <span className='w-full top-1 h-[3px] bg-darkBlueBackground absolute'></span>
                <span className='w-3 h-3 rounded-full bg-darkBlueBackground absolute right-0'></span>
            </div>

            <div className='mb-16 mt-16 flex items-center'>
                <button className="font-bold text-white bg-orange rounded px-6 py-2 hover:bg-darkBlueBackground ease-in-out duration-300">FILTER</button>
                <p className='text-greyText font-bold text-[15px] mx-4'>Price:</p>
                <p className='text-greyText font-bold text-[15px]'>$0 - $20</p>
            </div>


            <div className='flex relative mb-6'>
                <h3 className='font-Amiri text-2xl text-slightGrey'>Products</h3>
                <span className='w-[60%] h-px bg-[#dcdcdc] absolute top-4 right-0'></span>
                <span className='w-[13%] h-[3px] bg-orange rounded absolute top-[15px] right-0'></span>
            </div>

            <Link href='http://localhost:3000/Shop/Shop/22'>
            <div className='flex mb-6 group'>
                <Image src={aside1} alt='disque' className='rounded' />
                <div className='text-slightGrey ml-4'>
                    <p className='font-Amiri text-lg group-hover:text-orange ease-in-out duration-300'>Woo Single #2</p>
                    <p className='text-sm font-bold'><span className='text-xs text-[#bababa] mr-3'>$3.00</span>$2.00</p>
                </div>
            </div>
            </Link>
            <Link href='http://localhost:3000/Shop/Shop/14'>
            <div className='flex mb-6 group'>
                <Image src={aside2} alt='disque' className='rounded' />
                <div className='text-slightGrey ml-4'>
                    <p className='font-Amiri text-lg group-hover:text-orange ease-in-out duration-300'>Woo Single #4</p>
                    <p className='text-sm font-bold'>$9.00</p>
                </div>
            </div>
            </Link>
            <Link href='http://localhost:3000/Shop/Shop/21'>
            <div className='flex mb-10 group'>
                <Image src={aside3} alt='disque' className='rounded' />
                <div className='text-slightGrey ml-4'>
                    <p className='font-Amiri text-lg group-hover:text-orange ease-in-out duration-300'>Woo Single #1</p>
                    <p className='text-sm font-bold'>$3.00</p>
                </div>
            </div>
            </Link>


            <div className='flex relative mb-6'>
                <h3 className='font-Amiri text-2xl text-slightGrey'>Products Tags</h3>
                <span className='w-[40%] h-px bg-[#dcdcdc] absolute top-4 right-0'></span>
                <span className='w-[13%] h-[3px] bg-orange rounded absolute top-[15px] right-0'></span>
            </div>

            <div className='flex mb-2'>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>ALBUMS</p>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>ANALYSIS</p>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>BUSINESS</p>
            </div>
            <div className='flex mb-2'>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>FINANCE</p>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>HOODIES</p>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>MARKETING</p>
            </div>
            <div className='flex mb-12'>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>MUSIC</p>
                <p className='mr-2 bg-greyBackground text-greyText rounded py-1.5 px-2.5 text-xs font-semibold hover:bg-darkBlueBackground hover:text-white ease-in-out duration-500'>STRATEGY</p>
            </div>


            <div className='flex relative mb-6'>
                <h3 className='font-Amiri text-2xl text-slightGrey'>Cart</h3>
                <span className='w-[75%] h-px bg-[#dcdcdc] absolute top-4 right-0'></span>
                <span className='w-[13%] h-[3px] bg-orange rounded absolute top-[15px] right-0'></span>
            </div>

            {!item 
            ?   <p className='text-greyText text-center'>No products in the cart.</p>
        
            :   <div>
                    {item.map((el, index) => {
                        return(
                        <div key={index} className='flex relative group'>
                            <Image src={el.picture} alt='photo de article' className='w-[70px]' />
                            <div className='ml-4'>
                                <p className='font-Amiri text-lg mb-1.5 group-hover:text-orange ease-in-out duration-300'>{el.name}</p>
                                <p className='font-bold text-sm text-[#e5e5e5]'>1 x <span className='text-orange ml-1 font-extrabold'>{el.price}</span></p>
                            </div>
                            <FontAwesomeIcon onClick={() => clearCart()} icon={faXmark} className='w-3 text-[#e5e5e5] absolute top-0 right-0 hover:text-orange ease-in-out duration-300 hover:cursor-pointer' />
                        </div>
                        )
                        
                    })}
                </div>
            }
        </section>
    )
}   