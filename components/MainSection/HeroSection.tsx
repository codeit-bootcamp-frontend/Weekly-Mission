import Image from "next/image";

import styles from "../../app/page.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.title}>
          <span>세상의 모든 정보</span>를<br />
          <div>
            <p>쉽게 저장하고</p>
            <p>관리해 보세요</p>
          </div>
        </div>
        <div className={styles.add}>링크 추가하기</div>
        <div className={styles.imgContainer}>
          <Image
            src="/assets/img-info.png"
            alt="Hero Image"
            width={1168}
            height={561}
            priority
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
