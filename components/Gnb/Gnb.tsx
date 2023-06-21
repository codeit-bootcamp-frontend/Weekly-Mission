"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./Gnb.module.scss";

interface IGnbProps {
  user: {
    id: number;
    created_at: string;
    name: string;
    image_source: string;
    email: string;
  } | null;
}

const Gnb = ({ user }: IGnbProps) => {
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
          {!user ? (
            <Link href="/api/auth/login" className={styles.signin}>
              로그인
            </Link>
          ) : (
            <Link href="" className={styles.user}>
              <div className={styles.imgContainer}>
                <Image
                  src={user.image_source}
                  alt={user.name}
                  width="28"
                  height="28"
                  className={styles.image}
                />
              </div>
              <span className={styles.email}>{user.email}</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Gnb;
