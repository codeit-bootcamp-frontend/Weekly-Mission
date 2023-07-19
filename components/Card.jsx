import Link from "next/link";
import Star from "@/components/Star";
import styles from "@/components/Card.module.css";

export default function Card({ link }) {
  const { createdAt, url, title, description, imageSource } = link;
  return (
    <div className={styles.card}>
      <Star className={styles.star} />
      <Link className={styles.link} href={url}>
        <div classsName={styles.cardImage}>
          <img
            className={styles.cardImage}
            fill
            src={imageSource}
            alt={title}
          />
        </div>
        <div className={styles.cardInfo}>
          <div>10 minutes ago</div>
          <div>{description}</div>
          <div>{createdAt}</div>
        </div>
      </Link>
    </div>
  );
}
