import React from 'react';
import kebab from '@assets/kebab.png';
import styles from './SharedCard.module.css';
import defaultCardImage from '@assets/defaultImage.png';
import { timeForToday } from '@lib/timeForToday';
import { getToday } from '@lib/createdAt';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SharedCard = ({ link }) => {
  const { createdAt, url, description, imageSource } = link;
  const [isClick, setIsClick] = useState(false);

  const handleIsClick = (e) => {
    e.preventDefault();
    setIsClick(!isClick);
  };

  return (
    <Link to={url} className={styles.card}>
      <div className={styles['img-box']}>
        <img
          className={styles['card-img']}
          src={imageSource || defaultCardImage}
          alt="card"
        />
        <div
          onClick={handleIsClick}
          className={isClick ? styles.click : styles.star}
        ></div>
      </div>
      <div className={styles['p-box']}>
        <div className={styles['post-time']}>
          <p className="postTimeComparison">{timeForToday(createdAt)}</p>
          <div className="kabab-box">
            <img src={kebab} alt="kabab" />
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles['post-date']}>{getToday(createdAt)}</p>
      </div>
    </Link>
  );
};

export default SharedCard;
