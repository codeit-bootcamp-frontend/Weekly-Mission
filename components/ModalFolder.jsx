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
      <div className={cx("folder-list")}>
        <div className={cx("folder")}>
          <div className={cx("folder-name")}>코딩팁</div>
          <div className={cx("link-count")}>7개 링크</div>
        </div>
        <div className={cx("folder", "folder-selected")}>
          <div className={cx("folder-name", "folder-name-selected")}>
            나만의 장소
          </div>
          <div className={cx("link-count")}>3개 링크</div>
          <img className={cx("check-icon")} src="/images/check.svg" />
        </div>
      </div>
      <ModalButton>추가하기</ModalButton>
    </div>
  );
}
