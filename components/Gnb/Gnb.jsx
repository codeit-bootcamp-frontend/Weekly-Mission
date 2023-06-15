"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Gnb.module.css";
import { useSession, signIn, signOut  } from 'next-auth/react'

function Gnb({ user }) {

  console.log(user);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1>
            <Link href="/" className={styles.logo}>
              <Image
                src="/assets/Linkbrary.png"
                alt="linkbrary-logo"
                width="133"
                height="25"
                className={styles.image}
              />
            </Link>
          </h1>
          {user ? (
            <div className={styles.user}>
              <Image
                className={styles.userIcon}
                src={user.image_source}
                alt={"user-profile-image"}
                fill
              />
              <span className={styles.userEmail}>{user.email}</span>
            </div>
          ) : (
            <button onClick={() => { signIn() }} className={styles.loginBtn}>
              로그인
            </button>
          )}
        </div>
      </header>
    </>
  );
}

export default Gnb;
