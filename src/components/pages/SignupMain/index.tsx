import Link from 'next/link'
import AccountLogo from '@/components/account/AccountLogo'
import SignupHeader from './SignupHeader'
import SignupForm from './SignupForm'
import SocialSignup from './SocialSignup'
import * as styles from './index.css'

const SignupMain = () => {
  return (
    <main className={styles.container}>
      <Link href="/">
        <AccountLogo />
      </Link>
      <SignupHeader />
      <SignupForm />
      <SocialSignup />
    </main>
  )
}

export default SignupMain
