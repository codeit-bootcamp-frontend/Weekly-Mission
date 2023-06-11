import { Children } from "$/types";
import styles from "./drop-down.module.css";

const DropDown = ({ children }: Children) => {
  return <div className={styles.dropDownWrapper}>{children}</div>;
};

export default DropDown;
