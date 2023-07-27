import { AddLinkButton } from "@/components/Button";
import styles from "@/components/IntroduceBoard.module.css";
import classNames from "classnames/bind";

export default function IntroduceBoard() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("introduce-board")}>
      <div className={cx("title")}>
        <span className={cx("gradient")}>세상의 모든 정보</span>를<br />
        <span className={cx("line-change")}>쉽게 저장하고</span> 관리해 보세요
      </div>
      <AddLinkButton />
      <img
        className={cx("board-image")}
        src="/images/image1.png"
        alt="대표 이미지"
      />
    </div>
  );
}
