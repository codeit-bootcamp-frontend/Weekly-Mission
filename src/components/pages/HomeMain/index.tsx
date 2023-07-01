import Image from 'next/image'
import * as styles from './index.css'

const HomeMain = () => {
  return (
    <main className={styles.homeBody}>
      <section className={styles.contentContainer}>
        <h2 className={styles.contentTitle}>
          <span className={styles.emphasis1}>원하는 링크</span>
          를 저장하세요
        </h2>
        <p className={styles.contentDescription}>
          나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을
          <br className={styles.brHide} />
          한 공간에 저장하세요.
        </p>
        <div className={styles.contentImage}>
          <Image
            fill
            src="/homepage-body-thumb1.svg"
            alt="Image1"
          />
        </div>
      </section>
      <section className={styles.contentContainer}>
        <h2 className={styles.contentTitle}>
          {'링크를 폴더로 '}
          <span className={styles.emphasis2}>관리</span>
          하세요
        </h2>
        <p className={styles.contentDescription}>
          {'나만의 폴더를 무제한으로 만들고 '}
          <br className={styles.brHide} />
          다양하게 활용할 수 있습니다.
        </p>
        <div className={`${styles.contentImage} ${styles.evenImage}`}>
          <Image
            fill
            src="/homepage-body-thumb2.svg"
            alt="Image2"
          />
        </div>
      </section>
      <section className={styles.contentContainer}>
        <h2 className={styles.contentTitle}>
          {'저장한 링크를 '}
          <span className={styles.emphasis3}>공유</span>
          해 보세요
        </h2>
        <p className={styles.contentDescription}>
          아래 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
          쉽고 빠르게 링크를 공유해 보세요.
        </p>
        <div className={styles.contentImage}>
          <Image
            fill
            src="/homepage-body-thumb3.svg"
            alt="Image3"
          />
        </div>
      </section>
      <section className={styles.contentContainer}>
        <h2 className={styles.contentTitle}>
          {'저장한 링크를 '}
          <span className={styles.emphasis4}>검색</span>
          해 보세요
        </h2>
        <p className={styles.contentDescription}>
          중요한 정보들을 검색으로 쉽게 찾아보세요.
        </p>
        <div className={`${styles.contentImage} ${styles.evenImage}`}>
          <Image
            fill
            src="/homepage-body-thumb4.svg"
            alt="Image4"
          />
        </div>
      </section>
    </main>
  )
}

export default HomeMain
