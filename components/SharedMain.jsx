import PropTypes from 'prop-types';
import styles from './SharedMain.module.css';
import SearchBar from './SearchBar';
import CardContainer from './CardContainer';

const sharedMain = ({ cardLinks }) => {
  return (
    <main className={styles.container}>
      <div className={styles.contents}>
        <SearchBar placeHolder="원하는 링크를 검색해 보세요" />
        <CardContainer cardLinks={cardLinks} />
      </div>
    </main>
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
