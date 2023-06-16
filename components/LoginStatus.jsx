"use client";

import { useState } from "react";
import useHttp from "../hooks/useHttp";
import profile from "/public/profile.svg";
import Image from "next/image";
import styles from "@components/LoginStatus.module.css";

const LoginStatus = () => {
  const [isLogin, setIslogin] = useState(false);
  const { responseData, isLoading, error } = useHttp({
    url: "/users/5",
  });

  const loginHanlder = () => {
    setIslogin(!isLogin);
  };

  return (
    <>
      {isLogin ? (
        <>
          <div className={styles.user}>
            <img src={responseData?.data[0]?.image_source} alt="userInfo" />
            <span>{responseData?.data[0]?.email}</span>
          </div>
        </>
      ) : (
        <button onClick={loginHanlder}>로그인</button>
      )}
    </>
  );
};

export default LoginStatus;
