"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay } from 'swiper/modules';

export default function SwiperBlock () {

    return (
      <Swiper
        className='swiper_block-words'
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
        autoplay={true}
      >
        <SwiperSlide>#design</SwiperSlide>
        <SwiperSlide>#frontend</SwiperSlide>
        <SwiperSlide>#backend</SwiperSlide>
        <SwiperSlide>#landing</SwiperSlide>
        <SwiperSlide>#design</SwiperSlide>
        <SwiperSlide>#frontend</SwiperSlide>
        <SwiperSlide>#backend</SwiperSlide>
        <SwiperSlide>#landing</SwiperSlide>
      </Swiper>
    );
}