import Image from "next/image"
import Link from "next/link"

import { WidgetData } from "../datas/Widget/WidgetData"


export default function WidgetTheme() {
    function activeWidget() {
        const target = document.getElementById('widgetThemeTarget');
        target.classList.toggle('translate-x-[364px]');
        const darkenTarget = document.getElementById('widgetThemeDarken');
        darkenTarget.classList.toggle('opacity-[0.4]');
        darkenTarget.classList.toggle('z-[1000]');
    }


    return(
        <div className='absolute top-0 right-10 max-xl:hidden'>
            <div id='widgetThemeDarken' className='bg-black w-screen fixed h-screen opacity-0 left-0 top-0 ease-in-out duration-500'></div>

            <div id='widgetThemeTarget' className='fixed right-0 top-0 z-[1000] translate-x-[364px] duration-500'>
                <button onClick={() => activeWidget()}>
                <div className="bg-[#f03759] absolute bottom-80 right-[275px] rounded-t -rotate-90 flex items-center px-4 z-[2000]">
                        <svg class="laptop" style={{ fill: 'white', paddingTop: 5, paddingBottom: 5, width: 30 }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" preserveAspectRatio="none">
                            <g>
                            <path d="M98.8,366.6h103.5c3.9,8.5,12.5,14.5,22.4,14.5h62.4c10,0,18.6-6,22.4-14.5h103.6c6.8,0,12.3-5.5,12.3-12.3 s-5.5-12.2-12.3-12.2H299.5c-6.8,0-12.3,5.5-12.3,12.2l-0.1,2.3l-62.5-0.1v-2.2c0-6.8-5.5-12.2-12.3-12.2H98.8 c-6.8,0-12.3,5.5-12.3,12.2S92,366.6,98.8,366.6z"></path>
                            <path d="M58.7,424.7h394.6c26,0,47.1-21.1,47.1-47.1v-23.2c0-6.8-5.5-12.2-12.3-12.2h-23.2V119.4c0-0.4,0-0.8-0.1-1.2 c-1.7-17.6-16-30.9-33.1-30.9H79c-17.7,0-32.1,14.4-32.1,32.1v222.7H23.8c-6.8,0-12.3,5.5-12.3,12.2v23.2 C11.5,403.5,32.7,424.7,58.7,424.7z M36,366.6h23.1c6.8,0,12.3-5.5,12.3-12.3V119.4c0-4.2,3.4-7.6,7.6-7.6h352.8 c4.3,0,8,3.6,8.7,8.3v234.2c0,6.8,5.6,12.3,12.3,12.3H476v10.9c0,12.5-10.2,22.6-22.6,22.6H58.7C46.2,400.2,36,390,36,377.6V366.6z"></path>
                            <path d="M226.1,277.4c2.3,2.3,5.4,3.6,8.7,3.6c0,0,0,0,0,0c3.2,0,6.3-1.3,8.6-3.6l72.8-72.4c4.8-4.8,4.8-12.5,0.1-17.3 c-4.8-4.8-12.5-4.8-17.3,0l-64.1,63.8l-21.8-21.9c-4.8-4.8-12.5-4.8-17.3,0c-4.8,4.8-4.8,12.5-0.1,17.3L226.1,277.4z"></path>
                            </g>
                        </svg>
                    

                    <p className='text-white font-bold text-[15px] w-36 ml-3'>Themes & Support</p>
                </div>
                </button>

                <div className='bg-white flex flex-col items-center relative -top-6 px-8 pt-12 overflow-scroll h-screen scrollHidden'>
                    <Link href='https://webgeniuslab.ticksy.com/' target='_blank'><button className="font-bold text-[15px] w-[300px] rounded text-white bg-[#f03759] py-2.5 mb-3 hover:bg-greyBackground hover:text-slightGrey ease-in-out duration-300">Support Forum</button></Link>
                    <Link href='https://themeforest.net/item/zikzag-consulting-agency-wordpress-theme/26119903?s_rank=1&license=regular&open_purchase_for_item_id=26119903&purchasable=source' target='_blank'><button className="font-bold text-[15px] w-[300px] rounded text-slightGrey bg-greyBackground py-2.5 mb-10 hover:bg-[#f03759] hover:text-white ease-in-out duration-300">Buy Theme</button></Link>

                    <div class='flex mr-auto relative mb-6'>
                        <p className='text-[#363439] text-sm font-bold bg-white shadow-[3px_3px_10px_0px_rgb(0,0,0,0.15)] rounded py-1 px-1.5'>POPULAR</p>
                        <span className='bg-[#e5e5e5] h-px absolute top-3 left-24 w-48'></span>
                        <span className='bg-[#f03759] h-[3px] rounded absolute top-[11px] left-64 w-10'></span>
                    </div>

                    {WidgetData.slice(0, 3).map((el) => {
                        return(
                            <Link href={el.href} key={el.index} target='_blank' className='mb-10'>
                            <div>
                                <Image src={el.theme} alt='photo du theme' className='w-[300px] rounded shadow-[5px_4px_16px_0px_rgb(0,0,0,0.15)] mb-2 hover:-translate-y-2 ease-in-out duration-300' />
                                <div className='flex items-center justify-between'>
                                    <p className='font-bold text-slight-grey'>{el.name} <span className='text-[13px] text-[#bcbcbc]'>/ {el.category}</span></p>
                                    <p className='font-bold text-orange'>${el.price}</p>
                                </div>
                            </div>
                            </Link>
                        )
                    })}

                    <div class='flex mr-auto relative mb-6 mt-6'>
                        <p className='text-[#363439] text-sm font-bold bg-white shadow-[3px_3px_10px_0px_rgb(0,0,0,0.15)] rounded py-1 px-1.5'>NEW THEMES</p>
                        <span className='bg-[#e5e5e5] h-px absolute top-3 left-32 w-40'></span>
                        <span className='bg-[#f03759] h-[3px] rounded absolute top-[11px] left-64 w-10'></span>
                    </div>

                    {WidgetData.slice(3, 14).map((el) => {
                        return(
                            <Link href={el.href} key={el.index} target='_blank' className='mb-10'>
                            <div>
                                <Image src={el.theme} alt='photo du theme' className='w-[300px] rounded shadow-[5px_4px_16px_0px_rgb(0,0,0,0.15)] mb-2 hover:-translate-y-2 ease-in-out duration-300' />
                                <div className='flex items-center justify-between'>
                                    <p className='font-bold text-slight-grey'>{el.name} <span className='text-[13px] text-[#bcbcbc]'>/ {el.category}</span></p>
                                    <p className='font-bold text-orange'>${el.price}</p>
                                </div>
                            </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
        
    )
}