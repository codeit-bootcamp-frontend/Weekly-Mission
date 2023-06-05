import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/folder.module.css";
import SearchBar from "@/components/SearchBar";
import CardList from "@/components/CardList";
import PageInfo from "@/components/PageInfo";
import DefaultLayout from "@/layouts/DefaultLayout";
import EditModal from "@/components/Modals/EditModal";
import AddFolderModal from "@/components/Modals/AddFolderModal";
import DeleteFolderModal from "@/components/Modals/DeleteFolderModal";
import AddLinkBar from "@/components/AddLinkBar";
import FolderMenu from "@/components/FolderMenu/FolderMenu";
const BASE_URL = process.env.BASE_URL;

const FolderPage = ({ folder, links }) => {
  const router = useRouter();
  const { slug } = router.query;

  let currentTab;

  switch (slug) {
    case undefined:
      currentTab = 0;
      break;
    case "favorites":
      currentTab = 1;
      break;
    default:
      currentTab = Number(slug);
      break;
  }

  return (
    <>
      <div className={styles.heroSection}>
        <AddLinkBar />
      </div>
      <div className={styles.wrapper}>
        <SearchBar />
      </div>
      <div className={styles.cardWrapper}>
        <FolderMenu currentTab={currentTab} />
        <CardList cards={links} />
      </div>
      {/* <AddFolderModal /> */}
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

export default FolderPage;

FolderPage.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
