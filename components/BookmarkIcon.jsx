import Image from 'next/image';
import PropTypes from 'prop-types';
import Star from '@/public/star.svg';
import FilledStar from '@/public/star-filled.svg';
import styles from './BookmarkIcon.module.css';

const BookmarkIcon = ({ className = '', isBookmarked, handleToggler }) => {
  const src = isBookmarked ? FilledStar : Star;
  const alt = isBookmarked ? 'Filled Bookmark Icon' : 'Empty Bookmark Icon';

  return (
    <button className={`${styles.icon} ${className}`} type="button" onClick={handleToggler}>
      <Image src={src} alt={alt} />
    </button>
  );
};

BookmarkIcon.propTypes = {
  className: PropTypes.string,
  isBookmarked: PropTypes.bool.isRequired,
  handleToggler: PropTypes.func.isRequired,
};

export default BookmarkIcon;
