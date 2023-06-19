import styles from "@components/CardContainer.module.css";
import Card from "@components/Card";

const getFolder = async (userId = 1, folderId = 1) => {
  const result = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/links?folder=${folderId}`,
    { cache: "no-store" }
  );
  return result.json();
};

const CardContainer = async (props) => {
  let folder = await getFolder(1, 1);

  return (
    <div className={styles["main-container"]}>
      <div className={styles.container}>
        {folder.distinctData.map((link) => (
          <Card link={link} key={link.id} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
