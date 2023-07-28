import styles from "@/components/Modal.module.css";
import classNames from "classnames/bind";
import { ModalDeleteButton } from "@/components/Button";

const cx = classNames.bind(styles);

export function ModalDeleteFolder() {
  return (
    <div className={cx("modal")}>
      <img className={cx("close-icon")} src="/images/close.svg" />
      <div className={cx("modal-name")}>폴더 삭제</div>
      <div className={cx("small-name")}>폴더명</div>
      <ModalDeleteButton />
    </div>
  );
}

export function ModalDeleteLink() {
  return (
    <div className={cx("modal")}>
      <img className={cx("close-icon")} src="/images/close.svg" />
      <div className={cx("modal-name")}>링크 삭제</div>
      <div className={cx("small-name")}>http://www.abc.com</div>
      <ModalDeleteButton />
    </div>
  );
}
