import FolderContents from "@/components/FolderContents/FolderContents";
import Gnb from "@/components/Gnb/Gnb";
import { getFolders } from "@/lib/axios/folderRequest";
import { getLinks } from "@/lib/axios/linkRequest";
import { getUser } from "@/lib/axios/userRequest";
import { tempUserDatas } from "@/utils/constants";
import prisma from "@/utils/prismadb";
import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]/route";
import styles from "./page.module.scss";

export const revalidate = 1000;
const Folder = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  const currentUser = await prisma?.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    return null;
  }

  const userId = tempUserDatas[currentUser.id];
  const userProfile = await getUser(userId);

  if (!userProfile) {
    throw new Error(`Failed to fetch user data`);
  }

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
