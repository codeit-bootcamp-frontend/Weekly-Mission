import styles from "./page.module.css";
import classNames from "classnames/bind";
import { getFolderList, getCardList } from "@/api/instance";
import FolderList from "@/components/FolderList/FolderList";
import CardList from "@/components/CardList/CardList";
import AddFolder from "@/components/AddFolder/AddFolder";
import SearchBar from "@/components/SearchBar/SearchBar";
import { connectDB } from "@/api/database";

const cx = classNames.bind(styles);
const ObjectId = require("mongodb").ObjectId;
const userId = "1";

export default async function Page({ params }) {
  const currentIdParam = params.id && new ObjectId(params.id[0]);

  let db = (await connectDB).db("linkbrary");
  let folderList = await db.collection("folder").find().toArray();

  const currentFolder = folderList.filter((obj) =>
    obj._id.equals(currentIdParam)
  );
  const cardList = await getCardList(userId, currentIdParam);
  const currentFolderName = currentFolder ? currentFolder.name : "전체";

  return (
    <div className={cx("wrapper")}>
      <div className={cx("search-bar")}>
        <SearchBar />
      </div>
      <div className={cx("folder-wrapper")}>
        <FolderList folderList={folderList} currentIdParam={currentIdParam} />
        <AddFolder />
      </div>
      {/* <CardList cardList={cardList} currentFolderName={currentFolderName} /> */}
    </div>
  );
}

// import { connectDB } from "/util/database.js"

// export default async function Home() {
//   let db = (await connectDB).db('forum');
//   let result = await db.collection('post').find().toArray();

//   let result = (await connectDB).db('linkbrary').collection('folder').find().toArray();

//   return (
//     <main>
//       {result[0].title}
//     </main>
//   )
// }
