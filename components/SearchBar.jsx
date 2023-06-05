import Image from 'next/image';
import styles from './SearchBar.module.css';
import searchIconImage from '@/public/search.svg';

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input className={styles.searchInput} type="search" placeholder="원하는 링크를 검색해 보세요" />
      <div className={styles.searchIcon}>
        <Image
          fill
          src={searchIconImage}
          alt="Search Icon"
        />
      </div>
    </div>
  );
};

export default SearchBar;
