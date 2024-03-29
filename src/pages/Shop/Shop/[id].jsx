import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBag, faStar } from "@fortawesome/free-solid-svg-icons"

import { ItemsData } from "../../../datas/Shop/ItemsData"

import HeaderSecond from '../../../components/HeaderSecond'
import Footer from "../../../components/Footer"

import avatar1 from '../../../public/assets/SHOP/avatar_1.png'
import avatar2 from '../../../public/assets/SHOP/avatar_2.png'

import item3 from '../../../public/assets/SHOP/item_3.jpg'
import item6 from '../../../public/assets/SHOP/item_6.jpg'
import item7 from '../../../public/assets/SHOP/item_7.jpg'
import item10 from '../../../public/assets/SHOP/item_10.jpg'
import item20 from '../../../public/assets/SHOP/item_20.jpg'


export default function ItemPage() {
    const [mode, setMode] = useState('description');

    const router = useRouter();
    const { id } = router.query;
    const data = ItemsData[id];

    // Function that change between Review and Description
    function changeMode(modeChoose) {
        let target = document.getElementById(modeChoose);
        let remove = document.querySelector('.activeModeItemPage');
        remove.classList.remove('activeModeItemPage');
        target.classList.add('activeModeItemPage');
    }


    // function that handle incr and decr for input number
    function inc(element) {
        let el = document.getElementById(element);
        el.value = parseInt(el.value) + 1;
    }
      
    function dec(element) {
      let el = document.getElementById(element);
        if (parseInt(el.value) > 0) {
          el.value = parseInt(el.value) - 1;
      }
    }


    function addToCart(name, picture, price) {
        const itemData = {
            name: name,
            price: price,
            picture: picture
        }

        let storageData = sessionStorage.getItem('itemData');
        let data = JSON.parse(storageData);
        if(!data) {
            let itemArray = [];
            itemArray.push(itemData);

            sessionStorage.setItem('itemData', JSON.stringify(itemArray));
            location.reload();
        } else {
            data.push(itemData);

            sessionStorage.setItem('itemData', JSON.stringify(data));
            location.reload();
        }
    }



    return(
        <div class='font-NunitoSans'>
            <Head>
                {data != undefined && <title>ZikZag | {data.name}</title>}
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            {data != undefined && 
            <main>
                <section className="bg-singleLayoutsStandardBackground bg-cover bg-no-repeat text-center text-white mb-24">
                    <h1 className="font-Amiri text-6xl pt-60 mb-6">{data.name}</h1>
                    <p className="font-semibold text-sm pb-48 z-10 uppercase"><span className="opacity-50">HOME &gt; {data.categorie} &gt;</span> {data.name}</p>
                </section>

                <div class='w-[74%] m-auto mb-40 pl-[5%] max-2xl: pl-0 850:w-[90%] 850:pl-0'>
                    <div className='flex 1050:flex-col 1050:items-center'>
                        <Image src={data.picture} alt="photo de l'article" className='min-w-[540px] min-h-[540px] 650:min-w-[310px] 650:min-h-[310px]' />

                        <div className='pl-20 650:pl-[5%]'>
                            <h2 className='text-slightGrey text-4xl font-Amiri mb-6 1050:mt-10'>{data.name}</h2>
                            <p className='text-[#14212b] font-bold text-2xl mb-8'>{data.price}</p>
                            <p className='text-greyText leading-7 w-8/12 min-w-[525px] xl-2xl:min-w-[450px] max-xl:min-w-[300px] max-xl:w-10/12'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        
                            <span className='absolute bg-[#d6d6d6] h-px w-24 mt-8'></span>

                            <p className='mt-16 text-slightGrey font-bold mb-10'>Categories: <span className='font-normal text-greyText'>{data.categorie}</span></p>

                            <div className='flex'>
                            <div class='relative quantity flex mr-4'>
                                    <input name='number' id='number' type='number' defaultValue={1} step={1} placeholder='1' inputMode='numeric' min={1} max={9} className='bg-greyBackground font-bold pl-4 rounded outline-none' />
                                    <div className='flex flex-col'>
                                        <button onClick={() => inc('number')} className='bg-greyBackground font-bold text-lg h-[26px] w-[36px]'>+</button>
                                        <button onClick={() => dec('number')} className='bg-greyBackground font-bold text-lg h-[26px] w-[36px]'>-</button>
                                    </div>
                                </div>

                                <button onClick={() => addToCart(data.name, data.picture, data.price)} className="text-white font-bold text-sm bg-orange rounded py-4 px-10 hover:bg-darkBlueBackground ease-in-out duration-500">ADD TO CART</button>
                            </div>
                           
                        </div>
                    </div>

                    <Image src={data.picture} alt="photo de l'article" className='w-28 rounded border border-solid border-[#d6d6d6] mt-6 mb-10' />

                    <div className='flex mb-8'>
                        <button onClick={() => { setMode('description'); changeMode('description'); }} id='description' className="text-slightGrey font-bold rounded bg-greyBackground py-4 px-6 mr-5 hover:text-white hover:bg-darkBlueBackground ease-in-out duration-300 activeModeItemPage">Description</button>
                        <button onClick={() => { setMode('review'); changeMode('review'); }} id='review' className="text-slightGrey font-bold rounded bg-greyBackground hover:text-white hover:bg-darkBlueBackground ease-in-out duration-300 py-4 px-6">Reviews (2)</button>
                    </div>

                    {mode === 'description'
                    ? <p className='text-greyText leading-7 mb-10'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
                   
                    : <div className='mt-20 mb-20'>
                        <div className='flex'>
                            <Image src={avatar1} alt='photo de profil' className='w-20 h-20' />
                            <div className='pl-6'>
                                <div className='flex'>
                                    <p className='text-slightGrey font-bold mr-5'>Cobus Bester</p>
                                    <FontAwesomeIcon icon={faStar} className='w-3.5 text-[#f9d322]' />
                                    <FontAwesomeIcon icon={faStar} className='w-3.5 text-[#f9d322]' />
                                    <FontAwesomeIcon icon={faStar} className='w-3.5 text-[#f9d322]' />
                                    <FontAwesomeIcon icon={faStar} className='w-3.5 text-[#f9d322]' />
                                    <FontAwesomeIcon icon={faStar} className='w-3.5 text-[#bcbcbc]' />
                                </div>
                                <p className='text-sm font-bold text-[#bcbcbc] mb-2'>June 7, 2013</p>
                                <p className='text-greyText'>Really happy with this print. The colors are great, and the paper quality is good too.</p>
                            </div>
                        </div>

                        <span className='bg-[#e5e5e5] absolute mt-10 h-px w-[61.5%]'></span>

                        <div className='flex mt-20'>
                            <Image src={avatar2} alt='photo de profil' className='w-20 h-20' />
                            <div className='pl-6'>
                                <div className='flex'>
                                    <p className='text-slightGrey font-bold mr-5'>Coen Jacobs</p>
                                    <FontAwesomeIcon icon={faStar} className='w-3.5 text-[#f9d322]' />
                                    <FontAwesomeIcon icon={faStar} className='w-3.5 text-[#f9d322]' />
                                    <FontAwesomeIcon icon={faStar} className='w-3.5 text-[#f9d322]' />
                                    <FontAwesomeIcon icon={faStar} className='w-3.5 text-[#bcbcbc]' />
                                    <FontAwesomeIcon icon={faStar} className='w-3.5 text-[#bcbcbc]' />
                                </div>
                                <p className='text-sm font-bold text-[#bcbcbc] mb-2'>June 7, 2013</p>
                                <p className='text-greyText'>This is my favorite poster. In fact, I’ve ordered 5 of them!</p>
                            </div>
                        </div>


                        <div className='mt-20 px-14 py-14 shadow-[10px_11px_38px_rgb(0,0,0,0.10)]'>
                            <p className='font-Amiri text-[36px]'>Add A Review</p>
                            <p className='text-greyText mb-6'>Your email address will not be published. Required fields are marked *</p>

                            <div className='flex items-center mb-5'>
                                <p className='font-semibold text-greyText mr-2.5'>Your rating</p>
                                <FontAwesomeIcon icon={faStar} className='w-3.5 mr-0.5 strokeStar text-[#f9d322]' />
                                <FontAwesomeIcon icon={faStar} className='w-3.5 mr-0.5 strokeStar text-[#f9d322]' />
                                <FontAwesomeIcon icon={faStar} className='w-3.5 mr-0.5 strokeStar text-[#f9d322]' />
                                <FontAwesomeIcon icon={faStar} className='w-3.5 mr-0.5 strokeStar text-[#f9d322]' />
                                <FontAwesomeIcon icon={faStar} className='w-3.5 mr-0.5 strokeStar text-[#f9d322]' />
                            </div>

                            <form className='flex flex-col'>
                                <div className='flex justify-between 650:flex-col'>
                                    <input type='text' placeholder='Name' className='bg-greyBackground px-4 py-2.5 rounded placeholder:text-greyText outline-none w-[49%] 650:w-full 650:mb-4'></input>

                                    <input type='text' placeholder='Email' className='bg-greyBackground px-4 py-2.5 rounded placeholder:text-greyText outline-none w-[49%] 650:w-full'></input>
                                </div>


                                <textarea placeholder='Review' className='bg-greyBackground pt-4 h-32 px-4 py-2.5 rounded mt-5 placeholder:text-greyText outline-none'></textarea>
                            </form>

                            <div className='flex'>
                                <input type='checkbox' className='mt-2.5 self-start'></input>
                                <p className='ml-3 relative top-1.5 text-greyText'>Save my name, email, and website in this browser for the next time I comment.</p>
                            </div>

                            <button className="bg-orange font-bold text-white text-sm px-12 py-3.5 mt-5 hover:bg-darkBlueBackground ease-in-out duration-300">SUBMIT</button>
                        </div>
                      </div>
                    }
                

                    <p className='font-Amiri text-slightGrey text-center text-3xl mb-10'>You May Also Like...</p>
                    <Link href='/Shop/Shop/2' className="w-[25%] 850:ml-auto 850:w-fit">
                    <div className='text-center group relative w-64 mb-16'>
                        <div className='relative'>
                            <Image src={item3} alt='photo de produit' className='w-64 rounded-md overflow-hidden hover:brightness-75 ease-in-out duration-300' />
                            <div className='flex items-center justify-center w-full text-white bg-darkBlueBackground py-4 absolute bottom-0 rounded-b-md translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ease-in-out duration-300'>
                                <FontAwesomeIcon icon={faShoppingBag} className='w-4 mr-3' />
                                <p className='text-sm font-bold relative top-1'>ADD TO CART</p>
                            </div>
                        </div>
                                        
                        <p className='text-slightGrey font-Amiri text-[22px] mt-4 hover:text-orange ease-in-out duration-300'>Happy Ninja</p>
                        <p className='font-bold text-[17px] mt-1 text-[#14212b] font-Amiri'>$35.00</p>
                    </div>
                    </Link>


                    <p className='font-Amiri text-slightGrey text-center text-3xl mb-10'>Related Products</p>
                    <div className='flex justify-between min-w-[1050px] max-xl:flex-wrap max-xl:min-w-fit 650:flex-col 650:items-center'>
                        <Link href='/Shop/Shop/19'>
                        <div className='text-center group relative w-64 mb-16'>
                            <div className='relative'>
                                <Image src={item20} alt='photo de produit' className='w-64 rounded-md overflow-hidden hover:brightness-75 ease-in-out duration-300' />
                                <div className='flex items-center justify-center w-full text-white bg-darkBlueBackground py-4 absolute bottom-0 rounded-b-md translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ease-in-out duration-300'>
                                    <FontAwesomeIcon icon={faShoppingBag} className='w-4 mr-3' />
                                    <p className='text-sm font-bold relative top-1'>ADD TO CART</p>
                                </div>
                            </div>
                                            
                            <p className='text-slightGrey font-Amiri text-[22px] mt-4 hover:text-orange ease-in-out duration-300'>Happy Ninja</p>
                            <p className='font-bold text-[17px] mt-1 text-[#14212b] font-Amiri'>$35.00</p>
                        </div>
                        </Link>

                        <Link href='/Shop/Shop/5'>
                        <div className='text-center group relative w-64 mb-16'>
                            <div className='relative'>
                                <Image src={item6} alt='photo de produit' className='w-64 rounded-md overflow-hidden hover:brightness-75 ease-in-out duration-300' />
                                <div className='flex items-center justify-center w-full text-white bg-darkBlueBackground py-4 absolute bottom-0 rounded-b-md translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ease-in-out duration-300'>
                                    <FontAwesomeIcon icon={faShoppingBag} className='w-4 mr-3' />
                                    <p className='text-sm font-bold relative top-1'>ADD TO CART</p>
                                </div>
                            </div>
                                            
                            <p className='text-slightGrey font-Amiri text-[22px] mt-4 hover:text-orange ease-in-out duration-300'>Ship Your Idea</p>
                            <p className='font-bold text-[17px] mt-1 text-[#14212b] font-Amiri'>$35.00</p>
                        </div>
                        </Link>

                        <Link href='/Shop/Shop/9'>
                        <div className='text-center group relative w-64 mb-16'>
                            <div className='relative'>
                                <Image src={item10} alt='photo de produit' className='w-64 rounded-md overflow-hidden hover:brightness-75 ease-in-out duration-300' />
                                <div className='flex items-center justify-center w-full text-white bg-darkBlueBackground py-4 absolute bottom-0 rounded-b-md translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ease-in-out duration-300'>
                                    <FontAwesomeIcon icon={faShoppingBag} className='w-4 mr-3' />
                                    <p className='text-sm font-bold relative top-1'>ADD TO CART</p>
                                </div>
                            </div>
                                            
                            <p className='text-slightGrey font-Amiri text-[22px] mt-4 hover:text-orange ease-in-out duration-300'>Woo Logo</p>
                            <p className='font-bold text-[17px] mt-1 text-[#14212b] font-Amiri'>$35.00</p>
                        </div>
                        </Link>

                        <Link href='/Shop/Shop/6'>
                        <div className='text-center group relative w-64 mb-16'>
                            <div className='relative'>
                                <Image src={item7} alt='photo de produit' className='w-64 rounded-md overflow-hidden hover:brightness-75 ease-in-out duration-300' />
                                <div className='flex items-center justify-center w-full text-white bg-darkBlueBackground py-4 absolute bottom-0 rounded-b-md translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ease-in-out duration-300'>
                                    <FontAwesomeIcon icon={faShoppingBag} className='w-4 mr-3' />
                                    <p className='text-sm font-bold relative top-1'>ADD TO CART</p>
                                </div>
                            </div>
                                            
                            <p className='text-slightGrey font-Amiri text-[22px] mt-4 hover:text-orange ease-in-out duration-300'>Woo Ninja</p>
                            <p className='font-bold text-[17px] mt-1 text-[#14212b] font-Amiri'>$20.00</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </main>
            }

            <Footer />
        </div>
    )
}