import dynamic from "next/dynamic";

import Gnb from "@/components/Gnb/Gnb";
import getCurrentUser from "@/lib/getCurrentUser";
import { getFolders } from "@/utils/axios/folderRequest";
import { getLinks } from "@/utils/axios/linkRequest";

import styles from "./page.module.scss";

const FolderContents = dynamic(
  () => import("@/components/FolderContents/FolderContents"),
  { ssr: false }
);

export const revalidate = 3600;
const Folder = async () => {
  const userProfile = await getCurrentUser();
  if (!userProfile) {
    throw new Error(`Failed to fetch data`);
  }
  const userId = userProfile.id;

  const [folders, links] = await Promise.all([
    getFolders(userId),
    getLinks(userId),
  ]);

  return (
    <>
      <Gnb user={userProfile} />
      <main className={styles.main}>
        <FolderContents folders={folders} links={links} currentTab={0} />
      </main>
    </>
  );
};

export default Folder;
