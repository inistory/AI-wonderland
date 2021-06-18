import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

export default function TimegramCard(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const list = [];
    if (props.p_no1 != null) {
      list.push(props.p_no1);
    }
    if (props.p_no2 != null) {
      list.push(props.p_no2);
    }
    if (props.p_no3 != null) {
      list.push(props.p_no3);
    }
    if (props.p_no4 != null) {
      list.push(props.p_no4);
    }
    if (props.p_no5 != null) {
      list.push(props.p_no5);
    }
    if (props.p_no6 != null) {
      list.push(props.p_no6);
    }

    // 조회된 상품이 6개보다 작을경우
    while (list.length < 6) {
      list.push({ p_no: '', p_image: '/images/rabbit_example.jpg' });
    }

    setProducts(list);
  }, []);

  return (
    <div>
      <hr></hr>
      {products.map((product, idx) => (
        <li key={idx} className="item">
          {product.p_no == '' ? (
            <div className="category_img">
              <div className="main_box_img">
                <div className="label_box"></div>
                <img src="./images/example/one.png" />
              </div>
            </div>
          ) : (
            <Link
              to={`/ProductDetail/${product.p_no}`}
              className="curation_item"
            >
              <div className="category_img">
                <div className="main_box_img">
                  <div className="label_box"></div>
                  <img src="./images/example/two.png" />
                </div>
              </div>
            </Link>
          )}
        </li>
      ))}
    </div>
  );
}
