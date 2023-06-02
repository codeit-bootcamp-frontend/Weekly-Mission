"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import useHttp from "../hooks/useHttp";

const LoginStatus = () => {
  // let router = useRouter();
  const [isLogin, setIslogin] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const { responseData, isLoading, error } = useHttp({
    url: "https://bootcamp-api.codeit.kr/api/sample/folder",
  });
  console.log(responseData);

  return (
    <>
      {/* {isLogin ? (
        <div className={styles.user}>
          <img src={profile} alt="userInfo" />
          <span>{userInfo?.email}</span>
        </div>
      ) : (
        <button onClick={goToLoginPage}>로그인</button>
      )} */}
    </>
  );
};

export default LoginStatus;
