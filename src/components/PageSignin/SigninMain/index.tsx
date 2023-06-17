import Link from 'next/link'
import AccountLogo from '@/components/Account/ui/AccountLogo'
import SigninForm from './feature/SigninForm'
import * as styles from './SigninMain.css'

const SigninMain = () => {
  return (
    <main className={styles.container}>
      <Link href="/">
        <AccountLogo />
      </Link>
      <p className={styles.headerText}>
        {'회원이 아니신가요? '}
        <div className={styles.accountLink}>
          <Link href="/signup">
            회원 가입하기
          </Link>
        </div>
      </p>
      <SigninForm />
      <div>
        <Link href="/fotgot-password">
          비밀번호 찾기
        </Link>
      </div>
      <div />
    </main>
  )
}

export default SigninMain
