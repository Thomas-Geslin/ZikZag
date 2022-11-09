import Image from 'next/image'

//Business Data
import { BusinessData } from '../../datas/Home02/BusinessData'


export default function Business() {
    return(
        <section className='text-center mt-48 bg-businessBackground bg-no-repeat bg-[center_bottom_12rem] mb-36 max-2xl:mt-20 max-xl:bg-none'>
          <h2 className='text-orange font-semibold mb-4 relative w-52 m-auto'><span className='absolute bottom-1 left-1.5 bg-orange h-0.5 w-2'></span>BUSINESS TO BUSINESS<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
          <h3 className='text-slightGrey text-5xl font-Amiri leading-tight'>AI and Machine Learning<br></br>Analytics Solutions</h3>

          <div className='flex mt-12 justify-between w-[63%] m-auto max-xl:w-[80%] 650:flex-col'>
            {BusinessData.map((el) => {
              return (
                <div key={el.index} className='flex flex-col items-center group 650:mb-20'>
                  <Image src={el.picture} alt={el.alt} className='hover:-translate-y-2 ease-in-out duration-700' />
                  <p className='text-3xl font-Amiri mb-3 group-hover:text-orange ease-linear duration-300'>{el.title}</p>
                  <p className='text-greyText w-8/12 leading-7 mb-5'>{el.line}</p>
                  <div className='flex items-center group/read relative'><span className='w-12 h-0.5 bg-orange absolute scale-x-0 group-hover/read:scale-x-100 ease-in-out duration-500'></span><span className='w-3 h-0.5 top-[9px] left-[36px] bg-orange absolute scale-x-0 group-hover/read:rotate-45 group-hover/read:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><span className='w-3 h-0.5 bg-orange absolute left-[36px] scale-x-0 group-hover/read:-rotate-45 group-hover/read:scale-x-100 ease-linear duration-300 delay-500 origin-right'></span><p className='text-sm -ml-5 text-orange font-semibold group-hover/read:translate-x-20 ease-in-out duration-500'>READ MORE</p></div>
                </div>
              )
            })}
          </div>
        </section>
    )
}