import Link from "next/link";
import styles from "@/components/IntroduceBoard.module.css";

function AddLinkButton() {
  return (
    <>
      <Link className={styles.link} href="">
        <div className={`${styles.button} ${styles.addLink}`}>
          링크 추가하기
        </div>
      </Link>
    </>
  );
}

export default function IntroduceBoard() {
  return (
    <div className={styles.introduceBoard}>
      <div className={styles.title}>
        <span className={styles.gradient1}>세상의 모든 정보</span>를<br />
        <span className={styles.lineChange}>쉽게 저장하고</span> 관리해 보세요
      </div>
      <AddLinkButton />
      <img
        className={styles.image1}
        src="/images/image1.png"
        alt="대표 이미지"
      ></img>
    </div>
  );
}
