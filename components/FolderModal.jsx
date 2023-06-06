import PropTypes from 'prop-types';
import styles from './FolderModal.module.css';

const FolderModal = ({ option, closeModal }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        {option}
        <button type="button" onClick={closeModal}>x</button>
      </div>
    </div>
  );
};

FolderModal.propTypes = {
  option: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default FolderModal;
