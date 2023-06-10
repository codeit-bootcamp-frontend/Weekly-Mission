"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import useResponsiveHeader from "@/app/hooks/useResponsiveHeader";
import UserAccountInfo from "./UserAccountInfo";
import { Session } from "next-auth";

interface HeaderProps {
  session: Session | null;
}

const Header = ({ session }: HeaderProps) => {
  const headerRef = useRef(null);
  useResponsiveHeader(headerRef);
  return (
    <header className={styles.headerWrapper} ref={headerRef}>
      <nav>
        <Link className={styles.logo} href="/">
          <Image src="/logo.svg" alt="logo" fill sizes="10vw" />
        </Link>
        {!session?.user ? (
          <Link className={styles.loginBtn} href="/signin">
            로그인
          </Link>
        ) : (
          <UserAccountInfo
            email={session.user.email as string}
            profileImgSrc={session.user.image as string}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
