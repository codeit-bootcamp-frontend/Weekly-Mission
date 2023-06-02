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
  // TODO: 여기서 data fetching 해와서 FolderContents에 prop으로 넘겨주기
  // TODO: FolderContents에 넘겨줄 prop : 현재 탭(파일 데이터), 탭 리스트(파일 목록)
  // TODO: 지금은 일단 getFolderData가 전체 데이터라고 생각하고, 다른 페이지에서는 이 함수를 사용하지 않는 걸로 빈 화면 UI 구현하기
  // TODO: 모든 페이지에서 아래 구조를 똑같이 가져가되, FolderContents의 prop만 바뀌는 걸로 일단 UI 구현하기
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
