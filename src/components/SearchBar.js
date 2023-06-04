import Image from 'next/image';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchWrap}>
      <Image
        className={styles.searchLensIcon}
        alt="search lens icon"
        src="/assets/images/search-bar-lens-icon.svg"
        width={12}
        height={12}
      />
      <input className={styles.searchBarInput} placeholder="원하는 링크를 검색해 보세요" />
    </div>
  );
};

export default SearchBar;
