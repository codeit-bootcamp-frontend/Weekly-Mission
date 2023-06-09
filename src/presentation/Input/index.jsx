import styles from "./input-box.module.css";

const Input = ({ children }) => {
  return <div className={styles.input}>{children}</div>;
};

export default Input;
