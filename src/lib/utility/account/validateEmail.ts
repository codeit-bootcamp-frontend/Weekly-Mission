/* eslint-disable no-alert */
import { isValidEmail } from '@/lib/utility/account/validators'

const validateEmail = (value: string) => {
  if (value === '') return
  if (!isValidEmail(value)) {
    alert('올바른 이메일 형식이 아닙니다.')
  }
}

export default validateEmail
