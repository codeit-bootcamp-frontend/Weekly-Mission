import { useEffect, useState } from 'react';
import styles from './FolderHeader.module.css';
import AddLinkBar from './AddLinkBar';

const FolderHeader = () => {
  const [isBottomHeader, setIsBottomHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 222;

      setIsBottomHeader(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <article className={`${styles.folderHeader}  ${isBottomHeader ? styles.bottomHeader : ''}`}>
      <div className={styles.folderContainer}>
        <AddLinkBar />
      </div>
    </article>
  );
};

export default FolderHeader;
