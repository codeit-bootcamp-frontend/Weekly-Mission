import getUserData from "@/api/getUserData";
import AddLinkBar from "@/components/AddLinkBar";
import GNB from "@/components/GNB";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import FolderChip from "@/components/FolderChip";
import FAB from "@/components/FAB";
import getFolders from "@/api/getFolders";
import Footer from "@/components/Footer";

const cx = classNames.bind(styles);

export default async function Folder() {
  const userData = await getUserData();
  const { id: userId, name: userName, email, profileImageSource } = userData.data;
  const folders = await getFolders(userId);

  return (
    <>
      <GNB userEmail={email} userProfileImageSorce={profileImageSource} />
      <header className={cx("header")}>
        <AddLinkBar />
      </header>
      <FolderChip active>전체</FolderChip>
      {folders.map((folder) => (
        <FolderChip key={folder.id} id={folder.id}>
          {folder.name}
        </FolderChip>
      ))}
      <FAB />
      <Footer />
    </>
  );
}
