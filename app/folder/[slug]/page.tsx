import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

import Gnb from "@/components/Gnb/Gnb";
import getCurrentUser from "@/lib/getCurrentUser";
import { getFolders } from "@/utils/axios/folderRequest";
import { getLinks } from "@/utils/axios/linkRequest";

import styles from "./page.module.scss";

const FolderContents = dynamic(
  () => import("@/components/FolderContents/FolderContents"),
  { ssr: false }
);

const Tab = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const userProfile = await getCurrentUser();
  if (!userProfile) {
    throw new Error(`Failed to fetch data`);
  }
  const userId = userProfile.id;
  const folderId = Number(params.slug);

  const [folders, links] = await Promise.all([
    getFolders(userId),
    getLinks(userId),
  ]);

  const filteredLinks = links.filter((link) => link.folder_id === folderId);

  const isFolder = folders.find((folder) => folder.id === folderId);

  if (!isFolder) {
    notFound();
  }

  return (
    <>
      <Gnb user={userProfile} />
      <main className={styles.main}>
        <FolderContents
          userId={userId}
          links={filteredLinks}
          folders={folders}
          currentTab={folderId}
        />
      </main>
    </>
  );
};

export default Tab;
