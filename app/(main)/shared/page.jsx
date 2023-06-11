import classNames from "classnames/bind";

import Card from "@/components/Card/Card";
import FolderInfo from "@/components/FolderInfo";
import SearchBar from "@/components/SearchBar";
import { getFolder } from "@/utils/axiosAPI";

import styles from "./page.module.scss";

const cx = classNames.bind(styles);

export default async function Shared() {
  const folder = await getFolder();
  const { links, ...folderInfo } = folder;

  return (
    <>
      <FolderInfo folder={folderInfo} />
      <main>
        <section className={cx("searchBarContainer")}>
          <SearchBar />
        </section>
        <section className={cx("cardContainer")}>
          {links.map((link) => (
            <Card key={link.id} cardData={link} />
          ))}
        </section>
      </main>
    </>
  );
}
