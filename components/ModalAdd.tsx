import { useState } from "react";
import classNames from "classnames/bind";
import Modal from "./Modal";
import styles from "@/styles/ModalAdd.module.css";
import SelectFolders from "./SelectFolders";
import { MOCK_FOLDERS } from "@/data/mock";

interface Props {
  link: string;
  onClose: (isOpen: boolean) => void;
}

const cx = classNames.bind(styles);

export default function ModalAdd({ link, onClose }: Props) {
  const [folders, setFolders] = useState(MOCK_FOLDERS);

  const handleChange = (folderNum: number) => {
    const foldersCopy = JSON.parse(JSON.stringify(folders));
    foldersCopy[folderNum]["selected"] = !foldersCopy[folderNum]["selected"];
    setFolders(foldersCopy);
  };

  const handleSubmit = () => {
    console.log("폴더에 추가", folders);
    onClose(false);
  };

  return (
    <Modal title="폴더에 추가" onClose={onClose}>
      <p className={cx("link-title")}>{link}</p>
      <SelectFolders folders={folders} onClick={handleChange} />
      <button className={cx("add-button")} type="button" onClick={() => handleSubmit()}>
        추가하기
      </button>
    </Modal>
  );
}
