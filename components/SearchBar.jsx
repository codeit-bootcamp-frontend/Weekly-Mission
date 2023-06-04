import styles from "@components/SearchBar.module.css";

const SearchBar = () => {
  return (
    <input placeholder="원하는 링크를 입력하세요" className={styles.input} />
  );
};

export default SearchBar;
