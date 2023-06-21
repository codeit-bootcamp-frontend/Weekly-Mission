import Card from "@/components/Card";
import styles from "@/shared/SharedContainer.module.css";
import SearchBar from "@/components/SearchBar";
import { PropsType } from "@/library/propsType";

interface linkType {
  id: number;
  created_at: string;
  updated_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
}

const getUser = async (id = 5) => {
  const result = await fetch(`https://bootcamp-api.codeit.kr/api/users/${id}`, {
    cache: "no-store",
  });
  return result.json();
};

const getFolder = async (user = 1, folder = 1) => {
  const result = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${user}/folders/${folder}`,
    { cache: "no-store" }
  );
  return result.json();
};

const getData = async (user = 1, folder = 1) => {
  const result = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${user}/links?folderId=${folder}`,
    { cache: "no-store" }
  );
  return result.json();
};

const SharedContainer = async (props: PropsType) => {
  const userId = props.searchParams.user;
  const folderId = props.searchParams.folder;
  let user = await getUser(+userId);
  let folder = await getFolder(+userId);
  let data = await getData(+userId, +folderId);
  console.log(data);
  return (
    <>
      <div className={styles.user}>
        <img
          className={styles.icon}
          src={user.data[0].image_source}
          alt="icon"
        />
        <p className={styles["user-name"]}>{user.data[0].name}</p>
        <p className={styles.favorite}>{folder?.data[0]?.name}</p>
      </div>
      <div className={styles["main-container"]}>
        <SearchBar />
      </div>
      <div className={styles["main-container"]}>
        <div className={styles.container}>
          {!data.distinctData.length && <p>망했죠?</p>}
          {data.distinctData.map((link: linkType) => (
            <Card link={link} key={link.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SharedContainer;
