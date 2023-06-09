"use client";

import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ChangeEvent, FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";

const validateEmailFormat = (mail: string) => {
  const mailformat =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mailformat.test(mail)) {
    return true;
  }
  return false;
};

const Page = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUsernameInput(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  const handleSignin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (validateEmailFormat(usernameInput)) {
      signIn("credentials", {
        username: usernameInput,
        password: passwordInput,
        redirect: true,
        callbackUrl: "/",
      });
    }
  };

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
        <form className={styles.signinForm} onSubmit={handleSignin}>
          <label htmlFor="username">이메일</label>
          <br />
          <input
            id="username"
            type="email"
            name="username"
            onChange={handleChangeUserName}
          />
          <label htmlFor="password">비밀번호</label>
          <br />
          <div className={styles.passwordField}>
            <input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              onChange={handleChangePassword}
            />
            <div
              id="show-password-icon"
              className={styles.showPasswordIcon}
              onClick={handleTogglePassword}
            >
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

export default Page;
