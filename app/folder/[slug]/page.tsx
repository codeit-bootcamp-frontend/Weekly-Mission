/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from "next/dynamic";

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

const Tab = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const currentTab =
    params.slug === undefined
      ? 0
      : params.slug === "favorites"
      ? 1
      : Number(params.slug);
  return (
    <main className={styles.main}>
      <FolderContents
        links={[]}
        folders={MOCK_FOLDERS}
        currentTab={currentTab}
      />
    </main>
  );
};

export default Tab;
