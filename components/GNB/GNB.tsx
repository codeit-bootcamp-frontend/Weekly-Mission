"use client";

import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

import { useInViewGNB } from "@/hooks/useInViewGNBContext";
import { User } from "@/utils/api/types";

import styles from "./GNB.module.scss";
import LoginButton from "./LoginButton";
import UserProfile from "./UserProfile";

import logo from "@/public/images/logo.png";

const cx = classNames.bind(styles);

export default function GNB({ user }: { user: User | null }) {
  const inViewGNB = useInViewGNB();

  return (
    <header className={cx("gnb", { inViewGNB })}>
      <div className={cx("gnbContainer")}>
        <Link href="/">
          <div className={cx("logoContainer")}>
            <Image width={133} height={24} src={logo} alt="로고" />
          </div>
        </Link>
        {user ? <UserProfile user={user} /> : <LoginButton />}
      </div>
    </header>
  );
}
