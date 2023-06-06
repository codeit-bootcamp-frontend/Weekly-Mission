import Head from 'next/head';
import ButtonLink from '@/components/ButtonLink';
import styles from '@/styles/MyLink.module.css';

const MyLink = () => {
  return (
    <>
      <Head>
        <title>내 링크 | Linkbrary</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>내 링크</h1>
        <ButtonLink href="/">홈으로</ButtonLink>
      </div>
    </>
  );
};

export default MyLink;
