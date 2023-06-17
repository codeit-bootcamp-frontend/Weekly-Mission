import ButtonLink from '@/components/ButtonLink'
import * as styles from './ForgotPasswordMain.css'

const ForgotPasswordMain = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        비밀번호 찾기
      </div>
      <ButtonLink href="/">홈으로 이동</ButtonLink>
    </main>
  )
}

export default ForgotPasswordMain
