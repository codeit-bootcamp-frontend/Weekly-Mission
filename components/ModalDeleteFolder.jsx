import Button from './Button';
import styles from './ModalDeleteFolder.module.css';

const ModalDeleteFolder = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>폴더 삭제</h2>
        <p className={styles.modalDescription}>폴더명</p>
      </div>
      <Button className={styles.modalButton}>삭제하기</Button>
    </div>
  );
};

export default ModalDeleteFolder;
