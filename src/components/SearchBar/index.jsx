import styles from './searchBar.module.css';

const SearchBar = () => {
  return (
    <div className={`${styles.searchBar} ${styles.inner}`}>
      <div className={`${styles.search}`}>
        <div className={`${styles.searchIcon}`}>
          <img src={'/assets/search-icon.svg'} alt="Search Icon" />
        </div>
        <div className={`${styles.searchInput}`}>
          <input className={`${styles.input}`} type="text" placeholder="원하는 링크를 검색해 보세요." />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
