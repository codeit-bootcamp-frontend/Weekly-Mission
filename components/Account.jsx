/* eslint-disable no-alert */
import { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import userAtom from 'recoil/user/userAtom';
import styles from './Account.module.css';
import { isValidEmail, isValidPassword } from '@/lib/validators';
import logoImage from '@/public/logo.svg';
import AccountInput from '@/components/AccountInput';
import AccountSocialLogin from '@/components/AccountSocialLogin';
import Button from '@/components/Button';

const Account = ({ isSignin = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const setUser = useSetRecoilState(userAtom);
  const router = useRouter();

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'password2':
        setConfirmPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleBlur = (e) => {
    if (e.target.name === 'email') {
      switch (true) {
        case email === '':
          break;
        case !isValidEmail(email):
          alert('올바른 이메일 형식이 아닙니다.');
          break;
        case !isSignin && email === 'test@codeit.com':
          alert('이미 사용 중인 아이디입니다.');
          break;
        default:
          break;
      }
    } else if (e.target.name === 'password') {
      switch (true) {
        case password === '':
          break;
        case !isValidPassword(password):
          alert('비밀번호는 영문, 숫자 조합 8자 이상을 입력해 주세요.');
          break;
        case confirmPassword !== '' && password !== confirmPassword:
          alert('비밀번호가 일치하지 않습니다.');
          break;
        default:
          break;
      }
    } else if (e.target.name === 'password2') {
      switch (true) {
        case confirmPassword === '':
          break;
        case !isValidPassword(confirmPassword):
          alert('비밀번호는 영문, 숫자 조합 8자 이상을 입력해 주세요.');
          break;
        case password !== '' && password !== confirmPassword:
          alert('비밀번호가 일치하지 않습니다.');
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignin) {
      if (email === 'test@codeit.com' && password === 'codeit101') {
        setUser({
          id: 1,
          name: '코드잇',
          email: 'test@codeit.com',
          profileImageSource: '',
        });
        router.push('/my-link');
      } else {
        alert('이메일과 비밀번호를 확인해주세요.');
      }
    } else {
      switch (true) {
        case email === '':
          alert('이메일을 입력해 주세요.');
          break;
        case !isValidEmail(email):
          alert('올바른 이메일 형식이 아닙니다.');
          break;
        case email === 'test@codeit.com':
          alert('이미 사용 중인 이메일입니다.');
          break;
        case password === '' || confirmPassword === '':
          alert('비밀번호를 입력해 주세요.');
          break;
        case !isValidPassword(password) || !isValidPassword(confirmPassword):
          alert('비밀번호는 영문, 숫자 조합 8자 이상을 입력해 주세요.');
          break;
        case password !== confirmPassword:
          alert('비밀번호가 일치하지 않습니다.');
          break;
        default:
          setUser({
            id: 1,
            name: '코드잇',
            email,
            profileImageSource: '',
          });
          router.push('/my-link');
          break;
      }
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handlePasswordToggler = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => { return !prevState; });
  };

  const handlePassword2Toggler = (e) => {
    e.preventDefault();
    setShowPassword2((prevState) => { return !prevState; });
  };
  return (
    <main className={styles.container}>
      <Link href="/">
        <div className={styles.logoImage}>
          <Image
            fill
            src={logoImage}
            alt="Linkbrary Logo"
          />
        </div>
      </Link>
      <div className={styles.headerDescription}>
        {isSignin ? '회원이 아니신가요? ' : '이미 회원이신가요? '}
        <Link href={isSignin ? '/signup' : '/signin'}>
          <div className={styles.accountLink}>
            {isSignin ? '회원 가입하기' : '로그인 하기'}
          </div>
        </Link>
      </div>
      <form className={styles.accountForm} onSubmit={handleSubmit}>
        <AccountInput
          value="email"
          type="email"
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
        <AccountInput
          value="password"
          type={showPassword ? 'text' : 'password'}
          handleBlur={handleBlur}
          handleChange={handleChange}
          showPassword={showPassword}
          handlePasswordToggler={handlePasswordToggler}
        />
        {isSignin || (
          <AccountInput
            value="password"
            type={showPassword2 ? 'text' : 'password'}
            handleBlur={handleBlur}
            handleChange={handleChange}
            showPassword={showPassword2}
            isConfirmPassword
            handlePasswordToggler={handlePassword2Toggler}
          />
        )}
        <Button type="submit">
          {isSignin ? '로그인' : '회원가입'}
        </Button>
      </form>
      {isSignin && (
      <div className={styles.forgotPassword}>
        <Link href="/forgot-password">비밀번호 찾기</Link>
      </div>
      )}
      <AccountSocialLogin isSignin={isSignin} />
    </main>
  );
};

Account.propTypes = {
  isSignin: PropTypes.bool,
};

export default Account;
