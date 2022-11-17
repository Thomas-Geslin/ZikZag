import Image from "next/image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import aside1 from '../../public/assets/SHOP/aside_item_1.jpg'
import aside2 from '../../public/assets/SHOP/aside_item_2.jpg'
import aside3 from '../../public/assets/SHOP/aside_item_3.jpg'


export default function ShopAside() {
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

            <p className='text-slightGrey font-bold text-sm mb-4'>ALBUMS <span className='text-[#bab3b3]'>(4)</span></p>
            <p className='text-slightGrey font-bold text-sm mb-4'>CLOTHING <span className='text-[#bab3b3]'>(12)</span></p>
            <p className='text-slightGrey font-bold text-sm mb-4'>HOODIES <span className='text-[#bab3b3]'>(6)</span></p>
            <p className='text-slightGrey font-bold text-sm mb-4'>MUSIC <span className='text-[#bab3b3]'>(6)</span></p>
            <p className='text-slightGrey font-bold text-sm mb-4'>POSTERS <span className='text-[#bab3b3]'>(5)</span></p>
            <p className='text-slightGrey font-bold text-sm mb-4'>SINGLES <span className='text-[#bab3b3]'>(2)</span></p>
            <p className='text-slightGrey font-bold text-sm mb-4'>T-SHIRTS <span className='text-[#bab3b3]'>(6)</span></p>
            <p className='text-slightGrey font-bold text-sm mb-10'>UNCATEGORIZED <span className='text-[#bab3b3]'>(0)</span></p>


            <div className='flex relative mb-6'>
                <h3 className='font-Amiri text-2xl text-slightGrey'>Price</h3>
                <span className='w-[73%] h-px bg-[#dcdcdc] absolute top-4 right-0'></span>
                <span className='w-[13%] h-[3px] bg-orange rounded absolute top-[15px] right-0'></span>
            </div>


            <div className='flex relative mb-6'>
                <h3 className='font-Amiri text-2xl text-slightGrey'>Products</h3>
                <span className='w-[60%] h-px bg-[#dcdcdc] absolute top-4 right-0'></span>
                <span className='w-[13%] h-[3px] bg-orange rounded absolute top-[15px] right-0'></span>
            </div>

            <div className='flex mb-6'>
                <Image src={aside1} alt='disque' className='rounded' />
                <div className='text-slightGrey ml-4'>
                    <p className='font-Amiri text-lg'>Woo Single #2</p>
                    <p className='text-sm font-bold'><span className='text-xs text-[#bababa] mr-3'>$3.00</span>$2.00</p>
                </div>
            </div>
            <div className='flex mb-6'>
                <Image src={aside2} alt='disque' className='rounded' />
                <div className='text-slightGrey ml-4'>
                    <p className='font-Amiri text-lg'>Woo Single #4</p>
                    <p className='text-sm font-bold'>$9.00</p>
                </div>
            </div>
            <div className='flex mb-10'>
                <Image src={aside3} alt='disque' className='rounded' />
                <div className='text-slightGrey ml-4'>
                    <p className='font-Amiri text-lg'>Woo Single #1</p>
                    <p className='text-sm font-bold'>$3.00</p>
                </div>
            </div>


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

            <p className='text-greyText text-center'>No products in the cart.</p>
        </section>
    )
}   