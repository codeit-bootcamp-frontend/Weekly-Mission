import Image from "next/image";
import classNames from "classnames/bind";
import styles from "@/styles/SearchBar.module.css";

const cx = classNames.bind(styles);

function SearchBar({ placeholder = "원하는 정보를 검색해 보세요" }) {
  return (
    <div className={cx("input-container")}>
      <Image src="/images/search.svg" alt="검색 아이콘" width={16} height={16} />
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default SearchBar;
