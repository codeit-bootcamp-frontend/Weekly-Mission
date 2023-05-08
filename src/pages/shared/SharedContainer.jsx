import React, { Fragment, useEffect, useState } from 'react';
import avatar from '@assets/Avatar.png';
import SharedCard from '@pages/shared/SharedCard.jsx';
import styles from '@pages/shared/SharedContainer.module.css';
import SearchBar from '@components/SearchBar';
import useHttp from '@hooks/use-Http';

const { VITE_CARDINFO_API } = import.meta.env;

const SharedContainer = () => {
  const [cardList, setCardList] = useState([]);

  const { isLoading, error, sendRequest: getCardList } = useHttp(setCardList);

  useEffect(() => {
    getCardList({ url: VITE_CARDINFO_API });
  }, [getCardList]);

  return (
    <Fragment>
      <div className={styles.user}>
        <img
          className={styles.icon}
          src={cardList?.folder?.owner?.profileImageSource}
          alt="icon"
        />
        <p className="user-name">{cardList?.folder?.owner?.name}</p>
        <p className={styles.favorite}>{cardList?.folder?.name}</p>
      </div>
      <div className={styles['main-container']}>
        <SearchBar />
        <div className={styles.container}>
          {cardList?.folder?.links.map((link) => (
            <SharedCard link={link} key={link.id} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default SharedContainer;
