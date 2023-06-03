"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import useHttp from "../hooks/useHttp";
import profile from "/public/profile.svg";
import Image from "next/image";
import styles from "@components/LoginStatus.module.css";

const LoginStatus = () => {
  let router = useRouter();
  const [isLogin, setIslogin] = useState(false);
  const { responseData, isLoading, error } = useHttp({
    url: "https://bootcamp-api.codeit.kr/api/sample/user",
  });

  const loginHanlder = () => {
    setIslogin(!isLogin);
  };

  return (
    <>
      {isLogin ? (
        <>
          <div className={styles.user}>
            <Image src={profile} alt="userInfo" />
            <span>{responseData?.data?.email}</span>
          </div>
        </>
      ) : (
        <button onClick={loginHanlder}>로그인</button>
      )}
    </>
  );
};

export default LoginStatus;
