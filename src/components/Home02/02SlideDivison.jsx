import Image from 'next/image'

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

// Data First Slider
import { FirstSlideData } from '../../datas/Home02/FirstSlideData'


export default function Division() {
  const { color } = useContext(ColorContext);

    return(
        <section className='flex justify-between mx-6 mt-32 mb-52 max-xl:flex-col'>
          {FirstSlideData.map((el) =>
            <div key={el.index} className='flex relative items-center rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[24%] max-xl:w-auto hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300 max-xl:mb-8 max-xl:h-auto'>
              <Image src={el.picture} alt={el.alt} className='mx-6 max-xl:py-10' />
              <div>
                <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>{el.title}</p>
                <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
              </div>
              <FontAwesomeIcon icon={faArrowRightLong} className={`w-4 rotate-45 absolute right-3 bottom-3 text-[#cccccc] group-hover-text-${color}`} />
            </div>
          )}
        </section>
    )
}