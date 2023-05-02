import { useCallback } from 'react';
import styles from './card.module.css';
import PropTypes from 'prop-types';
import beautifyDate from '@/utils/beautifyDate';

const Card = ({ link }) => {
  const [beautifiedDate, beautifiedTimeDiff] = beautifyDate(link.createdAt);

  const handleNavigateCardLink = useCallback(
    (e) => {
      if (e.target.closest('.cardAsterisk')) return;
      window.open(link.url);
    },
    [link.url],
  );

  return (
    <div className={`${styles.card}`} onClick={handleNavigateCardLink}>
      <div className={`${styles.cardAsterisk}`}>
        <img className={`cardAsterisk`} src={'/assets/card-asterisk.svg'} alt="Card Asterisk" />
      </div>
      <div className={`${styles.cardImgTop}`}>
        <img src={link.imageSource ? link.imageSource : '/assets/image-dummy.png'} alt={link.title} />
      </div>
      <div className={`${styles.cardCaption}`}>
        <div className={`${styles.info}`}>
          <span className={`${styles.time}`}>{beautifiedTimeDiff}</span>
          <div className={`${styles.more}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <p className={`${styles.text}`}>{link.description}</p>
        <div className={`${styles.creation}`}>{beautifiedDate}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  link: PropTypes.object,
};

export default Card;
