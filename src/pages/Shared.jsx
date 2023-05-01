import { useState, useEffect } from "react";
import styles from "/src/pages/Shared.module.css";
import folderData from "/src/api/folderapi.js";
import Gnb from "/src/components/Gnb.jsx";
import SearchBar from "/src/components/SearchBar.jsx";
import Card from "/src/components/Card.jsx";
import Footer from "/src/components/Footer.jsx";
import Avatar from "/src/assets/Avatar.png";

function Shared() {
  const [data, setdata] = useState({
    count: null,
    id: null,
    links: [],
    name: '⭐️ 즐겨찾기',
    owner : {
      id : null,
      name : "@코드잇",
      profileImageSource: Avatar
    }
  });
  
  useEffect(() => {
    async function fetchData() {
      const data = await folderData();
      const {folder} = data
      setdata(folder);
    }
    fetchData();
  }, []);

  return (
    <>
      <Gnb />
      <section className={styles.banner}>
        <div className={styles.bannerContainer}>
          <div className={styles.user}>
            <img
              className={styles.userProfileImage}
              src={data.owner.profileImageSource}
            />
            <div className={styles.userName}>{data.owner.name}</div>
          </div>
          <div className={styles.bookmark}>
            <h2 className={styles.bannerTitle}>{data.name}</h2>
          </div>
        </div>
      </section>
      <section className={styles.contents}>
        <SearchBar styles={styles} />
        <div className={styles.cardContainer}>
          {data.links.map((item) => {
            return <Card links={item} key={item.id} />;
          })}
        </div>
      </section>
     <Footer />
    </>
  );
}

export default Shared;
