import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './FolderMain.module.css';
import SearchBar from './SearchBar';
import CardContainer from './CardContainer';
import SortButton from './SortButton';
import shareIcon from '@/public/share.svg';
import penIcon from '@/public/pen.svg';
import deleteIcon from '@/public/delete.svg';

const FolderMain = ({ endPoint, cardLinks, exceedThreshold = false }) => {
  let title = '';
  switch (endPoint) {
    case 'favorites':
      title = '⭐️ 즐겨찾기';
      break;
    case '1':
      title = '코딩 팀';
      break;
    case '2':
      title = '채용 사이트';
      break;
    case '3':
      title = '유용한 글';
      break;
    case '4':
      title = '나만의 장소';
      break;
    default:
      title = '전체';
      break;
  }

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
          <button type="button" className={styles.addFolder}>폴더 추가 +</button>
          <button type="button" className={styles.addFolderMobile}>폴더 추가 +</button>
        </div>
        <div className={`${styles.secondLine} ${exceedThreshold ? styles.hide : ''}`}>
          <h3 className={styles.slTitle}>{title}</h3>
          <div className={styles.slOption}>
            <button className={styles.optionButton} type="button">
              <Image
                src={shareIcon}
                width={18}
                height={18}
                alt="Share"
              />
              <p>공유</p>
            </button>
            <button className={styles.optionButton} type="button">
              <Image
                src={penIcon}
                width={18}
                height={18}
                alt="Share"
              />
              <p>이름 변경</p>
            </button>
            <button className={styles.optionButton} type="button">
              <Image
                src={deleteIcon}
                width={18}
                height={18}
                alt="Share"
              />
              <p>삭제</p>
            </button>
          </div>
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
  exceedThreshold: PropTypes.bool,
};

export default FolderMain;
