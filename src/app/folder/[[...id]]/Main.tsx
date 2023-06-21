"use client";

import React, { ReactNode, useRef } from "react";
import styles from "./Main.module.scss";
import useIsVisible from "@/app/hooks/useIsVisible";
import AddLink from "./AddLink/AddLink";
import SearchBar from "@/app/components/SearchBar/SearchBar";

const Main = ({ children }: { children: ReactNode }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const dummyRef = useRef(null);
  const isHeroVisible = useIsVisible(dummyRef);

  return (
    <main
      className={
        isHeroVisible
          ? styles.mainContainer
          : `${styles.mainContainer} ${styles.floating}`
      }
    >
      <section
        className={
          isHeroVisible
            ? styles.heroSection
            : `${styles.heroSection} ${styles.floating}`
        }
        ref={heroRef}
      >
        <div className={styles.addLinkContainer}>
          <AddLink />
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.thresholdTarget} ref={dummyRef} />
        <div className={styles.contentsContainer}>
          <div className={styles.searchBarContainer}>
            <SearchBar
              placeholder="제목을 검색해 보세요"
              action="/search?q=null"
            />
          </div>
          {children}
        </div>
      </section>
    </main>
  );
};

export default Main;
