import React from 'react'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import { datas } from './data';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay ,Zoom , Pagination,EffectCoverflow, Navigation } from 'swiper';


const Carousel = () => {
  return (

    <>
    <Swiper
      effect={"coverflow"}
      slidesPerView={1.3}
    loop={true}
    breakpoints={{
        640: {
          slidesPerView: 1.3,
          spaceBetween: 0,

        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 1,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[Autoplay,EffectCoverflow]}
      className="w-[100%] py-14 flex  items-center gap-8"
    >
        {datas.map((data, id) => (
        <SwiperSlide key={id}>
         <Card data={data.text}/>
       </SwiperSlide>
            
         ))}
    </Swiper>
  </>
  )
}

export default Carousel