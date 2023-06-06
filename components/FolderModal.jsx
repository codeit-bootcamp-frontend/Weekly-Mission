import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './FolderModal.module.css';
import closeIcon from '@/public/close.svg';

const FolderModal = ({ option, closeModal }) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains(styles.modalOverlay)) {
        closeModal();
      }
    };

    const handleEscKey = (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [closeModal]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        {option}
        <button className={styles.closeButton} type="button" onClick={closeModal}>
          <Image
            fill
            src={closeIcon}
            alt="Close"
          />
        </button>
      </div>
    </div>
  );
};

FolderModal.propTypes = {
  option: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default FolderModal;
