import AddPageChip from "@components/AddPageChip";

const getFolderLink = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders"
  );
  return response.json();
};

const FolderLink = async () => {
  const folderLink = await getFolderLink();
  // className={styles["chip-box"]}
  return (
    <div>
      {folderLink.data.map((link) => (
        <AddPageChip link={link} />
      ))}
    </div>
  );
};

export default FolderLink;
