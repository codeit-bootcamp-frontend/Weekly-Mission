import classNames from "classnames/bind";
import Modal from "./Modal";
import styles from "@/styles/ModalDeleteLink.module.css";

const cx = classNames.bind(styles);

export default function ModalDeleteLink({ link = "https://www.abc.com", onClose }) {
  return (
    <Modal title="링크 삭제" onClose={onClose}>
      <p className={cx("link-title")}>{link}</p>
      <button className={cx("delete-button")} type="button">
        삭제하기
      </button>
    </Modal>
  );
}
