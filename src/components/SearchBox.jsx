import styles from "@components/SearchBox.module.css";
import lens from "@assets/img/search.png";

export default function SearchBox() {
  return (
    <form className={styles.searchBox}>
      <img className={styles.lens} src={lens} alt="lens" />
      <input
        type="text"
        className={styles.search}
        name="search"
        placeholder="원하는 링크를 검색해 보세요"
      />
    </form>
  );
}
