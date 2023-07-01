import Link from 'next/link'
import AccountLogo from '@/components/account/AccountLogo'
import ForgotPasswordLink from './ForgotPasswordLink'
import SigninForm from './SigninForm'
import SigninHeader from './SigninHeader'
import SocialSignin from './SocialSignin'
import * as styles from './index.css'

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
