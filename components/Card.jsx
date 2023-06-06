import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Card.module.css';
import getFormattedDate from '@/lib/getFormattedDate';
import getElapsedTime from '@/lib/getElapsedTime';
import defaultCardImage from '@/public/default-card-image.svg';
import kebabImage from '@/public/kebab.svg';
import BookmarkIcon from './BookmarkIcon';

const Card = ({ link, clickKebab }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const elapsedTime = getElapsedTime(link.createdAt);
  const formattedCreatedAt = getFormattedDate(link.createdAt);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleBookmarkToggler = (e) => {
    e.preventDefault();
    setBookmark((prevState) => { return !prevState; });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${styles.container} ${isHovered ? styles.hovered : ''}`}
    >
      <Link href={link.url} target="_blank">
        <div className={`${styles.cardImage} ${isHovered ? styles.hovered : ''}`}>
          <Image
            fill
            src={link.imageSource || defaultCardImage}
            alt={link.title}
          />
        </div>
        <div className={styles.cardText}>
          <div className={styles.firstLine}>
            <div className={styles.elapsedTime}>{elapsedTime}</div>
            <button type="button" className={styles.kebab} onClick={clickKebab}>
              <Image
                fill
                src={kebabImage}
                alt="Kebab"
              />
            </button>
          </div>
          <div className={styles.cardDescription}>{link.description}</div>
          <div className={styles.cardCreatedAt}>{formattedCreatedAt}</div>
        </div>
      </Link>
      <BookmarkIcon
        className={styles.bookmarkIcon}
        Bookmark={bookmark}
        handleToggler={handleBookmarkToggler}
      />
    </div>
  );
};

Card.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.number,
    createdAt: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    imageSource: PropTypes.string,
  }).isRequired,
  clickKebab: PropTypes.func.isRequired,
};

export default Card;
