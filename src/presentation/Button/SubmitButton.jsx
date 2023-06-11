import styles from "./submit-button.module.css";

const SubmitButton = ({ buttonType, buttonText }) => {
  return (
    <button className={`${styles.button} ${styles[buttonType]}`} type="submit">
      {buttonText}
    </button>
  );
};

export default SubmitButton;
