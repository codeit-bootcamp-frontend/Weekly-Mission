"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import useResponsiveHeader from "@/app/hooks/useResponsiveHeader";
import { useSession } from "next-auth/react";
import UserAccountInfo from "./UserAccountInfo";

const Header = () => {
  const headerRef = useRef(null);
  useResponsiveHeader(headerRef);
  const { data: session } = useSession();
  console.log(session);
  return (
    <header className={styles.headerWrapper} ref={headerRef}>
      <nav>
        <Link className={styles.logo} href="/">
          <Image src="/logo.svg" alt="logo" fill />
        </Link>
        {session === undefined || session === null ? (
          <Link className={styles.loginBtn} href="/signin">
            로그인
          </Link>
        ) : (
          <UserAccountInfo
            email={session!.user?.email as string}
            profileImgSrc={session!.user?.image as string}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
