import styles from "./drop-down.module.css";
const DropDown = ({ children }) => {
  return <div className={styles.dropDownWrapper}>{children}</div>;
};

export default DropDown;
