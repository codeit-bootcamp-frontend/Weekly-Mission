import React, { Fragment, useEffect, useState } from 'react';
import getCardData from '@api/getCardData';
import avatar from '@assets/Avatar.png';
import SharedCard from '@pages/shared/SharedCard.jsx';
import styles from '@pages/shared/SharedContainer.module.css';

const SharedContainer = () => {
  const [cardList, setCardList] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  const handleGetCardData = async () => {
    const { folder } = await getCardData();
    const { links } = folder;
    console.log(folder);
    setUserInfo(folder);
    setCardList(links);
  };

  useEffect(() => {
    handleGetCardData();
  }, []);

  return (
    <div className={styles['main-container']}>
      <div className={styles.user}>
        <img className={styles.icon} src={avatar} alt="icon" />
        <p className="user-name">{userInfo?.owner.name}</p>
        <p className={styles.favorite}>{userInfo?.name}</p>
      </div>
      <div className={styles.container}>
        {cardList.map((link) => (
          <SharedCard link={link} key={link.id} />
        ))}
      </div>
    </div>
  );
};

export default SharedContainer;
