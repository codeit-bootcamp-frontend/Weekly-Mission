import Link from 'next/link'
import AccountLogo from '@/components/Account/ui/AccountLogo'
import SigninForm from './feature/SigninForm'
import SigninHeader from './ui/SigninHeader'
import ForgotPasswordLink from './ui/ForgotPasswordLink'
import SocialSignin from './ui/SocialSignin'
import * as styles from './SigninMain.css'

const SigninMain = () => {
  return (
    <main className={styles.container}>
      <Link href="/">
        <AccountLogo />
      </Link>
      <SigninHeader />
      <SigninForm />
      <ForgotPasswordLink />
      <SocialSignin />
    </main>
  )
}

export default SigninMain
