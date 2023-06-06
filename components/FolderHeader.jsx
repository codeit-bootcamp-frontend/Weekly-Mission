import PropTypes from 'prop-types';
import AddLinkBar from './AddLinkBar';
import styles from './FolderHeader.module.css';

const FolderHeader = ({ exceedThreshold = false }) => {
  return (
    <article className={`${styles.folderHeader} ${exceedThreshold ? styles.bottomHeader : ''}`}>
      <div className={styles.folderContainer}>
        <AddLinkBar />
      </div>
    </article>
  );
};

FolderHeader.propTypes = {
  exceedThreshold: PropTypes.bool,
};

export default FolderHeader;
