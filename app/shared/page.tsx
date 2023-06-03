import SharedCard from "@shared/SharedCard";
import styles from "@shared/SharedContainer.module.css";
import Image from "next/image";
import SearchBar from "@components/SearchBar";
import axios from "axios";

const getUser = async () => {
  const result = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
  return result.json();
};

const getFolder = async () => {
  const result = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  return result.json();
};

const SharedContainer = async () => {
  let user = await getUser();
  let folder = await getFolder();

  return (
    <>
      <div className={styles.user}>
        <Image
          className={styles.icon}
          src={user.data.profileImageSource}
          alt="icon"
          width={60}
          height={60}
        />
        <p className="user-name">{folder.data.folder.name}</p>
        <p className={styles.favorite}>{folder.data.folder.owner.name}</p>
      </div>
      <div className={styles["main-container"]}>
        <SearchBar />
        <div className={styles.container}>
          {folder.data.folder.links.map((link) => (
            <SharedCard link={link} key={link.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SharedContainer;
