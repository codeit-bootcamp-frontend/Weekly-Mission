/* eslint-disable no-alert */

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { isValidEmail, isValidPassword } from '@/lib/utility/account/validators'
import Button from '@/components/common/Button'
import AccountInput from '@/components/account/AccountInput'
import validateEmail from '@/lib/utility/account/validateEmail'
import validatePassword from '@/lib/utility/account/validatePassword'
import * as styles from './index.css'

const SignupForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showPassword2, setShowPassword2] = useState<boolean>(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      !isValidEmail(email)
      || !isValidPassword(password)
      || !isValidPassword(confirmPassword)
    ) {
      return
    }
    if (email === 'test@codeit.com') {
      alert('이미 사용 중인 아이디입니다.')
      return
    }
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }
    router.push('/my-link')
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'email') {
      if (email === 'test@codeit.com') {
        alert('이미 사용 중인 아이디입니다.')
        return
      }
      validateEmail(value)
    } else if (name === 'password') {
      validatePassword(value)
      if (confirmPassword !== '' && value !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.')
      }
    } else if (name === 'password2') {
      validatePassword(value)
      if (password !== '' && password !== value) {
        alert('비밀번호가 일치하지 않습니다.')
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    switch (name) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      case 'password2':
        setConfirmPassword(value)
        break
      default:
        break
    }
  }

  const toggleShowPassword = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  const toggleShowPassword2 = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowPassword2(!showPassword2)
  }

  return (
    <form
      className={styles.accountForm}
      onSubmit={handleSubmit}
    >
      <AccountInput
        value="email"
        type="email"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <AccountInput
        value="password"
        type={showPassword ? 'text' : 'password'}
        onBlur={handleBlur}
        onChange={handleChange}
        toggleShowPassword={toggleShowPassword}
      />
      <AccountInput
        value="password"
        type={showPassword2 ? 'text' : 'password'}
        onBlur={handleBlur}
        onChange={handleChange}
        toggleShowPassword={toggleShowPassword2}
        isConfirmPassword
      />
      <Button type="submit">
        회원가입
      </Button>
    </form>
  )
}

export default SignupForm
