"use client";
import styles from "@components/AddPageChip.module.css";
import { useRouter } from "next/navigation";

const AddPageChip = ({ chip, link, isSelected, setIsSelected }) => {
  const router = useRouter();
  const selectHandler = () => {
    setIsSelected(chip);
    router.prefetch(link);
  };

  return (
    <button
      onClick={selectHandler}
      type="button"
      className={chip === isSelected ? styles.selected : styles.button}
    >
      {chip}
    </button>
  );
};

export default AddPageChip;
