import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./SearchBar.module.scss";

import searchIcon from "@/public/images/search.png";

const cx = classNames.bind(styles);

export default function SearchBar() {
  return (
    <div className={cx("container")}>
      <Image width={16} height={16} src={searchIcon} alt="검색 아이콘" />
      <input
        className={cx("searchInput")}
        placeholder="원하는 링크를 검색해 보세요"
      />
    </div>
  );
}
