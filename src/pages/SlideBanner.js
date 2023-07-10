import React from 'react'
/* swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper';

export default function slide_banner() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      /* onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} */
      autoplay={{ delay: 3500 }}
    >
    <SwiperSlide><img src='/images/banner_Citrus.png' alt='img'/></SwiperSlide>
    <SwiperSlide><img src='/images/banner_Floral.png' alt='img'/></SwiperSlide>
    <SwiperSlide><img src='/images/banner_Fruity.png' alt='img'/></SwiperSlide>
  </Swiper>
  )
}

