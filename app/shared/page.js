import Card from "@/components/Card";
import getFolderData from "@/api/getFolderData";
import getUserData from "@/api/getUserData";
import GNB from "@/components/GNB";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import classNames from "classnames/bind";
import styles from "./page.module.css";
import Image from "next/image";

export default async function Shared({ searchParams }) {
  console.log("searchParams:", searchParams);
  const folderData = await getFolderData();
  const userData = await getUserData();

  const { id: folderId, name: folderName, owner, links } = folderData.folder;
  const { id: userId, name: userName, email, profileImageSource } = userData;

  const cx = classNames.bind(styles);

  return (
    <>
      <GNB userEmail={email} userProfileImageSorce={profileImageSource} />
      <header className={cx("header")}>
        <div className={cx("user-content")}>
          <Image className={cx("user-avatar")} src={owner.profileImageSource} alt="avatar" width={60} height={60} />
          <p className={cx("user-nickname")}>@{owner.name}</p>
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
