import { useCallback } from 'react';
import Image from 'next/image';
import linkIconImage from '@/public/link.svg';
import Button from './Button';
import styles from './AddLinkBar.module.css';

const AddLinkBar = () => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <div className={styles.shareIcon}>
        <Image
          fill
          src={linkIconImage}
          alt="Share Icon"
        />
      </div>
      <input className={styles.searchInput} type="text" placeholder="링크를 추가해 보세요" />
      <Button className={styles.button} type="submit">추가하기</Button>
    </form>
  );
};

export default AddLinkBar;
