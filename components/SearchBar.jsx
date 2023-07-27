import styles from "@/components/SearchBar.module.css";
import classNames from "classnames/bind";

export default function SearchBar() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("search-bar")}>
      <input
        className={cx("search-input")}
        type="text"
        placeholder="원하는 링크를 검색해 보세요"
      />
      <img className={cx("search-icon")} src="/images/search-icon.png" />
    </div>
  );
}
