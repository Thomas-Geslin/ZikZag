// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


export default function TestimonialElement() {
    return(
        <section className='mt-20 w-[60%] m-auto min-w-[1150px] max-xl:w-[85%] max-xl:min-w-[300px]'>
            <p className='text-slightGrey font-Amiri text-4xl mb-10'>Testimonials</p>


            <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: '.nextElements',
                  prevEl: '.prevElements'
                }}
                loop
                speed={300}
            >
            <SwiperSlide>
              <div className='relative group/arrow bg-white rounded-lg w-[90%] text-center m-auto my-5 shadow-[6px_5px_20px_0px_rgb(0,0,0,0.12)] max-xl:w-[850px] 850:w-10/12 testimonialSlide'>
                <svg viewBox="0 0 62.4 44.8" className='w-16 m-auto pt-14 pb-6'>
                  <path style={{ fill: '#ff4a17' }} class="st0" d="M40.8,30.6c-0.9,2.3-1.7,3.9-0.9,6.5c0.7,2.3,2.5,3.9,4.5,5.2c3.7,2.4,8.7,3.6,12.6,0.9
                  c3.8-2.5,5.8-7.3,4.4-11.7c-0.4-1.3-1.2-2.4-2.2-3.2c-2.1-3.2-6.1-4.5-9.9-4.3c-2.2,0.1-4.5,0.8-6.2,2.4c-0.6,0.6-1.1,1.2-1.6,2
                  c-0.2,0.4-0.6,1.4-0.8,2C40.7,30.7,40.6,31.3,40.8,30.6z"></path>
                  <path style={{ fill: '#ff4a17' }} class="st0" d="M10,41.2c4.6,3.3,12.4,4.1,15.9-1.2c1-1.5,1.5-3.1,1.6-4.6c0.6-3-0.5-6-2.8-8c-0.5-0.7-1.1-1.3-1.6-2
                  c-1.8-2-4.9-2.2-7.2-1c-2.6,0-5.2,0.7-7.3,2.7C4.1,31.2,5.5,37.9,10,41.2z"></path>
                  <path class="st1" d="M42,36.2c-7.2-11.4,14.9-17.4,18.7-4.6c1.7,5.8-2.8,11.2-8.6,11.6c-3.9,0.2-7.6-1.4-10.5-4.1
                  C29,27.4,38.5,10.5,48.7,1.3c0.7-0.7-0.3-1.7-1.1-1.1C39.2,7.9,31.1,19.6,35,31.5c2.8,8.4,12.2,16.1,21.3,12
                  c9.3-4.1,7.1-16.5-1.4-20.1c-8.5-3.5-20.1,4-14.3,13.4C41.2,37.8,42.5,37,42,36.2L42,36.2z"></path>
                  <path class="st1" d="M8,36.2c-7.2-11.4,14.9-17.4,18.7-4.6c1.7,5.8-2.8,11.2-8.6,11.6c-3.9,0.2-7.6-1.4-10.5-4.1
                  C-5,27.4,4.5,10.5,14.7,1.3c0.7-0.7-0.3-1.7-1.1-1.1C5.2,7.9-2.9,19.6,1,31.5c2.8,8.4,12.2,16.1,21.3,12
                  c9.3-4.1,7.1-16.5-1.4-20.1c-8.5-3.5-20.1,4-14.3,13.4C7.2,37.8,8.5,37,8,36.2L8,36.2z"></path>
                </svg>

                <p className='text-[#61616b] text-[22px] font-light mb-10 leading-10'>“Working with ZikZag is always an absolute joy, both personally and<br></br>professionally. Tommy is an amazing speaker; her experience, expertise and<br></br>genuine passion for what she does is obvious in every word he says.”</p>
                <p className='font-Amiri text-3xl mb-2'>Emmy Barton</p>
                <p className='font-semibold text-sm text-[#989898] pb-14'>CLIENT OF COMPAGNY</p>

                <button className='prevElements group-hover/arrow:-translate-x-2 ease-in-out duration-300 group w-14 h-0.5 bg-black absolute left-10 top-[50%] max-xl:hidden'><span className='w-3 h-0.5 bg-black -rotate-45 absolute -left-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-black rotate-45 absolute -left-0.5 top-1'></span></button>
                <button className='nextElements group-hover/arrow:translate-x-2 ease-in-out duration-300 w-14 h-0.5 bg-black absolute right-10 top-[50%] max-xl:hidden'><span className='w-3 h-0.5 bg-black rotate-45 absolute -right-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-black -rotate-45 absolute -right-0.5 top-1'></span></button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='relative group/arrow bg-white rounded-lg w-[90%] text-center my-5 m-auto shadow-[6px_5px_20px_0px_rgb(0,0,0,0.12)] max-xl:w-[850px] 850:w-10/12 testimonialSlide'>
                <svg viewBox="0 0 62.4 44.8" className='w-16 m-auto pt-14 pb-6'>
                  <path style={{ fill: '#ff4a17' }} class="st0" d="M40.8,30.6c-0.9,2.3-1.7,3.9-0.9,6.5c0.7,2.3,2.5,3.9,4.5,5.2c3.7,2.4,8.7,3.6,12.6,0.9
                  c3.8-2.5,5.8-7.3,4.4-11.7c-0.4-1.3-1.2-2.4-2.2-3.2c-2.1-3.2-6.1-4.5-9.9-4.3c-2.2,0.1-4.5,0.8-6.2,2.4c-0.6,0.6-1.1,1.2-1.6,2
                  c-0.2,0.4-0.6,1.4-0.8,2C40.7,30.7,40.6,31.3,40.8,30.6z"></path>
                  <path style={{ fill: '#ff4a17' }} class="st0" d="M10,41.2c4.6,3.3,12.4,4.1,15.9-1.2c1-1.5,1.5-3.1,1.6-4.6c0.6-3-0.5-6-2.8-8c-0.5-0.7-1.1-1.3-1.6-2
                  c-1.8-2-4.9-2.2-7.2-1c-2.6,0-5.2,0.7-7.3,2.7C4.1,31.2,5.5,37.9,10,41.2z"></path>
                  <path class="st1" d="M42,36.2c-7.2-11.4,14.9-17.4,18.7-4.6c1.7,5.8-2.8,11.2-8.6,11.6c-3.9,0.2-7.6-1.4-10.5-4.1
                  C29,27.4,38.5,10.5,48.7,1.3c0.7-0.7-0.3-1.7-1.1-1.1C39.2,7.9,31.1,19.6,35,31.5c2.8,8.4,12.2,16.1,21.3,12
                  c9.3-4.1,7.1-16.5-1.4-20.1c-8.5-3.5-20.1,4-14.3,13.4C41.2,37.8,42.5,37,42,36.2L42,36.2z"></path>
                  <path class="st1" d="M8,36.2c-7.2-11.4,14.9-17.4,18.7-4.6c1.7,5.8-2.8,11.2-8.6,11.6c-3.9,0.2-7.6-1.4-10.5-4.1
                  C-5,27.4,4.5,10.5,14.7,1.3c0.7-0.7-0.3-1.7-1.1-1.1C5.2,7.9-2.9,19.6,1,31.5c2.8,8.4,12.2,16.1,21.3,12
                  c9.3-4.1,7.1-16.5-1.4-20.1c-8.5-3.5-20.1,4-14.3,13.4C7.2,37.8,8.5,37,8,36.2L8,36.2z"></path>
                </svg>
                
                <p className='text-greyText text-[22px] font-light mb-10'>“Choosing online studies was the best way to do it - the internet is fast, cheap &<br></br>popular and it&apos;s easy to communicate in social media with native speakers.”</p>
                <p className='font-Amiri text-3xl mb-2'>Tina Johanson</p>
                <p className='font-semibold text-sm text-[#989898] pb-14'>UI DESIGNER</p>

                <button className='prevElements group-hover/arrow:-translate-x-2 ease-in-out duration-300 group w-14 h-0.5 bg-black absolute left-10 top-[50%] max-xl:hidden'><span className='w-3 h-0.5 bg-black -rotate-45 absolute -left-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-black rotate-45 absolute -left-0.5 top-1'></span></button>
                <button className='nextElements group-hover/arrow:translate-x-2 ease-in-out duration-300 w-14 h-0.5 bg-black absolute right-10 top-[50%] max-xl:hidden'><span className='w-3 h-0.5 bg-black rotate-45 absolute -right-0.5 bottom-1'></span><span className='w-3 h-0.5 bg-black -rotate-45 absolute -right-0.5 top-1'></span></button>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
    )
}