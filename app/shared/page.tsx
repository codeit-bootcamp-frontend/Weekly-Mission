import dynamic from "next/dynamic";
import Image from "next/image";

import SearchBar from "@/components/SearchBar/SearchBar";
import getFolderData from "@/lib/getFolderData";
import { getLinkQueryFn } from "@/lib/tanstack/queryFns/foldersQueryFns";
import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]/route";
import styles from "./page.module.scss";

const CardWrapper = dynamic(() => import("@/components/LinkField/LinkField"), {
  ssr: false,
});

const Shared = async () => {
  const session = await getServerSession(authOptions);

  const userId = session?.user.id as number;
  const folderId = 1;

  // TODO: 이후 요구사항이 자세히 나오면 getFolderData를 다른 api로 대체하기
  const userFolder = await getFolderData();
  const links = await getLinkQueryFn(userId, folderId);

  return (
    <>
      <main className={styles.main}>
        <div className={`${styles.hero} ${styles.inner}`}>
          <div className={styles.codeitAvatar}>
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1199px) 100vw, 100vw"
              src={userFolder.owner.profileImageSource}
              alt="Owner Avatar"
              className={styles.image}
            />
          </div>
          <span className={styles.atsign}>@{userFolder.owner.name}</span>
          <span className={styles.marks}>{userFolder.name}</span>
        </div>

        <div className={styles.contents}>
          <SearchBar placeholder="원하는 링크를 검색해 보세요" />
          <CardWrapper links={links} />
        </div>
      </main>
    </>
  );
};

export default Shared;
