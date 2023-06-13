import classNames from "classnames/bind";
import Modal from "./Modal";
import styles from "@/styles/ModalAdd.module.css";

const cx = classNames.bind(styles);

export default function ModalAdd({ link = "https://www.abc.com", onClose }) {
  return (
    <Modal title="폴더에 추가" onClose={onClose}>
      <p className={cx("link-title")}>{link}</p>
      <button className={cx("add-button")} type="button" onClick={() => console.log("링크 삭제")}>
        추가하기
      </button>
    </Modal>
  );
}
