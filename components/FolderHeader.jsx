import styles from './SharedHeader.module.css';
import AddLinkBar from './AddLinkBar';

const FolderHeader = () => {
  return (
    <div className={styles.container}>
      <AddLinkBar />
    </div>
  );
};

export default FolderHeader;
