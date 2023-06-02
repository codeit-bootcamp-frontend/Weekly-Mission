// 로고 이미지
// import logo from "@assets/Linkbrary.png";
import LoginStatus from "@components/LoginStatus";

// 프로파일 이미지
// import profile from "@assets/profile.png";
import styles from "./GlobalNavigationBar.module.css";

const GlobalNavigationBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        {/* <div className={styles.logo}>
          <img onClick={goToHome} src={logo} alt="logo" />
        </div> */}
        <div>
          <LoginStatus />
        </div>
      </div>
    </header>
  );
};

export default GlobalNavigationBar;
