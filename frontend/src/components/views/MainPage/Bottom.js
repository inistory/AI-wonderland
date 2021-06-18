import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../../../url/http';
import BestProductCard from './BestProductCard';
export default function Bottom() {
  const [BestBottoms, setBestBottoms] = useState([]);

  let categoryCode = 2;
  const BestBottomUrl = `${baseUrl}/products/top4list/?pcategory_code=${categoryCode}`;

  useEffect(() => {
    async function getBottomProduct() {
      try {
        const response = await axios.get(BestBottomUrl);
        console.log(response.data);
        if (response.status === 200) {
          setBestBottoms(response.data.data);
          console.log(BestBottoms);
        } else if (response.status === 404) {
          console.log('404 진입' + response);
          alert('Fail to load the product data');
        }
      } catch (error) {
        await axios.get(BestBottomUrl);
      }
    }
    getBottomProduct();
  }, [BestBottomUrl]);
  return (
    <div>
      <li style={{ listStyle: 'none' }}>
        {BestBottoms.map((product, idx) => (
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
