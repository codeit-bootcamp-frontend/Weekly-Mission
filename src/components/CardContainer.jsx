import styles from "./CardContainer.module.css";
import Card from "@components/Card";

export default function CardContainer({ cardData }) {
  return (
    <div className={styles.cardContainer}>
      {cardData?.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
}
//옵셔널 체이닝