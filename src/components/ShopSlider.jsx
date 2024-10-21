import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination,EffectFade } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import Slider1 from "../assets/slider1.jfif" ;
import Slider2 from "../assets/slider2.jfif" ;
import Slider3 from "../assets/slider3.jfif" ;

export default function ShopSlider() {
  return (
    <>
      <Swiper

      effect={'fade'}
       autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay,EffectFade]}
      loop={true}
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className='w-[80%] mx-auto' src={Slider1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img  className='w-[80%] mx-auto' src={Slider2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img  className='w-[80%] mx-auto' src={Slider3} alt="" />
      </SwiperSlide>

    </Swiper>
    </>
  )
}
