import React from "react";
import styles from "./Card.module.css";
import Star from "./Star";

function Card() {
  return (
    <article className={styles.card}>
      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <div className={styles.imageContainer}>
          <div className={styles.cardImg}></div>
          <div className={styles.star}>
            <Star />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.passedTime}>10 minutes ago</div>
          <button className={styles.btnMore} />
          <h2 className={styles.content}>
            Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
            consequat. Lorem ipsum dolor sit amet consectetur. Metus amet
            habitant nunc consequat.
          </h2>
          <div className={styles.createdDate}>2023. 3. 15</div>
        </div>
      </a>
    </article>
  );
}

export default Card;
