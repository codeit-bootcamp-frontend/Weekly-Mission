import getFolderData from "@/api/getFolderData";
import getUserData from "@/api/getUserData";
import getFolders from "@/api/getFolders";
import GNB from "@/components/GNB";
import AddLinkBar from "@/components/AddLinkBar";
import SearchBar from "@/components/SearchBar";
import FolderChip from "@/components/FolderChip";
import FAB from "@/components/FAB";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import getLinks from "@/api/getLinks";

const cx = classNames.bind(styles);

export default async function Folder() {
  const userData = await getUserData();
  const { id: userId, name: userName, email, profileImageSource } = userData.data;
  const folders = await getFolders(userId);
  const links = await getLinks(userId);

  return (
    <>
      <GNB userEmail={email} userProfileImageSorce={profileImageSource} />
      <header className={cx("header")}>
        <AddLinkBar />
      </header>
      <main className={cx("main")}>
        <SearchBar placeholder="원하는 링크를 검색해 보세요" />
        <FolderChip active>전체</FolderChip>
        {folders.map((folder) => (
          <FolderChip key={folder.id} id={folder.id}>
            {folder.name}
          </FolderChip>
        ))}
        <FAB />
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
