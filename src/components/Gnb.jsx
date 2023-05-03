import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Gnb.module.css";
import logo from "/src/assets/logo.png";
import { getUserData } from "../api";
import useAsync from "../hooks/useAsync";

function LoginButton() {
  return (
    <Link to="/signin" className={styles.loginBtn}>
      로그인
    </Link>
  );
}

function UserProfile() {
  const [user, setUser] = useState(null);
  const [isApplying, ApplyingError, onApplyAsync] = useAsync(getUserData);

  const applyUserData = useCallback(async () => {
    const userData = await onApplyAsync();
    if (!userData) return;
    setUser(userData);
  }, [onApplyAsync]);

  useEffect(() => {
    applyUserData();
  }, [applyUserData]);

  if (ApplyingError) return <div>{ApplyingError.message}</div>;
  return (
    user && (
      <div className={styles.userContainer}>
        <img
          className={styles.userImg}
          src={user.profileImageSource}
          alt={user.name}
        />
        <p className={styles.userEmail}>{user.email}</p>
      </div>
    )
  );
}

function Gnb() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <header className={styles.gnb}>
      <div className={styles.gnbContainer}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="로고" />
        </Link>
        {isLogin ? <UserProfile /> : <LoginButton />}
      </div>
    </header>
  );
}

export default Gnb;
