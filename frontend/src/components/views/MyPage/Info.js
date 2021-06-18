import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../../../url/http';
import Avatar from 'boring-avatars'; // 아바타 자동 생성 라이브러리
import avatarName from '../Product/ProductDetailAvatarName';

export default function Info() {
  const [Nickname, setNickName] = useState('');
  const [Money, setMoney] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [userId, setId] = useState('');
  const [Email, setEmail] = useState('');

  const Url = location.href;
  const MyPageInfoUrl = Url;

  useEffect(() => {
    async function getUserAuth() {
      try {
        const access_token = localStorage.getItem('access_token');
        const response = await axios.get(`${baseUrl}/member/auth/`, {
          headers: { Authorization: `jwt ${access_token}` },
        });
        if (response.data.status === 'success') {
          // console.log(response.data);
          setId(response.data.user.id);
          setAccessToken(access_token);
          setNickName(response.data.user.nickname);
          setMoney(response.data.user.money);
          setEmail(response.data.user.email);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getUserAuth();
  }, [MyPageInfoUrl]);

  //추후 API 수정되면 코드 다시 짜기.
  // useEffect(() => {
  //   async function getmyPageInfo() {
  //     try {
  //       const response = await axios.get(`${baseUrl}/member/${userId}`, {
  //         headers: {
  //           Authorization: `jwt ${accessToken}`,
  //         },
  //       });
  //       if (response.data.status === 'success') {
  //         console.log(response.data);
  //         setNickName(response.data.nickname);
  //         console.log(nickName);
  //         setMoney(response.data.money);
  //         console.log(money);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // });

  return (
    <div
      className="grid grid-rows-1 grid-flow-col p-4 w-full justify-center text-3xl"
      style={{
        backgroundColor: '#083242',
        fontFamily: 'sb_pixel',
      }}
    >
      <div className="userInfo">
        <div className="col-span-1 w-40 h-40 p-4 mx-20">
          {/* <img
            src="./images/icon_img/anonymous.png"
            style={{
              borderRadius: '50%',
              backgroundColor: '#13F2C9',
            }}
          /> */}
          <Avatar
            size={110}
            name={
              avatarName.avatarName[
                Math.floor(Math.random() * avatarName.avatarName.length)
              ]
            }
            variant="beam"
            colors={[
              '#187FD9',
              '#14A1D9',
              '#14C5D9',
              '#16F2DC',
              '#13F2C9',
              'hotpink',
            ]}
          />
        </div>
        <div
          className="col-span-1"
          style={{
            textAlign: 'center',
            color: '#13F2C9',
          }}
        >
          <span>{Nickname}</span>
        </div>
        <div
          className="col-span-1"
          style={{
            textAlign: 'center',
            color: '#13F2C9',
          }}
        >
          <span>{Email}</span>
        </div>
        <div
          className="col-span-1"
          style={{
            textAlign: 'center',
            color: '#13F2C9',
          }}
        >
          <span>${Money}</span>
        </div>
      </div>
    </div>
  );
}
