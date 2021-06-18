import React from 'react';
import { useState } from 'react';

import styledIntro from './styledIntro.css';

const rabbitImage = [
  // 'rabbit01_clerk_smile.png',
  // 'rabbit01_clerk.png',
  'rabbit01_clerk.gif',
  // 'rabbit02_nerd.smile.png',
  // 'rabbit02_nerd.png',
  'rabbit02_nerd.gif',
  // 'rabbit03_hotel_smile.png',
  // 'rabbit03_hotel.png',
  'rabbit03_hotel.gif',
  // 'rabbit04_Hawaiian_smile.png',
  // 'rabbit04_Hawaiian.png',
  'rabbit04_Hawaiian.gif',
];
const rabbitWords = {
  1: 'Direction isn’t the only thing you have lost.',
  2: 'You have lost your fashion sense.',
  3: 'Remember how you dressed in the 2000s? So hip!',
  4: 'Let me take you to our vintage shop located in the 2000s.',
  5: 'You can definitely rebuild your fashion sense!',
  6: 'And don’t you forget. You MUST...',
  7: 'login to fully use all the features at our shop!',
};

export default function IntroTimeTalk(props) {
  // 유저의 선택지 (바로 로그인 or 토끼의 설명 듣기) 상태 업데이트
  const [rabbitWordsId, setRabbitWordsId] = useState(1);
  return (
    <div className="flex m-2 justify-center">
      {/* 배경 및 전체 그리드 */}
      <div
        className="grid grid-cols-12 gap-1 rounded-md"
        id="intro-container-grid"
        style={{
          backgroundImage: 'URL("images/intro/background_sky.png")',
        }}
      >
        {/* 배경 음악 플레이 */}
        <div
          className="col-span-12 flex justify-end m-3 gap-2"
          style={{ fontFamily: 'light_p_7', color: 'white', fontSize: '10px' }}
        >
          <i className="far fa-play-circle"></i>
          Play Sound
        </div>
        {/* 타이틀 이미지 & 텍스트 */}
        <div className="col-span-3 flex justify-end items-end">
          <img src="/images/intro/rabbit_logo.png" id="intro-title-logo"></img>
        </div>
        <div className="col-span-9 flex justify-start items-end">
          <p id="intro-title-text">AI WONDERLAND</p>
        </div>
        {/* 빈티지 상점 이미지 */}
        <div className="col-span-12 flex flex-col justify-center items-center">
          <img
            src={'/images/intro/store_art.png'}
            style={{ width: '65%', paddingTop: '30px' }}
          ></img>
          <p
            style={{
              fontFamily: 'sb_pixel_7',
              color: 'white',
              fontSize: '20px',
              margin: '10px',
            }}
          >
            ~ Welcome to the shop of SoondoongSix ~
          </p>
          {/* User 선택지 불러오기  */}
        </div>

        <div className="col-span-12 row-span-3 row-start-4 row-end-6 flex flex-row justify-start">
          <img
            src={
              '/images/intro/' +
              rabbitImage[Math.floor(Math.random() * rabbitImage.length)]
            }
            id="intro-rabbit-img"
          ></img>

          <div className="col-span-12 row-span-3 row-start-4 row-end-7 flex justify-start">
            <div className="intro-rabbit-chatbox">
              {rabbitWordsId < 8 ? (
                <button
                  onClick={() => {
                    setRabbitWordsId(rabbitWordsId + 1);
                  }}
                  style={{ marginLeft: '90%' }}
                >
                  <p id="intro-rabbit-chatbox-text">
                    {rabbitWords[rabbitWordsId]}
                    <i className="fas fa-forward" id="intro-talk-button"></i>
                  </p>
                </button>
              ) : (
                <div>
                  <p id="intro-rabbit-chatbox-text">Good Luck.</p>
                  {window.alert(' ! Opening Time Portal...')}
                  {window.alert(
                    ' ! Traveling to AI Wonderland – the Vintage Shop for the 2000s Look.'
                  )}
                  {window.alert("Welocme to 2000's")}
                  {window.location.replace('Main')}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
