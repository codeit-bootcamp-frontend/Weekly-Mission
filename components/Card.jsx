import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import getFormattedDate from '@/lib/getFormattedDate';
import getElapsedTime from '@/lib/getElapsedTime';
import { CARD_PROP_TYPES, KEY_CODES } from '@/lib/constants';
import defaultCardImage from '@/public/default-card-image.svg';
import kebabImage from '@/public/kebab.svg';
import BookmarkIcon from './BookmarkIcon';
import styles from './Card.module.css';

const Card = ({ link, handleDeleteLink, handleAddToFolder }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isKebabClicked, setIsKebabClicked] = useState(false);
  const kebabRef = useRef(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const elapsedTime = getElapsedTime(link.createdAt);
  const formattedCreatedAt = getFormattedDate(link.createdAt);

  const handleHover = (value) => {
    return () => {
      setIsHovered(value);
    };
  };

  const toggleKebabClick = (e) => {
    e.preventDefault();
    setIsKebabClicked((prev) => { return !prev; });
  };

  const handleOutsideClick = (e) => {
    if (
      kebabRef.current
      && !kebabRef.current.contains(e.target)
    ) {
      setIsKebabClicked(false);
    }
  };

  const handleEscKey = (e) => {
    if (e.keyCode === KEY_CODES.ESC) {
      setIsKebabClicked(false);
    }
  };

  const handleBookmarkToggler = (e) => {
    e.preventDefault();
    setIsBookmarked((prevState) => { return !prevState; });
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div
      onMouseEnter={handleHover(true)}
      onMouseLeave={handleHover(false)}
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
            <div className={styles.kebabContainer} ref={kebabRef}>
              <button
                type="button"
                className={styles.kebab}
                onClick={toggleKebabClick}
              >
                <Image
                  fill
                  src={kebabImage}
                  alt="Menu Icon"
                />
              </button>
              {isKebabClicked && (
              <div className={styles.popup}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteLink();
                  }}
                >
                  삭제하기
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToFolder();
                  }}
                >
                  폴더에 추가
                </button>
              </div>
              )}
            </div>
          </div>
          <div className={styles.cardDescription}>{link.description}</div>
          <div className={styles.cardCreatedAt}>{formattedCreatedAt}</div>
        </div>
      </Link>
      <BookmarkIcon
        className={styles.bookmarkIcon}
        isBookmarked={isBookmarked}
        handleToggler={handleBookmarkToggler}
      />
    </div>
  );
};

Card.propTypes = {
  link: PropTypes.shape(CARD_PROP_TYPES).isRequired,
  handleDeleteLink: PropTypes.func.isRequired,
  handleAddToFolder: PropTypes.func.isRequired,
};

export default Card;
