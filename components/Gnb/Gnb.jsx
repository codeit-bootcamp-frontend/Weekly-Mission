"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Gnb.module.css";
import { signIn } from "next-auth/react";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Gnb({ user }) {
  console.log(user);

  return (
    <header className={cx("header")}>
      <div className={cx("container")}>
        <h1>
          <Link href="/">
            <Image
              src="/assets/Linkbrary.png"
              alt="linkbrary-logo"
              width="133"
              height="25"
              className={cx("image")}
            />
          </Link>
        </h1>
        {user ? (
          <div className={cx("user")}>
            <Image
              className={cx("user-icon")}
              src={user.image_source}
              alt={"user-profile-image"}
              width="28"
              height="28"
            />
            <span className={cx("user-email")}>{user.email}</span>
          </div>
        ) : (
          <button
            onClick={() => {
              signIn();
            }}
            className={cx("login-btn")}
          >
            로그인
          </button>
        )}
      </div>
    </header>
  );
}

export default Gnb;
