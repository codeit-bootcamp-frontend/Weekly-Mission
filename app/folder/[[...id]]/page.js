import styles from "./page.module.css";
import classNames from "classnames/bind";
import FolderList from "@/components/FolderList/FolderList";
import CardList from "@/components/CardList/CardList";
import SearchBar from "@/components/SearchBar/SearchBar";
import { getFolders } from "@/api/instance";
// import { connectDB } from "@/api/database";
// import { getFolderList, getCardList } from "@/api/instance";
// import dbConnect from "@/dbConnect";
// import { FolderModel } from "@/lib/models/folder";

const cx = classNames.bind(styles);
// const ObjectId = require("mongodb").ObjectId;
const userId = "64992eec930d7d6257c06f19";

export default async function Page({ params }) {
  // let db = (await connectDB).db("linkbrary");
  // let folderList = await db.collection("folder").find().toArray();
  const currentIdParam = params.id && params.id[0];
  const folderList = await getFolders(userId); //1. no-cache
  // 3. all-link 받아서 filter해서 prop넘겨주기

  // const currentFolder = folderList.filter((obj) => obj._id === currentIdParam); 
  // const cardList = await getCardList(userId, currentIdParam);
  // const currentFolderName = currentFolder ? currentFolder.name : "전체";

  return (
    <div className={cx("wrapper")}>
      <div className={cx("search-bar")}>
        <SearchBar />
      </div>
      <div className={cx("folder-wrapper")}>
        <FolderList folderList={folderList} currentIdParam={currentIdParam} /> 
        {/* 안에 서치바 */}
      </div>
      {/* <CardList cardList={cardList} currentFolderName={currentFolderName} /> */}
    </div>
  );
}
