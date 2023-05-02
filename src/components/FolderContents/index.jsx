import { useCallback } from 'react';
import styles from './folderContents.module.css';
import SearchBar from '@/components/SearchBar';
import Card from '@/components/Card';
import useUserLibrary from '@/hooks/useUserLibrary';

const FolderContents = () => {
  const [userFolder] = useUserLibrary('folder', `${import.meta.env.VITE_BASE_URL}/api/sample/folder`);

  const handleToggleCardAsterisk = useCallback((e) => {
    const cardAsterisk = e.target.closest('.cardAsterisk');
    if (!cardAsterisk) return;

    switch (true) {
      case cardAsterisk.getAttribute('src') === '/assets/card-asterisk.svg':
        cardAsterisk.setAttribute('src', '/assets/card-asterisk-check.svg');
        break;
      case cardAsterisk.getAttribute('src') === '/assets/card-asterisk-check.svg':
        cardAsterisk.setAttribute('src', '/assets/card-asterisk.svg');
        break;
    }
  }, []);

  return (
    <main className={`${styles.main}`}>
      {userFolder && (
        <div className={`${styles.hero} ${styles.inner}`}>
          <div className={`${styles.codeitAvatar}`}>
            <img src={userFolder?.owner?.profileImageSource} alt="Owner Avatar" />
          </div>
          <span className={`${styles.atsign}`}>@{userFolder?.owner?.name}</span>
          <span className={`${styles.marks}`}>{userFolder?.name}</span>
        </div>
      )}
      <div className={`${styles.contents}`}>
        <SearchBar />
        <div onClick={handleToggleCardAsterisk} className={`${styles.cardContainer} ${styles.inner}`}>
          {userFolder?.links?.map((link) => (
            <Card key={link.id} link={link} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FolderContents;
