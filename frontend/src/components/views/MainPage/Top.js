import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../../../url/http';
import BestProductCard from './BestProductCard';

export default function Top() {
  const [BestTops, setBestTops] = useState([]);

  let categoryCode = 1;
  const BestTopUrl = `${baseUrl}/products/top4list/?pcategory_code=${categoryCode}`;

  useEffect(() => {
    async function getTopProduct() {
      try {
        const response = await axios.get(BestTopUrl);
        if (response.status === 200) {
          setBestTops(response.data.data);
          console.log(BestTops);
        } else if (response.status === 404) {
          console.log('404 진입' + response);
          alert('Fail to load the product data');
        }
      } catch (error) {
        await axios.get(BestTopUrl);
      }
    }
    getTopProduct();
  }, [BestTopUrl]);

  return (
    <div>
      <li style={{ listStyle: 'none' }}>
        {BestTops.map((product, idx) => (
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
