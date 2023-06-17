"use client";

import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import { useVisibleGNB } from "@/hooks/useVisibleGNBContext.js";

import styles from "./GNB.module.scss";
import LoginButton from "./LoginButton";
import UserProfile from "./UserProfile";

import logo from "@/public/images/logo.png";

const cx = classNames.bind(styles);

export default function GNB({ isLogged, user }) {
  const unvisible = !useVisibleGNB();

  return (
    <header className={cx("gnb", { unvisible })}>
      <div className={cx("gnbContainer")}>
        <Link href="/">
          <div className={cx("logoContainer")}>
            <Image width={133} height={24} src={logo} alt="로고" />
          </div>
        </Link>
        {isLogged ? <UserProfile user={user} /> : <LoginButton />}
      </div>
    </header>
  );
}

GNB.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  user: PropTypes.object,
};
