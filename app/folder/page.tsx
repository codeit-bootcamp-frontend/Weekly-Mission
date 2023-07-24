import { getUser } from "@/api/request/request-user";
import { getAllFolders } from "@/api/request/request-folder";
import GNB from "@/components/GNB";
import AddLinkBar from "@/components/AddLinkBar";
import SearchBar from "@/components/SearchBar";
import FolderChip from "@/components/FolderChip";
import FAB from "@/components/FAB";
import Option from "@/components/Option";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import { getLinks } from "@/api/request/request-link";
import getUserId from "@/data/getUserId";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("@/components/Card"), { ssr: false });

const cx = classNames.bind(styles);

export default async function Folder() {
  const userId = getUserId();

  const userData = await getUser(userId);
  const folders = await getAllFolders(userId);
  const links = await getLinks(userId);

  const { email, image_source } = userData[0];

  console.log("folders:", folders);

  return (
    <>
      <GNB userEmail={email} userProfileImageSorce={image_source} />
      <header className={cx("header")}>
        <AddLinkBar />
      </header>
      <main className={cx("main")}>
        <SearchBar placeholder="원하는 링크를 검색해 보세요" />
        <div className={cx("folder-container")}>
          <div className={cx("folder-tab")}>
            <div className={cx("folderchip-container")}>
              <FolderChip active>전체</FolderChip>
              {folders?.map((folder) => (
                <FolderChip key={folder.id} id={folder.id}>
                  {folder.name}
                </FolderChip>
              ))}
            </div>
            <FAB />
          </div>
          <div className={cx("folder-header")}>
            <h1 className={cx("folder-title")}>전체</h1>
            <Option folderName="전체" />
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
      <Footer />
    </>
  );
}
