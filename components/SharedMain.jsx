import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import CardContainer from './CardContainer';
import styles from './SharedMain.module.css';

const SharedMain = ({ cardLinks }) => {
  return (
    <main className={styles.container}>
      <div className={styles.contents}>
        <SearchBar className="mg-bt-40 mobile-mg-bt-40" placeHolder="원하는 링크를 검색해 보세요" />
        <CardContainer cardLinks={cardLinks} />
      </div>
    </main>
  );
};

SharedMain.propTypes = {
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

export default SharedMain;
