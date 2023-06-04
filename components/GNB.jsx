import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/GNB.module.css";

export default function GNB() {
  return (
    <nav className={styles["gnb"]}>
      <Link className={styles["linkbrary-logo"]} href="/">
        <Image fill className={styles["linkbrary-logo-image"]} src="/images/linkbrary.svg" alt="linkbrary 로고 이미지" />
      </Link>
      <Link className={styles["login-button"]} href="/">
        로그인
      </Link>
    </nav>
  );
}
