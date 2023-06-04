import React from "react";
import styles from "@/styles/shared.module.css";
import SearchBar from "@/components/SearchBar";
import CardList from "@/components/CardList";
import FolderInfo from "@/components/FolderInfo";
import DefaultLayout from '@/layouts/DefaultLayout'

const BASE_URL = process.env.BASE_URL;

const SharedPage = ({ folder, links }) => {
  return (
    <>
      <div className={styles.heroSection}>
        <FolderInfo folder={folder} />
      </div>
      <div className={styles.wrapper}>
        <SearchBar />
        <CardList cards={links} />
      </div>
    </>
  );
};


export async function getServerSideProps() {
  const response = await fetch(`${BASE_URL}api/sample/folder`);
  const data = await response.json();
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
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}