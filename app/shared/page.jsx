import Card from "@components/Card";
import styles from "@shared/SharedContainer.module.css";
import SearchBar from "@components/SearchBar";
import axios from "axios";

const getUser = async (id = 1) => {
  const result = await fetch(`https://bootcamp-api.codeit.kr/api/users/${id}`, {
    cache: "no-store",
  });
  return result.json();
};

const getFolder = async (id = 1) => {
  const result = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/1/folders/1`,
    { cache: "no-store" }
  );
  return result.json();
};

const getData = async (id = 1) => {
  const result = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${id}/links?folderId=1`,
    { cache: "no-store" }
  );
  return result.json();
};

const SharedContainer = async (props) => {
  const userId = props.searchParams.user;
  let user = await getUser(userId);
  let folder = await getFolder(userId);
  let data = await getData(userId);

  return (
    <>
      <div className={styles.user}>
        <img
          className={styles.icon}
          src={user.data[0].image_source}
          alt="icon"
        />
        <p className={styles["user-name"]}>{user.data[0].name}</p>
        <p className={styles.favorite}>{folder.data[0].name}</p>
      </div>
      <div className={styles["main-container"]}>
        <SearchBar />
      </div>
      <div className={styles["main-container"]}>
        <div className={styles.container}>
          {!data.distinctData.length && <p>망했죠?</p>}
          {data.distinctData.map((link) => (
            <Card link={link} key={link.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SharedContainer;
