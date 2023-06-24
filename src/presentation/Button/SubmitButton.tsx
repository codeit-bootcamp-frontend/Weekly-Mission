import styles from "./submit-button.module.css";

interface SubmitButtonProps {
  buttonType: string;
  buttonText: string;
}

const SubmitButton = ({ buttonType, buttonText }: SubmitButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[buttonType]}`} type="submit">
      {buttonText}
    </button>
  );
};

export default SubmitButton;
