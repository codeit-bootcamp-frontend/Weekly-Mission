import Image from "next/image";
import styles from "@/styles/home.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            <span className={styles["title-gradient"]}>세상의 모든 정보</span>를
            <br />
            쉽게 저장하고
            <br className={styles["hidden-br-pc"]} />
            관리해보세요
          </h1>
          <a className={styles["add-link"]} href="#">
            링크 추가하기
          </a>
        </div>
        <Image
          className={styles["home-hero-img"]}
          alt="home-hero-img"
          src="/assets/images/home-hero-img.png"
          width={1118}
          height={659}
        />
      </main>

      <section className={styles.section}>
        <article className={`${styles.article} ${styles.mobile}`}>
          <h2
            className={`${styles["article-heading"]} ${styles.left} ${styles.mobile}`}
          >
            <span className={styles["save-link-gradient"]}>원하는 링크</span>를
            <br className={styles["hidden-br-mobile"]} />
            저장하세요
          </h2>
          <p className={`${styles.left} ${styles.mobile}`}>
            나중에 읽고 싶은 글, 다시 보고 싶은 영상,
            <br className={styles["hidden-br-mobile"]} />
            사고 싶은 옷, 기억하고 싶은 모든 것을
            <br className={styles["hidden-br-mobile"]} />한 공간에 저장하세요.
          </p>
          <Image
            alt="save-link-img"
            src="/assets/images/save-link-img.png"
            className={`${styles["content-imgs"]} ${styles.right} ${styles.mobile}`}
            width={550}
            height={450}
          />
        </article>
        <article className={`${styles.article} ${styles.mobile}`}>
          <Image
            alt="manage-link-img"
            src="/assets/images/manage-link-img.png"
            className={`${styles["content-imgs"]} ${styles.left} ${styles.mobile}`}
            width={550}
            height={450}
          />

          <h2
            className={`${styles["article-heading"]} ${styles.right} ${styles.mobile}`}
          >
            링크를 폴더로 <br className={styles["hidden-br-mobile"]} />
            <span className={styles["manage-link-gradient"]}>관리</span>하세요
          </h2>
          <p className={`${styles.right} ${styles.mobile}`}>
            나만의 폴더를 무제함으로 만들고
            <br className={styles["hidden-br-mobile"]} />
            다양하게 활용할 수 있어요.
          </p>
        </article>
        <article className={`${styles.article} ${styles.mobile}`}>
          <h2
            className={`${styles["article-heading"]} ${styles.left} ${styles.mobile}`}
          >
            저장한 링크를 <br className={styles["hidden-br-mobile"]} />
            <span className={styles["share-link-gradient"]}>공유</span>해보세요
          </h2>
          <p className={`${styles.left} ${styles.mobile}`}>
            여러 링크를 폴더에 담고 공유할 수 있어요.
            <br className={styles["hidden-br-mobile"]} />
            가족, 친구, 동료들에게 쉽고 빠르게 링크를
            <br className={styles["hidden-br-mobile"]} />
            공유해 보세요.
          </p>

          <Image
            alt="share-link-img"
            src="/assets/images/share-link-img.png"
            className={`${styles["content-imgs"]} ${styles.right} ${styles.mobile}`}
            width={550}
            height={450}
          />
        </article>
        <article className={`${styles.article} ${styles.mobile}`}>
          <Image
            alt="search-link-img"
            src="/assets/images/search-link-img.png"
            className={`${styles["content-imgs"]} ${styles.left} ${styles.mobile}`}
            width={550}
            height={450}
          />

          <h2
            className={`${styles["article-heading"]} ${styles.right} ${styles.mobile}`}
          >
            저장한 링크를 <br className={styles["hidden-br-mobile"]} />
            <span className={styles["search-link-gradient"]}>검색</span>해보세요
          </h2>
          <p className={`${styles.right} ${styles.mobile}`}>
            중요한 정보들을 검색으로 쉽게 찾아보세요.
          </p>
        </article>
      </section>
    </div>
  );
}
