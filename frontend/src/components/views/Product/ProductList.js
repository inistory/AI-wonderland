// To-do :
// 1) 컴포넌트 url 변경(나윤님과 합의해 공통 페이지 만들기!) v
// 2) 이미지 조건부 렌더링
// 3) 가격 정렬 api 받아오기
// 4) 로딩 중 표시 추가
// 5) http://localhost:3000/productList/p_category?=Top 로, 링크 붙여주기
// 테일윈드 드랍다운 버튼 있음~! https://tailwindui.com/components/application-ui/elements/dropdowns

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../../../url/http';

import { Dropdown, DropdownButton } from 'react-bootstrap';
import ProductListDropDown from './ProductListDropDown';
import ProductCard from './ProductCard.js';
import ProductListCard from './ProductListCard';

export default function ProductList() {
  // pcategory_code 1: 상의, 2: 하의, 3: 신발, 4: 기타
  const [categoryValue, setCategoryValue] = useState(1);

  // ordering -p_readcount : 조회 순, -p_price : 가격 순, -p_rank : 랭킹 순, -p_date : 등록일 순
  const [orderingValue, setOrderingValue] = useState('-p_readcount');
  const orders = [
    { id: 1, name: 'View Count', value: '-p_readcount' },
    { id: 2, name: 'Amazon Best Sellers Rank', value: '-p_price' },
    { id: 3, name: 'Price: High-Low', value: '-p_rank' },
    // { id: 4,name: 'Price: Low-High', value: '' },
    //  To-do : 차후 api 개발되면 그때 추가하기
    { id: 5, name: 'Newest', value: '-p_date' },
  ];
  const [pageNumber, setPageNumber] = useState(1);

  // 상품 데이터 받아오기
  const productsUrl = `${baseUrl}/products/productlist/?pcategory_code=${categoryValue}&ordering=${orderingValue}&page=${pageNumber}`;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProductList() {
      try {
        setLoading(true);
        // 데이터 받아오기 전 로딩
        const response = await axios.get(productsUrl);
        console.log('상품 데이터 ', response.data.results);
        if (response.status === 200) {
          setProducts(response.data.results);
        } else if (response.status === 404) {
          console.log('404 진입' + response);
          alert('Fail to load the product data');
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProductList();
    setLoading(false);
  }, [productsUrl]);

  return (
    <div className="flex m-2 justify-center">
      <div className="grid grid-cols-4 gap-1">
        <div className="col-span-4 flex justify-center m-3 gap-2">
          <button
            onClick={() => {
              setCategoryValue(1);
            }}
          >
            Tops
          </button>
          <button
            onClick={() => {
              setCategoryValue(2);
            }}
          >
            Bottoms
          </button>
          <button
            onClick={() => {
              setCategoryValue(3);
            }}
          >
            Shoes
          </button>
          <button
            onClick={() => {
              setCategoryValue(4);
            }}
          >
            Others
          </button>
          <button>Timegram</button>
        </div>
        <div className="col-span-4 flex justify-end m-3 gap-2">
          {/* <DropdownButton
            title="Sort by"
            style={{
              float: 'right',
              padding: '10px',
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
        <div className="col-span-4 flex flex-wrap justify-center m-3 gap-2">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              p_imgUrl={product.p_image}
              p_name={product.p_name}
              p_price={product.p_price}
              p_toDetail={product.p_no}
            />
          ))} */}
          <ProductListCard />
        </div>
      </div>
    </div>
  );
}
