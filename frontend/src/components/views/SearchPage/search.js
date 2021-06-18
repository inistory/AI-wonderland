import React from 'react';
import axios from 'axios';
import Toolbar from '../Toolbar/Toolbar';
import GNB from '../GNB/GNB';
import searchStyle from './searchStyle.css';

function SearchPage() {
  return (
    <>
      <GNB />
      <div>
        <input
          type="text"
          placeholder="please enter the keyword or anything!"
          name="search"
        />
        <button type="submit">검색</button>
      </div>
      <Toolbar />
    </>
  );
}

export default SearchPage;
