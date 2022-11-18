import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"

import HeaderSecond from '../../../components/HeaderSecond'
import Footer from "../../../components/Footer"
import ShopAside from "../../../components/Shop/ShopAside"

import { ItemsData } from "../../../datas/Shop/ItemsData"


export default function ShopPage1() {
    function setLoader() {
        
    }

    function addToCart(name, picture, price) {
        const itemData = {
            name: name,
            price: price,
            picture: picture
        }

        let itemArray = [];
        itemArray.push(itemData)

        sessionStorage.setItem('itemData', JSON.stringify(itemArray));
        location.reload();
    }


    return(
        <div class='font-NunitoSans'>
            <Head>
                <title>ZikZag | Shop Page 1</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            <main class='mb-40'>
                <section className="bg-singleLayoutsStandardBackground bg-cover bg-no-repeat text-center text-white mb-10">
                    <h1 className="font-Amiri text-6xl pt-60 mb-6">Shop</h1>
                    <p className="font-semibold text-sm pb-48 z-10"><span className="opacity-50">HOME &gt; </span> SHOP</p>
                </section>

                <div class='mx-[19%] flex justify-between'>
                    <ShopAside />

                    <div className='w-[74%] mt-14'>
                        <div className='flex justify-between mb-14'>
                            <p className='text-greyText'>Showing 1–12 of 23 results</p>

                            <select className='outline-none bg-greyBackground rounded py-3.5 px-7 text-greyText text-sm'>
                                <option>Default sorting</option>
                                <option>Sorty by popularity</option>
                                <option>Sorty by average rating</option>
                                <option>Sorty by latest</option>
                                <option>Sorty by price: low to high</option>
                                <option>Sorty by price: high to low</option>
                            </select>
                        </div>

                        <div className='grid grid-cols-3 gap-7'>
                            {ItemsData.slice(0, 12).map((el) => {
                                return(
                                    <div key={el.id}  className='text-center group relative'>
                                        {el.sale === true && <p className='text-white font-bold text-xs bg-orange py-1 px-2.5 absolute top-3 right-3 z-10 rounded'>Sale!</p>}

                                        <div className='relative overflow-hidden'>
                                            <Link href={`/Shop/Shop/${el.id}`}><Image src={el.picture} alt='photo de produit' className='rounded-md overflow-hidden group-hover:brightness-75 ease-in-out duration-300' /></Link>
                                            <button onClick={() => addToCart(el.name, el.picture, el.price)} className='flex items-center justify-center text-white bg-darkBlueBackground py-4 absolute bottom-0 w-full rounded-b-md translate-y-2 opacity-0 hover:bg-orange group-hover:translate-y-0 group-hover:opacity-100 ease-in-out duration-300'>
                                                <FontAwesomeIcon icon={faShoppingBag} className='w-4 mr-3' />
                                                <p className='text-sm font-bold relative top-1'>ADD TO CART</p>
                                            </button>
                                        </div>
                                        
                                        <p className='text-slightGrey font-Amiri text-[22px] mt-4 hover:text-orange ease-in-out duration-300'>{el.name}</p>
                                        <p className='font-bold text-[17px] mt-1'>{el.price}</p>
                                    </div>
                                )
                            })}
                        </div>

                        <div className='flex justify-center mt-12'>
                            <Link href='/Shop/Shop/Page1'><button className="text-lg font-bold inline-block text-white text-white w-12 h-12 rounded bg-darkBlueBackground border border-solid border-darkBlueBackground">1</button></Link>
                            <Link href='/Shop/Shop/Page2'><button className="text-lg font-bold inline-block text-slightGrey w-12 h-12 rounded bg-white border border-solid border-[#e5e5e5] hover:border-black ease-in-out duration-300 mx-2">2</button></Link>
                            <Link href='/Shop/Shop/Page2'><button className="text-lg font-bold inline-block text-slightGrey w-12 h-12 rounded bg-white border border-solid border-[#e5e5e5] hover:border-black ease-in-out duration-300">&gt;</button></Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}