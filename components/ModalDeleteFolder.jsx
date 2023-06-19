import classNames from "classnames/bind";
import Modal from "./Modal";
import styles from "@/styles/ModalDeleteFolder.module.css";

const cx = classNames.bind(styles);

export default function ModalDeleteFolder({ folderName, onClose }) {
  const handleDeleteFolder = () => {
    console.log(`${folderName} 폴더 삭제`);
    onClose(false);
  };

  return (
    <Modal title="폴더 삭제" onClose={onClose}>
      <p className={cx("folder-title")}>{folderName}</p>
      <button className={cx("delete-button")} type="button" onClick={handleDeleteFolder}>
        삭제하기
      </button>
    </Modal>
  );
}
