import ButtonLink from '@/components/ButtonLink'
import * as styles from './SharedMain.css'

const SharedMain = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        즐겨찾기
      </div>
      <ButtonLink href="/">홈으로 이동</ButtonLink>
    </main>
  )
}

export default SharedMain
