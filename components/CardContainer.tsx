import styles from "@components/CardContainer.module.css";
import SharedCard from "@shared/SharedCard";

const getFolder = async () => {
  const result = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder",
    { cache: "no-store" }
  );
  return result.json();
};

const CardContainer = async () => {
  let folder = await getFolder();

  return (
    <div className={styles["main-container"]}>
      <div className={styles.container}>
        {folder.data.folder.links.map((link) => (
          <SharedCard link={link} key={link.id} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
