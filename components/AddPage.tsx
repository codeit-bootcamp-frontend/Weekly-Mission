import styles from "@/components/AddPage.module.css";
import FolderLink from "@/components/folderLink/FolderLink";
import AddLinkBtn from "@/components/AddLinkBtn";

const AddPage = () => {
  return (
    <div className={styles.page}>
      <FolderLink />
      <AddLinkBtn />
    </div>
  );
};

export default AddPage;
