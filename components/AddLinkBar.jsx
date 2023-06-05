import Image from 'next/image';
import styles from './AddLinkBar.module.css';
import linkIconImage from '@/public/link.svg';
import Button from './Button';

const AddLinkBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
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
