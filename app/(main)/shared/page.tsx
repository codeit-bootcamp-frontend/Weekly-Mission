import classNames from "classnames/bind";
import { notFound } from "next/navigation";

import Card from "@/components/Card/Card";
import FolderInfo from "@/components/FolderInfo";
import SearchBar from "@/components/SearchBar";
import { getFolder, getLinks, getUser } from "@/utils/api";
import convertParamToNum from "@/utils/validateParam";

import styles from "./page.module.scss";

const cx = classNames.bind(styles);

export const metadata = {
  title: "Linkbrary : Shared",
};

export default async function Shared({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { user: strUserParam, folder: strFolderParam } = searchParams;
  const sharedUserID = convertParamToNum(strUserParam);
  const folderID = convertParamToNum(strFolderParam);
  if (!sharedUserID || !folderID) notFound();

  const [sharedUser, folder, links] = await Promise.all([
    getUser(sharedUserID),
    getFolder(sharedUserID, folderID),
    getLinks(sharedUserID, folderID),
  ]);

  return (
    <>
      <FolderInfo folder={folder} owner={sharedUser} />
      <main>
        <section className={cx("searchBarContainer")}>
          <SearchBar />
        </section>
        {links.length === 0 && (
          <div className={cx("notExistLink")}>저장된 링크가 없습니다.</div>
        )}
        <section className={cx("cardContainer")}>
          {links.map((link) => (
            <Card key={link.id} link={link} isNotOwn={true} />
          ))}
        </section>
      </main>
    </>
  );
}
