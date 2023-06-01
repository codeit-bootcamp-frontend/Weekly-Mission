"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { IUserData } from "@/lib/getUserData";

import styles from "./gnb.module.css";

export interface IGnb {
  // 어떤 값도 담기지 않는 빈 객체를 가리키기 위해 Record<string, never> 사용
  user: Record<string, never> | IUserData;
}

const Gnb = ({ user }: IGnb) => {
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
