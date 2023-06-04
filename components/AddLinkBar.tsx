import styles from "@components/AddLinkBar.module.css";

const AddLinkBar = () => {
  return (
    <div className={styles["input-box"]}>
      <form className={styles.form}>
        <input placeholder="링크를 추가해 주세요" />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
};

export default AddLinkBar;
