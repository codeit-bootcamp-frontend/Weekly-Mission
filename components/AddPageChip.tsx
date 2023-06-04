import React from "react";
import styles from "@components/AddPageChip.module.css";

const AddPageChip = ({ chip, isSelected, setIsSelected }) => {
  const selectHandler = () => {
    setIsSelected(chip);
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
