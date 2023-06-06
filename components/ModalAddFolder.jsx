import Button from './Button';
import styles from './ModalAddFolder.module.css';

const ModalAddFolder = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2 className={styles.modalTitle}>폴더 추가</h2>
      <input className={styles.modalInput} placeholder="내용 입력" />
      <Button>추가하기</Button>
    </form>
  );
};

export default ModalAddFolder;
