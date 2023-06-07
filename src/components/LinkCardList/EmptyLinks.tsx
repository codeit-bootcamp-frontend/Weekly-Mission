import React from "react";
import styles from "./EmptyLinks.module.scss";

const EmptyLinks = () => {
  return (
    <div className={styles.container}>
      <p>저장된 링크가 없습니다</p>
    </div>
  );
};

export default EmptyLinks;
