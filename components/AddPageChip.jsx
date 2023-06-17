"use client";
import styles from "@components/AddPageChip.module.css";
import { useParams, useRouter } from "next/navigation";

const AddPageChip = ({ link }) => {
  const { id, name } = link;
  const router = useRouter();
  const params = useParams();

  let route = "";

  switch (id) {
    case 0:
      route = "folder";
      break;
    case 1:
      route = "folder/1";
      break;
    case 12:
      route = "folder/2";
      break;
    case 14:
      route = "folder/3";
      break;
    case 16:
      route = "folder/4";
      break;
    case 17:
      route = "folder/5";
  }

  const selectHandler = () => {
    router.push(route);
  };

  console.log(params);

  return (
    <button
      type="button"
      className={
        params.link == route.split("").pop() ||
        (id === 0 && !Object.keys(params).length)
          ? styles.selected
          : styles.button
      }
      onClick={selectHandler}
    >
      {name}
    </button>
  );
};

export default AddPageChip;
