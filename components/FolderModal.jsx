import { useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import closeIcon from '@/public/close.svg';
import ModalEditFolder from './Modals/ModalEditFolder';
import ModalAddFolder from './Modals/ModalAddFolder';
import ModalShareFolder from './Modals/ModalShareFolder';
import ModalDeleteFolder from './Modals/ModalDeleteFolder';
import ModalDeleteLink from './Modals/ModalDeleteLink';
import ModalAddToFolder from './Modals/ModalAddToFolder';
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
    editFolder: ModalEditFolder,
    addFolder: ModalAddFolder,
    shareFolder: ModalShareFolder,
    deleteFolder: ModalDeleteFolder,
    deleteLink: ModalDeleteLink,
    addToFolder: ModalAddToFolder,
  };

  const SelectedModal = options[option];

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <SelectedModal />
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
