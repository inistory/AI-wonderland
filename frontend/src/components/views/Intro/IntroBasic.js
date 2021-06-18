import React from 'react';

import styledIntro from './styledIntro.css';

export default function IntroBasic(props) {
  // 로그인 상태인지 확인
  if (localStorage.getItem('access_token')) {
    window.alert("Welocme to 2000's");
    window.location.href = 'main';
  }

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
        </div>

        {/* 입장하기 버튼 */}

        <div className="col-span-12 flex flex-col gap-20">
          <div className="col-span-12 flex justify-center">
            <button
              className="button-enter"
              onClick={() => {
                props.handleInteraction('rabbitTalkOn');
              }}
            >
              Enter
            </button>
          </div>
          {/* 상점 이미지 저작권 표시 */}
          <div className="col-span-12 flex flex-wrap justify-center">
            <p
              style={{
                fontFamily: 'sb_pixel_7',
                color: 'white',
                fontSize: '13px',
                marginBottom: '20px',
              }}
            >
              store image copyright.
              <a
                href="https://pixelins.tumblr.com/"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                @pixelins.
              </a>
              All reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
