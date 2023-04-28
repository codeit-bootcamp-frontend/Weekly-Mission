import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getUser from '@api/getUser';

// 로고 이미지
import logo from '@assets/Linkbrary.png';
// 프로파일 이미지
import profile from '@assets/profile.png';
import styles from '@components/GlobalNavigationBar.module.css';

const GlobalNavigationBar = () => {
  const navigate = useNavigate();
  const [isLogin, setIslogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const handleGetUsers = async () => {
    try {
      const { data } = await getUser();
      setUserInfo(data);
      setIslogin(true);
    } catch (error) {
      console.log(error);
    }
  };
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
      <span>{userInfo.email}</span>
    </div>
  ) : (
    <button onClick={goToLoginPage}>로그인</button>
  );

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <div className="logo">
          <img onClick={goToHome} src={logo} alt="logo" />
        </div>
        <div>{loginStatus}</div>
      </div>
    </header>
  );
};

export default GlobalNavigationBar;
