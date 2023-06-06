import getUserData from "@/api/getUserData";
import AddLinkBar from "@/components/AddLinkBar";
import GNB from "@/components/GNB";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import FolderChip from "@/components/FolderChip";

const cx = classNames.bind(styles);

export default async function Folder() {
  const userData = await getUserData();
  const { id: userId, name: userName, email, profileImageSource } = userData.data;

  return (
    <>
      <GNB userEmail={email} userProfileImageSorce={profileImageSource} />
      <header className={cx("header")}>
        <AddLinkBar />
      </header>
      <FolderChip>전체</FolderChip>
    </>
  );
}
