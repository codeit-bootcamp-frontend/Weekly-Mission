import Image from 'next/image'
import { IAccountInputProps } from '@/lib/types'
import * as styles from './AccountInput.css'

const AccountInput = ({
  value,
  isConfirmPassword = false,
  onTogglePassword = () => { return null },
  ...props
}: IAccountInputProps) => {
  const EMAIL_VALUE = 'email'
  const PASSWORD_VALUE = 'password'

  return (
    <>
      <label
        className={styles.accountLabel}
        htmlFor={
          isConfirmPassword
            ? `${value}2-input`
            : `${value}-input`
          }
      >
        {value === EMAIL_VALUE ? '이메일' : '비밀번호'}
        {isConfirmPassword && ' 확인'}
      </label>
      <div className={styles.inputContainer}>
        <input
          className={styles.accountInput}
          id={isConfirmPassword ? `${value}2-input` : `${value}-input`}
          name={isConfirmPassword ? `${value}2` : value}
          placeholder={
            (value === EMAIL_VALUE ? '이메일을 입력해주세요.' : '비밀번호')
            + (isConfirmPassword ? ' 확인' : '')
          }
          autoComplete={
            value === EMAIL_VALUE
              ? 'email'
              : 'current-password'
          }
          {...props}
        />
        {value === PASSWORD_VALUE && (
          <button
            type="button"
            className={styles.eyeToggler}
            onMouseDown={onTogglePassword}
          >
            <Image
              fill
              src="/eye.svg"
              alt="Eye Toggler"
            />
          </button>
        )}
      </div>
    </>
  )
}

export default AccountInput
