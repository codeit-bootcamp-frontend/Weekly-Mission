import Image from 'next/image';
import styles from './AddLinkBar.module.css';
import shareIconImage from '@/public/share.svg';
import Button from './Button';

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input className={styles.searchInput} type="search" placeholder="링크를 추가해 보세요" />
      <Button className={styles.button}>추가하기</Button>
      <div className={styles.shareIcon}>
        <Image
          fill
          src={shareIconImage}
          alt="Share Icon"
        />
      </div>
    </div>
  );
};

export default SearchBar;
