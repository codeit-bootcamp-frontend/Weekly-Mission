import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { CARD_PROP_TYPES } from '@/lib/constants';
import SearchBar from './SearchBar';
import CardContainer from './CardContainer';
import SortButton from './SortButton';
import ModalTemplate from './ModalTemplate';
import shareIcon from '@/public/share.svg';
import penIcon from '@/public/pen.svg';
import deleteIcon from '@/public/delete.svg';
import styles from './FolderMain.module.css';

const FolderMain = ({ endPoint, cardLinks, exceedThreshold = false }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOption, setModalOption] = useState('');

  const titles = {
    '': '전체',
    favorites: '⭐️ 즐겨찾기',
    1: '코딩 팁',
    2: '채용 사이트',
    3: '유용한 글',
    4: '나만의 장소',
  };

  const openModal = (option) => {
    setModalOpen(true);
    setModalOption(option);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalOption('');
  };

  const title = titles[endPoint];

  return (
    <main className={styles.container}>
      <div className={styles.contents}>
        <SearchBar className="mg-bt-40 mobile-mg-bt-40" placeHolder="제목을 검색해 보세요" />
        <div className={styles.firstLine}>
          <div className={styles.buttons}>
            <Link href="/folder">
              <SortButton fill={endPoint === ''}>전체</SortButton>
            </Link>
            <Link href="/folder/favorites">
              <SortButton fill={endPoint === 'favorites'}>⭐️ 즐겨찾기</SortButton>
            </Link>
            <Link href="/folder/1">
              <SortButton fill={endPoint === '1'}>코딩 팁</SortButton>
            </Link>
            <Link href="/folder/2">
              <SortButton fill={endPoint === '2'}>채용 사이트</SortButton>
            </Link>
            <Link href="/folder/3">
              <SortButton fill={endPoint === '3'}>유용한 글</SortButton>
            </Link>
            <Link href="/folder/4">
              <SortButton fill={endPoint === '4'}>나만의 장소</SortButton>
            </Link>
          </div>
          <button type="button" className={styles.addFolder} onClick={() => { return openModal('addFolder'); }}>폴더 추가 +</button>
          <button type="button" className={styles.addFolderMobile} onClick={() => { return openModal('addFolder'); }}>폴더 추가 +</button>
        </div>
        <div className={`${styles.secondLine} ${exceedThreshold ? styles.hide : ''}`}>
          <h3 className={styles.slTitle}>{title}</h3>
          <div className={styles.slOption}>
            <button className={styles.optionButton} type="button" onClick={() => { return openModal('shareFolder'); }}>
              <Image
                src={shareIcon}
                width={18}
                height={18}
                alt="Share"
              />
              <p>공유</p>
            </button>
            <button className={styles.optionButton} type="button" onClick={() => { return openModal('editFolder'); }}>
              <Image
                src={penIcon}
                width={18}
                height={18}
                alt="Edit"
              />
              <p>이름 변경</p>
            </button>
            <button className={styles.optionButton} type="button" onClick={() => { return openModal('deleteFolder'); }}>
              <Image
                src={deleteIcon}
                width={18}
                height={18}
                alt="Delete"
              />
              <p>삭제</p>
            </button>
          </div>
        </div>
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

FolderMain.propTypes = {
  endPoint: PropTypes.string.isRequired,
  cardLinks: PropTypes.arrayOf(PropTypes.shape(CARD_PROP_TYPES)).isRequired,
  exceedThreshold: PropTypes.bool,
};

export default FolderMain;
