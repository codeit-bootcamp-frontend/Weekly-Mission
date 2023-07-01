import styles from "./page.module.css";
import classNames from "classnames/bind";
import FolderList from "@/components/FolderList/FolderList";
import CardList from "@/components/CardList/CardList";
import SearchBar from "@/components/SearchBar/SearchBar";
import LinkInput from "@/components/LinkInput/LinkInput";
import { getFolders, getLinks } from "@/api/instance";
// import { connectDB } from "@/api/database";
// import dbConnect from "@/dbConnect";
// import { FolderModel } from "@/lib/models/folder";

const cx = classNames.bind(styles);
// const ObjectId = require("mongodb").ObjectId;
const userId = "64992eec930d7d6257c06f19";

export default async function Page({ params }) {
  // let db = (await connectDB).db("linkbrary");
  // let folderList = await db.collection("folder").find().toArray();
  const currentIdParam = params.id && params.id[0];
  const initialFolderList = await getFolders(userId); //1. no-cache
  // 3. all-link 받아서 filter해서 prop넘겨주기

  const initialCurrentFolder = initialFolderList.filter(
    (folder) => folder._id === currentIdParam
  );
  const cardList = await getLinks(userId, currentIdParam);
  // const currentFolderName = params.id ? currentFolder.name : "전체";

  /*
userId={userId}
      initialFolders={folders}
      initialCurrentFolder={currentFolder}
      initialLinks={filteredLinks}

*/

  return (
    <>
      <div className={cx("banner")}>
        <LinkInput />
      </div>
      <div className={cx("wrapper")}>
        <div className={cx("search-bar")}>
          <SearchBar />
        </div>
        <FolderList
          initialFolderList={initialFolderList}
          initialCurrentFolder={initialCurrentFolder}
          currentIdParam={currentIdParam}
          userId={userId}
        />
        {/* 안에 서치바 */}
        <CardList
          initialFolderList={initialFolderList}
          cardList={cardList}
          currentIdParam={currentIdParam}
          userId={userId}
        />
      </div>
    </>
  );
}
