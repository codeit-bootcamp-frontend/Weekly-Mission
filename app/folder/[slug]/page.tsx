import { notFound } from "next/navigation";

import FolderContents from "@/components/FolderContents/FolderContents";
import Gnb from "@/components/Gnb/Gnb";
import { getFolders } from "@/lib/axios/folderRequest";
import { getLinks } from "@/lib/axios/linkRequest";
import getCurrentUser from "@/utils/getCurrentUser";

import styles from "./page.module.scss";

export const revalidate = 1000;
const Tab = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const userProfile = await getCurrentUser();
  if (!userProfile) {
    throw new Error(`Failed to fetch user data`);
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
