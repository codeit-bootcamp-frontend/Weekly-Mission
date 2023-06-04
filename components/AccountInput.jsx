import PropTypes from 'prop-types';
import styles from './AccountInput.module.css';

const AccountInput = ({
  value,
  type,
  handleBlur,
  handleChange,
  showPassword = false,
  isConfirmPassword = false,
  handlePasswordToggler = null,
}) => {
  const EMAIL_TYPE = 'email';
  const PASSWORD_TYPE = 'password';

  return (
    <>
      <label className={styles.accountLabel} htmlFor={isConfirmPassword ? `${value}-input2` : `${value}-input`}>
        {value === EMAIL_TYPE ? '이메일' : '비밀번호'}
        {isConfirmPassword && ' 확인'}
      </label>
      <div className={styles.inputContainer}>
        <input
          className={styles.accountInput}
          type={type}
          id={isConfirmPassword ? `${value}-input2` : `${value}-input`}
          name={isConfirmPassword ? `${value}2` : value}
          placeholder={
            (value === EMAIL_TYPE ? '이메일을 입력해주세요.' : '비밀번호')
            + (isConfirmPassword ? ' 확인' : '')
          }
          autoComplete={value === EMAIL_TYPE ? EMAIL_TYPE : 'current-password'}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {value === PASSWORD_TYPE && (
        <i
          className={`${styles.eyeToggler} fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
          onMouseDown={handlePasswordToggler}
          role="presentation"
        />
        )}
      </div>
    </>
  );
};

AccountInput.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  showPassword: PropTypes.bool,
  isConfirmPassword: PropTypes.bool,
  handlePasswordToggler: PropTypes.func,
};

export default AccountInput;
