import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'

// Assets Philosophy
import background from '../../../public/assets/PAGES/Value/benefits_women.jpg'
import philosophyLine from '../../../public/assets/Home02/philosophy_background_line.png'

// Philosophy Data
import { PhilosophyGridData } from '../../../datas/Home02/PhilisophyGridData'


export default function BenefitsValue() {
    return(
        <section className='flex relative max-2xl:flex-col'>
          <Image src={background} alt="Réunion d'entreprise" className='rounded-br-xl max-2xl:rounded-none max-2xl:w-full' />

          <div className='bg-[#14212B] w-1/2 relative rounded-tl-lg -top-10 pl-20 max-2xl:rounded-none max-2xl:w-full max-2xl:top-0 850:pb-96 650:pl-10'>
            <Image src={philosophyLine} alt='dessin de ligne de décoration' className='absolute right-1 top-1' />
            <h2 className='text-orange font-semibold mb-4 relative mt-32 650:mt-80'>OUR PHILOSOPHY<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
            <h3 className='font-Amiri text-white text-5xl w-8/12 leading-[55px] mb-4'>Our Core Values and Principes</h3>
            <p className='text-[#dddfe1] text-lg w-[72%] leading-8 mb-10'>We’ve designed a culture that allows our stewards to assimilate with our clients and bring the best of who we are to your business. Our culture drives our – and more importantly – your success.</p>

            <div className='grid grid-cols-3 h-48 w-10/12 pl-10 max-2xl:h-60 850:flex 850:flex-col 650:pl-0'>
              {PhilosophyGridData.map((el) => {
                return (
                  <div key={el.index} className='flex bg-[#15222a] rounded-md w-[210px] mb-4 pl-4 hover:cursor-pointer hover:bg-orange ease-in-out duration-500 group'>
                    <FontAwesomeIcon icon={faArrowDownLong} className='relative -top-5 w-3 -rotate-45 text-orange group-hover:text-white ease-in-out duration-500' />
                    <p className='text-lg text-white font-semibold w-10/12 py-4 px-3'>{el.line}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
    )
}