import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../../../url/http';
import isLogin from '../../../url/lib/isLogin';
import Logout_button from './Logout_button.css';

export default function Wallet() {
  const LoginHandler = () => {
    alert('로그인 페이지로 이동합니다.');
  };

  const [money, setMoney] = useState('');

  const userLocation = location.href;

  useEffect(() => {
    async function getUserMoney() {
      try {
        const access_token = localStorage.getItem('access_token');
        const response = await axios.get(`${baseUrl}/member/auth/`, {
          headers: { Authorization: `jwt ${access_token}` },
        });
        if (response.data.status === 'success') {
          // console.log(response.data);
          setMoney(response.data.user.money);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getUserMoney();
  }, [userLocation]);

  return isLogin() === true ? (
    <>
      <div>${money}</div>
    </>
  ) : (
    <>
      <button type="submit" onClick={LoginHandler} className="logIn">
        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
          LOGIN
        </Link>
      </button>
    </>
  );
}
