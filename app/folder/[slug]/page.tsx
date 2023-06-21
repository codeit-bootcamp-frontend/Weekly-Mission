import dynamic from "next/dynamic";

import Gnb from "@/components/Gnb/Gnb";
import getCurrentUser from "@/lib/getCurrentUser";
import { getFolders } from "@/utils/api/folderRequest";
import { getLink } from "@/utils/api/linkRequest";

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
  const userId = userProfile.id;
  const folderId = Number(params.slug);

  const [folders, links] = await Promise.all([
    getFolders(userId),
    getLink(userId, folderId),
  ]);

  return (
    <>
      <Gnb user={userProfile} />
      <main className={styles.main}>
        <FolderContents links={links} folders={folders} currentTab={folderId} />
      </main>
    </>
  );
};

export default Tab;
