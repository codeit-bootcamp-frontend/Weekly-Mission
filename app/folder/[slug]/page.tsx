import { notFound } from "next/navigation";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FolderContents from "@/components/FolderContents/FolderContents";
import Gnb from "@/components/Gnb/Gnb";
import { getFolders } from "@/lib/axios/folderRequest";
import { getLinks } from "@/lib/axios/linkRequest";
import { getUser } from "@/lib/axios/userRequest";
import { tempUserDatas } from "@/utils/constants";
import prisma from "@/utils/prismadb";
import { getServerSession } from "next-auth";

import styles from "./page.module.scss";

export const revalidate = 1000;
const Tab = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const session = await getServerSession(authOptions);

  let userProfile;
  let userId;

  if (!session?.user?.email) {
    userProfile = null;
  } else {
    const currentUser = await prisma?.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    if (!currentUser) {
      userProfile = null;
    } else {
      userId = tempUserDatas[currentUser.id];
      userProfile = await getUser(userId);
    }
  }

  if (!userProfile) {
    throw new Error(`Failed to fetch user data`);
  }

  userId = userProfile.id;

  // const userId = 11;
  // const userProfile = await getUser(userId);

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
