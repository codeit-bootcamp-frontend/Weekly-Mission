import Link from "next/link";
import styles from "@/components/Gnb.module.css";

export default function Gnb() {
  return (
    <div className={styles.gnbContainer}>
      <div className={styles.gnb}>
        <Link href="/">
          <img className={styles.logo} src="/images/logo.png" alt="Linkbrary" />
        </Link>
        <Link href="/signin">
          <div className={`${styles.button} ${styles.signin}`}>로그인</div>
        </Link>
      </div>
    </div>
  );
}
