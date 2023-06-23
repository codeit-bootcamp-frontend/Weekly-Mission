import dynamic from "next/dynamic";
import Image from "next/image";
import { notFound } from "next/navigation";

import SearchBar from "@/components/SearchBar/SearchBar";
import { getFolder } from "@/utils/axios/folderRequest";
import { getLink } from "@/utils/axios/linkRequest";
import { getUser } from "@/utils/axios/userRequest";

import styles from "./page.module.scss";

const LinkField = dynamic(() => import("@/components/LinkField/LinkField"), {
  ssr: false,
});

interface ISharedProps {
  searchParams: {
    [key: string]: number;
  };
}

const Shared = async ({ searchParams }: ISharedProps) => {
  const { user: sharedUserId, folder: folderId } = searchParams;
  if (!sharedUserId || !folderId) {
    notFound();
  }

  const [sharedUserProfile, sharedUserFolderName, sharedUserLinks] =
    await Promise.all([
      getUser(sharedUserId),
      getFolder(sharedUserId, folderId),
      getLink(sharedUserId, folderId),
    ]);

  if (!sharedUserProfile || !sharedUserFolderName) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className={`${styles.hero} ${styles.inner}`}>
        <div className={styles.codeitAvatar}>
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1199px) 100vw, 100vw"
            src={sharedUserProfile.image_source}
            alt="Owner Avatar"
            className={styles.image}
          />
        </div>
        <span className={styles.atsign}>@{sharedUserProfile.name}</span>
        <span className={styles.marks}>{sharedUserFolderName.name}</span>
      </div>

      <div className={styles.contents}>
        <SearchBar placeholder="원하는 링크를 검색해 보세요" />
        <LinkField links={sharedUserLinks} />
      </div>
    </main>
  );
};

export default Shared;
