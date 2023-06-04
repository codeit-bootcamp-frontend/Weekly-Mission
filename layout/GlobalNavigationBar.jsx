// 로고 이미지
import logo from "/public/logo.svg";
import LoginStatus from "@components/LoginStatus";
import Link from "next/link";
import Image from "next/image";

import styles from "@layout/GlobalNavigationBar.module.css";

const GlobalNavigationBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <div>
          <LoginStatus />
        </div>
      </div>
    </header>
  );
};

export default GlobalNavigationBar;
