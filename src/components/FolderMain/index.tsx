import ButtonLink from '@/components/ButtonLink'
import * as styles from './FolderMain.css'

const FolderMain = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        폴더
      </div>
      <ButtonLink href="/">홈으로 이동</ButtonLink>
    </main>
  )
}

export default FolderMain
