import Image from 'next/image'

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'

// Assets Philosophy
import philosophyBackground from '../../public/assets/Home02/philosophy_background.jpg'
import philosophyLine from '../../public/assets/Home02/philosophy_background_line.png'

// Philosophy Data
import { PhilosophyGridData } from '../../datas/Home02/PhilisophyGridData'


export default function Philosophy() {
  const { color } = useContext(ColorContext);


    return(
        <section className='flex relative z-10 -top-10 max-2xl:flex-col 1050:-mb-20'>
          <div className='w-1/2 max-h-[720px] overflow-hidden max-2xl:w-full'>
            <Image src={philosophyBackground} alt="Réunion d'entreprise" className='w-full rounded-xl max-2xl:rounded-none max-2xl:w-full' />
          </div>

          <div className='bg-[#14212B] max-h-[720px] w-1/2 relative rounded-bl-lg top-10 pl-20 max-2xl:rounded-none max-2xl:w-full max-2xl:top-0 430-650:pl-10 850:max-h-fit 850:pb-40 430:pl-[3%]'>
            <Image src={philosophyLine} alt='dessin de ligne de décoration' className='absolute right-1 top-1 650:pl-10' />
            <h2 className={`text-${color} font-bold mb-4 relative mt-32 650:mt-80 650:pl-5`}>OUR PHILOSOPHY<span className={`absolute bottom-1 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
            <h3 className='font-Amiri text-white text-5xl w-8/12 leading-[55px] mb-4 650:pl-5'>Our Core Values and Principes</h3>
            <p className='text-[#dddfe1] text-lg w-[72%] leading-8 mb-10 650:pl-5'>We’ve designed a culture that allows our stewards to assimilate with our clients and bring the best of who we are to your business. Our culture drives our – and more importantly – your success.</p>

            <div className='grid grid-cols-3 h-48 w-10/12 pl-10 max-2xl:h-60 850:grid-cols-2 650:pl-0 430:min-w-[310px]'>
              {PhilosophyGridData.map((el) => {
                return (
                  <div key={el.index} className={`flex bg-[#15222a] rounded-md w-[210px] mb-4 pl-4 hover:cursor-pointer hover-bg-${color} ease-in-out duration-500 group 650:w-[150px]`}>
                    <FontAwesomeIcon icon={faArrowDownLong} className={`relative -top-5 w-3 -rotate-45 text-${color} group-hover:text-white ease-in-out duration-500`} />
                    <p className='text-lg text-white font-semibold w-10/12 py-4 px-3 650:text-sm'>{el.line}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
    )
}