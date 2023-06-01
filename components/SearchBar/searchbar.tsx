"use client";

import React from "react";

import Image from "next/image";

import styles from "./searchbar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.search}>
        <div className={styles.searchIcon}>
          <Image
            fill
            src="/assets/search-icon.svg"
            alt="Search Icon"
            className={styles.image}
          />
        </div>
        <div className={styles.searchInput}>
          <input
            className={styles.input}
            type="text"
            placeholder="원하는 링크를 검색해 보세요"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
