import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './AccountSocialLogin.module.css';
import googleLinkIcon from '@/public/link-google.svg';
import kakaotalkLinkIcon from '@/public/link-kakaotalk.svg';

const AccountSocialLogin = ({ isSignin = false }) => {
  return (
    <div className={styles.container}>
      <p>
        {isSignin ? '소셜 로그인' : '다른 방식으로 가입하기'}
      </p>
      <div className={styles.iconContainer}>
        <Link href="https://www.google.com/" target="_blank">
          <div className={styles.icon}>
            <Image
              fill
              src={googleLinkIcon}
              alt="Google Icon"
            />
          </div>
        </Link>
        <Link href="https://www.kakaocorp.com/" target="_blank">
          <div className={styles.icon}>
            <Image
              fill
              src={kakaotalkLinkIcon}
              alt="KakaoTalk Icon"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

AccountSocialLogin.propTypes = {
  isSignin: PropTypes.bool,
};

export default AccountSocialLogin;
