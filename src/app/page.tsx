import styles from "@/styles/index.module.scss";
import Image from "next/image";
import Hero from "@/app/components/Hero/Hero";

export default function Page() {
  return (
    <>
      <Hero />
      <div className={styles.tutorialSection}>
        <article className={styles.tutorial}>
          <section className={styles.explanation}>
            <div className={styles.textArea}>
              <h1>
                <span className={`${styles.emphasis} ${styles._1}`}>
                  원하는 링크
                </span>
                를 <br />
                저장하세요
              </h1>
              <section className={`${styles.imageContainer} ${styles.hidden}`}>
                <Image src="/tutorial_01.png" alt="image" fill sizes="64vw" />
              </section>
              <p>
                나중에 읽고 싶은 글, 다시 보고 싶은 영상, <br />
                사고 싶은 옷, 기억하고 싶은 모든 것을 <br />한 공간에
                저장하세요.
              </p>
            </div>
          </section>
          <section className={styles.imageContainer}>
            <Image src="/tutorial_01.png" alt="image" fill sizes="64vw" />
          </section>
        </article>
        <article className={styles.tutorial}>
          <section className={styles.imageContainer}>
            <Image src="/tutorial_02.png" alt="image" fill sizes="64vw" />
          </section>
          <section className={styles.explanation}>
            <div className={styles.textArea}>
              <h1>
                링크를 폴더로 <br />
                <span className={`${styles.emphasis} ${styles._2}`}>관리</span>
                하세요
              </h1>
              <section className={`${styles.imageContainer} ${styles.hidden}`}>
                <Image src="/tutorial_02.png" alt="image" fill sizes="64vw" />
              </section>
              <p>
                나만의 폴더를 무제한으로 만들고 <br />
                다양하게 활용할 수 있어요.
              </p>
            </div>
          </section>
        </article>
        <article className={styles.tutorial}>
          <section className={styles.explanation}>
            <div className={styles.textArea}>
              <h1>
                저장한 링크를 <br />
                <span className={`${styles.emphasis} ${styles._3}`}>공유</span>
                해 보세요.
              </h1>
              <section className={`${styles.imageContainer} ${styles.hidden}`}>
                <Image src="/tutorial_03.png" alt="image" fill sizes="64vw" />
              </section>
              <p>
                여러 링크를 폴더에 담고 공유할 수 있어요. <br />
                가족, 친구, 동료들에게 쉽고 빠르게 링크를 <br />
                공유해 보세요.
              </p>
            </div>
          </section>
          <section className={styles.imageContainer}>
            <Image src="/tutorial_03.png" alt="image" fill sizes="64vw" />
          </section>
        </article>
        <article className={styles.tutorial}>
          <section className={styles.imageContainer}>
            <Image src="/tutorial_04.png" alt="image" fill sizes="64vw" />
          </section>
          <section className={styles.explanation}>
            <div className={styles.textArea}>
              <h1>
                저장한 링크를 <br />
                <span className={`${styles.emphasis} ${styles._4}`}>검색</span>
                해 보세요
              </h1>
              <section className={`${styles.imageContainer} ${styles.hidden}`}>
                <Image src="/tutorial_04.png" alt="image" fill sizes="64vw" />
              </section>
              <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
