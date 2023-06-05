import Image from 'next/image';
import styles from '@/styles/home.module.css';
import Layout from '@/components/Layout';
import HeaderImage from '@/public/homepage-header-image.png';
import ContentImage1 from '@/public/homepage-body-thumb1.svg';
import ContentImage2 from '@/public/homepage-body-thumb2.svg';
import ContentImage3 from '@/public/homepage-body-thumb3.svg';
import ContentImage4 from '@/public/homepage-body-thumb4.svg';
import ButtonLink from '@/components/ButtonLink';

const Home = () => {
  return (
    <Layout>
      <article className={styles.homeHeader}>
        <h1 className={styles.headerTitle}>
          <span className={styles.emphasis}>세상의 모든 정보</span>
          를
          <br />
          쉽게 저장하고 관리해 보세요
        </h1>
        <ButtonLink className={styles.styledButtonLink} href="/folder">링크 추가하기</ButtonLink>
        <div className={styles.headerImage}>
          <Image
            fill
            src={HeaderImage}
            alt="Header Image"
            priority
          />
        </div>
      </article>
      <main className={styles.homeBody}>
        <section className={styles.contentContainer}>
          <h2 className={styles.contentTitle}>
            <span className={styles.emphasis1}>원하는 링크</span>
            를 저장하세요
          </h2>
          <p className={styles.contentDescription}>
            나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을
            <br />
            한 공간에 저장하세요.
          </p>
          <div className={styles.contentImage}>
            <Image
              fill
              src={ContentImage1}
              alt="Image1 Thumbnail"
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
            <br />
            다양하게 활용할 수 있습니다.
          </p>
          <div className={styles.contentImage}>
            <Image
              fill
              src={ContentImage2}
              alt="Image2 Thumbnail"
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
              src={ContentImage3}
              alt="Image3 Thumbnail"
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
          <div className={styles.contentImage}>
            <Image
              fill
              src={ContentImage4}
              alt="Image4 Thumbnail"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
