import getUserData from "@/api/getUserData";
import getFolders from "@/api/getFolders";
import AddLinkBar from "@/components/AddLinkBar";
import FolderChip from "@/components/FolderChip";
import styles from "./page.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default async function FolderID({ params }) {
  const userData = await getUserData();
  const { id: userId, name: userName, email, profileImageSource } = userData.data;
  const folders = await getFolders(userId);

  const { id } = params;

  return (
    <>
      <header className={cx("header")}>
        <AddLinkBar />
      </header>
      <FolderChip>전체</FolderChip>
      {folders.map((folder) => (
        <FolderChip key={folder.id} id={folder.id} active={folder.id === Number(id)}>
          {folder.name}
        </FolderChip>
      ))}
    </>
  );
}
