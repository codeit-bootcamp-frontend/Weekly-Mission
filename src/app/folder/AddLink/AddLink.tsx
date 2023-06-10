import React from "react";
import Image from "next/image";
import styles from "./AddLink.module.scss";

const AddLink = () => {
  return (
    <form className={styles.addForm} action="/search/links?q=null">
      <div>
        <div>
          <div className={styles.linkIconBox}>
            <Image src="/link.svg" alt="link icon" fill sizes="1vw" />
          </div>
          <input
            id="addlink-input"
            type="text"
            name="q"
            placeholder="링크를 추가해 보세요"
          />
        </div>
        <button type="submit" className={styles.addButton}>
          추가하기
        </button>
      </div>
    </form>
  );
};

export default AddLink;
