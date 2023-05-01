import { useState, useEffect } from "react";
import styles from "./Shared.module.css";
import folderData from "../api/folderapi";
import Gnb from "../components/gnb";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Footer from "../components/footer";
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

  console.log(data)

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
