import { useState } from 'react';
import PropTypes from 'prop-types';
import { CARD_PROP_TYPES } from '@/lib/constants';
import CardContainer from './CardContainer';
import ModalTemplate from './ModalTemplate';
import SearchBar from './SearchBar';
import styles from './SharedMain.module.css';

const SharedMain = ({ cardLinks }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOption, setModalOption] = useState('');

  const openModal = (option) => {
    setModalOpen(true);
    setModalOption(option);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalOption('');
  };

  return (
    <main className={styles.container}>
      <div className={styles.contents}>
        <SearchBar className="mg-bt-40 mobile-mg-bt-32" placeHolder="원하는 링크를 검색해 보세요" />
        {cardLinks.length > 0 ? (
          <CardContainer
            cardLinks={cardLinks}
            handleDeleteLink={() => { return openModal('deleteLink'); }}
            handleAddToFolder={() => { return openModal('addToFolder'); }}
          />
        ) : (
          <div className={styles.emptyMessage}>저장된 링크가 없습니다</div>
        )}
      </div>
      {modalOpen && <ModalTemplate option={modalOption} closeModal={closeModal} />}
    </main>
  );
};

SharedMain.propTypes = {
  cardLinks: PropTypes.arrayOf(PropTypes.shape(CARD_PROP_TYPES)).isRequired,
};

export default SharedMain;
