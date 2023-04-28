import React, { useEffect, useState } from 'react';
import getCardData from '../../api/getCardData';
import avatar from '../../assets/Avatar.png';
import SharedCard from './SharedCard';
import styles from './SharedContainer.module.css';

const SharedContainer = () => {
  const [cardList, setCardList] = useState([]);

  const handleGetCardData = async () => {
    const { folder } = await getCardData();
    const { links } = folder;
    setCardList(links);
  };

  useEffect(() => {
    handleGetCardData();
  }, []);

  return (
    <div>
      <div>
        <div className={styles.user}>
          <img className="icon" src={avatar} alt="icon" />
          <p className="user-name"></p>
          <p className="favorite"></p>
        </div>
        <div className={styles.container}>
          {cardList.map((link) => (
            <SharedCard link={link} key={link.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharedContainer;
