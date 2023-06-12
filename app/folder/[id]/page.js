import getUserData from "@/api/getUserData";
import getFolders from "@/api/getFolders";
import getLinks from "@/api/getLinks";
import AddLinkBar from "@/components/AddLinkBar";
import SearchBar from "@/components/SearchBar";
import FolderChip from "@/components/FolderChip";
import FAB from "@/components/FAB";
import Option from "@/components/Option";
import Card from "@/components/Card";
import styles from "./page.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default async function FolderID({ params }) {
  const { id: folderId } = params;

  const userData = await getUserData();
  const { id: userId, name: userName, email, profileImageSource } = userData.data;
  const folders = await getFolders(userId);

  const links = await getLinks(userId, folderId);

  return (
    <>
      <header className={cx("header")}>
        <AddLinkBar />
      </header>
      <main className={cx("main")}>
        <SearchBar placeholder="원하는 링크를 검색해 보세요" />
        <div className={cx("folder-container")}>
          <div className={cx("folder-tab")}>
            <div className={cx("folderchip-container")}>
              <FolderChip>전체</FolderChip>
              {folders.map((folder) => (
                <FolderChip key={folder.id} id={folder.id} active={folder.id === Number(folderId)}>
                  {folder.name}
                </FolderChip>
              ))}
            </div>
            <FAB />
          </div>
          <div className={cx("folder-header")}>
            <h1 className={cx("folder-title")}>전체</h1>
            <Option />
          </div>
          {links.length === 0 ? (
            <p className={cx("no-link-content")}>저장된 링크가 없습니다</p>
          ) : (
            <div className={cx("card-list")}>
              {links.map((linkData) => (
                <Card key={linkData.id} data={linkData} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
