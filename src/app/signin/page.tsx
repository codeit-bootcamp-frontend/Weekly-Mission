"use client";

import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <main className={styles.container}>
      <article className={styles.loginForm}>
        <section className={styles.logoContainer}>
          <Link href="/">
            <Image src="/logo.svg" alt="logo" fill />
          </Link>
        </section>
        <section className={styles.createAccountText}>
          <p>
            회원이 아니신가요?<a href="/signup">회원 가입하기</a>
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
              <Image src="/show-password-icon.svg" alt="show password" fill />
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
          <a href="/forgot-password">비밀번호 찾기</a>
        </section>
        <section className={styles.socialLoginContainer}>
          <p>소셜 로그인</p>
          <div className={styles.socialLogoBox}>
            <Link href="https://www.google.com/">
              <Image src="/google-icon.png" alt="google logo" fill />
            </Link>
          </div>
          <div className={styles.socialLogoBox}>
            <Link href="https://www.kakaocorp.com/page/">
              <Image src="/kakao-icon.png" alt="kakao logo" fill />
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
};

export default page;
