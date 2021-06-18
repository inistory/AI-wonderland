import React from 'react';
import { useState } from 'react';

export default function IntroUserTalk(props) {
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

        {/* User 선택지 불러오기 */}
        <div className="col-span-12 row-span-3 row-start-4 row-end-7 flex justify-start">
          <div className="intro-user-chatbox" style={{ top: '68%' }}>
            {/* 유저 선택지 1 > 로그인으로 이동 */}
            <button
              onClick={() => {
                window.alert("Welocme to 2000's");
                window.location.href = 'login/';
              }}
              style={{ marginLeft: '90%' }}
            >
              <p id="intro-user-chatbox-text">
                Not even! I am on a journey to the past.
              </p>
            </button>
          </div>
          {/* 유저 선택지 2 > 토끼의 시간여행 대사로 이동 */}
          <div className="intro-user-chatbox" style={{ top: '82%' }}>
            <button
              onClick={() => {
                props.handleInteraction('timeTalkOn');
              }}
              style={{ marginLeft: '90%' }}
            >
              <p id="intro-user-chatbox-text" style={{ padding: '10px' }}>
                I am?
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
