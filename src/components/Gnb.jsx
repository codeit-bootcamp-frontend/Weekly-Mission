import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Gnb.module.css";
import logo from "/src/assets/logo.png";

function Gnb() {
  const [isLogin, setIsLogin] = useState(true);

  function applyLoginTemplate() {
    return (
      <div className={styles.userContainer}>
        <img
          className={styles.userImg}
          src={logo}
          alt="나중에 fetch username으로 변경 필요"
        />
        <p className={styles.userEmail}>fetch user email</p>
      </div>
    );
  }

  function applyDefaultTemplate() {
    return (
      <Link to="/signin" className={styles.loginBtn}>
        로그인
      </Link>
    );
  }

  return (
    <header className={styles.gnb}>
      <div className={styles.gnbContainer}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="로고" />
        </Link>
        {isLogin ? applyLoginTemplate() : applyDefaultTemplate()}
      </div>
    </header>
  );
}

export default Gnb;
