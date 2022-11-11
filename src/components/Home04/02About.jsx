import Image from "next/image"

import women from '../../public/assets/Home04/about_women.png'
import dot from '../../public/assets/Home04/about_dot.png'
import video from '../../public/assets/Home04/about_video.png'

export default function AboutHome04() {
    return(
        <section className='mt-20 mb-28 relative'>
            <div className='flex justify-center ml-16 mb-40'>
                <div className='relative'>
                    <Image src={dot} alt='femme travaillant sur un ordinateur' className='absolute left-0' />
                    <Image src={women} alt='femme travaillant sur un ordinateur' className='relative' />
                    <Image src={video} alt='femme travaillant sur un ordinateur' className='absolute -bottom-20 -right-14' />
                </div>

                <div className='w-1/3 relative mt-20 ml-32'>
                    <h2 className='text-orange font-bold mb-3 relative'>ABOUT ZIKZAG<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h3 className="w-2/3 font-Amiri text-5xl text-slightGrey leading-tight mb-4 max-xl:w-full">Generating New Business Ideas</h3>
                    <p className="w-9/12 text-greyText text-lg leading-8 mb-8 max-xl:w-full">We seamlessly merge two key components – economics and information technology. This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service. The challenges it presents may seem daunting, but we help you approach change with confidence, adapt with purpose.</p>
                    <button className="text-white bg-orange font-semibold py-4 px-9 rounded hover:bg-darkBlueBackground ease-in-out duration-500">LEARN MORE</button>
                </div>
            </div>

            <div className='flex justify-between w-7/12 m-auto'>
                <div className='flex items-center'>
                    <p className='text-orange text-7xl font-Amiri mr-3'>15</p>
                    <p className='text-sm font-bold text-slightGrey w-1/2'>YEARS OF EXPERIENCE</p>
                </div>

                <div className='flex items-center'>
                    <p className='text-orange text-7xl font-Amiri mr-3'>250</p>
                    <p className='text-sm font-bold text-slightGrey w-5/12'>TRUSTED CLIENTS</p>
                </div>

                <div className='flex items-center'>
                    <p className='text-orange text-7xl font-Amiri mr-3'>36</p>
                    <p className='text-sm font-bold text-slightGrey w-1/2'>VISITED CONFERENCES</p>
                </div>

                <div className='flex items-center'>
                    <p className='text-orange text-7xl font-Amiri mr-3'>17</p>
                    <p className='text-sm font-bold text-slightGrey w-1/2'>MASTER CERTIFICATION</p>
                </div>
            </div>
        </section>
    )
}