import styles from "@folder/Folder.module.css";
import AddLinkBar from "@components/AddLinkBar";
import AddPage from "@components/AddPage";
import SearchBar from "@components/SearchBar";
import CardContainer from "@components/CardContainer";
import UpdateLink from "@components/UpdateLink";

const Folder = () => {
  return (
    <>
      <UpdateLink title="전체" />
      <CardContainer />
    </>
  );
};

export default Folder;
