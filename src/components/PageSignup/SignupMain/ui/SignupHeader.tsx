import Link from 'next/link'
import * as styles from './SignupHeader.css'

const SignupHeader = () => {
  return (
    <div className={styles.headerText}>
      {'이미 회원이신가요? '}
      <div className={styles.accountLink}>
        <Link href="/signin">
          로그인 하기
        </Link>
      </div>
    </div>
  )
}

export default SignupHeader
