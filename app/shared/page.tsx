import Card from "@/components/Card";
import getUserData from "@/api/getUserData";
import GNB from "@/components/GNB";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import classNames from "classnames/bind";
import styles from "./page.module.css";
import Image from "next/image";
import getLinks from "@/api/getLinks";
import getFolders from "@/api/getFolders";
import { notFound } from "next/navigation";

export default async function Shared({ searchParams }) {
  const { user: userId, folder: folderId } = searchParams;

  if (!(userId && folderId) || Number.isNaN(Number(userId)) || Number.isNaN(Number(folderId))) {
    notFound();
  }

  const folder = await getFolders(userId, folderId);
  const userData = await getUserData(userId);
  const links = await getLinks(userId, folderId);

  if (folder.length === 0) {
    notFound();
  }

  const { name: folderName } = folder[0];
  const { name: userName, email, image_source } = userData[0];

  const cx = classNames.bind(styles);

  return (
    <>
      <GNB userEmail={email} userProfileImageSorce={image_source} />
      <header className={cx("header")}>
        <div className={cx("user-content")}>
          <Image className={cx("user-avatar")} src={image_source} alt="avatar" width={60} height={60} />
          <p className={cx("user-nickname")}>@{userName}</p>
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
