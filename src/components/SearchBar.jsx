import React from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "/src/assets/search.png";

function SearchBar() {
  return (
    <div className={styles.container}>
      <img className={styles.searchIcon} src={searchIcon} alt="검색 아이콘" />
      <input
        className={styles.searchInput}
        placeholder="원하는 링크를 검색해 보세요"
      />
    </div>
  );
}

export default SearchBar;
