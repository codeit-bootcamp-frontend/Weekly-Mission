import { Children } from "$/types";
import styles from "./input-box.module.css";

const Input = ({ children }: Children) => {
  return <div className={styles.input}>{children}</div>;
};

export default Input;
