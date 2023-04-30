import React from 'react';
import styles from '@components/SearchBar.module.css';
import { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      className={styles.search}
      value={search}
      onChange={handlerSearch}
      placeholder="원하는 링크를 입력하세요."
    />
  );
};

export default SearchBar;
