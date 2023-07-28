import styles from "@/components/Modal.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function ModalShare() {
  return (
    <div className={cx("modal")}>
      <img className={cx("close-icon")} src="/images/close.svg" />
      <div className={cx("modal-name")}>폴더 공유</div>
      <div className={cx("small-name")}>폴더명</div>
      <div className={cx("icons-box")}>
        <div className={cx("icon")}>
          <img
            className={cx("icon-image")}
            src="/images/sns-icons/kakao-notext.svg"
          />
          <div className={cx("icon-name")}>카카오톡</div>
        </div>
        <div className={cx("icon")}>
          <img
            className={cx("icon-image")}
            src="/images/sns-icons/facebook-color.svg"
          />
          <div className={cx("icon-name")}>페이스북</div>
        </div>
        <div className={cx("icon")}>
          <img className={cx("icon-image")} src="/images/link-icon.svg" />
          <div className={cx("icon-name")}>링크 복사</div>
        </div>
      </div>
    </div>
  );
}
