import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SliderStyle from './SliderStyle.css';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function App() {
  return (
    <>
      <div className="MainSwiper">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="MainSwiper1"
        >
          <SwiperSlide className="Mainslide_2">
            <img src="./images/welcome_image/welcome2.png" />
            <p className="slideInfo">
              Click the camera icon below. <br></br>You can find your friends.
            </p>
          </SwiperSlide>
          <SwiperSlide className="Mainslide_1">
            <img src="./images/welcome_image/welcome1.png" />
            <p className="slideInfo">Welcome to the 2000's!</p>
          </SwiperSlide>
          <SwiperSlide className="Mainslide_3">
            <img src="./images/welcome_image/welcome3.gif" />
            <p className="slideInfo">Go to My Page and check the attendance!</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
