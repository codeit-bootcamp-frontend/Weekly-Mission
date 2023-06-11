import React, { ReactElement } from "react";
import styles from "@/styles/shared.module.css";
import SearchBar from "@/components/SearchBar";
import CardList from "@/components/CardList";
import PageInfo from "@/components/PageInfo";
import DefaultLayout from "@/layouts/DefaultLayout";
import getData from "@/lib/getData";
import { Folder, Link } from "$/types";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPageContext,
} from "next";

interface SharedPageProps {
  folder: Folder;
  links: Link[];
}

function SharedPage({
  links,
  folder,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(links);
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
}

export const getServerSideProps: GetServerSideProps<SharedPageProps> = async (
  context
) => {
  const { user: sharedUserId, folder: folderId } = context.query;

  const sharedData = await getData(
    `/api/users/${sharedUserId}/links?folderId=${folderId}`
  );
  const { distinctData: links = {} } = sharedData ?? {};

  const folderTitleData = await getData(
    `/api/users/${sharedUserId}/folders/${folderId}`
  );
  const {
    data: [{ name: folder = "" } = {}],
  } = folderTitleData ?? {};

  return {
    props: {
      folder,
      links,
    },
  };
};

export default SharedPage;

SharedPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
