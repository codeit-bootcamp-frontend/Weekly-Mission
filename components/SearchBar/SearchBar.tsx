import Image from "next/image";

import styles from "./SearchBar.module.scss";

interface ISearchBarProps {
  placeholder: string;
}

const SearchBar = ({ placeholder }: ISearchBarProps) => {
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
