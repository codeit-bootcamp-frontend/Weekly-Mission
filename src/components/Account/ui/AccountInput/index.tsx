import { IAccountInputProps } from '@/lib/types'
import EyeToggler from '@/components/Account/ui/EyeToggler'
import * as styles from './index.css'

const AccountInput = ({
  value,
  isConfirmPassword = false,
  toggleShowPassword = () => {},
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
          <EyeToggler onMouseDown={toggleShowPassword} />
        )}
      </div>
    </>
  )
}

export default AccountInput
