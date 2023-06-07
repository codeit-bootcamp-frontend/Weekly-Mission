"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import useResponsiveHeader from "@/app/hooks/useResponsiveHeader";

const Header = () => {
  const headerRef = useRef(null);
  useResponsiveHeader(headerRef);
  return (
    <header className={styles.headerWrapper} ref={headerRef}>
      <nav>
        <Link className={styles.logo} href="/">
          <Image src="/logo.svg" alt="logo" fill />
        </Link>
        <Link className={styles.loginBtn} href="/signin.html">
          로그인
        </Link>
      </nav>
    </header>
  );
};

export default Header;
