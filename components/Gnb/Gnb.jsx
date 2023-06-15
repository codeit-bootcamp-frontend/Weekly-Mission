"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Gnb.module.css";
import instance from "@/app/api/axios";
import axios from "axios";

const USERID = "7";

async function getUserData() {
  try {
    const response = await instance.get("/users/7");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
// 데이터만 받아오기

const userData = await getUserData();

function Gnb() {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [userData, setUserData] = useState(null);

  async function fetchUserData() {
    const data = await getUserData();
    setUserData(data);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1>
            <Link href="/" className={styles.logo}></Link>
          </h1>
          <div>{userData.name}</div>
          {/* {isLoggedIn ? (
            <div className={styles.user}>
              <Image
                className={styles.userIcon}
                src={userData?.image_source}
                alt={"user-profile-image"}
              />
              <span className={styles.userEmail}>{userData?.email}</span>
            </div>
          ) : (
            <a href="/signin.html" className={styles.loginBtn}>
              로그인
            </a>
          )} */}
        </div>
      </header>
    </>
  );
}

export default Gnb;
