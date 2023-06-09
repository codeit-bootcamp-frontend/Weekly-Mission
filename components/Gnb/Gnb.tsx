import Image from "next/image";
import Link from "next/link";

import { IUserData } from "@/lib/getUserData";

import styles from "./Gnb.module.scss";

export interface IGnb {
  user: IUserData | null;
}

const Gnb = ({ user }: IGnb) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/assets/linkbrary-logo.svg"
              alt="Linkbrary Logo"
              width="133"
              height="25"
              priority
              className={styles.image}
            />
          </Link>
          {(user && Object.keys(user).length === 0) || !user ? (
            <Link href="/signin" className={styles.signin}>
              로그인
            </Link>
          ) : (
            user && (
              <Link href="" className={styles.user}>
                <div className={styles.imgContainer}>
                  <Image
                    src={user.profileImageSource}
                    alt={user.name}
                    width="28"
                    height="28"
                    className={styles.image}
                  />
                </div>
                <span className={styles.email}>{user.email}</span>
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Gnb;
