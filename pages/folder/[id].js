import AddLinkBar from "@/components/AddLinkBar";
import Footer from "@/components/Footer";
import Gnb from "@/components/Gnb";
import { useRouter } from "next/router";
import styles from "@/styles/Folder.module.css";
import classNames from "classnames/bind";
import FolderChip from "@/components/FolderChip";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Fab from "@/components/Fab";
import Options from "@/components/Options";
import SelectMenu from "@/components/SelectMenu";

const cx = classNames.bind(styles);

const FOLDERS = [
  { id: 0, name: "전체" },
  { id: "favorites", name: "⭐️ 즐겨찾기" },
  { id: 1, name: "코딩 팁" },
  { id: 2, name: "채용 사이트" },
  { id: 3, name: "유용한 글" },
  { id: 4, name: "나만의 장소" },
];

const DEFAULT_FOLDER_NAME = "전체";

export default function Folder() {
  const [selectedFolder, setSelectedFolder] = useState(0);
  const [folderName, setFolderName] = useState(DEFAULT_FOLDER_NAME);
  const router = useRouter();

  return (
    <>
      <Gnb />
      <div className={cx("addlink-bar-container")}>
        <AddLinkBar />
      </div>
      <SearchBar />
      <div className={cx("folder-chips-container")}>
        {FOLDERS.map((folder) => {
          const handleClick = () => {
            router.push(`/folder/${folder.id}`);
            setFolderName(folder.name);
          };

          return (
            <div onClick={handleClick}>
              <FolderChip
                onSelect={setSelectedFolder}
                selectedFolder={selectedFolder}
                folder={folder}
                key={folder.id}
              ></FolderChip>
            </div>
          );
        })}
      </div>
      <Fab />
      <div className={cx("folder-name")}>{folderName}</div>
      <Options />
      <SelectMenu />
      <div className={cx("none-message")}>저장된 링크가 없습니다</div>
      <Footer />
    </>
  );
}
