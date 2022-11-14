import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import background from '../../public/assets/Home05/testimonial_background.png'
import line from '../../public/assets/Home05/testimonial_line.png' 

export default function TestimonialHome05() {
    return(
        <section class='mb-40 relative mt-28'>
            <div className='ml-96 relative'>
                <p className='absolute text-[300px] text-greyBackground font-Amiri bottom-60 left-28'>Result</p>
                <h2 className='text-orange font-bold mb-4 pt-10 relative w-36 relative'>TESTIMONIALS<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
                <h3 className='font-Amiri text-6xl relative'>What People Say</h3>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.Home05NavigationNext',
                        prevEl: '.Home05NavigationPrev'
                    }}
                    loop
                    speed={300}
                >
                    <SwiperSlide>
                    <div className='rounded-lg w-[60%] max-xl:w-[850px] 850:w-10/12 testimonialSlide'>
                        <svg viewBox="0 0 62.4 44.8" className='w-16 pt-14 pb-6'>
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

                        <p className='text-[#61616b] text-[20px] font-light mb-10 leading-10'>“Working with ZikZag is always an absolute joy, both personally and<br></br>professionally. Tommy is an amazing speaker; her experience, expertise and<br></br>genuine passion for what she does is obvious in every word he says.”</p>
                        <p className='font-Amiri text-3xl mb-2'>Emmy Barton</p>
                        <p className='font-bold text-sm text-[#989898] pb-14'>CLIENT OF COMPAGNY</p>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className='rounded-lg w-[60%] max-xl:w-[850px] 850:w-10/12 testimonialSlide'>
                        <svg viewBox="0 0 62.4 44.8" className='w-16 pt-14 pb-6'>
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
                        
                        <p className='text-greyText text-[20px] font-light mb-10'>“Working with ZikZag is always an absolute joy, both personally and<br></br>professionally. Tommy is an amazing speaker; her experience, expertise and<br></br>genuine passion for what she does is obvious in every word he says.”</p>
                        <p className='font-Amiri text-3xl mb-2'>Tina Johanson</p>
                        <p className='font-bold text-sm text-[#989898] pb-14'>UI DESIGNER</p>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='grid grid-cols-3 gap-7 w-[60%] m-auto mt-32'>
                <div className='flex relative border rounded-lg border-[#d6d6d6] p-6 hover:border-transparent hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer ease-in-out duration-300 '>
                    <p className='font-Amiri text-orange text-2xl'>01.</p>
                    <div className='ml-4'>
                        <p className='font-Amiri text-2xl text-slightGrey mb-2'>Organization</p>
                        <p className='text-greyText leading-7'>Startegy experience and analytical expertise combine to enable</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 absolute right-3 bottom-3 text-orange group-hover:text-orange' />
                </div>

                <div className='flex relative border rounded-lg border-[#d6d6d6] p-6 hover:border-transparent hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer ease-in-out duration-300 '>
                    <p className='font-Amiri text-orange text-2xl'>02.</p>
                    <div className='ml-4'>
                        <p className='font-Amiri text-2xl text-slightGrey mb-2'>Marketing</p>
                        <p className='text-greyText leading-7'>Startegy experience and analytical expertise combine to enable</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 absolute right-3 bottom-3 text-orange group-hover:text-orange' />
                </div>

                <div className='flex relative border rounded-lg border-[#d6d6d6] p-6 hover:border-transparent hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer ease-in-out duration-300 '>
                    <p className='font-Amiri text-orange text-2xl'>03.</p>
                    <div className='ml-4'>
                        <p className='font-Amiri text-2xl text-slightGrey mb-2'>Improvement</p>
                        <p className='text-greyText leading-7'>Startegy experience and analytical expertise combine to enable</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 absolute right-3 bottom-3 text-orange group-hover:text-orange' />
                </div>

                <div className='flex relative border rounded-lg border-[#d6d6d6] p-6 hover:border-transparent hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer ease-in-out duration-300 '>
                    <p className='font-Amiri text-orange text-2xl'>04.</p>
                    <div className='ml-4'>
                        <p className='font-Amiri text-2xl text-slightGrey mb-2'>Sustainability</p>
                        <p className='text-greyText leading-7'>Startegy experience and analytical expertise combine to enable</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 absolute right-3 bottom-3 text-orange group-hover:text-orange' />
                </div>

                <div className='flex relative border rounded-lg border-[#d6d6d6] p-6 hover:border-transparent hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer ease-in-out duration-300 '>
                    <p className='font-Amiri text-orange text-2xl'>05.</p>
                    <div className='ml-4'>
                        <p className='font-Amiri text-2xl text-slightGrey mb-2'>Customer Strategy</p>
                        <p className='text-greyText leading-7'>Startegy experience and analytical expertise combine to enable</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 absolute right-3 bottom-3 text-orange group-hover:text-orange' />
                </div>

                <div className='flex relative border rounded-lg border-[#d6d6d6] p-6 hover:border-transparent hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer ease-in-out duration-300 '>
                    <p className='font-Amiri text-orange text-2xl'>06.</p>
                    <div className='ml-4'>
                        <p className='font-Amiri text-2xl text-slightGrey mb-2'>Transformation</p>
                        <p className='text-greyText leading-7'>Startegy experience and analytical expertise combine to enable</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 absolute right-3 bottom-3 text-orange group-hover:text-orange' />
                </div>
            </div>

            <Image src={background} alt='arrière-plan' className='absolute right-0 -top-64' />
            <Image src={line} alt='igne de décoration' className='absolute left-0 bottom-32' />
        </section>
    )
}