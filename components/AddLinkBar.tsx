"use client";

import { useEffect, useState } from "react";
import styles from "@/components/AddLinkBar.module.css";

const AddLinkBar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 126) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <div className={styles["input-box"]}>
      <div
        className={
          scroll ? [styles.bottom, styles["input-box"]].join(" ") : styles.hide
        }
      >
        <form className={styles.form}>
          <input placeholder="링크를 추가해 주세요" />
          <button type="submit">추가하기</button>
        </form>
      </div>
    </div>
  );
};

export default AddLinkBar;
