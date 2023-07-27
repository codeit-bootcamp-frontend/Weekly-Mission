import styles from "@/components/Star.module.css";
import classNames from "classnames/bind";

export default function Star({ isClicked = false }) {
  const cx = classNames.bind(styles);

  return (
    <>
      {isClicked ? (
        <img className={cx("star")} src="/images/star-selected.svg" />
      ) : (
        <img className={cx("star")} src="/images/star-default.svg" />
      )}
    </>
  );
}
