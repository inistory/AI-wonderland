import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../../../url/http';
import BestProductCard from './BestProductCard';

export default function Shoes() {
  const [BestShoes, setBestShoes] = useState([]);

  let categoryCode = 3;
  const BestShoesUrl = `${baseUrl}/products/top4list/?pcategory_code=${categoryCode}`;

  useEffect(() => {
    async function getShoesProduct() {
      try {
        const response = await axios.get(BestShoesUrl);
        if (response.status === 200) {
          setBestShoes(response.data.data);
          console.log(BestShoes);
        } else if (response.status === 404) {
          console.log('404 진입' + response);
          alert('Fail to load the product data');
        }
      } catch (error) {
        await axios.get(BestShoesUrl);
      }
    }
    getShoesProduct();
  }, [BestShoesUrl]);
  return (
    <div>
      <li style={{ listStyle: 'none' }}>
        {BestShoes.map((product, idx) => (
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
