import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useHttp from '@hooks/use-Http.js';

// 로고 이미지
import logo from '@assets/Linkbrary.png';
// 프로파일 이미지
import profile from '@assets/profile.png';
import styles from '@components/GlobalNavigationBar.module.css';

const { VITE_USER_DATA_API } = import.meta.env;

const GlobalNavigationBar = () => {
  const navigate = useNavigate();

  const [isLogin, setIslogin] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const { isLoading, error, sendRequest: getUser } = useHttp(setUserInfo);

  useEffect(() => {
    getUser({ url: VITE_USER_DATA_API });
  }, [getUser]);

  // Home 이동
  const goToHome = () => {
    navigate('/');
  };

  // login 페이지 이동
  const goToLoginPage = () => {
    navigate('/shared');
  };

  // 로그인에 따른 버튼, 유저정보 구현
  const loginStatus = isLogin ? (
    <div className={styles.user}>
      <img src={profile} alt="userInfo" />
      <span>{userInfo?.email}</span>
    </div>
  ) : (
    <button onClick={goToLoginPage}>로그인</button>
  );

  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <div className={styles.logo}>
          <img onClick={goToHome} src={logo} alt="logo" />
        </div>
        <div>{loginStatus}</div>
      </div>
    </header>
  );
};

export default GlobalNavigationBar;
