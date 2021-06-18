import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../../../url/http';
import './Timegram.css';

import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Row, Spinner } from 'react-bootstrap';

import TimegramCard from './TimegramCard.js';

import GNB from '../GNB/GNB';
import Toolbar from '../Toolbar/Toolbar';

function TimegramPage() {
  // -dt_created : 최신 순 , -total_like : 좋아요 순, total_price :낮은 가격순, -total_price : 높은 가격순
  const [orderingValue, setOrderingValue] = useState('-dt_created');
  const orders = [
    { id: 1, name: 'Newest', value: '-dt_created' },
    { id: 2, name: 'Likes', value: '-total_like' },
    { id: 3, name: 'Price: High-Low', value: '-total_price' },
    { id: 4, name: 'Price: Low-High', value: 'total_price' },
  ];
  const timegramOrderUrl = `${baseUrl}/timegram/timegramList/?page=1&ordering=${orderingValue}`;

  // Categories
  const categoryUrl = `${baseUrl}/products/categotylist/`;
  const [categories, setCategories] = useState([]);

  // Timegram
  const [timegramPage, setTimegramPage] = useState(1);
  const [timegramNextPage, setTimegramNextPage] = useState(1);
  const [timegramInfo, setTimegramInfo] = useState([]);
  const timegramInfoUrl = `${baseUrl}/timegram/timegramList/?page=${timegramPage}&ordering=${orderingValue}`;

  const [loading, setLoading] = useState(false);
  const [isLike, setIsLike] = useState(false);

  const onClickLike = (e) => {
    const access_token = localStorage.getItem('access_token');
    if (access_token == null) {
      alert('Please login to continue.');
      return;
    }

    const data = {
      timegram: e.target.id,
    };

    try {
      axios
        .post(baseUrl + '/timegram/like/', data, {
          headers: { Authorization: `jwt ${access_token}` },
        })
        .then((response) => {
          if (response.data.status === 'success') {
            for (let i in timegramInfo) {
              if (timegramInfo[i].id == e.target.id) {
                if (timegramInfo[i].flag) {
                  timegramInfo[i].flag = false;
                  timegramInfo[i].total_like -= 1;
                } else {
                  timegramInfo[i].flag = true;
                  timegramInfo[i].total_like += 1;
                }
              }
            }

            if (isLike) {
              setIsLike(false);
            } else {
              setIsLike(true);
            }
          } else {
            alert(response.data.message);
          }
        });
    } catch (error) {
      if (error.message.slice(-3) == 401) {
        alert('Please login to continue.');
      }
    }
  };

  const loadMoreTimegram = () => {
    setTimegramPage((timegramPage) => timegramPage + 1);
  };

  useEffect(() => {
    async function getCategoriesList() {
      try {
        const response = await axios.get(categoryUrl);

        if (response.status === 200) {
          setCategories(response.data.results);
        } else if (response.status === 404) {
          console.log('404 진입' + response);
          alert('Fail to load the categoty data');
        }
      } catch (error) {
        console.log(error);
      }
    }

    getCategoriesList();
  }, []);

  useEffect(() => {
    async function getTimegramInfo() {
      try {
        const access_token = localStorage.getItem('access_token');
        if (access_token != null) {
          axios.defaults.headers.common[
            'Authorization'
          ] = `jwt ${access_token}`;
        }

        const response = await axios.get(timegramInfoUrl);
        console.log('타임그램 총 갯수 : ', response.data.count);
        console.log('타임그램 데이터 : ', response.data.results);
        if (response.status === 200) {
          setTimegramNextPage(response.data.next);
          setTimegramInfo([...timegramInfo, ...response.data.results]);
          setLoading(true);
        } else if (response.status === 404) {
          console.log('404 진입', response);
          alert('Fail to load the timegram data');
        }
      } catch (error) {
        console.log('타임그램 데이터 : ', error);
      }
    }
    getTimegramInfo();
  }, [timegramInfoUrl]);

  useEffect(() => {
    async function getTimegramOrder() {
      try {
        const response = await axios.get(timegramOrderUrl);
        if (response.status === 200) {
          setTimegramInfo(response.data.results);
        } else if (response.status === 404) {
          console.log('404 진입', response);
          alert('Fail to load the timegram data');
        }
      } catch (error) {
        console.log('타임그램 데이터 : ', error);
      }
    }
    getTimegramOrder();
  }, [timegramOrderUrl]);

  return (
    <>
      <GNB />
      <div className="mainItemcontainer">
        {loading ? (
          <div>
            <div className="topItems_Tops">
              <div
                style={{
                  marginTop: '50px',
                  marginBottom: '50px',
                  textAlign: 'center',
                }}
              >
                <ul>
                  {categories.map((category, id) => (
                    <li
                      key={id}
                      name={category.pcategory_name}
                      value={category.pcategory_code}
                      onClick={(e) => {
                        console.log(e.target.value);
                      }}
                      style={{
                        display: 'inline-flex',
                        float: 'center',
                        padding: '5px',
                        listStyle: 'none',
                        height: '26px',
                        fontSize: '13px',
                        fontWeight: '700',
                        color: '#999',
                      }}
                    >
                      <a href={category.pcategory_code}>
                        {category.pcategory_name}
                      </a>
                    </li>
                  ))}
                  <li
                    style={{
                      display: 'inline-flex',
                      float: 'center',
                      padding: '5px',
                      listStyle: 'none',
                      height: '26px',
                      fontSize: '13px',
                      fontWeight: '700',
                      color: '#999',
                    }}
                  >
                    Timegram
                  </li>
                </ul>
                <DropdownButton
                  title="Sort by"
                  style={{
                    float: 'right',
                    paddingRight: '10px',
                  }}
                  variant="Secondary"
                  size="sm"
                >
                  {orders.map((order, id) => (
                    <Dropdown.Item
                      key={id}
                      name={order.name}
                      value={order.value}
                      onClick={(e) => {
                        setOrderingValue(order.value);
                      }}
                    >
                      {order.name}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
              <h2>Timegram</h2>
              <p className="subAd">Explore the Timegram.</p>

              {timegramInfo.map((timegram, idx) => (
                <div key={idx} style={{ marginBottom: '80px' }}>
                  <ul className="item_box">
                    <TimegramCard
                      key={idx}
                      id={timegram.id}
                      title={timegram.title}
                      p_no1={timegram.p_no1}
                      p_no2={timegram.p_no2}
                      p_no3={timegram.p_no3}
                      p_no4={timegram.p_no4}
                      p_no5={timegram.p_no5}
                      p_no6={timegram.p_no6}
                      total_like={timegram.total_like}
                      total_price={timegram.total_price}
                      mem_id={timegram.mem.id}
                    />
                  </ul>
                  <div
                    className="timegram_title"
                    style={{ padding: '10px 20px 0 0' }}
                  >
                    <span>{timegram.title}</span>
                    <span className="floatR img_price">
                      <img
                        className="flex content-center"
                        src="./images/icon_img/coin_move.gif"
                        className="coin_img"
                        width="35px"
                        style={{ display: 'inline', marginTop: '0px' }}
                      />
                      ${timegram.total_price}
                    </span>
                  </div>
                  <div style={{ padding: '6px 10px 0', marginTop: '0px' }}>
                    <button
                      id={timegram.id}
                      onClick={onClickLike}
                      type="button"
                      className={
                        timegram.flag == true
                          ? 'btn_like btn_unlike'
                          : 'btn_like'
                      }
                    >
                      <span id={timegram.id} className="img_emoti">
                        좋아요
                      </span>
                      <span id={timegram.id} className="like_span">
                        {' '}
                        +{timegram.total_like} like!
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-5 m-3 flex justify-center">
              {timegramNextPage === null ? null : (
                <button
                  type="button"
                  className="bg-purple-600 text-sm text-white font-semibold rounded-lg"
                  style={{
                    fontFamily: 'neodgm',
                    width: '180px',
                    height: '30px',
                    marginBottom: '80px',
                  }}
                  onClick={loadMoreTimegram}
                >
                  + Load More Timegrams
                </button>
              )}
            </div>
          </div>
        ) : (
          <Row
            className="justify-content-md-center p-5"
            style={{ justifyContent: 'center' }}
          >
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Row>
        )}
      </div>
      <Toolbar />
    </>
  );
}

export default TimegramPage;
