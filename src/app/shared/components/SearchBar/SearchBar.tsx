import styles from "./SearchBar.module.scss";
import Image from "next/image";

interface searchBarProps {
  action: string;
  placeholder?: string;
}

const SearchBar = ({ action, placeholder = "검색하세요" }: searchBarProps) => {
  return (
    <form className={styles.searchForm} action={action}>
      <label htmlFor="search-input">
        <div className={styles.searchIconBox}>
          <Image src="/search-icon.png" alt="search icon" fill />
        </div>
        <input
          className={styles.searchInput}
          id="search-input"
          type="search"
          name="q"
          placeholder={placeholder}
        />
      </label>
    </form>
  );
};

export default SearchBar;
