"use client";

import React, { Suspense, useRef } from "react";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";
import { useSession } from "next-auth/react";
import Loader from "@/app/components/Loader/Loader";
import useIsVisible from "@/app/hooks/useIsVisible";
import AddLink from "./AddLink/AddLink";
import SearchBar from "@/app/components/SearchBar/SearchBar";
import MainContent from "./MainContent/MainContent";

const Page = ({ params }: { params: { id?: string[] } }) => {
  const { data: session, status } = useSession({
    required: true,
  });
  const heroRef = useRef<HTMLDivElement>(null);
  const dummyRef = useRef(null);
  const isHeroVisible = useIsVisible(dummyRef);
  if (params.id && params.id.length > 1) {
    notFound();
  }

  if (status === "loading") {
    return <Loader />;
  }
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
          <Suspense fallback={<Loader />}>
            <MainContent
              userId={session.user.id!}
              folderId={params.id ? +params.id[0] : 0}
            />
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default Page;
