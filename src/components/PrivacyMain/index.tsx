import ButtonLink from '@/components/ButtonLink'
import * as styles from './PrivacyMain.css'

const PrivacyMain = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        개인정보 처리 방침
      </div>
      <ButtonLink href="/">홈으로 이동</ButtonLink>
    </main>
  )
}

export default PrivacyMain
