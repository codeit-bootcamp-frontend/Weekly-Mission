"use client";

import Link from "next/link";
import styles from "./gnb.module.css";
import Image from "next/image";

export interface Props {
  user: {} & User;
}
export interface User {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

const Gnb = ({ user }: Props) => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.inner}`}>
        <nav className={`${styles.nav}`}>
          <Link href="/" className={`${styles.logo}`}>
            <Image
              src="/assets/linkbrary-logo.svg"
              alt="Linkbrary Logo"
              width="133"
              height="25"
              priority
            />
          </Link>
          {Object.keys(user).length === 0 ? (
            <Link href="/signin" className={`${styles.signin}`}>
              로그인
            </Link>
          ) : (
            <Link href="" className={`${styles.user}`}>
              <div className={`${styles.imgContainer}`}>
                <Image
                  src={user.profileImageSource}
                  alt={user.name}
                  width="28"
                  height="28"
                />
              </div>
              <span>{user.email}</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Gnb;
