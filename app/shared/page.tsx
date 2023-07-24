import GNB from "@/components/GNB";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import classNames from "classnames/bind";
import styles from "./page.module.css";
import Image from "next/image";
import getUserId from "@/data/getUserId";
import getUserData from "@/api/getUserData";
import getFolders from "@/api/getFolders";
import getLinks from "@/api/getLinks";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("@/components/Card"), { ssr: false });

const cx = classNames.bind(styles);

export default async function Shared({ searchParams }) {
  const { user: sharedUserId, folder: sharedFolderId } = searchParams;

  if (!(sharedUserId && sharedFolderId) || Number.isNaN(Number(sharedUserId)) || Number.isNaN(Number(sharedFolderId))) {
    notFound();
  }

  const userId = getUserId();
  const folder = await getFolders(sharedUserId, sharedFolderId);
  const sharedUserData = await getUserData(sharedUserId);
  const userData = await getUserData(userId);
  const links = await getLinks(sharedUserId, sharedFolderId);

  if (folder.length === 0) {
    notFound();
  }

  const { name: folderName } = folder[0];
  const { name: sharedUserName, image_source: sharedUserProfileImageSource } = sharedUserData[0];
  const { email, image_source: userProfileImageSorce } = userData[0];

  return (
    <>
      <GNB userEmail={email} userProfileImageSorce={userProfileImageSorce} />
      <header className={cx("header")}>
        <div className={cx("shared-user-content")}>
          <Image className={cx("shared-user-avatar")} src={sharedUserProfileImageSource} alt="avatar" width={60} height={60} />
          <p className={cx("shared-user-nickname")}>@{sharedUserName}</p>
        </div>
        <h1 className={cx("header-title")}>{folderName}</h1>
      </header>
      <main className={cx("main")}>
        <SearchBar placeholder="원하는 링크를 검색해 보세요" />
        <div className={cx("card-list")}>
          {links.map((linkData) => (
            <Card key={linkData.id} data={linkData} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
