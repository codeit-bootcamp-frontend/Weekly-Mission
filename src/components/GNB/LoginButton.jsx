import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginButton.module.css";

function LoginButton() {
  return (
    <Link to="/signin" className={styles.loginBtn}>
      로그인
    </Link>
  );
}

export default LoginButton;
