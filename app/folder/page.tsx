import FolderContents from "@/components/FolderContents/FolderContents";
import Gnb from "@/components/Gnb/Gnb";
import { getFolders } from "@/lib/axios/folderRequest";
import { getLinks } from "@/lib/axios/linkRequest";
import getCurrentUser from "@/utils/getCurrentUser";

import styles from "./page.module.scss";

export const revalidate = 1000;
const Folder = async () => {
  const userProfile = await getCurrentUser();
  if (!userProfile) {
    throw new Error(`Failed to fetch user data`);
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
        <FolderContents
          userId={userId}
          folders={folders}
          links={links}
          currentTab={0}
        />
      </main>
    </>
  );
};

export default Folder;
