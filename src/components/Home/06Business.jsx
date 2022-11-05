import Image from 'next/image'

//Business Data
import { BusinessData } from '../../datas/Home02/BusinessData'


export default function Business() {
    return(
        <section className='text-center mt-48 bg-businessBackground bg-no-repeat bg-[center_bottom_12rem] mb-36'>
          <h2 className='text-orange font-bold mb-4 relative w-52 m-auto'><span className='absolute bottom-1 left-0.5 bg-orange h-0.5 w-2'></span>BUSINESS TO BUSINESS<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
          <h3 className='text-slightGrey text-5xl font-Amiri leading-tight'>AI and Machine Learning<br></br>Analytics Solutions</h3>

          <div className='flex mt-12 justify-between w-[63%] m-auto'>
            {BusinessData.map((el) => {
              return (
                <div key={el.index} className='flex flex-col items-center group'>
                  <Image src={el.picture} alt={el.alt} className='hover:-translate-y-2 ease-in-out duration-700' />
                  <p className='text-3xl font-Amiri mb-3 group-hover:text-orange ease-linear duration-300'>{el.title}</p>
                  <p className='text-greyText w-8/12 leading-7 mb-5'>{el.line}</p>
                  <p className='text-sm text-orange font-semibold'>READ MORE</p>
                </div>
              )
            })}
          </div>
        </section>
    )
}