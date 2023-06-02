import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Gnb.module.css";
import logo from "/src/assets/logo.png";
import LoginButton from "./LoginButton";
import UserProfile from "./UserProfile";

function GNB() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <header className={styles.gnb}>
      <div className={styles.gnbContainer}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="로고" />
        </Link>
        {isLoggedIn ? <UserProfile /> : <LoginButton />}
      </div>
    </header>
  );
}

export default GNB;
