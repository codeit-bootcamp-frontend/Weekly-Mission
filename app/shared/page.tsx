import getFolderData from "@/lib/getFolderData";
import styles from "./page.module.css";
import Image from "next/image";
import SearchBar from "@/components/SearchBar/searchbar";
import CardWrapper from "@/components/CardWrapper/cardWrapper";

const Shared = async () => {
  const userFolder = await getFolderData();

  return (
    <main className={styles.main}>
      <div className={`${styles.hero} ${styles.inner}`}>
        <div className={styles.codeitAvatar}>
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1199px) 100vw, 100vw"
            src={userFolder.owner.profileImageSource}
            alt="Owner Avatar"
            className={styles.image}
          />
        </div>
        <span className={styles.atsign}>@{userFolder.owner.name}</span>
        <span className={styles.marks}>{userFolder.name}</span>
      </div>

      <div className={styles.contents}>
        <div className={styles.inner}>
          <SearchBar />
          <CardWrapper links={userFolder.links} />
        </div>
      </div>
    </main>
  );
};

export default Shared;
