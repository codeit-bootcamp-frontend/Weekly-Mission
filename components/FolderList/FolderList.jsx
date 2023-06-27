// "use client";

import Folder from "@/components/Folder/Folder";
import styles from "./FolderList.module.css";
import classNames from "classnames/bind";
import AddFolder from "@/components/AddFolder/AddFolder";

const cx = classNames.bind(styles);

export default function FolderList({ currentIdParam, folderList }) { //links 추가
  // const [folderData, setFolderData] = useState(folderList);
  // all-link state 추가

  // const updateFolderState = (data) => {
  //   const copy = JSON.parse(JSON.stringify(folderData));
  //   copy.push(data);
  //   setFolderData(copy);
  // };

  return (
    <>
      <ul className={cx("folder-list")}>
        <li className={cx("folder")}>
          <Folder name={"전체"} href={`/folder`} selected={!currentIdParam} />
        </li>
        {folderList.map((folder) => (
          <li key={folder._id} className={cx("folder")}>
            <Folder
              name={folder.name}
              href={`/folder/${folder._id}`}
              selected={folder._id === currentIdParam}
            />
          </li>
        ))}
      </ul>
      <AddFolder />
    </>
  );
}
