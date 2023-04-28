import React from 'react';
import kebab from '../../assets/kebab.png';
import styles from './SharedCard.module.css';
import { timeForToday } from '../../lib/timeForToday';
import { Link, useNavigate } from 'react-router-dom';

const SharedCard = (props) => {
  const navigate = useNavigate();
  const { createdAt, url, title, description, imageSource } = props.link;

  const goToPage = () => {
    navigate(url);
  };
  return (
    <Link to={url} className={styles.card}>
      <div className={styles['img-box']}>
        <img className={styles['card-img']} src={imageSource} alt="card" />
      </div>
      <div className={styles['p-box']}>
        <div className="post-time">
          <p className="postTimeComparison">{timeForToday(createdAt)}</p>
          <div className="dot-box">
            <img src={kebab} alt="kabab" />
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <p className="post-date">{timeForToday(createdAt)}</p>
      </div>
    </Link>
  );
};

export default SharedCard;
