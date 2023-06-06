import PropTypes from 'prop-types';
import Card from './Card';
import styles from './CardContainer.module.css';

const CardContainer = ({ cardLinks, handleDeleteLink, handleAddToFolder }) => {
  return (
    <div className={styles.container}>
      {cardLinks.map((cardLink) => {
        return (
          <Card
            key={cardLink.id}
            link={cardLink}
            handleDeleteLink={handleDeleteLink}
            handleAddToFolder={handleAddToFolder}
          />
        );
      })}
    </div>
  );
};

CardContainer.propTypes = {
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
  handleDeleteLink: PropTypes.func.isRequired,
  handleAddToFolder: PropTypes.func.isRequired,
};

export default CardContainer;
