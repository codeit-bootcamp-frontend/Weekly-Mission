import styles from "@/components/SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="원하는 링크를 검색해 보세요"
      />
      <img className={styles.searchIcon} src="/images/search-icon.png" />
    </div>
  );
}
