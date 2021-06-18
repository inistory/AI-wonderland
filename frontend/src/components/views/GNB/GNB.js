import React from 'react';
import GNBStyle from './GNBStyle.css';
import { Link } from 'react-router-dom';
import Compass from './Compass';
import Wallet from './Wallet';

function GNB() {
  return (
    <>
      <div className="gnb_container">
        <div className="left_container">
          <Link to="/main" className="gnb_logo">
            <img src="/images/new_logo_blue.png" className="logo" />
            <span className="logo_text">AI WONDERLAND</span>
          </Link>
        </div>
        <div className="right_container">
          <img src="/images/icon_img/coin_fixed.png" className="coin_img" />
          <div className="wallet">
            <Wallet />
          </div>
        </div>
      </div>
      <Compass />
    </>
  );
}

export default GNB;
