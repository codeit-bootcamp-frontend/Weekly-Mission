import React from "react";

import AddLink from "@/components/AddLink/addLink";

import styles from "./page.module.css";

const Folder = () => {
  return (
    <main className={styles.main}>
      <AddLink />
      <div className={styles.inner}></div>
    </main>
  );
};

export default Folder;
