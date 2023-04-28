import React, { Fragment, useEffect, useState } from 'react';
import getCardData from '@api/getCardData';
import avatar from '@assets/Avatar.png';
import SharedCard from '@pages/shared/SharedCard.jsx';
import styles from '@pages/shared/SharedContainer.module.css';
import SearchBar from '../../components/SearchBar';

const SharedContainer = () => {
  const [cardList, setCardList] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  const handleGetCardData = async () => {
    const { folder } = await getCardData();
    const { links } = folder;
    setUserInfo(folder);
    setCardList(links);
  };

  useEffect(() => {
    handleGetCardData();
  }, []);

  return (
    <Fragment>
      <div className={styles.user}>
        <img className={styles.icon} src={avatar} alt="icon" />
        <p className="user-name">{userInfo?.owner.name}</p>
        <p className={styles.favorite}>{userInfo?.name}</p>
      </div>
      <div className={styles['main-container']}>
        <SearchBar />
        <div className={styles.container}>
          {cardList.map((link) => (
            <SharedCard link={link} key={link.id} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default SharedContainer;
