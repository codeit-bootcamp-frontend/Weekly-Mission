import Button from '@/components/Button'
import * as styles from './SigninForm.css'

const SigninForm = () => {
  return (
    <form className={styles.accountForm}>
      <input />
      <input />
      <Button type="submit">
        로그인
      </Button>
    </form>
  )
}

export default SigninForm
