import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import userSelector from '@/recoil/user/userSelector';
import styles from './Nav.module.css';
import logo from '@/public/logo.svg';
import ButtonLink from '@/components/ButtonLink';

const Nav = () => {
  const {
    userId, userName, userImage,
  } = useRecoilValue(userSelector);

  return (
    <nav className={styles.wrapper}>
      <div className={styles.container}>
        <Link href="/">
          <div className={styles.logoImage}>
            <Image
              fill
              src={logo}
              alt="LiLogo Image"
            />
          </div>
        </Link>
        {userId ? (
          <div className={styles.userProfile}>
            <Link href="/my-link">
              <div className={styles.profileImage}>
                <Image
                  fill
                  src={userImage}
                  alt={`${userName}'s Profile Image`}
                />
              </div>
            </Link>
          </div>
        ) : (
          <ButtonLink className={styles.styledButtonLink} href="/signin">
            로그인
          </ButtonLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;
