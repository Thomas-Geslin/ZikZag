import Image from 'next/image'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Goal Data
import { GoalSwiperData } from '../../datas/Home02/GoalSwiperData';


export default function SwiperGoal() {
    return(
        <section className='bg-greyBackground bg-squareBackground bg-cover bg-[center_bottom_-28rem] pt-20 pb-40'>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            centeredSlides={true}
            loop
            pagination={{
              clickable: true
            }}
            autoplay={{
              delay: 4000
            }}
            speed={1000}
          >
            {GoalSwiperData.map((el) => {
              return (
                <SwiperSlide key={el.index} className='relative'>
                  <Image src={el.background} alt="Photo de présentation d'entreprise" className='rounded-xl' />
                  <div className='text-center bg-white relative bottom-10 w-[45%] m-auto rounded-xl shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]'>
                    <p className='font-Amiri text-3xl pt-5'>{el.title}</p>
                    <p className='text-orange font-semibold mt-1 pb-5 mb-10'>{el.line}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </section>
    )
}