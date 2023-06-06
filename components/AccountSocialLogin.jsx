import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import googleLinkIcon from '@/public/link-google.svg';
import kakaotalkLinkIcon from '@/public/link-kakaotalk.svg';
import styles from './AccountSocialLogin.module.css';

const socialLinks = [
  {
    name: 'Google',
    url: 'https://www.google.com/',
    icon: googleLinkIcon,
  },
  {
    name: 'KakaoTalk',
    url: 'https://www.kakaocorp.com/',
    icon: kakaotalkLinkIcon,
  },
];

const AccountSocialLogin = ({ isSignin = false }) => {
  return (
    <div className={styles.container}>
      <p>
        {isSignin ? '소셜 로그인' : '다른 방식으로 가입하기'}
      </p>
      <div className={styles.iconContainer}>
        {socialLinks.map((link) => {
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
