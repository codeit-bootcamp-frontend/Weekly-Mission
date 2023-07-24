import styles from "@/styles/SelectFolder.module.css";
import classNames from "classnames/bind";
import Image from "next/image";

interface FolderProps {
  name: string;
  n_of_links: number;
  selected: boolean;
}

interface FolderItemProps {
  folderData: FolderProps;
  folderNumber: number;
  onClick: (folderNumber: number) => void;
}

interface FoldersProps {
  folders: FolderProps[];
  onClick: (folderNumber: number) => void;
}

const cx = classNames.bind(styles);

function FolderItem({ folderData, folderNumber, onClick }: FolderItemProps) {
  return (
    <li className={cx("folder-list-item", { selected: folderData.selected })}>
      <button type="button" className={cx("folder-list-item-button")} onClick={() => onClick(folderNumber)}>
        <p className={cx("folder-title")}>{folderData.name}</p>
        <p className={cx("number-of-folder")}>{folderData["n_of_links"]}개 링크</p>
        {folderData.selected && <Image className={cx("check")} src="/images/check.svg" alt="선택" width={14} height={14} />}
      </button>
    </li>
  );
}

export default function SelectFolders({ folders, onClick }: FoldersProps) {
  return (
    <ol className={cx("folder-list")}>
      {folders.map((folder, i) => (
        <FolderItem key={folder.name} folderNumber={i} folderData={folder} onClick={onClick} />
      ))}
    </ol>
  );
}
