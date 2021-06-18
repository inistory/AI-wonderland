import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation, Route } from 'react-router-dom';
import CompassStyle from './CompassStyle.css';
import baseUrl from '../../../url/http';
import axios from 'axios';

function Compass() {
  const history = useHistory();

  //유저의 Url 위치를 알려주는 코드
  const pathname = location.pathname;

  //각 페이지 url의 맨 끝 주소를 구하는 코드
  const firstLocation = pathname.split('/')[1];
  const secondLocation = pathname.split('/')[2];
  const thirdLocation = pathname.split('/')[3];
  const fourthLocation = pathname.split('/')[4];

  // 앞에 '/'를 붙이지 않으면 url 주소가 계속 쌓여서 바뀌지 않음.
  const initialPage = '/' + firstLocation;
  const backPage1 = initialPage + '/' + secondLocation;
  const backPage2 = backPage1 + '/' + thirdLocation;
  const backPage3 = backPage2 + '/' + fourthLocation;

  const UserLocationHandler1 = () => {
    history.push(`${initialPage}`);
  };

  const UserLocationHandler2 = () => {
    history.push(`${backPage1}`);
  };

  const UserLocationHandler3 = () => {
    history.push(`${backPage2}`);
  };

  const UserLocationHandler4 = () => {
    history.push(`${backPage3}`);
  };

  return (
    <div className="compass">
      <button onClick={UserLocationHandler1}>{firstLocation}</button>
      <button onClick={UserLocationHandler2}>{secondLocation}</button>
      <button onClick={UserLocationHandler3}>{thirdLocation}</button>
      <button onClick={UserLocationHandler4}>{fourthLocation}</button>
    </div>
  );
}

export default Compass;
