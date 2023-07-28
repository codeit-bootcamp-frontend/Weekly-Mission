import styles from "@/components/Modal.module.css";
import classNames from "classnames/bind";
import { ModalButton } from "@/components/Button";

const cx = classNames.bind(styles);

export function ModalEditFolder() {
  return (
    <div className={cx("modal")}>
      <img className={cx("close-icon")} src="/images/close.svg" />
      <div className={cx("modal-name")}>폴더 이름 변경</div>
      <input
        className={cx("modal-input")}
        type="text"
        placeholder="내용 입력"
      />
      <ModalButton>변경하기</ModalButton>
    </div>
  );
}

export function ModalAddFolder() {
  return (
    <div className={cx("modal")}>
      <img className={cx("close-icon")} src="/images/close.svg" />
      <div className={cx("modal-name")}>폴더 추가</div>
      <input
        className={cx("modal-input")}
        type="text"
        placeholder="내용 입력"
      />
      <ModalButton>추가하기</ModalButton>
    </div>
  );
}

export function ModalAddToFolder() {
  return (
    <div className={cx("modal")}>
      <img className={cx("close-icon")} src="/images/close.svg" />
      <div className={cx("modal-name")}>폴더에 추가</div>
      <div className={cx("small-name")}>http://www.abc.com</div>
      <ModalButton>추가하기</ModalButton>
    </div>
  );
}
