import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

// Data First Slider
import { FirstSlideData } from '../../datas/Home02/FirstSlideData'


export default function Division() {
    return(
        <section className='flex justify-between mx-6 mt-32 mb-52'>
          {FirstSlideData.map((el) =>
            <div key={el.index} className='flex relative items-center rounded-lg shadow-[3px_3px_20px_3px_#eae9e9] h-[150px] w-[24%] hover:bg-[#14212b] hover:cursor-pointer group ease-linear duration-300'>
              <Image src={el.picture} alt={el.alt} className='mx-6' />
              <div>
                <p className='font-Amiri text-2xl mb-1 group-hover:text-white'>{el.title}</p>
                <p className='font-NunitoSans w-10/12 leading-7 text-[#616161] group-hover:text-white'>Strategy experience and analytical expertise combine to enable.</p>
              </div>
              <FontAwesomeIcon icon={faArrowRightLong} className='w-4 rotate-45 absolute right-3 bottom-3 text-greyBackground group-hover:text-orange' />
            </div>
          )}
        </section>
    )
}