/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from "next/dynamic";

import {
  getFoldersQueryFn,
  getLinksQueryFn,
} from "@/lib/tanstack/queryFns/foldersQueryFns";

import styles from "./page.module.scss";

const FolderContents = dynamic(
  () => import("@/components/FolderContents/FolderContents"),
  { ssr: false }
);

interface IFolderProps {
  params: {
    userId?: number;
  };
}

export const revalidate = 3600;
const Folder = async ({ params }: IFolderProps) => {
  const userId = params.userId as number;

  const [folders, links] = await Promise.all([
    getFoldersQueryFn(userId),
    getLinksQueryFn(userId),
  ]);

  return (
    <>
      <main className={styles.main}>
        <FolderContents
          folders={folders}
          links={links}
          currentTab={0}
          // currentTab={params.userId}
        />
      </main>
    </>
  );
};

export default Folder;
