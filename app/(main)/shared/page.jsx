import classNames from "classnames/bind";

import Card from "@/components/Card/Card";
import FolderInfo from "@/components/FolderInfo";
import SearchBar from "@/components/SearchBar";
import { getFolder, getLink, getUser } from "@/utils/axiosAPI";

import styles from "./page.module.scss";

const cx = classNames.bind(styles);

export default async function Shared() {
  const sharedUserID = 1; // 쿼리로 받기
  const folderID = 12; // 쿼리로 받기
  const sharedUser = await getUser(sharedUserID);
  const folder = (await getFolder(sharedUserID, folderID))[0];
  const links = await getLink(sharedUserID, folderID);

  return (
    <>
      <FolderInfo folder={folder} owner={sharedUser} />
      <main>
        <section className={cx("searchBarContainer")}>
          <SearchBar />
        </section>
        <section className={cx("cardContainer")}>
          {links.map((link) => (
            <Card key={link.id} link={link} isOwn={false} />
          ))}
        </section>
      </main>
    </>
  );
}
