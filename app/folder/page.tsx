/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from "next/dynamic";

import getFolderData from "lib/getFolderData";

import styles from "./page.module.scss";

const FolderContents = dynamic(
  () => import("@/components/Modals/FolderContents/FolderContents"),
  { ssr: false }
);

const MOCK_FOLDERS: { id: number; name: string }[] = [
  { id: 0, name: "전체" },
  { id: 1, name: "⭐️ 즐겨찾기" },
  { id: 2, name: "코딩 팁" },
  { id: 3, name: "채용 사이트" },
  { id: 4, name: "유용한 글" },
  { id: 5, name: "나만의 장소" },
];

const Folder = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  // TODO: data fetching으로 변경하면 지우고 prop으로 받아온 데이터 넘겨주기
  // TODO: FolderContents에 넘겨줄 prop : 탭 리스트(파일 목록), 현재 탭(파일 안 링크 데이터)
  // TODO: 지금은 일단 getFolderData가 전체 데이터라고 생각하고, 다른 페이지에서는 이 함수를 사용하지 않는 걸로 UI 구현하기
  const userFolder = await getFolderData();

  const currentTab =
    params.slug === undefined
      ? 0
      : params.slug === "favorites"
      ? 1
      : Number(params.slug);
  return (
    <>
      <main className={styles.main}>
        <FolderContents
          links={userFolder.links}
          folders={MOCK_FOLDERS}
          currentTab={currentTab}
        />
      </main>
    </>
  );
};

export default Folder;
