import React from "react";
import FolderInfo from "../components/FolderInfo";
import SearchBar from "../components/SearchBar";
import styles from "./SharedPage.module.css";
import Card from "../components/Card";

function SharedPage() {
  return (
    <>
      <FolderInfo />
      <main>
        <section className={styles.searchBarContainer}>
          <SearchBar />
        </section>
        <section className={styles.cardContainer}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  );
}

export default SharedPage;
