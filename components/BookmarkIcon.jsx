import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './BookmarkIcon.module.css';
import FilledStar from '@/public/star-filled.svg';
import Star from '@/public/star.svg';

const BookmarkIcon = ({ className = '', Bookmark, handleToggler }) => {
  const src = Bookmark ? FilledStar : Star;

  return (
    <button className={`${styles.icon} ${className}`} type="button" onClick={handleToggler}>
      <Image
        fill
        src={src}
        alt="Bookmark Icon"
      />
    </button>
  );
};

BookmarkIcon.propTypes = {
  className: PropTypes.string,
  Bookmark: PropTypes.bool.isRequired,
  handleToggler: PropTypes.func.isRequired,
};

export default BookmarkIcon;
