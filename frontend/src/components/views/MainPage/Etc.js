import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../../../url/http';
import BestProductCard from './BestProductCard';

export default function Etc() {
  const [BestEtc, setBestEtc] = useState([]);

  let categoryCode = 4;
  const BestEtcUrl = `${baseUrl}/products/top4list/?pcategory_code=${categoryCode}`;

  useEffect(() => {
    async function getEtcProduct() {
      try {
        const response = await axios.get(BestEtcUrl);
        if (response.status === 200) {
          setBestEtc(response.data.data);
          console.log(BestEtc);
        } else if (response.status === 404) {
          console.log('404 진입' + response);
          alert('Fail to load the product data');
        }
      } catch (error) {
        const response = await axios.get(BestEtcUrl);
      }
    }
    getEtcProduct();
  }, [BestEtcUrl]);
  return (
    <div>
      <li style={{ listStyle: 'none' }}>
        {BestEtc.map((product, idx) => (
          <BestProductCard
            key={idx}
            p_imgUrl={product.p_image}
            p_name={product.p_name}
            p_price={product.p_price}
            p_toDetail={product.p_no}
          />
        ))}
      </li>
    </div>
  );
}
