"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
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
