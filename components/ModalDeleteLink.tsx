import classNames from "classnames/bind";
import Modal from "./Modal";
import styles from "@/styles/ModalDeleteLink.module.css";

interface Props {
  link: string;
  onClose: (isOpen: boolean) => void;
}

const cx = classNames.bind(styles);

export default function ModalDeleteLink({ link, onClose }: Props) {
  return (
    <Modal title="링크 삭제" onClose={onClose}>
      <p className={cx("link-title")}>{link}</p>
      <button className={cx("delete-button")} type="button" onClick={() => console.log("링크 삭제")}>
        삭제하기
      </button>
    </Modal>
  );
}
