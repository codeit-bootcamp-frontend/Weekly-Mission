import styles from "@components/UpdateLink.module.css";

const UpdateLink = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.selected}>전체</p>
      </div>
      <div className={styles.icons}>
        <div>
          <img src="/share.svg" alt="공유하기" />
          <span>공유</span>
        </div>
        <div>
          <img src="/pen.svg" alt="이름변경" />
          <span>이름 변경</span>
        </div>
        <div>
          <img src="/delete.svg" alt="삭제" />
          <span>삭제</span>
        </div>
      </div>
    </div>
  );
};

export default UpdateLink;
