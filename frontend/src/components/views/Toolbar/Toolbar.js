import React, { useState } from 'react';
import ToolbarStyle from './ToolbarStyle.css';
import { Link, useHistory } from 'react-router-dom';
import BaseUrl from '../../../url/http';
import { set } from 'react-hook-form';

function Toolbar() {
  const history = useHistory();
  const pathname = location.pathname;

  const handleHome = () => {
    history.push('/main');
  };

  const handleTimegram = () => {
    history.push('/timegram');
  };

  const handleSearch = () => {
    history.push('/search');
  };

  const handleScrapbook = () => {
    history.push('/main');
  };

  const handleMypage = () => {
    history.push('/mypage');
  };

  return (
    <>
      <nav className="toolbar">
        <ul className="toolwrap">
          <li>
            <button
              type="button"
              className={'homeIcon' + (pathname === '/main' ? '_touched' : '')}
              onClick={handleHome}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              className={
                'timegram' + (pathname === '/timegram' ? '_touched' : '')
              }
              onClick={handleTimegram}
            >
              Timegram
            </button>
          </li>
          <li>
            <button
              type="button"
              className={'search' + (pathname === '/search' ? '_touched' : '')}
              onClick={handleSearch}
            >
              Search
            </button>
          </li>
          <li>
            <button
              type="button"
              className={'scrapbook' + (pathname === '/' ? '_touched' : '')}
              onClick={handleScrapbook}
            >
              Scrapbook
            </button>
          </li>
          <li>
            <button
              type="button"
              className={'mypage' + (pathname === '/mypage' ? '_touched' : '')}
              onClick={handleMypage}
            >
              My Page
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Toolbar;
