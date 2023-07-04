import Button from '@/components/common/Button'
import * as styles from './index.css'

const DeleteLink = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>링크 삭제</h2>
        <p className={styles.modalDescription}>https://www.abc.com</p>
      </div>
      <Button
        type="submit"
        className={styles.modalButton}
      >
        삭제하기
      </Button>
    </div>
  )
}

export default DeleteLink
