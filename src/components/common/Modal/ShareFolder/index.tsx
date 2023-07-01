import Image from 'next/image'
import * as styles from './index.css'

const ShareFolder = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>폴더 공유</h2>
        <p className={styles.modalDescription}>폴더명</p>
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <Image
            width={42}
            height={42}
            src="/share-kakaotalk.svg"
            alt="Kakaotalk Link"
          />
          <p className={styles.iconName}>
            카카오톡
          </p>
        </div>
        <div className={styles.icon}>
          <Image
            width={42}
            height={42}
            src="/share-facebook.svg"
            alt="Facebook Link"
          />
          <p className={styles.iconName}>
            페이스북
          </p>
        </div>
        <div className={styles.icon}>
          <Image
            width={42}
            height={42}
            src="/share.svg"
            alt="Link Copy"
          />
          <p className={styles.iconName}>
            링크 복사
          </p>
        </div>
      </div>
    </div>
  )
}

export default ShareFolder
