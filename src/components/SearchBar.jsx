import childStyles from "./SearchBar.module.css";
import Search from "/src/assets/Search.png";

function SearchBar({styles}) {
  return (
    <>
      <div className={styles.searchBar}>
        <div className={childStyles.searchBar}>
          <img src={Search} alt="search" className={childStyles.searchIcon} />
          <input type="text" placeholder="원하는 링크를 검색해 보세요" />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
