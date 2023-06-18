/* eslint-disable no-alert */
import { isValidPassword } from '@/lib/utility/validators'

const validatePassword = (value: string) => {
  if (value === '') return
  if (!isValidPassword(value)) {
    alert('비밀번호는 영문, 숫자 조합 8자 이상을 입력해 주세요.')
  }
}

export default validatePassword
