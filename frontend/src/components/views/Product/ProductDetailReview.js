// 리뷰 더보기 버튼의 토글 속성은 위에서 다운 받아서 오자

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../../../url/http';

import 'tailwindcss/tailwind.css';
import Avatar from 'boring-avatars'; // 아바타 자동 생성 라이브러리

export default function ProductDetailReview() {
  const [pageNo, setPageNo] = useState(1);
  const [reviewInfo, setReviewInfo] = useState([]);

  // API - 개별 상품의 리뷰 정보 받아오기
  const reviewInfoUrl = `${baseUrl}/products/reviewlist/?page=1&p_no=B00007GDFV`;
  useEffect(() => {
    async function getReviewInfo() {
      try {
        const response = await axios.get(reviewInfoUrl);
        console.log('리뷰 데이터 : ', response);
        if (response.status === 200) {
          setReviewInfo(response.data);
        } else if (response.status === 404) {
          console.log('404 진입', response);
          alert('Fail to load the review data');
        }
      } catch (error) {
        console.log('리뷰 데이터 : ', error);
      }
    }
    getReviewInfo();
  }, [reviewInfoUrl]);

  return (
    <div
      className="grid grid-cols-5 gap-x-2 gap-y-1 p-1 auto-rows-auto"
      style={{
        maxWidth: '310px',
        height: 'auto',
      }}
    >
      {/* {reviewInfo.results} */}
      <div className="col-span-1 flex justify-start">
        <Avatar
          size={150}
          name="Mary Baker"
          // To-do 이거 고치기. 변수값 넣어주면 그럼 랜덤으로 될 듯
          variant="beam"
          colors={['#FDBFFC', '#C32BA5', '#701D8C', '#FC3DFF', '#9004B7']}
        />
        <p>user profile</p>
      </div>
      <div className="col-span-4 flex justify-start">
        <p>
          This is the title
          {/* reviewInfo.summary */}
        </p>
        <p>
          stars, Darrow H Ankrum II
          {/* reviewInfo.vote */}
          {/* reviewInfo.review_memID */}
        </p>
      </div>
      <div className="col-span-5 flex justify-start">
        <p>
          mother-in-law wanted it as a present for her sister. she liked it and
          said it would work.
        </p>
        <p>2013-09-22</p>
        {/* reviewInfo.review_content */}
        {/* reviewInfo.review_date */}
      </div>
    </div>
  );
}
