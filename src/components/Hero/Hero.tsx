import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import Link from "next/link";
import landingImg from "@/assets/landing.png";

const Hero = () => {
  return (
    <div className={styles.introWrapper}>
      <div className={styles.introSection}>
        <h1>
          <span>세상의 모든 정보</span>를 <br />
          <span className={styles.tabletNl}>쉽게 저장하고</span>
          관리해 보세요
        </h1>
        <Link href="#">링크 추가하기</Link>
        <div className={styles.landingImageContainer}>
          <div className={styles.imageBox}>
            <Image src={landingImg} alt="landing-img" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
