"use client";

import { useState } from "react";
import useHttp from "@/hooks/useHttp";
import styles from "@/components/LoginStatus.module.css";

const LoginStatus = () => {
  const [isLogin, setIslogin] = useState(false);
  const { responseData } = useHttp({
    url: "/users/5",
  });
  console.log(responseData);

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
