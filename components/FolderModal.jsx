import { useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import closeIcon from '@/public/close.svg';
import ModalEditFolder from './ModalEditFolder';
import ModalAddFolder from './ModalAddFolder';
import ModalShareFolder from './ModalShareFolder';
import ModalDeleteFolder from './ModalDeleteFolder';
import ModalDeleteLink from './ModalDeleteLink';
import ModalAddToFolder from './ModalAddToFolder';
import styles from './FolderModal.module.css';

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

  const options = {
    editFolder: <ModalEditFolder />,
    addFolder: <ModalAddFolder />,
    shareFolder: <ModalShareFolder />,
    deleteFolder: <ModalDeleteFolder />,
    deleteLink: <ModalDeleteLink />,
    addToFolder: <ModalAddToFolder />,
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        {options[option]}
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
