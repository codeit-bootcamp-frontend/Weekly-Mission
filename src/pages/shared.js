import React from "react";
import styles from "@/styles/shared.module.css";
import SearchBar from "@/components/SearchBar";
import CardList from "@/components/CardList";
import PageInfo from "@/components/PageInfo";
import DefaultLayout from "@/layouts/DefaultLayout";
import getData from "@/lib/getData";

const SharedPage = ({ folder, links }) => {
  return (
    <>
      <div className={styles.heroSection}>
        <PageInfo folder={folder} />
      </div>
      <div className={styles.wrapper}>
        <SearchBar />
        <CardList cards={links} />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const data = await getData(`/api/sample/folder`);
  const { folder = {}, folder: { links = [] } = {} } = data?.data ?? {};

  return {
    props: {
      folder,
      links,
    },
  };
}

export default SharedPage;

SharedPage.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
