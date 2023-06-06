import { useState } from 'react';
import Image from 'next/image';
import checkIcon from '@/public/check.svg';
import Button from './Button';
import styles from './ModalAddToFolder.module.css';

const ModalAddToFolder = () => {
  const [option, setOption] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = (num) => {
    setOption(num);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>폴더에 추가</h2>
        <p className={styles.modalDescription}>링크 주소</p>
      </div>
      <div className={styles.modalButtons}>
        <button
          type="button"
          className={`${styles.modalButton} ${option === 1 ? styles.selected : ''}`}
          onClick={() => { return handleClick(1); }}
        >
          <p className={styles.modalButtonTitle}>
            코딩팁
            <span className={styles.modalDescription}>7개 링크</span>
          </p>
          {option === 1 && <Image width={14} height={14} src={checkIcon} alt="check" />}
        </button>
        <button
          type="button"
          className={`${styles.modalButton} ${option === 2 ? styles.selected : ''}`}
          onClick={() => { return handleClick(2); }}
        >
          <p className={styles.modalButtonTitle}>
            채용 사이트
            <span className={styles.modalDescription}>12개 링크</span>
          </p>
          {option === 2 && <Image width={14} height={14} src={checkIcon} alt="check" />}
        </button>
        <button
          type="button"
          className={`${styles.modalButton} ${option === 3 ? styles.selected : ''}`}
          onClick={() => { return handleClick(3); }}
        >
          <p className={styles.modalButtonTitle}>
            유용한 글
            <span className={styles.modalDescription}>30개 링크</span>
          </p>
          {option === 3 && <Image width={14} height={14} src={checkIcon} alt="check" />}
        </button>
        <button
          type="button"
          className={`${styles.modalButton} ${option === 4 ? styles.selected : ''}`}
          onClick={() => { return handleClick(4); }}
        >
          <p className={styles.modalButtonTitle}>
            나만의 장소
            <span className={styles.modalDescription}>3개 링크</span>
          </p>
          {option === 4 && <Image width={14} height={14} src={checkIcon} alt="check" />}
        </button>
      </div>
      <Button>추가하기</Button>
    </form>
  );
};

export default ModalAddToFolder;
