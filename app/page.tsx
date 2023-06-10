import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import Gnb from "@/components/Gnb/Gnb";

import styles from "./page.module.scss";

export default async function Home() {
  return (
    <>
      <Gnb />
      <main className={styles.main}>
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
        <div className={styles.contents}>
          <div className={styles.inner}>
            <section className={`${styles.save} ${styles.section}`}>
              <h2>
                <span>
                  <span className={styles.gradient}>원하는 링크</span>를
                </span>
                <span>저장하세요</span>
              </h2>
              <p>
                나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
                싶은 모든 것을 한 공간에 저장하세요.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/assets/save-link.png"
                  alt="Save Link"
                  width={1100}
                  height={900}
                  className={styles.image}
                />
              </div>
            </section>

            <section
              className={`${styles.section} ${styles.manage} ${styles.right}`}
            >
              <h2>
                <span>링크를 폴더로</span>
                <span>
                  <span className={styles.gradient}>관리</span>하세요
                </span>
              </h2>
              <p>
                나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/assets/manage-link.png"
                  alt="Manage Link"
                  width={1100}
                  height={900}
                  className={styles.image}
                />
              </div>
            </section>
            <section className={`${styles.share} ${styles.section}`}>
              <h2>
                <span>저장한 링크를</span>
                <span>
                  <span className={styles.gradient}>공유</span>해 보세요
                </span>
              </h2>
              <p>
                여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구,
                동료들에게 쉽고 빠르게 링크를 공유해 보세요.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/assets/share-link.png"
                  alt="Share Link"
                  width={1100}
                  height={900}
                  className={styles.image}
                />
              </div>
            </section>

            <section
              className={`${styles.section} ${styles.search} ${styles.right}`}
            >
              <h2>
                <span>저장한 링크를</span>
                <span>
                  <span className={styles.gradient}>검색</span>해 보세요
                </span>
              </h2>
              <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
              <div className={styles.imageContainer}>
                <Image
                  src="/assets/search-link.png"
                  alt="Search Link"
                  width={1100}
                  height={900}
                  className={styles.image}
                />
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
