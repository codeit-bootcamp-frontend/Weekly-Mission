import styles from "./SearchBar.module.css";
import Image from "next/image";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SearchBar() {
  return (
    <div className={cx("search-bar")}>
      <Image
        src="/assets/search.png"
        alt="search"
        width={12}
        height={12}
        className={cx("search-icon")}
      />
      <input type="text" placeholder="원하는 링크를 검색해 보세요" />
    </div>
  );
}

export default SearchBar;
