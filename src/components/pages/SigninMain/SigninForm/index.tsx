/* eslint-disable no-alert */

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/common/Button'
import AccountInput from '@/components/account/AccountInput'
import validateEmail from '@/lib/utility/account/validateEmail'
import validatePassword from '@/lib/utility/account/validatePassword'
import * as styles from './index.css'

const SigninForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'test@codeit.com' && password === 'codeit101') {
      router.push('/my-link')
    } else {
      alert('이메일과 비밀번호를 확인해주세요.')
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'email') {
      validateEmail(value)
    } else if (name === 'password') {
      validatePassword(value)
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
      default:
        break
    }
  }

  const toggleShowPassword = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowPassword(!showPassword)
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
      <Button type="submit">
        로그인
      </Button>
    </form>
  )
}

export default SigninForm
