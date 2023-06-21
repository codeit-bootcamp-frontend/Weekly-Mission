import AddPageChip from "@/components/AddPageChip";
import styles from "@/components/AddPage.module.css";
import { PropsType } from "@/library/propsType";

interface folderType {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
}

const getFolderLink = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders"
  );
  return response.json();
};

const FolderLink = async (props: PropsType) => {
  const folderLink = await getFolderLink();

  const allContent = {
    id: 0,
    created_at: "2023-06-03T20:59:39.293024+00:00",
    name: "전체",
    user_id: 1,
  };

  folderLink.data.unshift(allContent);

  return (
    <div className={styles["chip-box"]}>
      {folderLink.data.map((link: folderType) => (
        <AddPageChip link={link} key={link.id} />
      ))}
    </div>
  );
};

export default FolderLink;
