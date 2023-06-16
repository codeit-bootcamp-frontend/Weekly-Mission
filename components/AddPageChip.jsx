"use client";
import styles from "@components/AddPageChip.module.css";
import { useRouter } from "next/navigation";

const AddPageChip = ({ link }) => {
  const { id, name } = link;
  const router = useRouter();

  const selectHandler = () => {
    let route = "";
    switch (id) {
      case 1:
        route = "folder";
        break;
      case 12:
        route = "folder/1";
        break;
      case 14:
        route = "folder/2";
        break;
      case 16:
        route = "folder/3";
        break;
      case 17:
        route = "folder/4";
    }
    router.push(route);
  };
  // className={chip === isSelected ? styles.selected : styles.button}

  return (
    <button type="button" onClick={selectHandler}>
      {name}
    </button>
  );
};

export default AddPageChip;
