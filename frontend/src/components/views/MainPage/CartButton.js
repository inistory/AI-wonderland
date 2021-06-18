import axios from 'axios';
import baseUrl from '../../../url/http';
import { react, useState, useEffect } from 'react';

// API - 로그인 유저의 스크랩북에 상품 추가하기
export default function CartButton(props) {
  const [userNo, setUserNo] = useState(0);
  useEffect(() => {
    async function getUser() {
      try {
        const access_token = localStorage.getItem('access_token');
        const response = await axios.get(`${baseUrl}/member/auth/`, {
          headers: { Authorization: `jwt ${access_token}` },
        });
        if (response.data.status === 'success') {
          setUserNo(response.data.user.id);
        }
      } catch (error) {
        console.log('memNO 데이터 : ', error);
      }
    }
    getUser();
  }, []);

  const addtoScrapbook = () => {
    const access_token = localStorage.getItem('access_token');
    axios
      .post(
        `${baseUrl}/scrapbook/scrapbooklist/`,
        {
          mem_id: userNo,
          p_no: props.p_price,
        },
        {
          headers: { Authorization: `jwt ${access_token}` },
        }
      )
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        console.log(p_no);
      });
  };

  return (
    <button>
      <img
        src="./images/icon_img/product_cart_white.png"
        style={{
          float: 'right',
          justifyContent: 'flexEnd',
          marginRight: '0',
          marginBottom: '0',
          padding: '0.2rem',
          width: '20%',
          backgroundColor: '#14a1d9',
          borderRadius: '5rem',
        }}
        onClick={() => {
          {
            if (userNo === 0) {
              alert('Please login to continue.');
            } else {
              alert('The item is added to the scrapbook.');
              addtoScrapbook();
            }
          }
        }}
      ></img>
    </button>
  );
}
