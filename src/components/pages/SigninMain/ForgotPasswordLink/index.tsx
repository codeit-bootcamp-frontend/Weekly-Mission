import Link from 'next/link'
import * as styles from './index.css'

const ForgotPasswordLink = () => {
  return (
    <div className={styles.container}>
      <Link href="/forgot-password">
        비밀번호 찾기
      </Link>
    </div>
  )
}

export default ForgotPasswordLink
