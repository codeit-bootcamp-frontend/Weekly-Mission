import classNames from "classnames/bind";
import Modal from "./Modal";
import styles from "@/styles/ModalEdit.module.css";
import { useRef } from "react";

const cx = classNames.bind(styles);

export default function ModalEdit({ folderName, onClose }) {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log("폴더 이름 변경", inputRef.current?.value);
    onClose(false);
  };

  return (
    <Modal title="폴더 이름 변경" onClose={onClose}>
      <div className={cx("input-content")}>
        <input className={cx("input")} type="text" placeholder={folderName} defaultValue={folderName} ref={inputRef} />
      </div>
      <button className={cx("edit-button")} type="button" onClick={handleSubmit}>
        변경하기
      </button>
    </Modal>
  );
}
