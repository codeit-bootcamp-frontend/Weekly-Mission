import Folder from "@/components/Folder/Folder";
import styles from "./page.module.css";
import { getFolderList } from "@/api/instance";
import FolderList from "@/components/FolderList/FolderList";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const USERID = "1";

export default async function Page({ params }) {
  const folderList = await getFolderList(USERID);

  return (
    <div className={cx("wrapper")}>
      <FolderList folderList={folderList} params={params} />
    </div>
  );
}
