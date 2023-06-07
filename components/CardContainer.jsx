import PropTypes from 'prop-types';
import { CARD_PROP_TYPES } from '@/lib/constants';
import Card from './Card';
import styles from './CardContainer.module.css';

const CardContainer = ({ cardLinks, handleDeleteLink, handleAddToFolder }) => {
  const renderCard = (cardLink) => {
    return (
      <Card
        key={cardLink.id}
        link={cardLink}
        handleDeleteLink={handleDeleteLink}
        handleAddToFolder={handleAddToFolder}
      />
    );
  };

  return (
    <div className={styles.container}>
      {cardLinks.map(renderCard)}
    </div>
  );
};

CardContainer.propTypes = {
  cardLinks: PropTypes.arrayOf(PropTypes.shape(CARD_PROP_TYPES)).isRequired,
  handleDeleteLink: PropTypes.func.isRequired,
  handleAddToFolder: PropTypes.func.isRequired,
};

export default CardContainer;
