import PropTypes from 'prop-types';
import styles from './SharedMain.module.css';
import SearchBar from '@/components/SearchBar';
import CardContainer from '@/components/CardContainer';

const sharedMain = ({ cardLinks }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <SearchBar />
        <CardContainer cardLinks={cardLinks} />
      </div>
    </div>
  );
};

sharedMain.propTypes = {
  cardLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      createdAt: PropTypes.string,
      url: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      imageSource: PropTypes.string,
    }),
  ).isRequired,
};

export default sharedMain;
