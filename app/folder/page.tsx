import React from "react";

import FolderContents from "@/components/FolderContents/FolderContents";
import Footer from "@/components/Footer/Footer";
import Gnb from "@/components/Gnb/Gnb";
import getFolderData from "@/lib/getFolderData";
import getUserData from "@/lib/getUserData";

import styles from "./page.module.css";

const Folder = async () => {
  const user = await getUserData();
  const userFolder = await getFolderData();
  return (
    <>
      <Gnb user={user} />
      <main className={styles.main}>
        <FolderContents links={userFolder.links} />
      </main>
      <Footer />
    </>
  );
};

export default Folder;
