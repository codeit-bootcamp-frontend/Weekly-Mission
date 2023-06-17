import Button from '@/components/Button'
import * as styles from './SignupForm.css'

const SignupForm = () => {
  return (
    <form className={styles.accountForm}>
      <input />
      <input />
      <input />
      <Button type="submit">
        회원가입
      </Button>
    </form>
  )
}

export default SignupForm
