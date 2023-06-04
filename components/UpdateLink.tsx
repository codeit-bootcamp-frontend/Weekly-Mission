import styles from "@components/UpdateLink.module.css";

const UpdateLink = () => {
  return (
    <div className={styles.container}>
      <p className={styles.selected}>전체</p>
      <p>
        <span>공유</span>
        <span>이름 변경</span>
        <span>삭제</span>
      </p>
    </div>
  );
};

export default UpdateLink;
