import Link from 'next/link'
import AccountLogo from '@/components/Account/ui/AccountLogo'
import SignupForm from './feature/SignupForm'
import * as styles from './SignupMain.css'

const SignupMain = () => {
  return (
    <main className={styles.container}>
      <Link href="/">
        <AccountLogo />
      </Link>
      <p className={styles.headerText}>
        {'이미 회원이신가요? '}
        <div className={styles.accountLink}>
          <Link href="/signin">
            로그인 하기
          </Link>
        </div>
      </p>
      <SignupForm />
      <div />
    </main>
  )
}

export default SignupMain
