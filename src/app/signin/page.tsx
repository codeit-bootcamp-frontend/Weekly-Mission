import React from "react";
import styles from "./page.module.scss";

const page = () => {
  return (
    <article className={styles.loginForm}>
      <section className={styles.logoContainer}>
        <a href="/index.html">
          <img src="images/logo.svg" alt="logo" />
        </a>
      </section>
      <section className={styles.createAccountText}>
        <p>
          회원이 아니신가요?<a href="/signup.html">회원 가입하기</a>
        </p>
      </section>
      <form className={styles.signinForm}>
        <label htmlFor="username">이메일</label>
        <br />
        <input id="username" type="email" name="username" />
        <label htmlFor="password">비밀번호</label>
        <br />
        <div className={styles.passwordField}>
          <input id="password" type="password" name="password" />
          <div id="show-password-icon" className={styles.showPasswordIcon}>
            <img src="/images/show-password-icon.svg" alt="show password" />
          </div>
        </div>
        <input
          id="login-btn"
          className={styles.loginBtn}
          type="submit"
          value="로그인"
        />
      </form>
      <section className={styles.findPassword}>
        <a href="/forgot-password.html">비밀번호 찾기</a>
      </section>
      <section className={styles.socialLoginContainer}>
        <p>소셜 로그인</p>
        <div className={styles.socialLogoBox}>
          <a href="https://www.google.com/">
            <img src="/images/google-icon.png" alt="google logo" />
          </a>
        </div>
        <div className="social-logo-box">
          <a href="https://www.kakaocorp.com/page/">
            <img src="/images/kakao-icon.png" alt="kakao logo" />
          </a>
        </div>
      </section>
    </article>
  );
};

export default page;
