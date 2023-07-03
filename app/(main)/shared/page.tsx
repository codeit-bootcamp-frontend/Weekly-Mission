import classNames from "classnames/bind";
import { redirect } from "next/navigation";

import { META_SHARED } from "@/app/_meta";
import Card from "@/components/Card/Card";
import OtherCardMenu from "@/components/Card/OtherCardMenu";
import FolderInfo from "@/components/FolderInfo";
import SearchBar from "@/components/SearchBar";
import { getFolder, getFolders, getLinks, getUser } from "@/utils/api";
import { SelectedFolder } from "@/utils/api/types";
import checkFolderOperationValid from "@/utils/checkFolderOperationValid";
import convertParamToStr from "@/utils/convertParamToStr";

import styles from "./page.module.scss";

const cx = classNames.bind(styles);

export const metadata = META_SHARED;

export default async function Shared({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const sharedUserId = convertParamToStr(searchParams.user);
  const folderId = convertParamToStr(searchParams.folder);
  const currentUserId = "649fc0074843a7796910d6f7"; // TODO: 서버 컴포넌트에서 userId 어떻게 얻어??

  if (!sharedUserId) redirect("/");

  // TODO: getFolder, getLink api에서 없는 값으로 요청 시 빈 배열 리턴하도록 수정
  const [sharedUser, links, currentUserFolders] = await Promise.all([
    getUser(sharedUserId),
    getLinks(sharedUserId, folderId),
    getFolders(currentUserId),
  ]);

  let currentFolder: SelectedFolder;
  if (!folderId) currentFolder = { id: "", name: "전체" };
  else {
    const folder = await getFolder(folderId);
    if (!folder) redirect(`/shared?user=${sharedUserId}`);
    currentFolder = { id: folder.id, name: folder.name };
  }

  const foldersOperationValid = currentUserFolders.filter((folder) =>
    checkFolderOperationValid(folder),
  );

  return (
    <>
      <FolderInfo folder={currentFolder} owner={sharedUser} />
      <main>
        <section className={cx("searchBarContainer")}>
          <SearchBar />
        </section>
        {links.length === 0 && (
          <div className={cx("notExistLink")}>저장된 링크가 없습니다.</div>
        )}
        <section className={cx("cardContainer")}>
          {links.map((link) => (
            <Card
              key={link.id}
              link={link}
              menuComponent={
                <OtherCardMenu url={link.url} folders={foldersOperationValid} />
              }
            />
          ))}
        </section>
      </main>
    </>
  );
}
