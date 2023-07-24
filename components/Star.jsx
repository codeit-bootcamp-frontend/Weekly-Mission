import styles from "@/components/Star.module.css";

export default function Star() {
  return (
    <>
      <img className={styles.star} src="/images/star-default.svg" />
      <img className={styles.star} src="/images/star-selected.svg" />
    </>
  );
}
