import Card from "@components/Card";
import styles from "@shared/SharedContainer.module.css";
import SearchBar from "@components/SearchBar";
import axios from "axios";

const getUser = async () => {
  const result = await fetch("https://bootcamp-api.codeit.kr/api/sample/user", {
    cache: "no-store",
  });
  return result.json();
};

const getFolder = async () => {
  const result = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder",
    { cache: "no-store" }
  );
  return result.json();
};

const SharedContainer = async () => {
  let user = await getUser();
  let folder = await getFolder();
  return (
    <>
      <div className={styles.user}>
        <img
          className={styles.icon}
          src={user.data.profileImageSource}
          alt="icon"
        />
        <p className={styles["user-name"]}>{folder.data.folder.owner.name}</p>
        <p className={styles.favorite}>{folder.data.folder.name}</p>
      </div>
      <div className={styles["main-container"]}>
        <SearchBar />
      </div>
      <div className={styles["main-container"]}>
        <div className={styles.container}>
          {folder.data.folder.links.map((link) => (
            <Card link={link} key={link.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SharedContainer;
