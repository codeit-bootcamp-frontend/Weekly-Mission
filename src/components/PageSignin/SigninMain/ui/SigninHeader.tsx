import Link from 'next/link'
import * as styles from './SigninHeader.css'

const SigninHeader = () => {
  return (
    <div className={styles.headerText}>
      {'회원이 아니신가요? '}
      <div className={styles.accountLink}>
        <Link href="/signup">
          회원 가입하기
        </Link>
      </div>
    </div>
  )
}

export default SigninHeader
