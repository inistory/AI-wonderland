import React from 'react';
import GNB from '../GNB/GNB';
import Toolbar from '../Toolbar/Toolbar';
import { Link } from 'react-router-dom';
import Info from './Info';
import isLogin from '../../../url/lib/isLogin';
import baseUrl from '../../../url/http';

function MyPage() {
  function changeBackground(e) {
    e.target.style.color = '#083242';
  }

  function changeBackgroundOriginal(e) {
    e.target.style.color = 'hotpink';
  }

  function changeButtonColor(e) {
    e.target.style.background = 'hotpink';
  }

  function changeButtonOriginal(e) {
    e.target.style.background = '#14C5D9';
  }

  const LogoutHandler = () => {
    if (isLogin() === true) {
      localStorage.removeItem('access_token');
      alert('Are you sure to log out?');
      //페이지 리렌더링 안하면 버튼이 상태가 바뀌지 않아 reload 코드 추가
      window.location.reload();
    } else {
      alert('Failed to log out! Please try again.');
    }
  };

  const elementBasicStyle = {
    textDecoration: 'none',
    fontFamily: 'light_p',
    backgroundColor: '#13F2C9',
    textAlign: 'center',
  };

  const iconStyle = {
    width: '40px',
    marginRight: '10px',
  };

  const textStyle = {
    textDecoration: 'none',
    color: 'hotpink',
  };

  return (
    <>
      <div style={{ paddingBottom: '65px' }}>
        <GNB />
        <Info />
        <div className="grid grid-row-4 grid-col-4 inline-block align-text-middle">
          <div
            className="row-span-1 align-middle inline-block p-2"
            style={elementBasicStyle}
          >
            <img
              className="inline-block"
              src="./images/icon_img/scrapbook_menu.png"
              style={iconStyle}
            />
            <Link
              to="/scrapbook"
              style={textStyle}
              onMouseOver={changeBackground}
              onMouseLeave={changeBackgroundOriginal}
            >
              My Scrapbook &gt;
            </Link>
          </div>
          <div
            className="row-span-1 align-middle inline-block p-2"
            style={elementBasicStyle}
          >
            <img
              className="inline-block"
              src="./images/icon_img/timegram_menu.png"
              style={iconStyle}
            />
            <Link
              to="/"
              style={textStyle}
              onMouseOver={changeBackground}
              onMouseLeave={changeBackgroundOriginal}
            >
              My Lookbook &gt;
            </Link>
          </div>
          <div
            className="row-span-1 align-middle inline-block p-2"
            style={elementBasicStyle}
          >
            <img
              className="inline-block"
              src="./images/icon_img/stamp_moving.gif"
              style={iconStyle}
            />
            <Link
              to="/mypage/attendance"
              style={textStyle}
              onMouseOver={changeBackground}
              onMouseLeave={changeBackgroundOriginal}
            >
              Check-in &gt;
            </Link>
          </div>
          <div
            className="row-span-1 p-4 align-text-middle"
            style={{
              fontFamily: 'light_p',
              textAlign: 'center',
              backgroundColor: '#14C5D9',
            }}
            onMouseEnter={changeButtonColor}
            onMouseLeave={changeButtonOriginal}
            onClick={LogoutHandler}
          >
            Log Out
          </div>
        </div>
      </div>
      <Toolbar />
    </>
  );
}

export default MyPage;
