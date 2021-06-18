import React, { useEffect, useState } from 'react';
import baseUrl from '../../../url/http';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.min.css';

import './styledCarousel.css';
import 'tailwindcss/tailwind.css';

//import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import axios from 'axios';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

// 추천 아이템 api URL (지금은 예시 데이터임)
const search_p_no = 'B00005OTJ8';
const recommendProductsUrl = `${baseUrl}/products/alsoboughtlist/?search_p_no=${search_p_no}`;

export default function ProductDetailRecommend() {
  // api에서 정보 불러오기
  // 현재 데이터가 array 안에 담겨 있지 않음 + 예시 데이터라 캐러솔 확인 불충분
  // To-Do 나중에 백엔드에 p_no으로 맵함수 안의 맵으로 다시 불러와야 하는 것인지 물어보기(당연한 것 같지만)
  const [recommendProducts, setRecommendProducts] = useState([]);
  useEffect(() => {
    async function getRecommendProducts() {
      try {
        const response = await axios.get(recommendProductsUrl);
        console.log('추천 상품 데이터 : ', response.data);
        // console.log('추천 상품 데이터 : ', response.data.data[0].p_no);
        if (response.status === 200) {
          setRecommendProducts(response.data.data);
        } else if (response.status === 404) {
          console.log('404 진입', response);
          alert('Fail to load the recommend data');
        }
      } catch (error) {
        console.log('추천 상품 데이터 : ', error);
      }
    }
    getRecommendProducts();
  }, [recommendProductsUrl]);

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="mySwiper"
      >
        {recommendProducts.map((recommendProduct, idx) => (
          <SwiperSlide
            key={idx}
            className="flex flex-col justify-center p-1 text-xs text-center font-semibold text-gray-700"
          >
            {/* <p>{recommendProduct.p_image}</p> */}
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51KgzdilYAL.jpg"
              style={{ width: '200px', height: 'auto' }}
            ></img>
            <p className="p-3 mb-0 text-sm" style={{ marginRight: 'auto' }}>
              {recommendProduct.p_brand}
            </p>
            <p
              className="pl-2 pr-2 text-left font-medium"
              style={{ marginRight: 'auto' }}
            >
              {recommendProduct.p_name} hitop shoes this is line by hungry
              developer
            </p>
            <p
              className="pl-3 mb-0 text-sm font-semibold text-gray-600"
              style={{ marginRight: 'auto' }}
            >
              {recommendProduct.p_price}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
