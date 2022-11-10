import Image from "next/image";

import slide1 from '../../public/assets/Home01/landing_slide_1.jpg'
import slide2 from '../../public/assets/Home01/landing_slide_2.jpg'
import slide3 from '../../public/assets/Home01/landing_slide_3.jpg'
import squareOrange from '../../public/assets/Home01/landing_square_orange.png'
import squareWhite from '../../public/assets/Home01/landing_square_white.png'
import squareDark from '../../public/assets/Home01/landing_square_dark.png'

export default function Landing01() {
    return(
        <setion>
            <div className='absolute w-full'>
                <Image src={squareOrange} alt='carré orange' className='z-10 absolute top-4 -right-[450px]' />
                <Image src={squareWhite} alt='carré blanc' className='absolute top-40 -right-96'/>
                <Image src={squareWhite} alt='carré blanc' className='absolute -top-52 -left-[500px]' />
                <Image src={squareDark} alt='carré sombre' className='absolute -top-72 -left-60' />
            </div>

            <div className='text-white pt-[310px] pb-96 pl-[370px] bg-Home1FirstSlide bg-no-repeat'>
                <p className='font-semibold mb-2'>GIVING BACK - OUR COMMITMENT</p>
                <h1 className='font-Amiri text-7xl w-1/2 mb-10 leading-[80px]'>Services that Lead the Way to Better Business</h1>
                <div className='font-semibold'>
                    <button className="rounded bg-orange py-5 px-11 mr-5 text-sm border-transparent border-solid border hover:bg-transparent hover:border-solid hover:border hover:border-[#c0c0c3] ease-in-out duration-500">LEARN MORE</button>
                    <button className="rounded border border-[#c0c0c3] border-solid py-5 px-11 text-sm hover:bg-white hover:text-black ease-in-out duration-500">GET IN TOUCH</button>
                </div>
            </div>
        </setion>
    )
}