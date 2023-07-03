"use client";
import React, { useState, use } from "react";
import styles from "@/styles/folder.module.css";
import CardList from "@/components/CardList/CardList";
import { userId } from "@/utils/common.api";

function FolderPage() {
  return (
    <>
      <div className={styles.cardWrapper}>
        <CardList userId={userId} />
      </div>
    </>
  );
}

export default FolderPage;
