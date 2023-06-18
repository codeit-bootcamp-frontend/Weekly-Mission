import Link from 'next/link'
import AccountLogo from '@/components/Account/ui/AccountLogo'
import SignupForm from './feature/SignupForm'
import SignupHeader from './ui/SignupHeader'
import SocialSignup from './ui/SocialSignup'
import * as styles from './SignupMain.css'

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
