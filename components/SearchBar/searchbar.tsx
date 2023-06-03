import React from "react";

import Image from "next/image";

import styles from "./SearchBar.module.css";

interface ISearchBar {
  placeholder: string;
}

const SearchBar = ({ placeholder }: ISearchBar) => {
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
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
