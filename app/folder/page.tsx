import styles from "@folder/Folder.module.css";
import AddLinkBar from "@components/AddLinkBar";
import AddPage from "@components/AddPage";
import SearchBar from "@components/SearchBar";

const Folder = () => {
  return (
    <div>
      <AddLinkBar />
      <div>
        <SearchBar />
        <AddPage />
      </div>
    </div>
  );
};

export default Folder;
