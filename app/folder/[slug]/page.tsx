/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from "next/dynamic";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {
  getFoldersQueryFn,
  getLinkQueryFn,
} from "@/lib/tanstack/queryFns/foldersQueryFns";
import { getServerSession } from "next-auth";

import styles from "./page.module.scss";

const FolderContents = dynamic(
  () => import("@/components/FolderContents/FolderContents"),
  { ssr: false }
);

const Tab = async ({ params }: { params: any }) => {
  const session = await getServerSession(authOptions);

  const userId = session?.user.id as number;
  const folderId = Number(params.slug);

  const [folders, links] = await Promise.all([
    getFoldersQueryFn(userId),
    getLinkQueryFn(userId, folderId),
  ]);

  return (
    <main className={styles.main}>
      <FolderContents links={links} folders={folders} currentTab={folderId} />
    </main>
  );
};

export default Tab;
