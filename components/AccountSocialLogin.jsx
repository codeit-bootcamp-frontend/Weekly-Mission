import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { SOCIAL_LINKS } from '@/lib/constants';
import styles from './AccountSocialLogin.module.css';

const AccountSocialLogin = ({ isSignin = false }) => {
  return (
    <div className={styles.container}>
      <p>
        {isSignin ? '소셜 로그인' : '다른 방식으로 가입하기'}
      </p>
      <div className={styles.iconContainer}>
        {SOCIAL_LINKS.map((link) => {
          return (
            <Link href={link.url} key={link.name} target="_blank">
              <div className={styles.icon}>
                <Image
                  fill
                  src={link.icon}
                  alt={`${link.name} Icon`}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

AccountSocialLogin.propTypes = {
  isSignin: PropTypes.bool,
};

export default AccountSocialLogin;
