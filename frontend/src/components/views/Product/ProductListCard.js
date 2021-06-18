import React from 'react';

export default function ProductListCard() {
  return (
    <div className="flex flex-col justify-center gap-1">
      <img src="/images/intro/rabbit02_nerd.png"></img>
      <p>$ 1,00098</p>
      <p>Product Name</p>
      <i
        className="fas fa-shopping-cart"
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          color: 'grey',
        }}
      ></i>
    </div>
  );
}
