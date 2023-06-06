import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';
import searchIconImage from '@/public/search.svg';

const SearchBar = ({ placeHolder = '' }) => {
  return (
    <div className={styles.container}>
      <input className={styles.searchInput} type="search" placeholder={placeHolder} />
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

SearchBar.propTypes = {
  placeHolder: PropTypes.string,
};

export default SearchBar;
