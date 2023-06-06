import PropTypes from 'prop-types';
import styles from './FolderHeader.module.css';
import AddLinkBar from './AddLinkBar';

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
