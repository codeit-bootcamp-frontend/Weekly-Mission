import styles from "@components/Gnb.module.css";
import logo from "@assets/img/logo.png";
import profile from "@assets/img/profile.png";

export default function Gnb(props) {
  const { gnbData } = props;
  const email = gnbData?.email;
  const profileImageSource = gnbData?.profileImageSource;

  return (
    <div className={styles.gnb}>
      <div className={styles.logo}>
        <a href="/" className={styles.logo_link}>
          <img src={logo} alt="linkbrary" className={styles.logo_img} />
        </a>
      </div>
      {gnbData ? (
        <div className={styles.account}>
          <img className={styles.profileImg} src={profileImageSource} />
          <span className={styles.email}>{email}</span>
        </div>
      ) : (
        <div>
          <a className={styles.loginBtn} href="signin.html">
            로그인
          </a>
        </div>
      )}
    </div>
  );
}
