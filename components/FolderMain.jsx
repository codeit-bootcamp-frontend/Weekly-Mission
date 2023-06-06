import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './FolderMain.module.css';
import SearchBar from './SearchBar';
import CardContainer from './CardContainer';
import SortButton from './SortButton';

const FolderMain = ({ endPoint, cardLinks }) => {
  return (
    <main className={styles.container}>
      <div className={styles.contents}>
        <SearchBar placeHolder="제목을 검색해 보세요" />
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
          <button type="button" className={styles.addFolder}>폴더 추가 +</button>
          <button type="button" className={styles.addFolderMobile}>폴더 추가 +</button>
        </div>
        {cardLinks.length > 0 ? (
          <CardContainer cardLinks={cardLinks} />
        ) : (
          <div className={styles.emptyMessage}>저장된 링크가 없습니다</div>
        )}
      </div>
    </main>
  );
};

FolderMain.propTypes = {
  endPoint: PropTypes.string.isRequired,
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

export default FolderMain;
